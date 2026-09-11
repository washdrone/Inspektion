import type { Metadata } from 'next'
import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { faqSchema } from '@/lib/schema'
import { Hero } from '@/components/Hero'
import { TrustBar } from '@/components/TrustBar'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { RelatedServices } from '@/components/RelatedServices'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = createMetadata({
  title: 'Vad kostar drönarinspektion? Frågor inför beställning',
  description:
    'Vad kostar en drönarinspektion? Priset beror på objektets storlek, inspektionstyp, geografiskt läge och komplexitet. Begär kostnadsfri offert från SurveyDrone.',
  path: '/vad-kostar-dronarinspektion',
})

const faqItems = [
  {
    question: 'Vad kostar takinspektion med drönare?',
    answer:
      'Priset för en takinspektion med drönare beror på takets storlek, komplexitet och vilken typ av inspektion som behövs (visuell, termisk eller kombinerad). Kontakta oss för en kostnadsfri offert anpassad efter ert objekt.',
  },
  {
    question: 'Är drönarinspektion billigare än traditionell inspektion med ställning?',
    answer:
      'Drönarinspektion eliminerar behovet av ställning, skylift och manuellt klättringsarbete, vilket normalt innebär lägre totalkostnad och kortare genomförandetid. Den exakta besparingen varierar beroende på objektet.',
  },
  {
    question: 'Kan man få offert utan kostnad?',
    answer:
      'Ja, alla våra offerter är helt kostnadsfria och utan förpliktelser. Beskriv ert objekt och era behov så återkommer vi snarast med ett prisförslag.',
  },
  {
    question: 'Vad ingår i priset för en drönarinspektion?',
    answer:
      'Priset inkluderar planering, flygning med datainsamling, analys av insamlad data samt en professionell rapport med bilder, avvikelser och åtgärdsförslag. Eventuella tillägg som termisk analys eller 3D-modell specificeras alltid i offerten.',
  },
  {
    question: 'Finns det volymrabatt vid flera fastigheter?',
    answer:
      'Ja, vi erbjuder förmånligare villkor vid inspektion av flera objekt inom samma uppdrag eller vid löpande avtal. Kontakta oss för att diskutera ett upplägg som passar ert fastighetsbestånd.',
  },
  {
    question: 'Hur snabbt får man offert?',
    answer:
      'Vi återkommer snarast med ett prisförslag baserat på er beskrivning av objektet och era behov.',
  },
  {
    question: 'Tillkommer det extra kostnader utöver offerten?',
    answer:
      'Nej, priset i offerten är det pris som gäller. Eventuella tillkommande önskemål diskuteras och godkänns alltid i förväg.',
  },
]

