import { BASE_URL } from './metadata'
import { CONTACT } from './constants'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${BASE_URL}/#organization`,
    name: 'SurveyDrone',
    url: BASE_URL,
    description:
      'Professionell drönare-inspektion i hela Sverige. Termisk kamera, takinspektion, fasadinspektion och solcellsinspektion. EASA-certifierade piloter.',
    email: CONTACT.email,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SE',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Sverige',
    },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: 'EASA fjärrpilotcertifikat',
    },
    knowsAbout: [
      'Drönarinspektion',
      'Takinspektion',
      'Fasadinspektion',
      'Solcellsinspektion',
      'Termisk kamera inspektion',
      'IR-inspektion',
      'Byggplatsdokumentation',
      'Industriell inspektion',
      'UAS',
      'RPAS',
    ],
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SurveyDrone',
    url: BASE_URL,
    publisher: {
      '@type': 'ProfessionalService',
      '@id': `${BASE_URL}/#organization`,
    },
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
      name: 'SurveyDrone',
      url: BASE_URL,
    },
    url: `${BASE_URL}${url}`,
    areaServed: {
      '@type': 'Country',
      name: 'Sverige',
    },
    serviceType: 'Drönare-inspektion',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'SEK',
      availability: 'https://schema.org/OnlineOnly',
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
