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
  title: '3D-kartläggning med drönare — fotogrammetri och ortofoto',
  description:
    '3D-kartläggning med drönare. Fotogrammetri, ortofoto och punktmoln med RTK/GNSS-positionering. EASA-certifierade piloter. Hela Sverige.',
  path: '/tjanster/3d-kartlaggning',
})

const faqItems = [
  {
    question: 'Vad är fotogrammetri?',
    answer:
      'Fotogrammetri är en teknik där överlappande flygbilder bearbetas med specialiserad programvara för att skapa exakta 3D-modeller, ortofoto och punktmoln. Resultatet är ett mätbart digitalt underlag av verkligheten.',
  },
  {
    question: 'Vad är ett ortofoto?',
    answer:
      'Ett ortofoto är en geometriskt korrigerad flygbild där perspektivförvrängning tagits bort. Det innebär att bilden har en enhetlig skala och kan användas som en karta med mätbara avstånd.',
  },
  {
    question: 'Hur noggrann är positioneringen?',
    answer:
      'Med RTK/GNSS-positionering uppnår vi centimeternoggrannhet, vilket gör att 3D-modeller och ortofoto kan användas som beslutsunderlag för projektering och planering.',
  },
  {
    question: 'Vilka leveransformat erbjuder ni?',
    answer:
      'Vi levererar i branschstandardformat som kan importeras i era befintliga system. Vanliga format inkluderar punktmoln, 3D-mesh, ortofoto och digitala terrängmodeller. Kontakta oss för att diskutera era specifika formatbehov.',
  },
  {
    question: 'Hur stora områden kan kartläggas?',
    answer:
      'Vi kartlägger allt från enskilda byggnader och tomter till stora markområden och industrianläggningar. Storleken påverkar tidsåtgången men inte metodens tillämplighet.',
  },
  {
    question: 'Kan 3D-modellen användas i BIM-projekt?',
    answer:
      'Ja, våra 3D-modeller och punktmoln kan importeras i BIM-programvara och användas som referens vid projektering, ombyggnation eller förvaltning.',
  },
  {
    question: 'Hur lång tid tar det från flygning till leverans?',
    answer:
      'Bearbetningstiden beror på projektets omfattning. Vi ger er en tidsuppskattning vid offertförfrågan baserat på era specifika behov.',
  },
  {
    question: 'Kan ni dokumentera byggprojekt över tid?',
    answer:
      'Ja, regelbundna flygningar under ett byggprojekt skapar en tidsserie som dokumenterar framsteg och kan användas för uppföljning och fakturering.',
  },
]

