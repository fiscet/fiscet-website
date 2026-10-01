import Link from 'next/link';
import type { Dictionary } from '@/lib/i18n';
import RichText from './RichText';
import { SectionTitle } from './SectionTitle';
import { Button } from './ui/button';
import Section from './Section';

export default function AboutSection({
  about
}: {
  about: Dictionary['home']['about'];
}) {
  return (
    <Section
      id="about"
      className="flex flex-col md:flex-row justify-between gap-x-32"
    >
      <div className="about-desc flex-2/3">
        <div>
          <SectionTitle className="text-3xl">{about.title}</SectionTitle>
          {about.paragraphs.map((paragraph, index) => (
            <p key={index} className={index > 0 ? 'mt-4' : undefined}>
              <RichText text={paragraph} />
            </p>
          ))}
        </div>
      </div>
      <div className="about-cta flex-1/3">
        <Link href="#contact">
          <Button size="lg" className="bg-fis-logo mt-8 text-lg px-6 py-3">
            {about.cta}
          </Button>
        </Link>
      </div>
    </Section>
  );
}
