'use client';

import Link from 'next/link';
import { JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import { motion } from 'motion/react';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-hero-sans'
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-hero-mono'
});

export default function HomeHeroClaim() {
  return (
    <div
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} @container relative w-full overflow-hidden rounded-lg bg-[oklch(1_0_0)] text-[oklch(0.22_0.02_255)]`}
      style={{ fontFamily: 'var(--font-hero-sans)' }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,oklch(0.72_0.17_45_/_0.12),transparent_52%)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[18%] -bottom-[10%] leading-none font-bold text-[oklch(0.22_0.02_255_/_0.06)] select-none"
        style={{ fontSize: 'clamp(8rem, 40cqw, 22rem)' }}
      >
        ?
      </div>

      <div className="relative flex flex-col gap-8 px-[6%] py-[4.75%]">
        <div
          className="flex flex-col"
          style={{ gap: 'clamp(1.25rem, 5cqw, 3rem)' }}
        >
          <motion.h2
            className="m-0 font-bold"
            style={{
              fontSize: 'clamp(1.6rem, 10.6cqw, 6.4rem)',
              lineHeight: 0.86,
              letterSpacing: '-0.045em'
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Want an app in a{' '}
            <span className="text-[oklch(0.58_0.15_45)]">short time?</span>
          </motion.h2>

          <div className="flex items-stretch gap-[2%]">
            <div className="w-1 shrink-0 rounded-full bg-[oklch(0.68_0.17_45)]" />
            <div className="flex flex-col gap-2">
              <motion.h3
                className="m-0 font-semibold"
                style={{
                  fontSize: 'clamp(1rem, 2.9cqw, 2.6rem)',
                  letterSpacing: '-0.02em'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Yes — because we start from FisServer.
              </motion.h3>
              <div
                className="max-w-[62ch] text-[oklch(0.44_0.015_255)]"
                style={{
                  fontSize: 'clamp(0.7rem, 1.75cqw, 1.6rem)',
                  lineHeight: 1.4
                }}
              >
                Our own software foundation: multi-tenant backend, roles and
                permissions, APIs. Already built, already tested. Your app is
                what we add on top.
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-end gap-x-[4%] gap-y-4 border-t border-[oklch(0.9_0.008_250)] pt-[3%]">
          <div className="flex flex-col gap-1">
            <span
              className="font-bold text-[oklch(0.58_0.15_45)]"
              style={{
                fontFamily: 'var(--font-hero-mono)',
                fontSize: 'clamp(1.1rem, 3.8cqw, 3.4rem)'
              }}
            >
              weeks
            </span>
            <span
              className="text-[oklch(0.5_0.015_255)]"
              style={{ fontSize: 'clamp(0.55rem, 1.3cqw, 1.1rem)' }}
            >
              to first release
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span
              className="font-bold"
              style={{
                fontFamily: 'var(--font-hero-mono)',
                fontSize: 'clamp(1.1rem, 3.8cqw, 3.4rem)'
              }}
            >
              1
            </span>
            <span
              className="text-[oklch(0.5_0.015_255)]"
              style={{ fontSize: 'clamp(0.55rem, 1.3cqw, 1.1rem)' }}
            >
              proven foundation, reused
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span
              className="font-bold"
              style={{
                fontFamily: 'var(--font-hero-mono)',
                fontSize: 'clamp(1.1rem, 3.8cqw, 3.4rem)'
              }}
            >
              0
            </span>
            <span
              className="text-[oklch(0.5_0.015_255)]"
              style={{ fontSize: 'clamp(0.55rem, 1.3cqw, 1.1rem)' }}
            >
              boilerplate rewritten
            </span>
          </div>

          <Link
            href="#contact"
            className="ml-auto rounded-md bg-[oklch(0.22_0.025_255)] font-semibold text-[oklch(0.97_0.005_250)] transition-opacity hover:opacity-90"
            style={{
              fontSize: 'clamp(0.7rem, 1.6cqw, 1.4rem)',
              padding:
                'clamp(0.5rem, 1.9cqw, 1.1rem) clamp(0.8rem, 3.4cqw, 1.9rem)'
            }}
          >
            Let&apos;s work together
          </Link>
        </div>
      </div>
    </div>
  );
}
