import Image from 'next/image'
import Link from 'next/link'
import { CalendarDays, Wifi, ParkingCircle, Utensils, Trees } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { sanityFetch, urlFor } from '@/lib/sanity'
import { roomsPreviewQuery } from '@/lib/queries'
import type { Room } from '@/types/sanity'

const BOOKING_URL = 'https://www.booking.com/hotel/fr/la-grande-vesvre-gigny.fr.html'

export default async function HomePage() {
  const rooms = await sanityFetch<Room[]>(roomsPreviewQuery)

  return (
    <>
      <Header />

      {/* ══════════════════════════════════════
          HERO — Fond forêt, texte centré
          ══════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-32 bg-forest overflow-hidden">

        {/* Texture radiale dorée subtile */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 60% 40%, var(--color-gold) 0%, transparent 65%)' }}
          aria-hidden="true"
        />

        {/* Grain texture overlay */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\'/%3E%3C/svg%3E")' }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="label-section text-gold-light tracking-[0.35em] mb-6">
            Bourgogne · France · 89160 Gigny
          </p>

          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-parchment tracking-[0.12em] uppercase leading-none mb-5">
            La Grande<br />Vesvre
          </h1>

          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-16 bg-gold/50" />
            <p className="font-heading italic text-xl sm:text-2xl text-gold-light">
              Ancienne ferme templière
            </p>
            <div className="h-px w-16 bg-gold/50" />
          </div>

          <p className="font-body text-parchment/70 text-base sm:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            Trois chambres d&apos;hôtes dans un manoir fortifié du XVII<sup>e</sup> siècle,
            entouré de douves et de 800 ans d&apos;histoire en pleine Bourgogne.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/chambres" className="btn-gold text-xs py-3.5 px-9">
              <CalendarDays className="w-4 h-4" />
              Voir les chambres
            </Link>
            <Link href="/histoire" className="btn-outline border-parchment/30 text-parchment hover:bg-parchment hover:text-ink text-xs py-3.5 px-9">
              Notre histoire
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-body text-[0.6rem] tracking-[0.3em] uppercase text-parchment/30">
            Découvrir
          </span>
          <div className="h-8 w-px bg-parchment/20 animate-pulse" />
        </div>
      </section>

      {/* Photo drone — à intégrer ultérieurement dans une section dédiée */}

      {/* ══════════════════════════════════════
          CONTENU — Fond parchemin
          ══════════════════════════════════════ */}
      <div className="bg-parchment shadow-[0_-16px_48px_rgba(0,0,0,0.25)]">

        {/* ── INTRODUCTION ── */}
        <section className="container-site py-20 lg:py-28 text-center">
          <p className="label-section mb-4">Le domaine</p>
          <h2 className="font-heading text-4xl lg:text-5xl text-ink mb-4">
            Un patrimoine d&apos;exception
          </h2>
          <div className="divider-gold mx-auto" />
          <p className="font-body text-ink-soft max-w-2xl mx-auto leading-relaxed mt-6">
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

        {/* ── CHAMBRES ── */}
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
