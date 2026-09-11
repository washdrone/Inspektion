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
  title: "Volymberäkning med drönare – upplag och schakt",
  description:
    "Mät volymen i upplag, täkter och schakt med drönare. Få en volymrapport med referensyta, metod och resultat i m³. Beskriv objektet och begär offert.",
  path: '/tjanster/volymberakning',
})

const faqItems = [
  {
    question: 'Hur beräknas volym från drönardata?',
    answer:
      'Ur den fotogrammetriska bearbetningen skapas en digital ytmodell över den synliga ytan. Volymen beräknas som skillnaden mellan denna yta och en referensnivå — antingen en definierad basplan, marknivån runt upplaget eller en tidigare inmätning. Resultatet blir en beräknad volym i kubikmeter med tillhörande redovisning.',
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
      'Du får en volymrapport med beräknade volymer, vald referensnivå och metod, samt visualiseringar som höjdkarta och tvärsnitt. På begäran levereras även underliggande punktmoln och ytmodell i överenskomna format.',
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
                "Få volymer redovisade i kubikmeter utifrån drönarmätning av den synliga ytan. Vi bestämmer referensyta och redovisning tillsammans med er och sammanställer resultatet i en volymrapport för lageruppföljning, planering och jämförelse mellan mättillfällen.",
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
        headline="Volymberäkning med drönare – mät upplag, schakt och fyllningar"
        subheadline="Få volymer redovisade i kubikmeter utifrån drönarmätning av den synliga ytan. Vi bestämmer referensyta och redovisning tillsammans med er och sammanställer resultatet i en volymrapport för lageruppföljning, planering och jämförelse mellan mättillfällen."
        ctaPrimary={{ label: "Begär offert på volymberäkning", href: '/kontakt?service=volymberakning' }}
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

      <Deliverables
        headline="Leveransens delar – omfattning enligt offert"
        items={[
          {
            title: 'Volymrapport',
            description:
              'Beräknade volymer i kubikmeter per objekt, med vald referensnivå och metod tydligt redovisad.',
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
            title: 'Ytmodell enligt överenskommelse',
            description:
              'På begäran och enligt offert: modellen som volymen beräknats ur, i överenskommet format. En modell av upplagets yta är inte samma sak som marken under.',
          },
          {
            title: 'Punktmoln',
            description:
              'På begäran och enligt offert: underliggande punktmoln i LAS/LAZ för egna analyser.',
          },
          {
            title: 'Differensanalys',
            description:
              'Vid avtalad återkommande mätning: jämförelse mot tidigare inmätning som visar förändrade volymer.',
          },
        ]}
      />

      <BenefitsGrid
        headline="Varför volymberäkning med drönare?"
        subtitle="Spårbart volymunderlag för lageruppföljning, planering och jämförelse."
        benefits={[
          {
            icon: 'chart',
            title: 'Volymer i kubikmeter',
            description:
              'Volymen beräknas ur mätdata mot en bestämd referensyta. Metod och förutsättningar redovisas så att resultatet kan granskas.',
          },
          {
            icon: 'clock',
            title: 'Snabb mätning',
            description:
              'Ett upplag eller en täkt mäts in på kort tid, ofta utan att verksamheten behöver avbrytas.',
          },
          {
            icon: 'shield',
            title: 'Minskad åtkomst på upplag',
            description:
              'Drönaren mäter synliga ytor från luften. Behov av markkontroll och tillträde bedöms under planeringen.',
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
        id="process"
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
              'Bilderna bearbetas till punktmoln och en ytmodell över det synliga upplaget eller schaktet.',
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
              'Ni får volymerna i kubikmeter tillsammans med metod, referensnivå och visualiseringar för full spårbarhet.',
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
        ctaLabel="Begär offert på volymberäkning"
        ctaHref="/kontakt?service=volymberakning"
      />
    </>
  )
}
