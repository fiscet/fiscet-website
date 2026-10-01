import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import LangBadge from '@/components/LangBadge';
import { getAllPosts, getPublishedPosts, isPostPublished } from '@/lib/blog';
import { formatDate, getDictionary, type Locale } from '@/lib/i18n';
import { AUTHOR_NAME, AUTHOR_URL, SITE_NAME, SITE_URL } from '@/lib/site';

export function getBlogIndexMetadata(locale: Locale): Metadata {
  const { blog, nav, ogLocale } = getDictionary(locale);
  const url = `${SITE_URL}${nav.blogHref}`;

  return {
    title: blog.title,
    description: blog.metaDescription,
    authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
    alternates: { canonical: url },
    openGraph: {
      title: blog.title,
      description: blog.metaDescription,
      url,
      type: 'website',
      locale: ogLocale
    }
  };
}

export default function BlogIndex({ locale }: { locale: Locale }) {
  const { blog, nav, homePath, langBadge } = getDictionary(locale);
  const blogUrl = `${SITE_URL}${nav.blogHref}`;
  const homeUrl = homePath === '/' ? SITE_URL : `${SITE_URL}${homePath}`;

  const allPosts = getAllPosts();
  const publishedPosts = getPublishedPosts();

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': blogUrl,
    name: blog.name,
    description: blog.metaDescription,
    url: blogUrl,
    inLanguage: locale,
    author: { '@type': 'Person', name: AUTHOR_NAME, url: AUTHOR_URL },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL
    },
    blogPost: publishedPosts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      description: p.description,
      datePublished: p.publishedAt,
      inLanguage: p.lang,
      url: `${blogUrl}/${p.slug}`,
      author: { '@type': 'Person', name: AUTHOR_NAME }
    }))
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
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="max-w-3xl mx-auto pt-10 pb-8 text-center">
        <h1 className="text-4xl font-bold text-fis-logo mb-4">Blog</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {blog.intro}
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
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
      </section>

      <section className="max-w-3xl mx-auto pb-20">
        <ol className="flex flex-col">
          {allPosts.map((post) => {
            const published = isPostPublished(post);
            const href = `${nav.blogHref}/${post.slug}`;

            return (
              <li
                key={post.slug}
                className="group border-b border-border py-7 last:border-b-0 first:pt-0"
              >
                <article
                  lang={post.lang}
                  className={`flex gap-4 md:gap-6 ${!published ? 'opacity-60' : ''}`}
                >
                  <div className="flex-1 min-w-0">
                    <div
                      lang={locale}
                      className="flex items-center gap-2 flex-wrap text-xs uppercase tracking-wider font-medium"
                    >
                      {published ? (
                        <>
                          <time
                            dateTime={post.publishedAt}
                            className="text-muted-foreground"
                          >
                            {formatDate(post.publishedAt, locale)}
                          </time>
                          <span
                            className="inline-flex items-center gap-1.5 text-fis-logo"
                            aria-label={blog.published}
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full bg-fis-logo"
                              aria-hidden="true"
                            />
                            {blog.live}
                          </span>
                        </>
                      ) : (
                        <span className="text-muted-foreground">
                          {blog.comingPrefix}{' '}
                          <time dateTime={post.publishedAt}>
                            {formatDate(post.publishedAt, locale)}
                          </time>
                        </span>
                      )}
                      <LangBadge lang={post.lang} srLabel={langBadge.srLabel} />
                    </div>
                    <h2 className="mt-2 text-xl md:text-2xl font-bold text-fis-logo leading-snug">
                      {published ? (
                        <Link
                          href={href}
                          className="hover:text-gray-500 transition-colors"
                        >
                          {post.title}
                        </Link>
                      ) : (
                        <span>{post.title}</span>
                      )}
                    </h2>
                    <p className="mt-2 text-base text-muted-foreground leading-relaxed">
                      {post.description}
                    </p>
                    {published && (
                      <Link
                        href={href}
                        lang={locale}
                        className="inline-block mt-3 text-sm font-semibold text-fis-logo hover:underline"
                      >
                        {blog.read} &rarr;
                      </Link>
                    )}
                  </div>
                  {post.image && published && (
                    <Link
                      href={href}
                      className="flex-shrink-0 hidden sm:block"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <Image
                        src={post.image}
                        alt=""
                        width={120}
                        height={63}
                        className="rounded-lg object-cover w-[120px] h-[63px]"
                      />
                    </Link>
                  )}
                </article>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
}
