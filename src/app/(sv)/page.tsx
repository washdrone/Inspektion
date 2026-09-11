import type { Metadata } from 'next'
import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { faqSchema } from '@/lib/schema'
import { SERVICE_LINKS } from '@/lib/constants'
import { Hero } from '@/components/Hero'
import { TrustBar } from '@/components/TrustBar'
import { ProcessSteps } from '@/components/ProcessSteps'
import { Testimonials } from '@/components/Testimonials'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { KnowledgeLinks } from '@/components/KnowledgeLinks'

export const metadata: Metadata = createMetadata({
  title: 'Drönarinspektion och inmätning i Sverige',
  description: 'Inspektera tak, fasader och solceller eller beställ inmätning och volymberäkning. SurveyDrone levererar beslutsunderlag i hela Sverige. Begär offert.',
  path: '/',
})

const homeFaqItems = [
  { question: 'Vilken tjänst passar vårt behov?', answer: 'Välj inspektion när ni behöver dokumentera synligt skick eller undersöka temperaturavvikelser på en byggnad eller anläggning. Välj inmätning och 3D när ni behöver mätdata, volymer, punktmoln eller modeller. Beskriv vad ni ska använda resultatet till, så stämmer vi av metod och leverans.' },
  { question: 'Vad får vi levererat?', answer: 'Vid inspektion får ni bilddokumentation och en rapport med fynd och rekommenderad uppföljning enligt uppdragets omfattning. Vid mätuppdrag bestäms rapport, koordinatsystem och filformat efter användningen. Offerten anger innehåll, eventuella tillval och leveranstid.' },
  { question: 'Vad behöver ni för att lämna offert?', answer: 'Beskriv objektet, orten och vad ni vill få svar på. Ange gärna ungefärlig yta, önskad tidpunkt och om ni behöver ett visst filformat eller återkommande uppföljning. Vi återkommer om ytterligare underlag behövs.' },
  { question: 'Vad visar en termisk inspektion?', answer: 'Värmekameran registrerar temperaturvariationer på synliga ytor. Avvikelser kan indikera problem och behöver tolkas utifrån material, väder och drift. En termisk bild ensam fastställer inte alltid felorsaken; kompletterande undersökning kan behövas.' },
  { question: 'Arbetar ni i hela Sverige?', answer: 'Ja, SurveyDrone tar uppdrag i hela Sverige. Vi stämmer av platsens tillgänglighet, luftrum, väder och planering innan uppdraget genomförs.' },
  { question: 'Kan vi följa samma objekt över tid?', answer: 'Ja, återkommande inspektion eller inmätning kan användas för att följa förändringar. Omfattning, intervall och jämförelseunderlag bestäms för objektet. Läs mer om förvaltningsavtal eller beskriv behovet i förfrågan.' },
]
const inspection = SERVICE_LINKS.filter(link => /inspektion$/.test(link.href))
const surveying = SERVICE_LINKS.filter(link => !/inspektion$/.test(link.href))

