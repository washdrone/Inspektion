import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { serviceSchema, faqSchema } from '@/lib/schema'
import { Hero } from '@/components/Hero'
import { TrustBar } from '@/components/TrustBar'
import { BenefitsGrid } from '@/components/BenefitsGrid'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = createMetadata({
  title: 'Drönarinspektion för energibolag | SurveyDrone',
  description:
    'Termisk drönarinspektion av solcellsparker, elnät och energianläggningar. Identifiera hotspots och driftstörningar. EASA-certifierade piloter i hela Sverige.',
  path: '/branscher/energi',
})

const faqItems = [
  {
    question: 'Hur identifierar ni defekta solcellspaneler med drönare?',
    answer:
      'Vi använder branschledande termisk kamera med fullradiometrisk datainsamling. Defekta celler, hotspots, PID-effekter och dåliga anslutningar syns tydligt som temperaturavvikelser i termogrammen. Varje avvikelse dokumenteras med exakt position.',
  },
  {
    question: 'Kan ni inspektera stora solcellsparker?',
    answer:
      'Ja, drönarteknik är särskilt effektiv för stora anläggningar. Vi kan inspektera omfattande ytor betydligt snabbare än manuella metoder, med systematisk genomgång av samtliga paneler och strängar.',
  },
  {
    question: 'Vilka typer av energianläggningar inspekterar ni?',
    answer:
      'Vi inspekterar solcellsparker, takförlagda solcellsanläggningar, elnät, transformatorstationer och andra energirelaterade anläggningar. Kontakta oss för att diskutera just ert behov.',
  },
  {
    question: 'Hur levereras inspektionsdata?',
    answer:
      'Ni får en detaljerad rapport med termiska bilder, RGB-bilder, identifierade avvikelser med koordinater och rekommenderade åtgärder. Data kan anpassas för integration med ert asset management-system.',
  },
  {
    question: 'Kan inspektionen utföras utan driftstopp?',
    answer:
      'Ja, drönarinspektionen genomförs utan att påverka driften. Solcellsanläggningar inspekteras under produktion — faktiskt krävs det att panelerna producerar el för att termisk inspektion ska ge bäst resultat.',
  },
  {
    question: 'Hur ofta bör solcellsanläggningar inspekteras?',
    answer:
      'Vi rekommenderar årlig termisk inspektion för att fånga upp degradering och nya defekter tidigt. Anläggningar med kända problem eller äldre paneler kan ha nytta av tätare intervall.',
  },
  {
    question: 'Har ni erfarenhet av ex-klassade zoner?',
    answer:
      'Ja, vi har erfarenhet av att arbeta i och kring ex-klassade zoner. Kontakta oss för att diskutera förutsättningarna för just er anläggning.',
  },
]

