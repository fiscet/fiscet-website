import { Menu, X } from 'lucide-react';

export type MobileButtonProps = {
  label: string;
  isOpen: boolean;
  controls: string;
  toggleMobileMenu: () => void;
};

export default function MobileButton({
  label,
  isOpen,
  controls,
  toggleMobileMenu
}: MobileButtonProps) {
  return (
    <button
      type="button"
      className="md:hidden -mr-2 cursor-pointer p-2 text-fis-logo"
      onClick={toggleMobileMenu}
      aria-label={label}
      aria-expanded={isOpen}
      aria-controls={controls}
    >
      {isOpen ? (
        <X aria-hidden className="h-6 w-6" />
      ) : (
        <Menu aria-hidden className="h-6 w-6" />
      )}
    </button>
  );
}
