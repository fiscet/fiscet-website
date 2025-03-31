import Section from '../Section';
import SectionSpacer from '../SectionSpacer';
import { SectionTitle } from '../SectionTitle';
import HomeExamples from './HomeExamples';
import HomeSpeedImage from './HomeSpeedImage';
import HomeTech from './HomeTech';

export default function HomeSection() {
  return (
    <Section id="home">
      <div className="flex flex-col md:flex-row justify-between gap-x-32">
        <div className="home-text flex-2/3">
          <div>
            <SectionTitle className="text-3xl">
              Want an app in a short time?
            </SectionTitle>
            <p>
              Develop high-quality applications in record time—efficient,
              scalable, and ready to launch!
            </p>
          </div>
          <div className="my-6">
            <SectionTitle>Headless CMS Architecture</SectionTitle>
            <p>
              Utilize <b>Payload CMS</b>, <b>Sanity.io</b>, or <b>Strapi</b>
              <br /> to separate your content from the presentation layer,
              offering unmatched flexibility and performance.
            </p>
            <div className="my-6" />
            <p>
              Utilize <b>Next.js</b> to build lightning-fast web applications
              that provide exceptional user experiences.
            </p>
          </div>
          <HomeTech />
          <SectionSpacer />
          <HomeExamples />
        </div>
        <div className="sm:mx-auto md:mx-0 flex-1/3 mt-6 mb:mt-0">
          <HomeSpeedImage />
        </div>
      </div>
    </Section>
  );
}
