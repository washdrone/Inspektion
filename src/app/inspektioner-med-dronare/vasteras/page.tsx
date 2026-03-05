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
  title: 'Drönarinspektion Västerås | SurveyDrone — Tak, Fasad & Solceller',
  description:
    'Professionell drönarinspektion i Västerås och Västmanland. Tak, fasader, solceller och industri med termisk kamera. EASA-certifierade piloter. Begär offert.',
  path: '/inspektioner-med-dronare/vasteras',
})

const faqItems = [
  {
    question: 'Utför ni drönarinspektioner i hela Västeråsområdet?',
    answer: 'Ja, vi utför inspektioner i Västerås och hela Västmanlands län — inklusive Eskilstuna, Sala, Köping och övriga kommuner i regionen.',
  },
  {
    question: 'Kan ni flyga drönare i Västerås tätort?',
    answer: 'Vi har kompetens och rutiner för att operera i tätbebyggda områden. Vi genomför alltid en riskbedömning och hanterar nödvändiga anmälningar innan flygning i stadsmiljö.',
  },
  {
    question: 'Vilka typer av fastigheter inspekterar ni i Västerås?',
    answer: 'Vi inspekterar alla typer — flerbostadshus, villor, kommersiella fastigheter, industribyggnader, BRF-fastigheter och offentliga byggnader. Västerås har en blandad bebyggelse med allt från äldre stadskärna till moderna industriområden.',
  },
  {
    question: 'Hur bokar jag en drönarinspektion i Västerås?',
    answer: 'Kontakta oss via formuläret eller e-post med en beskrivning av ert objekt. Vi återkommer med en offert och förslag på tid.',
  },
]

export default function VasterasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Drönarinspektion Västerås',
              description: 'Professionell drönarinspektion i Västerås. Tak, fasader, solceller och industri med termisk kamera.',
              url: '/inspektioner-med-dronare/vasteras',
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
          { name: 'Västerås', url: '/inspektioner-med-dronare/vasteras' },
        ]}
      />

      <Hero
        headline="Drönarinspektion Västerås — Tak, Fasad, Solceller & Industri"
        subheadline="SurveyDrone erbjuder professionell drönarinspektion i Västerås och Västmanland. Inspektera tak, fasader och solceller med termisk kamera — snabbt, säkert och kostnadseffektivt."
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
          'Västerås & Västmanland',
        ]}
      />

      <BenefitsGrid
        headline="Drönarinspektion i Västeråsområdet"
        benefits={[
          {
            title: 'Industri & ABB-arv',
            description: 'Västerås har ett starkt industriarv med stora anläggningar som kräver regelbunden inspektion av tak och fasader.',
            icon: 'building',
          },
          {
            title: 'Energisektorn',
            description: 'Med Mälarenergi och en växande energisektor i Mälardalen är drönarinspektion av energianläggningar och solceller extra relevant.',
            icon: 'chart',
          },
          {
            title: 'Solcellsanläggningar',
            description: 'Identifiera hotspots och defekta paneler i Västeråsområdets växande solcellsbestånd med termisk kamera.',
            icon: 'camera',
          },
          {
            title: 'Logistik & lager',
            description: 'Västerås strategiska läge i Mälardalen gör staden till ett logistiknav med stora lager- och terminalbyggnader att inspektera.',
            icon: 'shield',
          },
          {
            title: 'Blandad bebyggelse',
            description: 'Från äldre stadskärna till moderna bostadsområden — Västerås varierade bebyggelse drar nytta av effektiv drönarinspektion.',
            icon: 'clock',
          },
          {
            title: 'Hela Västmanland',
            description: 'Vi täcker hela Västmanlands län inklusive Eskilstuna, Sala, Köping och övriga kommuner i regionen.',
            icon: 'file',
          },
        ]}
      />

      <ProcessSteps
        headline="Så fungerar det i Västerås"
        steps={[
          {
            number: 1,
            title: 'Kontakt & planering',
            description: 'Beskriv ert objekt i Västeråsområdet. Vi planerar inspektion och lämnar offert.',
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

      <FaqAccordion headline="Vanliga frågor — drönarinspektion Västerås" items={faqItems} />

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
        headline="Boka drönarinspektion i Västerås"
        description="Kontakta oss för en kostnadsfri offert. Vi inspekterar fastigheter i hela Västmanlands län."
        ctaLabel="Begär offert"
      />
    </>
  )
}