export default function HomePage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(homeFaqItems)) }} />
    <Hero
      eyebrow="Drönartjänster för företag och fastighetsägare"
      headline="Drönarinspektion och inmätning för tydliga beslut"
      subheadline="Undersök byggnader och anläggningar eller mät mark, upplag och byggområden. SurveyDrone levererar bilder, analyser och mätunderlag för underhåll, projektering och uppföljning i hela Sverige."
      ctaPrimary={{ label: 'Begär offert', href: '/kontakt' }}
      ctaSecondary={{ label: 'Hitta rätt tjänst', href: '#tjanster' }}
    />
    <TrustBar items={['EASA-certifierade fjärrpiloter', 'Ansvarsförsäkrade', 'Visuell och termisk inspektion', 'Inmätning och 3D-underlag']} />
    <section id="tjanster" className="section-padding">
      <div className="container-content">
        <h2 className="text-heading-lg sm:text-display">Vad behöver ni få svar på?</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {[
            { title: 'Inspektion', intro: 'För fastighetsägare, förvaltare och driftansvariga som behöver dokumentera skick och prioritera fortsatt undersökning eller underhåll.', result: 'Bilder, markerade avvikelser och en rapport att använda vid uppföljning.', links: inspection },
            { title: 'Inmätning och 3D', intro: 'För entreprenörer, projektörer och upplagsansvariga som behöver aktuella mätdata för planering, beräkning eller jämförelse.', result: 'Mätunderlag, volymrapport eller modell i överenskommet format.', links: surveying },
          ].map(group => <div key={group.title} className="rounded-2xl border border-dark-200 bg-dark-50 p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-dark-900">{group.title}</h3>
            <p className="mt-4 text-base leading-relaxed text-dark-600">{group.intro}</p>
            <p className="mt-3 font-medium text-dark-900">{group.result}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {group.links.map(link => <li key={link.href}><Link href={link.href} className="block rounded-lg border border-dark-200 bg-white px-4 py-3 text-sm font-semibold text-brand-700 hover:border-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-700">{link.label}</Link></li>)}
            </ul>
          </div>)}
        </div>
      </div>
    </section>
    <section className="section-padding section-muted">
      <div className="container-content">
        <h2 className="text-heading-lg sm:text-display">Från bilder och mätdata till nästa beslut</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { title: 'Planera underhåll', text: 'Dokumentera synliga skador och avvikelser. Använd rapporten för att planera fortsatt kontroll och diskutera åtgärder med förvaltare eller entreprenör.', href: '/tjanster/takinspektion', label: 'Läs om takinspektion' },
            { title: 'Lokalisera avvikelser', text: 'Koppla termiska och visuella fynd till platsen i solcellsanläggningen. Ge driftorganisationen underlag för fortsatt felsökning.', href: '/tjanster/solcellsinspektion', label: 'Läs om solcellsinspektion' },
            { title: 'Följ volymer', text: 'Få volymen redovisad i kubikmeter med referensyta och metod. Jämför mättillfällen för att följa förändringar i upplag eller schakt.', href: '/tjanster/volymberakning', label: 'Läs om volymberäkning' },
          ].map(item => <div key={item.title} className="card flex flex-col"><h3 className="text-xl font-semibold">{item.title}</h3><p className="mt-3 flex-1 text-base leading-relaxed text-dark-600">{item.text}</p><Link href={item.href} className="link-inline mt-5 font-medium">{item.label}</Link></div>)}
        </div>
        <p className="mt-8 text-base text-dark-600">Omfattning, format och leveranstid bestäms i offerten. <Link href="/priser" className="link-inline">Se vad som påverkar priset</Link>.</p>
      </div>
    </section>
    <ProcessSteps id="process" headline="Från ert behov till överenskommen leverans" steps={[
      { number: 1, title: 'Beskriv behovet', description: 'Berätta om objekt, ort och vad resultatet ska användas till.' },
      { number: 2, title: 'Metod och offert', description: 'Vi stämmer av förutsättningar, omfattning, format och tidplan.' },
      { number: 3, title: 'Insamling och analys', description: 'Flygningen planeras för platsen. Insamlade bilder och mätdata bearbetas för uppdraget.' },
      { number: 4, title: 'Leverans och uppföljning', description: 'Ni får den överenskomna rapporten eller mätleveransen med underlag för nästa steg.' },
    ]} />
    <section className="section-padding"><div className="container-content max-w-3xl">
      <h2 className="text-heading-lg">Kompetens för uppdraget</h2>
      <p className="mt-4 text-base leading-relaxed text-dark-600">Våra fjärrpiloter är EASA-certifierade och verksamheten är ansvarsförsäkrad. Vi har erfarenhet av uppdrag i ex-klassade miljöer. Metod, riskbedömning och planering anpassas till platsen och det underlag ni behöver.</p>
      <Link href="/om-oss" className="link-inline mt-5 inline-block font-medium">Läs om SurveyDrone och vår utrustning</Link>
    </div></section>
      <Testimonials
        testimonials={[
          {
            quote: 'Vi inspekterade taken på flera fastigheter på kort tid istället för veckor. Rapporten var tydlig och gav oss bra beslutsunderlag för planerat underhåll.',
            name: 'Teknisk förvaltare',
            role: 'Fastighetsförvaltning',
            company: '',
          },
          {
            quote: 'Drönarinspektionen sparade oss både tid och pengar. Inga ställningar, ingen risk för personalen och vi fick bilderna snabbt.',
            name: 'Projektledare',
            role: 'Byggbranschen',
            company: '',
          },
          {
            quote: 'Tack vare termisk inspektion med drönare hittade vi defekta paneler som vi aldrig hade upptäckt från marken.',
            name: 'Driftansvarig',
            role: 'Energibranschen',
            company: '',
          },
        ]}
      />


    <FaqAccordion headline="Frågor inför en beställning" items={homeFaqItems} />
    <KnowledgeLinks slugs={['sa-fungerar-termografi-med-dronare', 'hur-noggrann-ar-dronarmatning', 'sa-fungerar-volymberakning-med-dronare']} />
    <CtaBand headline="Vilket underlag behöver ni?" description="Beskriv objektet, orten och ert mål. Vi återkommer med frågor eller ett förslag på upplägg." ctaLabel="Begär offert" />
  </>
}
