import type { Dictionary } from '@/lib/i18n';
import RichText from '../RichText';
import Section from '../Section';
import { SectionTitle } from '../SectionTitle';
import { ContactForm } from './ContactForm';

export default function ContactSection({ dict }: { dict: Dictionary }) {
  return (
    <Section id="contact">
      <div className="max-w-2xl mx-auto">
        <SectionTitle>{dict.home.contact.title}</SectionTitle>
        <p className="text-gray-600 text-center mb-8">
          <RichText text={dict.home.contact.intro} />
        </p>
        <ContactForm form={dict.contactForm} privacy={dict.privacy} />
      </div>
    </Section>
  );
}
