/**
 * Tag template littéral identité.
 * Ne fait rien de plus que retourner la string — sert uniquement
 * à activer la coloration syntaxique GROQ dans VSCode (extension Sanity).
 */
const groq = String.raw

/* ─────────────────────────────────────────────
   ACCUEIL
   ───────────────────────────────────────────── */

/** Photo hero de la ferme (vue extérieure / drone) */
export const heroImageQuery = groq`
  *[_type == "photoGallery" && category == "exterieur"][0]{
    _id,
    title,
    alt,
    image
  }
`

/** Aperçu des 3 chambres pour la section accueil */
export const roomsPreviewQuery = groq`
  *[_type == "room"] | order(_createdAt asc) {
    _id,
    title,
    colorTheme,
    slug,
    priceStandard,
    priceFlexible,
    surface,
    "mainImage": images[0]
  }
`

/** Informations de contact (téléphone, email, adresse, booking...) */
export const contactQuery = groq`
  *[_type == "contact"][0]{
    title,
    rating,
    reviewsCount,
    phone,
    email,
    address,
    checkIn,
    checkOut,
    bookingUrl,
    descriptionGenerale,
    features
  }
`

/* ─────────────────────────────────────────────
   PAGE CHAMBRES
   ───────────────────────────────────────────── */

/** Toutes les chambres avec le détail complet */
export const roomsFullQuery = groq`
  *[_type == "room"] | order(_createdAt asc) {
    _id,
    title,
    colorTheme,
    slug,
    priceStandard,
    priceFlexible,
    surface,
    capacity,
    beds,
    description,
    images,
    features
  }
`

/** Une chambre par slug (page détail) */
export const roomBySlugQuery = groq`
  *[_type == "room" && slug.current == $slug][0]{
    _id,
    title,
    colorTheme,
    slug,
    priceStandard,
    priceFlexible,
    surface,
    capacity,
    beds,
    description,
    images,
    features
  }
`

/* ─────────────────────────────────────────────
   PAGE HISTOIRE
   ───────────────────────────────────────────── */

export const historyPageQuery = groq`
  *[_type == "history"][0]{
    mainTitle,
    sections[]{
      _type,
      _key,
      title,
      content,
      image,
      layout,
      text,
      author,
      caption
    }
  }
`

/* ─────────────────────────────────────────────
   PAGE RESTAURANTS
   ───────────────────────────────────────────── */

export const restaurantsQuery = groq`
  *[_type == "restaurant"] | order(order asc, name asc) {
    _id,
    name,
    description,
    style,
    priceRange,
    distance,
    travelTime,
    phone,
    email,
    website,
    address,
    googleMapsUrl,
    googleRating,
    googleReviewsCount,
    openingHours,
    images,
    services
  }
`

/* ─────────────────────────────────────────────
   PAGE EXPLORER LA RÉGION
   ───────────────────────────────────────────── */

export const attractionsQuery = groq`
  *[_type == "attraction"] | order(category asc, name asc) {
    _id,
    name,
    category,
    description,
    images,
    googleRating,
    googleReviewsCount,
    website,
    distance,
    travelTime,
    address,
    googleMapsUrl,
    openingHours
  }
`

/* ─────────────────────────────────────────────
   AVIS CLIENTS (approuvés seulement)
   ───────────────────────────────────────────── */

export const reviewsQuery = groq`
  *[_type == "review" && approved == true] | order(date desc) {
    _id,
    author,
    origin,
    "roomTitle": room->title,
    nights,
    travelerType,
    date,
    rating,
    title,
    positive,
    negative,
    hostReply
  }
`

/* ─────────────────────────────────────────────
   PAGE À PROPOS
   ───────────────────────────────────────────── */

export const aboutPageQuery = groq`
  *[_type == "about"][0]{
    title,
    mainImage,
    story,
    quote,
    pressTitle,
    pressImage,
    pressLink
  }
`
