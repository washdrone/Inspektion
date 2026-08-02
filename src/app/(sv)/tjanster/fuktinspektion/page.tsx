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
  title: 'Fuktinspektion med drönare — hitta dolda läckor',
  description:
    'Fuktinspektion med drönare och termisk kamera. Hitta dolda läckor och fuktskador i tak och fasad. EASA-certifierade piloter. Hela Sverige.',
  path: '/tjanster/fuktinspektion',
})

const faqItems = [
  {
    question: 'Hur kan en termisk kamera hitta fukt?',
    answer:
      'Fuktiga material har annorlunda termiska egenskaper än torra. Vatten i en konstruktion påverkar hur snabbt ytan kyls ner eller värms upp, vilket skapar mätbara temperaturskillnader i termogrammet.',
  },
  {
    question: 'Vilka typer av fuktskador kan ni upptäcka?',
    answer:
      'Vi kan identifiera fuktinträngning i tak, vattensamlingar under tätskikt, fukt i fasadkonstruktioner, bristande dränering och områden med förhöjd fuktbelastning.',
  },
  {
    question: 'Fungerar fuktinspektion på alla byggnadsmaterial?',
    answer:
      'Termisk fuktdetektering fungerar på de flesta byggnadsmaterial, inklusive betong, tegel, puts, trä och tätskikt. Resultatens tydlighet kan variera beroende på material och förhållanden.',
  },
  {
    question: 'När på året bör man genomföra fuktinspektion?',
    answer:
      'Fuktinspektion kan genomföras under stora delar av året. Temperaturskillnader mellan dag och natt förbättrar resultaten. Vi rekommenderar att undvika inspektion direkt efter regn då ytfukt kan ge missvisande resultat.',
  },
  {
    question: 'Kan drönaren hitta fukt som inte syns inifrån byggnaden?',
    answer:
      'Ja, det är en av de stora fördelarna. Termisk inspektion från utsidan kan avslöja fukt som ännu inte trängt igenom till insidan och därmed inte syns vid en inomhusbesiktning.',
  },
  {
    question: 'Behöver vi komplettera med andra fuktmätningar?',
    answer:
      'Termisk inspektion ger en utmärkt översikt och pekar ut riskområden. Vid behov kan dessa sedan verifieras med punktmätningar (t.ex. fuktmätare) för att bekräfta och kvantifiera fukthalten.',
  },
  {
    question: 'Kan ni inspektera stora fastighetsbestånd?',
    answer:
      'Absolut. Drönare är särskilt effektiva för att inspektera många byggnader under samma period. Kontakta oss för att diskutera ett upplägg för er fastighetsportfölj.',
  },
  {
    question: 'Hur skiljer sig fuktinspektion från vanlig takinspektion?',
    answer:
      'Fuktinspektion fokuserar specifikt på att identifiera och kartlägga fuktrelaterade problem med optimerade flygmönster och analystekniker, medan en takinspektion ger en bredare bedömning av takets skick.',
  },
]

