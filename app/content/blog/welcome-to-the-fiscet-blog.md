---
slug: welcome-to-the-fiscet-blog
title: "Welcome to the Fiscet blog"
description: "Notes on building fast, scalable web applications with Next.js and headless CMS — the decisions, trade-offs, and lessons from real client work."
publishedAt: 2025-06-16
seriesOrder: 1
---

This is where I write about the work behind Fiscet: building custom web applications with Next.js and headless CMS platforms like Payload, Sanity, and Strapi.

Not tutorials. Not commit logs. The **decisions** — why one approach beats another for a given client, where the trade-offs actually bite, and what I'd do differently next time.

## What you'll find here

- **Architecture** — how to structure a Next.js app so it stays fast as it grows.
- **Headless CMS** — choosing between Payload, Sanity, and Strapi, and wiring them up cleanly.
- **Performance & SEO** — the boring parts that decide whether a site actually ranks and converts.

## Why a file-based blog

This blog is just markdown files in the repo. No CMS, no database, no admin panel. Every post is a `.md` file with a bit of frontmatter:

```md
---
slug: my-post
title: "My post"
description: "A short summary."
publishedAt: 2026-06-16
seriesOrder: 2
---
```

It builds statically, costs nothing to run, and version-controls itself. For a developer blog, that's hard to beat.

More soon.