export default function VadKostarDronarinspektionPage() {
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
          { name: 'Vad kostar drönarinspektion?', url: '/vad-kostar-dronarinspektion' },
        ]}
      />

      <Hero
        headline="Vad kostar en drönarinspektion?"
        subheadline="Priset beror på objektets storlek, typ av inspektion och komplexitet. Vi lämnar alltid kostnadsfri offert — anpassad efter just ert behov."
        ctaPrimary={{ label: 'Begär kostnadsfri offert', href: '/kontakt' }}
        ctaSecondary={{ label: 'Se prismodell', href: '/priser' }}
      />

      <TrustBar
        items={[
          'EASA-certifierade piloter',
          'Ansvarsförsäkrade',
          'Hela Sverige',
          'Kostnadsfri offert',
        ]}
      />

      {/* AEO section: Vad kostar en drönarinspektion? */}
      <section className="section-padding">
        <div className="container-content max-w-3xl">
          <h2 className="text-heading-lg sm:text-display">
            Vad kostar en drönarinspektion?
          </h2>
          <div className="mt-6 space-y-4 text-dark-600">
            <p>
              Det finns inget fast pris för en drönarinspektion, eftersom varje uppdrag är unikt.
              Kostnaden beror på flera faktorer, bland annat objektets storlek, vilken typ av
              inspektion som behövs och var objektet är beläget.
            </p>
            <p>
              Istället för att publicera priser som sällan stämmer med verkligheten erbjuder vi
              alltid en <strong>kostnadsfri offert</strong> baserad på just ert objekt och era
              behov. På så sätt får ni ett korrekt prisförslag utan överraskningar.
            </p>
            <p>
              Vill ni förstå vår prismodell i mer detalj?{' '}
              <Link
                href="/priser"
                className="link-inline"
              >
                Läs mer om vår prismodell och avtalsformer
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Vad påverkar priset? */}
      <section className="section-padding section-muted">
        <div className="container-content max-w-4xl">
          <h2 className="text-center text-heading-lg sm:text-display">
            Vad påverkar priset?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-dark-500">
            Flera faktorer avgör kostnaden för en drönarinspektion. Här är de vanligaste.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Objektets storlek',
                desc: 'Antal kvadratmeter tak eller fasad påverkar flygtid och mängden data som ska bearbetas.',
              },
              {
                title: 'Typ av inspektion',
                desc: 'Visuell inspektion, termisk inspektion eller en kombination av båda har olika krav på utrustning och analys.',
              },
              {
                title: 'Geografiskt läge',
                desc: 'Objektets placering och tillgänglighet kan påverka kostnaden, särskilt vid längre restider.',
              },
              {
                title: 'Komplexitet',
                desc: 'Tak med många nivåer, industriobjekt eller byggnader i tätbebyggda områden kräver mer planering och flygtid.',
              },
              {
                title: 'Antal objekt',
                desc: 'Inspektion av flera fastigheter inom samma uppdrag ger normalt förmånligare villkor per objekt.',
              },
              {
                title: 'Rapport och leveranstid',
                desc: 'Typen av rapport (standard, termisk analys, 3D-modell) och önskad leveranstid påverkar den totala kostnaden.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card"
              >
                <h3 className="font-semibold text-dark-900">{item.title}</h3>
                <p className="mt-2 text-sm text-dark-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Varför är drönarinspektion kostnadseffektivt? */}
      <section className="section-padding">
        <div className="container-content max-w-3xl">
          <h2 className="text-heading-lg sm:text-display">
            Varför är drönarinspektion kostnadseffektivt?
          </h2>
          <div className="mt-6 space-y-4 text-dark-600">
            <p>
              Traditionella inspektionsmetoder kräver ofta ställning, skylift eller manuellt
              klättringsarbete, vilket innebär höga kostnader för utrustning, arbetskraft och
              säkerhetsåtgärder. Med drönarinspektion elimineras dessa behov helt.
            </p>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: 'Ingen ställning eller skylift',
                desc: 'Drönaren når tak, fasader och svårtillgängliga ytor utan behov av fysisk åtkomst, vilket tar bort en stor kostnadsdrivare.',
              },
              {
                title: 'Kortare genomförandetid',
                desc: 'En drönarinspektion genomförs ofta på timmar istället för dagar, vilket minskar störningar i verksamheten.',
              },
              {
                title: 'Lägre risk och färre säkerhetskostnader',
                desc: 'Arbete på höjd innebär säkerhetskrav och risker. Med drönare utförs inspektionen från marken, vilket minskar kostnader för säkerhetsutrustning.',
              },
              {
                title: 'Bättre beslutsunderlag',
                desc: 'Högupplösta bilder, termiska data och georefererade avvikelser ger ett underlag som minskar risken för felaktiga åtgärdsbeslut.',
              },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="font-semibold text-dark-900">{item.title}</h3>
                <p className="mt-2 text-sm text-dark-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vad ingår i priset? */}
      <section className="section-padding section-muted">
        <div className="container-content max-w-3xl">
          <h2 className="text-center text-heading-lg sm:text-display">
            Vad ingår i priset?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-dark-500">
            Oavsett objektets storlek ingår alltid dessa moment i en drönarinspektion från
            SurveyDrone.
          </p>
          <div className="mt-10 space-y-6">
            {[
              {
                step: '1',
                title: 'Planering och förberedelse',
                desc: 'Vi kontrollerar luftrum, väderförhållanden och eventuella tillstånd. All myndighetshantering sköts av oss.',
              },
              {
                step: '2',
                title: 'Flygning och datainsamling',
                desc: 'EASA-certifierad pilot genomför inspektionen och samlar in högupplösta bilder och eventuell termisk data.',
              },
              {
                step: '3',
                title: 'Analys av insamlad data',
                desc: 'Alla avvikelser identifieras, georefereras och prioritetsklassas av våra analytiker.',
              },
              {
                step: '4',
                title: 'Professionell rapport',
                desc: 'Ni får en tydlig rapport med bilder, identifierade avvikelser och rekommenderade åtgärder. Leveranstiden framgår av offerten.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 md:gap-6">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-700 text-sm font-bold text-white">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-dark-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-dark-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion headline="Vanliga frågor om kostnader" items={faqItems} />

      <RelatedServices
        headline="Läs mer om våra inspektionstyper"
        services={[
          {
            title: 'Takinspektion med drönare',
            href: '/takinspektion-med-dronare',
            description:
              'Guide till takinspektion — hur det fungerar, vad som kan upptäckas och fördelar jämfört med ställning.',
          },
          {
            title: 'Termisk inspektion',
            href: '/termisk-inspektion',
            description:
              'Allt om termisk inspektion — hur fullradiometrisk data avslöjar fukt, köldbryggor och isoleringsbrister.',
          },
          {
            title: 'Fasadinspektion med drönare',
            href: '/fasadinspektion',
            description:
              'Guide till fasadinspektion — vilka skador som upptäcks och hur drönare ersätter ställning.',
          },
        ]}
      />

      <CtaBand
        headline="Begär en kostnadsfri offert"
        description="Beskriv ert objekt och era behov — vi återkommer snarast med ett prisförslag anpassat efter just er inspektion."
        ctaLabel="Begär offert"
      />
    </>
  )
}
