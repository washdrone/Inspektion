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

/** Contact info — MÅSTE VERIFIERAS: telefonnummer saknas */
export const CONTACT = {
  email: 'info@washdrone.se',
  /** MÅSTE VERIFIERAS: Fyll i riktigt telefonnummer */
  phone: '+46XXXXXXXXX',
  phoneDisplay: '+46 (0)XX-XXX XX XX',
} as const
