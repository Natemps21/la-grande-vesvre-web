import type { Metadata } from 'next'
import { Cinzel, Cormorant_Garamond, Raleway } from 'next/font/google'
import './globals.css'

/* ─────────────────────────────────────────────
   GOOGLE FONTS
   Cinzel       → font-display  (titres, logo — style romain médiéval)
   Cormorant    → font-heading  (sous-titres, citations — manuscrit élégant)
   Raleway      → font-body     (corps de texte — luxe moderne)
   ───────────────────────────────────────────── */
const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
  weight: ['400', '600', '700'],
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
})

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s — La Grande Vesvre',
    default: 'La Grande Vesvre — Chambres d\'hôtes en Bourgogne',
  },
  description:
    'Ancienne commanderie templière du XIIe siècle transformée en chambres d\'hôtes. Séjournez dans un domaine historique exceptionnel au cœur de la Bourgogne.',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'La Grande Vesvre',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="fr"
      className={`${cinzel.variable} ${cormorant.variable} ${raleway.variable}`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  )
}
