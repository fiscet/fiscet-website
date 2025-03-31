import Link from 'next/link';

export default function NavItemDesktop({
  href,
  children
}: {
  href: string;
  children: string;
}) {
  return (
    <Link href={href}>
      <span className="text-fis-logo hover:text-gray-400 cursor-pointer">
        {children}
      </span>
    </Link>
  );
}
