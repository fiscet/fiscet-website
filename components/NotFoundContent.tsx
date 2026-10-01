import Link from 'next/link';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { getDictionary, type Locale } from '@/lib/i18n';

export default function NotFoundContent({ locale }: { locale: Locale }) {
  const { notFound, homePath, footer } = getDictionary(locale);

  return (
    <>
      <section className="container mx-auto px-4 py-24 text-center">
        <p className="text-sm font-semibold text-muted-foreground">404</p>
        <h1 className="mt-2 text-4xl font-bold text-fis-logo">
          {notFound.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{notFound.text}</p>
        <Link href={homePath}>
          <Button size="lg" className="bg-fis-logo mt-8">
            {notFound.cta}
          </Button>
        </Link>
      </section>
      <Footer footer={footer} />
    </>
  );
}
