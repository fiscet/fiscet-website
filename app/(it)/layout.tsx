import type { Metadata } from 'next';
import RootShell from '@/components/RootShell';
import { getDictionary } from '@/lib/i18n';
import { SITE_NAME, SITE_URL } from '@/lib/site';

const dict = getDictionary('it');

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: 'website',
    locale: dict.ogLocale,
    siteName: SITE_NAME
  },
  twitter: {
    card: 'summary_large_image'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function ItalianRootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootShell locale="it">{children}</RootShell>;
}
