import { MetadataRoute } from 'next'

const BASE_URL = 'https://washdrone.se'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '/',
    '/inspektioner-med-dronare',
    '/inspektioner-med-dronare/takinspektion',
    '/inspektioner-med-dronare/fasadinspektion',
    '/inspektioner-med-dronare/solcellsinspektion',
    '/inspektioner-med-dronare/byggplatsdokumentation',
    '/inspektioner-med-dronare/industriell-inspektion',
    '/inspektioner-med-dronare/priser',
    '/inspektioner-med-dronare/faq',
    '/inspektioner-med-dronare/case',
    '/inspektioner-med-dronare/case/takinspektion-flerbostadshus',
    '/inspektioner-med-dronare/kontakt',
  ]

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route === '/inspektioner-med-dronare' ? 0.9 : 0.7,
  }))
}
