import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { faqSchema } from '@/lib/schema'

export const metadata: Metadata = createMetadata({
  title: 'Drönarinspektion pris — Prismodell och prisguide',
  description:
    'Vad kostar drönarinspektion? Priset beror på objektets yta, antal våningsplan, inspektionstyp och leverabler. Se vår prismodell och begär kostnadsfri offert.',
  path: '/priser',
})

const faqItems = [
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
    answer: 'Ja, löpande avtal med regelbundna inspektioner ger bättre villkor jämfört med enstaka uppdrag. Se vår sida om förvaltningsavtal.',
  },
  {
    question: 'Hur snabbt kan ni lämna prisförslag?',
    answer: 'Vi svarar normalt inom 24 timmar med ett prisförslag baserat på er beskrivning.',
  },
  {
    question: 'Vad kostar det att lägga till termisk inspektion?',
    answer: 'Termisk inspektion ingår som tillval eller i kombinerade paket. Priset beror på objektets storlek. Kontakta oss för exakt prisuppgift.',
  },
]

export default function PriserPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqItems)) }}
      />

      <Breadcrumbs
        items={[
          { name: 'Hem', url: '/' },
          { name: 'Prisguide', url: '/priser' },
        ]}
      />

      <section className="section-padding">
        <div className="container-content text-center">
          <h1 className="text-3xl font-bold text-dark-900 sm:text-4xl">
            Så prissätts en drönarinspektion
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-dark-500">
            Vi publicerar inga fasta priser — varje uppdrag är unikt. Istället förklarar vi vad som
            påverkar priset så ni vet vad ni kan förvänta er. Alla prisförslag är kostnadsfria.
          </p>
        </div>
      </section>

      <section className="section-padding section-muted">
        <div className="container-content max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-dark-900 sm:text-3xl">
            Vad påverkar priset?
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Objektets yta', desc: 'Större tak eller fasader kräver längre flygtid och mer bildbearbetning.' },
              { title: 'Antal våningsplan', desc: 'Flervåningsfasader kräver flera flygpass och mer detaljerad dokumentation.' },
              { title: 'Typ av inspektion', desc: 'Visuell, termisk eller kombinerad inspektion har olika krav på flygmönster och analys.' },
              { title: 'Leverabler', desc: 'Enkel rapport, termisk analys, ortofoto eller 3D-modell påverkar bearbetningstiden.' },
              { title: 'Restid', desc: 'Objekt utanför storstadsregioner kan innebära restidstillägg.' },
              { title: 'Antal objekt', desc: 'Fler objekt i samma område ger volymfördelar. Löpande avtal ger bäst villkor.' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-dark-100 bg-white p-5 shadow-card">
                <h3 className="font-semibold text-dark-900">{item.title}</h3>
                <p className="mt-2 text-sm text-dark-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-content max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-dark-900 sm:text-3xl">
            Tre avtalsmodeller
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-dark-500">
            Välj det upplägg som passar ert behov.
          </p>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {[
              {
                name: 'Enstaka inspektion',
                description: 'En enskild inspektion av tak, fasad eller anläggning.',
                features: [
                  'Flygning och datainsamling',
                  'Rapport med bilder och noteringar',
                  'Rekommenderade åtgärder',
                  'Digitalt bildarkiv',
                  'Rapport inom 48 timmar',
                ],
                highlighted: false,
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
                highlighted: true,
              },
              {
                name: 'Förvaltningsavtal',
                description: 'Regelbundna inspektioner med fast intervall och pris.',
                features: [
                  'Allt i Flerobjektsavtal',
                  'Schemalagda inspektioner 1–2 ggr/år',
                  'Historisk jämförelse',
                  'Prioriterad hantering',
                  'Årsrapport med trendanalys',
                ],
                highlighted: false,
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-xl border p-6 md:p-8 ${
                  tier.highlighted
                    ? 'border-accent-400/30 bg-accent-50 shadow-lg ring-2 ring-accent-400/20'
                    : 'border-dark-100 bg-white'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-pill bg-accent-400 px-4 py-1 text-xs font-semibold text-dark-900">
                    Populärast
                  </div>
                )}
                <h3 className="text-xl font-bold text-dark-900">{tier.name}</h3>
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
                    href="/kontakt"
                    className={`block w-full rounded-lg px-6 py-3 text-center text-sm font-semibold transition-colors ${
                      tier.highlighted
                        ? 'bg-accent-400 text-dark-900 hover:bg-accent-300'
                        : 'border-2 border-brand-500 text-brand-700 hover:bg-brand-50'
                    }`}
                  >
                    Begär prisförslag
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-dark-400">
            Vill ni veta mer om löpande avtal?{' '}
            <Link href="/forvaltningsavtal" className="text-brand-700 underline hover:text-brand-500">
              Läs om förvaltningsavtal
            </Link>
          </p>
        </div>
      </section>

      <FaqAccordion headline="Vanliga frågor om prissättning" items={faqItems} />

      <CtaBand
        headline="Begär ett kostnadsfritt prisförslag"
        description="Beskriv ert behov så återkommer vi inom 24 timmar med ett prisförslag."
        ctaLabel="Begär prisförslag"
      />
    </>
  )
}
