import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { faqSchema } from '@/lib/schema'

export const metadata: Metadata = createMetadata({
  title: 'Hur det går till — Drönarinspektion steg för steg',
  description:
    'Från offertförfrågan till färdig rapport. Se hur en drönarinspektion med SurveyDrone går till i fem enkla steg. Ni behöver inte vara på plats.',
  path: '/hur-det-gar-till',
})

const steps = [
  {
    number: 1,
    title: 'Offertförfrågan',
    description: 'Beskriv objektet och era behov via formuläret eller e-post. Vi återkommer snarast med en skräddarsydd offert.',
    detail: 'Ni behöver inte vara experter — beskriv bara vad ni vill inspektera och varför. Vi hjälper er välja rätt tjänst och upplägg.',
  },
  {
    number: 2,
    title: 'Planering',
    description: 'Vi kontrollerar luftrum, väderförhållanden och eventuella tillstånd. Ni behöver inte vara på plats.',
    detail: 'All kontakt med myndigheter och luftrumsplanering hanteras av oss. Vi meddelar er datum och tid i förväg.',
  },
  {
    number: 3,
    title: 'Flygning',
    description: 'EASA-certifierad pilot genomför inspektionen med branschledande termisk kamera och högupplöst RGB-kamera.',
    detail: 'Tidsåtgången beror på objektets storlek och komplexitet — ofta räcker det med några timmar, och flera objekt kan inspekteras samma dag.',
  },
  {
    number: 4,
    title: 'Analys',
    description: 'Alla avvikelser georefereras och prioritetsklassas. Vi identifierar skador, fukt, köldbryggor och andra brister.',
    detail: 'Varje fynd dokumenteras med position, bilder och en bedömning av allvarlighetsgrad så ni vet vad som bör åtgärdas först.',
  },
  {
    number: 5,
    title: 'Rapport',
    description: 'Professionell PDF-rapport med bilder, analyser och åtgärdsförslag. Leveranstiden beror på datamängden och anges i offerten.',
    detail: 'Rapporten är utformad som beslutsunderlag — tydlig, strukturerad och redo att delas med styrelse, förvaltare eller entreprenör.',
  },
]

const faqItems = [
  {
    question: 'Behöver jag vara på plats under inspektionen?',
    answer: 'Nej, ni behöver inte vara på plats. Vi hanterar hela processen självständigt och stämmer av med er före och efter flygningen.',
  },
  {
    question: 'Hur snabbt kommer rapporten?',
    answer: 'Leveranstiden beror på uppdragets omfattning och hur mycket data som ska analyseras — enklare uppdrag går snabbt, större datamängder kräver mer analystid. Ni får en tydlig leveranstid i offerten, och brådskande ärenden kan prioriteras.',
  },
  {
    question: 'Vad ingår i inspektionsrapporten?',
    answer: 'Rapporten innehåller högupplösta flygbilder, termiska bilder (vid termisk inspektion), en sammanfattning av identifierade avvikelser, prioritetsklassning och rekommenderade åtgärder.',
  },
  {
    question: 'Går det att inspektera på vintern?',
    answer: 'Ja, termisk inspektion fungerar ofta bättre under kyligare förhållanden eftersom temperaturskillnader blir tydligare. Vi anpassar flygtidpunkt efter väder och ljusförhållanden.',
  },
  {
    question: 'Vad är PDRA S-01 och varför är det viktigt?',
    answer: 'PDRA S-01 är ett europeiskt standardscenario för drönardrift i tätbebyggda områden. Det ställer krav på riskbedömning, operativa procedurer och pilotens kompetens — vilket säkerställer en säker och professionell inspektion.',
  },
  {
    question: 'Kan ni inspektera flera objekt samma dag?',
    answer: 'Ja, om objekten ligger i samma geografiska område kan vi inspektera flera fastigheter eller anläggningar under samma uppdrag. Det ger ofta bättre villkor.',
  },
]

export default function HurDetGarTillPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqItems)) }}
      />

      <Breadcrumbs
        items={[
          { name: 'Hem', url: '/' },
          { name: 'Hur det går till', url: '/hur-det-gar-till' },
        ]}
      />

      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="page-heading">
              Hur en drönarinspektion går till
            </h1>
            <p className="mt-4 text-lg text-dark-500">
              Från offertförfrågan till färdig rapport — fem tydliga steg. Vi hanterar allt från
              luftrumsplanering till analys. Ni behöver inte vara på plats.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding section-muted">
        <div className="container-content">
          <div className="mx-auto max-w-3xl space-y-12">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex gap-6 md:gap-8">
                {/* Timeline line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-5 top-12 bottom-0 w-px bg-brand-200 md:left-6" aria-hidden="true" />
                )}
                {/* Step number */}
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-700 text-sm font-bold text-white md:h-12 md:w-12 md:text-base">
                  {String(step.number).padStart(2, '0')}
                </div>
                {/* Content */}
                <div className="pb-8">
                  <h2 className="text-xl font-bold text-dark-900 md:text-2xl">{step.title}</h2>
                  <p className="mt-2 text-dark-600">{step.description}</p>
                  <p className="mt-2 text-sm text-dark-500">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="section-heading">Redo att komma igång?</h2>
          <p className="mt-3 text-lg text-dark-500">
            Det börjar med en enkel offertförfrågan — vi återkommer snarast.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/kontakt" className="btn-primary px-8 py-4 text-base">
              Begär offert
            </Link>
            <Link href="/priser" className="btn-secondary px-8 py-4 text-base">
              Se prisguide
            </Link>
          </div>
        </div>
      </section>

      <FaqAccordion headline="Vanliga frågor om processen" items={faqItems} />

      <CtaBand
        headline="Enklare än ni tror"
        description="Beskriv ert behov — vi sköter resten. Kostnadsfri offert med tydlig leveranstid."
      />
    </>
  )
}
