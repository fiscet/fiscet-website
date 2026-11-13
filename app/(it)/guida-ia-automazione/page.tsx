import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Footer from '@/components/Footer';
import { GuideForm } from '@/components/guide/GuideForm';
import { getDictionary } from '@/lib/i18n';
import { absoluteUrl } from '@/lib/seo';
import { SITE_NAME } from '@/lib/site';

const dict = getDictionary('it');

export function generateMetadata(): Metadata {
  const guide = dict.guide;
  if (!guide) return {};

  const url = absoluteUrl(guide.path);
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      url,
      type: 'website',
      locale: dict.ogLocale,
      siteName: SITE_NAME
    }
  };
}

export default function GuidePage() {
  const guide = dict.guide;
  if (!guide) notFound();

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl pt-10 pb-20">
          <h1 className="text-3xl font-bold leading-tight text-fis-logo md:text-5xl">
            {guide.h1}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-700">
            {guide.lead}
          </p>

          <h2 className="mt-10 text-2xl font-semibold text-fis-logo">
            {guide.includesTitle}
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-gray-700">
            {guide.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <section
            aria-labelledby="guide-form-title"
            className="mt-12 rounded-2xl border border-fis-logo/20 bg-white p-6 shadow-sm md:p-8"
          >
            <h2
              id="guide-form-title"
              className="mb-6 text-2xl font-semibold text-fis-logo"
            >
              {guide.formTitle}
            </h2>
            <GuideForm guide={guide} privacy={dict.privacy} />
          </section>
        </div>
      </div>
      <Footer locale="it" />
    </>
  );
}
