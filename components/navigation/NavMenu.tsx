'use client';

import Link from 'next/link';
import NavItem from './NavItem';

export const NAV_LINKS = [
  { sectionId: 'home', text: 'Home' },
  { sectionId: 'about', text: 'About' },
  { sectionId: 'services', text: 'Services' },
  { sectionId: 'contact', text: 'Contact' }
] as const;

export type NavProps = {
  handleNavClick: (sectionId: string) => void;
};

export default function NavMenu({ handleNavClick }: NavProps) {
  return (
    <>
      {NAV_LINKS.map(({ sectionId, text }) => (
        <NavItem
          key={sectionId}
          sectionId={sectionId}
          handleClick={handleNavClick}
        >
          {text}
        </NavItem>
      ))}
      <Link
        href="/blog"
        className="text-fis-logo hover:text-gray-400 cursor-pointer"
      >
        Blog
      </Link>
    </>
  );
}
