'use client'

import { useReveal } from '@/hooks/useReveal'

interface Deliverable {
  title: string
  description: string
}

interface DeliverablesProps {
  headline: string
  items: Deliverable[]
}

export function Deliverables({ headline, items }: DeliverablesProps) {
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
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {items.map((item, i) => (
            <div
              key={i}
              className="card flex gap-4 transition-all duration-700"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${i * 100 + 200}ms`,
              }}
            >
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-dark-900">{item.title}</h3>
                <p className="mt-1 text-body-sm text-dark-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
