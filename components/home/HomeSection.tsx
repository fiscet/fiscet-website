import Section from '../Section';
import { SectionTitle } from '../SectionTitle';
import HomeExamples from './HomeExamples';
import HomeHeroClaim from './HomeHeroClaim';
import HomeTech from './HomeTech';

export default function HomeSection() {
  return (
    <Section id="home">
      <div className="home-text">
        <div className="my-10">
          <HomeHeroClaim />
        </div>
        <div className="my-10">
          <HomeExamples />
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
      </div>
    </Section>
  );
}
