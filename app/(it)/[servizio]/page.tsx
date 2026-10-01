import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Footer from '@/components/Footer';
import RichText from '@/components/RichText';
import FaqSection from '@/components/home/FaqSection';
import { Button } from '@/components/ui/button';
import { getDictionary } from '@/lib/i18n';
import { getServicePage, getServicePageSlugs } from '@/lib/pages';
import remarkPlaceholders from '@/lib/remark-placeholders';
import { absoluteUrl } from '@/lib/seo';
import { SITE_NAME } from '@/lib/site';

// Only slugs with a file in app/content/pages/it exist; everything else 404s.
export const dynamicParams = false;

type Params = Promise<{ servizio: string }>;

export function generateStaticParams() {
  return getServicePageSlugs().map((servizio) => ({ servizio }));
}

export async function generateMetadata({
  params
}: {
  params: Params;
}): Promise<Metadata> {
  const { servizio } = await params;
  const page = getServicePage(servizio);
  if (!page) return {};

  const url = absoluteUrl(`/${page.slug}`);
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      type: 'website',
      locale: getDictionary('it').ogLocale,
      siteName: SITE_NAME
    }
  };
}

export default async function ServicePage({ params }: { params: Params }) {
  const { servizio } = await params;
  const page = getServicePage(servizio);

  if (!page) notFound();

  const dict = getDictionary('it');

  return (
    <>
      <div className="container mx-auto px-4">
        <article className="max-w-3xl mx-auto pt-10 pb-20">
          <h1 className="text-3xl md:text-5xl font-bold text-fis-logo leading-tight">
            <RichText text={page.h1} />
          </h1>
          <div className="mt-8 prose prose-lg max-w-none prose-headings:text-fis-logo prose-a:text-fis-logo prose-strong:text-foreground">
            <ReactMarkdown remarkPlugins={[remarkGfm, remarkPlaceholders]}>
              {page.content}
            </ReactMarkdown>
          </div>
          {page.faq.length > 0 && dict.home.faq && (
            <div className="mt-16">
              <FaqSection
                faq={{
                  title: dict.home.faq.title,
                  items: page.faq.map(({ q, a }) => ({
                    question: q,
                    answer: a
                  }))
                }}
              />
            </div>
          )}
          <div className="mt-12 text-center">
            <Link href="/#contact">
              <Button size="lg" className="bg-fis-logo text-lg px-6 py-3">
                {dict.servicePage?.cta}
              </Button>
            </Link>
          </div>
        </article>
      </div>
      <Footer locale="it" />
    </>
  );
}
