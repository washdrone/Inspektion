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
  title: 'Volymberäkning med drönare — upplag, täkter, schakt',
  description:
    'Volymberäkning med drönare ger objektiva massor för upplag, täkter och schakt ur punktmoln och terrängmodell. Spårbar metod, rikstäckande i hela Sverige. Begär offert.',
  path: '/tjanster/volymberakning',
})

const faqItems = [
  {
    question: 'Hur beräknas volym från drönardata?',
    answer:
      'Ur den fotogrammetriska bearbetningen skapas en digital terrängmodell över ytan. Volymen beräknas som skillnaden mellan denna yta och en referensnivå — antingen en definierad basplan, marknivån runt upplaget eller en tidigare inmätning. Resultatet blir en objektiv massa i kubikmeter med tillhörande redovisning.',
  },
  {
    question: 'Hur noggrann är en volymberäkning med drönare?',
    answer:
      'Noggrannheten beror på inmätningens kvalitet — flyghöjd, bildöverlappning, RTK/GNSS och markstödpunkter — samt hur väl basytan under massan är känd. Med god markkontroll ger metoden tillförlitliga och upprepbara volymer. Vi redovisar förutsättningarna så att resultatet blir spårbart.',
  },
  {
    question: 'Vilka massor och objekt kan mätas?',
    answer:
      'Vanliga objekt är upplag av grus, sand, bark, flis och jord, samt täkter, schakt, deponier och fyllningar. Metoden passar både enstaka högar och stora områden med flera massor som ska särredovisas.',
  },
  {
    question: 'Kan ni följa volymförändringar över tid?',
    answer:
      'Ja. Genom att mäta in samma yta vid flera tillfällen beräknas differensen mellan inmätningarna. Det gör att ni kan följa hur mycket material som tillkommit eller tagits ut mellan två datum — användbart för lagerredovisning och uppföljning av uttag.',
  },
  {
    question: 'Vad får jag levererat efter en volymberäkning?',
    answer:
      'Du får en volymrapport med beräknade massor, vald referensnivå och metod, samt visualiseringar som höjdkarta och tvärsnitt. På begäran levereras även underliggande punktmoln och terrängmodell i CAD-vänliga format.',
  },
  {
    question: 'Hur hanteras massor där marken under är dold?',
    answer:
      'Drönaren mäter den synliga ytan. När basytan under en massa inte kan ses används en känd tidigare inmätning av marken, en uppmätt basplan eller en definierad referensnivå. Vi stämmer av vilket alternativ som gäller innan beräkningen så att resultatet blir korrekt.',
  },
  {
    question: 'Hur snabbt kan en volymberäkning levereras?',
    answer:
      'Själva flygningen tar oftast bara någon eller några timmar beroende på ytans storlek. Därefter följer bearbetning och beräkning. Du får en tidsuppskattning vid offerten och vid återkommande uppdrag kan rutinen göras snabb och förutsägbar.',
  },
]

