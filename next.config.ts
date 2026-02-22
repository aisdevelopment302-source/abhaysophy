import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/abhaysophy',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
