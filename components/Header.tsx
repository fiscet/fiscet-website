'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import NavItemDesktop from './NavItemDesktop';
import NavItemMobile from './NavItemMobile';

const navLinks = [
  { href: '#home', text: 'Home' },
  { href: '#about', text: 'About' },
  { href: '#services', text: 'Services' },
  { href: '#contact', text: 'Contact' }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-fis-header-bg sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Image
            src="/images/Logo-2025.png"
            alt="Logo"
            width={230}
            height={100}
          />
        </motion.div>

        <nav className="hidden md:flex space-x-4">
          {navLinks.map((navLink) => (
            <NavItemDesktop key={navLink.href} href={navLink.href}>
              {navLink.text}
            </NavItemDesktop>
          ))}
        </nav>

        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{
            opacity: 0,
            height: 0,
            transition: {
              duration: 0.9, // Adjust duration to make it faster or slower
              ease: 'easeIn'
            }
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-fis-header overflow-hidden"
        >
          <nav className="flex flex-col space-y-2 px-4 py-4">
            {navLinks.map((navLink) => (
              <NavItemMobile
                key={navLink.href}
                href={navLink.href}
                setIsMenuOpen={setIsMenuOpen}
              >
                {navLink.text}
              </NavItemMobile>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
}
