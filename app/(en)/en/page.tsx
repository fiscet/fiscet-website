import type { Metadata } from 'next';
import HomePage from '@/components/home/HomePage';
import { SITE_URL } from '@/lib/site';

const TITLE = 'Custom business software and web apps | Fiscet';
const DESCRIPTION =
  'Custom business software, web apps and websites for small companies. First working release in weeks, built on a proven foundation.';
const URL = `${SITE_URL}/en`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL },
  twitter: { title: TITLE, description: DESCRIPTION }
};

export default function EnglishHomePage() {
  return <HomePage locale="en" />;
}
