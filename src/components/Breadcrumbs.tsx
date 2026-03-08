import Link from 'next/link'
import { breadcrumbSchema } from '@/lib/schema'

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(items)) }}
      />
      <nav className="container-content pt-4 pb-2" aria-label="Brödsmulor">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-dark-400">
          {items.map((item, i) => (
            <li key={item.url} className="flex items-center gap-1.5">
              {i > 0 && (
                <svg className="h-3.5 w-3.5 text-dark-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
              {i < items.length - 1 ? (
                <Link href={item.url} className="transition-colors hover:text-brand-600">
                  {item.name}
                </Link>
              ) : (
                <span className="text-dark-600 font-medium" aria-current="page">
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
