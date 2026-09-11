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
  title: 'Drönarinspektion för industri | SurveyDrone',
  description:
    'Industriell drönarinspektion av tankar, torn, rörledningar och svåråtkomliga anläggningar. Minimera driftstopp. EASA-certifierade piloter med ex-klasserfarenhet.',
  path: '/branscher/industri',
})

const faqItems = [
  {
    question: 'Kan ni inspektera i ex-klassade zoner?',
    answer:
      'Ja, vi har erfarenhet av att arbeta i och kring explosionsklassade miljöer. Kontakta oss för att diskutera förutsättningarna och säkerhetskraven för just er anläggning.',
  },
  {
    question: 'Hur minimerar ni driftstopp vid inspektion?',
    answer:
      'Drönarinspektionen genomförs utan att störa pågående produktion. Vi behöver inte bygga ställningar, avlysa områden eller stänga ned processer. Inspektion av de flesta objekt kan ske medan anläggningen är i drift.',
  },
  {
    question: 'Vilka typer av industriella objekt inspekterar ni?',
    answer:
      'Vi inspekterar cisterner, reaktorer, skorstenar, fackelstackar, rörbryggor, kylvattenssystem, tak på produktionshallar och andra svåråtkomliga konstruktioner. Kontakta oss för att beskriva ert objekt.',
  },
  {
    question: 'Vad ingår i inspektionsrapporten?',
    answer:
      'Rapporten innehåller högupplösta RGB-bilder, termiska bilder med analys, identifierade avvikelser med positionsdata samt rekommenderade åtgärder. Vi kan anpassa rapportformatet efter era interna krav.',
  },
  {
    question: 'Hur hanterar ni säkerheten på industriområden?',
    answer:
      'Vi följer era interna säkerhetsrutiner och genomför alltid en riskbedömning innan flygning. Våra piloter är EASA-certifierade och vi är ansvarsförsäkrade. Vi samordnar med er driftpersonal för säker genomförande.',
  },
  {
    question: 'Kan termisk kamera hitta isoleringsbrister på rörledningar?',
    answer:
      'Ja, termisk inspektion är en effektiv metod för att identifiera bristfällig isolering, läckage och temperaturavvikelser på rörledningar och processkärl utan att behöva öppna eller demontera något.',
  },
  {
    question: 'Hur långt i förväg behöver vi boka?',
    answer:
      'Vi rekommenderar att ni kontaktar oss i god tid, särskilt om inspektionen ska samordnas med planerade driftstopp eller revisioner. I de flesta fall kan vi genomföra uppdrag med kort framförhållning.',
  },
]

