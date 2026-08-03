import '@/styles/globals.css'
import { inter } from '@/lib/fonts'
import { Header } from '@/components/Header'
import { FooterEn } from '@/components/FooterEn'
import { CookieBannerEn } from '@/components/CookieBannerEn'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import { organizationSchemaEn } from '@/lib/schema-en'
import { websiteSchema } from '@/lib/schema'
import { SITE_NAME, BASE_URL } from '@/lib/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `SurveyDrone | Drone Inspection Sweden — Thermal & Visual`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'SurveyDrone offers professional drone inspection across Sweden. Roofs, facades, solar panels & industrial facilities with RGB and thermal cameras. EASA-certified pilots. Get a quote.',
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.svg',
  },
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
    <html lang="en" className={inter.variable}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied',
              });
            `,
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col font-sans">
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
        <GoogleAnalytics />
      </body>
    </html>
  )
}
