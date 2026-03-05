'use client'

import Link from 'next/link'
import { useReveal } from '@/hooks/useReveal'
import { useCountUp } from '@/hooks/useCountUp'

interface HeroProps {
  headline: string
  subheadline: string
  ctaPrimary?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
  stats?: { value: string; label: string }[]
}

function AnimatedStat({ value, label, visible, index }: { value: string; label: string; visible: boolean; index: number }) {
  const numericMatch = value.match(/^(\d+)(.*)$/)
  const numericValue = numericMatch ? parseInt(numericMatch[1], 10) : null
  const suffix = numericMatch ? numericMatch[2] : ''
  const count = useCountUp(numericValue ?? 0, visible)

  return (
    <div
      className="transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${index * 100 + 400}ms`,
      }}
    >
      <div className="text-3xl font-extrabold text-white md:text-4xl">
        {numericValue !== null ? `${count}${suffix}` : value}
      </div>
      <div className="mt-1 text-sm text-dark-400">{label}</div>
    </div>
  )
}

export function Hero({
  headline,
  subheadline,
  ctaPrimary = { label: 'Begär offert', href: '/kontakt' },
  ctaSecondary,
  stats,
}: HeroProps) {
  const { ref, visible } = useReveal({ threshold: 0.1 })

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center overflow-hidden bg-dark-950">
      {/* Animated background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-800" aria-hidden="true" />
      <div className="absolute inset-0 hero-glow-1" aria-hidden="true" />
      <div className="absolute inset-0 hero-glow-2" aria-hidden="true" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="container-content relative z-10 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-pill border border-accent-400/30 bg-accent-400/10 px-4 py-1.5 transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            <div className="h-1.5 w-1.5 rounded-full bg-accent-400 animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-wider text-accent-400">
              Drönarinspektioner för företag
            </span>
          </div>

          <h1
            className="text-display font-extrabold text-white sm:text-display-lg lg:text-display-xl transition-all duration-700 delay-100"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
            }}
          >
            {headline}
          </h1>

          <p
            className="mt-6 text-body-lg leading-relaxed text-dark-300 md:text-xl md:leading-relaxed max-w-2xl transition-all duration-700 delay-200"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            {subheadline}
          </p>

          <div
            className="mt-10 flex flex-col gap-4 sm:flex-row transition-all duration-700 delay-300"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            <Link href={ctaPrimary.href} className="btn-primary text-base px-8 py-4">
              {ctaPrimary.label}
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            {ctaSecondary && (
              <Link href={ctaSecondary.href} className="btn-secondary-dark">
                {ctaSecondary.label}
              </Link>
            )}
          </div>
        </div>

        {/* Stats bar */}
        {stats && stats.length > 0 && (
          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 md:grid-cols-4 md:mt-20">
            {stats.map((stat, i) => (
              <AnimatedStat key={i} value={stat.value} label={stat.label} visible={visible} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
