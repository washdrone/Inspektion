'use client'

import Link from 'next/link'
import { useState, useEffect, useRef, useCallback } from 'react'
import { SERVICE_LINKS, INDUSTRY_LINKS } from '@/lib/constants'
import { SERVICE_LINKS_EN, INDUSTRY_LINKS_EN } from '@/lib/constants-en'

export function Header({ locale = 'sv' }: { locale?: 'sv' | 'en' }) {
  const serviceLinks = locale === 'en' ? SERVICE_LINKS_EN : SERVICE_LINKS
  const industryLinks = locale === 'en' ? INDUSTRY_LINKS_EN : INDUSTRY_LINKS
  const isEn = locale === 'en'

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const servicesTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const industriesTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const scrollYRef = useRef(0)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open (iOS-safe)
  useEffect(() => {
    if (mobileMenuOpen) {
      scrollYRef.current = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollYRef.current}px`
      document.body.style.left = '0'
      document.body.style.right = '0'
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.overflow = ''
      if (scrollYRef.current) {
        window.scrollTo(0, scrollYRef.current)
      }
    }
    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  // Debounced dropdown close to prevent premature closing on hover gap
  const openServices = useCallback(() => {
    if (servicesTimeout.current) clearTimeout(servicesTimeout.current)
    setServicesOpen(true)
  }, [])

  const closeServices = useCallback(() => {
    servicesTimeout.current = setTimeout(() => setServicesOpen(false), 150)
  }, [])

  const openIndustries = useCallback(() => {
    if (industriesTimeout.current) clearTimeout(industriesTimeout.current)
    setIndustriesOpen(true)
  }, [])

  const closeIndustries = useCallback(() => {
    industriesTimeout.current = setTimeout(() => setIndustriesOpen(false), 150)
  }, [])

  useEffect(() => {
    return () => {
      if (servicesTimeout.current) clearTimeout(servicesTimeout.current)
      if (industriesTimeout.current) clearTimeout(industriesTimeout.current)
    }
  }, [])

  // Close dropdowns on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setServicesOpen(false)
        setIndustriesOpen(false)
        if (mobileMenuOpen) setMobileMenuOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-900/95 backdrop-blur-md shadow-lg'
          : 'bg-dark-900/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container-content flex h-20 items-center justify-between" aria-label={isEn ? 'Main navigation' : 'Huvudnavigering'}>
        <Link href={isEn ? '/en' : '/'} className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-700">
            <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
          <span className="text-lg font-bold text-white">SurveyDrone</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={closeServices}
          >
            <button
              type="button"
              className="flex items-center gap-1 rounded-pill px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen(!servicesOpen)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setServicesOpen(!servicesOpen)
                }
              }}
            >
              {isEn ? 'Services' : 'Tjänster'}
              <svg className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full z-50 w-60 rounded-2xl border border-white/10 bg-dark-800/95 py-2 shadow-xl backdrop-blur-md">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-accent-400 focus-visible:outline-none focus-visible:bg-white/5 focus-visible:text-accent-400"
                    onClick={() => setServicesOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={openIndustries}
            onMouseLeave={closeIndustries}
          >
            <button
              type="button"
              className="flex items-center gap-1 rounded-pill px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900"
              aria-expanded={industriesOpen}
              aria-haspopup="true"
              onClick={() => setIndustriesOpen(!industriesOpen)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setIndustriesOpen(!industriesOpen)
                }
              }}
            >
              {isEn ? 'Industries' : 'Branscher'}
              <svg className={`h-3.5 w-3.5 transition-transform duration-200 ${industriesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {industriesOpen && (
              <div className="absolute left-0 top-full z-50 w-52 rounded-2xl border border-white/10 bg-dark-800/95 py-2 shadow-xl backdrop-blur-md">
                {industryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-accent-400 focus-visible:outline-none focus-visible:bg-white/5 focus-visible:text-accent-400"
                    onClick={() => setIndustriesOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href={isEn ? '/en/how-it-works' : '/hur-det-gar-till'} className="rounded-pill px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900">
            {isEn ? 'How It Works' : 'Hur det går till'}
          </Link>
          <Link href={isEn ? '/en/pricing' : '/priser'} className="rounded-pill px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900">
            {isEn ? 'Pricing' : 'Priser'}
          </Link>
          <Link href={isEn ? '/en/about' : '/om-oss'} className="rounded-pill px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900">
            {isEn ? 'About Us' : 'Om oss'}
          </Link>
          {/* Language selector */}
          <div className="ml-2 flex items-center gap-0.5 rounded-full border border-white/15 px-1 py-0.5 text-xs font-medium">
            <Link href="/" className={`rounded-full px-2 py-1 transition-colors ${!isEn ? 'bg-white/15 text-white' : 'text-white/50 hover:text-white'}`}>SV</Link>
            <Link href="/en" className={`rounded-full px-2 py-1 transition-colors ${isEn ? 'bg-white/15 text-white' : 'text-white/50 hover:text-white'}`}>EN</Link>
          </div>
          <Link href={isEn ? '/en/contact' : '/kontakt'} className="btn-primary ml-3">
            {isEn ? 'Get a Quote' : 'Begär offert'}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="relative z-50 inline-flex items-center justify-center rounded-lg p-2 text-white/80 hover:text-white lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? (isEn ? 'Close menu' : 'Stäng meny') : (isEn ? 'Open menu' : 'Öppna meny')}
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

      {/* Mobile menu with backdrop overlay and transition */}
      <div
        className={`fixed inset-0 top-20 z-40 bg-black/60 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden="true"
        onClick={() => setMobileMenuOpen(false)}
      />
      <div
        className={`fixed inset-x-0 top-20 z-50 max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain border-t border-white/10 bg-dark-900 transition-all duration-300 lg:hidden ${
          mobileMenuOpen
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
        role="dialog"
        aria-label={isEn ? 'Mobile menu' : 'Mobilmeny'}
      >
        <div className="container-content space-y-1 py-6">
          <p className="px-4 pb-1 text-xs font-semibold uppercase tracking-widest text-dark-400">{isEn ? 'Services' : 'Tjänster'}</p>
          {serviceLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-xl px-4 py-2.5 pl-6 text-sm text-white/60 hover:bg-white/5 hover:text-accent-400 focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900 focus-visible:outline-none"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <p className="px-4 pb-1 pt-3 text-xs font-semibold uppercase tracking-widest text-dark-400">{isEn ? 'Industries' : 'Branscher'}</p>
          {industryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-xl px-4 py-2.5 pl-6 text-sm text-white/60 hover:bg-white/5 hover:text-accent-400 focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900 focus-visible:outline-none"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-white/10 pt-3 mt-3">
            <Link href={isEn ? '/en/how-it-works' : '/hur-det-gar-till'} className="block rounded-xl px-4 py-3 text-base font-medium text-white/90 hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900 focus-visible:outline-none" onClick={() => setMobileMenuOpen(false)}>{isEn ? 'How It Works' : 'Hur det går till'}</Link>
            <Link href={isEn ? '/en/pricing' : '/priser'} className="block rounded-xl px-4 py-3 text-base font-medium text-white/90 hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900 focus-visible:outline-none" onClick={() => setMobileMenuOpen(false)}>{isEn ? 'Pricing' : 'Priser'}</Link>
            <Link href={isEn ? '/en/about' : '/om-oss'} className="block rounded-xl px-4 py-3 text-base font-medium text-white/90 hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900 focus-visible:outline-none" onClick={() => setMobileMenuOpen(false)}>{isEn ? 'About Us' : 'Om oss'}</Link>
          </div>
          <div className="flex items-center justify-center gap-3 pt-4">
            <div className="flex items-center gap-0.5 rounded-full border border-white/15 px-1 py-0.5 text-sm font-medium">
              <Link href="/" className={`rounded-full px-3 py-1 transition-colors ${!isEn ? 'bg-white/15 text-white' : 'text-white/50 hover:text-white'}`} onClick={() => setMobileMenuOpen(false)}>SV</Link>
              <Link href="/en" className={`rounded-full px-3 py-1 transition-colors ${isEn ? 'bg-white/15 text-white' : 'text-white/50 hover:text-white'}`} onClick={() => setMobileMenuOpen(false)}>EN</Link>
            </div>
          </div>
          <div className="pt-3">
            <Link href={isEn ? '/en/contact' : '/kontakt'} className="btn-primary block w-full text-center" onClick={() => setMobileMenuOpen(false)}>{isEn ? 'Get a Quote' : 'Begär offert'}</Link>
          </div>
        </div>
      </div>
    </header>
  )
}
