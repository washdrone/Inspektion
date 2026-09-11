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
  title: 'Vindkraftinspektion med drönare — blad och torn',
  description:
    'Professionell vindkraftinspektion med drönare. Inspektera rotorblad, torn och nacelle utan reparbete. EASA-certifierade piloter. Hela Sverige.',
  path: '/tjanster/vindkraftinspektion',
})

const faqItems = [
  {
    question: 'Vilka delar av vindkraftverket inspekteras?',
    answer:
      'Vi inspekterar rotorblad (ledkant, bakkant och spets), tornet från topp till bas, nacellen och övergångszonen mellan torn och fundament. Alla ytor dokumenteras systematiskt.',
  },
  {
    question: 'Måste vindkraftverket stå stilla under inspektionen?',
    answer:
      'Ja, rotorn behöver stå stilla under inspektionen av bladen för att ge skarpa, detaljerade bilder. Vi koordinerar stoppet med er driftcentral för att minimera produktionsbortfall.',
  },
  {
    question: 'Vilka typer av bladskador kan ni identifiera?',
    answer:
      'Vi identifierar erosion på ledkanten, sprickor, delaminering, blixtnedslag, håligheter och ytskador. Både RGB-bilder och termisk analys används för att ge en komplett bedömning.',
  },
  {
    question: 'Hur jämförs drönarinspektion med repinspektion?',
    answer:
      'Drönarinspektion är snabbare och kräver inte att tekniker arbetar på höjd vid rotorbladen. Det minskar risken och förkortar den tid verket behöver stå stilla.',
  },
  {
    question: 'Kan ni inspektera hela vindkraftparker?',
    answer:
      'Ja, vi inspekterar enskilda verk såväl som stora vindkraftparker med många turbiner. Kontakta oss för planering och upplägg anpassat efter er parks storlek.',
  },
  {
    question: 'Hur hanteras väderförhållanden?',
    answer:
      'Flygsäkerheten är avgörande. Vi flyger inte i kraftig vind, regn eller dålig sikt. Inspektion planeras efter väderprognos och vi har flexibilitet att anpassa tidplanen.',
  },
  {
    question: 'Kan resultaten användas för garantiärenden?',
    answer:
      'Ja, vår dokumentation ger ett objektivt underlag med högupplösta bilder och skadeklassificering som kan användas vid garantianspråk och försäkringsärenden.',
  },
  {
    question: 'Hur ofta bör vindkraftverk inspekteras?',
    answer:
      'Inspektionsintervallet beror på verkets ålder, placering och driftförhållanden. Vi hjälper er att ta fram en inspektionsplan anpassad efter era turbiner.',
  },
]

