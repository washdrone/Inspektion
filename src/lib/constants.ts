/**
 * Shared navigation and site constants.
 * Single source of truth for links used in Header, Footer, and internal navigation.
 */

export const SERVICE_LINKS = [
  { href: '/tjanster/dronarinmatning', label: 'Drönarinmätning' },
  { href: '/tjanster/volymberakning', label: 'Volymberäkning' },
  { href: '/tjanster/fotogrammetri-3d-modell', label: 'Fotogrammetri & 3D-modell' },
  { href: '/tjanster/3d-kartlaggning', label: '3D-kartläggning' },
  { href: '/tjanster/takinspektion', label: 'Takinspektion' },
  { href: '/tjanster/fasadinspektion', label: 'Fasadinspektion' },
  { href: '/tjanster/solcellsinspektion', label: 'Solcellsinspektion' },
  { href: '/tjanster/termisk-inspektion', label: 'Termisk inspektion' },
  { href: '/tjanster/fuktinspektion', label: 'Fuktinspektion' },
  { href: '/tjanster/industriinspektion', label: 'Industriinspektion' },
  { href: '/tjanster/vindkraftinspektion', label: 'Vindkraftinspektion' },
] as const

export const INDUSTRY_LINKS = [
  { href: '/branscher/fastighet', label: 'Fastighet' },
  { href: '/branscher/energi', label: 'Energi' },
  { href: '/branscher/industri', label: 'Industri' },
  { href: '/branscher/kommuner', label: 'Kommuner' },
  { href: '/branscher/forsakring', label: 'Försäkring' },
  { href: '/branscher/bygg', label: 'Bygg' },
] as const

export const REGION_LINKS = [
  { href: '/platser/inspektion-stockholm', label: 'Stockholm' },
  { href: '/platser/inspektion-goteborg', label: 'Göteborg' },
  { href: '/platser/inspektion-malmo', label: 'Malmö' },
  { href: '/platser/inspektion-uppsala', label: 'Uppsala' },
  { href: '/platser/inspektion-linkoping', label: 'Linköping' },
  { href: '/platser/inspektion-orebro', label: 'Örebro' },
  { href: '/platser/inspektion-vasteras', label: 'Västerås' },
  { href: '/platser/inspektion-helsingborg', label: 'Helsingborg' },
  { href: '/platser/inspektion-norrkoping', label: 'Norrköping' },
  { href: '/platser/inspektion-umea', label: 'Umeå' },
  { href: '/platser/inspektion-lulea', label: 'Luleå' },
] as const

export const COMPANY_LINKS = [
  { href: '/om-oss', label: 'Om oss' },
  { href: '/hur-det-gar-till', label: 'Hur det går till' },
  { href: '/priser', label: 'Prisguide' },
  { href: '/forvaltningsavtal', label: 'Förvaltningsavtal' },
  { href: '/ordlista', label: 'Ordlista' },
  { href: '/kontakt', label: 'Kontakt' },
] as const

export const CONTACT = {
  email: 'info@surveydrone.se',
} as const
