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
  title: 'Drönarinspektion Malmö | SurveyDrone — Tak, Fasad & Solceller',
  description:
    'Professionell drönarinspektion i Malmö och Skåne. Tak, fasader, solceller och industri med termisk kamera. EASA-certifierade piloter. Begär offert.',
  path: '/inspektioner-med-dronare/malmo',
})

const faqItems = [
  {
    question: 'Utför ni drönarinspektioner i hela Malmöområdet?',
    answer: 'Ja, vi utför inspektioner i hela Malmö och Skåne — inklusive Lund, Helsingborg, Landskrona, Trelleborg och övriga kommuner i regionen.',
  },
  {
    question: 'Kan ni flyga drönare i Malmös innerstad?',
    answer: 'Vi har kompetens och rutiner för att operera i tätbebyggda områden. Vi genomför alltid en riskbedömning och hanterar nödvändiga anmälningar innan flygning i stadsmiljö.',
  },
  {
    question: 'Vilka typer av fastigheter inspekterar ni i Malmö?',
    answer: 'Vi inspekterar alla typer — flerbostadshus, villor, kommersiella fastigheter, industribyggnader, BRF-fastigheter och offentliga byggnader. Malmö har en blandad bebyggelse med allt från äldre tegelfastigheter till moderna nybyggen som alla kan dra nytta av drönarinspektion.',
  },
  {
    question: 'Hur bokar jag en drönarinspektion i Malmö?',
    answer: 'Kontakta oss via formuläret eller e-post med en beskrivning av ert objekt. Vi återkommer med en offert och förslag på tid.',
  },
]

export default function MalmoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Drönarinspektion Malmö',
              description: 'Professionell drönarinspektion i Malmö. Tak, fasader, solceller och industri med termisk kamera.',
              url: '/inspektioner-med-dronare/malmo',
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
          { name: 'Malmö', url: '/inspektioner-med-dronare/malmo' },
        ]}
      />

      <Hero
        headline="Drönarinspektion Malmö — Tak, Fasad, Solceller & Industri"
        subheadline="SurveyDrone erbjuder professionell drönarinspektion i Malmö och Skåne. Inspektera tak, fasader och solceller med termisk kamera — snabbt, säkert och kostnadseffektivt."
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
          'Malmö & Skåne',
        ]}
      />

      <BenefitsGrid
        headline="Drönarinspektion i Malmöområdet"
        benefits={[
          {
            title: 'Öresundsregionen',
            description: 'Malmös centrala läge i Öresundsregionen gör drönarinspektion till ett effektivt val för fastighetsägare och förvaltare i hela området.',
            icon: 'building',
          },
          {
            title: 'Vindexponerade fasader',
            description: 'Malmös kustnära läge innebär att fasader utsätts för kraftig vindpåverkan. Drönarinspektion identifierar skador snabbt och säkert.',
            icon: 'chart',
          },
          {
            title: 'Solcellsanläggningar',
            description: 'Identifiera hotspots och defekta paneler i Skånes växande solcellsbestånd med termisk drönarinspektion.',
            icon: 'camera',
          },
          {
            title: 'Skånes jordbruksindustri',
            description: 'Inspektera lantbruksbyggnader, silos och ekonomibyggnader i Skånes jordbrukslandskap effektivt med drönare.',
            icon: 'shield',
          },
          {
            title: 'Malmös blandade bebyggelse',
            description: 'Från äldre tegelfastigheter till moderna nybyggen i Västra Hamnen — vi inspekterar alla typer av byggnader i Malmö.',
            icon: 'clock',
          },
          {
            title: 'Hela Skåne',
            description: 'Vi täcker hela Skåne inklusive Lund, Helsingborg, Landskrona, Trelleborg och övriga kommuner.',
            icon: 'file',
          },
        ]}
      />

      <ProcessSteps
        headline="Så fungerar det i Malmö"
        steps={[
          {
            number: 1,
            title: 'Kontakt & planering',
            description: 'Beskriv ert objekt i Malmöområdet. Vi planerar inspektion och lämnar offert.',
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

      <FaqAccordion headline="Vanliga frågor — drönarinspektion Malmö" items={faqItems} />

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
        headline="Boka drönarinspektion i Malmö"
        description="Kontakta oss för en kostnadsfri offert. Vi inspekterar fastigheter i hela Skåne."
        ctaLabel="Begär offert"
      />
    </>
  )
}
