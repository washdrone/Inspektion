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
  title: 'Industriinspektion med drönare — anläggningar säkert',
  description:
    'Professionell industriinspektion med drönare. Inspektera anläggningar, skorstenar, cisterner och rörledningar utan produktionsstopp. EASA-certifierade piloter.',
  path: '/tjanster/industriinspektion',
})

const faqItems = [
  {
    question: 'Vilka industriella objekt kan inspekteras med drönare?',
    answer:
      'Vi inspekterar skorstenar, cisterner, torn, rörledningar, facklor, kylsystem, pannor, kranar, silos, transportband och andra svåråtkomliga strukturer på industrianläggningar.',
  },
  {
    question: 'Kan ni flyga i ex-klassade zoner?',
    answer:
      'Ja, vi har erfarenhet av att arbeta i ex-klassade miljöer och anpassar utrustning och procedurer efter de specifika kraven i varje zon.',
  },
  {
    question: 'Måste produktionen stå stilla under inspektionen?',
    answer:
      'I många fall kan inspektionen genomföras utan produktionsstopp. Vi planerar flygningen för att minimera störningar i verksamheten. Kontakta oss för att diskutera era specifika förutsättningar.',
  },
  {
    question: 'Vilka typer av skador och problem kan ni identifiera?',
    answer:
      'Vi identifierar korrosion, sprickor, deformationer, beläggningar, läckor, värmeavvikelser och mekaniskt slitage. Termisk kamera kan dessutom avslöja isoleringsbrister och elektriska fel.',
  },
  {
    question: 'Hur hanterar ni säkerheten på industriområdet?',
    answer:
      'Säkerhet är vår högsta prioritet. Vi genomför alltid en platsspecifik riskbedömning, följer anläggningens säkerhetsregler och har erfarenhet av att arbeta i krävande industrimiljöer.',
  },
  {
    question: 'Kan resultaten integreras i vårt underhållssystem?',
    answer:
      'Ja, vi levererar data i format som kan integreras i era befintliga underhålls- och förvaltningssystem. Kontakta oss för att diskutera era specifika behov.',
  },
  {
    question: 'Hur ofta bör industriella objekt inspekteras?',
    answer:
      'Inspektionsintervallet beror på objektets typ, ålder och belastning. Vi hjälper er att ta fram en inspektionsplan anpassad efter era anläggningar.',
  },
  {
    question: 'Kan ni inspektera konfidentiella anläggningar?',
    answer:
      'Ja, vi är vana vid att arbeta under sekretessavtal och följer era rutiner för åtkomstkontroll och informationssäkerhet.',
  },
]

