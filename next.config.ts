import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   env: {
    DATABASE_URL: process.env.DATABASE_URL,
    PGSSLMODE: process.env.PGSSLMODE || 'require'
  },
  // Other Next.js configuration options can go here
  reactStrictMode: true,
  // experimental: { ... },
  // images: { ... },
  // etc.
};

export default nextConfig;
