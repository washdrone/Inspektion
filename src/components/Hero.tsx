import Link from 'next/link'

interface HeroProps {
  headline: string
  subheadline: string
  ctaPrimary?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
  proofItems?: string[]
}

export function Hero({
  headline,
  subheadline,
  ctaPrimary = { label: 'Begär offert', href: '/inspektioner-med-dronare/kontakt' },
  ctaSecondary,
  proofItems,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
      <div className="container-content relative z-10 py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {headline}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-primary-100 sm:text-xl md:mt-6">
            {subheadline}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href={ctaPrimary.href} className="btn-primary bg-white text-primary-700 hover:bg-primary-50">
              {ctaPrimary.label}
            </Link>
            {ctaSecondary && (
              <Link href={ctaSecondary.href} className="btn-secondary border-white text-white hover:bg-white/10">
                {ctaSecondary.label}
              </Link>
            )}
          </div>
        </div>

        {proofItems && proofItems.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/20 pt-6">
            {proofItems.map((item, i) => (
              <span key={i} className="flex items-center gap-2 text-sm text-primary-100">
                <svg className="h-4 w-4 text-accent-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Decorative element */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5" aria-hidden="true" />
    </section>
  )
}
