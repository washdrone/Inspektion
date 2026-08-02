import type { Metadata } from 'next'
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
import { KnowledgeLinks } from '@/components/KnowledgeLinks'

export const metadata: Metadata = createMetadata({
  title: 'Drönarinmätning — noggrann inmätning i hela Sverige',
  description:
    'Drönarinmätning med RTK/GNSS och markstödpunkter ger mätdata på centimeternivå i SWEREF 99. Punktmoln, DWG och 3D som beslutsunderlag. Rikstäckande — begär offert.',
  path: '/tjanster/dronarinmatning',
})

const faqItems = [
  {
    question: 'Hur noggrann är en drönarinmätning?',
    answer:
      'Noggrannheten styrs av flyghöjd, bildöverlappning, RTK/GNSS-positionering och antalet markstödpunkter (GCP). Med rätt upplägg kan en drönarinmätning nå centimeternivå i både plan och höjd. Vi anpassar metoden efter områdets storlek och det noggrannhetskrav ni har, och redovisar uppnådd noggrannhet i mätrapporten.',
  },
  {
    question: 'Vilket koordinatsystem levereras mätdata i?',
    answer:
      'Vi levererar som standard i SWEREF 99 TM och kan transformera till lokala SWEREF 99-zoner samt höjder i RH 2000. Behöver ni ett annat referenssystem anpassar vi leveransen efter era projektkrav.',
  },
  {
    question: 'Vilka leveransformat får jag (punktmoln, DWG, 3D)?',
    answer:
      'Vanliga leveransformat är klassat punktmoln (LAS/LAZ), DWG/DXF för CAD, georefererad rasterdata samt 3D-mesh och digital terrängmodell. Vi stämmer av formaten innan uppdraget så att data går rakt in i era befintliga system.',
  },
  {
    question: 'Hur stora områden kan mätas in med drönare?',
    answer:
      'Allt från enskilda tomter och byggarbetsplatser till stora mark- och anläggningsområden. Områdets storlek påverkar antal flygningar och bearbetningstid, men inte metodens giltighet. Större ytor delas upp i flygblock som sätts samman till ett sammanhängande mätunderlag.',
  },
  {
    question: 'Vad är skillnaden mellan drönarinmätning och traditionell mätning?',
    answer:
      'Vid drönarinmätning fångas hela ytan som tusentals mätpunkter från luften, istället för enstaka punkter mätta på marken. Du får ett heltäckande underlag snabbare och utan att personal behöver vistas i trafikerade eller riskfyllda områden. Markstödpunkter mäts fortfarande in för att kvalitetssäkra resultatet.',
  },
  {
    question: 'Behövs markstödpunkter (GCP) för inmätningen?',
    answer:
      'Markstödpunkter höjer och verifierar noggrannheten och rekommenderas när höga krav ställs på absolut position. Vid uppdrag med RTK/GNSS och måttliga krav kan antalet stödpunkter minskas. Vi föreslår ett upplägg som balanserar noggrannhet, tidsåtgång och kostnad.',
  },
  {
    question: 'Hur lång tid tar det från flygning till levererad mätdata?',
    answer:
      'Datainsamlingen i fält tar ofta bara några timmar. Därefter följer fotogrammetrisk bearbetning och kvalitetskontroll. Leveranstiden beror på områdets storlek och valda format — du får en tidsuppskattning redan vid offerten.',
  },
  {
    question: 'Kan ni mäta in samma område flera gånger över tid?',
    answer:
      'Ja. Återkommande inmätningar av samma område skapar en tidsserie som gör att ni kan följa förändringar, mäta förflyttade massor och dokumentera hur ett projekt utvecklas mellan tillfällena.',
  },
]

