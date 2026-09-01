'use client';

import Script from 'next/script';
import { useCookieConsent } from '@/components/cookie-consent/CookieConsentContext';

const GTM_ID = 'G-WG936FL7M3';

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
    <Script
      id="gtm-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `
      }}
    />
  );
}
