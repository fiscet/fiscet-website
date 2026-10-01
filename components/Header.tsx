'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { AnimatePresence } from 'motion/react';
import { handleScrollTo } from '@/lib/utils';
import type { Dictionary } from '@/lib/i18n';
import Logo from './Logo';
import NavMenu from './navigation/NavMenu';
import MobileButton from './navigation/MobileButton';
import MobileMenu from './navigation/MobileMenu';

const SCROLL_DELAY = 300;

export default function Header({
  homePath,
  nav,
  switchMap,
  otherHomePath
}: {
  homePath: string;
  nav: Dictionary['nav'];
  switchMap: Record<string, string>;
  otherHomePath: string;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);

    if (pathname !== homePath) {
      // On another route (e.g. /blog): go home, then let the page scroll.
      router.push(`${homePath}#${sectionId}`);
      return;
    }

    setTimeout(() => handleScrollTo(sectionId), SCROLL_DELAY);
  };

  const toggleMobileMenu = () => setIsMenuOpen(!isMenuOpen);

  const switchHref = switchMap[pathname] ?? otherHomePath;

  return (
    <header className="bg-fis-header-bg sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          <NavMenu
            nav={nav}
            switchHref={switchHref}
            handleNavClick={handleNavClick}
          />
        </nav>

        {/* Mobile Menu Button */}
        <MobileButton
          label={nav.menuToggle}
          toggleMobileMenu={toggleMobileMenu}
        />
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu>
            <NavMenu
              nav={nav}
              switchHref={switchHref}
              handleNavClick={handleNavClick}
            />
          </MobileMenu>
        )}
      </AnimatePresence>
    </header>
  );
}
