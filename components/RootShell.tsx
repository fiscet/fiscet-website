import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { Toaster } from '@/components/ui/sonner';
import Header from '@/components/Header';
import GoogleTagManager from '@/components/GoogleTagManager';
import { CookieConsentProvider } from '@/components/cookie-consent/CookieConsentContext';
import CookieBanner from '@/components/cookie-consent/CookieBanner';
import { Analytics } from '@vercel/analytics/next';
import { getDictionary, type Locale } from '@/lib/i18n';
import { getLanguageSwitchMap } from '@/lib/i18n/alternates';
import { getServiceLinks } from '@/lib/navigation';

const inter = Inter({ subsets: ['latin'] });

// Shared <html> shell for the two root layouts, app/(it) and app/(en)/en.
export default function RootShell({
  locale,
  children
}: Readonly<{
  locale: Locale;
  children: React.ReactNode;
}>) {
  const dict = getDictionary(locale);

  return (
    <html lang={locale}>
      <body className={`${inter.className} antialiased`}>
        <CookieConsentProvider>
          <GoogleTagManager />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-fis-logo focus:shadow-lg"
          >
            {dict.nav.skipToContent}
          </a>
          <Header
            homePath={dict.homePath}
            nav={dict.nav}
            services={getServiceLinks(locale)}
            switchMap={getLanguageSwitchMap()}
            otherHomePath={getDictionary(locale === 'it' ? 'en' : 'it').homePath}
          />
          <main id="main-content" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Toaster />
          <CookieBanner cookie={dict.cookie} privacy={dict.privacy} />
        </CookieConsentProvider>
        <Analytics />
      </body>
    </html>
  );
}
