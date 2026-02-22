import { BASE_URL } from './metadata'
import { CONTACT } from './constants'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${BASE_URL}/#organization`,
    name: 'WashDrone',
    url: BASE_URL,
    description:
      'Professionella drönarinspektioner av tak, fasader, solceller och industri för företag i Sverige.',
    email: CONTACT.email,
    /** MÅSTE VERIFIERAS: Fyll i telefonnummer, adress, org.nummer, logo-URL */
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SE',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Sverige',
    },
    knowsAbout: [
      'Drönarinspektion',
      'Takinspektion',
      'Fasadinspektion',
      'Solcellsinspektion',
      'Byggplatsdokumentation',
      'Industriell inspektion',
      'UAS',
      'RPAS',
    ],
  }
}

export function serviceSchema({
  name,
  description,
  url,
}: {
  name: string
  description: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'ProfessionalService',
      '@id': `${BASE_URL}/#organization`,
      name: 'WashDrone',
      url: BASE_URL,
    },
    url: `${BASE_URL}${url}`,
    areaServed: {
      '@type': 'Country',
      name: 'Sverige',
    },
  }
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  }
}
