export type ArticleCategory =
  | 'Grunder & metoder'
  | 'Regler & säkerhet'
  | 'Termografi & fukt'
  | 'Tak & fastighet'
  | 'Solceller & energi'
  | 'Mätning & 3D'

export type ArticleCategoryEn =
  | 'Basics & methods'
  | 'Rules & safety'
  | 'Thermography & moisture'
  | 'Roofs & property'
  | 'Solar & energy'
  | 'Surveying & 3D'

export type ArticleBlock =
  | { type: 'p'; text: string }
  | { type: 'list'; ordered?: boolean; items: string[] }
  | { type: 'table'; caption?: string; headers: string[]; rows: string[][] }

export interface ArticleSection {
  /** H2-rubrik */
  heading: string
  blocks: ArticleBlock[]
}

export interface Article {
  slug: string
  /** H1 på sidan */
  title: string
  /** Title-tagg (kan vara kortare än H1) */
  metaTitle: string
  description: string
  category: ArticleCategory | ArticleCategoryEn
  datePublished: string
  dateModified: string
  /** Ingress — det direkta svaret på sidans primära fråga */
  intro: string
  sections: ArticleSection[]
  faq?: { question: string; answer: string }[]
  relatedServices: { href: string; label: string }[]
  /** Slugs till relaterade kunskapsartiklar */
  relatedArticles: string[]
}
