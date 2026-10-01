import type { MetadataRoute } from 'next';
import { getPublishedPosts } from '@/lib/blog';
import {
  HOME_PATHS,
  absoluteUrl,
  blogIndexPaths,
  languageAlternates,
  postLanguagePaths,
  postPath
} from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPublishedPosts();
  const blogPaths = blogIndexPaths();

  const lastUpdate = (lang: 'it' | 'en') => {
    const latest = posts.find((p) => p.lang === lang);
    return latest ? new Date(latest.publishedAt) : new Date();
  };

  const homeAlternates = { languages: languageAlternates(HOME_PATHS) };
  const blogAlternates = { languages: languageAlternates(blogPaths) };

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl(HOME_PATHS.it),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: homeAlternates
    },
    {
      url: absoluteUrl(HOME_PATHS.en),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: homeAlternates
    },
    {
      url: absoluteUrl(blogPaths.it),
      lastModified: lastUpdate('it'),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: blogAlternates
    },
    {
      url: absoluteUrl(blogPaths.en),
      lastModified: lastUpdate('en'),
      changeFrequency: 'weekly',
      priority: 0.5,
      alternates: blogAlternates
    }
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => {
    const languagePaths = postLanguagePaths(post);
    return {
      url: absoluteUrl(postPath(post)),
      lastModified: new Date(post.publishedAt),
      changeFrequency: 'monthly',
      priority: post.lang === 'it' ? 0.7 : 0.4,
      ...(languagePaths && {
        alternates: { languages: languageAlternates(languagePaths) }
      })
    };
  });

  return [...staticRoutes, ...postRoutes];
}
