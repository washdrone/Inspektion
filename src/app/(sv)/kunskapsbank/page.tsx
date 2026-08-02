import type { Metadata } from 'next'
import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { articlesByCategory, ARTICLES } from '@/lib/articles'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaBand } from '@/components/CtaBand'

export const metadata: Metadata = createMetadata({
  title: 'Kunskapsbank — Guider om drönarinspektion, termografi och mätning',
  description:
    'Faktabaserade guider om drönarinspektion: regler, termografi, fuktsökning, takinspektion, solceller, fotogrammetri och volymberäkning. Skrivet för fastighetsägare och beslutsfattare.',
  path: '/kunskapsbank',
})

const dateFormatter = new Intl.DateTimeFormat('sv-SE', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

export default function KunskapsbankPage() {
  const grouped = articlesByCategory()

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Hem', url: '/' },
          { name: 'Kunskapsbank', url: '/kunskapsbank' },
        ]}
      />

      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="page-heading">Kunskapsbank</h1>
            <p className="mt-4 text-lg text-dark-500">
              Guider och fördjupningar om drönarinspektion, termografi och mätning — skrivna för
              fastighetsägare, förvaltare och beslutsfattare. {ARTICLES.length} artiklar, fria från
              säljfluff och baserade på hur tekniken faktiskt fungerar.
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
                      href={`/kunskapsbank/${article.slug}`}
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
                          Uppdaterad {dateFormatter.format(new Date(article.dateModified))}
                        </time>
                        <span className="font-medium text-brand-700 transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                          Läs mer →
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
        headline="Hittar du inte svaret på din fråga?"
        description="Kontakta oss — vi svarar gärna på frågor om metod, regler och vad som passar ert objekt."
        ctaLabel="Kontakta oss"
      />
    </>
  )
}
