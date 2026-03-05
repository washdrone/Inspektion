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
  title: 'Drönarinspektion för byggföretag | SurveyDrone',
  description:
    'Byggplatsdokumentation och inspektion med drönare. Flygbilder, termisk kamera och fortlöpande dokumentation av byggprojekt. EASA-certifierade piloter.',
  path: '/branscher/bygg',
})

const faqItems = [
  {
    question: 'Hur kan drönare användas för byggplatsdokumentation?',
    answer:
      'Vi flyger regelbundna dokumentationsflygningar som ger er flygbilder, ortofoto och visuell uppföljning av byggprojektets framdrift. Materialet kan användas för intern uppföljning, beställarrapporter och tvistdokumentation.',
  },
  {
    question: 'Kan ni inspektera nybyggda tak innan garantibesiktning?',
    answer:
      'Ja, termisk inspektion av nylagda tak avslöjar felaktig isolering, fuktfällor och brister i tätskikt som bör åtgärdas inom garantitiden. Det ger er ett starkt underlag vid reklamation.',
  },
  {
    question: 'Hur ofta bör dokumentationsflygningar göras?',
    answer:
      'Det beror på projektets längd och komplexitet. Vanliga intervall är veckovis eller månadsvis. Kontakta oss för ett upplägg som passar ert projekt.',
  },
  {
    question: 'Kan materialet användas i BIM-processer?',
    answer:
      'Våra flygbilder och ortofoto kan användas som referensmaterial i BIM-processer. Kontakta oss för att diskutera vilka format och leverabler som passar era arbetsflöden.',
  },
  {
    question: 'Fungerar det att flyga drönare på en aktiv byggarbetsplats?',
    answer:
      'Ja, vi har erfarenhet av att arbeta på aktiva byggarbetsplatser. Vi samordnar med platschefen, genomför riskbedömning och anpassar flygningen efter arbetsplatsens förhållanden.',
  },
  {
    question: 'Vilken typ av rapport får vi?',
    answer:
      'Beroende på uppdragets karaktär levererar vi högupplösta flygbilder, ortofoto, termiska analyser och detaljerade inspektionsrapporter. Vi anpassar leveransformatet efter era behov.',
  },
  {
    question: 'Kan drönare användas för att dokumentera fasadarbeten?',
    answer:
      'Ja, vi dokumenterar fasadarbeten före, under och efter genomförande. Termisk kamera kan dessutom verifiera att isolering och tätskikt är korrekt utförda.',
  },
]

