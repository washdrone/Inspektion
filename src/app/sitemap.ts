import { MetadataRoute } from 'next'

const BASE_URL = 'https://www.surveydrone.se'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = '2026-03-19'

  const svRoutes = [
    // Top-level
    { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/hur-det-gar-till', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/priser', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/forvaltningsavtal', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/ordlista', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/om-oss', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/kontakt', priority: 0.9, changeFrequency: 'monthly' as const },
    // Services
    { path: '/tjanster/takinspektion', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/tjanster/fasadinspektion', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/tjanster/solcellsinspektion', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/tjanster/termisk-inspektion', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/tjanster/fuktinspektion', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/tjanster/industriinspektion', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/tjanster/vindkraftinspektion', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/tjanster/3d-kartlaggning', priority: 0.8, changeFrequency: 'monthly' as const },
    // Industries
    { path: '/branscher/fastighet', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/branscher/energi', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/branscher/industri', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/branscher/kommuner', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/branscher/forsakring', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/branscher/bygg', priority: 0.7, changeFrequency: 'monthly' as const },
    // Cities
    { path: '/platser/inspektion-stockholm', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/platser/inspektion-goteborg', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/platser/inspektion-malmo', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/platser/inspektion-uppsala', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/platser/inspektion-linkoping', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/platser/inspektion-orebro', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/platser/inspektion-vasteras', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/platser/inspektion-helsingborg', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/platser/inspektion-norrkoping', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/platser/inspektion-umea', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/platser/inspektion-lulea', priority: 0.6, changeFrequency: 'monthly' as const },
  ]

  const enRoutes = [
    // Top-level
    { path: '/en', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/en/how-it-works', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/en/pricing', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/en/maintenance-agreements', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/en/glossary', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/en/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/en/contact', priority: 0.9, changeFrequency: 'monthly' as const },
    // Services
    { path: '/en/services/roof-inspection', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/en/services/facade-inspection', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/en/services/solar-panel-inspection', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/en/services/thermal-inspection', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/en/services/moisture-inspection', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/en/services/industrial-inspection', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/en/services/wind-turbine-inspection', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/en/services/3d-mapping', priority: 0.8, changeFrequency: 'monthly' as const },
    // Industries
    { path: '/en/industries/property', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/en/industries/energy', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/en/industries/industrial', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/en/industries/municipalities', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/en/industries/insurance', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/en/industries/construction', priority: 0.7, changeFrequency: 'monthly' as const },
    // Cities
    { path: '/en/locations/inspection-stockholm', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/en/locations/inspection-gothenburg', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/en/locations/inspection-malmo', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/en/locations/inspection-uppsala', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/en/locations/inspection-linkoping', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/en/locations/inspection-orebro', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/en/locations/inspection-vasteras', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/en/locations/inspection-helsingborg', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/en/locations/inspection-norrkoping', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/en/locations/inspection-umea', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/en/locations/inspection-lulea', priority: 0.6, changeFrequency: 'monthly' as const },
  ]

  const allRoutes = [...svRoutes, ...enRoutes]

  return allRoutes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
