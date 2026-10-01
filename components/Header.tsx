'use client';

import { useEffect, useId, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'motion/react';
import type { Dictionary } from '@/lib/i18n';
import type { NavLink } from '@/lib/navigation';
import { cn, homeAnchor } from '@/lib/utils';
import Logo from './Logo';
import ServicesMenu from './navigation/ServicesMenu';
import MobileButton from './navigation/MobileButton';
import MobileMenu from './navigation/MobileMenu';

const LINK_CLASS = 'font-medium text-fis-logo hover:text-fis-logo/70';
const CTA_CLASS =
  'rounded-md bg-fis-logo font-semibold text-white transition-opacity hover:opacity-90';

export default function Header({
  homePath,
  nav,
  services,
  switchMap,
  otherHomePath
}: {
  homePath: string;
  nav: Dictionary['nav'];
  services: NavLink[];
  switchMap: Record<string, string>;
  otherHomePath: string;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();

  // Close the mobile menu whenever the route changes.
  useEffect(() => setIsMenuOpen(false), [pathname]);

  const closeMenu = () => setIsMenuOpen(false);
  const switchHref = switchMap[pathname] ?? otherHomePath;
  const servicesHref = homeAnchor(homePath, 'services');
  const aboutHref = homeAnchor(homePath, 'about');
  const contactHref = homeAnchor(homePath, 'contact');
  const isBlog = pathname.startsWith(nav.blogHref);

  const languageSwitch = (
    <Link
      href={switchHref}
      hrefLang={nav.switchHrefLang}
      lang={nav.switchHrefLang}
      title={nav.switchTitle}
      aria-label={nav.switchTitle}
      className="text-sm font-semibold text-fis-logo/70 hover:text-fis-logo"
    >
      {nav.switchLabel}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-fis-header-bg/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:h-[72px]">
        <Logo href={homePath} />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {services.length > 0 ? (
            <ServicesMenu label={nav.services} links={services} />
          ) : (
            <Link href={servicesHref} className={LINK_CLASS}>
              {nav.services}
            </Link>
          )}
          <Link href={aboutHref} className={LINK_CLASS}>
            {nav.about}
          </Link>
          <Link
            href={nav.blogHref}
            aria-current={isBlog ? 'page' : undefined}
            className={cn(LINK_CLASS, isBlog && 'underline underline-offset-8')}
          >
            {nav.blog}
          </Link>
          <Link href={contactHref} className={cn(CTA_CLASS, 'px-5 py-2.5')}>
            {nav.cta}
          </Link>
          {languageSwitch}
        </nav>

        {/* Mobile: contact button always in reach, rest in the menu */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href={contactHref}
            onClick={closeMenu}
            className={cn(CTA_CLASS, 'px-3.5 py-2 text-sm')}
          >
            {nav.cta}
          </Link>
          <MobileButton
            label={nav.menuToggle}
            isOpen={isMenuOpen}
            controls={menuId}
            toggleMobileMenu={() => setIsMenuOpen((value) => !value)}
          />
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu id={menuId}>
            {services.length > 0 ? (
              <>
                <p className="pt-2 pb-1 text-xs font-semibold uppercase tracking-wider text-fis-logo/60">
                  {nav.services}
                </p>
                {services.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={cn(LINK_CLASS, 'py-2.5 pl-3')}
                  >
                    {link.label}
                  </Link>
                ))}
              </>
            ) : (
              <Link
                href={servicesHref}
                onClick={closeMenu}
                className={cn(LINK_CLASS, 'py-2.5')}
              >
                {nav.services}
              </Link>
            )}
            <div className="my-2 border-t border-border" />
            <Link
              href={aboutHref}
              onClick={closeMenu}
              className={cn(LINK_CLASS, 'py-2.5')}
            >
              {nav.about}
            </Link>
            <Link
              href={nav.blogHref}
              onClick={closeMenu}
              className={cn(LINK_CLASS, 'py-2.5')}
            >
              {nav.blog}
            </Link>
            <div className="pt-3">{languageSwitch}</div>
          </MobileMenu>
        )}
      </AnimatePresence>
    </header>
  );
}
