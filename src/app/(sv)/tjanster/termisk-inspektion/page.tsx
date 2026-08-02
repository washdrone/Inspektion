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
  title: 'Termisk inspektion med drönare — IR och infraröd',
  description:
    'Termisk inspektion med drönare och infraröd kamera. Fullradiometrisk datainsamling för byggnader och industri. EASA-certifierade piloter i hela Sverige.',
  path: '/tjanster/termisk-inspektion',
})

const faqItems = [
  {
    question: 'Vad är termisk inspektion med drönare?',
    answer:
      'Termisk inspektion innebär att en infraröd kamera monterad på en drönare mäter temperaturskillnader på ytor. Avvikelser i temperaturmönstret avslöjar problem som fukt, värmeläckage, elektriska fel och isoleringsbrister.',
  },
  {
    question: 'Vad betyder fullradiometrisk datainsamling?',
    answer:
      'Fullradiometrisk data innebär att varje pixel i den termiska bilden innehåller ett exakt temperaturvärde. Det möjliggör detaljerad efteranalys och jämförelse över tid, till skillnad från enklare termiska kameror som bara visar relativa skillnader.',
  },
  {
    question: 'Vilka tillämpningar finns för termisk inspektion?',
    answer:
      'Vanliga tillämpningar är energianalys av byggnader, fuktdetektering, kontroll av isolering, inspektion av elektriska installationer, övervakning av industriprocesser och kontroll av solcellsanläggningar.',
  },
  {
    question: 'Vilken tid på året ger bäst resultat?',
    answer:
      'För byggnadsinspektion ger kallare årstider ofta tydligare resultat tack vare större temperaturskillnad mellan inne och ute. För solceller och industri kan inspektion göras året runt under rätt förhållanden.',
  },
  {
    question: 'Kan termisk inspektion ersätta andra inspektionsmetoder?',
    answer:
      'Termisk inspektion är ett kompletterande verktyg som ger information som inte går att se med blotta ögat. I kombination med visuell inspektion ger det en mycket komplett bild.',
  },
  {
    question: 'Hur presenteras resultaten?',
    answer:
      'Ni får termogrammer med temperaturdata, RGB-referensbilder samt en analyserad rapport med identifierade avvikelser och rekommendationer.',
  },
  {
    question: 'Krävs speciella förberedelser inför inspektionen?',
    answer:
      'Det beror på tillämpningen. För byggnadsinspektion bör byggnaden vara uppvärmd och inga extrema väderomslag bör ha skett nyligen. Vi ger er detaljerade instruktioner vid bokning.',
  },
  {
    question: 'Kan ni utföra termisk inspektion inomhus?',
    answer:
      'Vår specialitet är drönarbaserad inspektion utomhus. För inomhusinspektioner, kontakta oss för att diskutera möjligheterna.',
  },
]

