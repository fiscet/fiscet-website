import { motion } from 'motion/react';

export type MobileMenuProps = {
  children: React.ReactNode;
};

export default function MobileMenu({ children }: MobileMenuProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="md:hidden bg-fis-header overflow-hidden"
    >
      <div className="flex flex-col space-y-2 px-4 py-4">{children}</div>
    </motion.nav>
  );
}
