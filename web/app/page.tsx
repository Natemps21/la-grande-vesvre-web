import Image from 'next/image'
import Link from 'next/link'
import { CalendarDays, Wifi, ParkingCircle, Utensils, Trees } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { sanityFetch, urlFor } from '@/lib/sanity'
import { heroImageQuery, roomsPreviewQuery } from '@/lib/queries'
import type { PhotoGalleryItem, Room } from '@/types/sanity'

const BOOKING_URL = 'https://www.booking.com/hotel/fr/la-grande-vesvre-gigny.fr.html'

export default async function HomePage() {
  /* ── Données Sanity ── */
  const [heroImage, rooms] = await Promise.all([
    sanityFetch<PhotoGalleryItem | null>(heroImageQuery),
    sanityFetch<Room[]>(roomsPreviewQuery),
  ])

  return (
    <>
      <Header />

      {/* ══════════════════════════════════════
          HERO — Photo drone depuis Sanity
          ══════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-32">

        {/* Image de fond plein écran */}
        {heroImage ? (
          <Image
            src={urlFor(heroImage.image).width(1920).height(1080).format('webp').quality(85).url()}
            alt={heroImage.alt ?? 'La Grande Vesvre — Vue aérienne'}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        ) : (
          /* Fallback couleur si Sanity n'a pas encore d'image */
          <div className="absolute inset-0 bg-forest" aria-hidden="true" />
        )}

        {/* Voile sombre pour la lisibilité */}
        <div
          className="absolute inset-0 bg-forest/60"
          aria-hidden="true"
        />

        {/* Texture radiale dorée subtile */}
        <div
          className="absolute inset-0 opacity-15"
          style={{ background: 'radial-gradient(ellipse at center, var(--color-gold) 0%, transparent 65%)' }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="label-section text-gold-light tracking-[0.35em] mb-6">
            Bourgogne · France · 89160 Gigny
          </p>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl text-parchment tracking-[0.12em] uppercase leading-none mb-4">
            La Grande Vesvre
          </h1>

          <p className="font-heading italic text-2xl sm:text-3xl text-gold-light mb-6">
            Ancienne ferme templière — Un séjour hors du temps
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-gold/50" />
            <span className="font-heading italic text-sm text-parchment/50">fondée en 1193</span>
            <div className="h-px w-12 bg-gold/50" />
          </div>

          <p className="font-body text-parchment/80 text-base sm:text-lg leading-relaxed mb-12 max-w-lg mx-auto">
            Trois chambres d&apos;hôtes dans un manoir fortifié du XVII<sup>e</sup> siècle,
            entouré de douves, de nature et de 800 ans d&apos;histoire.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/chambres" className="btn-gold text-xs py-3.5 px-8">
              <CalendarDays className="w-4 h-4" />
              Voir les chambres
            </Link>
            <Link href="/histoire" className="btn-outline border-parchment/40 text-parchment hover:bg-parchment hover:text-ink text-xs py-3.5 px-8">
              Notre histoire
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="h-8 w-px bg-parchment/25 animate-pulse" />
          <span className="font-body text-[0.6rem] tracking-[0.3em] uppercase text-parchment/25">
            Découvrir
          </span>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTENU — Fond parchemin
          ══════════════════════════════════════ */}
      <div className="relative bg-parchment shadow-[0_-12px_40px_rgba(0,0,0,0.3)]">

        {/* ── INTRODUCTION ── */}
        <section className="container-site py-20 lg:py-28 text-center">
          <p className="label-section mb-4">Le domaine</p>
          <h2 className="font-heading text-4xl lg:text-5xl text-ink mb-4">
            Un patrimoine d&apos;exception
          </h2>
          <div className="divider-gold mx-auto" />
          <p className="font-body text-ink-soft max-w-2xl mx-auto leading-relaxed mt-4">
            Fondée en 1193 comme commanderie templière, la Grande Vesvre est aujourd&apos;hui
            un manoir fortifié du XVII<sup>e</sup> siècle transformé en chambres d&apos;hôtes.
            Sylvie et son époux vous accueillent dans un lieu où chaque pierre raconte
            une histoire.
          </p>
          <blockquote className="quote-manuscrite max-w-xl mx-auto mt-8">
            &quot;En séjournant à la Grande Vesvre, vous plongez dans 800 ans d&apos;histoire
            et profitez du calme des douves.&quot;
          </blockquote>
        </section>

        {/* ── ÉQUIPEMENTS ── */}
        <section className="bg-parchment-mid py-10 border-y border-parchment-dark">
          <div className="container-site">
            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {[
                { icon: Wifi,          label: 'Wi-Fi gratuit' },
                { icon: ParkingCircle, label: 'Parking privé' },
                { icon: Utensils,      label: 'Cuisine équipée' },
                { icon: Trees,         label: 'Jardin & terrasse' },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex flex-col items-center gap-2">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-forest/10 text-forest">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="font-body text-sm text-ink-soft">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── CHAMBRES (depuis Sanity) ── */}
        <section className="container-site py-20 lg:py-28">
          <div className="text-center mb-12">
            <p className="label-section mb-3">Nos chambres</p>
            <h2 className="font-heading text-4xl lg:text-5xl text-ink">
              Trois havres de paix
            </h2>
            <div className="divider-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {rooms.map((room) => (
              <article
                key={room._id}
                className="flex flex-col bg-white border border-parchment-dark overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Photo de la chambre */}
                <div className="relative h-52 bg-parchment-mid">
                  {room.mainImage ? (
                    <Image
                      src={urlFor(room.mainImage).width(600).height(400).format('webp').quality(80).url()}
                      alt={room.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-heading italic text-stone text-sm">Photo à venir</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <div className="self-start text-xs font-body font-semibold tracking-widest uppercase border-b-2 border-forest text-forest pb-0.5 mb-3">
                    {room.surface} m²
                  </div>
                  <h3 className="font-heading text-xl text-ink mb-4">{room.title}</h3>

                  <div className="flex gap-4 mt-auto pt-4 border-t border-parchment-dark">
                    <div className="flex-1">
                      <p className="font-body text-[0.65rem] uppercase tracking-wider text-stone mb-0.5">Non remboursable</p>
                      <p className="font-display text-xl text-forest">{room.priceStandard}€</p>
                    </div>
                    <div className="flex-1">
                      <p className="font-body text-[0.65rem] uppercase tracking-wider text-stone mb-0.5">Annulation gratuite</p>
                      <p className="font-display text-xl text-ink">{room.priceFlexible}€</p>
                    </div>
                  </div>

                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold justify-center mt-4 text-[0.7rem]"
                  >
                    <CalendarDays className="w-3.5 h-3.5" />
                    Réserver
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
