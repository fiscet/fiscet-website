import HomePage, { getHomeMetadata } from '@/components/home/HomePage';

export const metadata = getHomeMetadata('it');

export default function ItalianHomePage() {
  return <HomePage locale="it" />;
}
