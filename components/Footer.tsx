'use client';

import { useCookieConsent } from '@/components/cookie-consent/CookieConsentContext';
import type { Dictionary } from '@/lib/i18n';

export default function Footer({ footer }: { footer: Dictionary['footer'] }) {
  const { reopen } = useCookieConsent();

  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} {footer.copyright}
        </p>
        <button
          type="button"
          onClick={reopen}
          className="mt-2 text-xs text-gray-500 underline hover:text-gray-700"
        >
          {footer.cookiePreferences}
        </button>
      </div>
    </footer>
  );
}
