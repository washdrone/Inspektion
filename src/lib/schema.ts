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
      'Professionell drönare-inspektion med termisk kamera i hela Sverige. Tak, fasader, solceller och industri. EASA-certifierade piloter och fullradiometrisk datainsamling.',
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

export function localBusinessSchemaSv({
  name,
  description,
  url,
  city,
  latitude,
  longitude,
}: {
  name: string
  description: string
  url: string
  city: string
  latitude: number
  longitude: number
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    description,
    url: `${BASE_URL}${url}`,
    email: CONTACT.email,
    areaServed: {
      '@type': 'City',
      name: city,
      geo: {
        '@type': 'GeoCoordinates',
        latitude,
        longitude,
      },
    },
    parentOrganization: {
      '@type': 'ProfessionalService',
      '@id': `${BASE_URL}/#organization`,
    },
  }
}
