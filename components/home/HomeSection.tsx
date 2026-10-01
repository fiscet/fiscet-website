import type { Dictionary } from '@/lib/i18n';
import RichText from '../RichText';
import Section from '../Section';
import { SectionTitle } from '../SectionTitle';
import HomeExamples from './HomeExamples';
import HomeHeroClaim from './HomeHeroClaim';
import HomeTech from './HomeTech';

export default function HomeSection({ home }: { home: Dictionary['home'] }) {
  return (
    <Section id="home">
      <div className="home-text">
        <div className="my-10">
          <HomeHeroClaim hero={home.hero} />
        </div>
        <div className="my-10">
          <HomeExamples home={home} />
        </div>
        {home.headless && (
          <div className="my-6">
            <SectionTitle>{home.headless.title}</SectionTitle>
            {home.headless.paragraphs.map((paragraph, index) => (
              <div key={index}>
                {index > 0 && <div className="my-6" />}
                <p>
                  <RichText text={paragraph} />
                </p>
              </div>
            ))}
          </div>
        )}
        <HomeTech tech={home.tech} />
      </div>
    </Section>
  );
}
