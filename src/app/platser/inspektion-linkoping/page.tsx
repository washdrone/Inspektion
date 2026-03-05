import type { Metadata } from 'next'
import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { faqSchema } from '@/lib/schema'
import { Hero } from '@/components/Hero'
import { TrustBar } from '@/components/TrustBar'
import { BenefitsGrid } from '@/components/BenefitsGrid'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = createMetadata({
  title: 'Drönarinspektion Linköping | Tak & Fasad | SurveyDrone',
  description:
    'Drönarinspektion i Linköping med termisk kamera. Tak, fasader och solceller i Mjärdevi, Tornby, Ryd och Norrköping. EASA-certifierade piloter.',
  path: '/platser/inspektion-linkoping',
})

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'SurveyDrone - Linköping',
  description:
    'Professionell drönarinspektion i Linköping och Norrköping. Tak, fasader, solceller och industri med termisk kamera. EASA-certifierade fjärrpiloter.',
  url: 'https://surveydrone.se/platser/inspektion-linkoping',
  email: 'info@surveydrone.se',
  areaServed: {
    '@type': 'City',
    name: 'Linköping',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 58.4108,
      longitude: 15.6214,
    },
  },
  parentOrganization: {
    '@type': 'ProfessionalService',
    '@id': 'https://surveydrone.se/#organization',
  },
}

const faqItems = [
  {
    question: 'Täcker ni både Linköping och Norrköping?',
    answer:
      'Ja, vi utför drönarinspektioner i hela Östergötland — inklusive Linköping, Norrköping och omkringliggande kommuner. De två städerna ligger nära varandra och vi kan ofta kombinera uppdrag.',
  },
  {
    question: 'Kan ni inspektera teknikfastigheter i Mjärdevi Science Park?',
    answer:
      'Ja, vi inspekterar kontors- och teknikfastigheter i Mjärdevi och andra företagsparker. Termisk inspektion identifierar energiförluster och underhållsbehov i moderna kontorsbyggnader.',
  },
  {
    question: 'Inspekterar ni bostadsområden som Ryd?',
    answer:
      'Absolut. Ryds studentbostäder och flerbostadshus inspekteras effektivt med drönare. Termisk kamera avslöjar köldbryggor och fuktproblem i byggnader från olika epoker.',
  },
  {
    question: 'Kan ni utföra industriell inspektion i Östergötland?',
    answer:
      'Ja, regionen har ett starkt industrikluster och vi inspekterar produktionsanläggningar, lagerfastigheter och infrastruktur med drönare och termisk kamera.',
  },
  {
    question: 'Vad ingår i en drönarinspektion i Linköping?',
    answer:
      'Vi flyger med termisk kamera och RGB-kamera, dokumenterar hela objektet systematiskt och levererar en detaljerad rapport med bilder och åtgärdsförslag.',
  },
]

export default function LinkopingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqItems)) }}
      />

      <Breadcrumbs
        items={[
          { name: 'Hem', url: '/' },
          { name: 'Linköping', url: '/platser/inspektion-linkoping' },
        ]}
      />

      <Hero
        headline="Drönarinspektion Linköping — Teknik, Bostäder & Industri"
        subheadline="Linköping är ett nav för högteknologi med Mjärdevi Science Park och ett aktivt industrikluster. SurveyDrone inspekterar tak, fasader och solceller med termisk kamera i Linköping, Tornby, Ryd och hela Östergötland — inklusive Norrköping."
        ctaPrimary={{ label: 'Begär offert — Linköping', href: '/kontakt' }}
        ctaSecondary={{ label: 'Våra tjänster', href: '/inspektioner-med-dronare' }}
      />

      <TrustBar
        items={[
          'EASA-certifierade fjärrpiloter',
          'Ansvarsförsäkrade',
          'Linköping & Norrköping',
          'Termisk kamera & RGB',
        ]}
      />

      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-heading-lg sm:text-display">
              Drönarinspektion för Linköpings teknik- och bostadsfastigheter
            </h2>
            <div className="mt-6 space-y-4 text-body-lg text-dark-600">
              <p>
                Linköping präglas av sin roll som teknik- och kunskapsstad. Mjärdevi Science Park samlar
                hundratals teknikföretag i moderna kontorsfastigheter där energieffektivitet och underhåll
                är avgörande. Tornby handelsområde har stora kommersiella fastigheter med platta tak som
                kräver regelbunden inspektion.
              </p>
              <p>
                Bostadsområden som Ryd har flerbostadshus från olika epoker där termisk inspektion
                identifierar köldbryggor och fukt. Linköpings centrala delar har äldre bebyggelse
                med tegelfasader som drar nytta av icke-destruktiv drönarinspektion. Närheten till
                Norrköping gör att vi ofta täcker båda städerna vid samma tillfälle.
              </p>
              <p>
                Vi erbjuder{' '}
                <Link href="/inspektioner-med-dronare/takinspektion" className="text-brand-600 underline hover:text-brand-700">
                  takinspektion
                </Link>
                ,{' '}
                <Link href="/inspektioner-med-dronare/fasadinspektion" className="text-brand-600 underline hover:text-brand-700">
                  fasadinspektion
                </Link>
                ,{' '}
                <Link href="/inspektioner-med-dronare/solcellsinspektion" className="text-brand-600 underline hover:text-brand-700">
                  solcellsinspektion
                </Link>
                {' '}och{' '}
                <Link href="/inspektioner-med-dronare/industriell-inspektion" className="text-brand-600 underline hover:text-brand-700">
                  industriell inspektion
                </Link>
                {' '}i hela Östergötland.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Fördelar med drönarinspektion i Linköping"
        subtitle="Anpassat för Östergötlands teknik- och industrilandskap."
        benefits={[
          {
            title: 'Kontorsfastigheter i Mjärdevi',
            description:
              'Moderna teknikfastigheter i Mjärdevi Science Park inspekteras med termisk kamera för att hitta energiförluster och underhållsbehov.',
            icon: 'building',
          },
          {
            title: 'Handelsfastigheter i Tornby',
            description:
              'Stora kommersiella tak i Tornby handelsområde inspekteras effektivt med drönare — utan att störa verksamheten.',
            icon: 'camera',
          },
          {
            title: 'Två städer på en resa',
            description:
              'Linköping och Norrköping ligger nära varandra. Vi kan ofta kombinera uppdrag i båda städerna för ökad effektivitet.',
            icon: 'clock',
          },
          {
            title: 'Säker inspektion',
            description:
              'Ingen personal behöver arbeta på höjd. EASA-certifierade piloter utför flygningen säkert och professionellt.',
            icon: 'shield',
          },
          {
            title: 'Komplett rapport',
            description:
              'Termiska bilder, RGB-dokumentation och åtgärdsförslag levereras i en tydlig rapport.',
            icon: 'file',
          },
          {
            title: 'Industriell kapacitet',
            description:
              'Vi inspekterar produktionsanläggningar och infrastruktur i Östergötlands industrikluster med drönarteknik.',
            icon: 'chart',
          },
        ]}
        variant="dark"
      />

      <FaqAccordion
        headline="Vanliga frågor — Drönarinspektion Linköping"
        items={faqItems}
      />

      <CtaBand
        headline="Behöver ni drönarinspektion i Linköping?"
        description="Kontakta oss för en kostnadsfri offert. Vi inspekterar tak, fasader och solceller i Linköping, Norrköping och hela Östergötland."
        ctaLabel="Begär offert"
        ctaHref="/kontakt"
      />
    </>
  )
}
