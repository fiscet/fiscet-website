import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Two root layouts (app/(it) and app/(en)/en): unmatched URLs need
    // app/global-not-found.tsx to render inside the site shell.
    globalNotFound: true,
  },
};

export default nextConfig;
