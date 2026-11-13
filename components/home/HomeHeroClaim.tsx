import Image from 'next/image';
import Link from 'next/link';
import { FileText } from 'lucide-react';
import { jetbrainsMono, spaceGrotesk } from '@/lib/fonts';
import type { Dictionary } from '@/lib/i18n';
import { AUTHOR_NAME } from '@/lib/site';

// The page's h1 lives here: one block with title, lead, actions and numbers.
export default function HomeHeroClaim({
  h1,
  hero,
  guide
}: {
  h1: string;
  hero: Dictionary['home']['hero'];
  guide?: NonNullable<Dictionary['guide']>;
}) {
  return (
    <div
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} relative w-full overflow-hidden rounded-2xl bg-[oklch(1_0_0)] text-[oklch(0.22_0.02_255)]`}
      style={{ fontFamily: 'var(--font-hero-sans)' }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,oklch(0.72_0.17_45_/_0.12),transparent_52%)]" />

      <div className="relative grid gap-8 px-6 py-10 md:px-14 md:py-16 xl:grid-cols-[minmax(0,1fr)_19rem] xl:gap-x-12">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <Image
              src="/images/christian-zanchetta.jpg"
              alt={AUTHOR_NAME}
              width={96}
              height={96}
              priority
              className="h-12 w-12 rounded-full object-cover object-top ring-2 ring-white"
            />
            <p className="text-sm font-medium text-[oklch(0.45_0.02_255)] md:text-base">
              {hero.eyebrow}
            </p>
          </div>

          <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            {h1}
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-[oklch(0.35_0.015_255)] md:text-xl">
            {hero.lead}
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="#contact"
              className="rounded-md bg-fis-logo px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
            >
              {hero.cta}
            </Link>
            <Link
              href="#services"
              className="rounded-md border border-fis-logo/30 bg-white px-6 py-3 font-semibold text-fis-logo transition-colors hover:border-fis-logo"
            >
              {hero.secondaryCta}
            </Link>
          </div>
        </div>

        {guide && (
          <aside
            aria-label={guide.banner.label}
            className="self-center rounded-xl border border-fis-logo/20 bg-white p-5 shadow-sm"
          >
            <p className="flex items-center gap-2 text-sm font-semibold text-[oklch(0.5_0.15_45)]">
              <FileText aria-hidden="true" className="h-4 w-4" />
              {guide.banner.label}
            </p>
            <p className="mt-3 text-xl font-bold leading-snug">
              {guide.banner.title}
            </p>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-[oklch(0.42_0.015_255)]">
              {guide.banner.text}
            </p>
            <Link
              href={guide.path}
              className="mt-4 inline-block rounded-md bg-fis-logo px-5 py-2.5 font-semibold text-white transition-opacity hover:opacity-90"
            >
              {guide.banner.cta}
            </Link>
          </aside>
        )}

        <dl className="grid gap-6 border-t border-[oklch(0.9_0.008_250)] pt-8 sm:grid-cols-3 xl:col-span-2">
          {hero.stats.map((stat, index) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <dt
                className={
                  index === 0
                    ? 'order-1 text-2xl font-bold text-[oklch(0.5_0.15_45)] md:text-3xl'
                    : 'order-1 text-2xl font-bold md:text-3xl'
                }
                style={{ fontFamily: 'var(--font-hero-mono)' }}
              >
                {stat.value}
              </dt>
              <dd className="order-2 text-[0.95rem] text-[oklch(0.42_0.015_255)]">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