export default function ByggPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Drönarinspektion för byggföretag',
              description:
                'Byggplatsdokumentation och inspektion med drönare. Flygbilder, ortofoto, termisk kamera och fortlöpande dokumentation av byggprojekt.',
              url: '/branscher/bygg',
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
          { name: 'Bygg', url: '/branscher/bygg' },
        ]}
      />

      <Hero
        headline="Drönarinspektion för byggbranschen"
        subheadline="Dokumentera byggprojektets framdrift, inspektera nybyggda tak och verifiera utförande med termisk kamera. Vi ger er flygbilder, ortofoto och inspektionsrapporter som stärker er projektdokumentation."
        ctaPrimary={{ label: 'Begär offert', href: '/kontakt' }}
        ctaSecondary={{ label: 'Byggplatsdokumentation', href: '/inspektioner-med-dronare/byggplatsdokumentation' }}
        stats={[
          { value: '0', label: 'Arbete på höjd' },
          { value: 'Snabb', label: 'Leverans' },
          { value: 'Hela', label: 'Sverige' },
          { value: 'EASA', label: 'Certifierade piloter' },
        ]}
      />

      <TrustBar
        items={[
          'EASA-certifierade fjärrpiloter',
          'Ansvarsförsäkrade',
          'Termisk kamera & RGB',
          'Erfarenhet av aktiva byggplatser',
        ]}
      />

      {/* Use cases section */}
      <section className="section-padding">
        <div className="container-content">
          <h2 className="text-heading-lg sm:text-display text-center">
            Så stödjer vi ert byggprojekt
          </h2>
          <p className="mt-4 text-body-lg text-dark-500 text-center max-w-2xl mx-auto">
            Från fortlöpande projektdokumentation till slutbesiktning av tak och fasader
            — drönarteknik ger er bättre överblick och starkare dokumentation.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="card">
              <h3 className="text-heading-sm">Fortlöpande byggplatsdokumentation</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Regelbundna flygbilder och ortofoto som visar byggprojektets framdrift.
                Materialet kan användas för intern uppföljning, beställarrapporter
                och som juridisk dokumentation.
              </p>
              <Link href="/inspektioner-med-dronare/byggplatsdokumentation" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Läs mer om byggplatsdokumentation &rarr;
              </Link>
            </div>
            <div className="card">
              <h3 className="text-heading-sm">Takinspektion efter nybyggnation</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Termisk inspektion av nylagda tak och tätskikt. Identifiera felaktigt utförande,
                bristfällig isolering och fuktfällor innan garantitiden löper ut.
              </p>
              <Link href="/inspektioner-med-dronare/takinspektion" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Läs mer om takinspektion &rarr;
              </Link>
            </div>
            <div className="card">
              <h3 className="text-heading-sm">Fasadkontroll och verifiering</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Dokumentera och verifiera fasadarbeten med högupplösta bilder och termisk
                analys. Kontrollera att isolering och tätskikt är korrekt utförda.
              </p>
              <Link href="/inspektioner-med-dronare/fasadinspektion" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Läs mer om fasadinspektion &rarr;
              </Link>
            </div>
            <div className="card">
              <h3 className="text-heading-sm">Solcellsverifiering vid installation</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Termisk inspektion av nyinstallerade solcellsanläggningar för att verifiera
                att samtliga paneler och strängar fungerar korrekt vid driftsättning.
              </p>
              <Link href="/inspektioner-med-dronare/solcellsinspektion" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Läs mer om solcellsinspektion &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Fördelar för byggföretag"
        subtitle="Drönarinspektion stärker er projektdokumentation och kvalitetskontroll."
        benefits={[
          {
            title: 'Komplett projektdokumentation',
            description:
              'Flygbilder och ortofoto som visar projektets utveckling. Värdefullt för uppföljning, rapportering och eventuella tvister.',
            icon: 'file',
          },
          {
            title: 'Kvalitetskontroll utan ställningar',
            description:
              'Inspektera tak och fasader efter färdigställande utan att behöva sätta upp ställningar eller skylift.',
            icon: 'building',
          },
          {
            title: 'Termisk verifiering',
            description:
              'Branschledande termisk kamera avslöjar isoleringsbrister och utförandefel som inte syns med blotta ögat.',
            icon: 'camera',
          },
          {
            title: 'Starkare garantiunderlag',
            description:
              'Termisk dokumentation vid nybyggnation ger er bevisunderlag om brister uppstår inom garantitiden.',
            icon: 'shield',
          },
          {
            title: 'Tidseffektivt',
            description:
              'En dokumentationsflygning tar en bråkdel av tiden jämfört med markbaserad fotografering av hela byggplatsen.',
            icon: 'clock',
          },
          {
            title: 'RTK-positionering',
            description:
              'RTK/GNSS-positionering med centimeternoggrannhet ger exakta positioner på alla bilder och observationer.',
            icon: 'chart',
          },
        ]}
        variant="dark"
      />

      <FaqAccordion
        headline="Vanliga frågor från byggbranschen"
        items={faqItems}
      />

      <CtaBand
        headline="Stärk ert byggprojekts dokumentation"
        description="Kontakta oss för att diskutera hur drönarinspektion och byggplatsdokumentation kan stödja ert projekt."
        ctaLabel="Begär offert"
        ctaHref="/kontakt"
      />
    </>
  )
}
