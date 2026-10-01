import { motion } from 'motion/react';

export type MobileMenuProps = {
  id: string;
  children: React.ReactNode;
};

export default function MobileMenu({ id, children }: MobileMenuProps) {
  return (
    <motion.nav
      id={id}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.25 }}
      className="md:hidden overflow-hidden border-t border-border bg-fis-header-bg"
    >
      <div className="flex flex-col px-4 pt-2 pb-5">{children}</div>
    </motion.nav>
  );
}
