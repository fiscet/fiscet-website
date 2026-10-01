import BlogIndex, { getBlogIndexMetadata } from '@/components/blog/BlogIndex';

export const revalidate = 3600;

export const metadata = getBlogIndexMetadata('en');

export default function EnglishBlogIndexPage() {
  return <BlogIndex locale="en" />;
}
