import Link from 'next/link'

interface HeroProps {
  headline: string
  subheadline: string
  ctaPrimary?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
  stats?: { value: string; label: string }[]
}

export function Hero({
  headline,
  subheadline,
  ctaPrimary = { label: 'Begär offert', href: '/inspektioner-med-dronare/kontakt' },
  ctaSecondary,
  stats,
}: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-dark-950">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-800" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(6,182,212,0.12)_0%,_transparent_60%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(6,182,212,0.06)_0%,_transparent_60%)]" aria-hidden="true" />

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
          <div className="mb-6 inline-flex items-center gap-2 rounded-pill border border-brand-500/30 bg-brand-500/10 px-4 py-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-wider text-brand-400">
              Drönarinspektioner för företag
            </span>
          </div>

          <h1 className="text-display font-extrabold text-white sm:text-display-lg lg:text-display-xl">
            {headline}
          </h1>

          <p className="mt-6 text-body-lg leading-relaxed text-dark-300 md:text-xl md:leading-relaxed max-w-2xl">
            {subheadline}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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
              <div key={i}>
                <div className="text-3xl font-extrabold text-white md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-dark-400">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
