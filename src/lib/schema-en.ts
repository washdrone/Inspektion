import { BASE_URL } from './metadata'
import { CONTACT } from './constants'

export function organizationSchemaEn() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${BASE_URL}/#organization`,
    name: 'SurveyDrone',
    url: BASE_URL,
    description:
      'Professional drone inspection with thermal camera across Sweden. Roofs, facades, solar panels and industrial facilities. EASA-certified pilots and full radiometric data collection.',
    email: CONTACT.email,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SE',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Sweden',
    },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: 'EASA Remote Pilot Certificate',
    },
    knowsAbout: [
      'Drone Inspection',
      'Roof Inspection',
      'Facade Inspection',
      'Solar Panel Inspection',
      'Thermal Camera Inspection',
      'IR Inspection',
      'Moisture Inspection',
      'Industrial Inspection',
      'Wind Turbine Inspection',
      '3D Mapping',
      'Photogrammetry',
      'UAS',
      'RPAS',
    ],
  }
}

export function serviceSchemaEn({
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
      name: 'Sweden',
    },
    serviceType: 'Drone Inspection',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'SEK',
      availability: 'https://schema.org/OnlineOnly',
    },
  }
}

export function localBusinessSchemaEn({
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
