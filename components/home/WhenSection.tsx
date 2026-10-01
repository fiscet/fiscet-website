import Link from 'next/link';
import type { Dictionary } from '@/lib/i18n';
import Section from '../Section';
import { SectionTitle } from '../SectionTitle';
import { Button } from '../ui/button';

export default function WhenSection({
  when
}: {
  when: NonNullable<Dictionary['home']['when']>;
}) {
  return (
    <Section id="quando" className="scroll-mt-36">
      <SectionTitle className="text-3xl">{when.title}</SectionTitle>
      <p>{when.intro}</p>
      <ul className="list-disc pl-6 mt-4 space-y-2">
        {when.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="mt-8 rounded-2xl bg-secondary p-6">
        <p className="font-bold text-fis-logo">{when.boxTitle}</p>
        <p className="mt-2 text-gray-600">{when.boxText}</p>
        <Link href={when.boxHref} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-fis-logo mt-4">
            {when.boxCta}
          </Button>
        </Link>
      </div>
    </Section>
  );
}
