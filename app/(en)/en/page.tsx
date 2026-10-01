import HomePage, { getHomeMetadata } from '@/components/home/HomePage';

export const metadata = getHomeMetadata('en');

export default function EnglishHomePage() {
  return <HomePage locale="en" />;
}
