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
  title: 'Fotogrammetri med drönare — 3D-modell och punktmoln',
  description:
    'Fotogrammetri med drönare ger mätbara 3D-modeller och punktmoln av byggnader och områden. Beslutsunderlag i SWEREF 99 för CAD och BIM, rikstäckande. Begär offert.',
  path: '/tjanster/fotogrammetri-3d-modell',
})

const faqItems = [
  {
    question: 'Vad är fotogrammetri med drönare?',
    answer:
      'Fotogrammetri är en mätmetod där hundratals till tusentals överlappande flygbilder bearbetas till ett mätbart digitalt underlag. Resultatet är punktmoln och 3D-modeller där du kan mäta avstånd, ytor och volymer direkt i modellen — en mätbar digital modell av byggnaden eller området.',
  },
  {
    question: 'Vad är skillnaden mellan punktmoln och 3D-modell?',
    answer:
      'Ett punktmoln är miljontals mätta punkter med läge och färg och används för analys och mätning i CAD och BIM. En 3D-modell är en sammanhängande, texturerad yta byggd av punktmolnet och är lättare att visualisera och kommunicera. Båda kommer ur samma fotogrammetriska bearbetning och levereras ofta tillsammans.',
  },
  {
    question: 'Hur noggrann blir 3D-modellen?',
    answer:
      'Noggrannheten styrs av flyghöjd, bildöverlappning, RTK/GNSS-positionering och markstödpunkter. Med rätt upplägg når modellen centimeternivå och kan användas som mätunderlag. Vi redovisar förutsättningarna och uppnådd noggrannhet så att resultatet är spårbart.',
  },
  {
    question: 'Kan 3D-modellen och punktmolnet användas i CAD och BIM?',
    answer:
      'Ja. Vi levererar i branschstandardformat — punktmoln som LAS/LAZ och 3D-modeller som kan importeras i CAD- och BIM-programvara. Data är georefererad i SWEREF 99 och fungerar som referens vid projektering, ombyggnad och förvaltning.',
  },
  {
    question: 'Kan ni göra en 3D-modell av en hel byggnad?',
    answer:
      'Ja. Genom att flyga byggnaden från flera vinklar och höjder fångas tak, fasader och närområde i samma modell. Resultatet blir en sammanhängande 3D-modell av byggnaden som går att mäta i och använda som beslutsunderlag.',
  },
  {
    question: 'Ingår ortofoto i en fotogrammetrileverans?',
    answer:
      'Ett ortofoto — en geometriskt korrigerad bild med enhetlig skala — skapas som ett delsteg i bearbetningen och kan ingå i leveransen vid behov. Vårt fokus ligger dock på de mätbara resultaten: punktmoln, 3D-modell och terrängmodell som beslutsunderlag.',
  },
  {
    question: 'Hur lång tid tar bearbetningen?',
    answer:
      'Datainsamlingen i fält tar oftast några timmar. Därefter bearbetas bilderna fotogrammetriskt och kvalitetskontrolleras. Leveranstiden beror på objektets storlek och valda format — du får en tidsuppskattning redan vid offerten.',
  },
]

