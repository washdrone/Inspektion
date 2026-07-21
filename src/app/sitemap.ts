import { MetadataRoute } from 'next'
import { BASE_URL } from '@/lib/metadata'


// Sv/en-par för hreflang i sitemap (xhtml:link). Ensidiga sidor (utan
// motsvarighet på andra språket) får ingen hreflang, vilket är korrekt.
const LANGUAGE_PAIRS: Array<{ sv: string; en: string }> = [
  { sv: '/', en: '/en' },
  { sv: '/hur-det-gar-till', en: '/en/how-it-works' },
  { sv: '/priser', en: '/en/pricing' },
  { sv: '/forvaltningsavtal', en: '/en/maintenance-agreements' },
  { sv: '/ordlista', en: '/en/glossary' },
  { sv: '/om-oss', en: '/en/about' },
  { sv: '/kontakt', en: '/en/contact' },
  { sv: '/tjanster/takinspektion', en: '/en/services/roof-inspection' },
  { sv: '/tjanster/fasadinspektion', en: '/en/services/facade-inspection' },
  { sv: '/tjanster/solcellsinspektion', en: '/en/services/solar-panel-inspection' },
  { sv: '/tjanster/termisk-inspektion', en: '/en/services/thermal-inspection' },
  { sv: '/tjanster/fuktinspektion', en: '/en/services/moisture-inspection' },
  { sv: '/tjanster/industriinspektion', en: '/en/services/industrial-inspection' },
  { sv: '/tjanster/vindkraftinspektion', en: '/en/services/wind-turbine-inspection' },
  { sv: '/tjanster/3d-kartlaggning', en: '/en/services/3d-mapping' },
  { sv: '/branscher/fastighet', en: '/en/industries/property' },
  { sv: '/branscher/energi', en: '/en/industries/energy' },
  { sv: '/branscher/industri', en: '/en/industries/industrial' },
  { sv: '/branscher/kommuner', en: '/en/industries/municipalities' },
  { sv: '/branscher/forsakring', en: '/en/industries/insurance' },
  { sv: '/branscher/bygg', en: '/en/industries/construction' },
  { sv: '/platser/inspektion-stockholm', en: '/en/locations/inspection-stockholm' },
  { sv: '/platser/inspektion-goteborg', en: '/en/locations/inspection-gothenburg' },
  { sv: '/platser/inspektion-malmo', en: '/en/locations/inspection-malmo' },
  { sv: '/platser/inspektion-uppsala', en: '/en/locations/inspection-uppsala' },
  { sv: '/platser/inspektion-linkoping', en: '/en/locations/inspection-linkoping' },
  { sv: '/platser/inspektion-orebro', en: '/en/locations/inspection-orebro' },
  { sv: '/platser/inspektion-vasteras', en: '/en/locations/inspection-vasteras' },
  { sv: '/platser/inspektion-helsingborg', en: '/en/locations/inspection-helsingborg' },
  { sv: '/platser/inspektion-norrkoping', en: '/en/locations/inspection-norrkoping' },
  { sv: '/platser/inspektion-umea', en: '/en/locations/inspection-umea' },
  { sv: '/platser/inspektion-lulea', en: '/en/locations/inspection-lulea' },
]

function urlFor(path: string): string {
  return path === '/' ? BASE_URL : `${BASE_URL}${path}`
}

function languagesFor(path: string): Record<string, string> | undefined {
  const pair = LANGUAGE_PAIRS.find((p) => p.sv === path || p.en === path)
  if (!pair) return undefined
  return {
    sv: urlFor(pair.sv),
    en: urlFor(pair.en),
    'x-default': urlFor(pair.sv),
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const svRoutes = [
    // Top-level
    { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/hur-det-gar-till', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/priser', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/forvaltningsavtal', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/ordlista', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/om-oss', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/kontakt', priority: 0.9, changeFrequency: 'monthly' as const },
    // SEO landing pages
    { path: '/takinspektion-med-dronare', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/termisk-inspektion', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/fasadinspektion', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/solcellsinspektion', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/vad-kostar-dronarinspektion', priority: 0.8, changeFrequency: 'monthly' as const },
    // Mätning & 3D (kärntjänster)
    { path: '/tjanster/dronarinmatning', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/tjanster/volymberakning', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/tjanster/fotogrammetri-3d-modell', priority: 0.9, changeFrequency: 'monthly' as const },
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

  return allRoutes.map((route) => {
    const languages = languagesFor(route.path)
    return {
      url: urlFor(route.path),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      ...(languages ? { alternates: { languages } } : {}),
    }
  })
}
