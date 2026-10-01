import type { Dictionary } from '@/lib/i18n';
import Section from '../Section';
import { SectionTitle } from '../SectionTitle';
import HomeTech from './HomeTech';

export default function ProcessSection({
  process,
  tech
}: {
  process: NonNullable<Dictionary['home']['process']>;
  tech: Dictionary['home']['tech'];
}) {
  return (
    <Section id="come-lavoro">
      <SectionTitle className="text-3xl">{process.title}</SectionTitle>
      <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {process.steps.map((step, index) => (
          <li key={step.title} className="rounded-2xl bg-secondary p-6">
            <span className="text-3xl font-bold text-fis-logo">
              {index + 1}
            </span>
            <p className="mt-2 font-bold text-fis-logo">{step.title}</p>
            <p className="mt-2 text-gray-600">{step.text}</p>
          </li>
        ))}
      </ol>
      <div className="mt-10">
        <HomeTech tech={tech} />
        <p className="mt-4 text-gray-600">{process.techText}</p>
      </div>
    </Section>
  );
}
