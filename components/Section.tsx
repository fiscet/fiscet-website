export default function Section({
  children,
  id,
  className
}: Readonly<{
  children: React.ReactNode;
  id?: string;
  className?: string;
}>) {
  return (
    <section id={id ?? new Date().getTime().toString()} className={className}>
      {children}
    </section>
  );
}
