import type { NextConfig } from 'next'
import { fileURLToPath } from 'url'

const nextConfig: NextConfig = {
  /*
   * Silence le warning "multiple lockfiles detected".
   * import.meta.url pointe vers ce fichier (web/next.config.ts) ;
   * new URL('.', …) donne le dossier web/ — c'est bien notre racine projet.
   */
  outputFileTracingRoot: fileURLToPath(new URL('.', import.meta.url)),

  /* Images distantes autorisées — format objet explicite (plus fiable que new URL) */
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
