import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  getAllPublishedSlugs,
  getPostBySlug,
  getPublishedPosts,
} from '@/lib/blog';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.fiscet.it';
const AUTHOR_NAME = 'Christian Zanchetta';
const AUTHOR_URL =
  'https://www.linkedin.com/in/christian-zanchetta-a7140621/?locale=en-US';

export const revalidate = 3600;
export const dynamicParams = true;

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return getAllPublishedSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `${BASE_URL}/blog/${post.slug}`;
  return {
    title: `${post.title} · Fiscet Blog`,
    description: post.description,
    authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [AUTHOR_NAME],
      ...(post.image && { images: [{ url: `${BASE_URL}${post.image}` }] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      ...(post.image && { images: [`${BASE_URL}${post.image}`] }),
    },
  };
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const allPosts = getPublishedPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  // allPosts is sorted newest-first; "previous" is the next (older) item
  const olderPost = allPosts[currentIndex + 1] ?? null;
  const newerPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  const articleUrl = `${BASE_URL}/blog/${post.slug}`;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: { '@type': 'Person', name: AUTHOR_NAME, url: AUTHOR_URL },
    publisher: { '@type': 'Organization', name: 'Fiscet', url: BASE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': articleUrl },
    ...(post.image && { image: `${BASE_URL}${post.image}` }),
    isPartOf: {
      '@type': 'Blog',
      '@id': `${BASE_URL}/blog`,
      name: 'Fiscet Blog',
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${BASE_URL}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: articleUrl,
      },
    ],
  };

  return (
    <article className="max-w-3xl mx-auto pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <header className="pt-10 pb-8">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-fis-logo transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/blog"
                className="hover:text-fis-logo transition-colors"
              >
                Blog
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-foreground truncate max-w-[200px] md:max-w-md">
              {post.title}
            </li>
          </ol>
        </nav>
        <time
          dateTime={post.publishedAt}
          className="text-xs uppercase tracking-wider text-muted-foreground font-medium"
        >
          {formatDate(post.publishedAt)}
        </time>
        <h1 className="mt-2 text-3xl md:text-5xl font-bold text-fis-logo leading-tight">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          {post.description}
        </p>
        <p className="mt-6 text-sm text-muted-foreground">
          By{' '}
          <a
            href={AUTHOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fis-logo hover:underline"
          >
            {AUTHOR_NAME}
          </a>
        </p>
      </header>

      {post.image && (
        <div className="mb-10 rounded-2xl overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={630}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      )}

      <div className="prose prose-lg max-w-none prose-headings:text-fis-logo prose-a:text-fis-logo prose-strong:text-foreground">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>

      {(olderPost || newerPost) && (
        <nav
          aria-label="More posts"
          className="mt-16 pt-8 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {olderPost ? (
            <Link
              href={`/blog/${olderPost.slug}`}
              className="block rounded-2xl p-5 bg-secondary hover:bg-accent transition-colors"
            >
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                Previous
              </span>
              <span className="block mt-1 font-semibold text-fis-logo">
                {olderPost.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {newerPost ? (
            <Link
              href={`/blog/${newerPost.slug}`}
              className="block rounded-2xl p-5 bg-secondary hover:bg-accent transition-colors md:text-right"
            >
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                Next
              </span>
              <span className="block mt-1 font-semibold text-fis-logo">
                {newerPost.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      )}
    </article>
  );
}
