'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, CalendarDays } from 'lucide-react'

const NAV_LINKS = [
  { href: '/',           label: 'Accueil' },
  { href: '/chambres',   label: 'Nos Chambres' },
  { href: '/histoire',   label: 'Histoire & Domaine' },
  { href: '/restaurants',label: 'Tables & Saveurs' },
  { href: '/explorer',   label: 'Explorer la Région' },
  { href: '/contact',    label: 'Contact & Accès' },
] as const

const BOOKING_URL = 'https://www.booking.com'

export default function Header() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Ferme le menu si on redimensionne vers desktop */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const isTransparent = !scrolled && !menuOpen

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isTransparent
          ? 'bg-transparent'
          : 'bg-parchment/96 backdrop-blur-md shadow-sm border-b border-stone-light/20',
      ].join(' ')}
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-20 lg:h-24">

          {/* ── LOGO ── */}
          <Link href="/" className="flex flex-col leading-none group" onClick={() => setMenuOpen(false)}>
            <span
              className={[
                'font-display text-base lg:text-lg tracking-[0.2em] uppercase transition-colors duration-300',
                isTransparent ? 'text-parchment' : 'text-forest',
              ].join(' ')}
            >
              La Grande Vesvre
            </span>
            <span
              className={[
                'font-heading italic text-[0.7rem] tracking-wider mt-0.5 transition-colors duration-300',
                isTransparent ? 'text-parchment/70' : 'text-gold',
              ].join(' ')}
            >
              Chambres d'hôtes · Depuis 1193
            </span>
          </Link>

          {/* ── NAVIGATION DESKTOP ── */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9" aria-label="Navigation principale">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={[
                  'font-body text-[0.78rem] font-medium tracking-wide transition-colors duration-200 relative',
                  'after:absolute after:bottom-[-3px] after:left-0 after:h-px after:w-0 after:bg-gold',
                  'after:transition-[width] after:duration-300 hover:after:w-full',
                  isTransparent
                    ? 'text-parchment/85 hover:text-parchment'
                    : 'text-ink-soft hover:text-gold',
                ].join(' ')}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* ── CTA + BURGER ── */}
          <div className="flex items-center gap-3">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex btn-gold text-[0.7rem] py-2.5 px-5"
            >
              <CalendarDays className="w-3.5 h-3.5" />
              Réserver
            </a>

            <button
              className={[
                'lg:hidden p-2 transition-colors duration-200',
                isTransparent ? 'text-parchment' : 'text-ink',
              ].join(' ')}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen
                ? <X className="w-6 h-6" />
                : <Menu className="w-6 h-6" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* ── MENU MOBILE ── */}
      <div
        className={[
          'lg:hidden overflow-hidden transition-all duration-300 ease-in-out',
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0',
          'bg-parchment border-t border-stone-light/20',
        ].join(' ')}
        aria-hidden={!menuOpen}
      >
        <nav className="container-site py-6 flex flex-col gap-1" aria-label="Navigation mobile">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-body text-base text-ink-soft py-3 border-b border-parchment-dark last:border-none hover:text-gold hover:pl-2 transition-all duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold justify-center mt-4"
            onClick={() => setMenuOpen(false)}
          >
            <CalendarDays className="w-4 h-4" />
            Réserver sur Booking
          </a>
        </nav>
      </div>
    </header>
  )
}
