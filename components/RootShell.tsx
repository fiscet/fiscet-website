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
          <Header
            homePath={dict.homePath}
            nav={dict.nav}
            switchMap={getLanguageSwitchMap()}
            otherHomePath={getDictionary(locale === 'it' ? 'en' : 'it').homePath}
          />
          <main className="mt-6">{children}</main>
          <Toaster />
          <CookieBanner cookie={dict.cookie} privacy={dict.privacy} />
        </CookieConsentProvider>
        <Analytics />
      </body>
    </html>
  );
}
