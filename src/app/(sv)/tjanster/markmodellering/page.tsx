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
  title: 'Markmodellering med drönare — digital terrängmodell och ytmodell',
  description:
    'Markmodellering med drönare ger DTM och DSM ur fotogrammetri eller LiDAR, med höjdkurvor, sektioner samt lutnings- och avrinningsanalys som underlag för projektering och markplanering.',
  path: '/tjanster/markmodellering',
})

const faqItems = [
  {
    question: 'Vad är skillnaden mellan DTM och DSM?',
    answer:
      'DTM, digital terrängmodell, beskriver den rena markytan utan vegetation och byggnader. DSM, digital ytmodell, beskriver den översta ytan som den ser ut — alltså inklusive trädkronor, buskar och tak. DTM används för projektering och markarbeten, medan DSM används för sikt-, höjd- och skuggstudier samt när själva vegetationens höjd är intressant.',
  },
  {
    question: 'Hur framställs modellerna?',
    answer:
      'Ur fotogrammetri eller LiDAR beroende på markförhållandena. På öppen mark räcker fotogrammetri ofta bra och ger dessutom färgrik dokumentation. Är marken bevuxen används laserskanning, eftersom flera returer per laserpuls gör att markpunkter delvis kan registreras under vegetationen. Ibland kombineras metoderna inom samma område.',
  },
  {
    question: 'Hur filtreras vegetationen bort?',
    answer:
      'Punktmolnet klassificeras så att punkter som tillhör mark skiljs från vegetation och byggnader. Terrängmodellen byggs sedan enbart av markklassade punkter. I tät vegetation blir markpunkterna glesare, vilket gör modellen mindre detaljerad där — det redovisas i kvalitetsrapporten så att ni vet var underlaget är starkast.',
  },
  {
    question: 'Vilken noggrannhet kan förväntas?',
    answer:
      'Noggrannheten beror på metod och uppdrag — flyghöjd, positionering, kontrollpunkter samt hur öppen eller bevuxen marken är. Öppen, texturrik mark ger normalt ett tätare och säkrare underlag än tät vegetation. Vi väljer upplägg efter projektets krav och redovisar hur resultatet kontrollerats.',
  },
  {
    question: 'Kan ni ta fram höjdkurvor och sektioner?',
    answer:
      'Ja. Ur terrängmodellen genereras höjdkurvor med vald ekvidistans samt tvärsektioner längs eller tvärs valda linjer. Båda levereras i CAD-vänliga format så att de kan användas direkt i projekteringen.',
  },
  {
    question: 'Vad visar en lutnings- och avrinningsanalys?',
    answer:
      'Lutningsanalysen färgkodar terrängens branthet, vilket visar var marken är för brant för en tänkt användning eller kräver åtgärd. Avrinningsanalysen härleder ur höjdmodellen hur ytvatten rör sig över marken och var det samlas — ett tidigt underlag för höjdsättning och dagvattenhantering.',
  },
  {
    question: 'Kan markmodellen användas för massberäkning?',
    answer:
      'Ja. Terrängmodellen är den yta som volymer beräknas ur, antingen mot en referensnivå eller mot en tidigare inmätning. Ska massor redovisas som slutprodukt hanteras det inom volymberäkning, med markmodellen som grund.',
  },
  {
    question: 'Hur beställer jag markmodellering?',
    answer:
      'Beskriv området, hur marken ser ut och vad modellen ska användas till. Vi återkommer med förslag på metod, leveransinnehåll och leveranstid enligt offert.',
  },
]

