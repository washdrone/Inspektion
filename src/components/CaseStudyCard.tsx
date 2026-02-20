import Link from 'next/link'

interface CaseStudyCardProps {
  title: string
  industry: string
  summary: string
  href: string
}

export function CaseStudyCard({ title, industry, summary, href }: CaseStudyCardProps) {
  return (
    <Link href={href} className="card group block">
      <span className="inline-block rounded-pill bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-700">
        {industry}
      </span>
      <h3 className="mt-3 text-heading-sm group-hover:text-brand-600">
        {title}
      </h3>
      <p className="mt-2 text-body-sm text-dark-500">{summary}</p>
      <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand-600">
        Läs hela caset
        <svg className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </Link>
  )
}
