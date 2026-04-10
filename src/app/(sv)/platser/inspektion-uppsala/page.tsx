import type { Metadata } from 'next'
import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { faqSchema, localBusinessSchemaSv } from '@/lib/schema'
import { Hero } from '@/components/Hero'
import { TrustBar } from '@/components/TrustBar'
import { BenefitsGrid } from '@/components/BenefitsGrid'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = createMetadata({
  title: 'Drönarinspektion Uppsala | Tak & Fasad | SurveyDrone',
  description:
    'Drönarinspektion i Uppsala med termisk kamera. Tak, fasader och solceller i Fyrislund, Boländerna, Sala backe och hela Uppsalaregionen. Begär offert.',
  path: '/platser/inspektion-uppsala',
})

const localBusinessSchema = localBusinessSchemaSv({
  name: 'SurveyDrone - Uppsala',
  description:
    'Professionell drönarinspektion i Uppsalaregionen. Tak, fasader, solceller och industri med termisk kamera. EASA-certifierade fjärrpiloter.',
  url: '/platser/inspektion-uppsala',
  city: 'Uppsala',
  latitude: 59.8586,
  longitude: 17.6389,
})

const faqItems = [
  {
    question: 'Vilka områden i Uppsala täcker ni?',
    answer:
      'Vi utför drönarinspektioner i hela Uppsala — inklusive Fyrislund, Boländerna, Sala backe, Sunnersta och centrala Uppsala. Vi täcker även kranskommuner i Uppsalaregionen.',
  },
  {
    question: 'Kan ni inspektera universitetsfastigheter och institutionsbyggnader?',
    answer:
      'Ja, vi inspekterar alla typer av offentliga och kommersiella fastigheter. Uppsala har ett stort bestånd av institutionsbyggnader och offentliga fastigheter som drar nytta av regelbunden drönarinspektion.',
  },
  {
    question: 'Inspekterar ni industrifastigheter i Boländerna?',
    answer:
      'Absolut. Boländernas handels- och industriområde har stora tak och kommersiella fastigheter som effektivt inspekteras med drönare och termisk kamera.',
  },
  {
    question: 'Kan ni inspektera bostadsområden som Sala backe och Sunnersta?',
    answer:
      'Ja, vi inspekterar flerbostadshus och villaområden i hela Uppsala. Sala backes flerbostadshus från miljonprogrammet och Sunnerstas villabestånd drar båda nytta av termisk inspektion.',
  },
  {
    question: 'Hur bokar jag en drönarinspektion i Uppsala?',
    answer:
      'Kontakta oss via formuläret på kontaktsidan eller skicka e-post till info@surveydrone.se. Vi återkommer med offert och tidsförslag.',
  },
]

export default function UppsalaPage() {
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
          { name: 'Uppsala', url: '/platser/inspektion-uppsala' },
        ]}
      />

      <Hero
        headline="Drönarinspektion Uppsala — Akademi, Bostäder & Industri"
        subheadline="Uppsala är en av Sveriges snabbast växande städer med en blandning av historiska universitetsfastigheter, expanderande bostadsområden och det aktiva industriområdet Boländerna. SurveyDrone inspekterar tak, fasader och solceller med termisk kamera i hela Uppsalaregionen."
        ctaPrimary={{ label: 'Begär offert — Uppsala', href: '/kontakt' }}
        ctaSecondary={{ label: 'Våra tjänster', href: '/tjanster/takinspektion' }}
      />

      <TrustBar
        items={[
          'EASA-certifierade fjärrpiloter',
          'Ansvarsförsäkrade',
          'Hela Uppsalaregionen',
          'Termisk kamera & RGB',
        ]}
      />

      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-heading-lg sm:text-display">
              Drönarinspektion för Uppsalas växande fastighetsbestånd
            </h2>
            <div className="mt-6 space-y-4 text-body-lg text-dark-600">
              <p>
                Uppsala kombinerar riksintresseområden med kulturhistoriska byggnader och moderna stadsdelar
                under snabb expansion. I Fyrislund och Boländerna finns handels- och industrifastigheter med
                stora tak som kräver regelbunden inspektion. Centrala Uppsala har äldre bostadshus och
                institutionsbyggnader där termisk inspektion avslöjar dolda problem.
              </p>
              <p>
                Sala backe representerar Uppsalas miljonprogramsbestånd — flerbostadshus från 1960- och
                70-talen där tak och fasader ofta behöver renoveras. I Sunnersta finns villabebyggelse
                där husägare drar nytta av termisk takinspektering för att hitta köldbryggor.
                Uppsalas tillväxt innebär också nybyggnation där{' '}
                <Link href="/tjanster/3d-kartlaggning" className="link-inline">
                  byggplatsdokumentation
                </Link>
                {' '}med drönare ger effektiv uppföljning av projekt.
              </p>
              <p>
                Vi erbjuder{' '}
                <Link href="/tjanster/takinspektion" className="link-inline">
                  takinspektion
                </Link>
                ,{' '}
                <Link href="/tjanster/fasadinspektion" className="link-inline">
                  fasadinspektion
                </Link>
                {' '}och{' '}
                <Link href="/tjanster/solcellsinspektion" className="link-inline">
                  solcellsinspektion
                </Link>
                {' '}i hela Uppsalaregionen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Fördelar med drönarinspektion i Uppsala"
        subtitle="Anpassat för Uppsalas mix av historiska och moderna fastigheter."
        benefits={[
          {
            title: 'Industriområden effektivt',
            description:
              'Boländernas och Fyrislunds stora handels- och industrifastigheter inspekteras snabbt med drönare — inga ställningar behövs.',
            icon: 'building',
          },
          {
            title: 'Termisk analys av äldre bestånd',
            description:
              'Uppsalas äldre fastigheter och miljonprogramshus i Sala backe drar nytta av termisk kamera som avslöjar fukt och köldbryggor.',
            icon: 'camera',
          },
          {
            title: 'Snabb tillgänglighet',
            description:
              'Vi finns tillgängliga för uppdrag i Uppsalaregionen och kan ofta genomföra inspektioner med kort framförhållning.',
            icon: 'clock',
          },
          {
            title: 'Säker inspektion',
            description:
              'Inga byggnadsställningar eller arbete på höjd. Bättre arbetsmiljö och minskad risk.',
            icon: 'shield',
          },
          {
            title: 'Detaljerade rapporter',
            description:
              'Komplett dokumentation med termiska bilder, RGB-foton och åtgärdsförslag som beslutsunderlag.',
            icon: 'file',
          },
          {
            title: 'Stöd för nybyggnation',
            description:
              'Byggplatsdokumentation med drönare ger överblick och uppföljning av Uppsalas många nybyggnadsprojekt.',
            icon: 'chart',
          },
        ]}
        variant="dark"
      />

      <FaqAccordion
        headline="Vanliga frågor — Drönarinspektion Uppsala"
        items={faqItems}
      />

      <CtaBand
        headline="Behöver ni drönarinspektion i Uppsala?"
        description="Kontakta oss för en kostnadsfri offert. Vi inspekterar tak, fasader och solceller i hela Uppsalaregionen."
        ctaLabel="Begär offert"
        ctaHref="/kontakt"
      />
    </>
  )
}
