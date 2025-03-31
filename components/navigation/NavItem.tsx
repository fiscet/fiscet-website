export default function NavItem({
  sectionId,
  handleClick,
  children
}: {
  sectionId: string;
  handleClick: (sectionId: string) => void;
  children: string;
}) {
  return (
    <div onClick={() => handleClick(sectionId)}>
      <span className="text-fis-logo hover:text-gray-400 cursor-pointer">
        {children}
      </span>
    </div>
  );
}
