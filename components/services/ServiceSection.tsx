import type { Dictionary } from '@/lib/i18n';
import { SERVICE_ICONS, type Service } from './data';
import { ServiceCard } from './ServiceCard';
import { SectionTitle } from '../SectionTitle';
import Section from '../Section';

export function ServiceSection({
  services: dict
}: {
  services: Dictionary['home']['services'];
}) {
  const services: Service[] = dict.items.map((item, index) => ({
    ...item,
    icon: SERVICE_ICONS[index]
  }));

  return (
    <Section id="services">
      <SectionTitle className="text-3xl">{dict.title}</SectionTitle>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </Section>
  );
}
