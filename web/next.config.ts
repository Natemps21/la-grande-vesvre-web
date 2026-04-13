import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* Images distantes autorisées (Sanity CDN) */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
