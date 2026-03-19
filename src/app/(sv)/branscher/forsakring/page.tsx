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
  title: 'Drönarinspektion för försäkringsbolag | SurveyDrone',
  description:
    'Snabb och objektiv skadedokumentation med drönare för försäkringsbolag. Termisk kamera och högupplösta bilder. EASA-certifierade piloter i hela Sverige.',
  path: '/branscher/forsakring',
})

const faqItems = [
  {
    question: 'Hur snabbt kan ni vara på plats efter en skadehändelse?',
    answer:
      'Vi strävar efter snabb mobilisering och kan i de flesta fall genomföra inspektionen inom kort tid efter beställning. Kontakta oss med ert ärende så ger vi besked om tillgänglighet.',
  },
  {
    question: 'Kan drönarinspektion ersätta en traditionell skadebesiktning?',
    answer:
      'Drönarinspektion kompletterar och stärker skadebedömningen genom att tillföra termisk analys och högupplöst dokumentation av ytor som är svåråtkomliga vid markbesiktning. Det ger en mer komplett bild av skadans omfattning.',
  },
  {
    question: 'Vilka typer av skador kan ni dokumentera?',
    answer:
      'Vi dokumenterar stormskador, hagelskador, brandskador, vattenskador och andra händelser som påverkat tak, fasader och byggnadsdelar. Termisk kamera avslöjar även dolda fuktskador.',
  },
  {
    question: 'Hur levereras dokumentationen?',
    answer:
      'Ni får en detaljerad rapport med högupplösta bilder, termiska bilder med analys, skadeomfattning och positionsdata. Rapporten kan anpassas efter era interna krav för skadereglering.',
  },
  {
    question: 'Kan ni dokumentera skadans omfattning vid stora händelser?',
    answer:
      'Ja, drönarteknik är särskilt värdefull vid större skadehändelser som stormar eller översvämningar. Vi kan snabbt kartlägga skadeomfattningen på flera byggnader och ge er en samlad bild.',
  },
  {
    question: 'Är dokumentationen juridiskt användbar?',
    answer:
      'Våra rapporter innehåller tidsstämplade bilder med positionsdata och är framtagna med EASA-certifierad personal och kalibrerad utrustning. Dokumentationen kan användas som kompletterande underlag i skadeärenden.',
  },
  {
    question: 'Kan ni utföra inspektioner i hela Sverige?',
    answer:
      'Ja, vi är verksamma i hela Sverige och kan mobilisera till er skadeplats oavsett var den ligger.',
  },
]

