'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

export function PageTitle({
  children,
  className
}: {
  children: string;
  className?: string;
}) {
  return (
    <motion.h1
      className={cn('text-4xl font-bold text-fis-logo mb-6', className)}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      {children}
    </motion.h1>
  );
}
