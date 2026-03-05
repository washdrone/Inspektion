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
  title: 'Solcellsinspektion Drönare | SurveyDrone — Termisk Analys',
  description:
    'Solcellsinspektion med drönare och termisk kamera. Hitta hotspots, defekta paneler och prestandaproblem. Optimera er solcellsanläggning. PDRA S-01-certifierat.',
  path: '/inspektioner-med-dronare/solcellsinspektion',
})

const faqItems = [
  {
    question: 'Hur fungerar solcellsinspektion med termisk kamera?',
    answer: 'Vi flyger med drönare utrustade med termisk kamera (IR) över solcellsanläggningen. Termiska bilder avslöjar hotspots — överhettade celler som indikerar defekter, dåliga lödfogar eller interna kortslutningar. Samtidigt dokumenterar RGB-kameran visuella skador som sprickor och delaminering.',
  },
  {
    question: 'Vad är en hotspot i solceller?',
    answer: 'En hotspot är ett område på en solcellspanel som är betydligt varmare än omgivande celler. Hotspots orsakas vanligen av celldefekter, skuggning, smuts eller dåliga elektriska anslutningar. De minskar panelens effekt och kan i värsta fall orsaka brand.',
  },
  {
    question: 'Hur ofta bör solceller inspekteras?',
    answer: 'Vi rekommenderar en inspektion minst en gång per år för att säkerställa optimal prestanda. Vid äldre anläggningar eller efter extremväder kan tätare intervall vara motiverat. Regelbundna termiska inspektioner kan öka anläggningens livslängd betydligt.',
  },
  {
    question: 'Kan ni inspektera stora solcellsparker?',
    answer: 'Ja, drönare med termisk kamera är särskilt effektiva för stora anläggningar. Vi kan inspektera solcellsparker med hundratals eller tusentals paneler på kort tid — upp till 10x snabbare än manuell kontroll.',
  },
  {
    question: 'Vad kostar solcellsinspektion med drönare?',
    answer: 'Priset beror på anläggningens storlek och typ. Termisk inspektion av solceller ger utmärkt ROI genom att identifiera defekta paneler som minskar total energiproduktion. Kontakta oss för en kostnadsfri offert.',
  },
  {
    question: 'Vilka typer av problem kan termisk kamera hitta i solceller?',
    answer: 'Termisk kamera identifierar hotspots, defekta bypassdioder, delaminering, cellsprickor, PID-effekter (Potential Induced Degradation), smutsiga eller skuggade paneler och dåliga kabeldragningar. Allt detta påverkar anläggningens totala effekt.',
  },
  {
    question: 'Behöver anläggningen stängas av under inspektionen?',
    answer: 'Nej, termisk inspektion av solceller utförs medan anläggningen är i drift — faktiskt krävs det att panelerna producerar el för att termisk analys ska vara effektiv. Ingen driftstörning eller produktionsbortfall.',
  },
  {
    question: 'Vad ingår i rapporten från en solcellsinspektion?',
    answer: 'Rapporten innehåller termiska bilder med markerade hotspots, RGB-bilder av visuella skador, en hotspot-lista med prioritering, rekommenderade åtgärder per panel och en sammanfattning av anläggningens övergripande status.',
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
              name: 'Solcellsinspektion med Termisk Kamera',
              description: 'Solcellsinspektion med drönare och termisk kamera. Hitta hotspots, defekta paneler och optimera prestanda.',
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
        headline="Solcellsinspektion med Termisk Kamera — Hitta Hotspots & Defekta Paneler"
        subheadline="Identifiera hotspots, defekta celler och prestandaproblem i er solcellsanläggning med termisk kamera och drönare. Optimera energiproduktionen och förläng anläggningens livslängd."
        ctaPrimary={{ label: 'Begär offert', href: '/inspektioner-med-dronare/kontakt' }}
        stats={[
          { value: 'Upp till 10x', label: 'Snabbare vs manuell kontroll' },
          { value: '48h', label: 'Rapportleverans' },
          { value: '0', label: 'Driftstopp krävs' },
          { value: '0', label: 'Arbete på höjd' },
        ]}
      />

      <TrustBar
        items={[
          'PDRA S-01-certifierade',
          'EASA-certifierade fjärrpiloter',
          'Termisk kamera (IR)',
          'Alla anläggningsstorlekar',
        ]}
      />

      <BenefitsGrid
        headline="Varför inspektera solceller med termisk kamera?"
        benefits={[
          {
            title: 'Hitta dolda hotspots',
            description: 'Termisk kamera avslöjar överhettade celler som är osynliga för blotta ögat men minskar anläggningens effekt.',
            icon: 'camera',
          },
          {
            title: 'Snabb kontroll av stora ytor',
            description: 'Inspektera hundratals paneler på en bråkdel av tiden jämfört med manuell kontroll.',
            icon: 'clock',
          },
          {
            title: 'Säker inspektion',
            description: 'Ingen behöver klättra på taket för att kontrollera panelerna. All data samlas från luften.',
            icon: 'shield',
          },
          {
            title: 'Optimerad energiproduktion',
            description: 'Identifiera och åtgärda defekta paneler för att maximera er anläggnings avkastning.',
            icon: 'chart',
          },
          {
            title: 'Certifierad rapport',
            description: 'Detaljerad rapport med termiska bilder, hotspot-lista och åtgärdsförslag.',
            icon: 'file',
          },
          {
            title: 'Ingen driftstörning',
            description: 'Inspektionen utförs medan anläggningen producerar — ingen nedstängning behövs.',
            icon: 'building',
          },
        ]}
      />

      <Deliverables
        headline="Det här ingår i en solcellsinspektion"
        items={[
          {
            title: 'Termisk rapport',
            description: 'Termiska bilder med markerade hotspots och temperaturavvikelser per panel.',
          },
          {
            title: 'RGB-dokumentation',
            description: 'Högupplösta flygbilder som visar visuella skador, sprickor och nedsmutsning.',
          },
          {
            title: 'Hotspot-lista',
            description: 'Detaljerad lista över identifierade hotspots med prioritering och position.',
          },
          {
            title: 'Rekommenderade åtgärder',
            description: 'Förslag på rengöring, reparation eller byte av identifierade paneler.',
          },
        ]}
      />

      <ProcessSteps
        headline="Så inspekterar vi solceller med termisk kamera"
        steps={[
          {
            number: 1,
            title: 'Behovsanalys',
            description: 'Vi diskuterar anläggningens storlek, ålder och eventuella kända problem.',
          },
          {
            number: 2,
            title: 'Termisk & visuell flygning',
            description: 'Systematisk överflygning med termisk kamera och RGB-kamera under soliga förhållanden.',
          },
          {
            number: 3,
            title: 'Termisk analys',
            description: 'Granskning av termiska bilder för att identifiera hotspots, defekter och avvikelser.',
          },
          {
            number: 4,
            title: 'Rapport & åtgärdsplan',
            description: 'Detaljerad rapport med termiska bilder, hotspot-lista och rekommenderade åtgärder.',
          },
        ]}
      />

      <FaqAccordion headline="Vanliga frågor om solcellsinspektion" items={faqItems} />

      <RelatedServices
        services={[
          {
            title: 'Takinspektion med drönare',
            href: '/inspektioner-med-dronare/takinspektion',
            description: 'Inspektera taket där era solceller är monterade — identifiera fukt och köldbryggor.',
          },
          {
            title: 'Industriell inspektion',
            href: '/inspektioner-med-dronare/industriell-inspektion',
            description: 'Inspektera svåråtkomliga industrianläggningar utan driftstopp.',
          },
          {
            title: 'Fasadinspektion med drönare',
            href: '/inspektioner-med-dronare/fasadinspektion',
            description: 'Dokumentera fasader utan ställningar eller skylift.',
          },
        ]}
      />

      <CtaBand
        headline="Optimera era solcellers prestanda"
        description="Boka en termisk inspektion och säkerställ att er anläggning producerar maximalt. Kostnadsfri offert."
        ctaLabel="Begär offert"
      />
    </>
  )
}
