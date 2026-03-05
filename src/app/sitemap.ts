import { MetadataRoute } from 'next'

const BASE_URL = 'https://surveydrone.se'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/inspektioner-med-dronare', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/inspektioner-med-dronare/takinspektion', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/inspektioner-med-dronare/fasadinspektion', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/inspektioner-med-dronare/solcellsinspektion', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/inspektioner-med-dronare/byggplatsdokumentation', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/inspektioner-med-dronare/industriell-inspektion', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/inspektioner-med-dronare/priser', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/inspektioner-med-dronare/faq', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/inspektioner-med-dronare/case', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/inspektioner-med-dronare/case/takinspektion-flerbostadshus', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/inspektioner-med-dronare/case/byggplatsdokumentation-nyproduktion', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/inspektioner-med-dronare/case/solcellsinspektion-kommersiell', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/inspektioner-med-dronare/kontakt', priority: 0.8, changeFrequency: 'monthly' as const },
  ]

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
