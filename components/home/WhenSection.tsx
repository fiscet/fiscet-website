import Link from 'next/link';
import type { Dictionary } from '@/lib/i18n';
import Section from '../Section';
import { SectionTitle } from '../SectionTitle';

export default function WhenSection({
  when
}: {
  when: NonNullable<Dictionary['home']['when']>;
}) {
  return (
    <Section id="quando">
      <SectionTitle className="text-3xl">{when.title}</SectionTitle>
      <p className="max-w-3xl leading-relaxed">{when.intro}</p>
      <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-6 leading-relaxed">
        {when.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="mt-8 max-w-3xl rounded-2xl bg-secondary p-6">
        <p className="font-bold text-fis-logo">{when.boxTitle}</p>
        <p className="mt-2 text-gray-700">{when.boxText}</p>
        <Link
          href={when.boxHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-md bg-fis-logo px-5 py-2.5 font-semibold text-white transition-opacity hover:opacity-90"
        >
          {when.boxCta}
        </Link>
      </div>
    </Section>
  );
}
