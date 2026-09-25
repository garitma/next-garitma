import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "agjr2io12d0kw6qt.public.blob.vercel-storage.com",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
