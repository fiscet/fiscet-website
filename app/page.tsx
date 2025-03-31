import { PageTitle } from '@/components/PageTitle';
import AboutSection from '@/components/AboutSection';
import HomeSection from '@/components/home/HomeSection';
import { ServiceSection } from '@/components/services/ServiceSection';
import SectionSpacer from '@/components/SectionSpacer';
import ContactSection from '@/components/contact/ContactSection';

export default function HomePage() {
  return (
    <div className="container mx-auto flex flex-col p-4">
      <PageTitle className="text-center">
        Custom Web Solutions for your business 🚀
      </PageTitle>
      <HomeSection />
      <SectionSpacer />
      <AboutSection />
      <SectionSpacer />
      <ServiceSection />
      <SectionSpacer />
      <ContactSection />
    </div>
  );
}
