import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { faqSchema } from '@/lib/schema'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = createMetadata({
  title: 'Vanliga frågor om drönare-inspektion | SurveyDrone — FAQ',
  description:
    'Svar på vanliga frågor om drönare-inspektion med termisk kamera. Tillstånd, säkerhet, priser, leverans och certifieringar. SurveyDrone — EASA-certifierade piloter.',
  path: '/inspektioner-med-dronare/faq',
})

const allFaqItems = [
  {
    question: 'Vad är en drönarinspektion?',
    answer: 'En drönarinspektion innebär att en certifierad pilot flyger en drönare utrustad med högupplöst kamera för att dokumentera och inspektera byggnader, anläggningar eller andra strukturer från luften.',
  },
  {
    question: 'Vilka typer av objekt kan inspekteras med drönare?',
    answer: 'Vi inspekterar tak, fasader, solcellsanläggningar, byggplatser, industrianläggningar, cisterner, skorstenar, master och andra svåråtkomliga strukturer.',
  },
  {
    question: 'Hur lång tid tar en inspektion?',
    answer: 'En inspektion på plats tar normalt 1–3 timmar beroende på objektets storlek och komplexitet. Rapporten levereras sedan normalt inom ett par arbetsdagar.',
  },
  {
    question: 'Behövs det tillstånd för att flyga drönare?',
    answer: 'Vi sköter alla nödvändiga tillstånd och anmälningar. Våra piloter är EASA-certifierade och vi följer Transportstyrelsens regler för drönare i Sverige.',
  },
  {
    question: 'Kan ni flyga i tätbebyggda områden?',
    answer: 'Ja, vi har kompetens och rutiner för att operera i tätbebyggda områden. Vi genomför alltid en riskbedömning och anmälan enligt gällande regler.',
  },
  {
    question: 'Vad ingår i rapporten?',
    answer: 'Rapporten innehåller högupplösta bilder med annoteringar, en sammanfattning av identifierade problem, gradering av skador och rekommendationer för åtgärder.',
  },
  {
    question: 'Hur levereras bildmaterialet?',
    answer: 'Allt material levereras digitalt via en säker länk. Ni kan ladda ner bilder, video och rapport i fullständig upplösning.',
  },
  {
    question: 'Kan materialet användas som beslutsunderlag?',
    answer: 'Ja, rapporten och bildmaterialet är utformat som beslutsunderlag för underhåll, renovering eller försäkringsärenden.',
  },
  {
    question: 'Hur mycket kostar en drönarinspektion?',
    answer: 'Priset beror på objektets storlek, typ och placering. Vi erbjuder alltid en kostnadsfri offert. Se vår prissida för mer information om våra avtalsmodeller.',
  },
  {
    question: 'Kostar offerten något?',
    answer: 'Nej, offerten är helt kostnadsfri och utan förpliktelser.',
  },
  {
    question: 'Hur bokar man en inspektion?',
    answer: 'Kontakta oss via formuläret, e-post eller telefon. Beskriv ert objekt och behov så återkommer vi med en offert och förslag på tid.',
  },
  {
    question: 'Är ni försäkrade?',
    answer: 'Ja, vi har ansvarsförsäkring som täcker drönare och pilotverksamhet.',
  },
  {
    question: 'Var i Sverige är ni verksamma?',
    answer: 'Vi utför inspektioner i hela Sverige. Resekostnader kan tillkomma beroende på uppdragets placering.',
  },
  {
    question: 'Kan ni erbjuda regelbundna inspektioner?',
    answer: 'Ja, vi erbjuder löpande avtal med regelbundna inspektioner för fastighetsförvaltare och andra kunder med återkommande behov.',
  },
]

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(allFaqItems)) }}
      />

      <Breadcrumbs
        items={[
          { name: 'Hem', url: '/' },
          { name: 'Inspektioner med drönare', url: '/inspektioner-med-dronare' },
          { name: 'FAQ', url: '/inspektioner-med-dronare/faq' },
        ]}
      />

      <section className="section-padding">
        <div className="container-content text-center">
          <h1 className="text-3xl font-bold text-dark-900 sm:text-4xl">
            Vanliga frågor om drönarinspektion
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-dark-500">
            Här har vi samlat svar på de vanligaste frågorna vi får om drönarinspektioner.
            Hittar du inte svaret du söker? Kontakta oss direkt.
          </p>
        </div>
      </section>

      <FaqAccordion items={allFaqItems} />

      <CtaBand
        headline="Har du fler frågor?"
        description="Kontakta oss så svarar vi gärna på dina funderingar."
        ctaLabel="Kontakta oss"
        ctaHref="/inspektioner-med-dronare/kontakt"
      />
    </>
  )
}
