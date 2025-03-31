import Image from 'next/image';
import Link from 'next/link';

export default function HomeExamples() {
  return (
    <>
      <div className="flex gap-4 items-center mb-4">
        <span className="text-sm text-gray-400">Demo example</span>
        <span className="block min-h-[1px] max-h-[1px] w-8 bg-gray-400"></span>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
        <div className="flex gap-4">
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
      </div>
    </>
  );
}
