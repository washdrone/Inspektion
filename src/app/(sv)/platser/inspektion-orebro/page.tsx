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
  title: 'Drönarinspektion Örebro | Tak & Fasad | SurveyDrone',
  description:
    'Drönarinspektion i Örebro med termisk kamera. Tak, fasader och solceller i Brickebacken, Marieberg, Baronbackarna och hela Örebroregionen.',
  path: '/platser/inspektion-orebro',
})

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'SurveyDrone - Örebro',
  description:
    'Professionell drönarinspektion i Örebroregionen. Tak, fasader, solceller och industri med termisk kamera. EASA-certifierade fjärrpiloter.',
  url: 'https://www.surveydrone.se/platser/inspektion-orebro',
  email: 'info@surveydrone.se',
  areaServed: {
    '@type': 'City',
    name: 'Örebro',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 59.2753,
      longitude: 15.2134,
    },
  },
  parentOrganization: {
    '@type': 'ProfessionalService',
    '@id': 'https://www.surveydrone.se/#organization',
  },
}

const faqItems = [
  {
    question: 'Vilka stadsdelar i Örebro täcker ni?',
    answer:
      'Vi utför drönarinspektioner i hela Örebro — inklusive Brickebacken, Marieberg, Baronbackarna och centrala Örebro. Vi täcker även kranskommuner i Örebroregionen.',
  },
  {
    question: 'Inspekterar ni miljonprogramsbyggnader i Brickebacken?',
    answer:
      'Ja, Brickebackens flerbostadshus från miljonprogrammet är fastigheter som särskilt drar nytta av termisk inspektion. Vi identifierar köldbryggor, fuktskador och underhållsbehov i tak och fasader.',
  },
  {
    question: 'Kan ni inspektera handelsområdet Marieberg?',
    answer:
      'Absolut. Mariebergs handelsområde har stora kommersiella fastigheter med platta tak som effektivt inspekteras med drönare och termisk kamera.',
  },
  {
    question: 'Erbjuder ni drönarinspektion av logistikfastigheter?',
    answer:
      'Ja, Örebros centrala läge i Sverige gör staden till ett logistiknav. Vi inspekterar lagerfastigheter och logistikcentra med drönare — stora tak täcks snabbt och utan driftstopp.',
  },
  {
    question: 'Hur kontaktar jag SurveyDrone för ett uppdrag i Örebro?',
    answer:
      'Kontakta oss via kontaktformuläret eller skicka e-post till info@surveydrone.se. Vi återkommer med offert anpassad efter ert behov.',
  },
]

export default function OrebroPage() {
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
          { name: 'Örebro', url: '/platser/inspektion-orebro' },
        ]}
      />

      <Hero
        headline="Drönarinspektion Örebro — Logistik, Bostäder & Handel"
        subheadline="Örebro är Sveriges logistiska knutpunkt med stora lagerfastigheter, aktiva handelsområden i Marieberg och ett bostadsbestånd som sträcker sig från Brickebacken till Baronbackarna. SurveyDrone inspekterar tak, fasader och solceller med termisk kamera i hela Örebroregionen."
        ctaPrimary={{ label: 'Begär offert — Örebro', href: '/kontakt' }}
        ctaSecondary={{ label: 'Våra tjänster', href: '/tjanster/takinspektion' }}
      />

      <TrustBar
        items={[
          'EASA-certifierade fjärrpiloter',
          'Ansvarsförsäkrade',
          'Hela Örebroregionen',
          'Termisk kamera & RGB',
        ]}
      />

      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-heading-lg sm:text-display">
              Drönarinspektion för Örebros logistik- och bostadsfastigheter
            </h2>
            <div className="mt-6 space-y-4 text-body-lg text-dark-600">
              <p>
                Örebros centrala läge i Sverige har gjort staden till ett nav för logistik och distribution.
                Stora lagerfastigheter och logistikcentra präglar stadens industriområden. Dessa byggnader
                har ofta omfattande takytor som behöver regelbunden inspektion — ett uppdrag som passar
                perfekt för drönarteknik.
              </p>
              <p>
                Mariebergs handelsområde samlar butiker och kommersiella fastigheter med platta tak där
                drönarinspektion ersätter tidskrävande manuella metoder. I bostadsområden som
                Brickebacken och Baronbackarna finns flerbostadshus från miljonprogrammet där termisk
                kamera avslöjar köldbryggor och fuktproblem som kräver åtgärd. Centrala Örebro har
                äldre byggnader där fasadinspektioner med drönare undviker behovet av ställningar.
              </p>
              <p>
                Vi erbjuder{' '}
                <Link href="/tjanster/takinspektion" className="text-brand-600 underline hover:text-brand-700">
                  takinspektion
                </Link>
                ,{' '}
                <Link href="/tjanster/fasadinspektion" className="text-brand-600 underline hover:text-brand-700">
                  fasadinspektion
                </Link>
                ,{' '}
                <Link href="/tjanster/solcellsinspektion" className="text-brand-600 underline hover:text-brand-700">
                  solcellsinspektion
                </Link>
                {' '}och{' '}
                <Link href="/tjanster/industriinspektion" className="text-brand-600 underline hover:text-brand-700">
                  industriell inspektion
                </Link>
                {' '}i hela Örebroregionen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Fördelar med drönarinspektion i Örebro"
        subtitle="Anpassat för Örebros logistik- och bostadsfastigheter."
        benefits={[
          {
            title: 'Stora takytor effektivt',
            description:
              'Örebros lagerfastigheter och logistikcentra har omfattande tak. Drönare inspekterar dem snabbt utan att störa logistikverksamheten.',
            icon: 'building',
          },
          {
            title: 'Miljonprogrammets fastigheter',
            description:
              'Brickebackens och Baronbackarnas flerbostadshus inspekteras med termisk kamera för att identifiera renoveringsbehov.',
            icon: 'camera',
          },
          {
            title: 'Snabbt genomförande',
            description:
              'En inspektion som tidigare tog dagar med ställningar genomförs på timmar med drönare.',
            icon: 'clock',
          },
          {
            title: 'Inget höjdarbete',
            description:
              'Personal behöver aldrig arbeta på höjd. EASA-certifierade piloter sköter hela flygningen.',
            icon: 'shield',
          },
          {
            title: 'Underhållsplanering',
            description:
              'Rapporten ger ett tydligt beslutsunderlag för prioritering av underhåll och renoveringar.',
            icon: 'file',
          },
          {
            title: 'Handelsområden',
            description:
              'Mariebergs och andra handelsområdens kommersiella fastigheter inspekteras utan att påverka kundflödet.',
            icon: 'chart',
          },
        ]}
        variant="dark"
      />

      <FaqAccordion
        headline="Vanliga frågor — Drönarinspektion Örebro"
        items={faqItems}
      />

      <CtaBand
        headline="Behöver ni drönarinspektion i Örebro?"
        description="Kontakta oss för en kostnadsfri offert. Vi inspekterar tak, fasader och solceller i hela Örebroregionen."
        ctaLabel="Begär offert"
        ctaHref="/kontakt"
      />
    </>
  )
}
