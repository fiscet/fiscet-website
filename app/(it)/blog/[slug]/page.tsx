import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogArticle, {
  getBlogArticleMetadata
} from '@/components/blog/BlogArticle';
import { getAllPublishedSlugs, getPostBySlug } from '@/lib/blog';

export const revalidate = 3600;
export const dynamicParams = true;

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return getAllPublishedSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return getBlogArticleMetadata(post, 'it');
}

export default async function ItalianBlogArticlePage({
  params
}: {
  params: Params;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return <BlogArticle post={post} locale="it" />;
}
