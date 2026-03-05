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
  title: 'Solcellsinspektion med drönare och termisk kamera',
  description:
    'Termisk inspektion av solceller med drönare. Hitta hotspots, defekta celler och produktionsbortfall. EASA-certifierade piloter. Hela Sverige.',
  path: '/tjanster/solcellsinspektion',
})

const faqItems = [
  {
    question: 'Hur fungerar termisk inspektion av solceller?',
    answer:
      'En branschledande termisk kamera monterad på drönaren fångar temperaturskillnader i varje panel. Defekta celler, hotspots och anslutningsproblem syns som avvikelser i det termiska mönstret.',
  },
  {
    question: 'Vilka typer av fel kan ni hitta?',
    answer:
      'Vi identifierar hotspots, defekta cellsträngar, PID-degradering (Potential Induced Degradation), mikro­sprickor som ger värmeavvikelser, smutsiga eller skuggade paneler, samt anslutningsproblem i kablar och kontakter.',
  },
  {
    question: 'Måste solcellerna vara i drift under inspektionen?',
    answer:
      'Ja, för bästa resultat bör anläggningen vara i drift och solen bör lysa. Termiska avvikelser är tydligast när panelerna producerar energi under god solinstrålning.',
  },
  {
    question: 'Hur stora anläggningar kan ni inspektera?',
    answer:
      'Vi inspekterar allt från villatak med solpaneler till stora solparker och kommersiella takanläggningar. Kontakta oss för en plan anpassad efter er anläggnings storlek.',
  },
  {
    question: 'Hur ofta bör solcellsanläggningen inspekteras?',
    answer:
      'Regelbundna inspektioner hjälper till att fånga upp fel tidigt och maximera energiproduktionen. Kontakta oss för att diskutera ett inspektionsintervall som passar er anläggning.',
  },
  {
    question: 'Kan inspektionen visa hur mycket produktion vi förlorar?',
    answer:
      'Rapporten identifierar defekta paneler och klassificerar avvikelserna, vilket ger er en grund för att uppskatta produktionsbortfall tillsammans med er driftansvarige.',
  },
  {
    question: 'Fungerar det på alla typer av solcellspaneler?',
    answer:
      'Ja, metoden fungerar på alla vanliga paneltyper — mono­kristallina, polykristallina och tunnfilmsmoduler. Den termiska analysen anpassas efter panelernas egenskaper.',
  },
  {
    question: 'Vad kostar en solcellsinspektion?',
    answer:
      'Priset beror på anläggningens storlek och plats. Kontakta oss för en offert anpassad efter er situation.',
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
              description:
                'Termisk inspektion av solcellsanläggningar med drönare. Hitta hotspots, defekta celler och produktionsbortfall.',
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
        headline="Solcellsinspektion med drönare och termisk kamera"
        subheadline="Maximera er energiproduktion genom att identifiera hotspots, defekta celler och dolda fel med fullradiometrisk termisk datainsamling. Våra EASA-certifierade piloter inspekterar hela anläggningen effektivt från luften."
        ctaPrimary={{ label: 'Begär offert', href: '/kontakt' }}
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

      <BenefitsGrid
        headline="Varför inspektera solceller med drönare?"
        subtitle="Snabb och exakt inspektion som hjälper er att behålla optimal produktion."
        benefits={[
          {
            icon: 'camera',
            title: 'Termisk hotspot-detektion',
            description:
              'Branschledande termisk kamera identifierar överhettade celler och anslutningar som påverkar produktion och säkerhet.',
          },
          {
            icon: 'chart',
            title: 'Maximera produktionen',
            description:
              'Genom att hitta och åtgärda fel tidigt säkerställer ni att anläggningen levererar optimal energiproduktion.',
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
              'Regelbunden inspektion förhindrar att små fel utvecklas till allvarliga problem och kostsamma reparationer.',
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

      {/* Live-visning */}
      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-heading-lg sm:text-display">Följ inspektionen i realtid</h2>
            <p className="mt-6 text-body-lg text-dark-500">
              Via vår säkra live-länk kan ni följa solcellsinspektionen i realtid, oavsett var ni
              befinner er. Idealiskt för energibolag och fastighetsägare som förvaltar anläggningar
              på flera platser. Driftansvariga kan se termiska avvikelser direkt och diskutera
              fynd med piloten under flygningen.
            </p>
          </div>
        </div>
      </section>

      <Deliverables
        headline="Det här ingår i leveransen"
        items={[
          {
            title: 'Termiska kartor',
            description:
              'Fullradiometriska termogrammer av hela anläggningen med tydligt markerade hotspots.',
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
              'Prioriterade förslag för reparation och utbyte baserat på inspektionens resultat.',
          },
          {
            title: 'Digital rapport',
            description:
              'Komplett PDF-rapport med sammanfattning, analyser och bilagor.',
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

      <CtaBand
        headline="Maximera er solcellsproduktion"
        description="Boka en termisk inspektion av era solceller — kontakta oss för offert."
        ctaLabel="Begär offert"
        ctaHref="/kontakt"
      />
    </>
  )
}
