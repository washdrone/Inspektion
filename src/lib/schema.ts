import { BASE_URL } from './metadata'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'WashDrone',
    url: BASE_URL,
    description: 'Professionella drönarinspektioner för fastigheter, tak, fasader och industri i Sverige.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SE',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Sverige',
    },
    serviceType: [
      'Drönarinspektion',
      'Takinspektion',
      'Fasadinspektion',
      'Solcellsinspektion',
      'Byggplatsdokumentation',
      'Industriell inspektion',
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
      '@type': 'LocalBusiness',
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
