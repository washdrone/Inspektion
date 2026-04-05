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
  title: 'Drönarinspektion Luleå | Tak & Fasad | SurveyDrone',
  description:
    'Drönarinspektion i Luleå med termisk kamera. Tak, fasader och solceller i Centrum, Bergnäset, Porsön och Gammelstad. EASA-certifierade piloter.',
  path: '/platser/inspektion-lulea',
})

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'SurveyDrone - Luleå',
  description:
    'Professionell drönarinspektion i Luleå och Norrbotten. Tak, fasader, solceller och industri med termisk kamera. EASA-certifierade fjärrpiloter.',
  url: 'https://www.surveydrone.se/platser/inspektion-lulea',
  email: 'info@surveydrone.se',
  areaServed: {
    '@type': 'City',
    name: 'Luleå',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 65.5848,
      longitude: 22.1547,
    },
  },
  parentOrganization: {
    '@type': 'ProfessionalService',
    '@id': 'https://www.surveydrone.se/#organization',
  },
}

const faqItems = [
  {
    question: 'Utför ni drönarinspektioner i Luleå och Norrbotten?',
    answer:
      'Ja, vi utför drönarinspektioner i Luleå och hela Norrbotten. Vi är verksamma i hela Sverige och har kapacitet att genomföra uppdrag i norra regionen.',
  },
  {
    question: 'Hur fungerar termisk inspektion i Luleås arktiska klimat?',
    answer:
      'Det kalla klimatet i Luleå är en fördel för termisk inspektion. Stora temperaturskillnader mellan inne och ute gör att köldbryggor och värmeläckage syns tydligare med termisk kamera under vinterhalvåret.',
  },
  {
    question: 'Kan ni inspektera industrifastigheter i Luleå?',
    answer:
      'Ja, vi inspekterar alla typer av industri- och kommersiella fastigheter. Luleå har en stark industrisektor och drönarinspektion ger effektiv överblick av stora industriområden.',
  },
  {
    question: 'Inspekterar ni i Gammelstad och äldre bebyggelse?',
    answer:
      'Absolut. Äldre byggnader kräver regelbunden tillsyn och drönarinspektion med termisk kamera identifierar köldbryggor, fukt och underhållsbehov utan att skada kulturhistoriska värden.',
  },
  {
    question: 'Vilka tjänster erbjuder ni i Luleå?',
    answer:
      'Vi erbjuder takinspektion, fasadinspektion, solcellsinspektion och industriell inspektion med termisk kamera och RGB. Kontakta oss för att diskutera ert specifika behov.',
  },
]

export default function LuleaPage() {
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
          { name: 'Luleå', url: '/platser/inspektion-lulea' },
        ]}
      />

      <Hero
        headline="Drönarinspektion Luleå — Arktiskt Klimat, Precisa Inspektioner"
        subheadline="Luleås långa vintrar och extrema köld ställer höga krav på byggnaders isolering och täthet. SurveyDrone inspekterar tak, fasader och solceller med termisk kamera i Centrum, Bergnäset, Porsön, Gammelstad och hela Luleåregionen — där det arktiska klimatet gör termisk inspektion extra effektiv."
        ctaPrimary={{ label: 'Begär offert — Luleå', href: '/kontakt' }}
        ctaSecondary={{ label: 'Våra tjänster', href: '/tjanster/takinspektion' }}
      />

      <TrustBar
        items={[
          'EASA-certifierade fjärrpiloter',
          'Ansvarsförsäkrade',
          'Luleå & Norrbotten',
          'Termisk kamera & RGB',
        ]}
      />

      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-heading-lg sm:text-display">
              Termisk drönarinspektion i Luleås arktiska klimat
            </h2>
            <div className="mt-6 space-y-4 text-body-lg text-dark-600">
              <p>
                Luleå ligger vid Bottenvikens kust i Norrbotten, där vintrar med temperaturer långt
                under noll ställer extrema krav på byggnaders isolering, tak och fasader. Termisk
                drönarinspektion är extra värdefullt här — stora temperaturskillnader mellan inne och
                ute gör att köldbryggor, värmeläckage och fuktproblem syns tydligt med termisk kamera.
              </p>
              <p>
                I Centrum finns kommersiella fastigheter och flerbostadshus som kräver regelbundet
                underhåll. Bergnäset söder om Luleälven har villabebyggelse och äldre fastigheter.
                Porsön rymmer universitetets campusbyggnader. Gammelstad, med sin UNESCO-listade
                kyrkstad, har äldre bebyggelse som behöver skonsam men noggrann inspektion.
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
                ,{' '}
                <Link href="/tjanster/solcellsinspektion" className="link-inline">
                  solcellsinspektion
                </Link>
                {' '}och{' '}
                <Link href="/tjanster/industriinspektion" className="link-inline">
                  industriell inspektion
                </Link>
                {' '}i Luleå och hela Norrbotten.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Fördelar med drönarinspektion i Luleå"
        subtitle="Anpassat för Norrbottens arktiska klimat och fastighetsbestånd."
        benefits={[
          {
            title: 'Arktisk termisk inspektion',
            description:
              'Luleås extrema köld förstärker temperaturskillnaderna och gör termisk kamera extra effektiv för att hitta köldbryggor och värmeläckage.',
            icon: 'camera',
          },
          {
            title: 'Industriinspektion',
            description:
              'Luleå har en stark industrisektor. Drönarinspektion av industritak, fasader och anläggningar genomförs säkert och effektivt.',
            icon: 'building',
          },
          {
            title: 'Kulturhistorisk bebyggelse',
            description:
              'Gammelstads äldre byggnader inspekteras skonsamt med drönare. Inga ställningar eller fysisk kontakt krävs.',
            icon: 'chart',
          },
          {
            title: 'Säkert i extremt klimat',
            description:
              'Ingen personal behöver arbeta på höjd under krävande vinterförhållanden. Drönaren klarar uppdraget.',
            icon: 'shield',
          },
          {
            title: 'Snölastrelaterade skador',
            description:
              'Tunga snölaster kan orsaka skador på tak. Drönarinspektion efter vintersäsongen avslöjar deformationer och skador.',
            icon: 'clock',
          },
          {
            title: 'Detaljerad rapport',
            description:
              'Komplett dokumentation med termiska bilder, RGB-foton och åtgärdsförslag som underlag för underhåll.',
            icon: 'file',
          },
        ]}
        variant="dark"
      />

      <FaqAccordion
        headline="Vanliga frågor — Drönarinspektion Luleå"
        items={faqItems}
      />

      <CtaBand
        headline="Behöver ni drönarinspektion i Luleå?"
        description="Kontakta oss för en kostnadsfri offert. Vi inspekterar tak, fasader och solceller i Luleå och hela Norrbotten."
        ctaLabel="Begär offert"
        ctaHref="/kontakt"
      />
    </>
  )
}
