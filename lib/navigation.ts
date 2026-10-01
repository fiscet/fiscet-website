import { getDictionary, type Locale } from '@/lib/i18n';
import { servicePageExists } from '@/lib/pages';
import { homeAnchor } from '@/lib/utils';

export type NavLink = { label: string; href: string };

// Service card links: '#section' points to the home page, '/slug' to a
// service page, which counts only while its markdown file exists.
export function resolveServiceHref(locale: Locale, href: string): string | null {
  if (href.startsWith('#')) {
    return homeAnchor(getDictionary(locale).homePath, href.slice(1));
  }
  if (href.startsWith('/') && !servicePageExists(href.slice(1))) return null;
  return href;
}

// Services shown in the header menu and the footer.
export function getServiceLinks(locale: Locale): NavLink[] {
  return getDictionary(locale).home.services.items.flatMap((item) => {
    if (!item.link) return [];
    const href = resolveServiceHref(locale, item.link.href);
    return href ? [{ label: item.title, href }] : [];
  });
}
