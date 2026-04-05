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
  title: 'Takinspektion med drönare — Säker och effektiv drönarinspektion av tak',
  description:
    'Takinspektion med drönare utförs av EASA-certifierade piloter med termisk kamera. Upptäck läckor, fuktskador och isoleringsbrister utan ställning. Hela Sverige.',
  path: '/takinspektion-med-dronare',
})

const faqItems = [
  {
    question: 'Vad är takinspektion med drönare?',
    answer:
      'Takinspektion med drönare är en metod där en fjärrstyrd UAV utrustad med kamera flyger över takytan och samlar in visuella och termiska data. Metoden ersätter behovet av att personal klättrar upp på taket, vilket eliminerar fallrisker och behovet av ställning eller skylift.',
  },
  {
    question: 'Vilka skador kan upptäckas vid en drönarinspektion av tak?',
    answer:
      'En drönarinspektion av tak kan identifiera sprickor, lossnade pannor, trasiga tätskikt, skadade plåtbeslag, vegetationstillväxt, sättningar och dåligt fungerande avvattning. Med termisk kamera kan även dolda fuktskador, läckor och isoleringsbrister upptäckas som inte syns med blotta ögat.',
  },
  {
    question: 'Fungerar takinspektion med drönare på alla typer av tak?',
    answer:
      'Ja, metoden fungerar på alla vanliga taktyper — platta tak, sadeltak, pulpettak, industritak och gröna tak. Den är lika effektiv på bostadsrättsföreningar som på stora industrianläggningar och kommersiella fastigheter.',
  },
  {
    question: 'Hur lång tid tar en takinspektion med drönare?',
    answer:
      'Själva flygningen tar normalt betydligt kortare tid än en traditionell manuell inspektion. Den exakta tidsåtgången beror på takets storlek och komplexitet. Kontakta oss för en bedömning baserad på er fastighet.',
  },
  {
    question: 'Vilka certifieringar har era drönarpilöter?',
    answer:
      'Alla våra fjärrpiloter är EASA-certifierade och hanterar samtliga nödvändiga tillstånd och flygplaner. Vi är ansvarsförsäkrade och genomför alla flygningar i enlighet med gällande regelverk.',
  },
  {
    question: 'Behöver vi som fastighetsägare ordna några tillstånd?',
    answer:
      'Nej, vi tar hand om alla tillstånd och den administrativa hanteringen. Våra piloter ansvarar för flygplaner och säkerställer att alla regelverk följs. Ni behöver bara ge oss tillträde till fastigheten.',
  },
  {
    question: 'Vad ingår i rapporten efter takinspektionen?',
    answer:
      'Rapporten innehåller högupplösta flygbilder, termiska kartor, skadeklassificering efter allvarlighetsgrad samt konkreta åtgärdsrekommendationer. Allt levereras som en digital rapport i PDF-format.',
  },
  {
    question: 'Erbjuder ni takinspektion med drönare i hela Sverige?',
    answer:
      'Ja, vi erbjuder takinspektion med drönare i hela Sverige. Vi har genomfört uppdrag från Malmö i söder till Luleå i norr. Kontakta oss på info@surveydrone.se för att boka en inspektion i ert område.',
  },
]

