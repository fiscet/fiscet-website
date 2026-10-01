import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Service } from './data';
import { SectionTitle } from '../SectionTitle';

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="bg-white shadow-lg rounded-2xl overflow-hidden h-full">
      <CardHeader>
        {service.icon && (
          <div className="mx-auto">
            <Image
              src={`/images/services/${service.icon}`}
              alt={service.title}
              width={50}
              height={50}
            />
          </div>
        )}
        <CardTitle className="text-center">
          <SectionTitle>{service.title}</SectionTitle>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 text-center italic">
        <p className="text-gray-600">{service.description}</p>
        {service.link && (
          <Link
            href={service.link.href}
            className="inline-block mt-4 text-sm font-semibold not-italic text-fis-logo hover:underline"
          >
            {service.link.label}
          </Link>
        )}
      </CardContent>
    </Card>
  );
}
