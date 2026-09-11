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
import { KnowledgeLinks } from '@/components/KnowledgeLinks'

export const metadata: Metadata = createMetadata({
  title: "Solcellsinspektion med drönare och termografi",
  description:
    "Termiska och visuella bilder av solcellsanläggningar. Få markerade avvikelser och underlag för fortsatt felsökning. Begär offert från SurveyDrone.",
  path: '/tjanster/solcellsinspektion',
})

const faqItems = [
  {
    "question": "Vad visar en solcellsinspektion?",
    "answer": "Vi dokumenterar termiska avvikelser och synliga brister med värmekamera och RGB-bilder. Fynden kan användas för att lokalisera områden som behöver kontrolleras. Den exakta felorsaken kan kräva kompletterande elteknisk felsökning."
  },
  {
    "question": "Måste anläggningen vara i drift?",
    "answer": "För termisk inspektion behöver anläggningens drift och solinstrålning ge användbara mätförhållanden. Vi stämmer av förutsättningarna och flygtidpunkten inför uppdraget."
  },
  {
    "question": "Vilket underlag behöver ni inför offert?",
    "answer": "Ange plats, ungefärlig storlek, typ av anläggning och vad ni vill undersöka. Om layout, panelinformation eller tidigare fynd finns kan det hjälpa planeringen. Börja med en beskrivning i kontaktformuläret."
  },
  {
    "question": "Hur hittar vi rätt panel efter inspektionen?",
    "answer": "Rapportens markerade fynd kopplas till anläggningens layout. Vi stämmer av identifiering, kartunderlag och önskat format så att driftorganisationen kan följa upp fynden."
  },
  {
    "question": "Ingår en fullständig elteknisk besiktning?",
    "answer": "Tjänsten omfattar den visuella och termiska inspektion som anges i offerten. Kompletterande eltekniska mätningar, reparationer och ansvar för vidare felsökning behöver avtalas separat."
  },
  {
    "question": "Kan rapporten ensam beräkna produktionsförlust?",
    "answer": "Nej. Bildfynden kan ge underlag för fortsatt analys, men produktionsbortfall behöver bedömas tillsammans med driftdata och vid behov ytterligare mätningar."
  },
  {
    "question": "Vad styr pris och leveranstid?",
    "answer": "Anläggningens storlek, plats, tillgänglighet, mätförhållanden och rapportkrav påverkar uppdraget. Vi anger pris, innehåll och tidplan i offerten."
  }
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
              description:
                "Vi kombinerar termiska och visuella bilder för att dokumentera temperaturavvikelser och synliga brister i solcellsanläggningar. Ni får en rapport med markerade fynd och rekommenderad uppföljning som hjälper driftorganisationen att prioritera fortsatt felsökning.",
              url: '/tjanster/solcellsinspektion',
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(faqItems)),
        }}
      />

      <Breadcrumbs
        items={[
          { name: 'Hem', url: '/' },
          { name: 'Solcellsinspektion', url: '/tjanster/solcellsinspektion' },
        ]}
      />

      <Hero
        headline="Solcellsinspektion med drönare – lokalisera avvikelser i anläggningen"
        subheadline="Vi kombinerar termiska och visuella bilder för att dokumentera temperaturavvikelser och synliga brister i solcellsanläggningar. Ni får en rapport med markerade fynd och rekommenderad uppföljning som hjälper driftorganisationen att prioritera fortsatt felsökning."
        ctaPrimary={{ label: "Begär offert på solcellsinspektion", href: '/kontakt?service=solcellsinspektion' }}
        ctaSecondary={{ label: 'Se hur det fungerar', href: '#process' }}
      />

      <TrustBar
        items={[
          'EASA-certifierade piloter',
          'Ansvarsförsäkrade',
          'Hela Sverige',
          'Fullradiometrisk termisk kamera',
        ]}
      />

      <Deliverables
        headline="Leveransens delar – omfattning enligt offert"
        items={[
          {
            title: 'Termiska kartor',
            description:
              'Termogram av de överenskomna ytorna med markerade temperaturavvikelser.',
          },
          {
            title: 'RGB-bilder',
            description:
              'Högupplösta visuella bilder för att komplettera den termiska analysen.',
          },
          {
            title: 'Panelklassificering',
            description:
              'Varje panel med avvikelse klassificeras efter typ och allvarlighetsgrad.',
          },
          {
            title: 'Layout-karta',
            description:
              'Översiktskarta med anläggningens layout och markerade problemområden.',
          },
          {
            title: 'Åtgärdsrekommendationer',
            description:
              'Rekommenderad uppföljning av fynd. Behov av reparation och utbyte bedöms efter erforderlig felsökning.',
          },
          {
            title: 'Digital rapport',
            description:
              'Komplett PDF-rapport med sammanfattning, analyser och bilagor.',
          },
        ]}
      />

      <BenefitsGrid
        headline="Varför inspektera solceller med drönare?"
        subtitle="Lokaliserade fynd och tydligt underlag för driftorganisationens fortsatta arbete."
        benefits={[
          {
            icon: 'camera',
            title: 'Termisk hotspot-detektion',
            description:
              'Värmekameran visar temperaturavvikelser som analyseras tillsammans med visuella bilder och driftförhållanden.',
          },
          {
            icon: 'chart',
            title: 'Prioritera felsökning',
            description:
              'Markerade fynd hjälper driftorganisationen att välja var kompletterande kontroll och åtgärder behövs.',
          },
          {
            icon: 'clock',
            title: 'Stor yta på kort tid',
            description:
              'Drönaren täcker stora anläggningar snabbt. Panel för panel-inspektion från marken skulle ta avsevärt längre tid.',
          },
          {
            icon: 'shield',
            title: 'Förebyggande underhåll',
            description:
              'Återkommande dokumentation kan hjälpa er att upptäcka och följa förändringar mellan inspektioner.',
          },
          {
            icon: 'file',
            title: 'Panelspecifik rapport',
            description:
              'Varje panel med avvikelse dokumenteras och klassificeras för enkel uppföljning och åtgärd.',
          },
          {
            icon: 'building',
            title: 'Alla anläggningstyper',
            description:
              'Takbaserade installationer, markbaserade solparker och kommersiella anläggningar.',
          },
        ]}
      />

      <ProcessSteps
        id="process"
        headline="Så genomförs en solcellsinspektion"
        steps={[
          {
            number: 1,
            title: 'Planering',
            description:
              'Vi kartlägger anläggningens layout, bedömer väderförhållanden och planerar flygningen för optimal datainsamling.',
          },
          {
            number: 2,
            title: 'Termisk flygning',
            description:
              'Drönaren flyger systematiskt över anläggningen och samlar in fullradiometrisk termisk data samt RGB-bilder.',
          },
          {
            number: 3,
            title: 'Analys',
            description:
              'Termogrammen analyseras panel för panel. Hotspots, defekta strängar och anomalier klassificeras.',
          },
          {
            number: 4,
            title: 'Rapport',
            description:
              'Ni får en detaljerad rapport med termiska kartor, skadeklassificering och åtgärdsrekommendationer.',
          },
        ]}
      />




      <FaqAccordion headline="Vanliga frågor om solcellsinspektion" items={faqItems} />

      <RelatedServices
        services={[
          {
            title: 'Termisk inspektion',
            href: '/tjanster/termisk-inspektion',
            description:
              'Generell infraröd inspektion för byggnader, anläggningar och teknisk infrastruktur.',
          },
          {
            title: 'Takinspektion',
            href: '/tjanster/takinspektion',
            description:
              'Kombinera solcellsinspektion med takinspektion för en komplett kontroll av takytan.',
          },
          {
            title: 'Industriinspektion',
            href: '/tjanster/industriinspektion',
            description:
              'Inspektion av industrianläggningar, rörledningar och teknisk utrustning.',
          },
        ]}
      />

      <KnowledgeLinks
        slugs={[
          'hotspots-i-solceller',
          'besiktning-av-solcellsanlaggning-checklista',
          'sa-fungerar-termografi-med-dronare',
        ]}
      />

      <CtaBand
        headline="Lokalisera avvikelser och planera nästa steg"
        description="Boka en termisk inspektion av era solceller — kontakta oss för offert."
        ctaLabel="Begär offert på solcellsinspektion"
        ctaHref="/kontakt?service=solcellsinspektion"
      />
    </>
  )
}
