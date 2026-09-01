'use client';

import { useCookieConsent } from '@/components/cookie-consent/CookieConsentContext';

export default function Footer() {
  const { reopen } = useCookieConsent();

  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Fiscet by Christian Zanchetta. All rights
          reserved.
        </p>
        <button
          type="button"
          onClick={reopen}
          className="mt-2 text-xs text-gray-500 underline hover:text-gray-700"
        >
          Cookie preferences
        </button>
      </div>
    </footer>
  );
}
