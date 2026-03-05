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
  title: 'Industriinspektion med Drönare | SurveyDrone — Tankar, Torn & Pipelines',
  description:
    'Drönarinspektion av industrianläggningar, cisterner, skorstenar och svåråtkomliga strukturer. Minimera driftstopp och arbetsmiljörisker. PDRA S-01-certifierat.',
  path: '/inspektioner-med-dronare/industriell-inspektion',
})

const faqItems = [
  {
    question: 'Vilka typer av industrianläggningar kan inspekteras med drönare?',
    answer: 'Vi inspekterar cisterner, skorstenar, master, silos, broar, kranar, pipelines, lagerbyggnader och andra svåråtkomliga strukturer. Drönare med termisk kamera kan även identifiera läckor och temperaturavvikelser.',
  },
  {
    question: 'Kan inspektionen göras utan att stoppa produktionen?',
    answer: 'I de flesta fall kan drönaren operera utan att påverka pågående drift. Vi samordnar alltid med er driftpersonal för att minimera eventuell störning. Drönare-inspektion minskar behovet av driftstopp jämfört med traditionella metoder.',
  },
  {
    question: 'Hur hanterar ni säkerheten vid industriella miljöer?',
    answer: 'Vi genomför alltid en riskbedömning enligt gällande säkerhetsföreskrifter. Våra PDRA S-01-certifierade piloter har erfarenhet av att operera i industriella miljöer med ex-klassade zoner, höga konstruktioner och aktiv drift.',
  },
  {
    question: 'Kan drönaren inspektera invändiga utrymmen?',
    answer: 'Vår standardtjänst avser utvändiga inspektioner. Invändiga inspektioner av tankar, silos och slutna utrymmen kan i vissa fall utföras med specialiserade drönare — kontakta oss för att diskutera möjligheterna.',
  },
  {
    question: 'Vad kostar industriell inspektion med drönare?',
    answer: 'Priset beror på anläggningens storlek, höjd och komplexitet. Drönare-inspektion är betydligt billigare än industriklättring, ställningar eller kranbaserade metoder. Kontakta oss för en kostnadsfri offert.',
  },
  {
    question: 'Kan termisk kamera användas vid industriinspektion?',
    answer: 'Ja, termisk kamera är ett värdefullt verktyg vid industriinspektion. Den kan identifiera värmeutveckling, läckor, isoleringsbrister och elektriska problem i svåråtkomliga strukturer utan att personal behöver närma sig objektet.',
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
        headline="Industriinspektion med Drönare — Tankar, Torn, Pipelines & Konstruktioner"
        subheadline="Inspektera cisterner, skorstenar, master, pipelines och andra svåråtkomliga strukturer — utan driftstopp, ställningar eller arbete på höjd. PDRA S-01-certifierat."
        ctaPrimary={{ label: 'Begär offert', href: '/inspektioner-med-dronare/kontakt' }}
        stats={[
          { value: 'Upp till 90%', label: 'Kortare inspektionstid' },
          { value: '0', label: 'Driftstopp krävs' },
          { value: '48h', label: 'Rapportleverans' },
          { value: '0', label: 'Arbete på höjd' },
        ]}
      />

      <TrustBar
        items={[
          'PDRA S-01-certifierade',
          'EASA-certifierade fjärrpiloter',
          'Termisk kamera & RGB',
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
            title: 'Fasadinspektion med drönare',
            href: '/inspektioner-med-dronare/fasadinspektion',
            description: 'Dokumentera fasader på industribyggnader och kommersiella fastigheter.',
          },
          {
            title: 'Solcellsinspektion med termisk kamera',
            href: '/inspektioner-med-dronare/solcellsinspektion',
            description: 'Hitta hotspots och defekta paneler på industritak med termisk analys.',
          },
          {
            title: 'Takinspektion med drönare',
            href: '/inspektioner-med-dronare/takinspektion',
            description: 'Identifiera fukt och skador på industritak med termisk kamera.',
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
