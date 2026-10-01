import Image from 'next/image';
import Link from 'next/link';
import type { Dictionary } from '@/lib/i18n';
import { AUTHOR_NAME } from '@/lib/site';
import RichText from './RichText';
import { SectionTitle } from './SectionTitle';
import Section from './Section';

export default function AboutSection({
  about
}: {
  about: Dictionary['home']['about'];
}) {
  return (
    <Section
      id="about"
      className="grid items-start gap-8 md:grid-cols-[220px_1fr] md:gap-12"
    >
      <Image
        src="/images/christian-zanchetta.jpg"
        alt={AUTHOR_NAME}
        width={440}
        height={572}
        className="w-40 rounded-2xl object-cover md:w-full"
      />
      <div className="max-w-2xl">
        <SectionTitle className="text-3xl">{about.title}</SectionTitle>
        {about.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={`leading-relaxed ${index > 0 ? 'mt-4' : ''}`}
          >
            <RichText text={paragraph} />
          </p>
        ))}
        <Link
          href="#contact"
          className="mt-8 inline-block rounded-md bg-fis-logo px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
        >
          {about.cta}
        </Link>
      </div>
    </Section>
  );
}
