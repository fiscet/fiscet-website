import Link from 'next/link';
import type { Dictionary } from '@/lib/i18n';
import Section from '../Section';
import { SectionTitle } from '../SectionTitle';

export default function UnsureSection({
  unsure
}: {
  unsure: NonNullable<Dictionary['home']['unsure']>;
}) {
  return (
    <Section id="da-dove-partire">
      <SectionTitle className="text-3xl">{unsure.title}</SectionTitle>
      <p className="max-w-3xl leading-relaxed">{unsure.intro}</p>
      <ul className="mt-8 grid gap-6 md:grid-cols-3">
        {unsure.cases.map((item) => (
          <li key={item.title} className="rounded-2xl bg-secondary p-6">
            <p className="font-bold text-fis-logo">{item.title}</p>
            <p className="mt-2 leading-relaxed text-gray-700">{item.text}</p>
          </li>
        ))}
      </ul>
      <p className="mt-8 max-w-3xl text-lg font-semibold leading-relaxed text-fis-logo">
        {unsure.closing}
      </p>
      <Link
        href="#contact"
        className="mt-5 inline-block rounded-md bg-fis-logo px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
      >
        {unsure.cta}
      </Link>
      <div className="mt-10 max-w-3xl rounded-2xl border border-border p-6">
        <p className="font-bold text-fis-logo">{unsure.boxTitle}</p>
        <p className="mt-2 leading-relaxed text-gray-700">{unsure.boxText}</p>
        <Link
          href={unsure.boxHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-md border border-fis-logo/30 px-5 py-2.5 font-semibold text-fis-logo transition-colors hover:border-fis-logo"
        >
          {unsure.boxCta}
        </Link>
      </div>
    </Section>
  );
}