export default function DronarinmatningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Drönarinmätning',
              description:
                'Drönarinmätning med RTK/GNSS och markstödpunkter för mätdata på centimeternivå i SWEREF 99. Leverans som punktmoln, DWG och 3D.',
              url: '/tjanster/dronarinmatning',
              serviceType: 'Drönarinmätning',
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
          { name: 'Drönarinmätning', url: '/tjanster/dronarinmatning' },
        ]}
      />

      <Hero
        headline="Drönarinmätning — noggrann inmätning med drönare"
        subheadline="Drönarinmätning ger ett heltäckande mätunderlag på centimeternivå med RTK/GNSS och markstödpunkter. Vi levererar mätdata i SWEREF 99 som punktmoln, DWG och 3D — rikstäckande i hela Sverige och redo att användas direkt i era system."
        ctaPrimary={{ label: 'Begär offert', href: '/kontakt' }}
        ctaSecondary={{ label: 'Så går inmätningen till', href: '#process' }}
      />

      <TrustBar
        items={[
          'EASA-certifierade piloter',
          'RTK/GNSS-positionering',
          'SWEREF 99 & RH 2000',
          'Hela Sverige',
        ]}
      />

      <BenefitsGrid
        headline="Varför drönarinmätning?"
        subtitle="Ett mätbart digitalt underlag av verkligheten — snabbare och säkrare än mätning på marken."
        benefits={[
          {
            icon: 'chart',
            title: 'Mätdata på centimeternivå',
            description:
              'RTK/GNSS och markstödpunkter ger inmätning med hög precision i både plan och höjd, redovisad i mätrapporten.',
          },
          {
            icon: 'file',
            title: 'SWEREF 99 & RH 2000',
            description:
              'Mätdata levereras georefererad i SWEREF 99 med höjder i RH 2000, eller annat referenssystem efter behov.',
          },
          {
            icon: 'clock',
            title: 'Heltäckande på kort tid',
            description:
              'Hela ytan fångas som tusentals mätpunkter under en flygning — istället för enstaka punkter mätta för hand.',
          },
          {
            icon: 'shield',
            title: 'Säker datainsamling',
            description:
              'Ingen personal behöver vistas i trafik, slänter eller riskområden. Inmätningen sker helt från luften.',
          },
          {
            icon: 'building',
            title: 'Underlag för projektering',
            description:
              'Mätdata går rakt in i CAD och BIM som grund för projektering, anläggning och förvaltning.',
          },
          {
            icon: 'camera',
            title: 'Dokumenterad noggrannhet',
            description:
              'Markstödpunkter och kontrollpunkter används för att verifiera och redovisa uppnådd noggrannhet.',
          },
        ]}
      />

      <ProcessSteps
        headline="Så går en drönarinmätning till"
        steps={[
          {
            number: 1,
            title: 'Planering',
            description:
              'Vi går igenom område, noggrannhetskrav och leveransformat samt planerar flyglinjer och placering av markstödpunkter.',
          },
          {
            number: 2,
            title: 'Markstöd & GNSS',
            description:
              'Markstödpunkter (GCP) mäts in med GNSS som referens, vilket knyter inmätningen till SWEREF 99 och RH 2000.',
          },
          {
            number: 3,
            title: 'Flygning',
            description:
              'Drönare med RTK/GNSS flyger systematiskt med hög bildöverlappning och samlar in underlaget för hela ytan.',
          },
          {
            number: 4,
            title: 'Bearbetning',
            description:
              'Bilderna bearbetas fotogrammetriskt till punktmoln, ytmodell och mätbara underlag, med kontroll mot stödpunkterna.',
          },
          {
            number: 5,
            title: 'Leverans & mätrapport',
            description:
              'Ni får georefererad mätdata i valda format tillsammans med en rapport som redovisar metod och noggrannhet.',
          },
        ]}
      />

      <Deliverables
        headline="Det här ingår i leveransen"
        items={[
          {
            title: 'Klassat punktmoln',
            description:
              'Tätt punktmoln (LAS/LAZ) med färginformation, klart för import i CAD- och BIM-programvara.',
          },
          {
            title: 'DWG/DXF',
            description:
              'Vektoriserade mätunderlag och höjdkurvor i CAD-format för projektering och anläggning.',
          },
          {
            title: 'Digital terrängmodell',
            description:
              'Höjdmodell (DTM/DSM) som underlag för volymer, avrinning och massbalans.',
          },
          {
            title: 'Georefererad data',
            description:
              'All data levereras i SWEREF 99 med höjder i RH 2000, eller annat överenskommet referenssystem.',
          },
          {
            title: '3D-modell',
            description:
              'Texturerad 3D-modell av området för visualisering, analys och kommunikation med beställare.',
          },
          {
            title: 'Mätrapport',
            description:
              'Dokumentation av metod, markstödpunkter, kontrollpunkter och uppnådd noggrannhet för kvalitetssäkring.',
          },
        ]}
      />

      <FaqAccordion headline="Vanliga frågor om drönarinmätning" items={faqItems} />

      <RelatedServices
        services={[
          {
            title: 'Volymberäkning',
            href: '/tjanster/volymberakning',
            description:
              'Beräkna volymer för upplag, täkter och schakt direkt ur inmätningens punktmoln och terrängmodell.',
          },
          {
            title: 'Fotogrammetri & 3D-modell',
            href: '/tjanster/fotogrammetri-3d-modell',
            description:
              'Punktmoln och 3D-modeller som mätresultat och beslutsunderlag för projektering och förvaltning.',
          },
          {
            title: '3D-kartläggning',
            href: '/tjanster/3d-kartlaggning',
            description:
              'Kartläggning av större mark- och anläggningsområden med drönare och fotogrammetri.',
          },
        ]}
      />

      <KnowledgeLinks
        slugs={[
          'hur-noggrann-ar-dronarmatning',
          'vad-ar-ett-ortofoto',
          'byggdokumentation-med-dronare',
        ]}
      />

      <CtaBand
        headline="Behöver ni en drönarinmätning?"
        description="Berätta om ert område och era noggrannhetskrav så återkommer vi med ett förslag på upplägg och leverans."
        ctaLabel="Begär offert"
        ctaHref="/kontakt"
      />
    </>
  )
}
