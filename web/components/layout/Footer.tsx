import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram, Facebook, CalendarDays } from 'lucide-react'

const NAV_LINKS = [
  { href: '/chambres',    label: 'Nos Chambres' },
  { href: '/histoire',    label: 'Histoire & Domaine' },
  { href: '/restaurants', label: 'Tables & Saveurs' },
  { href: '/explorer',    label: 'Explorer la Région' },
  { href: '/contact',     label: 'Contact & Accès' },
]

const BOOKING_URL = 'https://www.booking.com/hotel/fr/la-grande-vesvre-gigny.fr.html'

export default function Footer() {
  return (
    <footer className="bg-forest text-parchment/75 mt-auto">

      {/* ── BANDE DORÉE D'ACCROCHE ── */}
      <div className="bg-gold/10 border-y border-gold/20 py-8">
        <div className="container-site flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-heading italic text-gold-light text-lg">
              "Plongez dans 800 ans d'histoire, profitez du calme des douves."
            </p>
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold shrink-0"
          >
            <CalendarDays className="w-4 h-4" />
            Vérifier les disponibilités
          </a>
        </div>
      </div>

      {/* ── CORPS DU FOOTER ── */}
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

          {/* Colonne 1 — Marque */}
          <div>
            <p className="font-display text-base tracking-[0.2em] uppercase text-parchment mb-1">
              La Grande Vesvre
            </p>
            <p className="font-heading italic text-gold-light text-sm mb-5">
              Ancienne commanderie templière · XIIe siècle
            </p>
            <p className="font-body text-sm leading-relaxed text-parchment/55 max-w-xs">
              Un séjour hors du temps au cœur de la Bourgogne. Trois chambres d'hôtes
              dans un domaine historique exceptionnel, entouré de douves et de nature.
            </p>

            {/* Réseaux sociaux */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                aria-label="Instagram de La Grande Vesvre"
                className="p-2.5 border border-parchment/15 text-parchment/50 hover:text-parchment hover:border-parchment/30 transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook de La Grande Vesvre"
                className="p-2.5 border border-parchment/15 text-parchment/50 hover:text-parchment hover:border-parchment/30 transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Colonne 2 — Navigation */}
          <div>
            <h3 className="label-section text-gold-light mb-5">Navigation</h3>
            <nav className="flex flex-col gap-2.5" aria-label="Navigation footer">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="font-body text-sm text-parchment/60 hover:text-parchment hover:translate-x-1 transition-all duration-200 inline-block"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Colonne 3 — Contact */}
          <div>
            <h3 className="label-section text-gold-light mb-5">Contact</h3>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+330645510947"
                className="flex items-center gap-3 text-sm text-parchment/60 hover:text-parchment transition-colors duration-200 group"
              >
                <Phone className="w-4 h-4 text-gold-light shrink-0 group-hover:text-gold transition-colors" />
                06 45 51 09 47
              </a>
              <a
                href="mailto:GrandeVesvre@mail"
                className="flex items-center gap-3 text-sm text-parchment/60 hover:text-parchment transition-colors duration-200 group"
              >
                <Mail className="w-4 h-4 text-gold-light shrink-0 group-hover:text-gold transition-colors" />
                GrandeVesvre@mail
              </a>
              <div className="flex items-start gap-3 text-sm text-parchment/60">
                <MapPin className="w-4 h-4 text-gold-light shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  La Grande Vèvre<br />
                  89160 Gigny, Bourgogne
                </span>
              </div>
            </div>

            {/* Horaires check-in */}
            <div className="mt-6 pt-6 border-t border-parchment/10">
              <p className="font-body text-xs text-parchment/40 uppercase tracking-widest mb-2">Accueil</p>
              <p className="font-body text-sm text-parchment/55">
                Arrivée : à partir de 16h<br />
                Départ : jusqu'à 11h
              </p>
            </div>
          </div>
        </div>

        {/* ── BAS DU FOOTER ── */}
        <div className="mt-12 pt-6 border-t border-parchment/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-parchment/35">
            © {new Date().getFullYear()} La Grande Vesvre — Tous droits réservés
          </p>
          <p className="font-heading italic text-xs text-parchment/25">
            Commanderie Templière fondée en 1193
          </p>
        </div>
      </div>
    </footer>
  )
}
