import Link from 'next/link'

interface CaseStudyCardProps {
  title: string
  industry: string
  summary: string
  href: string
}

export function CaseStudyCard({ title, industry, summary, href }: CaseStudyCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-xl border border-neutral-200 bg-white p-6 transition-all hover:border-primary-300 hover:shadow-lg"
    >
      <span className="inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700">
        {industry}
      </span>
      <h3 className="mt-3 text-lg font-semibold text-neutral-900 group-hover:text-primary-600">
        {title}
      </h3>
      <p className="mt-2 text-sm text-neutral-600">{summary}</p>
      <span className="mt-4 inline-flex items-center text-sm font-medium text-primary-600">
        Läs hela caset
        <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  )
}
