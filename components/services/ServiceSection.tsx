'use client';

import { motion, useInView } from 'motion/react';
import type { Dictionary } from '@/lib/i18n';
import { SERVICE_ICONS, type Service } from './data';
import { ServiceCard } from './ServiceCard';
import { useRef } from 'react';
import { SectionTitle } from '../SectionTitle';
import Section from '../Section';

export function ServiceSection({
  services: dict
}: {
  services: Dictionary['home']['services'];
}) {
  const ref = useRef(null);
  const services: Service[] = dict.items.map((item, index) => ({
    ...item,
    icon: SERVICE_ICONS[index]
  }));
  const isInView = useInView(ref, {
    once: false,
    amount: 0.4
  });

  return (
    <Section id="services">
      <div ref={ref}>
        <SectionTitle className="text-3xl">{dict.title}</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: index * 0.4 }}
            >
              <ServiceCard key={index} service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