export default function MarkmodelleringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Markmodellering med drönare',
              description:
                'Digital terrängmodell (DTM) och ytmodell (DSM) ur fotogrammetri eller LiDAR, med höjdkurvor, sektioner samt lutnings- och avrinningsanalys.',
              url: '/tjanster/markmodellering',
              serviceType: 'Markmodellering',
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
          { name: 'Markmodellering', url: '/tjanster/markmodellering' },
        ]}
      />

      <Hero
        eyebrow="Drönarmätning för företag"
        headline="Markmodellering — digital terrängmodell och ytmodell"
        subheadline="Vi tar fram digital terrängmodell (DTM) över den rena marken och digital ytmodell (DSM) med vegetation och byggnader, ur fotogrammetri eller LiDAR beroende på markförhållandena. Underlag för projektering, massberäkning och markplanering — rikstäckande i hela Sverige."
        ctaPrimary={{ label: 'Begär offert', href: '/kontakt?service=markmodellering' }}
        ctaSecondary={{ label: 'Så tas modellen fram', href: '#process' }}
      />

      <TrustBar
        items={[
          'DTM och DSM',
          'RTK/GNSS-positionering',
          'CAD-vänliga format',
          'Hela Sverige',
        ]}
      />

      <BenefitsGrid
        headline="Varför markmodellering med drönare?"
        subtitle="Ett heltäckande höjdunderlag över hela ytan i stället för spridda mätpunkter."
        benefits={[
          {
            icon: 'chart',
            title: 'Heltäckande höjddata',
            description:
              'Hela ytan mäts in i ett sammanhängande underlag, inte bara de punkter någon hann gå till fots.',
          },
          {
            icon: 'file',
            title: 'DTM och DSM i samma uppdrag',
            description:
              'Ren markmodell och ytmodell med vegetation tas fram ur samma inmätning och kan användas var för sig.',
          },
          {
            icon: 'building',
            title: 'Projekteringsklart underlag',
            description:
              'Höjdkurvor och sektioner levereras i CAD-vänliga format som går direkt in i projekteringen.',
          },
          {
            icon: 'camera',
            title: 'Vegetation filtreras bort',
            description:
              'Klassificering skiljer mark från vegetation och byggnader så att terrängmodellen blir ren.',
          },
          {
            icon: 'clock',
            title: 'Snabb täckning av stora ytor',
            description:
              'Ett helt område mäts in på kort tid jämfört med punktvis inmätning till fots.',
          },
          {
            icon: 'shield',
            title: 'Analys av lutning och vatten',
            description:
              'Lutningsanalys och avrinning härleds ur höjdmodellen och ger tidigt stöd åt höjdsättningen.',
          },
        ]}
      />

      <ProcessSteps
        id="process"
        headline="Så tas markmodellen fram"
        steps={[
          {
            number: 1,
            title: 'Förutsättningar',
            description:
              'Vi går igenom området, markens och vegetationens karaktär samt vad modellen ska användas till.',
          },
          {
            number: 2,
            title: 'Metodval',
            description:
              'Öppen mark mäts normalt med fotogrammetri, bevuxen mark med LiDAR. Vid behov kombineras metoderna inom samma område.',
          },
          {
            number: 3,
            title: 'Inmätning',
            description:
              'Området flygs med RTK/GNSS-positionering och knyts vid behov till markstödpunkter för kontrollerat läge.',
          },
          {
            number: 4,
            title: 'Klassificering & filtrering',
            description:
              'Punktmolnet klassificeras och vegetationen filtreras bort så att DTM och DSM kan byggas separat.',
          },
          {
            number: 5,
            title: 'Analys & leverans',
            description:
              'Höjdkurvor, sektioner samt lutnings- och avrinningsanalys tas fram och levereras med kvalitetsredovisning.',
          },
        ]}
      />

      <Deliverables
        image="markmodellering"
        headline="Det här ingår i leveransen"
        items={[
          {
            title: 'Digital terrängmodell (DTM)',
            description:
              'Ren markmodell filtrerad från vegetation och byggnader — grunden för projektering och beräkning.',
          },
          {
            title: 'Digital ytmodell (DSM)',
            description:
              'Ytmodell inklusive vegetation och byggnader för sikt-, höjd- och skuggstudier.',
          },
          {
            title: 'Höjdkurvor',
            description:
              'Kurvor med vald ekvidistans i CAD-vänligt format, framställda ur terrängmodellen.',
          },
          {
            title: 'Punktmoln',
            description:
              'Det klassificerade punktmolnet (LAS/LAZ) som modellerna byggts av, för egna analyser.',
          },
          {
            title: 'Tvärsektioner',
            description:
              'Sektioner längs eller tvärs valda linjer som underlag för projektering och mängder.',
          },
          {
            title: 'Lutnings- och avrinningsanalys',
            description:
              'Färgkodad lutning och härledda avrinningsvägar som stöd för höjdsättning och markplanering.',
          },
        ]}
      />

      <FaqAccordion headline="Vanliga frågor om markmodellering" items={faqItems} />

      <RelatedServices
        services={[
          {
            title: 'LiDAR-skanning',
            href: '/tjanster/lidar-skanning',
            description:
              'Laserskanning som ger markpunkter även där vegetationen skymmer marken.',
          },
          {
            title: 'Volymberäkning',
            href: '/tjanster/volymberakning',
            description:
              'Massor beräknade ur terrängmodellen mot referensnivå eller tidigare inmätning.',
          },
          {
            title: 'Drönarinmätning',
            href: '/tjanster/dronarinmatning',
            description:
              'Inmätning i SWEREF 99 som ger markmodellen ett kontrollerat läge i koordinatsystemet.',
          },
        ]}
      />

      <KnowledgeLinks
        slugs={[
          'dtm-och-dsm-skillnaden',
          'lidar-eller-fotogrammetri',
          'sa-fungerar-volymberakning-med-dronare',
        ]}
      />

      <CtaBand
        headline="Behöver ni en markmodell?"
        description="Berätta om området och vad modellen ska användas till så föreslår vi metod och leveransinnehåll."
        ctaLabel="Begär offert"
        ctaHref="/kontakt?service=markmodellering"
      />
    </>
  )
}
