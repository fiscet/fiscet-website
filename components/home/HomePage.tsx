import { PageTitle } from '@/components/PageTitle';
import AboutSection from '@/components/AboutSection';
import HomeSection from '@/components/home/HomeSection';
import { ServiceSection } from '@/components/services/ServiceSection';
import SectionSpacer from '@/components/SectionSpacer';
import ContactSection from '@/components/contact/ContactSection';
import Footer from '@/components/Footer';
import HashScroll from '@/components/HashScroll';
import { getDictionary, type Locale } from '@/lib/i18n';
import { AUTHOR_NAME, AUTHOR_URL, SITE_NAME, SITE_URL } from '@/lib/site';

export default function HomePage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    description:
      'Custom web applications built with Next.js and headless CMS solutions like Payload CMS, Sanity.io, and Strapi.',
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
        <HomeSection home={dict.home} />
        <SectionSpacer />
        <AboutSection about={dict.home.about} />
        <SectionSpacer />
        <ServiceSection services={dict.home.services} />
        <SectionSpacer />
        <ContactSection dict={dict} />
      </div>
      <Footer footer={dict.footer} />
    </>
  );
}
