import { motion } from 'motion/react';
import Image from 'next/image';

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <Image src="/images/Logo-2025.png" alt="Logo" width={230} height={100} />
    </motion.div>
  );
}
