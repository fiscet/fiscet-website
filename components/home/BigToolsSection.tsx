import type { Dictionary } from '@/lib/i18n';
import Section from '../Section';
import { SectionTitle } from '../SectionTitle';

export default function BigToolsSection({
  bigTools
}: {
  bigTools: NonNullable<Dictionary['home']['bigTools']>;
}) {
  return (
    <Section id="strumenti">
      <SectionTitle className="text-3xl">{bigTools.title}</SectionTitle>
      <p className="max-w-3xl leading-relaxed">{bigTools.intro}</p>
      <table className="mt-8 w-full max-w-4xl border-collapse text-left">
        <thead className="hidden sm:table-header-group">
          <tr className="text-sm uppercase tracking-wider text-gray-500">
            <th scope="col" className="pb-3 pr-6 font-semibold">
              {bigTools.bigLabel}
            </th>
            <th scope="col" className="pb-3 font-semibold text-fis-logo">
              {bigTools.smallLabel}
            </th>
          </tr>
        </thead>
        <tbody>
          {bigTools.rows.map((row) => (
            <tr
              key={row.big}
              className="flex flex-col border-t border-border py-4 sm:table-row sm:py-0"
            >
              <td className="text-gray-500 sm:py-4 sm:pr-6 sm:align-top">
                <span className="sr-only sm:hidden">{bigTools.bigLabel}: </span>
                {row.big}
              </td>
              <td className="mt-1 font-semibold text-fis-logo sm:mt-0 sm:py-4 sm:align-top">
                <span className="sr-only sm:hidden">
                  {bigTools.smallLabel}:{' '}
                </span>
                {row.small}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Section>
  );
}
