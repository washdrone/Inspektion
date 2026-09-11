import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { createMetadata } from '@/lib/metadata'
import { articleSchema, faqSchema } from '@/lib/schema'
import { ARTICLES, getArticle } from '@/lib/articles'
import { ArticleBody, renderInline } from '@/components/ArticleBody'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const article = getArticle(params.slug)
  if (!article) return {}
  return createMetadata({
    title: article.metaTitle,
    description: article.description,
    path: `/kunskapsbank/${article.slug}`,
  })
}

const dateFormatter = new Intl.DateTimeFormat('sv-SE', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

export default function ArticlePage({ params }: PageProps) {
  const article = getArticle(params.slug)
  if (!article) notFound()

  const path = `/kunskapsbank/${article.slug}`
  const related = article.relatedArticles
    .map((slug) => getArticle(slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title: article.title,
              description: article.description,
              url: path,
              datePublished: article.datePublished,
              dateModified: article.dateModified,
            })
          ),
        }}
      />
      {article.faq && article.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(article.faq)) }}
        />
      )}

      <Breadcrumbs
        items={[
          { name: 'Hem', url: '/' },
          { name: 'Kunskapsbank', url: '/kunskapsbank' },
          { name: article.title, url: path },
        ]}
      />

      <article className="section-padding">
        <div className="container-narrow">
          <header>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
              {article.category}
            </p>
            <h1 className="page-heading mt-3">{article.title}</h1>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm text-dark-400">
              <span>
                Publicerad{' '}
                <time dateTime={article.datePublished}>
                  {dateFormatter.format(new Date(article.datePublished))}
                </time>
              </span>
              <span>
                Uppdaterad{' '}
                <time dateTime={article.dateModified}>
                  {dateFormatter.format(new Date(article.dateModified))}
                </time>
              </span>
              <span>Av SurveyDrone</span>
            </div>
            <p className="mt-6 text-lg leading-relaxed text-dark-600">{renderInline(article.intro)}</p>
          </header>

          <ArticleBody sections={article.sections} />

          {related.length > 0 && (
            <aside className="mt-14 rounded-2xl border border-dark-100 bg-dark-50 p-6" aria-label="Relaterade artiklar">
              <h2 className="text-lg font-bold text-dark-900">Läs vidare i kunskapsbanken</h2>
              <ul className="mt-4 space-y-3">
                {related.map((rel) => (
                  <li key={rel.slug}>
                    <Link
                      href={`/kunskapsbank/${rel.slug}`}
                      className="font-medium text-brand-700 underline decoration-brand-300 underline-offset-2 transition-colors hover:text-brand-800"
                    >
                      {rel.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}

          {article.relatedServices.length > 0 && (
            <aside className="mt-6 rounded-2xl border border-dark-100 p-6" aria-label="Relaterade tjänster">
              <h2 className="text-lg font-bold text-dark-900">Relaterade tjänster</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {article.relatedServices.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="rounded-lg border border-dark-100 px-3 py-1.5 text-sm font-medium text-brand-700 transition-colors hover:border-brand-500 hover:bg-brand-50"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </aside>
          )}
        </div>
      </article>

      {article.faq && article.faq.length > 0 && (
        <FaqAccordion headline="Vanliga frågor" items={article.faq} />
      )}

      <CtaBand
        headline="Vill du veta vad detta innebär för ert objekt?"
        description="Beskriv ert behov så återkommer vi med en konkret bedömning och offert."
      />
    </>
  )
}
