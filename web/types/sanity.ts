/* ─────────────────────────────────────────────
   Types TypeScript pour les documents Sanity
   Alignés sur les schémas dans la-grande-vesvre/schemaTypes/
   ───────────────────────────────────────────── */

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
}

export interface SanitySlug {
  _type: 'slug'
  current: string
}

/* ── Galerie photo ── */
export interface PhotoGalleryItem {
  _id: string
  title: string
  image: SanityImage
  category: 'chambres' | 'exterieur' | 'histoire' | 'restaurants'
  alt: string
}

/* ── Chambres ── */
export type ColorTheme = 'foret' | 'bateau' | 'hirondelle'

export interface Room {
  _id: string
  title: string
  colorTheme: ColorTheme
  slug: SanitySlug
  priceStandard: number
  priceFlexible: number
  surface: number
  capacity?: number
  beds?: string
  description?: string
  images?: SanityImage[]
  /** Projection GROQ : images[0] — présent dans roomsPreviewQuery */
  mainImage?: SanityImage
  features?: string[]
}

/* ── Restaurant ── */
export interface OpeningHours {
  day: string
  open: string
  close: string
  closed?: boolean
}

export interface Restaurant {
  _id: string
  name: string
  order?: number
  description?: string
  style?: string
  priceRange?: '€' | '€€' | '€€€' | '€€€€'
  distance?: number
  travelTime?: number
  phone?: string
  email?: string
  website?: string
  address?: string
  googleMapsUrl?: string
  googleRating?: number
  googleReviewsCount?: number
  openingHours?: OpeningHours[]
  images?: SanityImage[]
  services?: {
    dineIn?: boolean
    takeaway?: boolean
    delivery?: boolean
  }
}

/* ── Attraction touristique ── */
export interface Attraction {
  _id: string
  name: string
  category: 'chateau' | 'vignoble' | 'patrimoine' | 'nature'
  description?: string
  images?: SanityImage[]
  googleRating?: number
  googleReviewsCount?: number
  website?: string
  distance?: number
  travelTime?: number
  address?: string
  phone?: string
  googleMapsUrl?: string
  openingHours?: OpeningHours[]
}

/* ── Page Contact ── */
export interface ContactInfo {
  title: string
  rating: number
  reviewsCount: number
  phone: string
  email: string
  address: string
  checkIn: string | null
  checkOut: string | null
  bookingUrl: string
  descriptionGenerale?: string
  features?: Array<{ service: string; icon: string }>
}

/* ── Page À propos ── */
export interface AboutPage {
  title: string
  mainImage?: SanityImage
  story?: unknown[] // Portable Text blocks
  quote?: string
  pressTitle?: string
  pressImage?: SanityImage
  pressLink?: string
}

/* ── Page Histoire ── */
export type HistoryBlock =
  | {
      _type: 'textImageBlock'
      _key: string
      title: string
      content: unknown[] // Portable Text
      image?: SanityImage
      layout: 'left' | 'right'
    }
  | {
      _type: 'quoteBlock'
      _key: string
      text: string
      author?: string
    }
  | {
      _type: 'centerImageBlock'
      _key: string
      image: SanityImage
      caption?: string
    }

export interface HistoryPage {
  mainTitle: string
  sections: HistoryBlock[]
}

/* ── Avis clients ── */
export interface Review {
  _id: string
  author: string
  origin?: string
  room?: { _ref: string }
  nights?: number
  travelerType?: 'couple' | 'family' | 'friends' | 'solo'
  approved: boolean
  date: string
  rating: number
  title?: string
  positive?: string
  negative?: string
  hostReply?: string
}
