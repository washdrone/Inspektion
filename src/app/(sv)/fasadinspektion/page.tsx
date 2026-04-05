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
  title: 'Fasadinspektion med drönare — sprickor, fukt och skador utan ställning',
  description:
    'Professionell fasadinspektion med drönare. Upptäck sprickor, fuktskador, fogbrister och putssläpp utan ställning. EASA-certifierade piloter. Hela Sverige.',
  path: '/fasadinspektion',
})

const faqItems = [
  {
    question: 'Vad innebär fasadinspektion med drönare?',
    answer:
      'Fasadinspektion med drönare innebär att en fjärrstyrd drönare utrustad med kameror flyger längs byggnadens fasader och dokumenterar skicket. Metoden ersätter i många fall behovet av ställning eller skylift för själva inspektionsmomentet och ger högupplösta bilder som underlag för bedömning.',
  },
  {
    question: 'Vilka typer av fasadskador kan upptäckas?',
    answer:
      'Vanliga fynd vid fasadinspektion inkluderar sprickor i puts eller betong, fogskador, putssläpp, fuktgenomslag, mögelpåväxt, korrosion på infästningar och lösa fasadelement. Med termisk kamera kan även dolda fuktproblem och köldbryggor identifieras.',
  },
  {
    question: 'Behövs det ställning vid en drönarinspektion av fasaden?',
    answer:
      'Nej, i de allra flesta fall ersätter drönaren behovet av ställning för inspektionsmomentet. Om fysiska åtgärder sedan behöver utföras kan ställning fortfarande krävas, men ni vet då exakt var insatserna behövs.',
  },
  {
    question: 'Kan ni inspektera fasader i stadsmiljö och tätbebyggda områden?',
    answer:
      'Ja. Våra EASA-certifierade piloter har erfarenhet av flygning i stadsmiljö. Vi genomför alltid en riskbedömning innan varje uppdrag och säkerställer att flygningen sker enligt gällande regelverk.',
  },
  {
    question: 'Vad ingår i rapporten efter en fasadinspektion?',
    answer:
      'Rapporten innehåller högupplösta bilder med markeringar av identifierade skador, skadeklassificering, termogrammer vid behov, en visuell skadekarta samt prioriterade åtgärdsrekommendationer. Allt levereras som digital PDF-rapport.',
  },
  {
    question: 'Hur bokar vi en fasadinspektion med drönare?',
    answer:
      'Kontakta oss via kontaktformuläret på surveydrone.se eller skicka e-post till info@surveydrone.se. Vi återkommer med en offert anpassad efter er fastighet.',
  },
  {
    question: 'Kan fasadinspektion kombineras med takinspektion?',
    answer:
      'Ja, det är vanligt att kombinera fasad- och takinspektion vid samma tillfälle. Det ger en komplett bild av byggnadens klimatskal och är tidseffektivt.',
  },
  {
    question: 'Vilka typer av byggnader kan inspekteras?',
    answer:
      'Vi inspekterar alla typer av byggnader — bostadshus, flerfamiljshus, kontorskomplex, industribyggnader, lagerlokaler och kulturhistoriska fastigheter. Flygningen anpassas efter byggnadens storlek och omgivning.',
  },
]

