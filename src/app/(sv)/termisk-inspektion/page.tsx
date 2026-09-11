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
  title: 'Guide till termisk inspektion med drönare',
  description:
    'Hur fungerar termisk inspektion? Lär dig om fullradiometrisk datainsamling, vad som kan upptäckas och när termografi ger störst nytta. Guide för fastigheter, industri och energi.',
  path: '/termisk-inspektion',
})

const faqItems = [
  {
    question: 'Hur fungerar termisk inspektion av byggnader?',
    answer:
      'En infraröd kamera registrerar temperaturstrålning från byggnadens ytor. Avvikelser i temperaturmönstret — exempelvis kalla fläckar orsakade av fukt eller varma zoner vid köldbryggor — kartläggs och analyseras. Med drönare kan hela tak och fasader inspekteras systematiskt från luften.',
  },
  {
    question: 'Vilka typer av problem avslöjar termografi?',
    answer:
      'Termografi kan identifiera fuktinträngning, köldbryggor, bristfällig isolering, läckor i tätskikt, hotspots i solcellspaneler, överhettade elektriska komponenter och dolda rörlägkage. Metoden är särskilt effektiv för att hitta problem som inte syns visuellt.',
  },
  {
    question: 'Vad skiljer fullradiometrisk data från vanlig termisk bild?',
    answer:
      'Fullradiometrisk data innebär att varje pixel bär ett absolut temperaturvärde, inte bara en relativ färgskala. Det gör att analysen kan kvantifiera temperaturskillnader exakt, jämföra resultat mellan inspektioner och ligga till grund för tekniska beslut om åtgärder.',
  },
  {
    question: 'När på året ger termisk inspektion bäst resultat?',
    answer:
      'För byggnader fungerar termisk inspektion bäst under uppvärmningssäsongen, då temperaturskillnaden mellan inne och ute förstärker köldbryggor och isoleringsbrister. Solcellsinspektioner genomförs under god solinstrålning, och industriella tillämpningar kan utföras året runt.',
  },
  {
    question: 'Drönare eller handhållen kamera — vad är skillnaden?',
    answer:
      'Drönare når tak, höga fasader och stora anläggningar utan ställning. Datainsamlingen sker under enhetliga förhållanden och täcker stora arealer snabbt. Handhållen termografi lämpar sig bättre för små ytor inomhus eller kompletterande mätningar på nära håll.',
  },
  {
    question: 'Hur förbereder man sig inför en termisk inspektion?',
    answer:
      'Fastigheten bör vara normalt uppvärmd och inga extrema väderomslag bör ha inträffat de senaste timmarna. Vid solcellsinspektioner ska anläggningen vara i drift. Vi ger detaljerade instruktioner anpassade efter ert objekt vid bokning.',
  },
  {
    question: 'Kan termisk inspektion ersätta destruktiv provtagning?',
    answer:
      'Termisk inspektion är en oförstörande metod som identifierar problemområden utan att material behöver öppnas. Det minskar antalet provtagningspunkter och riktar eventuella destruktiva prover till de mest kritiska ställena, vilket sparar tid och pengar.',
  },
  {
    question: 'Hur tolkar man en termisk inspektionsrapport?',
    answer:
      'Rapporten innehåller termogrammer med färgskala, temperaturvärden, RGB-referensbilder och en avvikelseanalys där varje fynd klassificeras och förklaras. Vi inkluderar alltid konkreta åtgärdsrekommendationer så att rapporten kan användas direkt som beslutsunderlag.',
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
        headline="Termisk inspektion – vad värmekameran visar"
        subheadline="Lär dig hur termisk inspektion fungerar, vad fullradiometrisk data innebär och i vilka situationer termografi ger störst nytta. En teknisk guide för fastighetsägare, förvaltare och driftansvariga."
        ctaPrimary={{ label: 'Se tjänst och leverans', href: '/tjanster/termisk-inspektion' }}
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
              pixel i bilden innehåller ett temperaturvärde med mätosäkerhet. Detta ger kvantifierbara
              resultat som kan jämföras mellan inspektionstillfällen och ligga till grund för
              tekniska beslut.
            </p>
            <p className="mt-4 text-body-lg text-dark-500">
              Metoden används brett inom fastighetsförvaltning, industri, energi och bygg.
              SurveyDrone erbjuder{' '}
              <Link href="/tjanster/termisk-inspektion" className="link-inline">
                termisk inspektion som tjänst
              </Link>{' '}
              med EASA-certifierade piloter. Tekniken kompletterar visuell inspektion och är
              särskilt värdefull vid{' '}
              <Link href="/tjanster/takinspektion" className="link-inline">
                takinspektion
              </Link>{' '}
              där dolda problem annars lätt missas.
            </p>
          </div>
        </div>
      </section>

      {/* AEO: När bör man använda termisk inspektion? */}
      <section className="section-padding section-muted">
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
              'Varje pixel innehåller ett temperaturvärde med mätosäkerhet, vilket ger kvantifierbara och jämförbara resultat.',
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
      <section className="section-padding section-muted">
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
            <div className="card">
              <h3 className="text-heading-sm font-semibold">Fuktinträngning</h3>
              <p className="mt-2 text-body text-dark-500">
                Fukt i tak och fasader syns som kalla zoner i termogrammet eftersom vatten
                avdunstar och kyler ytan. Tidigt upptäckt fukt förhindrar mögel och
                konstruktionsskador.
              </p>
            </div>
            <div className="card">
              <h3 className="text-heading-sm font-semibold">Köldbryggor</h3>
              <p className="mt-2 text-body text-dark-500">
                Köldbryggor uppstår där isoleringen är otillräcklig eller saknas. De syns som
                varmare områden på utsidan av byggnaden under uppvärmningssäsongen.
              </p>
            </div>
            <div className="card">
              <h3 className="text-heading-sm font-semibold">Isoleringsbrister</h3>
              <p className="mt-2 text-body text-dark-500">
                Felaktig, komprimerad eller saknad isolering skapar tydliga temperaturskillnader
                som enkelt identifieras med termisk kamera.
              </p>
            </div>
            <div className="card">
              <h3 className="text-heading-sm font-semibold">Hotspots i solceller</h3>
              <p className="mt-2 text-body text-dark-500">
                Defekta celler eller anslutningar i solcellspaneler genererar onormal värme.
                Termisk inspektion identifierar dessa hotspots så att panelerna kan åtgärdas.
              </p>
            </div>
            <div className="card">
              <h3 className="text-heading-sm font-semibold">Elektriska fel</h3>
              <p className="mt-2 text-body text-dark-500">
                Överhettade kopplingar, transformatorer och kabelgenomföringar syns tydligt i
                termogrammet och kan åtgärdas innan de leder till haveri eller brand.
              </p>
            </div>
            <div className="card">
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
        id="process"
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
            href: '/takinspektion-med-dronare',
            description:
              'Guide till takinspektion — hur drönare och termisk kamera identifierar skador, fukt och slitage.',
          },
          {
            title: 'Solcellsinspektion med drönare',
            href: '/solcellsinspektion',
            description:
              'Allt om termisk inspektion av solceller — upptäck hotspots, defekta celler och PID-degradering.',
          },
          {
            title: 'Vad kostar drönarinspektion?',
            href: '/vad-kostar-dronarinspektion',
            description:
              'Prisguide — vilka faktorer som påverkar kostnaden för termisk inspektion och drönarinspektion.',
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
