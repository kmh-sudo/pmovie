import type { NextConfig } from "next";
import path from 'path';


const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: path.join(__dirname, ''),
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
