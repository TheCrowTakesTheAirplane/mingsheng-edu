import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/mingsheng-edu',
  assetPrefix: '/mingsheng-edu/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
