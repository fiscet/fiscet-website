import type { Metadata } from 'next';
import { PageTitle } from '@/components/PageTitle';
import AboutSection from '@/components/AboutSection';
import HomeSection from '@/components/home/HomeSection';
import { ServiceSection } from '@/components/services/ServiceSection';
import SectionSpacer from '@/components/SectionSpacer';
import ContactSection from '@/components/contact/ContactSection';
import Footer from '@/components/Footer';
import HashScroll from '@/components/HashScroll';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.fiscet.it';

export const metadata: Metadata = {
  alternates: { canonical: BASE_URL },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Fiscet',
  url: BASE_URL,
  description:
    'Custom web applications built with Next.js and headless CMS solutions like Payload CMS, Sanity.io, and Strapi.',
  founder: {
    '@type': 'Person',
    name: 'Christian Zanchetta',
    url: 'https://www.linkedin.com/in/christian-zanchetta-a7140621/?locale=en-US',
  },
  sameAs: [
    'https://www.linkedin.com/in/christian-zanchetta-a7140621/?locale=en-US',
  ],
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
          Custom Web Solutions for your business 🚀
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