export default function FotogrammetriPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Fotogrammetri och 3D-modell med drönare',
              description:
                'Fotogrammetri med drönare för mätbara 3D-modeller och punktmoln av byggnader och områden, georefererade i SWEREF 99 för CAD och BIM.',
              url: '/tjanster/fotogrammetri-3d-modell',
              serviceType: 'Fotogrammetri och 3D-modellering',
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
          { name: 'Fotogrammetri & 3D-modell', url: '/tjanster/fotogrammetri-3d-modell' },
        ]}
      />

      <Hero
        eyebrow="Kartläggning & 3D för företag"
        headline="Fotogrammetri med drönare — mätbara 3D-modeller och punktmoln"
        subheadline="Fotogrammetri med drönare omvandlar överlappande flygbilder till mätbara 3D-modeller och punktmoln av byggnader och områden. Du får ett beslutsunderlag i SWEREF 99 där avstånd, ytor och volymer kan mätas direkt — rikstäckande i hela Sverige."
        ctaPrimary={{ label: 'Begär offert', href: '/kontakt?service=fotogrammetri-3d-modell' }}
        ctaSecondary={{ label: 'Så skapas modellen', href: '#process' }}
      />

      <TrustBar
        items={[
          'EASA-certifierade piloter',
          'RTK/GNSS-positionering',
          'Mätbart i CAD & BIM',
          'Hela Sverige',
        ]}
      />

      <BenefitsGrid
        headline="Varför fotogrammetri och 3D-modell?"
        subtitle="En mätbar digital tvilling av byggnaden eller området som underlag för analys och projektering."
        benefits={[
          {
            icon: 'chart',
            title: 'Mätbara resultat',
            description:
              'Mät avstånd, ytor, höjder och volymer direkt i punktmoln och 3D-modell — inte bara titta på en bild.',
          },
          {
            icon: 'camera',
            title: 'Detaljerad fotogrammetri',
            description:
              'Tusentals överlappande bilder bearbetas till täta punktmoln och texturerade 3D-modeller.',
          },
          {
            icon: 'file',
            title: 'Georefererat i SWEREF 99',
            description:
              'Modeller och punktmoln levereras med koordinater i SWEREF 99 och höjder i RH 2000.',
          },
          {
            icon: 'building',
            title: 'Underlag för BIM',
            description:
              'Punktmoln och 3D-modeller importeras i CAD och BIM som referens för projektering och förvaltning.',
          },
          {
            icon: 'clock',
            title: 'Dokumentation över tid',
            description:
              'Återkommande modeller skapar en tidsserie som dokumenterar hur ett objekt förändras.',
          },
          {
            icon: 'shield',
            title: 'Säker datainsamling',
            description:
              'Svåråtkomliga tak, höga objekt och riskområden fångas från luften utan att personal exponeras.',
          },
        ]}
      />

      <ProcessSteps
        id="process"
        headline="Så skapas 3D-modellen"
        steps={[
          {
            number: 1,
            title: 'Planering',
            description:
              'Vi fastställer objekt, detaljeringsgrad och leveransformat samt planerar flygmönster och markstödpunkter.',
          },
          {
            number: 2,
            title: 'Bildinsamling',
            description:
              'Drönare med RTK/GNSS flyger objektet från flera vinklar med hög överlappning för full täckning.',
          },
          {
            number: 3,
            title: 'Bearbetning',
            description:
              'Bilderna processas fotogrammetriskt till punktmoln, 3D-mesh och terrängmodell, med ortofoto som delsteg.',
          },
          {
            number: 4,
            title: 'Kvalitetskontroll',
            description:
              'Modellen kontrolleras mot markstödpunkter så att noggrannheten kan verifieras och redovisas.',
          },
          {
            number: 5,
            title: 'Leverans',
            description:
              'Ni får punktmoln och 3D-modell i valda format, georefererade och redo att användas i era system.',
          },
        ]}
      />

      <Deliverables
        headline="Det här ingår i leveransen"
        items={[
          {
            title: 'Punktmoln',
            description:
              'Tätt, färgsatt punktmoln (LAS/LAZ) för mätning och analys i CAD- och BIM-programvara.',
          },
          {
            title: '3D-modell',
            description:
              'Texturerad 3D-mesh av byggnaden eller området för visualisering och mätning.',
          },
          {
            title: 'Digital terrängmodell',
            description:
              'Höjdmodell (DTM/DSM) som underlag för volymer, profiler och planering.',
          },
          {
            title: 'Georefererad data',
            description:
              'All data i SWEREF 99 med höjder i RH 2000, eller annat överenskommet referenssystem.',
          },
          {
            title: 'Ortofoto vid behov',
            description:
              'Geometriskt korrigerad bild som delsteg i bearbetningen, levereras på begäran.',
          },
          {
            title: 'Projektrapport',
            description:
              'Dokumentation av metod, markstödpunkter och uppnådd noggrannhet för kvalitetssäkring.',
          },
        ]}
      />

      <FaqAccordion headline="Vanliga frågor om fotogrammetri och 3D-modell" items={faqItems} />

      <RelatedServices
        services={[
          {
            title: 'Drönarinmätning',
            href: '/tjanster/dronarinmatning',
            description:
              'Noggrann inmätning i SWEREF 99 med punktmoln, DWG och 3D som beslutsunderlag.',
          },
          {
            title: 'Volymberäkning',
            href: '/tjanster/volymberakning',
            description:
              'Beräkna massor för upplag, täkter och schakt ur punktmoln och terrängmodell.',
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
          'vad-ar-fotogrammetri',
          '3d-modeller-av-byggnader-anvandningsomraden',
          'hur-noggrann-ar-dronarmatning',
        ]}
      />

      <CtaBand
        headline="Behöver ni en 3D-modell eller ett punktmoln?"
        description="Berätta om objektet och hur modellen ska användas så föreslår vi rätt detaljeringsgrad och leveransformat."
        ctaLabel="Begär offert"
        ctaHref="/kontakt?service=fotogrammetri-3d-modell"
      />
    </>
  )
}
