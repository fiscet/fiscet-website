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
    </Section>
  );
}
