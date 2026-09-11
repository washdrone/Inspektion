import { Metadata } from 'next'
import { languagePairFor } from './i18n'

const SITE_NAME = 'SurveyDrone'
const BASE_URL = 'https://www.surveydrone.se'

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
  const cleanTitle = title.replace(/(?:\s*\|\s*SurveyDrone)+\s*$/i, '').trim()
  const fullTitle = /\bSurveyDrone\b/i.test(cleanTitle) ? cleanTitle : `${cleanTitle} | ${SITE_NAME}`
  const url = `${BASE_URL}${path}`
  const ogLocale = locale === 'en' ? 'en_US' : 'sv_SE'
  const pair = languagePairFor(path)
  const inferredAlternatePath = locale === 'en' ? pair?.sv : pair?.en
  const resolvedAlternatePath = alternateLocalePath ?? inferredAlternatePath

  const languages: Record<string, string> = {}
  if (locale === 'sv' && resolvedAlternatePath) {
    languages['sv'] = url
    languages['en'] = `${BASE_URL}${resolvedAlternatePath}`
    languages['x-default'] = url
  } else if (locale === 'en' && resolvedAlternatePath) {
    languages['sv'] = `${BASE_URL}${resolvedAlternatePath}`
    languages['en'] = url
    languages['x-default'] = `${BASE_URL}${resolvedAlternatePath}`
  }

  return {
    title: { absolute: fullTitle },
    description,
    alternates: {
      canonical: url,
      languages: Object.keys(languages).length > 0 ? languages : undefined,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: ogLocale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  }
}

export { SITE_NAME, BASE_URL }
