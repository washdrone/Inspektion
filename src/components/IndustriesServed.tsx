'use client'

import { useReveal } from '@/hooks/useReveal'

interface Industry {
  name: string
  description: string
}

interface IndustriesServedProps {
  headline: string
  industries: Industry[]
}

export function IndustriesServed({ headline, industries }: IndustriesServedProps) {
  const { ref, visible } = useReveal()

  return (
    <section ref={ref} className="section-padding section-muted">
      <div className="container-content">
        <h2
          className="text-center text-heading-lg sm:text-display transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          {headline}
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="card transition-all duration-700"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${i * 80 + 200}ms`,
              }}
            >
              <h3 className="text-base font-semibold text-dark-900">{ind.name}</h3>
              <p className="mt-2 text-body-sm text-dark-500">{ind.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
