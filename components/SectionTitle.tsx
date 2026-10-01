import { cn } from '@/lib/utils';

export function SectionTitle({
  children,
  className,
  as: Tag = 'h2'
}: {
  children: string;
  className?: string;
  as?: 'h2' | 'h3';
}) {
  return (
    <Tag className={cn('text-xl font-bold text-fis-logo mb-4', className)}>
      {children}
    </Tag>
  );
}