export default function FasadinspektionSeoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Fasadinspektion med drönare',
              description:
                'Professionell fasadinspektion med drönare. Upptäck sprickor, fuktskador, fogbrister och putssläpp utan ställning. EASA-certifierade piloter i hela Sverige.',
              url: '/fasadinspektion',
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
          { name: 'Fasadinspektion', url: '/fasadinspektion' },
        ]}
      />

      <Hero
        headline="Fasadinspektion med drönare — utan ställning, med precision"
        subheadline="Identifiera sprickor, fuktskador, fogbrister och putssläpp på byggnaders fasader. Våra EASA-certifierade fjärrpiloter dokumenterar fasaden med högupplösta bilder och termisk analys — snabbt, säkert och utan kostsam ställning."
        ctaPrimary={{ label: 'Begär offert', href: '/kontakt' }}
        ctaSecondary={{ label: 'Så fungerar det', href: '#process' }}
      />

      <TrustBar
        items={[
          'EASA-certifierade piloter',
          'Ansvarsförsäkrade',
          'Hela Sverige',
          'Ingen ställning krävs',
        ]}
      />

      {/* AEO-sektion: Vad är fasadinspektion med drönare? */}
      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-heading-lg sm:text-display">
              Vad är fasadinspektion med drönare?
            </h2>
            <p className="mt-6 text-body-lg text-dark-500">
              Fasadinspektion med drönare är en modern metod för att bedöma skicket på
              byggnaders ytterväggar utan att använda ställning, skylift eller reparbete.
              En professionell drönare flyger systematiskt längs fasaden och dokumenterar
              varje sektion med högupplösta bilder. Vid behov kompletteras inspektionen med{' '}
              <Link
                href="/tjanster/termisk-inspektion"
                className="text-primary-600 underline hover:text-primary-700"
              >
                termisk kamera
              </Link>{' '}
              för att identifiera dolda fuktproblem och köldbryggor.
            </p>
            <p className="mt-4 text-body-lg text-dark-500">
              Metoden är särskilt värdefull för fastighetsförvaltare, bostadsrättsföreningar
              och byggföretag som behöver ett tillförlitligt underlag för underhållsplanering.
              Läs mer om vår{' '}
              <Link
                href="/tjanster/fasadinspektion"
                className="text-primary-600 underline hover:text-primary-700"
              >
                fasadinspektionstjänst
              </Link>{' '}
              och hur vi anpassar uppdraget efter era behov.
            </p>
          </div>
        </div>
      </section>

      {/* Vad kan upptäckas vid fasadinspektion? */}
      <section className="section-padding bg-dark-50">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-heading-lg sm:text-display">
              Vad kan upptäckas vid en fasadinspektion?
            </h2>
            <p className="mt-6 text-body-lg text-dark-500">
              En noggrann fasadinspektion med drönare kan identifiera en rad problem som
              annars kan vara svåra att upptäcka från marknivå. Vanliga fynd inkluderar:
            </p>
            <ul className="mt-6 space-y-3 text-body text-dark-500">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary-600" />
                <span>
                  <strong>Sprickor i puts och betong</strong> — kan tyda på sättningar,
                  temperaturpåverkan eller materialutmattning.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary-600" />
                <span>
                  <strong>Fuktgenomslag och fuktskador</strong> — synliga fläckar,
                  missfärgningar eller, med termisk kamera, dolda fuktproblem bakom fasadytan.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary-600" />
                <span>
                  <strong>Fogskador och fogbrister</strong> — uttorkade, spruckna eller
                  saknade fogar som släpper in vatten och luft.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary-600" />
                <span>
                  <strong>Putssläpp och lös puts</strong> — partier där putsen har släppt
                  från underlaget och riskerar att falla ned.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary-600" />
                <span>
                  <strong>Köldbryggor och isoleringsbrister</strong> — identifieras med
                  termisk kamera och visar var fasaden läcker energi.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary-600" />
                <span>
                  <strong>Mögel och biologisk påväxt</strong> — alger, mossa eller mögel
                  som indikerar fuktproblem.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary-600" />
                <span>
                  <strong>Korrosion och skadade infästningar</strong> — rostiga beslag,
                  plåtdetaljer eller fästdon som behöver åtgärdas.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Fördelar med fasadinspektion med drönare"
        subtitle="En säkrare, snabbare och mer kostnadseffektiv metod för fasadbedömning."
        benefits={[
          {
            icon: 'shield',
            title: 'Säkrare arbetsmetod',
            description:
              'Ingen personal behöver arbeta på höjd. Eliminerar risker med ställning, skylift och reparbete.',
          },
          {
            icon: 'clock',
            title: 'Snabbare genomförande',
            description:
              'En drönarinspektion av fasaden tar en bråkdel av tiden jämfört med traditionella metoder.',
          },
          {
            icon: 'chart',
            title: 'Kostnadseffektivt',
            description:
              'Slipper kostnader för ställningsbygge, skylift och manuellt inspektionsarbete.',
          },
          {
            icon: 'file',
            title: 'Komplett dokumentation',
            description:
              'Strukturerade rapporter med skadeklassificering och åtgärdsrekommendationer som underlag för beslut.',
          },
          {
            icon: 'camera',
            title: 'Högupplösta bilder',
            description:
              'Detaljerade närbilder av fasaden som fångar sprickor, fogar och ytor med hög precision.',
          },
          {
            icon: 'building',
            title: 'Alla byggnadstyper',
            description:
              'Bostadshus, kontor, industrilokaler och kulturhistoriska byggnader — vi anpassar oss efter fasadens förutsättningar.',
          },
        ]}
      />

      <ProcessSteps
        headline="Så genomförs en fasadinspektion"
        steps={[
          {
            number: 1,
            title: 'Behovsanalys och planering',
            description:
              'Vi kartlägger era behov, byggnadens förutsättningar och omgivningen. En flygplan tas fram baserat på fasadens storlek och komplexitet.',
          },
          {
            number: 2,
            title: 'Inspektion med drönare',
            description:
              'Drönaren flyger systematiskt längs fasaderna och dokumenterar varje sektion med högupplösta kameror. Vid behov kompletteras med termisk kamera.',
          },
          {
            number: 3,
            title: 'Analys och bedömning',
            description:
              'Våra inspektörer analyserar alla bilder och termogrammer för att identifiera, klassificera och prioritera upptäckta skador.',
          },
          {
            number: 4,
            title: 'Rapport och åtgärdsförslag',
            description:
              'Ni får en komplett digital rapport med bilder, skadekarta, bedömningar och konkreta åtgärdsrekommendationer.',
          },
        ]}
      />

      <Deliverables
        headline="Det här ingår i leveransen"
        items={[
          {
            title: 'Högupplösta fasadbilder',
            description:
              'Systematisk dokumentation av alla fasader med detaljbilder av identifierade skador och avvikelser.',
          },
          {
            title: 'Termogrammer',
            description:
              'Termiska bilder som visar köldbryggor, fuktinträngning och isoleringsbrister i fasaden.',
          },
          {
            title: 'Visuell skadekarta',
            description:
              'Översikt av fasaden med markerade och klassificerade skador för enkel orientering.',
          },
          {
            title: 'Åtgärdsrekommendationer',
            description:
              'Prioriterade förslag på åtgärder baserat på skadornas allvarlighetsgrad och läge.',
          },
          {
            title: 'Digital inspektionsrapport',
            description:
              'Komplett rapport i PDF med sammanfattning, bilagor, metodbeskrivning och bildmaterial.',
          },
          {
            title: 'Råmaterial',
            description:
              'Tillgång till alla originalbilder och termogrammer för era egna analyser vid behov.',
          },
        ]}
      />

      <FaqAccordion headline="Vanliga frågor om fasadinspektion med drönare" items={faqItems} />

      <RelatedServices
        services={[
          {
            title: 'Takinspektion',
            href: '/tjanster/takinspektion',
            description:
              'Kombinera fasadinspektionen med en noggrann takinspektion för komplett kontroll av byggnadens klimatskal.',
          },
          {
            title: 'Termisk inspektion',
            href: '/termisk-inspektion',
            description:
              'Fördjupad termisk analys med infraröd kamera för att identifiera energiförluster, fukt och köldbryggor.',
          },
          {
            title: 'Solcellsinspektion',
            href: '/tjanster/solcellsinspektion',
            description:
              'Inspektion av solcellsanläggningar med termisk kamera för att upptäcka defekta celler och anslutningsfel.',
          },
        ]}
      />

      <CtaBand
        headline="Boka fasadinspektion med drönare"
        description="Få en komplett bild av er fasads skick — kontakta oss för en kostnadsfri offert."
        ctaLabel="Begär offert"
        ctaHref="/kontakt"
      />
    </>
  )
}
