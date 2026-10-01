import type { Metadata } from 'next';
import HomePage from '@/components/home/HomePage';
import { SITE_URL } from '@/lib/site';

const TITLE = 'Gestionali e web app su misura per piccole imprese | Fiscet';
const DESCRIPTION =
  'Sviluppo di gestionali, web app e siti su misura per micro e piccole imprese. Prima versione funzionante in settimane, non in mesi.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: SITE_URL },
  twitter: { title: TITLE, description: DESCRIPTION }
};

export default function ItalianHomePage() {
  return <HomePage locale="it" />;
}
