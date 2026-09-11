import type { Metadata } from 'next'
import Link from 'next/link'
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
  title: 'Guide till solcellsinspektion med drönare',
  description:
    'Hur inspekteras solceller med drönare? Vilka fel kan termisk kamera hitta? Guide till hotspots, PID, diodfel och andra vanliga avvikelser i solcellsanläggningar.',
  path: '/solcellsinspektion',
})

const faqItems = [
  {
    question: 'Vad är en solcellsinspektion med drönare?',
    answer:
      'En solcellsinspektion med drönare innebär att en EASA-certifierad pilot flyger en drönare utrustad med termisk kamera över er solcellsanläggning. Den termiska kameran registrerar temperaturskillnader i panelerna, vilket gör det möjligt att identifiera hotspots, defekta celler och andra avvikelser som påverkar produktion och säkerhet.',
  },
  {
    question: 'Vilka typer av fel kan termisk solcellsinspektion upptäcka?',
    answer:
      'Termisk inspektion av solceller kan identifiera hotspots, defekta cellsträngar, PID-degradering (Potential Induced Degradation), diodfel, smutsiga eller skuggade paneler, delaminering, mikro\u00ADsprickor som orsakar värmeavvikelser samt anslutningsproblem i kablar och kontakter.',
  },
  {
    question: 'Måste solcellerna producera el under inspektionen?',
    answer:
      'Ja, för bästa resultat ska anläggningen vara i drift under god solinstrålning. Termiska avvikelser blir tydligast när panelerna är aktiva och det finns tillräcklig temperaturskillnad mellan fungerande och defekta celler.',
  },
  {
    question: 'Hur lång tid tar en solcellsinspektion med drönare?',
    answer:
      'Tiden beror på anläggningens storlek och komplexitet. Drönare kan täcka stora ytor avsevärt snabbare än manuell inspektion från marken. Kontakta oss för en uppskattning baserad på er anläggning.',
  },
  {
    question: 'Kan ni inspektera både takmonterade och markbaserade solparker?',
    answer:
      'Ja, vi inspekterar alla typer av solcellsanläggningar — från takmonterade installationer på bostäder och kommersiella fastigheter till stora markbaserade solparker.',
  },
  {
    question: 'Hur ofta bör en solcellsanläggning inspekteras?',
    answer:
      'Regelbundna inspektioner hjälper till att identifiera och åtgärda fel innan de leder till större produktionsbortfall. Kontakta oss för att diskutera ett inspektionsintervall som passar er anläggning och era garantivillkor.',
  },
  {
    question: 'Vad innehåller inspektionsrapporten?',
    answer:
      'Rapporten innehåller fullradiometriska termogrammer, högupplösta RGB-bilder, klassificering av varje avvikande panel efter typ och allvarlighetsgrad, en översiktskarta med markerade problemområden samt åtgärdsrekommendationer.',
  },
  {
    question: 'Vad kostar en solcellsinspektion med drönare?',
    answer:
      'Priset beror på anläggningens storlek, placering och tillgänglighet. Kontakta oss på info@surveydrone.se för en skräddarsydd offert.',
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
              name: 'Solcellsinspektion med drönare och termisk kamera',
              description:
                'Professionell termisk inspektion av solcellsanläggningar med drönare. Identifiera hotspots, defekta celler och elektriska fel för att maximera energiproduktionen.',
              url: '/solcellsinspektion',
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
          { name: 'Solcellsinspektion', url: '/solcellsinspektion' },
        ]}
      />

      <Hero
        headline="Så fungerar termisk inspektion av solceller"
        subheadline="Vad kan termisk kamera avslöja om era solcellspaneler? Lär dig om hotspots, PID-degradering, diodfel och andra vanliga avvikelser — och hur drönarinspektion gör det möjligt att inspektera stora anläggningar effektivt."
        ctaPrimary={{ label: 'Se tjänst och leverans', href: '/tjanster/solcellsinspektion' }}
        ctaSecondary={{ label: 'Så fungerar det', href: '#process' }}
      />

      <TrustBar
        items={[
          'EASA-certifierade piloter',
          'Ansvarsförsäkrade',
          'Hela Sverige',
          'Fullradiometrisk termisk kamera',
        ]}
      />

      {/* AEO: Vad är solcellsinspektion med drönare? */}
      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-heading-lg sm:text-display">
              Vad är solcellsinspektion med drönare?
            </h2>
            <p className="mt-6 text-body-lg text-dark-500">
              Solcellsinspektion med drönare är en metod där en drönare utrustad med termisk kamera
              flyger över solcellsanläggningen och registrerar temperaturmönster i varje panel.
              Termisk kamera — även kallad IR-kamera — fångar infraröd strålning som avslöjar
              temperaturskillnader i panelerna. Defekta celler, hotspots och elektriska fel genererar
              värme som skiljer sig från omgivande fungerande celler, och dessa avvikelser syns
              tydligt i termogrammen.
            </p>
            <p className="mt-4 text-body-lg text-dark-500">
              Metoden gör det möjligt att inspektera stora anläggningar snabbt utan att fysiskt
              beträda taket eller anläggningen. Jämfört med manuell inspektion med handhållen termisk
              kamera ger drönarinspektion en komplett översikt av hela anläggningen och minskar risken
              att missa avvikelser.
            </p>
            <p className="mt-4 text-body-lg text-dark-500">
              Läs mer om{' '}
              <Link href="/tjanster/solcellsinspektion" className="link-inline">
                vår solcellsinspektionstjänst
              </Link>{' '}
              eller om{' '}
              <Link href="/tjanster/termisk-inspektion" className="link-inline">
                termisk inspektion
              </Link>{' '}
              generellt.
            </p>
          </div>
        </div>
      </section>

      {/* Vad kan upptäckas vid solcellsinspektion? */}
      <section className="section-padding bg-dark-50">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-heading-lg sm:text-display">
              Vad kan upptäckas vid solcellsinspektion?
            </h2>
            <p className="mt-6 text-body-lg text-dark-500">
              En termisk inspektion av solceller kan avslöja en rad fel och avvikelser som påverkar
              anläggningens prestanda och livslängd:
            </p>
            <ul className="mt-6 space-y-4 text-body text-dark-500">
              <li>
                <strong>Hotspots</strong> — Överhettade celler eller cellsträngar som indikerar
                lokala defekter. Hotspots kan leda till brandrisker om de inte åtgärdas.
              </li>
              <li>
                <strong>Defekta cellsträngar</strong> — Enstaka eller flera celler som inte fungerar
                korrekt, vilket resulterar i minskad effekt från panelen.
              </li>
              <li>
                <strong>PID (Potential Induced Degradation)</strong> — Spänningsinducerad degradering
                som gradvis försämrar panelens prestanda över tid.
              </li>
              <li>
                <strong>Diodfel</strong> — Felaktiga bypass-dioder som orsakar ojämn
                temperaturfördelning i panelen.
              </li>
              <li>
                <strong>Smutsiga och skuggade paneler</strong> — Smuts, löv, fågelspillning eller
                skuggor som blockerar solinstrålningen och skapar värmeavvikelser.
              </li>
              <li>
                <strong>Delaminering</strong> — Separation mellan panelens skikt som syns som
                avvikande temperaturmönster.
              </li>
              <li>
                <strong>Anslutningsproblem</strong> — Resistiva anslutningar i kablar och kontakter
                som genererar överskottsvärme.
              </li>
              <li>
                <strong>Mikro&shy;sprickor</strong> — Små sprickor i cellerna som kan utvecklas till
                fullständiga brott och produktionsbortfall.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Fördelar med solcellsinspektion via drönare"
        subtitle="Effektiv, säker och heltäckande inspektion av er solcellsanläggning."
        benefits={[
          {
            icon: 'camera',
            title: 'Termisk hotspot-detektion',
            description:
              'Termisk kamera identifierar överhettade celler och anslutningar som påverkar produktion och säkerhet.',
          },
          {
            icon: 'chart',
            title: 'Skydda er investering',
            description:
              'Identifiera och åtgärda fel tidigt för att säkerställa att anläggningen levererar optimal energiproduktion under hela livslängden.',
          },
          {
            icon: 'clock',
            title: 'Stora ytor på kort tid',
            description:
              'Drönaren täcker stora anläggningar avsevärt snabbare än manuell inspektion från marknivå.',
          },
          {
            icon: 'shield',
            title: 'Säker inspektion utan tillträde till tak',
            description:
              'Ingen personal behöver beträda taket. Risken för fallskador elimineras och anläggningen påverkas inte.',
          },
          {
            icon: 'file',
            title: 'Detaljerad panelspecifik rapport',
            description:
              'Varje avvikande panel dokumenteras med termogram, RGB-bild och klassificering efter allvarlighetsgrad.',
          },
          {
            icon: 'building',
            title: 'Alla anläggningstyper',
            description:
              'Takmonterade installationer, markbaserade solparker och kommersiella anläggningar i hela Sverige.',
          },
        ]}
      />

      <ProcessSteps
        id="process"
        headline="Så genomförs en solcellsinspektion med drönare"
        steps={[
          {
            number: 1,
            title: 'Kontakt och planering',
            description:
              'Vi kartlägger anläggningens storlek och layout, kontrollerar väderförhållanden och planerar flygningen för optimal datainsamling.',
          },
          {
            number: 2,
            title: 'Termisk flygning',
            description:
              'Vår EASA-certifierade pilot flyger drönaren systematiskt över anläggningen och samlar in fullradiometrisk termisk data samt högupplösta RGB-bilder.',
          },
          {
            number: 3,
            title: 'Analys och klassificering',
            description:
              'Termogrammen analyseras panel för panel. Hotspots, defekta strängar och övriga anomalier identifieras och klassificeras.',
          },
          {
            number: 4,
            title: 'Rapport och rekommendationer',
            description:
              'Ni får en komplett rapport med termiska kartor, panelklassificering, översiktskarta och prioriterade åtgärdsrekommendationer.',
          },
        ]}
      />

      <Deliverables
        headline="Det här får ni i leveransen"
        items={[
          {
            title: 'Fullradiometriska termogrammer',
            description:
              'Termiska bilder av hela anläggningen med tydligt markerade hotspots och avvikelser.',
          },
          {
            title: 'Högupplösta RGB-bilder',
            description:
              'Visuella bilder som kompletterar den termiska analysen och underlättar identifiering av panelernas fysiska skick.',
          },
          {
            title: 'Panelklassificering',
            description:
              'Varje avvikande panel klassificeras efter feltyp och allvarlighetsgrad för enkel prioritering.',
          },
          {
            title: 'Översiktskarta',
            description:
              'Karta över hela anläggningen med markerade problemområden och panelpositioner.',
          },
          {
            title: 'Åtgärdsrekommendationer',
            description:
              'Prioriterade förslag för reparation, rengöring eller utbyte baserat på inspektionens resultat.',
          },
          {
            title: 'Digital PDF-rapport',
            description:
              'Komplett rapport med sammanfattning, detaljerade analyser, bilder och bilagor — redo att delas med driftansvariga och underleverantörer.',
          },
        ]}
      />

      <FaqAccordion headline="Vanliga frågor om solcellsinspektion med drönare" items={faqItems} />

      <RelatedServices
        services={[
          {
            title: 'Termisk inspektion',
            href: '/termisk-inspektion',
            description:
              'Guide till termisk inspektion — hur infraröd teknik fungerar för byggnader och anläggningar.',
          },
          {
            title: 'Takinspektion med drönare',
            href: '/takinspektion-med-dronare',
            description:
              'Kombinera solcellsinspektion med takinspektion för en komplett kontroll av takytan.',
          },
          {
            title: 'Vad kostar drönarinspektion?',
            href: '/vad-kostar-dronarinspektion',
            description:
              'Prisguide — vilka faktorer som påverkar kostnaden för solcellsinspektion och andra inspektioner.',
          },
        ]}
      />

      <CtaBand
        headline="Boka solcellsinspektion med drönare"
        description="Kontakta oss för en offert anpassad efter er anläggning. Vi inspekterar solceller i hela Sverige."
        ctaLabel="Begär offert"
        ctaHref="/kontakt"
      />
    </>
  )
}
