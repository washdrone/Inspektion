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
  title: 'Solcellsinspektion med drönare – Kontrollera solpaneler effektivt',
  description:
    'Inspektion av solcellsanläggningar med drönare. Identifiera defekta celler, hotspots och nedsmutsning. Optimera er solenergis prestanda med regelbundna kontroller.',
  path: '/inspektioner-med-dronare/solcellsinspektion',
})

const faqItems = [
  {
    question: 'Vad kan en drönarinspektion av solceller upptäcka?',
    answer: 'Vi kan identifiera synliga skador som sprickor, delaminering, missfärgning och nedsmutsning. Med visuell inspektion kan vi också upptäcka mekaniska problem som lösa infästningar och skadade kablar.',
  },
  {
    question: 'Erbjuder ni termografisk inspektion av solceller?',
    answer: 'Termografikapacitet kan variera beroende på uppdrag. Kontakta oss för att diskutera ert specifika behov och vilken utrustning som passar bäst.',
  },
  {
    question: 'Hur ofta bör solceller inspekteras?',
    answer: 'Vi rekommenderar en inspektion minst en gång per år för att säkerställa optimal prestanda. Vid äldre anläggningar eller efter extremväder kan tätare intervall vara motiverat.',
  },
  {
    question: 'Kan ni inspektera stora solcellsparker?',
    answer: 'Ja, drönare är särskilt effektiva för stora anläggningar. Vi kan inspektera solcellsparker med hundratals eller tusentals paneler på kort tid.',
  },
]

export default function SolcellsinspektionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Solcellsinspektion med drönare',
              description: 'Inspektion av solcellsanläggningar med drönare. Identifiera defekter och optimera prestanda.',
              url: '/inspektioner-med-dronare/solcellsinspektion',
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
          { name: 'Solcellsinspektion', url: '/inspektioner-med-dronare/solcellsinspektion' },
        ]}
      />

      <Hero
        headline="Solcellsinspektion med drönare"
        subheadline="Kontrollera era solcellspaneler effektivt och identifiera defekter, nedsmutsning och mekaniska problem som påverkar anläggningens prestanda."
        ctaPrimary={{ label: 'Begär offert', href: '/inspektioner-med-dronare/kontakt' }}
        stats={[
          { value: 'Upp till 50x', label: 'Snabbare vs manuell kontroll' },
          { value: '48h', label: 'Rapportleverans' },
          { value: '0', label: 'Driftstopp krävs' },
          { value: '0', label: 'Arbete på höjd' },
        ]}
      />

      <TrustBar
        items={[
          'EASA-certifierade fjärrpiloter',
          'Ansvarsförsäkrade',
          'Alla anläggningsstorlekar',
        ]}
      />

      <BenefitsGrid
        headline="Varför inspektera solceller med drönare?"
        benefits={[
          {
            title: 'Snabb kontroll av stora ytor',
            description: 'Inspektera hundratals paneler på en bråkdel av tiden jämfört med manuell kontroll.',
            icon: 'clock',
          },
          {
            title: 'Hitta dolda prestandaproblem',
            description: 'Visuell inspektion avslöjar sprickor, delaminering och mekaniska skador som påverkar effekten.',
            icon: 'camera',
          },
          {
            title: 'Säker inspektion',
            description: 'Ingen behöver klättra på taket för att kontrollera panelerna.',
            icon: 'shield',
          },
          {
            title: 'Optimerad avkastning',
            description: 'Regelbundna inspektioner hjälper er att maximera solcellernas energiproduktion.',
            icon: 'chart',
          },
          {
            title: 'Dokumentation för underhåll',
            description: 'Tydlig rapport som underlättar planering av rengöring och reparationer.',
            icon: 'file',
          },
          {
            title: 'Ingen driftstörning',
            description: 'Inspektionen utförs utan att anläggningen behöver stängas av.',
            icon: 'building',
          },
        ]}
      />

      <Deliverables
        headline="Det här ingår i en solcellsinspektion"
        items={[
          {
            title: 'Visuell statusrapport',
            description: 'Översikt av alla panelers visuella skick med noteringar om avvikelser.',
          },
          {
            title: 'Högupplösta bilder',
            description: 'Detaljerade flygbilder som visar enskilda paneler och eventuella defekter.',
          },
          {
            title: 'Identifierade problem',
            description: 'Listning av skadade, smutsiga eller felaktigt monterade paneler.',
          },
          {
            title: 'Åtgärdsförslag',
            description: 'Rekommendationer för rengöring, reparation eller byte av identifierade paneler.',
          },
        ]}
      />

      <ProcessSteps
        headline="Så inspekterar vi solceller"
        steps={[
          {
            number: 1,
            title: 'Behovsanalys',
            description: 'Vi diskuterar anläggningens storlek, ålder och eventuella kända problem.',
          },
          {
            number: 2,
            title: 'Flygning',
            description: 'Systematisk överflygning av hela anläggningen med högupplöst kamera.',
          },
          {
            number: 3,
            title: 'Analys',
            description: 'Granskning av bildmaterial för att identifiera defekter och avvikelser.',
          },
          {
            number: 4,
            title: 'Rapport',
            description: 'Detaljerad rapport med bilder, statusbedömning och åtgärdsförslag.',
          },
        ]}
      />

      <FaqAccordion headline="Vanliga frågor om solcellsinspektion" items={faqItems} />

      <RelatedServices
        services={[
          {
            title: 'Takinspektion',
            href: '/inspektioner-med-dronare/takinspektion',
            description: 'Inspektera taket där era solceller är monterade — identifiera skador och slitage.',
          },
          {
            title: 'Industriell inspektion',
            href: '/inspektioner-med-dronare/industriell-inspektion',
            description: 'Inspektera svåråtkomliga industrianläggningar utan driftstopp.',
          },
        ]}
      />

      <CtaBand
        headline="Optimera era solcellers prestanda"
        description="Boka en inspektion och säkerställ att er anläggning producerar som den ska."
        ctaLabel="Begär offert"
      />
    </>
  )
}
