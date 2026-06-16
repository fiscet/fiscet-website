import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts, getPublishedPosts, isPostPublished } from '@/lib/blog';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.fiscet.it';
const AUTHOR_NAME = 'Christian Zanchetta';
const AUTHOR_URL =
  'https://www.linkedin.com/in/christian-zanchetta-a7140621/?locale=en-US';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Blog · Fiscet',
  description:
    'Notes on building fast, scalable web applications with Next.js and headless CMS — decisions, trade-offs, and lessons from real client work.',
  authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
  alternates: { canonical: `${BASE_URL}/blog` },
  openGraph: {
    title: 'Blog · Fiscet',
    description:
      'Notes on building fast, scalable web applications with Next.js and headless CMS.',
    url: `${BASE_URL}/blog`,
    type: 'website',
  },
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogIndexPage() {
  const allPosts = getAllPosts();
  const publishedPosts = getPublishedPosts();

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${BASE_URL}/blog`,
    name: 'Fiscet Blog',
    description:
      'Notes on building fast, scalable web applications with Next.js and headless CMS.',
    url: `${BASE_URL}/blog`,
    author: { '@type': 'Person', name: AUTHOR_NAME, url: AUTHOR_URL },
    publisher: {
      '@type': 'Organization',
      name: 'Fiscet',
      url: BASE_URL,
    },
    blogPost: publishedPosts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      description: p.description,
      datePublished: p.publishedAt,
      url: `${BASE_URL}/blog/${p.slug}`,
      author: { '@type': 'Person', name: AUTHOR_NAME },
    })),
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
    ],
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
          Notes on building fast, scalable web applications with Next.js and
          headless CMS — the decisions and trade-offs behind real client work.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
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
      </section>

      <section className="max-w-3xl mx-auto pb-20">
        <ol className="flex flex-col">
          {allPosts.map((post) => {
            const published = isPostPublished(post);

            return (
              <li
                key={post.slug}
                className="group border-b border-border py-7 last:border-b-0 first:pt-0"
              >
                <article className={`flex gap-4 md:gap-6 ${!published ? 'opacity-60' : ''}`}>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap text-xs uppercase tracking-wider font-medium">
                      {published ? (
                        <>
                          <time
                            dateTime={post.publishedAt}
                            className="text-muted-foreground"
                          >
                            {formatDate(post.publishedAt)}
                          </time>
                          <span
                            className="inline-flex items-center gap-1.5 text-fis-logo"
                            aria-label="Published"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full bg-fis-logo"
                              aria-hidden="true"
                            />
                            Live
                          </span>
                        </>
                      ) : (
                        <span className="text-muted-foreground">
                          Coming{' '}
                          <time dateTime={post.publishedAt}>
                            {formatDate(post.publishedAt)}
                          </time>
                        </span>
                      )}
                    </div>
                    <h2 className="mt-2 text-xl md:text-2xl font-bold text-fis-logo leading-snug">
                      {published ? (
                        <Link
                          href={`/blog/${post.slug}`}
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
                        href={`/blog/${post.slug}`}
                        className="inline-block mt-3 text-sm font-semibold text-fis-logo hover:underline"
                      >
                        Read &rarr;
                      </Link>
                    )}
                  </div>
                  {post.image && published && (
                    <Link
                      href={`/blog/${post.slug}`}
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
