import type { Metadata } from 'next';
import { PageTitle } from '@/components/PageTitle';
import AboutSection from '@/components/AboutSection';
import HomeSection from '@/components/home/HomeSection';
import { ServiceSection } from '@/components/services/ServiceSection';
import SectionSpacer from '@/components/SectionSpacer';
import ContactSection from '@/components/contact/ContactSection';
import Footer from '@/components/Footer';
import HashScroll from '@/components/HashScroll';
import Section from '@/components/Section';
import HomeExamples from '@/components/home/HomeExamples';
import HomeHeroClaim from '@/components/home/HomeHeroClaim';
import WhenSection from '@/components/home/WhenSection';
import ProcessSection from '@/components/home/ProcessSection';
import FaqSection from '@/components/home/FaqSection';
import { getDictionary, type Dictionary, type Locale } from '@/lib/i18n';
import { HOME_PATHS, absoluteUrl, languageAlternates } from '@/lib/seo';
import { AUTHOR_NAME, AUTHOR_URL, SITE_NAME, SITE_URL } from '@/lib/site';

export function getHomeMetadata(locale: Locale): Metadata {
  const { home, homePath, ogLocale } = getDictionary(locale);
  const url = absoluteUrl(homePath);

  return {
    title: home.metaTitle,
    description: home.metaDescription,
    alternates: {
      canonical: url,
      languages: languageAlternates(HOME_PATHS)
    },
    openGraph: {
      title: home.metaTitle,
      description: home.metaDescription,
      url,
      type: 'website',
      locale: ogLocale,
      siteName: SITE_NAME
    },
    twitter: {
      card: 'summary_large_image',
      title: home.metaTitle,
      description: home.metaDescription
    }
  };
}

export default function HomePage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    description: dict.home.organizationDescription,
    ...(locale === 'it' && { areaServed: 'IT', inLanguage: 'it' }),
    founder: {
      '@type': 'Person',
      name: AUTHOR_NAME,
      url: AUTHOR_URL
    },
    sameAs: [AUTHOR_URL]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <HashScroll />
      <div className="container mx-auto flex flex-col p-4 mb-4">
        <PageTitle className="text-center">{dict.home.h1}</PageTitle>
        {locale === 'it' ? (
          <ItalianSections dict={dict} />
        ) : (
          <EnglishSections dict={dict} />
        )}
        <SectionSpacer />
        <ContactSection dict={dict} />
      </div>
      <Footer footer={dict.footer} />
    </>
  );
}

// Order from docs/seo-italia/copy/home-it.md.
function ItalianSections({ dict }: { dict: Dictionary }) {
  const { home } = dict;

  return (
    <>
      <Section id="home">
        <div className="my-10">
          <HomeHeroClaim hero={home.hero} />
        </div>
      </Section>
      <ServiceSection services={home.services} />
      {home.when && (
        <>
          <SectionSpacer />
          <WhenSection when={home.when} />
        </>
      )}
      <SectionSpacer />
      <Section id="lavori">
        <HomeExamples home={home} />
      </Section>
      {home.process && (
        <>
          <SectionSpacer />
          <ProcessSection process={home.process} tech={home.tech} />
        </>
      )}
      <SectionSpacer />
      <AboutSection about={home.about} />
      {home.faq && (
        <>
          <SectionSpacer />
          <FaqSection faq={home.faq} />
        </>
      )}
    </>
  );
}

function EnglishSections({ dict }: { dict: Dictionary }) {
  return (
    <>
      <HomeSection home={dict.home} />
      <SectionSpacer />
      <AboutSection about={dict.home.about} />
      <SectionSpacer />
      <ServiceSection services={dict.home.services} />
    </>
  );
}
