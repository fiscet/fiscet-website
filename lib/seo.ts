import { getTranslation, type BlogPost } from '@/lib/blog';
import { getDictionary } from '@/lib/i18n';
import { SITE_URL } from '@/lib/site';

export function absoluteUrl(path: string): string {
  return path === '/' ? SITE_URL : `${SITE_URL}${path}`;
}

type LanguagePaths = { it: string; en: string; xDefault?: boolean };

// hreflang map for a page that exists in both languages.
export function languageAlternates({
  it,
  en,
  xDefault = false
}: LanguagePaths): Record<string, string> {
  return {
    it: absoluteUrl(it),
    en: absoluteUrl(en),
    ...(xDefault && { 'x-default': absoluteUrl(it) })
  };
}

export const HOME_PATHS: LanguagePaths = { it: '/', en: '/en', xDefault: true };

export function blogIndexPaths(): LanguagePaths {
  return {
    it: getDictionary('it').nav.blogHref,
    en: getDictionary('en').nav.blogHref
  };
}

export function postPath(post: BlogPost): string {
  return `${getDictionary(post.lang).nav.blogHref}/${post.slug}`;
}

// Paths of an article and its translation, or null when it has none.
export function postLanguagePaths(post: BlogPost): LanguagePaths | null {
  const translation = getTranslation(post);
  if (!translation) return null;

  const [itPost, enPost] =
    post.lang === 'it' ? [post, translation] : [translation, post];
  return { it: postPath(itPost), en: postPath(enPost) };
}
