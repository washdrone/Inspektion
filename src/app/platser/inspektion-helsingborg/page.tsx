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
  title: 'Drönarinspektion Helsingborg | Tak & Fasad | SurveyDrone',
  description:
    'Drönarinspektion i Helsingborg med termisk kamera. Tak, fasader och solceller i Söder, Ramlösa, Berga och Landskrona. EASA-certifierade piloter.',
  path: '/platser/inspektion-helsingborg',
})

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'SurveyDrone - Helsingborg',
  description:
    'Professionell drönarinspektion i Helsingborg och nordvästra Skåne. Tak, fasader, solceller och industri med termisk kamera. EASA-certifierade fjärrpiloter.',
  url: 'https://surveydrone.se/platser/inspektion-helsingborg',
  email: 'info@surveydrone.se',
  areaServed: {
    '@type': 'City',
    name: 'Helsingborg',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 56.0465,
      longitude: 12.6945,
    },
  },
  parentOrganization: {
    '@type': 'ProfessionalService',
    '@id': 'https://surveydrone.se/#organization',
  },
}

const faqItems = [
  {
    question: 'Vilka områden i Helsingborg täcker ni?',
    answer:
      'Vi utför drönarinspektioner i hela Helsingborg — inklusive Söder, Ramlösa, Berga, centrala Helsingborg och hamnområdet. Vi täcker även Landskrona och övriga nordvästra Skåne.',
  },
  {
    question: 'Inspekterar ni hamn- och logistikfastigheter i Helsingborg?',
    answer:
      'Ja, Helsingborgs hamn och logistikområden är viktiga delar av vår verksamhet i regionen. Vi inspekterar lagerfastigheter, terminaler och industribyggnader med drönare och termisk kamera.',
  },
  {
    question: 'Kan ni inspektera äldre fastigheter i centrala Helsingborg?',
    answer:
      'Absolut. Helsingborgs centrum har många äldre byggnader med kulturhistoriskt värde. Drönarinspektion med termisk kamera identifierar underhållsbehov utan ingrepp i byggnaden.',
  },
  {
    question: 'Täcker ni även Landskrona?',
    answer:
      'Ja, vi utför drönarinspektioner i Landskrona och hela nordvästra Skåne. Vi kan kombinera uppdrag i Helsingborg och Landskrona för ökad effektivitet.',
  },
  {
    question: 'Hur hanterar ni det kustnära klimatet?',
    answer:
      'Vi är vana vid att arbeta i kustmiljöer och planerar flygningarna utifrån aktuella väderförhållanden. Vid ogynnsamt väder bokar vi om till en lämpligare tidpunkt.',
  },
]

export default function HelsingborgPage() {
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
          { name: 'Helsingborg', url: '/platser/inspektion-helsingborg' },
        ]}
      />

      <Hero
        headline="Drönarinspektion Helsingborg — Hamn, Handel & Historisk Stad"
        subheadline="Helsingborg är en dynamisk hamnstad i nordvästra Skåne med ett varierat fastighetsbestånd — från historiska byggnader i centrum till moderna logistikfastigheter vid hamnen. SurveyDrone inspekterar tak, fasader och solceller i Söder, Ramlösa, Berga och hela regionen inklusive Landskrona."
        ctaPrimary={{ label: 'Begär offert — Helsingborg', href: '/kontakt' }}
        ctaSecondary={{ label: 'Våra tjänster', href: '/inspektioner-med-dronare' }}
      />

      <TrustBar
        items={[
          'EASA-certifierade fjärrpiloter',
          'Ansvarsförsäkrade',
          'Helsingborg & Landskrona',
          'Termisk kamera & RGB',
        ]}
      />

      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-heading-lg sm:text-display">
              Drönarinspektion för Helsingborgs hamn- och stadsfastigheter
            </h2>
            <div className="mt-6 space-y-4 text-body-lg text-dark-600">
              <p>
                Helsingborg är en av Skånes viktigaste hamnstäder med omfattande logistikverksamhet
                och ett rikt kulturhistoriskt centrum. Hamnområdet och stadens logistikfastigheter
                har stora takytor som kräver regelbunden inspektion. Drönarteknik gör det möjligt
                att inspektera dessa effektivt utan att störa pågående godshantering.
              </p>
              <p>
                I stadsdelar som Söder finns blandad bebyggelse med äldre flerbostadshus och villor.
                Ramlösa och Berga har bostadsområden där termisk inspektion identifierar köldbryggor
                och fuktproblem. Centrala Helsingborg med sina historiska byggnader drar nytta av
                icke-destruktiv drönarinspektion för fasader och tak. Landskrona, som ligger nära,
                har liknande inspektionsbehov och vi täcker båda städerna.
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
                {' '}i Helsingborg, Landskrona och hela nordvästra Skåne.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Fördelar med drönarinspektion i Helsingborg"
        subtitle="Anpassat för Helsingborgs hamn, handel och historiska bebyggelse."
        benefits={[
          {
            title: 'Hamn och logistik',
            description:
              'Helsingborgs hamn- och logistikfastigheter inspekteras med drönare utan att störa godshantering och transporter.',
            icon: 'building',
          },
          {
            title: 'Historiska fasader',
            description:
              'Centrala Helsingborgs kulturhistoriska byggnader inspekteras med termisk kamera utan ingrepp — bevarar byggnadens integritet.',
            icon: 'camera',
          },
          {
            title: 'Snabb inspektion',
            description:
              'Drönarinspektion genomförs på timmar istället för dagar. Idealiskt för fastighetsförvaltare med många objekt.',
            icon: 'clock',
          },
          {
            title: 'Ingen ställningsbyggnad',
            description:
              'Eliminera kostnaden och risken med byggnadsställningar på Helsingborgs trånga stadsgator.',
            icon: 'shield',
          },
          {
            title: 'Dokumentation och rapport',
            description:
              'Komplett rapport med termiska bilder, RGB-foton och prioriterade åtgärdsrekommendationer.',
            icon: 'file',
          },
          {
            title: 'Regional täckning',
            description:
              'Vi täcker Helsingborg, Landskrona och hela nordvästra Skåne — kombinera uppdrag för bättre effektivitet.',
            icon: 'chart',
          },
        ]}
        variant="dark"
      />

      <FaqAccordion
        headline="Vanliga frågor — Drönarinspektion Helsingborg"
        items={faqItems}
      />

      <CtaBand
        headline="Behöver ni drönarinspektion i Helsingborg?"
        description="Kontakta oss för en kostnadsfri offert. Vi inspekterar tak, fasader och solceller i Helsingborg, Landskrona och nordvästra Skåne."
        ctaLabel="Begär offert"
        ctaHref="/kontakt"
      />
    </>
  )
}
