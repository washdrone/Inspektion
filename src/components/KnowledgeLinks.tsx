import Link from 'next/link'
import { getArticle } from '@/lib/articles'

/**
 * Kompakt sektion som länkar en tjänstesida till relaterade guider i kunskapsbanken.
 * Okända slugs filtreras bort så att sidan aldrig bryter av en borttagen artikel.
 */
export function KnowledgeLinks({ slugs }: { slugs: string[] }) {
  const articles = slugs
    .map((slug) => getArticle(slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a))

  if (articles.length === 0) return null

  return (
    <section className="section-padding section-muted" aria-label="Guider i kunskapsbanken">
      <div className="container-content">
        <h2 className="text-center text-heading-lg sm:text-display">Fördjupning i kunskapsbanken</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-dark-500">
          Faktabaserade guider som hjälper dig förstå metoden och fatta rätt beslut.
        </p>
        <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/kunskapsbank/${article.slug}`}
              className="card group flex h-full flex-col"
            >
              <h3 className="text-base font-semibold text-dark-900 transition-colors group-hover:text-brand-700">
                {article.title}
              </h3>
              <p className="mt-2 flex-1 text-body-sm text-dark-500">{article.description}</p>
              <span className="mt-4 text-sm font-medium text-brand-700" aria-hidden="true">
                Läs guiden →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