export default function TermiskInspektionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Termisk inspektion med drönare',
              description:
                'Termisk inspektion med drönare och infraröd kamera. Fullradiometrisk datainsamling för byggnader och industri.',
              url: '/tjanster/termisk-inspektion',
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
          { name: 'Termisk inspektion', url: '/tjanster/termisk-inspektion' },
        ]}
      />

      <Hero
        headline="Termisk inspektion med drönare och infraröd kamera"
        subheadline="Avslöja dolda problem med fullradiometrisk infraröd datainsamling. Våra EASA-certifierade piloter utför termisk inspektion av byggnader, anläggningar och infrastruktur — från energiläckage till elektriska fel."
        ctaPrimary={{ label: 'Begär offert', href: '/kontakt' }}
        ctaSecondary={{ label: 'Se hur det fungerar', href: '#process' }}
      />

      <TrustBar
        items={[
          'EASA-certifierade piloter',
          'Ansvarsförsäkrade',
          'Hela Sverige',
          'Fullradiometrisk IR-kamera',
        ]}
      />

      <BenefitsGrid
        headline="Fördelar med termisk inspektion från luften"
        subtitle="Se det osynliga — infraröd teknik avslöjar problem som inte syns med blotta ögat."
        benefits={[
          {
            icon: 'camera',
            title: 'Fullradiometrisk data',
            description:
              'Varje pixel innehåller exakt temperaturdata, vilket möjliggör detaljerad analys och jämförelse över tid.',
          },
          {
            icon: 'building',
            title: 'Bred tillämpning',
            description:
              'Byggnader, industri, energianläggningar, elnät och infrastruktur — termisk inspektion har många användningsområden.',
          },
          {
            icon: 'shield',
            title: 'Förebyggande underhåll',
            description:
              'Upptäck problem innan de leder till haverier, vattenskador eller energiförluster.',
          },
          {
            icon: 'chart',
            title: 'Mätbar data',
            description:
              'Temperaturvärden ger kvantifierbara resultat som kan följas upp och jämföras mellan inspektioner.',
          },
          {
            icon: 'clock',
            title: 'Snabb överblick',
            description:
              'Stora ytor och svåråtkomliga områden inspekteras snabbt och säkert från luften.',
          },
          {
            icon: 'file',
            title: 'Professionell rapport',
            description:
              'Tydliga termogrammer med temperaturskala, analys och åtgärdsrekommendationer.',
          },
        ]}
      />

      <ProcessSteps
        headline="Så genomförs en termisk inspektion"
        steps={[
          {
            number: 1,
            title: 'Behovsdialog',
            description:
              'Vi diskuterar vad ni vill undersöka, bedömer förutsättningarna och planerar inspektionen för optimala väderförhållanden.',
          },
          {
            number: 2,
            title: 'IR-flygning',
            description:
              'Kommersiell inspektionsklass-UAV med branschledande termisk kamera flyger över objektet och samlar in fullradiometrisk data.',
          },
          {
            number: 3,
            title: 'Termisk analys',
            description:
              'Termogrammen bearbetas och analyseras. Avvikelser identifieras, klassificeras och dokumenteras.',
          },
          {
            number: 4,
            title: 'Leverans',
            description:
              'Ni får en professionell rapport med termogrammer, temperaturdata, referensbilder och konkreta rekommendationer.',
          },
        ]}
      />


      <Deliverables
        headline="Det här ingår i leveransen"
        items={[
          {
            title: 'Fullradiometriska termogrammer',
            description:
              'Termiska bilder med exakta temperaturvärden för varje pixel, redo för djupanalys.',
          },
          {
            title: 'RGB-referensbilder',
            description:
              'Visuella bilder tagna parallellt med termogrammen för enkel orientering och jämförelse.',
          },
          {
            title: 'Avvikelseanalys',
            description:
              'Identifierade termiska avvikelser klassificerade och beskrivna med möjliga orsaker.',
          },
          {
            title: 'Temperaturprofiler',
            description:
              'Detaljerade temperaturmätningar längs utvalda linjer och punkter för kritiska områden.',
          },
          {
            title: 'Åtgärdsrekommendationer',
            description:
              'Konkreta förslag baserade på avvikelsernas typ och allvarlighetsgrad.',
          },
          {
            title: 'Digital rapport',
            description:
              'Komplett PDF-rapport med sammanfattning, metodik, resultat och bilagor.',
          },
        ]}
      />

      <FaqAccordion headline="Vanliga frågor om termisk inspektion" items={faqItems} />

      <RelatedServices
        services={[
          {
            title: 'Fuktinspektion',
            href: '/tjanster/fuktinspektion',
            description:
              'Specialiserad termisk fuktdetektering för att lokalisera dolda fuktproblem.',
          },
          {
            title: 'Takinspektion',
            href: '/tjanster/takinspektion',
            description:
              'Kombinerad visuell och termisk takinspektion med drönare.',
          },
          {
            title: 'Solcellsinspektion',
            href: '/tjanster/solcellsinspektion',
            description:
              'Termisk inspektion av solcellsanläggningar för att identifiera hotspots och defekta paneler.',
          },
        ]}
      />

      <KnowledgeLinks
        slugs={[
          'sa-fungerar-termografi-med-dronare',
          'koldbryggor-och-varmelackage',
          'dronarinspektion-pa-vintern',
        ]}
      />

      <CtaBand
        headline="Boka termisk inspektion"
        description="Avslöja dolda problem med infraröd teknik — kontakta oss för en kostnadsfri konsultation."
        ctaLabel="Begär offert"
        ctaHref="/kontakt"
      />
    </>
  )
}
