import Image from 'next/image';
import Link from 'next/link';

type Example = {
  name: string;
  href: string;
  logo: string;
  tag: string;
  description: string;
  logoSize: number;
};

const examples: Example[] = [
  {
    name: 'FisEvents',
    href: 'https://fisevents.com',
    logo: '/images/fisevents_logo.png',
    tag: 'SaaS · Next.js + Sanity',
    description: 'Event websites and attendee management in one platform',
    logoSize: 130
  },
  {
    name: 'MamiVibe',
    href: 'https://mamivibe.hu',
    logo: '/images/mamivibe_logo.png',
    tag: 'Website · Next.js + Sanity',
    description: 'Fast, content-driven business website on a headless CMS',
    logoSize: 100
  },
  {
    name: 'FisApart',
    href: 'https://fisapart.fiscet.it',
    logo: '/images/fisapart_logo.png',
    tag: 'AI demo · Vercel AI SDK',
    description: 'Conversational AI assistant for a booking website',
    logoSize: 100
  },
  {
    name: 'Build vs Buy',
    href: 'https://bvb.fiscet.it',
    logo: '/images/build-vs-buy_logo.png',
    tag: 'AI tool',
    description: 'Helps SMEs decide whether to build or buy software',
    logoSize: 100
  }
];

export default function HomeExamples() {
  return (
    <>
      <div className="flex gap-4 items-center mb-4">
        <span className="text-sm text-gray-400">Portfolio</span>
        <span className="block min-h-[1px] max-h-[1px] w-8 bg-gray-400"></span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {examples.map((example) => (
          <Link
            key={example.name}
            href={example.href}
            target="_blank"
            title={`${example.name}: ${example.description}`}
            className="flex flex-col items-center text-center p-6 shadow-2xs hover:shadow-lg rounded-md transition-shadow duration-300 ease-in-out"
          >
            <div className="flex items-center justify-center h-28">
              <Image
                src={example.logo}
                alt={example.name}
                width={example.logoSize}
                height={example.logoSize}
                className="rounded-md"
              />
            </div>
            <span className="mt-4 text-[11px] uppercase tracking-wider text-gray-400">
              {example.tag}
            </span>
            <span className="mt-1 font-semibold text-gray-800">
              {example.name}
            </span>
            <span className="mt-1 text-sm text-gray-500">
              {example.description}
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
