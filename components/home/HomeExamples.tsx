import Image from 'next/image';
import Link from 'next/link';
import type { Dictionary, ExampleName } from '@/lib/i18n/types';
import RichText from '../RichText';
import { SectionTitle } from '../SectionTitle';

type Example = {
  name: ExampleName;
  href: string;
  logo: string;
  logoSize: number;
  // Wide logos: explicit size instead of the square logoSize.
  logoWidth?: number;
  logoHeight?: number;
};

// Client work first, then my own products.
const examples: Example[] = [
  {
    name: 'Studio Dentistico Marin',
    href: 'https://dentistaconegliano.it',
    logo: '/images/marin_logo.webp',
    logoSize: 100,
    logoWidth: 220,
    logoHeight: 45
  },
  {
    name: 'MamiVibe',
    href: 'https://mamivibe.hu',
    logo: '/images/mamivibe_logo.png',
    logoSize: 100
  },
  {
    name: 'Build vs Buy',
    href: 'https://bvb.fiscet.it',
    logo: '/images/build-vs-buy_logo.png',
    logoSize: 100
  },
  {
    name: 'FisApart',
    href: 'https://fisapart.fiscet.it',
    logo: '/images/fisapart_logo.png',
    logoSize: 100
  },
  {
    name: 'FisEvents',
    href: 'https://fisevents.com',
    logo: '/images/fisevents_logo.png',
    logoSize: 130
  },
  {
    name: 'FisServer',
    href: 'https://fisserver.fiscet.it',
    logo: '/images/fisserver_logo.png',
    logoSize: 100
  }
];

export default function HomeExamples({
  home
}: {
  home: Dictionary['home'];
}) {
  return (
    <>
      <SectionTitle className="text-3xl">{home.portfolioLabel}</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {examples.map((example) => {
          const { tag, description } = home.examples[example.name];

          return (
            <Link
              key={example.name}
              href={example.href}
              target="_blank"
              title={`${example.name}: ${description}`}
              className="flex flex-col items-center text-center p-6 shadow-2xs hover:shadow-lg rounded-md transition-shadow duration-300 ease-in-out"
            >
              <div className="flex items-center justify-center h-28">
                <Image
                  src={example.logo}
                  alt={example.name}
                  width={example.logoWidth ?? example.logoSize}
                  height={example.logoHeight ?? example.logoSize}
                  className="rounded-md object-contain"
                />
              </div>
              <span className="mt-4 text-[11px] uppercase tracking-wider text-gray-500">
                {tag}
              </span>
              <span className="mt-1 font-semibold text-gray-800">
                {example.name}
              </span>
              <span className="mt-1 text-sm text-gray-600">{description}</span>
            </Link>
          );
        })}
      </div>
      {home.portfolioNote && (
        <p className="mt-6 text-sm text-gray-600">
          <RichText text={home.portfolioNote} />
        </p>
      )}
    </>
  );
}
