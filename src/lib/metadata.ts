import { Metadata } from 'next'

const SITE_NAME = 'SurveyDrone'
const BASE_URL = 'https://surveydrone.se'

export function createMetadata({
  title,
  description,
  path,
  noIndex = false,
  locale = 'sv',
  alternateLocalePath,
}: {
  title: string
  description: string
  path: string
  noIndex?: boolean
  locale?: 'sv' | 'en'
  alternateLocalePath?: string
}): Metadata {
  const url = `${BASE_URL}${path}`
  const ogLocale = locale === 'en' ? 'en_US' : 'sv_SE'

  const languages: Record<string, string> = {}
  if (locale === 'sv' && alternateLocalePath) {
    languages['en'] = `${BASE_URL}${alternateLocalePath}`
    languages['x-default'] = url
  } else if (locale === 'en' && alternateLocalePath) {
    languages['sv'] = `${BASE_URL}${alternateLocalePath}`
    languages['x-default'] = `${BASE_URL}${alternateLocalePath}`
  }

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: Object.keys(languages).length > 0 ? languages : undefined,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: ogLocale,
      type: 'website',
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  }
}

export { SITE_NAME, BASE_URL }
