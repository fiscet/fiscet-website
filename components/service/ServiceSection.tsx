'use client';

import { motion } from 'motion/react';
import { services } from './data';
import { ServiceCard } from './ServiceCard';

export function ServiceSection() {
  return (
    <div className="mt-12 text-center">
      <h2 className="text-3xl font-bold mb-6">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.4 }}
          >
            <ServiceCard key={index} service={service} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
