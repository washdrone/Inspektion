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
  title: 'Drönarinspektion Göteborg | Tak & Fasad | SurveyDrone',
  description:
    'Drönarinspektion i Göteborg med termisk kamera. Tak, fasader och solceller på Hisingen, Lindholmen, Majorna och i hela Göteborgsregionen. Begär offert.',
  path: '/platser/inspektion-goteborg',
})

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'SurveyDrone - Göteborg',
  description:
    'Professionell drönarinspektion i Göteborgsregionen. Tak, fasader, solceller och industri med termisk kamera. EASA-certifierade fjärrpiloter.',
  url: 'https://surveydrone.se/platser/inspektion-goteborg',
  email: 'info@surveydrone.se',
  areaServed: {
    '@type': 'City',
    name: 'Göteborg',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 57.7089,
      longitude: 11.9746,
    },
  },
  parentOrganization: {
    '@type': 'ProfessionalService',
    '@id': 'https://surveydrone.se/#organization',
  },
}

const faqItems = [
  {
    question: 'Vilka områden i Göteborg täcker ni?',
    answer:
      'Vi utför drönarinspektioner i hela Göteborgsregionen — inklusive Hisingen, Lindholmen, Majorna, Askim, Mölndal och Kungälv. Vi täcker både centrala Göteborg och kranskommunerna.',
  },
  {
    question: 'Kan ni inspektera hamn- och industrianläggningar i Göteborg?',
    answer:
      'Ja, Göteborgs hamn- och industriområden är en viktig del av vår verksamhet. Vi inspekterar lagerfastigheter, produktionsanläggningar och hamninfrastruktur med drönare och termisk kamera.',
  },
  {
    question: 'Hur hanterar ni vindförhållandena vid Göteborgs kust?',
    answer:
      'Göteborgs kustnära läge innebär att vindförhållandena kan variera. Vi övervakar väderförhållandena noggrant och planerar flygningarna för optimala förutsättningar. Vid behov bokar vi om till lämplig dag.',
  },
  {
    question: 'Inspekterar ni BRF-fastigheter i centrala Göteborg?',
    answer:
      'Absolut. Vi inspekterar flerbostadshus, BRF-fastigheter och bostadsrättsföreningar i stadsdelar som Majorna, Linnéstaden, Haga och Johanneberg. Termisk inspektion är särskilt värdefullt för äldre tegelfastigheter.',
  },
  {
    question: 'Kan ni utföra solcellsinspektioner i Göteborgsområdet?',
    answer:
      'Ja, vi inspekterar solcellsanläggningar på kommersiella fastigheter och bostadshus i hela Göteborgsregionen. Med termisk kamera identifierar vi hotspots och defekta paneler.',
  },
]

export default function GoteborgPage() {
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
          { name: 'Göteborg', url: '/platser/inspektion-goteborg' },
        ]}
      />

      <Hero
        headline="Drönarinspektion Göteborg — Hamn, Industri & Fastigheter"
        subheadline="Göteborg är Sveriges industriella hjärta med Nordens största hamn, omfattande industriområden på Hisingen och ett varierat fastighetsbestånd från Majorna till Mölndal. SurveyDrone inspekterar tak, fasader och anläggningar med termisk kamera i hela Göteborgsregionen."
        ctaPrimary={{ label: 'Begär offert — Göteborg', href: '/kontakt' }}
        ctaSecondary={{ label: 'Våra tjänster', href: '/inspektioner-med-dronare' }}
      />

      <TrustBar
        items={[
          'EASA-certifierade fjärrpiloter',
          'Ansvarsförsäkrade',
          'Hela Göteborgsregionen',
          'Termisk kamera & RGB',
        ]}
      />

      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-heading-lg sm:text-display">
              Inspektioner anpassade för Göteborgs unika bebyggelse
            </h2>
            <div className="mt-6 space-y-4 text-body-lg text-dark-600">
              <p>
                Göteborgs fastighetsbestånd präglas av stadens industriella historia och kustnära läge.
                På Hisingen finns stora industri- och logistikfastigheter som kräver regelbunden inspektion
                av tak och fasader. Lindholmen har utvecklats till ett modernt teknikkluster med kontorsbyggnader
                där energieffektivitet och underhåll är centralt.
              </p>
              <p>
                I äldre stadsdelar som Majorna, Haga och Linnéstaden finns kulturhistoriska tegelfastigheter
                där termisk inspektion avslöjar fuktskador och köldbryggor utan att skada byggnaden.
                I Askim, Mölndal och Kungälv finns blandad bebyggelse med villor, flerbostadshus
                och kommersiella fastigheter som alla gynnas av drönarteknik.
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
                {' '}i hela Göteborgsregionen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Fördelar med drönarinspektion i Göteborg"
        subtitle="Anpassat för Göteborgsregionens industri- och fastighetsbestånd."
        benefits={[
          {
            title: 'Industriell inspektion',
            description:
              'Göteborgs hamn- och industriområden på Hisingen kräver regelbunden inspektion av svåråtkomliga konstruktioner. Drönare når dit ställningar inte kan.',
            icon: 'building',
          },
          {
            title: 'Termisk analys av tegelfasader',
            description:
              'Majornas och Linnéstadens äldre tegelfastigheter drar nytta av termisk kamera för att identifiera fukt och köldbryggor utan ingrepp.',
            icon: 'camera',
          },
          {
            title: 'Väderanpassad planering',
            description:
              'Vi planerar flygningarna utifrån Göteborgs kustklimat och säkerställer optimala förhållanden för inspektion.',
            icon: 'clock',
          },
          {
            title: 'Säkerhet i hamn och industri',
            description:
              'Drönarinspektion eliminerar behovet av arbete på höjd i industriella miljöer — säkrare för personal och drifteffektivare.',
            icon: 'shield',
          },
          {
            title: 'Komplett dokumentation',
            description:
              'Detaljerad rapport med termiska bilder, RGB-foton och åtgärdsförslag. Används som underlag för underhållsplanering.',
            icon: 'file',
          },
          {
            title: 'Kostnadseffektivt',
            description:
              'Ersätt byggnadsställningar och skylift med drönarteknik — lägre totalkostnad och snabbare genomförande.',
            icon: 'chart',
          },
        ]}
        variant="dark"
      />

      <FaqAccordion
        headline="Vanliga frågor — Drönarinspektion Göteborg"
        items={faqItems}
      />

      <CtaBand
        headline="Behöver ni drönarinspektion i Göteborg?"
        description="Kontakta oss för en kostnadsfri offert. Vi inspekterar tak, fasader, solceller och industrianläggningar i hela Göteborgsregionen."
        ctaLabel="Begär offert"
        ctaHref="/kontakt"
      />
    </>
  )
}
