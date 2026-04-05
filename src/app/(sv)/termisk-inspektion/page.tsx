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
  title: 'Termisk inspektion med drönare — Termografi för fastigheter och industri',
  description:
    'Termisk inspektion med drönare och värmekamera. Fullradiometrisk datainsamling avslöjar fukt, köldbryggor, isoleringsbrister och hotspots. EASA-certifierade piloter i hela Sverige.',
  path: '/termisk-inspektion',
})

const faqItems = [
  {
    question: 'Vad är termisk inspektion med drönare?',
    answer:
      'Termisk inspektion med drönare innebär att en infraröd kamera monterad på en UAV samlar in fullradiometrisk temperaturdata från byggnader, anläggningar eller infrastruktur. Varje pixel i bilden innehåller ett exakt temperaturvärde, vilket gör det möjligt att identifiera avvikelser som fukt, köldbryggor, isoleringsbrister och elektriska fel.',
  },
  {
    question: 'Vad kan termisk inspektion upptäcka?',
    answer:
      'Termisk inspektion kan avslöja fuktinträngning i tak och fasader, köldbryggor i byggnadsomslutningen, bristfällig eller skadad isolering, hotspots i solcellsanläggningar, överhettade komponenter i elektriska installationer samt läckor i fjärrvärme- och kylsystem.',
  },
  {
    question: 'Vad betyder fullradiometrisk datainsamling?',
    answer:
      'Fullradiometrisk data innebär att varje pixel i den termiska bilden innehåller ett absolut temperaturvärde. Det möjliggör detaljerad efteranalys, temperaturjämförelser mellan olika inspektionstillfällen och kvantifierbara resultat — till skillnad från enklare termiska kameror som bara visar relativa skillnader.',
  },
  {
    question: 'När på året bör termisk inspektion genomföras?',
    answer:
      'För byggnader och fasader ger kallare årstider ofta tydligare resultat, eftersom temperaturskillnaden mellan inne och ute förstärker synligheten av köldbryggor och isoleringsbrister. För solcellsanläggningar och industriella tillämpningar kan inspektion genomföras året runt, förutsatt att rätt förhållanden råder.',
  },
  {
    question: 'Hur skiljer sig drönarbaserad termisk inspektion från handhållen termografi?',
    answer:
      'Drönarbaserad termisk inspektion ger tillgång till svåråtkomliga ytor som tak, höga fasader och stora industrianläggningar — utan byggnadsställningar eller skylift. Stora arealer kan inspekteras snabbt och systematiskt, och datainsamlingen sker under enhetliga förhållanden.',
  },
  {
    question: 'Vilka förberedelser krävs inför en termisk inspektion?',
    answer:
      'För byggnadsinspektion bör fastigheten vara uppvärmd och inga extrema väderomslag bör ha skett de senaste timmarna. Vi ger er detaljerade instruktioner vid bokning, anpassade efter er specifika tillämpning.',
  },
  {
    question: 'Hur lång tid tar en termisk inspektion?',
    answer:
      'Tidsåtgången beror på objektets storlek och komplexitet. Kontakta oss med uppgifter om ert objekt så ger vi en uppskattning vid offertförfrågan.',
  },
  {
    question: 'Vad ingår i leveransen efter en termisk inspektion?',
    answer:
      'Leveransen inkluderar fullradiometriska termogrammer, RGB-referensbilder, en avvikelseanalys med klassificerade fynd, temperaturprofiler för kritiska områden samt en komplett PDF-rapport med åtgärdsrekommendationer.',
  },
]

