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
  title: 'Drönarinspektion Västerås | Tak & Fasad | SurveyDrone',
  description:
    'Drönarinspektion i Västerås med termisk kamera. Tak, fasader och solceller i Rocklunda, Bäckby, Viksäng och hela Västeråsregionen. Begär offert.',
  path: '/platser/inspektion-vasteras',
})

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'SurveyDrone - Västerås',
  description:
    'Professionell drönarinspektion i Västeråsregionen. Tak, fasader, solceller och industri med termisk kamera. EASA-certifierade fjärrpiloter.',
  url: 'https://www.surveydrone.se/platser/inspektion-vasteras',
  email: 'info@surveydrone.se',
  areaServed: {
    '@type': 'City',
    name: 'Västerås',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 59.6099,
      longitude: 16.5448,
    },
  },
  parentOrganization: {
    '@type': 'ProfessionalService',
    '@id': 'https://www.surveydrone.se/#organization',
  },
}

const faqItems = [
  {
    question: 'Vilka områden i Västerås täcker ni?',
    answer:
      'Vi utför drönarinspektioner i hela Västerås — inklusive Rocklunda, Bäckby, Viksäng och centrala Västerås. Vi täcker även Mälardalens omgivande kommuner.',
  },
  {
    question: 'Inspekterar ni energi- och industrianläggningar i Västerås?',
    answer:
      'Ja, Västerås har en stark tradition inom energi- och kraftindustri. Vi inspekterar industrianläggningar, kraftverk och tillhörande infrastruktur med drönare och termisk kamera.',
  },
  {
    question: 'Kan ni inspektera fastigheter nära Mälaren?',
    answer:
      'Absolut. Vi inspekterar fastigheter i hela Västerås inklusive områdena längs Mälaren. Sjönära fastigheter utsätts ofta för fukt och vi identifierar skador med termisk kamera.',
  },
  {
    question: 'Inspekterar ni bostadsområden som Bäckby och Viksäng?',
    answer:
      'Ja, vi inspekterar flerbostadshus i Bäckby, Viksäng och övriga bostadsområden. Termisk inspektion är särskilt värdefull för att planera renoveringar av miljonprogramsbestånd.',
  },
  {
    question: 'Hur snabbt får vi rapporten efter inspektionen?',
    answer:
      'Vi levererar normalt rapporten med termiska bilder, RGB-foton och åtgärdsförslag inom ett par arbetsdagar efter genomförd inspektion.',
  },
]

export default function VasterasPage() {
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
          { name: 'Västerås', url: '/platser/inspektion-vasteras' },
        ]}
      />

      <Hero
        headline="Drönarinspektion Västerås — Energi, Industri & Mälardalen"
        subheadline="Västerås är en industristad vid Mälarens strand med starkt fokus på energi och teknik. SurveyDrone inspekterar tak, fasader och anläggningar med termisk kamera i Rocklunda, Bäckby, Viksäng och hela Västeråsregionen."
        ctaPrimary={{ label: 'Begär offert — Västerås', href: '/kontakt' }}
        ctaSecondary={{ label: 'Våra tjänster', href: '/tjanster/takinspektion' }}
      />

      <TrustBar
        items={[
          'EASA-certifierade fjärrpiloter',
          'Ansvarsförsäkrade',
          'Hela Västeråsregionen',
          'Termisk kamera & RGB',
        ]}
      />

      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-heading-lg sm:text-display">
              Drönarinspektion för Västerås industri- och bostadsfastigheter
            </h2>
            <div className="mt-6 space-y-4 text-body-lg text-dark-600">
              <p>
                Västerås har en djupt rotad industriell tradition med framstående energi- och teknikföretag.
                Stadens industriområden rymmer produktionsanläggningar, kraftinfrastruktur och
                logistikfastigheter där drönarinspektion erbjuder en effektiv metod för att övervaka
                skick och identifiera underhållsbehov utan driftstopp.
              </p>
              <p>
                Närheten till Mälaren påverkar stadens fastigheter — fukt är en återkommande utmaning
                för byggnader i sjönära lägen. I bostadsområden som Bäckby och Viksäng finns
                miljonprogramsbyggnader där tak och fasader ofta behöver renoveras. Rocklundaområdet
                har en mix av idrottsanläggningar och bostäder. Centrala Västerås blandning av äldre
                och nyare bebyggelse drar nytta av termisk inspektion för att prioritera underhåll.
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
                {' '}i hela Västeråsregionen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Fördelar med drönarinspektion i Västerås"
        subtitle="Anpassat för Västerås energisektor och varierande fastighetsbestånd."
        benefits={[
          {
            title: 'Energi- och industrianläggningar',
            description:
              'Västerås industrianläggningar och energiinfrastruktur inspekteras med drönare utan driftstopp eller riskfyllt höjdarbete.',
            icon: 'building',
          },
          {
            title: 'Fuktdetektering vid Mälaren',
            description:
              'Sjönära fastigheter utsätts för fukt. Termisk kamera identifierar fuktskador och köldbryggor tidigt.',
            icon: 'camera',
          },
          {
            title: 'Miljonprogramsrenovering',
            description:
              'Bäckby och Viksäng har flerbostadshus som behöver renoveras. Termisk inspektion ger beslutsunderlag för prioritering.',
            icon: 'clock',
          },
          {
            title: 'Säker arbetsmiljö',
            description:
              'Ingen personal på höjd. Särskilt värdefullt vid inspektion av höga industribyggnader och skorstenar.',
            icon: 'shield',
          },
          {
            title: 'Rapport med åtgärdsförslag',
            description:
              'Detaljerad rapport med termiska bilder, RGB-foton och prioriterade åtgärdsrekommendationer.',
            icon: 'file',
          },
          {
            title: 'Mälardalsregionen',
            description:
              'Vi täcker hela Mälardalen och kan kombinera uppdrag i Västerås med närliggande kommuner.',
            icon: 'chart',
          },
        ]}
        variant="dark"
      />

      <FaqAccordion
        headline="Vanliga frågor — Drönarinspektion Västerås"
        items={faqItems}
      />

      <CtaBand
        headline="Behöver ni drönarinspektion i Västerås?"
        description="Kontakta oss för en kostnadsfri offert. Vi inspekterar tak, fasader, solceller och industrianläggningar i hela Västeråsregionen."
        ctaLabel="Begär offert"
        ctaHref="/kontakt"
      />
    </>
  )
}
