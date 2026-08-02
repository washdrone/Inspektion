import type { Metadata } from 'next'
import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { articlesByCategoryEn, ARTICLES_EN } from '@/lib/articles-en'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaBand } from '@/components/CtaBand'

export const metadata: Metadata = createMetadata({
  title: 'Knowledge Base — Guides on drone inspection, thermography and surveying',
  description:
    'Fact-based guides on drone inspection: regulations, thermography, moisture surveys, roof inspection, solar panels, photogrammetry and volume calculation. Written for property owners and decision-makers.',
  path: '/en/knowledge-base',
  locale: 'en',
})

const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

export default function KnowledgeBasePage() {
  const grouped = articlesByCategoryEn()

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', url: '/en' },
          { name: 'Knowledge Base', url: '/en/knowledge-base' },
        ]}
      />

      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="page-heading">Knowledge Base</h1>
            <p className="mt-4 text-lg text-dark-500">
              Guides and in-depth articles on drone inspection, thermography and surveying — written
              for property owners, managers and decision-makers. {ARTICLES_EN.length} articles, free
              from sales fluff and based on how the technology actually works.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-5xl space-y-14">
            {Array.from(grouped.entries()).map(([category, articles]) => (
              <div key={category}>
                <h2 className="text-heading-sm font-bold text-dark-900">{category}</h2>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  {articles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/en/knowledge-base/${article.slug}`}
                      className="card group flex h-full flex-col"
                    >
                      <h3 className="text-lg font-bold text-dark-900 transition-colors group-hover:text-brand-700">
                        {article.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-dark-500">
                        {article.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between text-sm">
                        <time dateTime={article.dateModified} className="text-dark-400">
                          Updated {dateFormatter.format(new Date(article.dateModified))}
                        </time>
                        <span className="font-medium text-brand-700 transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                          Read more →
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        headline="Can't find the answer to your question?"
        description="Contact us — we are happy to answer questions about methods, regulations and what suits your object."
        ctaLabel="Contact Us"
        ctaHref="/en/contact"
      />
    </>
  )
}
