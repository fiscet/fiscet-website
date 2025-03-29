'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

export function SectionTitle({
  children,
  className
}: {
  children: string;
  className?: string;
}) {
  return (
    <motion.h3
      className={cn('text-2xl font-bold text-fis-logo mb-4', className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {children}
    </motion.h3>
  );
}
