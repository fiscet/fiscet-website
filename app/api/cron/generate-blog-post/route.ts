import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateText, Output } from 'ai';
import matter from 'gray-matter';
import { NextResponse } from 'next/server';
import { z } from 'zod';

export const maxDuration = 60;

const GITHUB_REPO = 'fiscet/fiscet-website';
const BLOG_DIR = 'app/content/blog';
const GITHUB_CONTENTS_API = `https://api.github.com/repos/${GITHUB_REPO}/contents`;
const GEMINI_MODEL = process.env.GEMINI_MODEL ?? 'gemini-2.5-flash';

const google = createGoogleGenerativeAI({ apiKey: process.env.GEMINI_KEY });

type ExistingPost = {
  slug: string;
  title: string;
  seriesOrder: number;
  body: string;
};

async function githubFetch(url: string, init?: RequestInit) {
  const res = await fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      ...init?.headers
    }
  });
  if (!res.ok) {
    throw new Error(`GitHub ${init?.method ?? 'GET'} ${url} failed: ${res.status} ${await res.text()}`);
  }
  return res.json();
}

async function fetchExistingPosts(): Promise<ExistingPost[]> {
  const listing: { name: string; path: string }[] = await githubFetch(
    `${GITHUB_CONTENTS_API}/${BLOG_DIR}?ref=main`
  );
  const mdFiles = listing.filter((f) => f.name.endsWith('.md'));
  return Promise.all(
    mdFiles.map(async (f) => {
      const res = await fetch(`${GITHUB_CONTENTS_API}/${f.path}?ref=main`, {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.raw+json',
          'X-GitHub-Api-Version': '2022-11-28'
        }
      });
      if (!res.ok) throw new Error(`GitHub read of ${f.path} failed: ${res.status}`);
      const { data, content } = matter(await res.text());
      return {
        slug: String(data.slug ?? f.name.replace(/\.md$/, '')),
        title: String(data.title ?? ''),
        seriesOrder: Number(data.seriesOrder ?? 0),
        body: content
      };
    })
  );
}

async function researchStartup(existing: ExistingPost[]) {
  const alreadyCovered = existing.map((p) => `- ${p.slug}: ${p.title}`).join('\n');
  const { text, sources } = await generateText({
    model: google(GEMINI_MODEL),
    tools: { google_search: google.tools.googleSearch({}) },
    prompt: `Research ONE recent, lesser-known IT/AI startup for a dev-blog post. Use web search.

Find a recent, relevant case in IT or AI from a small or mid-sized startup (NOT big tech, NOT a large corporation) that built something genuinely interesting. Prioritize companies not yet widely known. Choose by how interesting the PRODUCT is, regardless of geographic origin.

Selection criteria (priority order):
1. Product/technical merit: a clever feature, a novel technical approach, a smart solution to a real problem.
2. Context/use case: an unusual or meaningful application, an underserved niche, a creative angle.
3. Environmental or social impact: sustainability, efficiency, positive externalities.

AVOID: funding rounds, valuations, IPOs, M&A, "raised $X million" stories, anything where the news is primarily financial. If a company is interesting only because of money raised, skip it.

AVOID DUPLICATES. These startups are already covered on the blog, do NOT pick any of them (Greyparrot is also off-limits as a style reference):
${alreadyCovered}

Output a research brief with:
- The startup chosen and why it is interesting (the product angle, "the clever part").
- Concretely WHAT the product does and HOW it works technically.
- Key concrete numbers/facts worth citing.
- The source URLs you used (full URLs, one per line).`
  });
  return { brief: text, sources };
}

const postSchema = z.object({
  slug: z
    .string()
    .describe('kebab-case file slug, e.g. acme-ai-robotic-farming'),
  title: z.string().describe('Concise English title, no clickbait.'),
  description: z.string().describe('One-line English summary.'),
  body: z
    .string()
    .describe(
      'The markdown body of the post, WITHOUT frontmatter, ending with a "## Sources" section of plain markdown links.'
    )
});

async function writePost(brief: string, samplePost: ExistingPost) {
  const { output } = await generateText({
    model: google(GEMINI_MODEL),
    output: Output.object({ schema: postSchema }),
    prompt: `Write an English blog post about the startup in the research brief below.

Voice: a personal, curious "discovery" voice in a professional dev-blog register. First person, curious, warm but not hype. NO emoji, no ":-D". Lead with how you came across the story or a surprising/counterintuitive fact; explain concretely WHAT the product does and HOW; flag "the clever part" (the technical or product angle); keep key numbers concrete but woven into the narrative, not listed cold; optional brief forward-looking thought; warm closing opinion. No press-release tone, no sensationalism.

PUNCTUATION: go very light on em-dashes ("—"). Prefer commas, colons, parentheses, or separate sentences. At most ONE em-dash in the whole post (ideally zero), and this applies to the title and description too.

Length: 260-340 words of body. End the body with a "## Sources" section listing the source URLs from the brief as plain markdown links.

Here is an existing post as a reference for tone, structure and length:
---
${samplePost.body.trim()}
---

RESEARCH BRIEF:
${brief}`
  });
  return output;
}

function buildMarkdown(
  post: z.infer<typeof postSchema>,
  slug: string,
  publishedAt: string,
  seriesOrder: number
) {
  const quote = (s: string) => `"${s.replace(/"/g, '\\"')}"`;
  return [
    '---',
    `slug: ${slug}`,
    `title: ${quote(post.title)}`,
    `description: ${quote(post.description)}`,
    `publishedAt: ${publishedAt}`,
    `seriesOrder: ${seriesOrder}`,
    '---',
    '',
    post.body.trim(),
    ''
  ].join('\n');
}

export async function GET(request: Request) {
  if (
    !process.env.CRON_SECRET ||
    request.headers.get('authorization') !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  for (const name of ['GEMINI_KEY', 'GITHUB_TOKEN']) {
    if (!process.env[name]) {
      return NextResponse.json({ error: `Missing env var ${name}` }, { status: 500 });
    }
  }

  try {
    const existing = await fetchExistingPosts();
    const maxSeriesOrder = Math.max(0, ...existing.map((p) => p.seriesOrder));
    const samplePost = existing.reduce((a, b) => (a.seriesOrder > b.seriesOrder ? a : b));

    const { brief } = await researchStartup(existing);
    const post = await writePost(brief, samplePost);

    const slug = post.slug
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    if (!slug) throw new Error(`Model produced an unusable slug: "${post.slug}"`);
    if (existing.some((p) => p.slug === slug)) {
      throw new Error(`Slug "${slug}" already exists, skipping commit to avoid a duplicate.`);
    }

    const publishedAt = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Europe/Rome',
      dateStyle: 'short'
    }).format(new Date());
    const seriesOrder = maxSeriesOrder + 1;
    const markdown = buildMarkdown(post, slug, publishedAt, seriesOrder);

    const commit = await githubFetch(`${GITHUB_CONTENTS_API}/${BLOG_DIR}/${slug}.md`, {
      method: 'PUT',
      body: JSON.stringify({
        message: `blog: add ${slug}`,
        content: Buffer.from(markdown, 'utf-8').toString('base64'),
        branch: 'main'
      })
    });

    return NextResponse.json({
      ok: true,
      title: post.title,
      file: `${BLOG_DIR}/${slug}.md`,
      seriesOrder,
      commit: commit.commit?.sha,
      commitUrl: commit.commit?.html_url
    });
  } catch (error) {
    console.error('generate-blog-post cron failed:', error);
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
