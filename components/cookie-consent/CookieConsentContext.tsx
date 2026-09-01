'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';

export type ConsentValue = 'accepted' | 'rejected';

const STORAGE_KEY = 'fiscet-cookie-consent';

type CookieConsentContextValue = {
  /** null = no decision yet (banner should show) */
  consent: ConsentValue | null;
  /** true once the stored value has been read on the client */
  hydrated: boolean;
  accept: () => void;
  reject: () => void;
  /** clears the stored decision so the banner shows again */
  reopen: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | undefined>(
  undefined
);

export function CookieConsentProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [consent, setConsent] = useState<ConsentValue | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'accepted' || stored === 'rejected') {
        setConsent(stored);
      }
    } catch {
      // localStorage unavailable (private mode, blocked) — treat as no decision
    }
    setHydrated(true);
  }, []);

  const persist = useCallback((value: ConsentValue | null) => {
    setConsent(value);
    try {
      if (value) {
        localStorage.setItem(STORAGE_KEY, value);
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // ignore write failures
    }
  }, []);

  const accept = useCallback(() => persist('accepted'), [persist]);

  const reject = useCallback(() => {
    const wasAccepted = consent === 'accepted';
    persist('rejected');
    // Scripts already injected in this page load can't be pulled back out —
    // reload so Google Analytics stops running.
    if (wasAccepted && typeof window !== 'undefined') {
      window.location.reload();
    }
  }, [consent, persist]);

  const reopen = useCallback(() => persist(null), [persist]);

  return (
    <CookieConsentContext.Provider
      value={{ consent, hydrated, accept, reject, reopen }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error(
      'useCookieConsent must be used within a CookieConsentProvider'
    );
  }
  return ctx;
}
