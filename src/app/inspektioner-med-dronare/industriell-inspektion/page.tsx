import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { serviceSchema, faqSchema } from '@/lib/schema'
import { Hero } from '@/components/Hero'
import { TrustBar } from '@/components/TrustBar'
import { BenefitsGrid } from '@/components/BenefitsGrid'
import { ProcessSteps } from '@/components/ProcessSteps'
import { Deliverables } from '@/components/Deliverables'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { RelatedServices } from '@/components/RelatedServices'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = createMetadata({
  title: 'Industriell inspektion med drönare – Inspektera anläggningar säkert',
  description:
    'Drönarinspektion av industrianläggningar, cisterner, skorstenar och svåråtkomliga strukturer. Minimera driftstopp och arbetsmiljörisker med drönarteknik.',
  path: '/inspektioner-med-dronare/industriell-inspektion',
})

const faqItems = [
  {
    question: 'Vilka typer av industrianläggningar kan inspekteras?',
    answer: 'Vi inspekterar cisterner, skorstenar, master, silos, broar, kranar, lagerbyggnader och andra svåråtkomliga strukturer. Kontakta oss om ni har ett specifikt objekt.',
  },
  {
    question: 'Kan inspektionen göras utan att stoppa produktionen?',
    answer: 'I de flesta fall kan drönaren operera utan att påverka pågående drift. Vi samordnar alltid med er driftpersonal för att minimera eventuell störning.',
  },
  {
    question: 'Hur hanterar ni säkerheten vid industriella miljöer?',
    answer: 'Vi genomför alltid en riskbedömning och följer gällande säkerhetsföreskrifter. Våra piloter har erfarenhet av att operera i industriella miljöer.',
  },
  {
    question: 'Kan drönaren inspektera invändiga utrymmen?',
    answer: 'Vår standardtjänst avser utvändiga inspektioner. Invändiga inspektioner kan i vissa fall utföras med specialiserade drönare — kontakta oss för att diskutera möjligheterna.',
  },
]

export default function IndustriellInspektionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Industriell inspektion med drönare',
              description: 'Drönarinspektion av industrianläggningar och svåråtkomliga strukturer. Minimera driftstopp och risker.',
              url: '/inspektioner-med-dronare/industriell-inspektion',
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
          { name: 'Industriell inspektion', url: '/inspektioner-med-dronare/industriell-inspektion' },
        ]}
      />

      <Hero
        headline="Industriell inspektion med drönare"
        subheadline="Inspektera cisterner, skorstenar, master och andra svåråtkomliga strukturer — utan driftstopp, ställningar eller arbete på höjd. Säkrare och mer kostnadseffektivt."
        ctaPrimary={{ label: 'Begär offert', href: '/inspektioner-med-dronare/kontakt' }}
        stats={[
          { value: '0', label: 'Driftstopp krävs' },
          { value: '0', label: 'Arbete på höjd' },
          { value: '48h', label: 'Rapport levererad' },
        ]}
      />

      <TrustBar
        items={[
          'EASA-certifierade fjärrpiloter',
          'Ansvarsförsäkrade',
          'Riskbedömning ingår',
        ]}
      />

      <BenefitsGrid
        headline="Fördelar med industriell drönarinspektion"
        benefits={[
          {
            title: 'Minimalt driftstopp',
            description: 'Inspektionen kan utföras medan anläggningen är i drift, utan att stoppa produktionen.',
            icon: 'building',
          },
          {
            title: 'Eliminerar höjdarbete',
            description: 'Ingen personal behöver klättra, använda rep eller arbeta i slutna utrymmen.',
            icon: 'shield',
          },
          {
            title: 'Kostnadsbesparingar',
            description: 'Inga kostnader för ställningar, industriklättrare eller omfattande säkerhetsutrustning.',
            icon: 'chart',
          },
          {
            title: 'Snabbare inspektion',
            description: 'Drönaren når svårtillgängliga platser snabbt, utan långa förberedelsetider.',
            icon: 'clock',
          },
          {
            title: 'Detaljerad dokumentation',
            description: 'Högupplösta bilder och video av alla inspekterade ytor.',
            icon: 'camera',
          },
          {
            title: 'Systematisk uppföljning',
            description: 'Digital dokumentation underlättar planerat underhåll och jämförelse över tid.',
            icon: 'file',
          },
        ]}
      />

      <Deliverables
        headline="Det här ingår"
        items={[
          {
            title: 'Visuell statusbedömning',
            description: 'Övergripande bedömning av anläggningens utvändiga skick.',
          },
          {
            title: 'Högupplösta bilder & video',
            description: 'Detaljerad dokumentation av alla inspekterade ytor och strukturer.',
          },
          {
            title: 'Rapport med noteringar',
            description: 'Identifierade problem markerade på bilderna med beskrivning.',
          },
          {
            title: 'Underhållsrekommendationer',
            description: 'Förslag på prioriterade åtgärder baserat på inspektionens resultat.',
          },
        ]}
      />

      <ProcessSteps
        headline="Så inspekterar vi industrianläggningar"
        steps={[
          {
            number: 1,
            title: 'Samordning',
            description: 'Vi diskuterar objektet och samordnar med er driftpersonal.',
          },
          {
            number: 2,
            title: 'Riskbedömning',
            description: 'Vi genomför en riskbedömning och planerar flygningen.',
          },
          {
            number: 3,
            title: 'Inspektion',
            description: 'Certifierad pilot genomför flygningen och dokumenterar strukturen.',
          },
          {
            number: 4,
            title: 'Leverans',
            description: 'Rapport med bilder och rekommendationer levereras digitalt.',
          },
        ]}
      />

      <FaqAccordion headline="Vanliga frågor om industriell inspektion" items={faqItems} />

      <RelatedServices
        services={[
          {
            title: 'Fasadinspektion',
            href: '/inspektioner-med-dronare/fasadinspektion',
            description: 'Dokumentera fasader på industribyggnader och kommersiella fastigheter.',
          },
          {
            title: 'Solcellsinspektion',
            href: '/inspektioner-med-dronare/solcellsinspektion',
            description: 'Kontrollera solcellspaneler på industritak för defekter och nedsmutsning.',
          },
        ]}
      />

      <CtaBand
        headline="Inspektera er anläggning med drönare"
        description="Kontakta oss för att diskutera hur vi kan hjälpa er med inspektion av industriella strukturer."
        ctaLabel="Begär offert"
      />
    </>
  )
}
