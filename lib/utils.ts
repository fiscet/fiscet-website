import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleScrollTo = (id: string) => {
  const element = document.getElementById(id);

  if (element) {
    const headerOffset = 140; // Height of the sticky header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// Smooth-scroll to the section named in the URL hash, accounting for the
// sticky header. Used on the home page so cross-page links like /#about land
// correctly after navigation.
export const scrollToHash = () => {
  const id = window.location.hash.replace('#', '');
  if (!id) return;
  // Wait for layout so getBoundingClientRect is accurate after navigation.
  requestAnimationFrame(() => handleScrollTo(id));
};