export default function IndustriinspektionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Industriinspektion med drönare',
              description:
                'Professionell industriinspektion med drönare. Inspektera anläggningar, skorstenar, cisterner och rörledningar utan produktionsstopp.',
              url: '/tjanster/industriinspektion',
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
          { name: 'Industriinspektion', url: '/tjanster/industriinspektion' },
        ]}
      />

      <Hero
        headline="Industriinspektion med drönare — säkert och effektivt"
        subheadline="Inspektera skorstenar, cisterner, rörledningar och andra svåråtkomliga industriella objekt utan ställning, klättrare eller produktionsstopp. Våra EASA-certifierade piloter har erfarenhet av ex-klassade miljöer."
        ctaPrimary={{ label: 'Begär offert', href: '/kontakt?service=industriinspektion' }}
        ctaSecondary={{ label: 'Se hur det fungerar', href: '#process' }}
      />

      <TrustBar
        items={[
          'EASA-certifierade piloter',
          'Ansvarsförsäkrade',
          'Erfarenhet av ex-klassade zoner',
          'Hela Sverige',
        ]}
      />

      <BenefitsGrid
        headline="Fördelarna med drönarbaserad industriinspektion"
        subtitle="Minimera risk, tid och kostnad vid inspektion av industriella anläggningar."
        benefits={[
          {
            icon: 'shield',
            title: 'Ökad personalsäkerhet',
            description:
              'Eliminerar behovet av att skicka personal till farliga höjder, trånga utrymmen eller riskfyllda miljöer.',
          },
          {
            icon: 'clock',
            title: 'Minimalt produktionsstopp',
            description:
              'Många inspektioner kan genomföras utan att stoppa produktionen, vilket sparar värdefull drifttid.',
          },
          {
            icon: 'camera',
            title: 'Visuell och termisk analys',
            description:
              'Kombinera högupplösta bilder med termisk data för att identifiera korrosion, läckor och värmeavvikelser.',
          },
          {
            icon: 'building',
            title: 'Ex-klassade miljöer',
            description:
              'Vi har erfarenhet av att arbeta i ex-klassade zoner med anpassade procedurer och utrustning.',
          },
          {
            icon: 'chart',
            title: 'Tillståndsbedömning',
            description:
              'Systematisk dokumentation av objektets skick ger underlag för underhållsplanering och livslängdsbedömning.',
          },
          {
            icon: 'file',
            title: 'Anpassade rapporter',
            description:
              'Rapporterna kan anpassas efter era krav och format för att integreras i befintliga underhållssystem.',
          },
        ]}
      />

      <ProcessSteps
        id="process"
        headline="Så genomförs en industriinspektion"
        steps={[
          {
            number: 1,
            title: 'Platsbesök & riskbedömning',
            description:
              'Vi besöker anläggningen, identifierar inspektionsobjekt, bedömer risker och planerar flygningen efter era säkerhetsrutiner.',
          },
          {
            number: 2,
            title: 'Inspektion',
            description:
              'Kommersiell inspektionsklass-UAV dokumenterar objektet med RGB- och termisk kamera från alla relevanta vinklar.',
          },
          {
            number: 3,
            title: 'Analys & bedömning',
            description:
              'Alla bilder och data analyseras. Skador, korrosion och avvikelser identifieras och klassificeras.',
          },
          {
            number: 4,
            title: 'Rapport & uppföljning',
            description:
              'Ni får en detaljerad inspektionsrapport med fynd, bedömningar och prioriterade åtgärdsrekommendationer.',
          },
        ]}
      />


      <Deliverables
        image="industriinspektion"
        headline="Det här ingår i leveransen"
        items={[
          {
            title: 'Högupplösta inspektionsbilder',
            description:
              'Detaljerade bilder av inspekterade objekt från alla relevanta vinklar och avstånd.',
          },
          {
            title: 'Termiska analyser',
            description:
              'Termogrammer som visar värmeavvikelser, isoleringsbrister och potentiella läckor.',
          },
          {
            title: 'Skadeklassificering',
            description:
              'Varje identifierad skada klassificeras efter typ, omfattning och allvarlighetsgrad.',
          },
          {
            title: 'Tillståndsbedömning',
            description:
              'Övergripande bedömning av objektets skick som underlag för underhållsplanering.',
          },
          {
            title: 'Åtgärdsrekommendationer',
            description:
              'Prioriterade förslag på reparationer och förebyggande insatser.',
          },
          {
            title: 'Digital rapport',
            description:
              'Komplett rapport i önskat format med sammanfattning, analyser och bilagor.',
          },
        ]}
      />

      <FaqAccordion headline="Vanliga frågor om industriinspektion" items={faqItems} />

      <RelatedServices
        services={[
          {
            title: 'Termisk inspektion',
            href: '/tjanster/termisk-inspektion',
            description:
              'Infraröd inspektion för att hitta värmeavvikelser i anläggningar och byggnader.',
          },
          {
            title: 'Vindkraftinspektion',
            href: '/tjanster/vindkraftinspektion',
            description:
              'Specialiserad inspektion av vindkraftverk — blad, torn och nacelle.',
          },
          {
            title: '3D-kartläggning',
            href: '/tjanster/3d-kartlaggning',
            description:
              'Skapa 3D-modeller och ortofoto av industriområden för planering och dokumentation.',
          },
        ]}
      />

      <KnowledgeLinks
        slugs={[
          'dronarinspektion-i-ex-klassade-miljoer',
          'vad-ar-dronarinspektion',
          'dronarinspektion-vs-traditionell-inspektion',
        ]}
      />

      <CtaBand
        headline="Inspektera era anläggningar säkert"
        description="Boka en industriinspektion med drönare — kontakta oss för offert och planering."
        ctaLabel="Begär offert"
        ctaHref="/kontakt?service=industriinspektion"
      />
    </>
  )
}
