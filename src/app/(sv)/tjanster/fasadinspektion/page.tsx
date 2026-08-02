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
  title: 'Fasadinspektion med drönare — skador och sprickor',
  description:
    'Professionell fasadinspektion med drönare. Identifiera sprickor, fuktskador och putssläpp utan ställning. EASA-certifierade piloter. Hela Sverige.',
  path: '/tjanster/fasadinspektion',
})

const faqItems = [
  {
    question: 'Vilka typer av fasadskador kan ni upptäcka?',
    answer:
      'Vi identifierar sprickor, putssläpp, fuktgenomslag, fogbrister, mögelpåväxt, korrosion och lösa fasadelement. Termisk kamera kan dessutom avslöja dolda fuktproblem och köldbryggor bakom fasaden.',
  },
  {
    question: 'Hur höga byggnader kan ni inspektera?',
    answer:
      'Drönare kan inspektera byggnader oavsett höjd, från villabebyggelse till höghus och industrianläggningar. Vi anpassar flygningen efter byggnadens förutsättningar.',
  },
  {
    question: 'Ersätter drönarinspektion behovet av ställning?',
    answer:
      'I de flesta fall ersätter drönarinspektionen behovet av ställning för själva inspektionen. Om åtgärder behöver utföras kan ställning fortfarande krävas, men ni vet exakt var insatserna behövs.',
  },
  {
    question: 'Kan ni inspektera fasader i tätbebyggda områden?',
    answer:
      'Ja, våra EASA-certifierade piloter har erfarenhet av att flyga i stadsmiljö. Vi genomför alltid en riskbedömning och säkerställer att flygningen sker säkert och enligt gällande regler.',
  },
  {
    question: 'Vad ingår i rapporten?',
    answer:
      'Rapporten innehåller högupplösta bilder med markeringar av identifierade skador, skadeklassificering, termogrammer vid behov, samt prioriterade åtgärdsrekommendationer.',
  },
  {
    question: 'Hur lång tid tar en fasadinspektion?',
    answer:
      'Tiden varierar beroende på byggnadens storlek och komplexitet. Kontakta oss för en uppskattning baserad på er fastighet.',
  },
  {
    question: 'Kan fasadinspektion kombineras med takinspektion?',
    answer:
      'Ja, det är vanligt att kombinera fasad- och takinspektion vid samma tillfälle. Det ger en komplett bild av byggnadens klimatskal och sparar tid.',
  },
  {
    question: 'Hur bokar vi en fasadinspektion?',
    answer:
      'Kontakta oss via formuläret eller skicka e-post till info@surveydrone.se så återkommer vi med en offert och planering.',
  },
]

