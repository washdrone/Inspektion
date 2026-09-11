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
  title: 'BIM-underlag från drönardata — inmätt verklighet för projektering',
  description:
    'Vi levererar inmätt verklighet som underlag för projektering och BIM: georefererade punktmoln, mesh, ortofoto och terrängmodeller i vanliga utbytesformat. Rikstäckande i hela Sverige.',
  path: '/tjanster/bim-underlag',
})

const faqItems = [
  {
    question: 'Vad menas med BIM-underlag från drönardata?',
    answer:
      'Det är mätdata över befintliga förhållanden som era projektörer kan arbeta vidare med i CAD- och BIM-miljö. Vi mäter in byggnaden eller anläggningen från luften och levererar georefererat punktmoln, mesh-modell, ortofoto och terrängmodell. Underlaget beskriver verkligheten som den ser ut idag — utgångspunkten för både projektering och samgranskning.',
  },
  {
    question: 'Modellerar ni färdiga IFC-objekt åt oss?',
    answer:
      'Nej. Vi levererar mätdata och underlag, inte färdigmodellerade byggdelar och inte projektering. Modelleringen till objekt med egenskaper görs av era projektörer i deras egen BIM-miljö, där underlaget läses in som referens. Det gör att modellen byggs enligt era objektstandarder och informationskrav.',
  },
  {
    question: 'Vilka format levereras underlaget i?',
    answer:
      'Punktmoln levereras normalt som LAS, LAZ eller E57, mesh-modeller i vanliga 3D-format, ortofoto som georefererad raster och terrängmodeller i rutnäts- eller CAD-vänligt format. Vi stämmer av formatvalen mot mottagande programvara innan uppdraget så att inläsningen fungerar direkt.',
  },
  {
    question: 'Vilket koordinatsystem används?',
    answer:
      'Enligt överenskommelse. Vanligt är SWEREF 99 med lämplig projektionszon och RH 2000 i höjd, men underlaget kan också levereras i ett lokalt projektsystem om projektet arbetar i ett sådant. Valet bestäms innan flygningen eftersom det påverkar hur inmätningen knyts till kända punkter.',
  },
  {
    question: 'Kan underlaget användas för samgranskning?',
    answer:
      'Ja. När punktmolnet och den projekterade modellen ligger i samma koordinatsystem kan de läggas över varandra i granskningsverktyg. Då syns avvikelser mellan projekterat och byggt läge, och kollisioner mot befintliga förhållanden kan upptäckas innan de blir problem på plats.',
  },
  {
    question: 'Hur mycket minskar behovet av platsbesök?',
    answer:
      'Ett inmätt underlag gör att många kontroller och mått kan tas direkt i modellen i stället för på plats. Det tar bort en stor del av de återkommande resorna för att mäta enstaka detaljer, men ersätter inte platsbesök där något behöver ses eller bedömas i verkligheten.',
  },
  {
    question: 'Vad kan mätas in från luften — och vad kan det inte?',
    answer:
      'Från luften mäts tak, fasader, mark och yttre anläggningsdelar. Invändiga utrymmen, undertak och ytor helt skymda av tak eller vegetation nås inte. För sådana delar krävs kompletterande mätning på plats; drönardata och markbaserad mätning kombineras ofta i samma projekt.',
  },
  {
    question: 'Hur beställer jag ett BIM-underlag?',
    answer:
      'Berätta vilket objekt det gäller, vad projekteringen ska omfatta samt vilka format och vilket koordinatsystem era projektörer arbetar i. Vi återkommer med förslag på upplägg, leveransinnehåll och leveranstid enligt offert.',
  },
]

