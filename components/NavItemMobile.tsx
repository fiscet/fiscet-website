import Link from 'next/link';

export default function NavItemMobile({
  href,
  setIsMenuOpen,
  children
}: {
  href: string;
  setIsMenuOpen: (value: boolean) => void;
  children: string;
}) {
  return (
    <Link href={href} onClick={() => setIsMenuOpen(false)}>
      <span className="block hover:text-gray-400 cursor-pointer">
        {children}
      </span>
    </Link>
  );
}
