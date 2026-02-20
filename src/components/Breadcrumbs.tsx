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
      <nav className="container-content py-3" aria-label="Brödsmulor">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-neutral-500">
          {items.map((item, i) => (
            <li key={item.url} className="flex items-center gap-1">
              {i > 0 && <span aria-hidden="true">/</span>}
              {i < items.length - 1 ? (
                <Link href={item.url} className="hover:text-primary-600">
                  {item.name}
                </Link>
              ) : (
                <span className="text-neutral-700" aria-current="page">
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
