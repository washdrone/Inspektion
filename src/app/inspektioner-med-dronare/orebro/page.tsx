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
  title: 'Drönarinspektion Örebro | SurveyDrone — Tak, Fasad & Solceller',
  description:
    'Professionell drönarinspektion i Örebro och Örebro län. Tak, fasader, solceller och industri med termisk kamera. EASA-certifierade piloter. Begär offert.',
  path: '/inspektioner-med-dronare/orebro',
})

const faqItems = [
  {
    question: 'Utför ni drönarinspektioner i hela Örebro län?',
    answer: 'Ja, vi utför inspektioner i Örebro och hela Örebro län — inklusive Karlskoga, Kumla, Hallsberg och övriga kommuner i länet.',
  },
  {
    question: 'Kan ni flyga drönare i centrala Örebro?',
    answer: 'Vi har kompetens och rutiner för att operera i tätbebyggda områden. Vi genomför alltid en riskbedömning och hanterar nödvändiga anmälningar innan flygning i stadsmiljö.',
  },
  {
    question: 'Vilka typer av fastigheter inspekterar ni i Örebro?',
    answer: 'Vi inspekterar alla typer — flerbostadshus, villor, kommersiella fastigheter, industribyggnader och offentliga byggnader. Örebro har en blandad bebyggelse med allt från äldre stadskärna till moderna industriområden.',
  },
  {
    question: 'Hur bokar jag en drönarinspektion i Örebro?',
    answer: 'Kontakta oss via formuläret eller e-post med en beskrivning av ert objekt. Vi återkommer med en offert och förslag på tid.',
  },
]

export default function OrebroPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Drönarinspektion Örebro',
              description: 'Professionell drönarinspektion i Örebro. Tak, fasader, solceller och industri med termisk kamera.',
              url: '/inspektioner-med-dronare/orebro',
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
          { name: 'Örebro', url: '/inspektioner-med-dronare/orebro' },
        ]}
      />

      <Hero
        headline="Drönarinspektion Örebro — Tak, Fasad, Solceller & Industri"
        subheadline="SurveyDrone erbjuder professionell drönarinspektion i Örebro och Örebro län. Inspektera tak, fasader och solceller med termisk kamera — snabbt, säkert och kostnadseffektivt."
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
          'Örebro & Örebro län',
        ]}
      />

      <BenefitsGrid
        headline="Drönarinspektion i Örebroområdet"
        benefits={[
          {
            title: 'Centralt logistikläge',
            description: 'Örebros centrala läge i Sverige gör det till en naturlig utgångspunkt för inspektioner i regionen.',
            icon: 'building',
          },
          {
            title: 'Industrianläggningar',
            description: 'Örebro län har en stark industrisektor med anläggningar som drar nytta av regelbunden drönarinspektion.',
            icon: 'chart',
          },
          {
            title: 'Solcellsanläggningar',
            description: 'Identifiera hotspots och defekta paneler i Örebroområdets växande solcellsbestånd.',
            icon: 'camera',
          },
          {
            title: 'Blandad bebyggelse',
            description: 'Örebro erbjuder en mix av äldre stadskärna, moderna bostadsområden och industriområden som alla kan inspekteras med drönare.',
            icon: 'shield',
          },
          {
            title: 'Kommunala fastigheter',
            description: 'Skolor, vårdbyggnader och andra kommunala fastigheter i Örebro kommun och kringliggande kommuner.',
            icon: 'clock',
          },
          {
            title: 'Karlskoga, Kumla & Hallsberg',
            description: 'Vi täcker hela Örebro län inklusive Karlskoga, Kumla, Hallsberg och övriga kommuner.',
            icon: 'file',
          },
        ]}
      />

      <ProcessSteps
        headline="Så fungerar det i Örebro"
        steps={[
          {
            number: 1,
            title: 'Kontakt & planering',
            description: 'Beskriv ert objekt i Örebroområdet. Vi planerar inspektion och lämnar offert.',
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

      <FaqAccordion headline="Vanliga frågor — drönarinspektion Örebro" items={faqItems} />

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
        headline="Boka drönarinspektion i Örebro"
        description="Kontakta oss för en kostnadsfri offert. Vi inspekterar fastigheter i hela Örebro län."
        ctaLabel="Begär offert"
      />
    </>
  )
}
