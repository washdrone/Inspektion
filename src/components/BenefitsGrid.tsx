'use client'

import { useReveal } from '@/hooks/useReveal'

interface Benefit {
  title: string
  description: string
  icon: 'clock' | 'shield' | 'chart' | 'camera' | 'file' | 'building'
}

const icons: Record<Benefit['icon'], React.ReactNode> = {
  clock: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  shield: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  chart: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  camera: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  file: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  building: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
}

interface BenefitsGridProps {
  headline: string
  subtitle?: string
  benefits: Benefit[]
  variant?: 'light' | 'dark'
}

export function BenefitsGrid({ headline, subtitle, benefits, variant = 'light' }: BenefitsGridProps) {
  const isDark = variant === 'dark'
  const { ref, visible } = useReveal()

  return (
    <section ref={ref} className={`section-padding ${isDark ? 'section-dark' : ''}`}>
      <div className="container-content">
        <div
          className="text-center transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          <h2 className={`text-heading-lg sm:text-display ${isDark ? 'text-white' : ''}`}>{headline}</h2>
          {subtitle && <p className={`mt-4 text-body-lg ${isDark ? 'text-dark-300' : 'text-dark-500'}`}>{subtitle}</p>}
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className={`${isDark ? 'card-dark' : 'card'} transition-all duration-700`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${i * 80 + 200}ms`,
              }}
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${isDark ? 'bg-brand-500/15 text-brand-400' : 'bg-brand-50 text-brand-600'}`}>
                {icons[benefit.icon]}
              </div>
              <h3 className={`mt-4 text-heading-sm ${isDark ? 'text-white' : ''}`}>{benefit.title}</h3>
              <p className={`mt-2 text-base ${isDark ? 'text-dark-400' : 'text-dark-500'}`}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
