import type { Article, ArticleCategory } from './types'
import { vadArDronarinspektion } from './vad-ar-dronarinspektion'
import { reglerForDronarflygning } from './regler-for-dronarflygning-i-sverige'
import { saFungerarTermografi } from './sa-fungerar-termografi-med-dronare'
import { hittaFuktskador } from './hitta-fuktskador-med-termisk-inspektion'
import { saGarEnTakinspektionTill } from './sa-gar-en-takinspektion-till'
import { dronarinspektionVsTraditionell } from './dronarinspektion-vs-traditionell-inspektion'
import { hotspotsISolceller } from './hotspots-i-solceller'
import { vadArFotogrammetri } from './vad-ar-fotogrammetri'
import { saFungerarVolymberakning } from './sa-fungerar-volymberakning-med-dronare'
import { dronarinspektionForBrf } from './dronarinspektion-for-bostadsrattsforeningar'
import { besiktningSolcellsanlaggning } from './besiktning-av-solcellsanlaggning-checklista'

export type { Article, ArticleCategory } from './types'

/** Alla publicerade artiklar, i kuraterad ordning (pelarartiklar först per kategori). */
export const ARTICLES: Article[] = [
  vadArDronarinspektion,
  dronarinspektionVsTraditionell,
  reglerForDronarflygning,
  saFungerarTermografi,
  hittaFuktskador,
  saGarEnTakinspektionTill,
  dronarinspektionForBrf,
  hotspotsISolceller,
  besiktningSolcellsanlaggning,
  vadArFotogrammetri,
  saFungerarVolymberakning,
]

export const CATEGORY_ORDER: ArticleCategory[] = [
  'Grunder & metoder',
  'Regler & säkerhet',
  'Termografi & fukt',
  'Tak & fastighet',
  'Solceller & energi',
  'Mätning & 3D',
]

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug)
}

export function articlesByCategory(): Map<ArticleCategory, Article[]> {
  const grouped = new Map<ArticleCategory, Article[]>()
  for (const category of CATEGORY_ORDER) {
    const articles = ARTICLES.filter((a) => a.category === category)
    if (articles.length > 0) grouped.set(category, articles)
  }
  return grouped
}
