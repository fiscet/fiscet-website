import { House } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomeExamples() {
  return (
    <>
      <div className="flex gap-4 items-center mb-4">
        <span className="text-sm text-gray-400">Demo example</span>
        <span className="block min-h-[1px] max-h-[1px] w-8 bg-gray-400"></span>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="p-4 shadow-2xs hover:shadow-lg rounded-md transition-shadow duration-300 ease-in-out">
          <Link href="https://fisevents.com" target="_blank">
            <Image
              src="/images/fisevents_logo.png"
              alt="Sanity.io + NextJS"
              title="FisEvents: Sanity.io + NextJS"
              width={150}
              height={150}
              className="rounded-md"
            />
          </Link>
        </div>
        <div className="border-r-2 hidden md:block">&nbsp;</div>
        <div className="p-4 shadow-2xs hover:shadow-lg rounded-md transition-shadow duration-300 ease-in-out">
          <Link href="https://mamivibe.hu" target="_blank">
            <Image
              src="/images/mamivibe_logo.png"
              alt="Sanity.io + NextJS website"
              title="MamiVibe: Sanity.io + NextJS website"
              width={150}
              height={150}
              className="rounded-md"
            />
          </Link>
        </div>
        <div className="border-r-2 hidden md:block">&nbsp;</div>
        <div className="p-4 shadow-2xs hover:shadow-lg rounded-md transition-shadow duration-300 ease-in-out">
          <Link
            href="https://fisapart.vercel.app/"
            target="_blank"
            className="flex flex-col items-center"
          >
            <House className="w-10 h-10 text-blue-600" />
            <span className="text-violet-800">AI Demo</span>
          </Link>
        </div>
      </div>
    </>
  );
}