export default function ForsakringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Drönarinspektion för försäkringsbolag',
              description:
                'Snabb och objektiv skadedokumentation med drönare och termisk kamera. Stöd för skadereglering med högupplösta bilder och termisk analys.',
              url: '/branscher/forsakring',
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
          { name: 'Försäkring', url: '/branscher/forsakring' },
        ]}
      />

      <Hero
        headline="Drönarinspektion för försäkringsbolag"
        subheadline="Snabbare skadebedömning, objektiv dokumentation och bättre beslutsunderlag. Med drönare och termisk kamera kartlägger vi skadeomfattningen på tak och fasader — även dolda skador som inte syns vid markbesiktning."
        ctaPrimary={{ label: 'Begär offert', href: '/kontakt' }}
        ctaSecondary={{ label: 'Våra tjänster', href: '/tjanster/takinspektion' }}
        stats={[
          { value: 'Snabb', label: 'Mobilisering' },
          { value: 'Objektiv', label: 'Dokumentation' },
          { value: 'Hela', label: 'Sverige' },
          { value: 'EASA', label: 'Certifierade piloter' },
        ]}
      />

      <TrustBar
        items={[
          'EASA-certifierade fjärrpiloter',
          'Ansvarsförsäkrade',
          'Termisk kamera & RGB',
          'Tidsstämplad dokumentation',
        ]}
      />

      {/* Use cases section */}
      <section className="section-padding">
        <div className="container-content">
          <h2 className="text-heading-lg sm:text-display text-center">
            Användningsområden inom försäkring
          </h2>
          <p className="mt-4 text-body-lg text-dark-500 text-center max-w-2xl mx-auto">
            Drönarinspektion ger er en snabb och komplett bild av skadeomfattningen,
            vilket effektiviserar skaderegleringen och ger tryggare beslut.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="card">
              <h3 className="text-heading-sm">Stormskadedokumentation</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Snabb kartläggning av tak- och fasadskador efter storm. Drönaren når alla
                ytor och ger er en komplett bild utan att personal behöver klättra.
              </p>
              <Link href="/tjanster/takinspektion" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Läs mer om takinspektion &rarr;
              </Link>
            </div>
            <div className="card">
              <h3 className="text-heading-sm">Fukt- och vattenskador</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Termisk kamera avslöjar fuktens utbredning i tak och fasader. Identifiera
                skadeomfattningen utan destruktiva ingrepp.
              </p>
              <Link href="/tjanster/fasadinspektion" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Läs mer om fasadinspektion &rarr;
              </Link>
            </div>
            <div className="card">
              <h3 className="text-heading-sm">Brandskadedokumentation</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Säker dokumentation av brandskadade byggnader ovanifrån. Kartlägg skadeomfattningen
                utan att utsätta personal för rasrisk.
              </p>
              <Link href="/tjanster/industriinspektion" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Läs mer om industriell inspektion &rarr;
              </Link>
            </div>
            <div className="card">
              <h3 className="text-heading-sm">Förebyggande riskbedömning</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Proaktiv inspektion av försäkrade objekt för att identifiera risker innan
                skadan sker. Termisk kamera avslöjar problem som kan leda till framtida skador.
              </p>
              <Link href="/kontakt" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Kontakta oss för upplägg &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Fördelar för försäkringsbolag"
        subtitle="Drönarteknik effektiviserar skaderegleringen och ger bättre beslutsunderlag."
        benefits={[
          {
            title: 'Snabb skadebedömning',
            description:
              'Drönarinspektionen genomförs snabbt och rapporten levereras normalt inom ett par arbetsdagar. Kortare handläggningstid för skadeärendet.',
            icon: 'clock',
          },
          {
            title: 'Objektiv dokumentation',
            description:
              'Högupplösta bilder och termisk data ger en objektiv och detaljerad bild av skadeomfattningen, utan subjektiva bedömningar.',
            icon: 'camera',
          },
          {
            title: 'Dolda skador synliggörs',
            description:
              'Termisk kamera avslöjar fukt, köldbryggor och skador under ytan som inte syns vid visuell besiktning från marken.',
            icon: 'shield',
          },
          {
            title: 'Säker dokumentation',
            description:
              'Ingen personal behöver beträda skadade tak eller klättra på instabila konstruktioner. Drönaren dokumenterar allt från säker höjd.',
            icon: 'building',
          },
          {
            title: 'Positionsdata och tidsstämplar',
            description:
              'Alla bilder levereras med GPS-koordinater och tidsstämplar. Dokumentationen är spårbar och användbar som kompletterande underlag.',
            icon: 'file',
          },
          {
            title: 'Rikstäckande kapacitet',
            description:
              'Vi är verksamma i hela Sverige och kan mobilisera till skadeplatsen oavsett var den ligger.',
            icon: 'chart',
          },
        ]}
        variant="dark"
      />

      <FaqAccordion
        headline="Vanliga frågor från försäkringsbolag"
        items={faqItems}
      />

      <CtaBand
        headline="Behöver ni snabb skadedokumentation?"
        description="Kontakta oss för att diskutera hur drönarinspektion kan effektivisera er skadereglering."
        ctaLabel="Kontakta oss"
        ctaHref="/kontakt"
      />
    </>
  )
}
