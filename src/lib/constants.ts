/**
 * Shared navigation and site constants.
 * Single source of truth for links used in Header, Footer, and internal navigation.
 */

export const INSPECTION_LINKS = [
  { href: '/inspektioner-med-dronare/takinspektion', label: 'Takinspektion' },
  { href: '/inspektioner-med-dronare/fasadinspektion', label: 'Fasadinspektion' },
  { href: '/inspektioner-med-dronare/solcellsinspektion', label: 'Solcellsinspektion' },
  { href: '/inspektioner-med-dronare/byggplatsdokumentation', label: 'Byggplatsdokumentation' },
  { href: '/inspektioner-med-dronare/industriell-inspektion', label: 'Industriell inspektion' },
] as const

export const COMPANY_LINKS = [
  { href: '/inspektioner-med-dronare/case', label: 'Kundcase' },
  { href: '/inspektioner-med-dronare/priser', label: 'Prisguide' },
  { href: '/inspektioner-med-dronare/faq', label: 'Vanliga frågor' },
  { href: '/inspektioner-med-dronare/kontakt', label: 'Kontakt' },
] as const

export const REGION_LINKS = [
  { href: '/inspektioner-med-dronare/stockholm', label: 'Stockholm' },
  { href: '/inspektioner-med-dronare/goteborg', label: 'Göteborg' },
  { href: '/inspektioner-med-dronare/malmo', label: 'Malmö' },
  { href: '/inspektioner-med-dronare/uppsala', label: 'Uppsala' },
  { href: '/inspektioner-med-dronare/linkoping', label: 'Linköping' },
  { href: '/inspektioner-med-dronare/orebro', label: 'Örebro' },
  { href: '/inspektioner-med-dronare/vasteras', label: 'Västerås' },
  { href: '/inspektioner-med-dronare/umea', label: 'Umeå' },
  { href: '/inspektioner-med-dronare/lulea', label: 'Luleå' },
] as const

export const CONTACT = {
  email: 'info@surveydrone.se',
} as const
