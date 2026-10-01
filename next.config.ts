import type { NextConfig } from "next";
import { getAllPosts } from "./lib/blog";

const nextConfig: NextConfig = {
  experimental: {
    // Two root layouts (app/(it) and app/(en)/en): unmatched URLs need
    // app/global-not-found.tsx to render inside the site shell.
    globalNotFound: true,
  },
  // English articles moved from /blog/<slug> to /en/blog/<slug>.
  async redirects() {
    return getAllPosts("en").map((post) => ({
      source: `/blog/${post.slug}`,
      destination: `/en/blog/${post.slug}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
