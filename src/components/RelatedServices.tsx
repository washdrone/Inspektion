'use client'

import Link from 'next/link'
import { useReveal } from '@/hooks/useReveal'

interface RelatedService {
  title: string
  href: string
  description: string
}

interface RelatedServicesProps {
  headline?: string
  services: RelatedService[]
}

export function RelatedServices({
  headline = 'Relaterade tjänster',
  services,
}: RelatedServicesProps) {
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
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Link
              key={service.href}
              href={service.href}
              className="card group transition-all duration-700"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${i * 100 + 200}ms`,
              }}
            >
              <h3 className="text-lg font-semibold text-dark-900 group-hover:text-brand-600">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-dark-500">{service.description}</p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand-600">
                Läs mer
                <svg
                  className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
