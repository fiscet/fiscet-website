import type { MetadataRoute } from 'next';
import { getPublishedPosts } from '@/lib/blog';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.fiscet.it';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPublishedPosts();

  const lastBlogUpdate = posts[0]?.publishedAt
    ? new Date(posts[0].publishedAt)
    : new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: lastBlogUpdate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}