export default function IndustriPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Industriell drönarinspektion',
              description:
                'Professionell drönarinspektion av industrianläggningar, tankar, torn och rörledningar. Termisk och visuell inspektion med avstämda driftförutsättningar.',
              url: '/branscher/industri',
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
          { name: 'Industri', url: '/branscher/industri' },
        ]}
      />

      <Hero
        headline="Drönarinspektion för processindustrin"
        subheadline="Inspektera cisterner, skorstenar, rörbryggor och svåråtkomliga konstruktioner med planering efter tillträde och verksamhetens drift. Vi har erfarenhet av ex-klassade zoner och arbetar efter era säkerhetsrutiner."
        ctaPrimary={{ label: 'Begär offert', href: '/kontakt' }}
        ctaSecondary={{ label: 'Industriell inspektion', href: '/tjanster/industriinspektion' }}
        stats={[
          { value: 'Planerad', label: 'Drift och tillträde' },
          { value: '0', label: 'Arbete på höjd' },
          { value: 'Hela', label: 'Sverige' },
          { value: 'EASA', label: 'Certifierade piloter' },
        ]}
      />

      <TrustBar
        items={[
          'EASA-certifierade fjärrpiloter',
          'Ansvarsförsäkrade',
          'Erfarenhet av ex-klassade zoner',
          'Termisk & visuell inspektion',
        ]}
      />

      {/* Use cases section */}
      <section className="section-padding">
        <div className="container-content">
          <h2 className="text-heading-lg sm:text-display text-center">
            Frågeställningar vi löser åt industrin
          </h2>
          <p className="mt-4 text-body-lg text-dark-500 text-center max-w-2xl mx-auto">
            Drönarinspektion ersätter riskfyllda och tidskrävande manuella inspektioner
            av svåråtkomliga industriobjekt.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="card">
              <h3 className="text-heading-sm">Cistern- och tankinspektion</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Visuell och termisk inspektion av utvändiga ytor på cisterner och tankar.
                Identifiera korrosion, deformation, isoleringsbrister och läckageindikationer.
              </p>
              <Link href="/tjanster/industriinspektion" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Läs mer om industriell inspektion &rarr;
              </Link>
            </div>
            <div className="card">
              <h3 className="text-heading-sm">Skorstenar och fackelstackar</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Inspektion av höga konstruktioner utan klättring eller ställningar. Vi dokumenterar
                ytskador, sprickor och fogbrister med högupplöst kamera.
              </p>
              <Link href="/tjanster/fasadinspektion" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Läs mer om fasadinspektion &rarr;
              </Link>
            </div>
            <div className="card">
              <h3 className="text-heading-sm">Tak på produktionshallar</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Termisk inspektion av tak på industribyggnader för att identifiera fuktinträngning,
                isoleringsbrister och skador på tätskikt.
              </p>
              <Link href="/tjanster/takinspektion" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Läs mer om takinspektion &rarr;
              </Link>
            </div>
            <div className="card">
              <h3 className="text-heading-sm">Rörbryggor och ledningsstråk</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Termisk och visuell inspektion av rörledningar och bärverk. Identifiera
                isoleringsbrister, temperaturavvikelser och mekaniska skador.
              </p>
              <Link href="/kontakt" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Kontakta oss för rådgivning &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Fördelar för industrianläggningar"
        subtitle="Drönarteknik minskar risk, kostnad och stilleståndstid vid inspektioner."
        benefits={[
          {
            title: 'Minimalt driftstopp',
            description:
              'Inspektionen genomförs medan anläggningen är i drift. Inga produktionsförluster eller kostsamma avställningar krävs.',
            icon: 'clock',
          },
          {
            title: 'Eliminerad höjdrisk',
            description:
              'Ingen personal behöver klättra på cisterner, skorstenar eller andra höga konstruktioner. Hela inspektionen sker från säker position.',
            icon: 'shield',
          },
          {
            title: 'Ex-klasserfarenhet',
            description:
              'Vi har erfarenhet av att arbeta i och kring explosionsklassade miljöer och anpassar uppdraget efter era säkerhetskrav.',
            icon: 'building',
          },
          {
            title: 'Termisk analys',
            description:
              'Branschledande termisk kamera identifierar isoleringsbrister, överhettning och läckage som inte syns vid visuell inspektion.',
            icon: 'camera',
          },
          {
            title: 'Detaljerad dokumentation',
            description:
              'Rapporter med högupplösta bilder, termogrammer och positionsdata som kan integreras i ert underhållssystem.',
            icon: 'file',
          },
          {
            title: 'Kostnadseffektivt',
            description:
              'Inga ställningar, mobilkranar eller industriklättrare behövs. Drönaren når svåråtkomliga platser till en bråkdel av kostnaden.',
            icon: 'chart',
          },
        ]}
        variant="dark"
      />

      <FaqAccordion
        headline="Vanliga frågor från industrin"
        items={faqItems}
      />

      <CtaBand
        headline="Behöver ni inspektera er anläggning?"
        description="Kontakta oss för att diskutera ert uppdrag. Vi anpassar inspektionen efter era säkerhetskrav och behov."
        ctaLabel="Begär offert"
        ctaHref="/kontakt"
      />
    </>
  )
}
