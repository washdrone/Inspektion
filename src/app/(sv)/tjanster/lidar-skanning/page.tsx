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
  title: 'LiDAR-skanning med drönare — punktmoln och terrängmodell',
  description:
    'LiDAR-skanning med drönare mäter marken med laserpulser och fungerar även i bevuxen terräng och svaga ljusförhållanden. Klassificerat punktmoln, DTM och DSM. Rikstäckande i hela Sverige.',
  path: '/tjanster/lidar-skanning',
})

const faqItems = [
  {
    question: 'Vad är LiDAR-skanning med drönare?',
    answer:
      'LiDAR står för Light Detection and Ranging. Sensorn skickar ut laserpulser och mäter tiden tills reflexen kommer tillbaka, vilket ger avståndet till varje träffpunkt. Tillsammans med drönarens position och sensorns riktning räknas varje mätning om till en 3D-koordinat. Resultatet blir ett punktmoln som byggts av direkta avståndsmätningar i stället för av beräkningar ur fotografier.',
  },
  {
    question: 'Vad är skillnaden mot fotogrammetri?',
    answer:
      'Fotogrammetri beräknar 3D-punkter genom att matcha samma detalj i flera överlappande foton, vilket kräver att ytan syns och har textur. LiDAR mäter avstånd direkt och är därför oberoende av bildmatchning. LiDAR har fördelar i vegetation och vid svaga ljusförhållanden, medan fotogrammetri ger naturlig färginformation och fotorealistiska modeller. Ofta kombineras metoderna i samma uppdrag.',
  },
  {
    question: 'Kan LiDAR mäta marken genom vegetation?',
    answer:
      'Delvis. En laserpuls som träffar ett trädkronetak kan ge flera returer — några från löv och grenar, andra från punkter längre ner och i gynnsamma fall från marken. Genom att klassificera returerna kan markpunkterna separeras från vegetationen. Hur väl det lyckas beror på vegetationens täthet, årstid och skanningens upplägg, så en helt fri marksikt kan aldrig garanteras.',
  },
  {
    question: 'Vilken utrustning används?',
    answer:
      'Vi skannar med DJI Zenmuse L2, en LiDAR-nyttolast för drönare, i kombination med RTK/GNSS-positionering. Sensorn registrerar flera returer per laserpuls, vilket är förutsättningen för att kunna skilja mark från vegetation i efterbearbetningen.',
  },
  {
    question: 'Vilken noggrannhet får man?',
    answer:
      'Noggrannheten beror på uppdragets förutsättningar — flyghöjd, flyglinjernas täthet, GNSS-förhållanden, användning av kontrollpunkter samt terrängens och vegetationens karaktär. Vi väljer upplägg efter den noggrannhet projektet faktiskt kräver och redovisar kontrollen i en kvalitetsrapport så att resultatet blir spårbart.',
  },
  {
    question: 'När är LiDAR ett bättre val än fotogrammetri?',
    answer:
      'När marken är bevuxen med gräs, sly eller skog, när objektet är smalt och långsträckt som en kraftledningsgata eller väg, när ljusförhållandena är svaga, eller när smala strukturer som ledningar och stolpar ska mätas. Behövs färgrik visuell dokumentation eller ortofoto är fotogrammetri fortfarande självklart — ofta flygs båda.',
  },
  {
    question: 'Vilka format levereras data i?',
    answer:
      'Punktmolnet levereras normalt som LAS eller LAZ med klassificering, och terrängmodeller som DTM och DSM i rutnätsformat. Höjdkurvor, tvärsektioner och andra härledda produkter levereras i CAD-vänliga format. Koordinatsystem, till exempel SWEREF 99 med lämplig projektion, kommer vi överens om innan uppdraget.',
  },
  {
    question: 'Hur beställer jag en LiDAR-skanning?',
    answer:
      'Beskriv området, vilken typ av terräng och vegetation det handlar om samt vad underlaget ska användas till. Vi återkommer med förslag på upplägg, leveransinnehåll och leveranstid enligt offert.',
  },
]

