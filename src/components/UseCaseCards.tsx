import Link from 'next/link'

interface UseCase {
  title: string
  description: string
  href: string
  icon: string
}

interface UseCaseCardsProps {
  headline: string
  subtitle?: string
  useCases: UseCase[]
}

export function UseCaseCards({ headline, subtitle, useCases }: UseCaseCardsProps) {
  return (
    <section className="section-padding">
      <div className="container-content">
        <div className="text-center">
          <h2 className="text-heading-lg sm:text-display">{headline}</h2>
          {subtitle && <p className="mt-4 text-body-lg text-dark-500">{subtitle}</p>}
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((uc) => (
            <Link key={uc.href} href={uc.href} className="card group">
              <span className="text-3xl" role="img" aria-hidden="true">{uc.icon}</span>
              <h3 className="mt-4 text-lg font-semibold text-dark-900 group-hover:text-brand-600">{uc.title}</h3>
              <p className="mt-2 text-sm text-dark-500">{uc.description}</p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand-600">
                Läs mer
                <svg className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
