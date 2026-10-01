import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Service } from './data';

export function ServiceCard({ service }: { service: Service }) {
  const content = (
    <>
      {service.icon && (
        <Image
          src={`/images/services/${service.icon}`}
          alt=""
          width={44}
          height={44}
        />
      )}
      <h3 className="mt-4 text-lg font-bold text-fis-logo">{service.title}</h3>
      <p className="mt-2 text-[0.98rem] leading-relaxed text-gray-700">
        {service.description}
      </p>
      {service.link && (
        <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-fis-logo group-hover:underline">
          {service.link.label}
          <ArrowRight aria-hidden className="h-4 w-4" />
        </span>
      )}
    </>
  );

  const className =
    'group flex h-full flex-col rounded-2xl border border-border bg-white p-6 text-left shadow-sm';

  // The whole card is the link when the service has a page.
  return service.link ? (
    <Link
      href={service.link.href}
      className={`${className} transition-shadow hover:shadow-md`}
    >
      {content}
    </Link>
  ) : (
    <div className={className}>{content}</div>
  );
}
