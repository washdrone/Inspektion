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
  title: 'Drönarinspektion Luleå | SurveyDrone — Tak, Fasad & Solceller',
  description:
    'Professionell drönarinspektion i Luleå och Norrbotten. Tak, fasader, solceller och industri med termisk kamera. EASA-certifierade piloter. Begär offert.',
  path: '/inspektioner-med-dronare/lulea',
})

const faqItems = [
  {
    question: 'Utför ni drönarinspektioner i hela Norrbotten?',
    answer: 'Ja, vi utför inspektioner i Luleå och övriga Norrbotten — inklusive Boden, Piteå, Gällivare, Kiruna och övriga kommuner i länet.',
  },
  {
    question: 'Kan ni flyga drönare i arktiskt klimat och vintertid?',
    answer: 'Vi har kompetens och utrustning för att operera i Norrbottens klimat. Vi genomför alltid en riskbedömning och anpassar flygningar efter väderförhållanden, temperatur och ljusförhållanden.',
  },
  {
    question: 'Vilka typer av fastigheter och anläggningar inspekterar ni i Luleå?',
    answer: 'Vi inspekterar alla typer — flerbostadshus, industrianläggningar, kommersiella fastigheter, offentliga byggnader och tung industri. Luleå och Norrbotten har en stor andel industri- och gruvrelaterade anläggningar som drar nytta av drönarinspektion.',
  },
  {
    question: 'Hur bokar jag en drönarinspektion i Luleå?',
    answer: 'Kontakta oss via formuläret eller e-post med en beskrivning av ert objekt. Vi återkommer med en offert och förslag på tid.',
  },
]

export default function LuleaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Drönarinspektion Luleå',
              description: 'Professionell drönarinspektion i Luleå. Tak, fasader, solceller och industri med termisk kamera.',
              url: '/inspektioner-med-dronare/lulea',
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
          { name: 'Luleå', url: '/inspektioner-med-dronare/lulea' },
        ]}
      />

      <Hero
        headline="Drönarinspektion Luleå — Tak, Fasad, Solceller & Industri"
        subheadline="SurveyDrone erbjuder professionell drönarinspektion i Luleå och Norrbotten. Inspektera tak, fasader och solceller med termisk kamera — snabbt, säkert och kostnadseffektivt."
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
          'Luleå & Norrbotten',
        ]}
      />

      <BenefitsGrid
        headline="Drönarinspektion i Luleåområdet"
        benefits={[
          {
            title: 'SSAB & tung industri',
            description: 'Luleå är ett nav för stålverk och tung industri. Drönarinspektion ger säker och effektiv tillståndsövervakning av stora industrianläggningar.',
            icon: 'building',
          },
          {
            title: 'Arktiskt klimat & snölaster',
            description: 'Extrema snölaster och hårda vintrar sliter på tak och fasader. Termisk drönarinspektion identifierar skador och köldbryggor snabbt.',
            icon: 'chart',
          },
          {
            title: 'Solcellsanläggningar',
            description: 'Identifiera hotspots och defekta paneler i Norrbottens växande solcellsbestånd med termisk kamera.',
            icon: 'camera',
          },
          {
            title: 'Norrbottens industriexpansion',
            description: 'Regionens snabba industriella tillväxt skapar stort behov av effektiva inspektionslösningar för nya och befintliga anläggningar.',
            icon: 'shield',
          },
          {
            title: 'Gruvnäring',
            description: 'Inspektera gruvrelaterade anläggningar och infrastruktur i Norrbotten med drönare — säkert och utan driftstopp.',
            icon: 'clock',
          },
          {
            title: 'Boden, Piteå & hela Norrbotten',
            description: 'Vi täcker hela Norrbottens län inklusive Boden, Piteå, Gällivare, Kiruna och övriga kommuner.',
            icon: 'file',
          },
        ]}
      />

      <ProcessSteps
        headline="Så fungerar det i Luleå"
        steps={[
          {
            number: 1,
            title: 'Kontakt & planering',
            description: 'Beskriv ert objekt i Luleåområdet. Vi planerar inspektion och lämnar offert.',
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

      <FaqAccordion headline="Vanliga frågor — drönarinspektion Luleå" items={faqItems} />

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
        headline="Boka drönarinspektion i Luleå"
        description="Kontakta oss för en kostnadsfri offert. Vi inspekterar fastigheter och industri i hela Norrbottens län."
        ctaLabel="Begär offert"
      />
    </>
  )
}
