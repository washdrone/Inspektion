import type { Metadata } from 'next'
import '@/styles/globals.css'
import { inter } from '@/lib/fonts'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CookieBanner } from '@/components/CookieBanner'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import { organizationSchema, websiteSchema } from '@/lib/schema'
import { SITE_NAME, BASE_URL } from '@/lib/metadata'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'SurveyDrone | Drönare-Inspektion Sverige — Termisk & Visuell',
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'SurveyDrone erbjuder professionell drönare-inspektion i hela Sverige. Tak, fasader, solceller & industri med RGB- och termisk kamera. EASA-certifierade piloter. Begär offert.',
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.svg',
  },
  openGraph: {
    locale: 'sv_SE',
    type: 'website',
    siteName: SITE_NAME,
  },
}

export default function SwedishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv" className={inter.variable}>
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
            __html: JSON.stringify(organizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema()),
          }}
        />
        <Header locale="sv" />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <CookieBanner />
        <GoogleAnalytics />
      </body>
    </html>
  )
}
