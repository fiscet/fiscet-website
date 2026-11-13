import localFont from 'next/font/local';

// Self-hosted variable fonts (latin subset, SIL Open Font License) so the
// build never depends on fonts.googleapis.com being reachable.
export const inter = localFont({
  src: './inter-latin-wght-normal.woff2',
  weight: '100 900',
  display: 'swap'
});

export const spaceGrotesk = localFont({
  src: './space-grotesk-latin-wght-normal.woff2',
  weight: '300 700',
  display: 'swap',
  variable: '--font-hero-sans'
});

export const jetbrainsMono = localFont({
  src: './jetbrains-mono-latin-wght-normal.woff2',
  weight: '100 800',
  display: 'swap',
  variable: '--font-hero-mono'
});
