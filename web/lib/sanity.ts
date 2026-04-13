import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'kv14c93x'
export const dataset   = process.env.NEXT_PUBLIC_SANITY_DATASET   ?? 'production'
export const apiVersion = '2024-01-01'

/* ─────────────────────────────────────────────
   CLIENT DE LECTURE (côté serveur & client)
   useCdn: true → cache CDN pour les pages statiques
   ───────────────────────────────────────────── */
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: 'published',
})

/* ─────────────────────────────────────────────
   CLIENT SANS CACHE (pour les previews / ISR)
   ───────────────────────────────────────────── */
export const previewClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
  perspective: 'previewDrafts',
})

/* ─────────────────────────────────────────────
   BUILDER D'URLS D'IMAGES
   Usage: urlFor(image).width(800).format('webp').url()
   ───────────────────────────────────────────── */
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

/* ─────────────────────────────────────────────
   HELPER FETCH AVEC REVALIDATION NEXT.JS
   ───────────────────────────────────────────── */
/**
 * En développement  → revalidate: 0  (fetch frais à chaque requête,
 *                       les modifs Sanity sont visibles dès le prochain refresh)
 * En production     → revalidate: 3600 (cache 1h, rebuilt par webhook ISR)
 */
const DEFAULT_REVALIDATE = process.env.NODE_ENV === 'development' ? 0 : 3600

export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
  revalidate: number | false = DEFAULT_REVALIDATE,
): Promise<T> {
  return client.fetch<T>(query, params, {
    next: { revalidate },
  })
}
