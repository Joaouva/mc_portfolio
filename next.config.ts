import type { NextConfig } from "next";

// Use basePath for GitHub Pages deployment
// Set NEXT_PUBLIC_BASE_PATH=/mc_portfolio in GitHub Actions if needed
// For local dev, leave it undefined
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || 
  (process.env.NODE_ENV === 'production' ? '/mc_portfolio' : undefined);

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.strapiapp.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
