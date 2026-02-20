import type { Metadata } from 'next'
import '@/styles/globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CookieBanner } from '@/components/CookieBanner'
import { SITE_NAME, BASE_URL } from '@/lib/metadata'
import { organizationSchema } from '@/lib/schema'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `Drönarinspektioner för företag | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Professionella drönarinspektioner av tak, fasader, solceller och industri. Snabbare, säkrare och mer kostnadseffektivt än traditionella metoder.',
  openGraph: {
    locale: 'sv_SE',
    type: 'website',
    siteName: SITE_NAME,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
