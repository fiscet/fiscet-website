import { getPublishedPosts } from '@/lib/blog';
import { getDictionary } from '.';

// Path of each page mapped to its equivalent in the other language. Pages
// without an entry have no translation: the language switch falls back to
// the other language's home.
export function getLanguageSwitchMap(): Record<string, string> {
  const itBlog = getDictionary('it').nav.blogHref;
  const enBlog = getDictionary('en').nav.blogHref;

  const pairs: [it: string, en: string][] = [
    ['/', '/en'],
    [itBlog, enBlog]
  ];

  const posts = getPublishedPosts();
  for (const itPost of posts) {
    if (itPost.lang !== 'it' || !itPost.translationKey) continue;
    const enPost = posts.find(
      (p) => p.lang === 'en' && p.translationKey === itPost.translationKey
    );
    if (enPost) {
      pairs.push([`${itBlog}/${itPost.slug}`, `${enBlog}/${enPost.slug}`]);
    }
  }

  const map: Record<string, string> = {};
  for (const [itPath, enPath] of pairs) {
    map[itPath] = enPath;
    map[enPath] = itPath;
  }
  return map;
}
