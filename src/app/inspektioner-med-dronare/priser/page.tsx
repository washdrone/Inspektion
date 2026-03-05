import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'

export const metadata: Metadata = createMetadata({
  title: 'Drönare-Inspektion Pris | SurveyDrone — Avtalsmodeller & Prisguide',
  description:
    'Vad kostar drönare-inspektion? Priset beror på objektets storlek, typ och placering. Se våra avtalsmodeller och begär ett kostnadsfritt prisförslag.',
  path: '/inspektioner-med-dronare/priser',
})

const pricingTiers = [
  {
    name: 'Enstaka inspektion',
    description: 'En enskild inspektion av tak, fasad eller anläggning.',
    features: [
      'Flygning och datainsamling',
      'Rapport med bilder och noteringar',
      'Rekommenderade åtgärder',
      'Digitalt bildarkiv',
      'Snabb leverans av rapport',
    ],
    cta: 'Begär prisförslag',
  },
  {
    name: 'Flerobjektsavtal',
    description: 'Inspektion av flera fastigheter eller objekt inom samma avtal.',
    features: [
      'Allt i Enstaka inspektion',
      'Volymprissättning',
      'Samordnad planering',
      'Gemensam rapportering',
      'Fast kontaktperson',
    ],
    cta: 'Begär prisförslag',
    highlighted: true,
  },
  {
    name: 'Löpande avtal',
    description: 'Regelbundna inspektioner med fast intervall och pris.',
    features: [
      'Allt i Flerobjektsavtal',
      'Schemalagda inspektioner',
      'Jämförelse mellan tillfällen',
      'Prioriterad hantering',
      'Årsrapport',
    ],
    cta: 'Begär prisförslag',
  },
]

export default function PriserPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Hem', url: '/' },
          { name: 'Inspektioner med drönare', url: '/inspektioner-med-dronare' },
          { name: 'Prisguide', url: '/inspektioner-med-dronare/priser' },
        ]}
      />

      <section className="section-padding">
        <div className="container-content text-center">
          <h1 className="text-3xl font-bold text-dark-900 sm:text-4xl">
            Så prissätts en drönarinspektion
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-dark-500">
            Priset baseras på objektets storlek, typ och placering. Vi erbjuder tre avtalsmodeller
            beroende på ert behov. Alla prisförslag är kostnadsfria.
          </p>
        </div>

        <div className="container-content mt-12 grid gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-xl border p-6 md:p-8 ${
                tier.highlighted
                  ? 'border-brand-500/30 bg-brand-500/10 shadow-lg ring-2 ring-brand-500/20'
                  : 'border-dark-100 bg-white'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-pill bg-brand-500 px-4 py-1 text-xs font-semibold text-white shadow-glow">
                  Rekommenderat
                </div>
              )}
              <h2 className="text-xl font-bold text-dark-900">{tier.name}</h2>
              <p className="mt-2 text-sm text-dark-500">{tier.description}</p>
              <ul className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-dark-700">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/inspektioner-med-dronare/kontakt"
                  className={`block w-full rounded-lg px-6 py-3 text-center text-sm font-semibold transition-colors ${
                    tier.highlighted
                      ? 'bg-brand-500 text-white hover:bg-dark-900'
                      : 'border-2 border-brand-500 text-brand-600 hover:bg-brand-500/10'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-dark-50">
        <div className="container-content max-w-3xl">
          <h2 className="text-center text-2xl font-bold text-dark-900">
            Vad påverkar priset?
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: 'Objektets storlek', desc: 'Större tak eller fasader kräver längre flygtid och mer bildbearbetning.' },
              { title: 'Typ av inspektion', desc: 'Olika inspektionstyper har olika krav på flygmönster och analys.' },
              { title: 'Placering', desc: 'Restid och eventuella tillståndskrav i området kan påverka priset.' },
              { title: 'Antal objekt', desc: 'Fler objekt i samma område ger volymfördelar.' },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-dark-100 bg-white p-5">
                <h3 className="font-semibold text-dark-900">{item.title}</h3>
                <p className="mt-1 text-sm text-dark-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion
        headline="Vanliga frågor om prissättning"
        items={[
          {
            question: 'Kostar offerten något?',
            answer: 'Nej, prisförslaget är alltid kostnadsfritt och utan förpliktelser.',
          },
          {
            question: 'Finns det dolda kostnader?',
            answer: 'Nej. Priset i offerten inkluderar flygning, databearbetning och rapport. Eventuella tillkommande önskemål diskuteras alltid i förväg.',
          },
          {
            question: 'Erbjuder ni bättre villkor vid löpande avtal?',
            answer: 'Ja, löpande avtal med regelbundna inspektioner ger bättre villkor jämfört med enskilda uppdrag.',
          },
          {
            question: 'Hur snabbt kan ni lämna prisförslag?',
            answer: 'Vi svarar normalt inom en arbetsdag med ett prisförslag baserat på er beskrivning.',
          },
        ]}
      />

      <CtaBand
        headline="Begär ett kostnadsfritt prisförslag"
        description="Beskriv ert behov så återkommer vi med ett prisförslag inom en arbetsdag."
        ctaLabel="Begär prisförslag"
      />
    </>
  )
}