export default function EnergiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Drönarinspektion för energibolag',
              description:
                'Termisk drönarinspektion av solcellsparker, elnät och energianläggningar. Identifiera hotspots, defekta paneler och driftstörningar.',
              url: '/branscher/energi',
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
          { name: 'Branscher', url: '#' },
          { name: 'Energi', url: '/branscher/energi' },
        ]}
      />

      <Hero
        headline="Drönarinspektion för energibranschen"
        subheadline="Maximera drifttiden och minimera energiförluster. Med fullradiometrisk termisk inspektion identifierar vi defekta paneler, hotspots och skador på era energianläggningar — utan avbrott i produktionen."
        ctaPrimary={{ label: 'Begär offert', href: '/kontakt' }}
        ctaSecondary={{ label: 'Solcellsinspektion', href: '/tjanster/solcellsinspektion' }}
        stats={[
          { value: 'Anpassad', label: 'Driftplanering' },
          { value: 'Snabb', label: 'Rapportleverans' },
          { value: 'Hela', label: 'Sverige' },
          { value: 'EASA', label: 'Certifierade piloter' },
        ]}
      />

      <TrustBar
        items={[
          'EASA-certifierade fjärrpiloter',
          'Ansvarsförsäkrade',
          'Fullradiometrisk termisk kamera',
          'Erfarenhet av ex-klassade zoner',
        ]}
      />

      {/* Use cases section */}
      <section className="section-padding">
        <div className="container-content">
          <h2 className="text-heading-lg sm:text-display text-center">
            Inspektioner anpassade för energisektorn
          </h2>
          <p className="mt-4 text-body-lg text-dark-500 text-center max-w-2xl mx-auto">
            Oavsett om ni driver en solcellspark, förvaltar ett elnät eller ansvarar för
            energiproduktion hjälper vi er att hålla anläggningarna i drift.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="card">
              <h3 className="text-heading-sm">Solcellsinspektion</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Termisk inspektion av solcellsparker och takförlagda anläggningar. Vi identifierar
                hotspots, defekta celler, PID-effekter och anslutningsproblem med fullradiometrisk
                datainsamling.
              </p>
              <Link href="/tjanster/solcellsinspektion" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Läs mer om solcellsinspektion &rarr;
              </Link>
            </div>
            <div className="card">
              <h3 className="text-heading-sm">Inspektion av elnät och ledningar</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Visuell och termisk inspektion av kraftledningar, stolpar och transformatorstationer.
                Identifiera överhettade anslutningar och mekaniska skador på svåråtkomliga platser.
              </p>
              <Link href="/tjanster/industriinspektion" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Läs mer om industriell inspektion &rarr;
              </Link>
            </div>
            <div className="card">
              <h3 className="text-heading-sm">Anläggningsinspektion</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Inspektion av tak, fasader och byggnadsskal på energianläggningar. Identifiera
                fuktskador, isoleringsbrister och underhållsbehov utan att beträda höga höjder.
              </p>
              <Link href="/tjanster/takinspektion" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Läs mer om takinspektion &rarr;
              </Link>
            </div>
            <div className="card">
              <h3 className="text-heading-sm">Dokumentation och uppföljning</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Regelbunden flygbaserad dokumentation av era anläggningar. Spåra förändringar
                över tid och bygg upp en historik för proaktivt underhåll.
              </p>
              <Link href="/kontakt" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Kontakta oss för upplägg &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Fördelar för energibolag"
        subtitle="Drönarteknik ger er bättre inspektion med mindre driftpåverkan."
        benefits={[
          {
            title: 'Ingen produktionsförlust',
            description:
              'Inspektionen utförs medan anläggningen är i full drift. Inga avbrott, inga produktionsförluster.',
            icon: 'clock',
          },
          {
            title: 'Fullradiometrisk data',
            description:
              'Branschledande termisk kamera med fullradiometrisk datainsamling ger temperaturvärden per pixel, med mätosäkerhet och metodförutsättningar.',
            icon: 'camera',
          },
          {
            title: 'Stora ytor snabbt',
            description:
              'Solcellsparker och utbredda anläggningar inspekteras avsevärt snabbare jämfört med manuella metoder.',
            icon: 'chart',
          },
          {
            title: 'Erfarenhet av ex-zoner',
            description:
              'Vi har erfarenhet av att arbeta i och kring explosionsklassade miljöer inom energisektorn.',
            icon: 'shield',
          },
          {
            title: 'Positionsdata på avvikelser',
            description:
              'Varje identifierad defekt levereras med RTK/GNSS-positionering med centimeternoggrannhet för snabb lokalisering i fält.',
            icon: 'file',
          },
          {
            title: 'Anpassade leverabler',
            description:
              'Data och rapporter anpassas efter era interna system och rutiner för asset management och underhållsplanering.',
            icon: 'building',
          },
        ]}
        variant="dark"
      />

      <FaqAccordion
        headline="Vanliga frågor från energibranschen"
        items={faqItems}
      />

      <CtaBand
        headline="Optimera driften på era energianläggningar"
        description="Kontakta oss för en kostnadsfri offert. Vi hjälper er att hitta dolda defekter och maximera produktionen."
        ctaLabel="Begär offert"
        ctaHref="/kontakt"
      />
    </>
  )
}