export default function KartlaggningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: '3D-kartläggning med drönare',
              description:
                '3D-kartläggning med drönare. Fotogrammetri, ortofoto och punktmoln med RTK/GNSS-positionering.',
              url: '/tjanster/3d-kartlaggning',
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
          { name: '3D-kartläggning', url: '/tjanster/3d-kartlaggning' },
        ]}
      />

      <Hero
        headline="3D-kartläggning med drönare — fotogrammetri och ortofoto"
        subheadline="Skapa exakta 3D-modeller, ortofoto och punktmoln med RTK/GNSS-positionering med centimeternoggrannhet. Våra EASA-certifierade piloter levererar mätbara digitala underlag för projektering, byggdokumentation och förvaltning."
        ctaPrimary={{ label: 'Begär offert', href: '/kontakt' }}
        ctaSecondary={{ label: 'Se hur det fungerar', href: '#process' }}
      />

      <TrustBar
        items={[
          'EASA-certifierade piloter',
          'Ansvarsförsäkrade',
          'RTK/GNSS-positionering',
          'Hela Sverige',
        ]}
      />

      <BenefitsGrid
        headline="Varför 3D-kartläggning med drönare?"
        subtitle="Digitala underlag med hög precision för planering, projektering och dokumentation."
        benefits={[
          {
            icon: 'chart',
            title: 'Centimeternoggrannhet',
            description:
              'RTK/GNSS-positionering ger mätbara resultat med centimeternoggrannhet, direkt användbara i projektering.',
          },
          {
            icon: 'camera',
            title: 'Fotogrammetri',
            description:
              'Överlappande flygbilder bearbetas till detaljerade 3D-modeller, ortofoto och punktmoln.',
          },
          {
            icon: 'clock',
            title: 'Snabb datainsamling',
            description:
              'Stora ytor kartläggs på kort tid jämfört med traditionell mätning på marken.',
          },
          {
            icon: 'building',
            title: 'Byggdokumentation',
            description:
              'Dokumentera byggprojekt regelbundet med tidsserier av ortofoto och 3D-modeller.',
          },
          {
            icon: 'file',
            title: 'BIM-kompatibelt',
            description:
              'Punktmoln och 3D-modeller kan importeras direkt i BIM-programvara för projektering och förvaltning.',
          },
          {
            icon: 'shield',
            title: 'Säker insamling',
            description:
              'Ingen personal behöver vistas i riskområden. Kartlägg byggarbetsplatser, rasområden och industrimark från luften.',
          },
        ]}
      />

      <ProcessSteps
        headline="Så genomförs en 3D-kartläggning"
        steps={[
          {
            number: 1,
            title: 'Planering',
            description:
              'Vi definierar området, sätter upp markpunkter vid behov och planerar flygmönster för optimal bildöverlappning.',
          },
          {
            number: 2,
            title: 'Flygning & datainsamling',
            description:
              'Kommersiell inspektionsklass-UAV med RTK/GNSS-positionering flyger systematiskt och samlar in hundratals till tusentals bilder.',
          },
          {
            number: 3,
            title: 'Bearbetning',
            description:
              'Bilderna bearbetas med fotogrammetrisk programvara till 3D-modell, ortofoto, punktmoln och/eller terrängmodell.',
          },
          {
            number: 4,
            title: 'Leverans',
            description:
              'Ni får färdiga digitala underlag i önskade format, redo att importeras i era system och programvaror.',
          },
        ]}
      />

      {/* Live-visning */}
      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-heading-lg sm:text-display">Följ kartläggningen i realtid</h2>
            <p className="mt-6 text-body-lg text-dark-500">
              Via en säker live-länk kan projektledare och beställare följa kartläggningsflygningen
              i realtid. Se hur datainsamlingen fortskrider och få en förhandsvisning av det
              område som dokumenteras. Perfekt för byggprojekt där flera parter behöver insyn
              utan att vara fysiskt på plats.
            </p>
          </div>
        </div>
      </section>

      <Deliverables
        headline="Det här ingår i leveransen"
        items={[
          {
            title: 'Ortofoto',
            description:
              'Geometriskt korrigerade flygbilder med enhetlig skala, användbara som mätbara kartor.',
          },
          {
            title: '3D-modell',
            description:
              'Texturerad 3D-mesh av området eller byggnaden för visualisering och analys.',
          },
          {
            title: 'Punktmoln',
            description:
              'Detaljerade punktmoln med färginformation för import i CAD- och BIM-programvara.',
          },
          {
            title: 'Digital terrängmodell',
            description:
              'Höjdmodell av terrängen för volymberäkningar, avrinningsanalyser och planering.',
          },
          {
            title: 'Georefererad data',
            description:
              'All data levereras med koordinater i överenskommet referenssystem.',
          },
          {
            title: 'Projektrapport',
            description:
              'Dokumentation av metodik, noggrannhet och metadata för kvalitetssäkring.',
          },
        ]}
      />

      <FaqAccordion headline="Vanliga frågor om 3D-kartläggning" items={faqItems} />

      <RelatedServices
        services={[
          {
            title: 'Takinspektion',
            href: '/tjanster/takinspektion',
            description:
              'Kombinera kartläggning med takinspektion för en komplett dokumentation av fastigheten.',
          },
          {
            title: 'Industriinspektion',
            href: '/tjanster/industriinspektion',
            description:
              'Inspektion av industrianläggningar med visuell och termisk analys.',
          },
          {
            title: 'Fasadinspektion',
            href: '/tjanster/fasadinspektion',
            description:
              'Detaljerad inspektion av fasader med högupplöst kamera och termisk analys.',
          },
        ]}
      />

      <KnowledgeLinks
        slugs={[
          'vad-ar-ett-ortofoto',
          'vad-ar-fotogrammetri',
          '3d-modeller-av-byggnader-anvandningsomraden',
        ]}
      />

      <CtaBand
        headline="Starta ert kartläggningsprojekt"
        description="Kontakta oss för att diskutera er 3D-kartläggning — vi skräddarsyr leveransen efter era behov."
        ctaLabel="Begär offert"
        ctaHref="/kontakt"
      />
    </>
  )
}
