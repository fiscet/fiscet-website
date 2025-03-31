import Image from 'next/image';
import Link from 'next/link';

export default function HomeTech() {
  return (
    <>
      <div className="flex gap-4 items-center mb-4">
        <span className="text-sm text-gray-400">Most used technologies</span>
        <span className="block min-h-[1px] max-h-[1px] w-8 bg-gray-400"></span>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
        <div className="flex gap-4">
          <Link href="https://payloadcms.com" target="_blank">
            <Image
              src="/images/payload_cms_logo.jpg"
              alt="Backend with Payload CMS + NextJS"
              title="Backend with Payload CMS + NextJS"
              width={50}
              height={50}
              className="rounded-md"
            />
          </Link>
          <Link href="https://sanity.io" target="_blank">
            <Image
              src="/images/sanity_io_logo.jpg"
              alt="Backend with Sanity.io + NextJS"
              title="Backend with Sanity.io + NextJS"
              width={50}
              height={50}
              className="rounded-md"
            />
          </Link>
          <Link href="https://strapi.io" target="_blank">
            <Image
              src="/images/strapi_io_logo.png"
              alt="Backend with Strapi + NextJS"
              title="Backend with Strapi + NextJS"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <div className="text-4xl font-bold">+</div>
        <div>
          <Link href="https://nextjs.org" target="_blank">
            <Image
              src="/images/nextjs_logo.jpg"
              alt="Frontend with Next.js"
              title="Frontend with Next.js"
              width={50}
              height={50}
              className="rounded-md"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