export default function LidarSkanningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'LiDAR-skanning med drönare',
              description:
                'Laserskanning från drönare med DJI Zenmuse L2. Ger klassificerbara punktmoln, terrängmodeller och sektioner även i bevuxen terräng.',
              url: '/tjanster/lidar-skanning',
              serviceType: 'LiDAR-skanning',
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
          { name: 'LiDAR-skanning', url: '/tjanster/lidar-skanning' },
        ]}
      />

      <Hero
        headline="LiDAR-skanning med drönare"
        subheadline="Vi laserskannar mark och anläggningar från luften med DJI Zenmuse L2. Till skillnad från fotogrammetri mäts avstånden direkt med laserpulser, vilket ger klassificerbara punktmoln även där vegetation eller ljusförhållanden sätter stopp för bildbaserad mätning — i hela Sverige."
        ctaPrimary={{ label: 'Begär offert', href: '/kontakt' }}
        ctaSecondary={{ label: 'Så går skanningen till', href: '#process' }}
      />

      <TrustBar
        items={[
          'DJI Zenmuse L2',
          'RTK/GNSS-positionering',
          'Klassificerade punktmoln',
          'Hela Sverige',
        ]}
      />

      <BenefitsGrid
        headline="Varför LiDAR-skanning?"
        subtitle="Direkt avståndsmätning som ger mätbar mark även där fotogrammetri kommer till korta."
        benefits={[
          {
            icon: 'chart',
            title: 'Mäter genom vegetation',
            description:
              'Flera returer per laserpuls gör att marken delvis kan mätas under gräs, sly och trädkronor — där bilder bara ser ovansidan.',
          },
          {
            icon: 'camera',
            title: 'Oberoende av ljuset',
            description:
              'Lasern skapar sin egen mätsignal och påverkas därför inte av skuggor, mulet väder eller svagt ljus på samma sätt som foto.',
          },
          {
            icon: 'file',
            title: 'Klassificerbara punktmoln',
            description:
              'Punkterna kan delas upp i mark, vegetation och byggnad, vilket ger rena terrängmodeller utan manuell rensning.',
          },
          {
            icon: 'building',
            title: 'Smala strukturer fångas',
            description:
              'Ledningar, stolpar, räcken och andra tunna objekt registreras som egna punkter i stället för att suddas ut.',
          },
          {
            icon: 'clock',
            title: 'Effektivt över långa stråk',
            description:
              'Korridorer som ledningsgator, vägar och banvallar skannas i ett sammanhängande flöde utan markarbete längs sträckan.',
          },
          {
            icon: 'shield',
            title: 'Säkert i svår terräng',
            description:
              'Blöt mark, branter och trafikerade stråk mäts från luften utan att någon behöver ta sig fram till fots.',
          },
        ]}
      />

      <ProcessSteps
        headline="Så går LiDAR-skanningen till"
        steps={[
          {
            number: 1,
            title: 'Planering',
            description:
              'Vi går igenom området, terräng- och vegetationsförhållanden samt vad underlaget ska användas till, och väljer flyghöjd och linjetäthet därefter.',
          },
          {
            number: 2,
            title: 'Skanning',
            description:
              'Drönaren flyger planerade linjer med Zenmuse L2 och RTK/GNSS-positionering. Vid behov skannas överlappande stråk från flera riktningar.',
          },
          {
            number: 3,
            title: 'Bearbetning',
            description:
              'Laserdata knyts ihop med positions- och rörelsedata till ett sammanhängande, georefererat punktmoln.',
          },
          {
            number: 4,
            title: 'Klassificering',
            description:
              'Punkterna delas upp i klasser som mark, vegetation och byggnad. Ur markklassen filtreras terrängmodellen fram.',
          },
          {
            number: 5,
            title: 'Leverans',
            description:
              'Ni får punktmoln, terrängmodeller och härledda produkter i överenskomna format tillsammans med en kvalitetsrapport.',
          },
        ]}
      />

      <Deliverables
        headline="Det här ingår i leveransen"
        items={[
          {
            title: 'Klassificerat punktmoln',
            description:
              'Georefererat punktmoln i LAS eller LAZ med klasser för mark, vegetation och byggnad.',
          },
          {
            title: 'Digital terrängmodell (DTM)',
            description:
              'Ren markmodell filtrerad ur markklassade punkter — underlag för projektering och beräkning.',
          },
          {
            title: 'Digital ytmodell (DSM)',
            description:
              'Ytmodell som även innehåller vegetation och byggnader, för höjdanalys och siktstudier.',
          },
          {
            title: 'Höjdkurvor',
            description:
              'Kurvor med valt ekvidistans i CAD-vänligt format, framställda ur terrängmodellen.',
          },
          {
            title: 'Tvärsektioner',
            description:
              'Sektioner längs eller tvärs valda linjer för projektering, kontroll och mängdunderlag.',
          },
          {
            title: 'Kvalitetsrapport',
            description:
              'Redovisning av flygupplägg, koordinatsystem, klassificering och hur resultatet kontrollerats.',
          },
        ]}
      />

      <FaqAccordion headline="Vanliga frågor om LiDAR-skanning" items={faqItems} />

      <RelatedServices
        services={[
          {
            title: 'Markmodellering',
            href: '/tjanster/markmodellering',
            description:
              'DTM och DSM ur laser- eller fotogrammetridata, med höjdkurvor, lutning och avrinning.',
          },
          {
            title: 'Drönarinmätning',
            href: '/tjanster/dronarinmatning',
            description:
              'Inmätning i SWEREF 99 där laserdata och fotogrammetri kombineras efter behov.',
          },
          {
            title: 'Volymberäkning',
            href: '/tjanster/volymberakning',
            description:
              'Massor ur terrängmodell — även i bevuxen terräng där markytan behöver skannas fram.',
          },
        ]}
      />

      <KnowledgeLinks
        slugs={[
          'lidar-eller-fotogrammetri',
          'dtm-och-dsm-skillnaden',
          'hur-noggrann-ar-dronarmatning',
        ]}
      />

      <CtaBand
        headline="Behöver ni skanna ett område?"
        description="Berätta om terrängen och vad underlaget ska användas till så föreslår vi ett upplägg för skanning och leverans."
        ctaLabel="Begär offert"
        ctaHref="/kontakt"
      />
    </>
  )
}
