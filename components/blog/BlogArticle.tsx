import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import LangBadge from '@/components/LangBadge';
import { getPublishedPosts, type BlogPost } from '@/lib/blog';
import { formatDate, getDictionary, type Locale } from '@/lib/i18n';
import { AUTHOR_NAME, AUTHOR_URL, SITE_NAME, SITE_URL } from '@/lib/site';

const OG_LOCALES = { it: 'it_IT', en: 'en_US' } as const;

export function getBlogArticleMetadata(
  post: BlogPost,
  locale: Locale
): Metadata {
  const { blog, nav } = getDictionary(locale);
  const url = `${SITE_URL}${nav.blogHref}/${post.slug}`;

  return {
    title: `${post.title}${blog.titleSuffix}`,
    description: post.description,
    authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      locale: OG_LOCALES[post.lang],
      publishedTime: post.publishedAt,
      authors: [AUTHOR_NAME],
      ...(post.image && { images: [{ url: `${SITE_URL}${post.image}` }] })
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      ...(post.image && { images: [`${SITE_URL}${post.image}`] })
    }
  };
}

export default function BlogArticle({
  post,
  locale
}: {
  post: BlogPost;
  locale: Locale;
}) {
  const { blog, nav, homePath, langBadge } = getDictionary(locale);
  const blogUrl = `${SITE_URL}${nav.blogHref}`;
  const homeUrl = homePath === '/' ? SITE_URL : `${SITE_URL}${homePath}`;

  const allPosts = getPublishedPosts(locale);
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  // allPosts is sorted newest-first; "previous" is the next (older) item
  const olderPost = allPosts[currentIndex + 1] ?? null;
  const newerPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  const articleUrl = `${blogUrl}/${post.slug}`;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    inLanguage: post.lang,
    author: { '@type': 'Person', name: AUTHOR_NAME, url: AUTHOR_URL },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': articleUrl },
    ...(post.image && { image: `${SITE_URL}${post.image}` }),
    isPartOf: {
      '@type': 'Blog',
      '@id': blogUrl,
      name: blog.name
    }
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: blog.home, item: homeUrl },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: blogUrl
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: articleUrl
      }
    ]
  };

  return (
    <article lang={post.lang} className="max-w-3xl mx-auto pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <header className="pt-10 pb-8">
        <nav lang={locale} aria-label={blog.breadcrumbLabel} className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link
                href={homePath}
                className="hover:text-fis-logo transition-colors"
              >
                {blog.home}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href={nav.blogHref}
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
        <div
          lang={locale}
          className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground font-medium"
        >
          <time dateTime={post.publishedAt}>
            {formatDate(post.publishedAt, locale)}
          </time>
          <LangBadge lang={post.lang} srLabel={langBadge.srLabel} />
        </div>
        <h1 className="mt-2 text-3xl md:text-5xl font-bold text-fis-logo leading-tight">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          {post.description}
        </p>
        <p lang={locale} className="mt-6 text-sm text-muted-foreground">
          {blog.by}{' '}
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
        <figure className="mb-10">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={630}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
          {post.imageCredit && (
            <figcaption className="mt-2 px-1 text-xs text-muted-foreground">
              {post.imageCredit}
            </figcaption>
          )}
        </figure>
      )}

      <div className="prose prose-lg max-w-none prose-headings:text-fis-logo prose-a:text-fis-logo prose-strong:text-foreground">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>

      {(olderPost || newerPost) && (
        <nav
          lang={locale}
          aria-label={blog.morePostsLabel}
          className="mt-16 pt-8 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {olderPost ? (
            <Link
              href={`${nav.blogHref}/${olderPost.slug}`}
              className="block rounded-2xl p-5 bg-secondary hover:bg-accent transition-colors"
            >
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                {blog.previous}
              </span>
              <span
                lang={olderPost.lang}
                className="block mt-1 font-semibold text-fis-logo"
              >
                {olderPost.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {newerPost ? (
            <Link
              href={`${nav.blogHref}/${newerPost.slug}`}
              className="block rounded-2xl p-5 bg-secondary hover:bg-accent transition-colors md:text-right"
            >
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                {blog.next}
              </span>
              <span
                lang={newerPost.lang}
                className="block mt-1 font-semibold text-fis-logo"
              >
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