export default function VindkraftinspektionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Vindkraftinspektion med drönare',
              description:
                'Professionell vindkraftinspektion med drönare. Inspektera rotorblad, torn och nacelle utan reparbete.',
              url: '/tjanster/vindkraftinspektion',
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
          { name: 'Vindkraftinspektion', url: '/tjanster/vindkraftinspektion' },
        ]}
      />

      <Hero
        headline="Vindkraftinspektion med drönare — blad, torn och nacelle"
        subheadline="Inspektera rotorblad, torn och nacelle utan reparbete eller klättring. Våra EASA-certifierade piloter dokumenterar varje detalj med högupplöst kamera och termisk analys — snabbare och säkrare."
        ctaPrimary={{ label: 'Begär offert', href: '/kontakt?service=vindkraftinspektion' }}
        ctaSecondary={{ label: 'Se hur det fungerar', href: '#process' }}
      />

      <TrustBar
        items={[
          'EASA-certifierade piloter',
          'Ansvarsförsäkrade',
          'Hela Sverige',
          'Bladinspektion på nära håll',
        ]}
      />

      <BenefitsGrid
        headline="Varför vindkraftinspektion med drönare?"
        subtitle="Effektivare, säkrare och mer detaljerad inspektion av vindkraftverk."
        benefits={[
          {
            icon: 'shield',
            title: 'Säkrare inspektion',
            description:
              'Ingen personal behöver arbeta på höjd vid rotorbladen. Eliminerar risken med reparbete och klättring.',
          },
          {
            icon: 'clock',
            title: 'Kortare stillestånd',
            description:
              'Drönarinspektion går snabbare än traditionella metoder, vilket minskar den tid verket behöver stå stilla.',
          },
          {
            icon: 'camera',
            title: 'Detaljerade bladbilder',
            description:
              'Högupplösta närbilder av ledkanter, spetsar och bladytor avslöjar erosion, sprickor och delaminering.',
          },
          {
            icon: 'chart',
            title: 'Termisk analys',
            description:
              'Branschledande termisk kamera kan identifiera interna bladskador och strukturella avvikelser som inte syns visuellt.',
          },
          {
            icon: 'building',
            title: 'Hela verket',
            description:
              'Vi inspekterar blad, torn, nacelle och övergångszoner i ett och samma besök.',
          },
          {
            icon: 'file',
            title: 'Dokumentation för garantier',
            description:
              'Strukturerade rapporter med skadeklassificering som kan användas för garantianspråk och försäkringsärenden.',
          },
        ]}
      />

      <ProcessSteps
        id="process"
        headline="Så genomförs en vindkraftinspektion"
        steps={[
          {
            number: 1,
            title: 'Planering & koordinering',
            description:
              'Vi planerar inspektionen med er driftcentral, koordinerar rotorstopp och väljer rätt väderförhållanden.',
          },
          {
            number: 2,
            title: 'Bladinspektion',
            description:
              'Drönaren flyger nära varje blad och dokumenterar ledkant, bakkant och spets med högupplöst kamera.',
          },
          {
            number: 3,
            title: 'Torn & nacelle',
            description:
              'Tornet inspekteras från topp till bas. Nacellen dokumenteras visuellt och med termisk kamera.',
          },
          {
            number: 4,
            title: 'Rapport & uppföljning',
            description:
              'Ni får en komplett inspektionsrapport med skadeklassificering, bilder och åtgärdsrekommendationer.',
          },
        ]}
      />


      <Deliverables
        headline="Det här ingår i leveransen"
        items={[
          {
            title: 'Bladrapport',
            description:
              'Detaljerad dokumentation av varje blad med högupplösta bilder av alla identifierade skador.',
          },
          {
            title: 'Torninspektion',
            description:
              'Visuell dokumentation av tornets skick, inklusive korrosion, sprickor och ytskador.',
          },
          {
            title: 'Termiska analyser',
            description:
              'Termogrammer av blad och nacelle för att identifiera interna avvikelser.',
          },
          {
            title: 'Skadeklassificering',
            description:
              'Standardiserad klassificering av skador efter typ och allvarlighetsgrad.',
          },
          {
            title: 'Åtgärdsrekommendationer',
            description:
              'Prioriterade förslag på reparationer och tidplan för uppföljande åtgärder.',
          },
          {
            title: 'Digital rapport',
            description:
              'Komplett inspektionsrapport i PDF med sammanfattning, detaljbilagor och referensbilder.',
          },
        ]}
      />

      <FaqAccordion headline="Vanliga frågor om vindkraftinspektion" items={faqItems} />

      <RelatedServices
        services={[
          {
            title: 'Industriinspektion',
            href: '/tjanster/industriinspektion',
            description:
              'Inspektion av industrianläggningar, skorstenar, cisterner och annan infrastruktur.',
          },
          {
            title: 'Termisk inspektion',
            href: '/tjanster/termisk-inspektion',
            description:
              'Generell infraröd inspektion för att identifiera värmeavvikelser och dolda problem.',
          },
          {
            title: '3D-kartläggning',
            href: '/tjanster/3d-kartlaggning',
            description:
              'Skapa 3D-modeller av vindkraftparker för planering, dokumentation och BIM.',
          },
        ]}
      />

      <KnowledgeLinks
        slugs={[
          'vindkraftinspektion-sa-gar-det-till',
          'dronarinspektion-vs-traditionell-inspektion',
          'hotspots-i-solceller',
        ]}
      />

      <CtaBand
        headline="Boka vindkraftinspektion"
        description="Håll era turbiner i optimalt skick — kontakta oss för offert och planering."
        ctaLabel="Begär offert"
        ctaHref="/kontakt?service=vindkraftinspektion"
      />
    </>
  )
}
