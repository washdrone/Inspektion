import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { serviceSchema, faqSchema } from '@/lib/schema'
import { Hero } from '@/components/Hero'
import { TrustBar } from '@/components/TrustBar'
import { BenefitsGrid } from '@/components/BenefitsGrid'
import { ProcessSteps } from '@/components/ProcessSteps'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { RelatedServices } from '@/components/RelatedServices'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = createMetadata({
  title: 'Drönarinspektion Uppsala | SurveyDrone — Tak, Fasad & Solceller',
  description:
    'Professionell drönarinspektion i Uppsala och Uppsala län. Tak, fasader, solceller och industri med termisk kamera. EASA-certifierade piloter. Begär offert.',
  path: '/inspektioner-med-dronare/uppsala',
})

const faqItems = [
  {
    question: 'Utför ni drönarinspektioner i hela Uppsala län?',
    answer: 'Ja, vi utför inspektioner i hela Uppsala och Uppsala län — inklusive närliggande kommuner som Enköping, Knivsta och Sigtuna.',
  },
  {
    question: 'Kan ni flyga drönare i centrala Uppsala?',
    answer: 'Vi har kompetens och rutiner för att operera i tätbebyggda områden. Vi genomför alltid en riskbedömning och hanterar nödvändiga anmälningar innan flygning i stadsmiljö.',
  },
  {
    question: 'Vilka typer av fastigheter inspekterar ni i Uppsala?',
    answer: 'Vi inspekterar alla typer — flerbostadshus, villor, kommersiella fastigheter, industribyggnader, universitetsbyggnader, studentbostäder och offentliga byggnader. Uppsala har en mix av historiska och moderna byggnader som alla kan dra nytta av drönarinspektion.',
  },
  {
    question: 'Hur bokar jag en drönarinspektion i Uppsala?',
    answer: 'Kontakta oss via formuläret eller e-post med en beskrivning av ert objekt. Vi återkommer med en offert och förslag på tid.',
  },
]

export default function UppsalaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Drönarinspektion Uppsala',
              description: 'Professionell drönarinspektion i Uppsala. Tak, fasader, solceller och industri med termisk kamera.',
              url: '/inspektioner-med-dronare/uppsala',
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqItems)) }}
      />

      <Breadcrumbs
        items={[
          { name: 'Hem', url: '/' },
          { name: 'Inspektioner med drönare', url: '/inspektioner-med-dronare' },
          { name: 'Uppsala', url: '/inspektioner-med-dronare/uppsala' },
        ]}
      />

      <Hero
        headline="Drönarinspektion Uppsala — Tak, Fasad, Solceller & Industri"
        subheadline="SurveyDrone erbjuder professionell drönarinspektion i Uppsala och Uppsala län. Inspektera tak, fasader och solceller med termisk kamera — snabbt, säkert och kostnadseffektivt."
        ctaPrimary={{ label: 'Begär offert', href: '/inspektioner-med-dronare/kontakt' }}
        ctaSecondary={{ label: 'Se våra tjänster', href: '/inspektioner-med-dronare' }}
        stats={[
          { value: 'Betydligt', label: 'Lägre inspektionskostnad' },
          { value: 'Avsevärt', label: 'Snabbare genomförande' },
          { value: 'Snabb', label: 'Rapportleverans' },
          { value: '0', label: 'Arbete på höjd' },
        ]}
      />

      <TrustBar
        items={[
          'EASA-certifierade fjärrpiloter',
          'Ansvarsförsäkrade',
          'Termisk kamera & RGB',
          'Uppsala & Uppsala län',
        ]}
      />

      <BenefitsGrid
        headline="Drönarinspektion i Uppsalaområdet"
        benefits={[
          {
            title: 'Universitetsområde & historiska byggnader',
            description: 'Uppsalas historiska byggnader och universitetsområden kräver skonsam inspektion — drönare ger detaljerad dokumentation utan fysisk kontakt.',
            icon: 'building',
          },
          {
            title: 'Flerbostadshus & studentbostäder',
            description: 'Uppsalas stora bestånd av bostäder och studentbostäder gör drönarinspektion till ett kostnadseffektivt val för förvaltare och bostadsbolag.',
            icon: 'chart',
          },
          {
            title: 'Solcellsanläggningar',
            description: 'Identifiera hotspots och defekta paneler i Uppsalaområdets växande solcellsbestånd.',
            icon: 'camera',
          },
          {
            title: 'Nya bostadsområden',
            description: 'Uppsalas snabba tillväxt med nya bostadsområden skapar behov av effektiv byggdokumentation och kvalitetskontroll.',
            icon: 'shield',
          },
          {
            title: 'Stadsmiljö',
            description: 'Vi har erfarenhet av att operera i Uppsalas tätbebyggda stadsmiljö med korrekt riskhantering.',
            icon: 'clock',
          },
          {
            title: 'Närliggande kommuner',
            description: 'Vi täcker hela Uppsala län inklusive Enköping, Knivsta, Sigtuna och övriga kommuner.',
            icon: 'file',
          },
        ]}
      />

      <ProcessSteps
        headline="Så fungerar det i Uppsala"
        steps={[
          {
            number: 1,
            title: 'Kontakt & planering',
            description: 'Beskriv ert objekt i Uppsalaområdet. Vi planerar inspektion och lämnar offert.',
          },
          {
            number: 2,
            title: 'Flygning & datainsamling',
            description: 'Certifierad pilot genomför flygningen med termisk kamera och RGB-kamera.',
          },
          {
            number: 3,
            title: 'Analys & rapport',
            description: 'Vi analyserar data och sammanställer en detaljerad rapport med åtgärdsförslag.',
          },
          {
            number: 4,
            title: 'Leverans & uppföljning',
            description: 'Ni får rapport med bilder och rekommendationer, med möjlighet till genomgång.',
          },
        ]}
      />

      <FaqAccordion headline="Vanliga frågor — drönarinspektion Uppsala" items={faqItems} />

      <RelatedServices
        services={[
          {
            title: 'Takinspektion med drönare',
            href: '/inspektioner-med-dronare/takinspektion',
            description: 'Identifiera skador, fukt och köldbryggor med termisk kamera.',
          },
          {
            title: 'Fasadinspektion med drönare',
            href: '/inspektioner-med-dronare/fasadinspektion',
            description: 'Dokumentera sprickor, fukt och skador utan ställningar.',
          },
          {
            title: 'Solcellsinspektion',
            href: '/inspektioner-med-dronare/solcellsinspektion',
            description: 'Hitta hotspots och defekta paneler med termisk analys.',
          },
        ]}
      />

      <CtaBand
        headline="Boka drönarinspektion i Uppsala"
        description="Kontakta oss för en kostnadsfri offert. Vi inspekterar fastigheter i hela Uppsala län."
        ctaLabel="Begär offert"
      />
    </>
  )
}
