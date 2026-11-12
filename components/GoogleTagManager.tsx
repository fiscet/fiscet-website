'use client';

import Script from 'next/script';
import { useCookieConsent } from '@/components/cookie-consent/CookieConsentContext';

// GA4 measurement ID (G-…). It must be loaded through gtag.js; the gtm.js
// loader only accepts GTM-… container IDs and sends nothing to GA4.
const GA_ID = 'G-WG936FL7M3';

export default function GoogleTagManager() {
  const { consent } = useCookieConsent();

  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  // No tracking until the visitor explicitly accepts.
  if (consent !== 'accepted') {
    return null;
  }

  return (
    <>
      <Script
        id="ga-loader"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `
        }}
      />
    </>
  );
}
