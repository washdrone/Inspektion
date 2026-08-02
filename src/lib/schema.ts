import { BASE_URL } from './metadata'
import { CONTACT } from './constants'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${BASE_URL}/#organization`,
    name: 'SurveyDrone',
    url: BASE_URL,
    logo: `${BASE_URL}/icon.svg`,
    description:
      'Professionell visuell och termisk drönarinspektion i hela Sverige. Tak, fasader, solceller och industri. EASA-certifierade piloter, högupplöst RGB och fullradiometrisk termisk datainsamling.',
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
      'Drönarinmätning',
      'Volymberäkning',
      'Drönarkartläggning',
      'Takinspektion',
      'Fasadinspektion',
      'Solcellsinspektion',
      'Termisk kamera inspektion',
      'IR-inspektion',
      'Fuktinspektion',
      'Industriinspektion',
      'Vindkraftinspektion',
      '3D-kartläggning',
      'Fotogrammetri',
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
  serviceType = 'Drönare-inspektion',
}: {
  name: string
  description: string
  url: string
  serviceType?: string
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
    serviceType,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'SEK',
    },
  }
}

export function articleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
}: {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${BASE_URL}${url}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}${url}`,
    },
    datePublished,
    dateModified,
    inLanguage: 'sv',
    author: {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'SurveyDrone',
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'SurveyDrone',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/icon.svg`,
      },
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
      ...(item.url ? { item: `${BASE_URL}${item.url}` } : {}),
    })),
  }
}

export function regionalServiceSchemaSv({
  name,
  description,
  url,
  city,
}: {
  name: string
  description: string
  url: string
  city: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${BASE_URL}${url}`,
    serviceType: 'Drönare-inspektion',
    provider: {
      '@type': 'ProfessionalService',
      '@id': `${BASE_URL}/#organization`,
      name: 'SurveyDrone',
      url: BASE_URL,
    },
    areaServed: {
      '@type': 'City',
      name: city,
    },
  }
}

// Backwards-compatible wrapper for existing location pages. These pages describe
// service areas, not physical business locations, and must not emit LocalBusiness.
export function localBusinessSchemaSv({
  latitude: _latitude,
  longitude: _longitude,
  ...service
}: Parameters<typeof regionalServiceSchemaSv>[0] & {
  latitude: number
  longitude: number
}) {
  return regionalServiceSchemaSv(service)
}
