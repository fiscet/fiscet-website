import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Link to a section of a home page: '/#about' for '/', '/en#about' for '/en'.
export function homeAnchor(homePath: string, id: string): string {
  return homePath === '/' ? `/#${id}` : `${homePath}#${id}`;
}

// Sections carry scroll-margin-top (globals.css), so scrollIntoView already
// leaves room for the sticky header.
export const handleScrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

// Smooth-scroll to the section named in the URL hash. Used on the home page
// so cross-page links like /#about land correctly after navigation.
export const scrollToHash = () => {
  const id = window.location.hash.replace('#', '');
  if (!id) return;
  // Wait for layout so getBoundingClientRect is accurate after navigation.
  requestAnimationFrame(() => handleScrollTo(id));
};