import type { Metadata } from 'next'
import '@/styles/globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CookieBanner } from '@/components/CookieBanner'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import { SITE_NAME, BASE_URL } from '@/lib/metadata'
import { organizationSchema, websiteSchema } from '@/lib/schema'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `SurveyDrone | Drönare-Inspektion Sverige — Termisk & Visuell`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'SurveyDrone erbjuder professionell drönare-inspektion i hela Sverige. Tak, fasader, solceller & industri med termisk kamera. EASA-certifierade piloter. Begär offert.',
  openGraph: {
    locale: 'sv_SE',
    type: 'website',
    siteName: SITE_NAME,
  },
  alternates: {
    canonical: BASE_URL,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <head>
        {/* Google Consent Mode v2 — must run before any gtag/GA script */}
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
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
      </head>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <GoogleAnalytics />
        <CookieBanner />
      </body>
    </html>
  )
}