export default function TermiskInspektionLandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Termisk inspektion med drönare',
              description:
                'Termisk inspektion med drönare och värmekamera. Fullradiometrisk datainsamling för fastigheter, byggnader och industri i hela Sverige.',
              url: '/termisk-inspektion',
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
          { name: 'Termisk inspektion', url: '/termisk-inspektion' },
        ]}
      />

      <Hero
        headline="Termisk inspektion med drönare — avslöja det osynliga"
        subheadline="Fullradiometrisk datainsamling med infraröd kamera identifierar fukt, köldbryggor, isoleringsbrister och elektriska fel — snabbt, säkert och utan byggnadsställningar. EASA-certifierade piloter, ansvarsförsäkrade, i hela Sverige."
        ctaPrimary={{ label: 'Begär offert', href: '/kontakt' }}
        ctaSecondary={{ label: 'Så går det till', href: '#process' }}
      />

      <TrustBar
        items={[
          'EASA-certifierade piloter',
          'Ansvarsförsäkrade',
          'Hela Sverige',
          'Fullradiometrisk IR-data',
        ]}
      />

      {/* AEO: Vad är termisk inspektion? */}
      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-heading-lg sm:text-display">Vad är termisk inspektion?</h2>
            <p className="mt-6 text-body-lg text-dark-500">
              Termisk inspektion är en beröringsfri inspektionsmetod där en infraröd kamera
              registrerar temperaturstrålning från ytor. Genom att analysera temperaturmönster
              kan avvikelser som fukt, köldbryggor och bristfällig isolering identifieras utan
              att materialet behöver öppnas eller demonteras.
            </p>
            <p className="mt-4 text-body-lg text-dark-500">
              Vid drönarbaserad termisk inspektion monteras en värmekamera på en professionell
              inspektions-UAV. Kameran samlar in fullradiometrisk data, vilket innebär att varje
              pixel i bilden innehåller ett exakt temperaturvärde. Detta ger kvantifierbara
              resultat som kan jämföras mellan inspektionstillfällen och ligga till grund för
              tekniska beslut.
            </p>
            <p className="mt-4 text-body-lg text-dark-500">
              Metoden används brett inom fastighetsförvaltning, industri, energi och bygg.
              SurveyDrone erbjuder{' '}
              <Link href="/tjanster/termisk-inspektion" className="text-brand underline">
                termisk inspektion som tjänst
              </Link>{' '}
              med EASA-certifierade piloter. Tekniken kompletterar visuell inspektion och är
              särskilt värdefull vid{' '}
              <Link href="/tjanster/takinspektion" className="text-brand underline">
                takinspektion
              </Link>{' '}
              där dolda problem annars lätt missas.
            </p>
          </div>
        </div>
      </section>

      {/* AEO: När bör man använda termisk inspektion? */}
      <section className="section-padding bg-gray-50">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-heading-lg sm:text-display">
              När bör man använda termisk inspektion?
            </h2>
            <p className="mt-6 text-body-lg text-dark-500">
              Termisk inspektion är relevant i alla situationer där temperaturavvikelser kan
              avslöja dolda problem. Typiska användningsområden är energikartläggning av
              fastigheter, kontroll efter renovering, löpande tillståndsbedömning av tak och
              fasader samt kvalitetssäkring av nybyggnation.
            </p>
            <p className="mt-4 text-body-lg text-dark-500">
              Inom industrin används termisk analys för att övervaka processutrustning, upptäcka
              överhettade komponenter och förebygga driftstopp. I energisektorn är metoden
              central vid inspektion av solcellsanläggningar, transformatorer och
              fjärrvärmeledningar.
            </p>
            <p className="mt-4 text-body-lg text-dark-500">
              Termisk inspektion bör övervägas vid höga energikostnader utan känd orsak, vid
              misstanke om fukt i tak eller fasad, inför planerat underhåll, vid
              försäkringsärenden eller som en del av ett systematiskt förvaltningsarbete.
            </p>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Fördelar med termisk inspektion från drönare"
        subtitle="Infraröd teknik från luften ger insikter som inte är möjliga med visuell inspektion."
        benefits={[
          {
            icon: 'camera',
            title: 'Fullradiometrisk data',
            description:
              'Varje pixel innehåller ett exakt temperaturvärde, vilket ger kvantifierbara och jämförbara resultat.',
          },
          {
            icon: 'building',
            title: 'Stora ytor snabbt',
            description:
              'Tak, fasader och industrianläggningar inspekteras effektivt utan byggnadsställningar eller skylift.',
          },
          {
            icon: 'shield',
            title: 'Förebyggande underhåll',
            description:
              'Upptäck fukt, isoleringsbrister och elektriska fel innan de leder till kostsamma skador.',
          },
          {
            icon: 'chart',
            title: 'Jämförbar över tid',
            description:
              'Temperaturdata kan jämföras mellan inspektioner för att följa utvecklingen och prioritera åtgärder.',
          },
          {
            icon: 'clock',
            title: 'Säker och beröringsfri',
            description:
              'Ingen personal behöver klättra på tak eller arbeta nära farliga installationer.',
          },
          {
            icon: 'file',
            title: 'Professionell dokumentation',
            description:
              'Komplett rapport med termogrammer, temperaturprofiler, avvikelseanalys och åtgärdsförslag.',
          },
        ]}
      />

      {/* Vad kan termisk inspektion upptäcka? */}
      <section className="section-padding bg-gray-50">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-heading-lg sm:text-display text-center">
              Vad kan termisk inspektion upptäcka?
            </h2>
            <p className="mt-6 text-body-lg text-dark-500 text-center">
              Termisk analys avslöjar problem som inte syns med blotta ögat. Här är de vanligaste
              fynden vid drönarbaserad termografi.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="text-heading-sm font-semibold">Fuktinträngning</h3>
              <p className="mt-2 text-body text-dark-500">
                Fukt i tak och fasader syns som kalla zoner i termogrammet eftersom vatten
                avdunstar och kyler ytan. Tidigt upptäckt fukt förhindrar mögel och
                konstruktionsskador.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="text-heading-sm font-semibold">Köldbryggor</h3>
              <p className="mt-2 text-body text-dark-500">
                Köldbryggor uppstår där isoleringen är otillräcklig eller saknas. De syns som
                varmare områden på utsidan av byggnaden under uppvärmningssäsongen.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="text-heading-sm font-semibold">Isoleringsbrister</h3>
              <p className="mt-2 text-body text-dark-500">
                Felaktig, komprimerad eller saknad isolering skapar tydliga temperaturskillnader
                som enkelt identifieras med termisk kamera.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="text-heading-sm font-semibold">Hotspots i solceller</h3>
              <p className="mt-2 text-body text-dark-500">
                Defekta celler eller anslutningar i solcellspaneler genererar onormal värme.
                Termisk inspektion identifierar dessa hotspots så att panelerna kan åtgärdas.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="text-heading-sm font-semibold">Elektriska fel</h3>
              <p className="mt-2 text-body text-dark-500">
                Överhettade kopplingar, transformatorer och kabelgenomföringar syns tydligt i
                termogrammet och kan åtgärdas innan de leder till haveri eller brand.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="text-heading-sm font-semibold">Läckor i rör och ledningar</h3>
              <p className="mt-2 text-body text-dark-500">
                Fjärrvärmeledningar, kylsystem och dolda vattenledningar som läcker skapar
                temperaturavvikelser som syns i den termiska bilden.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps
        headline="Så genomförs en termisk inspektion"
        steps={[
          {
            number: 1,
            title: 'Behovsdialog',
            description:
              'Vi diskuterar ert objekt, definierar vad inspektionen ska besvara och planerar för optimala väderförhållanden.',
          },
          {
            number: 2,
            title: 'Datainsamling',
            description:
              'Professionell inspektions-UAV med termisk kamera flyger över objektet och samlar in fullradiometrisk data samt RGB-bilder.',
          },
          {
            number: 3,
            title: 'Analys',
            description:
              'Termogrammen bearbetas och analyseras. Avvikelser identifieras, klassificeras och dokumenteras med temperaturdata.',
          },
          {
            number: 4,
            title: 'Leverans och rådgivning',
            description:
              'Ni får en komplett rapport med termogrammer, temperaturprofiler, avvikelseanalys och konkreta åtgärdsrekommendationer.',
          },
        ]}
      />

      <Deliverables
        headline="Det här ingår i leveransen"
        items={[
          {
            title: 'Fullradiometriska termogrammer',
            description:
              'Termiska bilder med exakta temperaturvärden per pixel, redo för djupanalys och jämförelse.',
          },
          {
            title: 'RGB-referensbilder',
            description:
              'Visuella bilder tagna parallellt med termogrammen för enkel orientering och korrelation.',
          },
          {
            title: 'Avvikelseanalys',
            description:
              'Identifierade termiska avvikelser klassificerade med beskrivning och möjliga orsaker.',
          },
          {
            title: 'Temperaturprofiler',
            description:
              'Detaljerade temperaturmätningar längs utvalda linjer och punkter för kritiska områden.',
          },
          {
            title: 'Åtgärdsrekommendationer',
            description:
              'Konkreta förslag på åtgärder baserade på avvikelsernas typ och allvarlighetsgrad.',
          },
          {
            title: 'Digital rapport (PDF)',
            description:
              'Komplett rapport med sammanfattning, metodik, resultat, bilagor och fotodokumentation.',
          },
        ]}
      />

      <FaqAccordion headline="Vanliga frågor om termisk inspektion" items={faqItems} />

      <RelatedServices
        services={[
          {
            title: 'Takinspektion med drönare',
            href: '/tjanster/takinspektion',
            description:
              'Kombinerad visuell och termisk inspektion av tak — identifiera skador, fukt och slitage.',
          },
          {
            title: 'Solcellsinspektion',
            href: '/tjanster/solcellsinspektion',
            description:
              'Termisk inspektion av solcellsanläggningar för att upptäcka hotspots och defekta paneler.',
          },
          {
            title: 'Termisk inspektion (tjänstesida)',
            href: '/tjanster/termisk-inspektion',
            description:
              'Läs mer om vår termiska inspektionstjänst med fullradiometrisk datainsamling.',
          },
        ]}
      />

      <CtaBand
        headline="Boka termisk inspektion"
        description="Kontakta oss för en kostnadsfri konsultation. Vi hjälper er identifiera dolda problem med infraröd teknik."
        ctaLabel="Begär offert"
        ctaHref="/kontakt"
      />
    </>
  )
}
