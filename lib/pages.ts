import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

// Italian service pages: one markdown file per page in app/content/pages/it.
// A page exists only while its file does.

export type ServicePageFaq = { q: string; a: string };

export type ServicePage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  faq: ServicePageFaq[];
  content: string;
};

const PAGES_DIR = path.join(process.cwd(), 'app', 'content', 'pages', 'it');

export function getServicePageSlugs(): string[] {
  if (!fs.existsSync(PAGES_DIR)) return [];

  return fs
    .readdirSync(PAGES_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

export function servicePageExists(slug: string): boolean {
  return getServicePageSlugs().includes(slug);
}

export function getServicePage(slug: string): ServicePage | null {
  if (!servicePageExists(slug)) return null;

  const raw = fs.readFileSync(path.join(PAGES_DIR, `${slug}.md`), 'utf8');
  const { data, content } = matter(raw);
  const faq = Array.isArray(data.faq) ? data.faq : [];

  return {
    slug,
    title: String(data.title),
    description: String(data.description),
    h1: String(data.h1),
    faq: faq.map((item: { q: unknown; a: unknown }) => ({
      q: String(item.q),
      a: String(item.a)
    })),
    content
  };
}
