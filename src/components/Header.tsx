'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const inspectionLinks = [
  { href: '/inspektioner-med-dronare/takinspektion', label: 'Takinspektion' },
  { href: '/inspektioner-med-dronare/fasadinspektion', label: 'Fasadinspektion' },
  { href: '/inspektioner-med-dronare/solcellsinspektion', label: 'Solcellsinspektion' },
  { href: '/inspektioner-med-dronare/byggplatsdokumentation', label: 'Byggplatsdokumentation' },
  { href: '/inspektioner-med-dronare/industriell-inspektion', label: 'Industriell inspektion' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-content flex h-20 items-center justify-between" aria-label="Huvudnavigering">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500">
            <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
          <span className="text-lg font-bold text-white">WashDrone</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link
              href="/inspektioner-med-dronare"
              className="flex items-center gap-1 rounded-pill px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              Inspektioner
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            {dropdownOpen && (
              <div className="absolute left-0 top-full z-50 mt-1 w-60 rounded-2xl border border-white/10 bg-dark-800/95 py-2 shadow-xl backdrop-blur-md">
                {inspectionLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-brand-400"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/inspektioner-med-dronare/case" className="rounded-pill px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white">
            Kundcase
          </Link>
          <Link href="/inspektioner-med-dronare/priser" className="rounded-pill px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white">
            Priser
          </Link>
          <Link href="/inspektioner-med-dronare/faq" className="rounded-pill px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white">
            FAQ
          </Link>
          <Link href="/inspektioner-med-dronare/kontakt" className="btn-primary ml-3">
            Begär offert
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-white/80 hover:text-white lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Öppna meny"
        >
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-dark-900/98 backdrop-blur-lg lg:hidden">
          <div className="container-content space-y-1 py-6">
            <Link href="/inspektioner-med-dronare" className="block rounded-xl px-4 py-3 text-base font-medium text-white/90 hover:bg-white/5" onClick={() => setMobileMenuOpen(false)}>
              Alla inspektioner
            </Link>
            {inspectionLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block rounded-xl px-4 py-2.5 pl-8 text-sm text-white/60 hover:bg-white/5 hover:text-brand-400" onClick={() => setMobileMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/inspektioner-med-dronare/case" className="block rounded-xl px-4 py-3 text-base font-medium text-white/90 hover:bg-white/5" onClick={() => setMobileMenuOpen(false)}>Kundcase</Link>
            <Link href="/inspektioner-med-dronare/priser" className="block rounded-xl px-4 py-3 text-base font-medium text-white/90 hover:bg-white/5" onClick={() => setMobileMenuOpen(false)}>Priser</Link>
            <Link href="/inspektioner-med-dronare/faq" className="block rounded-xl px-4 py-3 text-base font-medium text-white/90 hover:bg-white/5" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
            <div className="pt-4">
              <Link href="/inspektioner-med-dronare/kontakt" className="btn-primary block w-full text-center" onClick={() => setMobileMenuOpen(false)}>Begär offert</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
