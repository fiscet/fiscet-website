import BlogIndex, { getBlogIndexMetadata } from '@/components/blog/BlogIndex';

export const revalidate = 3600;

export const metadata = getBlogIndexMetadata('it');

export default function ItalianBlogIndexPage() {
  return <BlogIndex locale="it" />;
}
