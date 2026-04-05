import type { Metadata } from 'next'
import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { faqSchema } from '@/lib/schema'
import { Hero } from '@/components/Hero'
import { TrustBar } from '@/components/TrustBar'
import { UseCaseCards } from '@/components/UseCaseCards'
import { BenefitsGrid } from '@/components/BenefitsGrid'
import { ProcessSteps } from '@/components/ProcessSteps'
import { Testimonials } from '@/components/Testimonials'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { IndustriesServed } from '@/components/IndustriesServed'

export const metadata: Metadata = createMetadata({
  title: 'Drönarinspektion Sverige — Termisk inspektion av tak, fasad & solceller',
  description:
    'Professionell drönarinspektion med termisk kamera i hela Sverige. Tak, fasader, solceller och industri. EASA-certifierade piloter, fullradiometrisk datainsamling. Begär offert idag.',
  path: '/',
})

const homeFaqItems = [
  {
    question: 'Vad är drönarinspektion?',
    answer:
      'Drönarinspektion är en metod där en obemannad flygfarkost (drönare) utrustad med termisk kamera och högupplöst RGB-kamera används för att inspektera byggnader, anläggningar och infrastruktur från luften. Metoden ger detaljerade bilder och termiska data utan att personal behöver arbeta på höjd, vilket gör inspektionen snabbare, säkrare och mer kostnadseffektiv än traditionella metoder.',
  },
  {
    question: 'Vad kostar en drönarinspektion?',
    answer:
      'Priset beror på objektets storlek, typ av inspektion och placering. En enklare inspektion av ett mindre tak kan kosta betydligt mindre än en omfattande termisk kartläggning av en industrianläggning. Kontakta oss för en kostnadsfri offert anpassad efter ert behov.',
  },
  {
    question: 'Vad kan upptäckas med termisk kamera?',
    answer:
      'Med fullradiometrisk termisk kamera kan vi identifiera fuktinträngning, köldbryggor, bristfällig isolering, läckage i tak och fasader, defekta solcellspaneler (hotspots), överhettade elektriska komponenter och dolda skador som inte syns med blotta ögat. Termisk inspektion är en av de mest effektiva metoderna för oförstörande provning av byggnader.',
  },
  {
    question: 'Är drönarinspektion säkert?',
    answer:
      'Ja. Alla våra piloter är EASA-certifierade och verksamheten är ansvarsförsäkrad. Vi hanterar luftrumskontroll, riskbedömning och flygplanering i enlighet med gällande regelverk. Ingen personal behöver arbeta på höjd, vilket eliminerar risken för fallolyckor.',
  },
  {
    question: 'När passar takinspektion med drönare?',
    answer:
      'Takinspektion med drönare passar vid planerat underhåll, efter stormar eller extremväder, vid fastighetsköp eller försäljning, vid försäkringsärenden och för regelbunden tillståndskontroll av stora fastighetsbestånd. Metoden är särskilt fördelaktig för tak som är svåråtkomliga eller farliga att beträda.',
  },
  {
    question: 'Kan ni inspektera solceller med drönare?',
    answer:
      'Ja. Med termisk kamera identifierar vi defekta celler, hotspots, smutsiga ytor och elektriska fel i solcellsanläggningar. Inspektion från luften täcker stora ytor snabbt och kan upptäcka problem som inte syns vid markbaserad kontroll.',
  },
  {
    question: 'Vad ingår i inspektionsrapporten?',
    answer:
      'Rapporten innehåller högupplösta flygbilder, termiska bilder med fullradiometrisk data, identifierade avvikelser med georeferering, prioritetsklassning av skador och konkreta åtgärdsrekommendationer. Allt levereras som en professionell PDF-rapport, normalt inom 48 timmar.',
  },
  {
    question: 'Hur fungerar drönare-inspektion med termisk kamera?',
    answer:
      'Vi flyger med kommersiell inspektionsklass-UAV utrustad med fullradiometrisk termisk kamera och högupplöst RGB-kamera. Den termiska kameran registrerar temperaturskillnader på ytor, vilket avslöjar fukt, köldbryggor och skador osynliga för blotta ögat. Hela objektet dokumenteras systematiskt och ni får en detaljerad rapport normalt inom 48 timmar.',
  },
  {
    question: 'Hur lång tid tar en inspektion?',
    answer:
      'En inspektion på plats tar normalt 1–4 timmar beroende på objektets storlek och komplexitet. Rapporten levereras normalt inom 48 timmar efter genomförd flygning.',
  },
  {
    question: 'Går det att inspektera på vintern?',
    answer:
      'Ja, termisk inspektion fungerar ofta bättre under kyligare förhållanden eftersom temperaturskillnader mellan inomhus och utomhus blir tydligare. Vintern är därför en utmärkt tid för att identifiera köldbryggor och isoleringsbrister.',
  },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(homeFaqItems)) }}
      />

      <Hero
        headline="Drönarinspektion med termisk kamera — hela Sverige"
        subheadline="SurveyDrone hjälper fastighetsägare, förvaltare och företag att inspektera tak, fasader, solceller och industrianläggningar med fullradiometrisk termisk kamera — snabbare, säkrare och kostnadseffektivare än traditionella metoder."
        ctaPrimary={{ label: 'Begär offert', href: '/kontakt' }}
        ctaSecondary={{ label: 'Hur det går till', href: '/hur-det-gar-till' }}
        stats={[
          { value: 'Hela', label: 'Sverige' },
          { value: '1–4h', label: 'Inspektion på plats' },
          { value: '48h', label: 'Rapport levereras' },
          { value: '0', label: 'Arbete på höjd' },
        ]}
      />

      <TrustBar
        items={[
          'EASA-certifierade fjärrpiloter',
          'Ansvarsförsäkrade',
          'Fullradiometrisk termisk kamera',
          'RTK/GNSS-positionering',
        ]}
      />

      {/* AEO: Vad är drönarinspektion — definition section */}
      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-heading-lg sm:text-display text-center">Vad är drönarinspektion?</h2>
            <p className="mt-6 text-body-lg text-dark-600 leading-relaxed">
              Drönarinspektion är en metod där en obemannad flygfarkost utrustad med termisk kamera
              och högupplöst RGB-kamera används för att inspektera byggnader, tak, fasader,
              solcellsanläggningar och industriella objekt från luften. Metoden ersätter eller
              kompletterar traditionella inspektionsmetoder som kräver ställningar, skylift eller
              manuellt arbete på höjd.
            </p>
            <p className="mt-4 text-body-lg text-dark-600 leading-relaxed">
              En <Link href="/termisk-inspektion" className="text-brand-600 underline hover:text-brand-700">termisk inspektion</Link> med
              drönare bygger på fullradiometrisk datainsamling, vilket innebär att varje pixel i
              bilden innehåller exakt temperaturdata. Det gör det möjligt att
              identifiera <Link href="/tjanster/fuktinspektion" className="text-brand-600 underline hover:text-brand-700">fuktinträngning</Link>,
              köldbryggor, bristfällig isolering och dolda skador som inte syns med blotta ögat.
            </p>
            <p className="mt-4 text-body-lg text-dark-600 leading-relaxed">
              En drönarinspektion passar särskilt bra när objekt är svåråtkomliga, när stora ytor
              ska täckas effektivt, eller när man vill undvika risker och kostnader förknippade
              med arbete på höjd. Vanliga användningsområden
              är <Link href="/takinspektion-med-dronare" className="text-brand-600 underline hover:text-brand-700">takinspektion</Link>,{' '}
              <Link href="/fasadinspektion" className="text-brand-600 underline hover:text-brand-700">fasadinspektion</Link> och{' '}
              <Link href="/solcellsinspektion" className="text-brand-600 underline hover:text-brand-700">solcellsinspektion</Link>.
              Metoden används av fastighetsförvaltare, energibolag, byggföretag,
              kommuner och försäkringsbolag i hela Sverige.
            </p>
          </div>
        </div>
      </section>

      <UseCaseCards
        headline="Tjänster anpassade för ert behov"
        subtitle="Välj den inspektion som passar er fastighet, anläggning eller bransch."
        useCases={[
          {
            title: 'Takinspektion',
            description: 'Identifiera skador, fukt och köldbryggor med termisk kamera — utan att beträda taket.',
            href: '/tjanster/takinspektion',
            icon: '🏠',
          },
          {
            title: 'Fasadinspektion',
            description: 'Dokumentera sprickor, fukt och skador på fasaden utan ställningar eller skylift.',
            href: '/tjanster/fasadinspektion',
            icon: '🏢',
          },
          {
            title: 'Solcellsinspektion',
            description: 'Hitta hotspots, defekta paneler och prestandaproblem med termisk analys från luften.',
            href: '/tjanster/solcellsinspektion',
            icon: '☀️',
          },
          {
            title: 'Termisk inspektion',
            description: 'Fullradiometrisk datainsamling som avslöjar dolda skador i byggnader och anläggningar.',
            href: '/tjanster/termisk-inspektion',
            icon: '🌡️',
          },
          {
            title: 'Industriinspektion',
            description: 'Inspektera tankar, torn, pipelines och svåråtkomliga anläggningar utan driftstopp.',
            href: '/tjanster/industriinspektion',
            icon: '🏭',
          },
          {
            title: '3D-kartläggning',
            description: 'Ortofoto, 3D-modeller och fotogrammetri för mätning och dokumentation.',
            href: '/tjanster/3d-kartlaggning',
            icon: '📐',
          },
        ]}
      />

      {/* AEO: Vanliga problem vi upptäcker */}
      <section className="section-padding section-muted">
        <div className="container-content">
          <h2 className="text-heading-lg sm:text-display text-center">Vanliga problem vi upptäcker</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-dark-500">
            Vid en drönarinspektion med termisk kamera identifierar vi regelmässigt problem som är
            osynliga vid visuell besiktning från marken.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Fuktinträngning i tak', desc: 'Termisk kamera visar fuktansamlingar under takytan som avvikande temperaturzoner — ofta långt innan synliga vattenskador uppstår.' },
              { title: 'Köldbryggor', desc: 'Områden med bristfällig isolering syns tydligt som värmeläckage i termiska bilder, särskilt under kalla månader.' },
              { title: 'Defekta solcellspaneler', desc: 'Hotspots och cellfel i solcellsanläggningar identifieras snabbt från luften och kan orsaka brandrisker om de inte åtgärdas.' },
              { title: 'Sprickor och skador på fasad', desc: 'Högupplösta flygbilder dokumenterar sprickbildning, fogskador och ytavvikelser som är svåra att se från marken.' },
              { title: 'Bristfällig isolering', desc: 'Termisk kamera avslöjar var byggnaden förlorar värme genom väggar, tak eller anslutningar.' },
              { title: 'Läckage i tätskikt', desc: 'Fukt som trängt genom tätskiktet visar sig som temperaturdifferenser i termiska bilder.' },
            ].map((item, i) => (
              <div key={i} className="card">
                <h3 className="text-base font-semibold text-dark-900">{item.title}</h3>
                <p className="mt-2 text-body-sm text-dark-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Varför välja SurveyDrone?"
        subtitle="EASA-certifierade piloter, fullradiometrisk teknik och erfarenhet av krävande miljöer."
        benefits={[
          {
            title: 'Termisk & visuell inspektion',
            description: 'Fullradiometrisk termisk kamera kombinerat med högupplöst RGB för komplett analys av dolda och synliga skador.',
            icon: 'camera',
          },
          {
            title: 'Minskad arbetsmiljörisk',
            description: 'Ingen personal behöver arbeta på höga höjder eller i farliga miljöer. Eliminerar risken för fallolyckor.',
            icon: 'shield',
          },
          {
            title: 'Snabbare genomförande',
            description: 'En inspektion som tidigare tog dagar kan genomföras på 1–4 timmar med drönare.',
            icon: 'clock',
          },
          {
            title: 'Lägre kostnad',
            description: 'Inget behov av byggnadsställningar, skylift eller omfattande säkerhetsutrustning.',
            icon: 'chart',
          },
          {
            title: 'Certifierad kvalitet',
            description: 'EASA-certifierade piloter, ansvarsförsäkrad verksamhet och erfarenhet av ex-klassade zoner.',
            icon: 'file',
          },
          {
            title: 'Minimal driftstörning',
            description: 'Inspektionen utförs från luften utan att störa verksamheten i byggnaden eller på anläggningen.',
            icon: 'building',
          },
        ]}
      />

      {/* AEO: Drönare vs traditionell inspektion */}
      <section className="section-padding">
        <div className="container-content">
          <h2 className="text-heading-lg sm:text-display text-center">Drönare vs traditionell inspektion</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-dark-500">
            Traditionell inspektion kräver ofta ställningar, skylift och personal som arbetar på
            höjd. Drönarinspektion erbjuder ett säkrare och effektivare alternativ.
          </p>
          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-dark-100">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-dark-50">
                  <th className="px-6 py-4 font-semibold text-dark-900"></th>
                  <th className="px-6 py-4 font-semibold text-brand-600">Drönarinspektion</th>
                  <th className="px-6 py-4 font-semibold text-dark-500">Traditionell metod</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dark-100">
                <tr>
                  <td className="px-6 py-4 font-medium text-dark-900">Tidsåtgång</td>
                  <td className="px-6 py-4 text-dark-600">1–4 timmar</td>
                  <td className="px-6 py-4 text-dark-600">Dagar till veckor</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-dark-900">Arbete på höjd</td>
                  <td className="px-6 py-4 text-dark-600">Nej — drönare arbetar från luften</td>
                  <td className="px-6 py-4 text-dark-600">Ja — ställning, skylift eller rep</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-dark-900">Termisk analys</td>
                  <td className="px-6 py-4 text-dark-600">Fullradiometrisk data per pixel</td>
                  <td className="px-6 py-4 text-dark-600">Begränsad eller saknas</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-dark-900">Driftstörning</td>
                  <td className="px-6 py-4 text-dark-600">Minimal</td>
                  <td className="px-6 py-4 text-dark-600">Betydande</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-dark-900">Dokumentation</td>
                  <td className="px-6 py-4 text-dark-600">Georefererade bilder + termogrammer</td>
                  <td className="px-6 py-4 text-dark-600">Manuella anteckningar + foton</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-dark-900">Rapport</td>
                  <td className="px-6 py-4 text-dark-600">Inom 48 timmar</td>
                  <td className="px-6 py-4 text-dark-600">Varierar</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-dark-500">
            Vill du veta mer om prissättningen?{' '}
            <Link href="/vad-kostar-dronarinspektion" className="text-brand-600 underline hover:text-brand-700">
              Läs vår guide om vad drönarinspektion kostar
            </Link>.
          </p>
        </div>
      </section>

      <ProcessSteps
        headline="Så går en drönarinspektion till"
        steps={[
          {
            number: 1,
            title: 'Offertförfrågan',
            description: 'Beskriv ert behov — vi svarar inom 24 timmar med en skräddarsydd offert.',
          },
          {
            number: 2,
            title: 'Planering',
            description: 'Vi kontrollerar luftrum, väder och planerar flygningen. Ni behöver inte vara på plats.',
          },
          {
            number: 3,
            title: 'Flygning & datainsamling',
            description: 'EASA-certifierad pilot genomför inspektionen med termisk och RGB-kamera. Normalt 1–4 timmar.',
          },
          {
            number: 4,
            title: 'Analys',
            description: 'Alla avvikelser georefereras och prioritetsklassas med fullradiometrisk data.',
          },
          {
            number: 5,
            title: 'Rapport & beslutsunderlag',
            description: 'Professionell PDF-rapport med bilder, termogrammer, analyser och åtgärdsförslag — normalt inom 48 timmar.',
          },
        ]}
      />

      {/* AEO: Vad får kunden efter inspektion */}
      <section className="section-padding section-muted">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-heading-lg sm:text-display text-center">Vad får ni efter genomförd inspektion?</h2>
            <p className="mt-6 text-body-lg text-dark-600 leading-relaxed">
              Efter varje drönarinspektion levererar vi en komplett inspektionsrapport som fungerar
              som beslutsunderlag för underhåll, åtgärder och investeringar. Rapporten innehåller:
            </p>
            <ul className="mt-6 space-y-3 text-dark-600">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-600">
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </span>
                <span>Högupplösta flygbilder (RGB) av hela objektet med närbilder av identifierade avvikelser</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-600">
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </span>
                <span>Termiska bilder med fullradiometrisk data — varje pixel bär exakt temperaturinformation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-600">
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </span>
                <span>Georeferering av alla identifierade skador och avvikelser</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-600">
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </span>
                <span>Prioritetsklassning av skador efter allvarlighetsgrad</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-600">
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </span>
                <span>Konkreta åtgärdsrekommendationer baserade på analysresultaten</span>
              </li>
            </ul>
            <p className="mt-6 text-dark-500">
              Rapporten levereras som PDF och kan användas direkt i ert fastighetssystem, vid
              underhållsplanering eller som underlag vid försäkringsärenden.
            </p>
          </div>
        </div>
      </section>

      <IndustriesServed
        headline="Branscher och målgrupper"
        industries={[
          {
            name: 'Fastighetsförvaltning',
            description: 'Regelbundna inspektioner av tak och fasader för att planera underhåll och minska oförutsedda kostnader.',
            href: '/branscher/fastighet',
          },
          {
            name: 'Energibolag',
            description: 'Termisk inspektion av solcellsanläggningar och kraftvärmeverk för att optimera drift och säkerhet.',
            href: '/branscher/energi',
          },
          {
            name: 'Byggföretag',
            description: 'Dokumentation under och efter byggnation samt kontroll av tätskikt och isolering.',
            href: '/branscher/bygg',
          },
          {
            name: 'Industri',
            description: 'Inspektion av svåråtkomliga industriobjekt som tankar, torn, pipelines och processutrustning.',
            href: '/branscher/industri',
          },
          {
            name: 'Kommuner & offentlig sektor',
            description: 'Effektiv tillståndsbedömning av offentliga byggnader, skolor, sportanläggningar och infrastruktur.',
            href: '/branscher/kommuner',
          },
          {
            name: 'Försäkringsbolag',
            description: 'Dokumentation av skador och tillståndsbedömning vid försäkringsärenden och skadereglering.',
            href: '/branscher/forsakring',
          },
        ]}
      />

      <Testimonials
        testimonials={[
          {
            quote: 'Vi inspekterade taken på flera fastigheter på kort tid istället för veckor. Rapporten var tydlig och gav oss bra beslutsunderlag för planerat underhåll.',
            name: 'Teknisk förvaltare',
            role: 'Fastighetsförvaltning',
            company: '',
          },
          {
            quote: 'Drönarinspektionen sparade oss både tid och pengar. Inga ställningar, ingen risk för personalen och vi fick bilderna snabbt.',
            name: 'Projektledare',
            role: 'Byggbranschen',
            company: '',
          },
          {
            quote: 'Tack vare termisk inspektion med drönare hittade vi defekta paneler som vi aldrig hade upptäckt från marken.',
            name: 'Driftansvarig',
            role: 'Energibranschen',
            company: '',
          },
        ]}
      />

      <FaqAccordion
        headline="Vanliga frågor om drönarinspektion"
        items={homeFaqItems}
      />

      <CtaBand
        headline="Redo att effektivisera era inspektioner?"
        description="Kontakta oss för en kostnadsfri offert. Svar inom 24 timmar, rapport inom 48 timmar."
        ctaLabel="Begär offert"
      />
    </>
  )
}