export default function VolymberakningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Volymberäkning med drönare',
              description:
                'Volymberäkning med drönare för upplag, täkter och schakt. Massor beräknas ur punktmoln och digital terrängmodell med spårbar metod.',
              url: '/tjanster/volymberakning',
              serviceType: 'Volymberäkning',
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
          { name: 'Volymberäkning', url: '/tjanster/volymberakning' },
        ]}
      />

      <Hero
        eyebrow="Drönarmätning för företag"
        headline="Volymberäkning med drönare — upplag, täkter och schakt"
        subheadline="Volymberäkning med drönare ger objektiva massor för upplag, täkter, schakt och fyllningar. Vi beräknar volymerna ur punktmoln och digital terrängmodell med en spårbar metod och redovisar resultatet i kubikmeter — rikstäckande i hela Sverige."
        ctaPrimary={{ label: 'Begär offert', href: '/kontakt' }}
        ctaSecondary={{ label: 'Så beräknas volymen', href: '#process' }}
      />

      <TrustBar
        items={[
          'EASA-certifierade piloter',
          'RTK/GNSS-positionering',
          'Spårbar volymrapport',
          'Hela Sverige',
        ]}
      />

      <BenefitsGrid
        headline="Varför volymberäkning med drönare?"
        subtitle="Objektiva och upprepbara massor som underlag för lager, fakturering och uppföljning."
        benefits={[
          {
            icon: 'chart',
            title: 'Objektiva massor',
            description:
              'Volymen beräknas ur mätdata istället för uppskattningar, vilket ger ett opartiskt underlag för båda parter.',
          },
          {
            icon: 'clock',
            title: 'Snabb mätning',
            description:
              'Ett upplag eller en täkt mäts in på kort tid, ofta utan att verksamheten behöver avbrytas.',
          },
          {
            icon: 'shield',
            title: 'Säkert utan markarbete',
            description:
              'Ingen behöver klättra på högar eller röra sig i täkter och schakt — hela ytan mäts från luften.',
          },
          {
            icon: 'file',
            title: 'Spårbar redovisning',
            description:
              'Volymrapporten redovisar referensnivå, metod och förutsättningar så att resultatet kan följas och granskas.',
          },
          {
            icon: 'building',
            title: 'Differens över tid',
            description:
              'Jämför inmätningar mellan datum för att se tillförda eller uttagna massor och följa lagernivåer.',
          },
          {
            icon: 'camera',
            title: 'Visuellt underlag',
            description:
              'Höjdkartor och tvärsnitt visar var massorna finns och gör resultatet lätt att kommunicera.',
          },
        ]}
      />

      <ProcessSteps
        headline="Så beräknas volymen"
        steps={[
          {
            number: 1,
            title: 'Planering',
            description:
              'Vi definierar vilka massor som ska beräknas, vilken referensnivå som gäller och hur resultatet ska redovisas.',
          },
          {
            number: 2,
            title: 'Inmätning',
            description:
              'Drönare med RTK/GNSS flyger över ytan med hög bildöverlappning. Markstödpunkter används för att knyta data till känt läge.',
          },
          {
            number: 3,
            title: 'Terrängmodell',
            description:
              'Bilderna bearbetas till punktmoln och en digital terrängmodell över upplaget eller schaktet.',
          },
          {
            number: 4,
            title: 'Beräkning',
            description:
              'Volymen beräknas som skillnaden mellan ytmodellen och vald referensnivå, uppdelad per massa vid behov.',
          },
          {
            number: 5,
            title: 'Volymrapport',
            description:
              'Ni får massorna i kubikmeter tillsammans med metod, referensnivå och visualiseringar för full spårbarhet.',
          },
        ]}
      />

      <Deliverables
        headline="Det här ingår i leveransen"
        items={[
          {
            title: 'Volymrapport',
            description:
              'Beräknade massor i kubikmeter per objekt, med vald referensnivå och metod tydligt redovisad.',
          },
          {
            title: 'Höjdkarta',
            description:
              'Färgkodad höjdkarta som visar hur massorna är fördelade över ytan.',
          },
          {
            title: 'Tvärsnitt & profiler',
            description:
              'Sektioner genom upplag eller schakt som underlag för kontroll och kommunikation.',
          },
          {
            title: 'Digital terrängmodell',
            description:
              'Ytmodellen (DTM/DSM) som volymen beräknats ur, i CAD-vänligt format.',
          },
          {
            title: 'Punktmoln',
            description:
              'Det underliggande punktmolnet (LAS/LAZ) för egna analyser och vidare bearbetning.',
          },
          {
            title: 'Differensanalys',
            description:
              'Vid återkommande uppdrag: jämförelse mot tidigare inmätning som visar förändrade massor.',
          },
        ]}
      />

      <FaqAccordion headline="Vanliga frågor om volymberäkning" items={faqItems} />

      <RelatedServices
        services={[
          {
            title: 'Drönarinmätning',
            href: '/tjanster/dronarinmatning',
            description:
              'Noggrann inmätning i SWEREF 99 som ligger till grund för volymberäkningen.',
          },
          {
            title: 'Fotogrammetri & 3D-modell',
            href: '/tjanster/fotogrammetri-3d-modell',
            description:
              'Punktmoln och terrängmodeller som mätresultat och underlag för beräkningar.',
          },
          {
            title: '3D-kartläggning',
            href: '/tjanster/3d-kartlaggning',
            description:
              'Kartläggning av täkter och anläggningsområden med drönare och fotogrammetri.',
          },
        ]}
      />

      <KnowledgeLinks
        slugs={[
          'sa-fungerar-volymberakning-med-dronare',
          'hur-noggrann-ar-dronarmatning',
          'vad-ar-fotogrammetri',
        ]}
      />

      <CtaBand
        headline="Behöver ni beräkna en volym?"
        description="Berätta om upplaget, täkten eller schaktet så föreslår vi ett upplägg för inmätning och volymredovisning."
        ctaLabel="Begär offert"
        ctaHref="/kontakt"
      />
    </>
  )
}
