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
  title: 'Byggplatsdokumentation Drönare | SurveyDrone — Flygbilder & Ortofoto',
  description:
    'Dokumentera byggprojektets framsteg med drönare. Flygbilder och ortofoto för byggföretag och beställare. EASA-certifierade piloter. Begär offert.',
  path: '/inspektioner-med-dronare/byggplatsdokumentation',
})

const faqItems = [
  {
    question: 'Hur ofta bör man dokumentera en byggplats med drönare?',
    answer: 'Intervallet beror på projektet. Vanliga upplägg är veckovis, varannan vecka eller månadsvis. Vi anpassar frekvensen efter era behov och projektets fas.',
  },
  {
    question: 'Kan ni ta fram 3D-modeller eller ortofoto?',
    answer: 'Ja, vi kan producera ortofoto (geometriskt korrigerade flygbilder) och i vissa fall 3D-modeller beroende på projektets krav. Kontakta oss för att diskutera vad som passar ert projekt.',
  },
  {
    question: 'Fungerar det på aktiva byggplatser med kranar och maskiner?',
    answer: 'Ja, vi har erfarenhet av att operera på aktiva byggplatser. Vi samordnar alltid med platsledningen och genomför riskbedömning innan varje flygning.',
  },
  {
    question: 'Kan materialet användas i rapporter till beställare?',
    answer: 'Absolut. Flygbilder och dokumentation kan direkt integreras i projektrapporter, tidplaner och presentationer till beställare och intressenter.',
  },
]

export default function ByggplatsdokumentationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Byggplatsdokumentation med drönare',
              description: 'Dokumentera byggprojekt med regelbundna drönarflygningar. Flygbilder och ortofoto för projektuppföljning.',
              url: '/inspektioner-med-dronare/byggplatsdokumentation',
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
          { name: 'Byggplatsdokumentation', url: '/inspektioner-med-dronare/byggplatsdokumentation' },
        ]}
      />

      <Hero
        headline="Byggplatsdokumentation med Drönare — Flygbilder, Ortofoto & 3D"
        subheadline="Följ ert byggprojekts framsteg med regelbundna flygbilder. Ge beställare, projektledare och intressenter en tydlig bild av projektets status — rakt uppifrån."
        ctaPrimary={{ label: 'Begär offert', href: '/inspektioner-med-dronare/kontakt' }}
        stats={[
          { value: 'Betydligt', label: 'Lägre dokumentationskostnad' },
          { value: 'Snabb', label: 'Leverans per tillfälle' },
          { value: 'V/2V/M', label: 'Flexibla intervall' },
          { value: '0', label: 'Störning av pågående arbete' },
        ]}
      />

      <TrustBar
        items={[
          'EASA-certifierade fjärrpiloter',
          'Ansvarsförsäkrade',
          'Erfarenhet av byggprojekt',
          'Termisk kamera & RGB',
        ]}
      />

      <BenefitsGrid
        headline="Fördelar med drönarbaserad byggdokumentation"
        benefits={[
          {
            title: 'Överskådlig projektbild',
            description: 'Flygbilder ger en helhetsbild som inte går att få från marknivå.',
            icon: 'camera',
          },
          {
            title: 'Bättre kommunikation',
            description: 'Visuellt material förenklar rapportering till beställare och intressenter.',
            icon: 'file',
          },
          {
            title: 'Tidig upptäckt av avvikelser',
            description: 'Regelbunden dokumentation gör det lättare att upptäcka avvikelser från planritningar.',
            icon: 'shield',
          },
          {
            title: 'Tidseffektivt',
            description: 'En flygning tar minuter och stör inte pågående arbete på byggplatsen.',
            icon: 'clock',
          },
          {
            title: 'Digitalt arkiv',
            description: 'All dokumentation samlas digitalt och kan jämföras mellan tillfällen.',
            icon: 'building',
          },
          {
            title: 'Kostnadseffektivt',
            description: 'Billigare och snabbare än bemannad flygfotografering eller manuell dokumentation.',
            icon: 'chart',
          },
        ]}
      />

      <Deliverables
        headline="Leverabler"
        items={[
          {
            title: 'Flygbilder per tillfälle',
            description: 'Högupplösta bilder från flera vinklar och höjder vid varje dokumentationstillfälle.',
          },
          {
            title: 'Ortofoto',
            description: 'Geometriskt korrigerade flygbilder som kan läggas över ritningar (vid behov).',
          },
          {
            title: 'Tidslinje',
            description: 'Visuell tidslinje som visar projektets utveckling från start till mål.',
          },
          {
            title: 'Digitalt arkiv',
            description: 'Organiserat bildarkiv för enkel åtkomst och framtida referens.',
          },
        ]}
      />

      <ProcessSteps
        headline="Så fungerar det"
        steps={[
          {
            number: 1,
            title: 'Uppstartsmöte',
            description: 'Vi diskuterar projektet, frekvens och vilka leverabler ni behöver.',
          },
          {
            number: 2,
            title: 'Schemalagda flygningar',
            description: 'Regelbundna flygningar utförs enligt överenskommen tidplan.',
          },
          {
            number: 3,
            title: 'Bearbetning',
            description: 'Bildmaterialet bearbetas och organiseras efter varje flygtillfälle.',
          },
          {
            number: 4,
            title: 'Löpande leverans',
            description: 'Material levereras digitalt efter varje tillfälle.',
          },
        ]}
      />

      <FaqAccordion headline="Vanliga frågor om byggplatsdokumentation" items={faqItems} />

      <RelatedServices
        services={[
          {
            title: 'Takinspektion',
            href: '/inspektioner-med-dronare/takinspektion',
            description: 'Inspektera tak på nyproducerade eller befintliga byggnader.',
          },
          {
            title: 'Fasadinspektion',
            href: '/inspektioner-med-dronare/fasadinspektion',
            description: 'Dokumentera fasadens skick med högupplösta flygbilder.',
          },
        ]}
      />

      <CtaBand
        headline="Dokumentera ert byggprojekt med drönare"
        description="Kontakta oss för att diskutera upplägg och frekvens för ert projekt."
        ctaLabel="Begär offert"
      />
    </>
  )
}