export default function TakinspektionMedDronarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Takinspektion med drönare',
              description:
                'Professionell takinspektion med drönare och termisk kamera. EASA-certifierade piloter genomför säkra och effektiva takinspektioner utan ställning i hela Sverige.',
              url: '/takinspektion-med-dronare',
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
          { name: 'Takinspektion med drönare', url: '/takinspektion-med-dronare' },
        ]}
      />

      <Hero
        headline="Takinspektion med drönare"
        subheadline="Professionell drönarinspektion av tak med visuell och termisk datainsamling. Våra EASA-certifierade piloter identifierar skador, fukt och isoleringsbrister — utan ställning, utan fallrisk och utan driftstopp."
        ctaPrimary={{ label: 'Begär offert', href: '/kontakt' }}
        ctaSecondary={{ label: 'Se hur det fungerar', href: '#process' }}
      />

      <TrustBar
        items={[
          'EASA-certifierade piloter',
          'Ansvarsförsäkrade',
          'Hela Sverige',
          'Termisk kamera',
        ]}
      />

      {/* AEO-sektion: Vad är takinspektion med drönare? */}
      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-heading-lg sm:text-display">
              Vad är takinspektion med drönare?
            </h2>
            <p className="mt-6 text-body-lg text-dark-500">
              Takinspektion med drönare innebär att en fjärrstyrd UAV utrustad med kamera flyger
              över taket och dokumenterar takytan i detalj. Till skillnad från traditionell
              takinspektion behöver ingen personal vistas på taket, vilket eliminerar risken
              för fallolyckor och behovet av ställning eller skylift.
            </p>
            <p className="mt-4 text-body-lg text-dark-500">
              Metoden kombinerar högupplösta visuella bilder med{' '}
              <Link href="/tjanster/termisk-inspektion" className="text-brand-600 underline hover:text-brand-700">
                termisk inspektion
              </Link>{' '}
              för att upptäcka både synliga skador och dolda problem som fuktinträngning och
              isoleringsbrister. Termisk datainsamling avslöjar temperaturavvikelser i takytan
              som indikerar fuktproblem — något som kompletterar en dedikerad{' '}
              <Link href="/tjanster/fuktinspektion" className="text-brand-600 underline hover:text-brand-700">
                fuktinspektion
              </Link>
              .
            </p>
            <p className="mt-4 text-body-lg text-dark-500">
              SurveyDrone genomför professionella{' '}
              <Link href="/tjanster/takinspektion" className="text-brand-600 underline hover:text-brand-700">
                takinspektioner
              </Link>{' '}
              i hela Sverige. Alla flygningar utförs av EASA-certifierade fjärrpiloter med
              fullständig ansvarsförsäkring, och vi hanterar samtliga tillstånd och flygplaner.
            </p>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Fördelar med takinspektion med drönare"
        subtitle="Drönarbaserad takinspektion erbjuder tydliga fördelar jämfört med traditionella metoder."
        benefits={[
          {
            icon: 'shield',
            title: 'Ingen fallrisk',
            description:
              'Ingen personal behöver vistas på taket. Eliminerar risken för fallolyckor och behovet av ställning eller skylift.',
          },
          {
            icon: 'clock',
            title: 'Snabbt genomförande',
            description:
              'Drönarinspektion av tak genomförs betydligt snabbare än manuella metoder, vilket minimerar driftstörningar.',
          },
          {
            icon: 'camera',
            title: 'Termisk och visuell data',
            description:
              'Kombinationen av högupplösta bilder och termisk kamera ger en komplett bild av takets skick.',
          },
          {
            icon: 'chart',
            title: 'Dokumenterat beslutsunderlag',
            description:
              'Alla fynd dokumenteras med bilder, termogrammer och skadeklassificering — ett komplett underlag för underhållsplanering.',
          },
          {
            icon: 'building',
            title: 'Alla taktyper och storlekar',
            description:
              'Metoden fungerar på platta tak, sadeltak, industritak och gröna tak. Från bostadsrättsföreningar till stora industrifastigheter.',
          },
          {
            icon: 'file',
            title: 'Åtgärdsrapport',
            description:
              'Överskådlig rapport med prioriterade åtgärdsförslag som gör det enkelt att planera underhåll.',
          },
        ]}
      />

      {/* AEO-sektion: Vad kan upptäckas? */}
      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-heading-lg sm:text-display">
              Vad kan upptäckas vid takinspektion med drönare?
            </h2>
            <p className="mt-6 text-body-lg text-dark-500">
              En drönarinspektion av tak kan identifiera en rad skador och brister som
              påverkar takets funktion och livslängd. Genom att kombinera visuell inspektion
              med termisk kamera kan både synliga och dolda problem kartläggas.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-heading-sm font-semibold">Visuella skador</h3>
                <ul className="mt-3 space-y-2 text-body text-dark-500">
                  <li>Sprickor och hål i tätskikt</li>
                  <li>Lossnade eller skadade takpannor</li>
                  <li>Skadade plåtbeslag och fogar</li>
                  <li>Vegetationstillväxt och mossa</li>
                  <li>Sättningar och deformationer</li>
                  <li>Bristande avvattning och igensatta brunnar</li>
                </ul>
              </div>
              <div>
                <h3 className="text-heading-sm font-semibold">Termiska avvikelser</h3>
                <ul className="mt-3 space-y-2 text-body text-dark-500">
                  <li>Fuktinträngning under tätskikt</li>
                  <li>Bristande eller skadad isolering</li>
                  <li>Dolda läckor</li>
                  <li>Köldbryggor</li>
                  <li>Temperaturavvikelser i takyta</li>
                  <li>Avvikelser vid genomföringar och anslutningar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps
        headline="Så går en takinspektion med drönare till"
        steps={[
          {
            number: 1,
            title: 'Kontakt och planering',
            description:
              'Ni beskriver era behov och vi gör en riskbedömning. Vi planerar flygningen utifrån fastighetens förutsättningar och hanterar alla tillstånd.',
          },
          {
            number: 2,
            title: 'Flygning och datainsamling',
            description:
              'Våra EASA-certifierade piloter genomför flygningen med visuell och termisk kamera. Takytan dokumenteras systematiskt.',
          },
          {
            number: 3,
            title: 'Analys och bearbetning',
            description:
              'Alla bilder och termiska data analyseras för att identifiera skador, fukt, isoleringsbrister och andra avvikelser.',
          },
          {
            number: 4,
            title: 'Rapport och leverans',
            description:
              'Ni får en komplett rapport med bilder, termogrammer, skadeklassificering och prioriterade åtgärdsrekommendationer.',
          },
        ]}
      />

      <Deliverables
        headline="Det här ingår i leveransen"
        items={[
          {
            title: 'Högupplösta flygbilder',
            description:
              'Detaljerade RGB-bilder av hela takytan med närbilder av identifierade skador och avvikelser.',
          },
          {
            title: 'Termiska kartor',
            description:
              'Fullradiometriska termogrammer som visar temperaturfördelning och avvikelser i takytan.',
          },
          {
            title: 'Skadeklassificering',
            description:
              'Varje identifierat problem klassificeras efter allvarlighetsgrad och åtgärdsprioritet.',
          },
          {
            title: 'Åtgärdsrekommendationer',
            description:
              'Konkreta förslag på åtgärder baserade på analysens resultat, anpassade för underhållsplanering.',
          },
          {
            title: 'Digital rapport',
            description:
              'Komplett inspektionsrapport i PDF-format med sammanfattning, detaljbilagor och bildmaterial.',
          },
          {
            title: 'Georefererade bilder',
            description:
              'Kartöverlägg med positionsdata som kan integreras i ert fastighetssystem.',
          },
        ]}
      />

      <FaqAccordion headline="Vanliga frågor om takinspektion med drönare" items={faqItems} />

      <RelatedServices
        services={[
          {
            title: 'Fasadinspektion',
            href: '/tjanster/fasadinspektion',
            description:
              'Inspektion av fasader och byggnadsskal med högupplöst kamera och termisk analys.',
          },
          {
            title: 'Solcellsinspektion',
            href: '/tjanster/solcellsinspektion',
            description:
              'Termisk inspektion av solcellsanläggningar för att identifiera defekta paneler och hotspots.',
          },
          {
            title: 'Termisk inspektion',
            href: '/tjanster/termisk-inspektion',
            description:
              'Avancerad termisk analys för att upptäcka dolda problem i byggnader och anläggningar.',
          },
        ]}
      />

      <CtaBand
        headline="Boka takinspektion med drönare"
        description="Kontakta oss för en kostnadsfri konsultation. Vi hjälper er med en inspektion anpassad efter era behov."
        ctaLabel="Begär offert"
        ctaHref="/kontakt"
      />
    </>
  )
}
