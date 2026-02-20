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
          <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">{headline}</h2>
          {subtitle && <p className="mt-3 text-lg text-neutral-600">{subtitle}</p>}
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((uc) => (
            <Link
              key={uc.href}
              href={uc.href}
              className="group rounded-xl border border-neutral-200 bg-white p-6 transition-all hover:border-primary-300 hover:shadow-lg"
            >
              <span className="text-3xl" role="img" aria-hidden="true">{uc.icon}</span>
              <h3 className="mt-3 text-lg font-semibold text-neutral-900 group-hover:text-primary-600">
                {uc.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">{uc.description}</p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-primary-600">
                Läs mer
                <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
