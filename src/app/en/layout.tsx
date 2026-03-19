import { Header } from '@/components/Header'
import { FooterEn } from '@/components/FooterEn'
import { CookieBannerEn } from '@/components/CookieBannerEn'
import { organizationSchemaEn } from '@/lib/schema-en'
import { websiteSchema } from '@/lib/schema'
import { SITE_NAME, BASE_URL } from '@/lib/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: `SurveyDrone | Drone Inspection Sweden — Thermal & Visual`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'SurveyDrone offers professional drone inspection across Sweden. Roofs, facades, solar panels & industrial facilities with thermal camera. EASA-certified pilots. Get a quote.',
  openGraph: {
    locale: 'en_US',
    type: 'website',
    siteName: SITE_NAME,
  },
  alternates: {
    canonical: `${BASE_URL}/en`,
    languages: {
      sv: BASE_URL,
      'x-default': BASE_URL,
    },
  },
}

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchemaEn()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema()),
        }}
      />
      <Header locale="en" />
      <main className="flex-1 pt-20">{children}</main>
      <FooterEn />
      <CookieBannerEn />
    </>
  )
}
