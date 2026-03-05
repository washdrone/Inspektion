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
  title: 'Drönarinspektion Linköping | SurveyDrone — Tak, Fasad & Solceller',
  description:
    'Professionell drönarinspektion i Linköping och Östergötland. Tak, fasader, solceller och industri med termisk kamera. EASA-certifierade piloter. Begär offert.',
  path: '/inspektioner-med-dronare/linkoping',
})

const faqItems = [
  {
    question: 'Utför ni drönarinspektioner i hela Östergötland?',
    answer: 'Ja, vi utför inspektioner i Linköping och hela Östergötland — inklusive Norrköping, Motala, Mjölby och övriga kommuner i regionen.',
  },
  {
    question: 'Kan ni flyga drönare i Linköpings tätbebyggda områden?',
    answer: 'Vi har kompetens och rutiner för att operera i tätbebyggda områden. Vi genomför alltid en riskbedömning och hanterar nödvändiga anmälningar innan flygning i stadsmiljö.',
  },
  {
    question: 'Vilka typer av fastigheter inspekterar ni i Linköping?',
    answer: 'Vi inspekterar alla typer — flerbostadshus, villor, kommersiella fastigheter, industribyggnader, universitetsbyggnader och offentliga byggnader. Linköping har en blandad bebyggelse med allt från äldre stadskärna till moderna industriområden.',
  },
  {
    question: 'Hur bokar jag en drönarinspektion i Linköping?',
    answer: 'Kontakta oss via formuläret eller e-post med en beskrivning av ert objekt. Vi återkommer med en offert och förslag på tid.',
  },
]

export default function LinkopingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Drönarinspektion Linköping',
              description: 'Professionell drönarinspektion i Linköping. Tak, fasader, solceller och industri med termisk kamera.',
              url: '/inspektioner-med-dronare/linkoping',
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
          { name: 'Linköping', url: '/inspektioner-med-dronare/linkoping' },
        ]}
      />

      <Hero
        headline="Drönarinspektion Linköping — Tak, Fasad, Solceller & Industri"
        subheadline="SurveyDrone erbjuder professionell drönarinspektion i Linköping och Östergötland. Inspektera tak, fasader och solceller med termisk kamera — snabbt, säkert och kostnadseffektivt."
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
          'Linköping & Östergötland',
        ]}
      />

      <BenefitsGrid
        headline="Drönarinspektion i Linköpingsområdet"
        benefits={[
          {
            title: 'Industriområden & Saab',
            description: 'Linköping har stora industriområden, bland annat kring Saab och relaterade verksamheter, där drönarinspektion effektiviserar underhållsarbetet.',
            icon: 'building',
          },
          {
            title: 'Teknologiföretag',
            description: 'Linköpings starka tekniksektor innebär moderna kontors- och verksamhetslokaler som drar nytta av regelbunden inspektion.',
            icon: 'chart',
          },
          {
            title: 'Solcellsanläggningar',
            description: 'Identifiera hotspots och defekta paneler i Östergötlands växande solcellsbestånd med termisk kamera.',
            icon: 'camera',
          },
          {
            title: 'Universitetsområde',
            description: 'Linköpings universitetsområden omfattar många byggnader som kräver löpande inspektion av tak och fasader.',
            icon: 'shield',
          },
          {
            title: 'Blandad bebyggelse',
            description: 'Östergötland har en varierad bebyggelse — från äldre stadskärnor till moderna bostadsområden och lantbruksfastigheter.',
            icon: 'clock',
          },
          {
            title: 'Norrköping & övriga kommuner',
            description: 'Vi täcker hela Östergötland inklusive Norrköping, Motala, Mjölby och övriga kommuner i regionen.',
            icon: 'file',
          },
        ]}
      />

      <ProcessSteps
        headline="Så fungerar det i Linköping"
        steps={[
          {
            number: 1,
            title: 'Kontakt & planering',
            description: 'Beskriv ert objekt i Linköpingsområdet. Vi planerar inspektion och lämnar offert.',
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

      <FaqAccordion headline="Vanliga frågor — drönarinspektion Linköping" items={faqItems} />

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
        headline="Boka drönarinspektion i Linköping"
        description="Kontakta oss för en kostnadsfri offert. Vi inspekterar fastigheter i hela Östergötland."
        ctaLabel="Begär offert"
      />
    </>
  )
}
