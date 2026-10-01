'use client';

import Link from 'next/link';
import type { Dictionary } from '@/lib/i18n';
import NavItem from './NavItem';

export const NAV_SECTIONS = ['home', 'about', 'services', 'contact'] as const;

export type NavProps = {
  nav: Dictionary['nav'];
  switchHref: string;
  handleNavClick: (sectionId: string) => void;
};

export default function NavMenu({ nav, switchHref, handleNavClick }: NavProps) {
  return (
    <>
      {NAV_SECTIONS.map((sectionId) => (
        <NavItem
          key={sectionId}
          sectionId={sectionId}
          handleClick={handleNavClick}
        >
          {nav[sectionId]}
        </NavItem>
      ))}
      <Link
        href={nav.blogHref}
        className="text-fis-logo hover:text-gray-400 cursor-pointer"
      >
        {nav.blog}
      </Link>
      <Link
        href={switchHref}
        hrefLang={nav.switchHrefLang}
        lang={nav.switchHrefLang}
        title={nav.switchTitle}
        aria-label={nav.switchTitle}
        className="text-fis-logo hover:text-gray-400 cursor-pointer font-semibold"
      >
        {nav.switchLabel}
      </Link>
    </>
  );
}
