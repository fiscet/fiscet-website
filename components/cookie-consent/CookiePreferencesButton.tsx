'use client';

import { useCookieConsent } from '@/components/cookie-consent/CookieConsentContext';

export default function CookiePreferencesButton({
  label,
  className
}: {
  label: string;
  className?: string;
}) {
  const { reopen } = useCookieConsent();

  return (
    <button type="button" onClick={reopen} className={className}>
      {label}
    </button>
  );
}
