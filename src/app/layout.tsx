import type { Metadata } from 'next'
import '@/styles/globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CookieBanner } from '@/components/CookieBanner'
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
    languages: {
      'sv': BASE_URL,
      'sv-SE': BASE_URL,
    },
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="alternate" hrefLang="sv" href={BASE_URL} />
        <link rel="alternate" hrefLang="sv-SE" href={BASE_URL} />
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
        <CookieBanner />
      </body>
    </html>
  )
}
