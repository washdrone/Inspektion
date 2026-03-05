import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { BenefitsGrid } from '@/components/BenefitsGrid'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { faqSchema } from '@/lib/schema'

export const metadata: Metadata = createMetadata({
  title: 'Förvaltningsavtal — Löpande drönarinspektion',
  description:
    'Avvikelser syns bäst över tid. Med förvaltningsavtal från SurveyDrone får ni förbokade inspektioner, historisk jämförelse och fast pris. Perfekt för BRF och fastighetsbolag.',
  path: '/forvaltningsavtal',
})

const faqItems = [
  {
    question: 'Vad ingår i ett förvaltningsavtal?',
    answer: 'Förbokad inspektion 1–2 gånger per år, fullständig rapport med termiska och visuella bilder, historisk jämförelse mellan tillfällen, prioriterad hantering och fast pris utan överraskningar.',
  },
  {
    question: 'Hur ofta bör inspektioner genomföras?',
    answer: 'För de flesta fastigheter rekommenderar vi inspektion 1–2 gånger per år — gärna en gång på hösten innan vintern och en gång på våren efter snösmältning. Vi anpassar frekvensen efter era behov.',
  },
  {
    question: 'Kan vi lägga till fler objekt under avtalstiden?',
    answer: 'Ja, avtalet kan utökas med fler fastigheter eller objekt. Vi justerar villkoren i samråd med er.',
  },
  {
    question: 'Vilka passar förvaltningsavtal för?',
    answer: 'Förvaltningsavtal passar bäst för BRF:er, fastighetsbolag, kommuner och energibolag med återkommande inspektionsbehov. Det ger bättre villkor och kontinuerlig uppföljning.',
  },
  {
    question: 'Hur ser den historiska jämförelsen ut?',
    answer: 'Vi jämför data från varje inspektionstillfälle visuellt och termiskt. Rapporten visar tydligt vad som förändrats sedan senaste inspektion — nya avvikelser, förbättringar och oförändrade brister.',
  },
]

export default function ForvaltningsavtalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqItems)) }}
      />

      <Breadcrumbs
        items={[
          { name: 'Hem', url: '/' },
          { name: 'Förvaltningsavtal', url: '/forvaltningsavtal' },
        ]}
      />

      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold text-dark-900 sm:text-4xl lg:text-display">
              Förvaltningsavtal för löpande inspektion
            </h1>
            <p className="mt-4 text-lg text-dark-500">
              Avvikelser syns bäst över tid. Samma fastighet inspekterad tre år i rad berättar en historia
              som en enstaka inspektion aldrig kan ge. Med ett förvaltningsavtal får ni kontinuerlig
              uppföljning, historisk jämförelse och fast pris.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding section-muted">
        <div className="container-content">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-2xl font-bold text-dark-900 sm:text-3xl">Vad ingår?</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'Förbokad inspektion', desc: '1–2 gånger per år, schemalagd i förväg så ni slipper planera.' },
                { title: 'Termisk + visuell analys', desc: 'Fullständig inspektion med branschledande termisk kamera och RGB.' },
                { title: 'Historisk jämförelse', desc: 'Jämförelse av fynd mellan inspektionstillfällen visar förändringar över tid.' },
                { title: 'Prioriterad hantering', desc: 'Avtalskunders uppdrag prioriteras vid bokning och rapportleverans.' },
                { title: 'Fast pris', desc: 'Inga överraskningar. Ni vet exakt vad det kostar per år.' },
                { title: 'Digital dokumentation', desc: 'Allt material lagras digitalt och finns tillgängligt för framtida jämförelse.' },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-dark-100 bg-white p-5 shadow-card">
                  <h3 className="font-semibold text-dark-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-dark-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Varför löpande avtal?"
        subtitle="Fördelarna med kontinuerlig inspektion jämfört med enstaka uppdrag."
        benefits={[
          {
            title: 'Trendanalys',
            description: 'Se hur takets eller fasadens skick förändras år för år. Identifiera försämringar tidigt.',
            icon: 'chart',
          },
          {
            title: 'Förebyggande underhåll',
            description: 'Fånga problem innan de blir kostsamma reparationer. Data driver besluten.',
            icon: 'shield',
          },
          {
            title: 'Bättre beslutsunderlag',
            description: 'Historisk data ger styrelsen eller förvaltaren konkret underlag för underhållsbudget.',
            icon: 'file',
          },
          {
            title: 'Tidsbesparing',
            description: 'Slipper upphandla ny leverantör varje gång. Vi känner redan era fastigheter.',
            icon: 'clock',
          },
          {
            title: 'Ekonomiska fördelar',
            description: 'Löpande avtal ger bättre villkor jämfört med enstaka inspektioner.',
            icon: 'chart',
          },
          {
            title: 'Dokumenterat skick',
            description: 'Komplett bildarkiv och rapporthistorik — värdefullt vid försäljning eller försäkringsärende.',
            icon: 'camera',
          },
        ]}
      />

      <section className="section-padding section-muted">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-dark-900 sm:text-3xl">Passar för</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { title: 'BRF:er', desc: 'Regelbunden takkontroll som beslutsunderlag för underhållsplaner.' },
              { title: 'Fastighetsbolag', desc: 'Effektiv tillsyn av hela beståndet med jämförelsedata.' },
              { title: 'Kommuner', desc: 'Systematisk inspektion av offentliga byggnader och anläggningar.' },
              { title: 'Energibolag', desc: 'Löpande kontroll av solcellsparker och tekniska installationer.' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-dark-100 bg-white p-5 text-left">
                <h3 className="font-semibold text-dark-900">{item.title}</h3>
                <p className="mt-1 text-sm text-dark-500">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/kontakt" className="btn-primary px-8 py-4 text-base">
              Diskutera förvaltningsavtal
            </Link>
          </div>
        </div>
      </section>

      <FaqAccordion headline="Vanliga frågor om förvaltningsavtal" items={faqItems} />

      <CtaBand
        headline="Investera i långsiktig fastighetsdata"
        description="Kontakta oss för att diskutera ett förvaltningsavtal anpassat efter ert bestånd."
        ctaLabel="Kontakta oss"
      />
    </>
  )
}
