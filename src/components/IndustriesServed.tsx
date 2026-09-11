import Link from 'next/link'

interface Industry {
  name: string
  description: string
  href?: string
}

interface IndustriesServedProps {
  headline: string
  industries: Industry[]
}

export function IndustriesServed({ headline, industries }: IndustriesServedProps) {

  return (
    <section className="section-padding section-muted">
      <div className="container-content">
        <h2
          className="text-center text-heading-lg sm:text-display"
        >
          {headline}
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => {
            const content = (
              <>
                <h3 className="text-base font-semibold text-dark-900">{ind.name}</h3>
                <p className="mt-2 text-body-sm text-dark-500">{ind.description}</p>
              </>
            )

            return ind.href ? (
              <Link
                key={i}
                href={ind.href}
                className="card group"
              >
                {content}
                <span className="mt-3 inline-flex items-center text-sm font-semibold text-brand-600">
                  Läs mer
                  <svg
                    className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ) : (
              <div
                key={i}
                className="card"
              >
                {content}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
