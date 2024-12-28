import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    // Matikan ESLint selama proses build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Matikan TypeScript checking selama proses build
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