export default function FuktinspektionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Fuktinspektion med drönare',
              description:
                'Fuktinspektion med drönare och termisk kamera. Hitta dolda läckor och fuktskador i tak och fasad.',
              url: '/tjanster/fuktinspektion',
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
          { name: 'Fuktinspektion', url: '/tjanster/fuktinspektion' },
        ]}
      />

      <Hero
        headline="Fuktinspektion med drönare — hitta dolda läckor"
        subheadline="Lokalisera fuktinträngning, läckor och vattenansamlingar i tak och fasad med termisk kamera. Våra EASA-certifierade piloter kartlägger fuktproblem snabbt och utan att öppna konstruktionen."
        ctaPrimary={{ label: 'Begär offert', href: '/kontakt' }}
        ctaSecondary={{ label: 'Se hur det fungerar', href: '#process' }}
      />

      <TrustBar
        items={[
          'EASA-certifierade piloter',
          'Ansvarsförsäkrade',
          'Hela Sverige',
          'Termisk fuktdetektering',
        ]}
      />

      <BenefitsGrid
        headline="Varför fuktinspektion med drönare?"
        subtitle="Hitta fuktproblem tidigt — innan de orsakar omfattande och kostsamma skador."
        benefits={[
          {
            icon: 'camera',
            title: 'Dolda läckor synliggörs',
            description:
              'Termisk kamera avslöjar fukt som inte syns vid visuell inspektion och som ännu inte trängt igenom till insidan.',
          },
          {
            icon: 'shield',
            title: 'Icke-destruktiv metod',
            description:
              'Ingen rivning eller provtagning krävs för att lokalisera fuktområden. Konstruktionen lämnas intakt.',
          },
          {
            icon: 'chart',
            title: 'Kartläggning av fuktområden',
            description:
              'Termogrammen ger en visuell karta över fuktens utbredning, vilket underlättar planering av åtgärder.',
          },
          {
            icon: 'clock',
            title: 'Snabb identifiering',
            description:
              'Stora takytor och fasader skannas på kort tid. Fuktområden identifieras under flygningen.',
          },
          {
            icon: 'building',
            title: 'Förvaltningseffektivt',
            description:
              'Inspektera hela fastighetsbestånd systematiskt och prioritera underhållsinsatser baserat på data.',
          },
          {
            icon: 'file',
            title: 'Underlag för åtgärd',
            description:
              'Rapporten ger ett tydligt underlag för att planera reparationer och följa upp efter utförda åtgärder.',
          },
        ]}
      />

      <ProcessSteps
        headline="Så genomförs en fuktinspektion"
        steps={[
          {
            number: 1,
            title: 'Förplanering',
            description:
              'Vi bedömer fastigheten, väderförhållanden och väljer optimal tidpunkt för tydliga termiska kontraster.',
          },
          {
            number: 2,
            title: 'Termisk flygning',
            description:
              'Drönaren flyger över tak och fasad med branschledande termisk kamera och samlar in fullradiometrisk data.',
          },
          {
            number: 3,
            title: 'Fuktanalys',
            description:
              'Termogrammen analyseras för att identifiera och avgränsa områden med fuktavvikelser.',
          },
          {
            number: 4,
            title: 'Rapport',
            description:
              'Ni får en rapport med fuktkarta, termogrammer, bedömning och rekommenderade åtgärder.',
          },
        ]}
      />

      {/* Live-visning */}
      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-heading-lg sm:text-display">Följ fuktinspektionen live</h2>
            <p className="mt-6 text-body-lg text-dark-500">
              Ni kan följa fuktinspektionen i realtid via en säker länk. Fastighetsförvaltare och
              driftansvariga ser direkt var termiska avvikelser uppstår, utan att behöva vara på
              plats. Det underlättar snabba beslut om akuta åtgärder vid allvarliga läckor och
              gör det enkelt att involvera flera intressenter.
            </p>
          </div>
        </div>
      </section>

      <Deliverables
        headline="Det här ingår i leveransen"
        items={[
          {
            title: 'Fuktkarta',
            description:
              'Visuell karta med markerade fuktområden och deras utbredning på tak och fasad.',
          },
          {
            title: 'Termogrammer',
            description:
              'Fullradiometriska termiska bilder med temperaturdata för detaljerad efteranalys.',
          },
          {
            title: 'RGB-referensbilder',
            description:
              'Visuella bilder för att koppla termiska fynd till konkreta platser på byggnaden.',
          },
          {
            title: 'Riskbedömning',
            description:
              'Klassificering av fuktområden efter allvarlighetsgrad och risk för konstruktionsskador.',
          },
          {
            title: 'Åtgärdsrekommendationer',
            description:
              'Förslag på reparationer och förebyggande åtgärder, prioriterade efter angelägenhet.',
          },
          {
            title: 'Digital rapport',
            description:
              'Komplett inspektionsrapport i PDF-format med sammanfattning och detaljerade bilagor.',
          },
        ]}
      />

      <FaqAccordion headline="Vanliga frågor om fuktinspektion" items={faqItems} />

      <RelatedServices
        services={[
          {
            title: 'Takinspektion',
            href: '/tjanster/takinspektion',
            description:
              'Komplett takinspektion som kombinerar visuell och termisk analys.',
          },
          {
            title: 'Termisk inspektion',
            href: '/tjanster/termisk-inspektion',
            description:
              'Generell infraröd inspektion för att hitta energiläckage, elfel och andra dolda problem.',
          },
          {
            title: 'Fasadinspektion',
            href: '/tjanster/fasadinspektion',
            description:
              'Inspektion av fasader för att identifiera sprickor, putssläpp och fuktgenomslag.',
          },
        ]}
      />

      <KnowledgeLinks
        slugs={[
          'hitta-fuktskador-med-termisk-inspektion',
          'koldbryggor-och-varmelackage',
          'sa-fungerar-termografi-med-dronare',
        ]}
      />

      <CtaBand
        headline="Hitta fuktproblem innan de växer"
        description="Boka en fuktinspektion med drönare — kontakta oss för offert."
        ctaLabel="Begär offert"
        ctaHref="/kontakt"
      />
    </>
  )
}
