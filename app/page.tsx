import { Button } from '@/components/ui/button';

import Link from 'next/link';
import { PageTitle } from '@/components/PageTitle';
import { PortfolioSection } from '@/components/PortfolioSection';
import { ServiceSection } from '@/components/service/ServiceSection';
import HomeSpeedImage from '@/components/HomeSpeedImage';
import { SectionTitle } from '@/components/SectionTitle';

export default function HomePage() {
  return (
    <div className="container mx-auto flex flex-col p-4">
      {/* <section className="text-lg text-gray-700 max-w-2xl">
        <ul>
          <li>
            <strong>Expertise in Modern Technologies:</strong> With proficiency
            in Next.js and leading CMS platforms
          </li>
          <li>
            <strong>Tailored Solutions:</strong> I take the time to understand
            your business and create custom solutions that meet your unique
            needs.
          </li>
        </ul>
      </section>

      <section className="mt-4 text-3xl">
        Let&quot;s Work Together to Grow Your Business Online!
      </section>

      <ServiceSection />

      <PortfolioSection />

      <Link href="/contact">
        <Button className="mt-8 text-lg px-6 py-3">
          Let&quot;s Work Together
        </Button>
      </Link> */}
      <PageTitle className="text-center">
        Custom Web Solutions for your business 🚀
      </PageTitle>
      <section id="home" className="m-12">
        <div className="flex flex-col md:flex-row justify-between gap-x-32">
          <div>
            <div>
              <SectionTitle>Need an app fast?</SectionTitle>
              <p>
                We develop high-quality applications in record time—efficient,
                scalable, and ready to launch!
              </p>
            </div>
            <div className="mt-12">
              <SectionTitle>Headless CMS Architecture</SectionTitle>
              <p>
                Utilize <b>Payload CMS</b>, <b>Sanity.io</b>, or <b>Strapi</b>{' '}
                to separate your content from the presentation layer, offering
                unmatched flexibility and performance.
              </p>
              <div className="my-6" />
              <p>
                Utilize <b>Next.js</b> to build lightning-fast web applications
                that provide exceptional user experiences.
              </p>
            </div>
          </div>
          <HomeSpeedImage />
        </div>
      </section>
    </div>
  );
}