export default function BimUnderlagPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'BIM-underlag från drönardata',
              description:
                'Inmätt verklighet som underlag för projektering och BIM — georefererat punktmoln, mesh, ortofoto och terrängmodell i vanliga utbytesformat.',
              url: '/tjanster/bim-underlag',
              serviceType: 'BIM-underlag',
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
          { name: 'BIM-underlag', url: '/tjanster/bim-underlag' },
        ]}
      />

      <Hero
        eyebrow="Mätunderlag för projektering"
        headline="BIM-underlag från drönardata"
        subheadline="Vi mäter in verkligheten från luften och levererar georefererade punktmoln, mesh-modeller, ortofoto och terrängmodeller som era projektörer kan läsa in direkt i CAD- och BIM-miljö. Ett aktuellt relationsunderlag innan om- eller tillbyggnad — rikstäckande i hela Sverige."
        ctaPrimary={{ label: 'Begär offert', href: '/kontakt?service=bim-underlag' }}
        ctaSecondary={{ label: 'Så tas underlaget fram', href: '#process' }}
      />

      <TrustBar
        items={[
          'Georefererat i SWEREF 99',
          'RTK/GNSS-positionering',
          'Vanliga utbytesformat',
          'Hela Sverige',
        ]}
      />

      <BenefitsGrid
        headline="Varför inmätt underlag från drönare?"
        subtitle="Ett aktuellt och måttriktigt utgångsläge gör projekteringen säkrare från början."
        benefits={[
          {
            icon: 'building',
            title: 'Verkligheten som utgångsläge',
            description:
              'Projekteringen utgår från hur byggnaden och marken faktiskt ser ut idag, inte från ritningar som kan vara inaktuella.',
          },
          {
            icon: 'file',
            title: 'Direkt in i CAD och BIM',
            description:
              'Punktmoln och modeller levereras i format som läses in som referens i era befintliga projekteringsverktyg.',
          },
          {
            icon: 'clock',
            title: 'Färre platsbesök',
            description:
              'Mått och kontroller kan tas i underlaget i stället för genom återkommande resor till objektet för enstaka detaljer.',
          },
          {
            icon: 'chart',
            title: 'Underlag för samgranskning',
            description:
              'Projekterad modell kan läggas över det inmätta läget så att avvikelser och kollisioner upptäcks tidigt.',
          },
          {
            icon: 'shield',
            title: 'Utan ställning och lift',
            description:
              'Tak, höga fasader och svåråtkomliga anläggningsdelar mäts från luften utan arbete på hög höjd.',
          },
          {
            icon: 'camera',
            title: 'Visuell dokumentation på köpet',
            description:
              'Samma flygning ger bilder och ortofoto som dokumenterar objektets skick vid mättillfället.',
          },
        ]}
      />

      <ProcessSteps
        id="process"
        headline="Så tas BIM-underlaget fram"
        steps={[
          {
            number: 1,
            title: 'Kravbild',
            description:
              'Vi går igenom vad som ska projekteras, vilken detaljnivå som behövs och vilka format och koordinatsystem era projektörer arbetar i.',
          },
          {
            number: 2,
            title: 'Inmätning',
            description:
              'Objektet flygs med RTK/GNSS-positionering, fotogrammetri och vid behov laserskanning, med bildvinklar anpassade för både tak, fasad och mark.',
          },
          {
            number: 3,
            title: 'Bearbetning',
            description:
              'Data bearbetas till ett sammanhängande punktmoln och en mesh-modell över objektet och den omgivande marken.',
          },
          {
            number: 4,
            title: 'Georeferering',
            description:
              'Underlaget knyts till överenskommet koordinatsystem, exempelvis SWEREF 99, och kontrolleras mot kända punkter.',
          },
          {
            number: 5,
            title: 'Leverans till projektör',
            description:
              'Ni får underlaget i avtalade utbytesformat tillsammans med dokumentation av koordinatsystem och kontroll, redo att läsas in.',
          },
        ]}
      />

      <Deliverables
        headline="Det här ingår i leveransen"
        items={[
          {
            title: 'Georefererat punktmoln',
            description:
              'Punktmoln i LAS, LAZ eller E57 som läses in som referens i CAD- och BIM-programvara.',
          },
          {
            title: 'Mesh-modell',
            description:
              'Texturerad ytmodell av byggnaden eller anläggningen för visualisering och överblick.',
          },
          {
            title: 'Ortofoto',
            description:
              'Geometriskt korrigerad flygbild i skala som underlag för planer och situationsritningar.',
          },
          {
            title: 'Terrängmodell',
            description:
              'Markmodell över omgivande terräng för höjdsättning, markplanering och anslutningar.',
          },
          {
            title: 'Fasadprojektioner',
            description:
              'Måttriktiga vyer av fasaderna som underlag för uppmätningsritningar och fasadprojektering.',
          },
          {
            title: 'Koordinatsystem enligt överenskommelse',
            description:
              'Leverans i valt system, till exempel SWEREF 99, med dokumentation av georeferering och kontroll.',
          },
        ]}
      />

      <FaqAccordion headline="Vanliga frågor om BIM-underlag" items={faqItems} />

      <RelatedServices
        services={[
          {
            title: 'Drönarinmätning',
            href: '/tjanster/dronarinmatning',
            description:
              'Inmätning i SWEREF 99 som ger underlaget dess läge och kontrollerade noggrannhet.',
          },
          {
            title: 'LiDAR-skanning',
            href: '/tjanster/lidar-skanning',
            description:
              'Laserskanning som komplement när mark under vegetation eller smala strukturer ska med.',
          },
          {
            title: 'Fotogrammetri & 3D-modell',
            href: '/tjanster/fotogrammetri-3d-modell',
            description:
              'Punktmoln och texturerade 3D-modeller ur överlappande flygbilder.',
          },
        ]}
      />

      <KnowledgeLinks
        slugs={[
          'fran-punktmoln-till-bim-underlag',
          'vad-ar-fotogrammetri',
          '3d-modeller-av-byggnader-anvandningsomraden',
        ]}
      />

      <CtaBand
        headline="Behöver era projektörer ett aktuellt underlag?"
        description="Berätta om objektet och vilka format ni arbetar i så föreslår vi ett upplägg för inmätning och leverans."
        ctaLabel="Begär offert"
        ctaHref="/kontakt?service=bim-underlag"
      />
    </>
  )
}