export default function FasadinspektionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Fasadinspektion med drönare',
              description:
                'Professionell fasadinspektion med drönare. Identifiera sprickor, fuktskador och putssläpp utan ställning.',
              url: '/tjanster/fasadinspektion',
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
          { name: 'Fasadinspektion', url: '/tjanster/fasadinspektion' },
        ]}
      />

      <Hero
        headline="Fasadinspektion med drönare — utan ställning"
        subheadline="Upptäck sprickor, putssläpp, fuktskador och köldbryggor på byggnaders fasader. Våra EASA-certifierade piloter dokumenterar hela fasaden med högupplösta bilder och termisk analys — snabbt och utan kostsam ställning."
        ctaPrimary={{ label: 'Begär offert', href: '/kontakt' }}
        ctaSecondary={{ label: 'Se hur det fungerar', href: '#process' }}
      />

      <TrustBar
        items={[
          'EASA-certifierade piloter',
          'Ansvarsförsäkrade',
          'Hela Sverige',
          'Ingen ställning krävs',
        ]}
      />

      <BenefitsGrid
        headline="Varför fasadinspektion med drönare?"
        subtitle="En modern metod som ger bättre resultat till lägre kostnad och risk."
        benefits={[
          {
            icon: 'building',
            title: 'Alla byggnadstyper',
            description:
              'Bostadshus, kontorskomplex, industribyggnader och kulturhistoriska fastigheter — vi anpassar oss efter era behov.',
          },
          {
            icon: 'shield',
            title: 'Ingen ställning behövs',
            description:
              'Eliminerar kostnaden och risken med ställningsbygge. Personal behöver inte arbeta på höjd.',
          },
          {
            icon: 'camera',
            title: 'Detaljerade närbilder',
            description:
              'Högupplösta bilder fångar sprickor, fogbrister och putssläpp med hög precision.',
          },
          {
            icon: 'chart',
            title: 'Termisk analys',
            description:
              'Branschledande termisk kamera avslöjar köldbryggor, fukt bakom fasaden och isoleringsbrister.',
          },
          {
            icon: 'clock',
            title: 'Tidseffektivt',
            description:
              'En fasadinspektion med drönare tar en bråkdel av tiden jämfört med manuella metoder.',
          },
          {
            icon: 'file',
            title: 'Beslutsunderlag',
            description:
              'Strukturerade rapporter med skadeklassificering ger ett tydligt underlag för underhållsplanering.',
          },
        ]}
      />

      <ProcessSteps
        headline="Så genomförs en fasadinspektion"
        steps={[
          {
            number: 1,
            title: 'Behovsanalys',
            description:
              'Vi kartlägger era behov, byggnadens förutsättningar och planerar flygningen utifrån omgivningen.',
          },
          {
            number: 2,
            title: 'Inspektion',
            description:
              'Drönaren flyger systematiskt längs fasaderna och dokumenterar varje sektion med RGB- och termisk kamera.',
          },
          {
            number: 3,
            title: 'Analys',
            description:
              'Våra inspektörer analyserar alla bilder och termogrammer för att identifiera och klassificera skador.',
          },
          {
            number: 4,
            title: 'Rapportering',
            description:
              'Ni får en komplett rapport med bilder, bedömningar och konkreta åtgärdsförslag.',
          },
        ]}
      />

      {/* Live-visning */}
      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-heading-lg sm:text-display">Följ inspektionen live</h2>
            <p className="mt-6 text-body-lg text-dark-500">
              Med vår live-visningstjänst kan ni följa fasadinspektionen i realtid via en säker
              länk. Särskilt värdefullt för fastighetsförvaltare som ansvarar för byggnader på
              annan ort och vill följa arbetet utan att behöva resa. Ni ser exakt vad kameran
              fångar och kan kommunicera med piloten under hela flygningen.
            </p>
          </div>
        </div>
      </section>

      <Deliverables
        headline="Det här ingår i leveransen"
        items={[
          {
            title: 'Fasadbilder i hög upplösning',
            description:
              'Systematisk fotografering av alla fasader med detaljbilder av identifierade skador.',
          },
          {
            title: 'Termogrammer',
            description:
              'Termiska bilder som visar köldbryggor, fukt och isoleringsbrister i fasaden.',
          },
          {
            title: 'Skadekarta',
            description:
              'Visuell översikt av fasaden med markerade och klassificerade skador.',
          },
          {
            title: 'Åtgärdsplan',
            description:
              'Prioriterade rekommendationer för reparation och underhåll baserat på skadornas allvarlighetsgrad.',
          },
          {
            title: 'Digital rapport',
            description:
              'Komplett inspektionsrapport i PDF med sammanfattning, bilagor och metodbeskrivning.',
          },
          {
            title: 'Råmaterial',
            description:
              'Tillgång till alla originalbilder och termogrammer för era egna analyser vid behov.',
          },
        ]}
      />

      <FaqAccordion headline="Vanliga frågor om fasadinspektion" items={faqItems} />

      <RelatedServices
        services={[
          {
            title: 'Takinspektion',
            href: '/tjanster/takinspektion',
            description:
              'Komplettera fasadinspektionen med en noggrann takinspektion för komplett klimatskalskontroll.',
          },
          {
            title: 'Termisk inspektion',
            href: '/tjanster/termisk-inspektion',
            description:
              'Generell termisk inspektion med infraröd kamera för byggnader och anläggningar.',
          },
          {
            title: 'Fuktinspektion',
            href: '/tjanster/fuktinspektion',
            description:
              'Specialiserad fuktdetektering för att hitta dolda fuktproblem i byggnader.',
          },
        ]}
      />

      <KnowledgeLinks
        slugs={[
          'vanliga-fasadskador-och-hur-de-upptacks',
          'hitta-fuktskador-med-termisk-inspektion',
          'dronarinspektion-for-bostadsrattsforeningar',
        ]}
      />

      <CtaBand
        headline="Boka fasadinspektion"
        description="Få en komplett bild av er fasads skick — kontakta oss för offert."
        ctaLabel="Begär offert"
        ctaHref="/kontakt"
      />
    </>
  )
}
