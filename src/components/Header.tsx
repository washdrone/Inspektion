'use client'

import Link from 'next/link'
import { useState } from 'react'

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

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-sm">
      <nav className="container-content flex h-16 items-center justify-between" aria-label="Huvudnavigering">
        <Link href="/" className="text-xl font-bold text-primary-700">
          WashDrone
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link
              href="/inspektioner-med-dronare"
              className="rounded-lg px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
            >
              Inspektioner
              <svg className="ml-1 inline-block h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            {dropdownOpen && (
              <div className="absolute left-0 top-full z-50 mt-0 w-64 rounded-lg border border-neutral-200 bg-white py-2 shadow-lg">
                {inspectionLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-primary-600"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/inspektioner-med-dronare/case" className="rounded-lg px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100">
            Kundcase
          </Link>
          <Link href="/inspektioner-med-dronare/priser" className="rounded-lg px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100">
            Priser
          </Link>
          <Link href="/inspektioner-med-dronare/faq" className="rounded-lg px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100">
            FAQ
          </Link>
          <Link href="/inspektioner-med-dronare/kontakt" className="btn-primary ml-4 text-sm">
            Begär offert
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-neutral-600 hover:bg-neutral-100 md:hidden"
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
        <div className="border-t border-neutral-200 bg-white md:hidden">
          <div className="container-content space-y-1 py-4">
            <Link
              href="/inspektioner-med-dronare"
              className="block rounded-lg px-3 py-2 text-base font-medium text-neutral-700 hover:bg-neutral-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Alla inspektioner
            </Link>
            {inspectionLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-3 py-2 pl-6 text-sm text-neutral-600 hover:bg-neutral-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/inspektioner-med-dronare/case"
              className="block rounded-lg px-3 py-2 text-base font-medium text-neutral-700 hover:bg-neutral-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kundcase
            </Link>
            <Link
              href="/inspektioner-med-dronare/priser"
              className="block rounded-lg px-3 py-2 text-base font-medium text-neutral-700 hover:bg-neutral-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Priser
            </Link>
            <Link
              href="/inspektioner-med-dronare/faq"
              className="block rounded-lg px-3 py-2 text-base font-medium text-neutral-700 hover:bg-neutral-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="pt-2">
              <Link
                href="/inspektioner-med-dronare/kontakt"
                className="btn-primary block w-full text-center text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Begär offert
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
