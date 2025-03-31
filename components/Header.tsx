'use client';

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { handleScrollTo } from '@/lib/utils';
import Logo from './Logo';
import NavMenu from './navigation/NavMenu';
import MobileButton from './navigation/MobileButton';
import MobileMenu from './navigation/MobileMenu';

const SCROLL_DELAY = 300;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);
    setTimeout(() => handleScrollTo(sectionId), SCROLL_DELAY);
  };

  const toggleMobileMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-fis-header-bg sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          <NavMenu handleNavClick={handleNavClick} />
        </nav>

        {/* Mobile Menu Button */}
        <MobileButton toggleMobileMenu={toggleMobileMenu} />
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu>
            <NavMenu handleNavClick={handleNavClick} />
          </MobileMenu>
        )}
      </AnimatePresence>
    </header>
  );
}
