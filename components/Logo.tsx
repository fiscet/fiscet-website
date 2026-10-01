import Image from 'next/image';
import Link from 'next/link';

// Logo-2025.png is 1479x647.
export default function Logo({ href }: { href: string }) {
  return (
    <Link href={href} aria-label="Fiscet, home" className="shrink-0">
      <Image
        src="/images/Logo-2025.png"
        alt="Fiscet"
        width={1479}
        height={647}
        priority
        className="h-10 w-auto md:h-11"
      />
    </Link>
  );
}
