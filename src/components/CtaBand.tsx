'use client'

import Link from 'next/link'
import { useReveal } from '@/hooks/useReveal'

interface CtaBandProps {
  headline: string
  description?: string
  ctaLabel?: string
  ctaHref?: string
}

export function CtaBand({
  headline,
  description,
  ctaLabel = 'Begär offert',
  ctaHref = '/kontakt',
}: CtaBandProps) {
  const { ref, visible } = useReveal()

  return (
    <section ref={ref} className="relative overflow-hidden bg-dark-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(27,58,107,0.15)_0%,_transparent_70%)]" aria-hidden="true" />
      <div className="container-content relative z-10 py-20 text-center md:py-28">
        <h2
          className="text-heading-lg font-extrabold text-white sm:text-display transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          {headline}
        </h2>
        {description && (
          <p
            className="mx-auto mt-4 max-w-xl text-lg text-dark-300 transition-all duration-700 delay-100"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)' }}
          >
            {description}
          </p>
        )}
        <div
          className="mt-8 transition-all duration-700 delay-200"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)' }}
        >
          <Link href={ctaHref} className="btn-primary text-base px-8 py-4">
            {ctaLabel}
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
