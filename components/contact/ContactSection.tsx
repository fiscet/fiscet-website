import Section from '../Section';
import { SectionTitle } from '../SectionTitle';
import { ContactForm } from './ContactForm';

export default function ContactSection() {
  return (
    <Section id="contact" className="py-12">
      <div className="max-w-2xl mx-auto">
        <SectionTitle>Contact Us</SectionTitle>
        <p className="text-gray-600 text-center mb-8">
          Have a question or want to work together? Send us a message!
        </p>
        <ContactForm />
      </div>
    </Section>
  );
}
