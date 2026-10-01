import type { Metadata } from 'next';
import { PageTitle } from '@/components/PageTitle';
import AboutSection from '@/components/AboutSection';
import HomeSection from '@/components/home/HomeSection';
import { ServiceSection } from '@/components/services/ServiceSection';
import SectionSpacer from '@/components/SectionSpacer';
import ContactSection from '@/components/contact/ContactSection';
import Footer from '@/components/Footer';
import HashScroll from '@/components/HashScroll';
import { AUTHOR_NAME, AUTHOR_URL, SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Fiscet',
  url: SITE_URL,
  description:
    'Custom web applications built with Next.js and headless CMS solutions like Payload CMS, Sanity.io, and Strapi.',
  founder: {
    '@type': 'Person',
    name: AUTHOR_NAME,
    url: AUTHOR_URL,
  },
  sameAs: [AUTHOR_URL],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <HashScroll />
      <div className="container mx-auto flex flex-col p-4 mb-4">
        <PageTitle className="text-center">
          Custom Web Solutions for your business
        </PageTitle>
        <HomeSection />
        <SectionSpacer />
        <AboutSection />
        <SectionSpacer />
        <ServiceSection />
        <SectionSpacer />
        <ContactSection />
      </div>
      <Footer />
    </>
  );
}
