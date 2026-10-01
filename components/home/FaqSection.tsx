import type { Dictionary } from '@/lib/i18n';
import RichText from '../RichText';
import Section from '../Section';
import { SectionTitle } from '../SectionTitle';

const PLACEHOLDER = '[DA CONFERMARE:';

export default function FaqSection({
  faq
}: {
  faq: NonNullable<Dictionary['home']['faq']>;
}) {
  // Answers still waiting for confirmation stay visible on the page but are
  // kept out of the structured data, so Google never sees a placeholder.
  const confirmedItems = faq.items.filter(
    (item) => !item.answer.includes(PLACEHOLDER)
  );

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: confirmedItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer }
    }))
  };

  return (
    <Section id="domande">
      {confirmedItems.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <SectionTitle className="text-3xl">{faq.title}</SectionTitle>
      <dl className="max-w-3xl space-y-6">
        {faq.items.map((item) => (
          <div key={item.question}>
            <dt className="font-bold text-fis-logo">{item.question}</dt>
            <dd className="mt-2 text-gray-600">
              <RichText text={item.answer} />
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
