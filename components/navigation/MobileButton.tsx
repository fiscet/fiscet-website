export type MobileButtonProps = {
  label: string;
  toggleMobileMenu: () => void;
};

export default function MobileButton({
  label,
  toggleMobileMenu
}: MobileButtonProps) {
  return (
    <button
      className="md:hidden p-2 focus:outline-none cursor-pointer"
      onClick={toggleMobileMenu}
      aria-label={label}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>
  );
}
