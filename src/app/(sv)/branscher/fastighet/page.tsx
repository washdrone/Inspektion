import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { serviceSchema, faqSchema } from '@/lib/schema'
import { Hero } from '@/components/Hero'
import { TrustBar } from '@/components/TrustBar'
import { BenefitsGrid } from '@/components/BenefitsGrid'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = createMetadata({
  title: 'Drönarinspektion för fastighetsförvaltare | SurveyDrone',
  description:
    'Effektiv drönarinspektion av tak och fasader för fastighetsbolag och BRF:er. Termisk kamera avslöjar dolda skador. EASA-certifierade piloter i hela Sverige.',
  path: '/branscher/fastighet',
})

const faqItems = [
  {
    question: 'Hur hjälper drönarinspektion oss att planera underhållet bättre?',
    answer:
      'Med termisk kamera och högupplöst fotografering identifierar vi skador, fuktinträngning och köldbryggor som inte syns vid markbesiktning. Ni får ett komplett beslutsunderlag med prioriterade åtgärdsförslag som kan integreras direkt i er underhållsplan.',
  },
  {
    question: 'Kan ni inspektera flera fastigheter vid samma tillfälle?',
    answer:
      'Ja, vi planerar gärna inspektioner av hela fastighetsbestånd i en och samma mobilisering. Det ger er en kostnadseffektiv helhetsbild och möjliggör jämförelser mellan fastigheterna i ert bestånd.',
  },
  {
    question: 'Vilken typ av rapport får vi efter inspektionen?',
    answer:
      'Ni får en detaljerad rapport med högupplösta bilder, termiska bilder med analys, identifierade skador med koordinater samt prioriterade åtgärdsförslag. Leveranstiden anges i offerten.',
  },
  {
    question: 'Behövs det tillgång till taket eller fasaden under inspektionen?',
    answer:
      'Nej, inspektionen utförs helt från luften. Det krävs varken ställningar, skylift eller att personal beträder taket. Vi behöver bara tillgång till en startplats i närheten av fastigheten.',
  },
  {
    question: 'Fungerar termisk inspektion på alla typer av tak?',
    answer:
      'Termisk inspektion fungerar på de allra flesta taktyper, inklusive platta tak, sadeltak och papptak. Bäst resultat uppnås vid rätt väderförhållanden, vilket vi tar hänsyn till vid planeringen.',
  },
  {
    question: 'Hur ofta bör vi inspektera våra fastigheter med drönare?',
    answer:
      'Vi rekommenderar årliga inspektioner som en del av er förebyggande underhållsstrategi. Fastigheter med kända problemområden kan behöva inspekteras oftare. Kontakta oss för en plan anpassad efter ert bestånd.',
  },
  {
    question: 'Är SurveyDrones piloter certifierade?',
    answer:
      'Ja, samtliga piloter är EASA-certifierade fjärrpiloter. Vi är ansvarsförsäkrade och följer alla gällande regler för kommersiell drönardrift i Sverige.',
  },
]

export default function FastighetPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Drönarinspektion för fastighetsförvaltare',
              description:
                'Professionell drönarinspektion av tak och fasader för fastighetsbolag, BRF-styrelser och fastighetsförvaltare. Termisk kamera och högupplöst bildanalys.',
              url: '/branscher/fastighet',
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqItems)) }}
      />

      <Breadcrumbs
        items={[
          { name: 'Hem', url: '/' },
          { name: 'Branscher', url: '#' },
          { name: 'Fastighet', url: '/branscher/fastighet' },
        ]}
      />

      <Hero
        headline="Drönarinspektion för fastighetsförvaltare"
        subheadline="Slipp ställningar och manuella takvandingar. Med termisk kamera och drönarteknik ger vi er ett komplett beslutsunderlag för planerat underhåll av tak, fasader och byggnadsdetaljer — snabbare och säkrare."
        ctaPrimary={{ label: 'Begär offert', href: '/kontakt' }}
        ctaSecondary={{ label: 'Våra tjänster', href: '/tjanster/takinspektion' }}
        stats={[
          { value: '0', label: 'Arbete på höjd' },
          { value: 'Snabb', label: 'Rapportleverans' },
          { value: 'Hela', label: 'Sverige' },
          { value: 'EASA', label: 'Certifierade piloter' },
        ]}
      />

      <TrustBar
        items={[
          'EASA-certifierade fjärrpiloter',
          'Ansvarsförsäkrade',
          'Termisk kamera & RGB',
          'Verksamma i hela Sverige',
        ]}
      />

      {/* Use cases section */}
      <section className="section-padding">
        <div className="container-content">
          <h2 className="text-heading-lg sm:text-display text-center">
            Typiska uppdrag vi löser åt fastighetsförvaltare
          </h2>
          <p className="mt-4 text-body-lg text-dark-500 text-center max-w-2xl mx-auto">
            Oavsett om ni förvaltar ett enstaka flerbostadshus eller ett stort fastighetsbestånd
            hjälper vi er att identifiera och dokumentera problem innan de blir kostsamma.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="card">
              <h3 className="text-heading-sm">Statusbesiktning av tak</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Termisk och visuell inspektion av hela takytan. Vi identifierar fuktinträngning,
                skadade tätskikt, köldbryggor och mekaniska skador — utan att beträda taket.
              </p>
              <Link href="/tjanster/takinspektion" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Läs mer om takinspektion &rarr;
              </Link>
            </div>
            <div className="card">
              <h3 className="text-heading-sm">Fasaddokumentation</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Högupplöst fotografering och termisk analys av fasaden. Identifiera sprickor,
                putsskador, fuktansamlingar och köldbryggor utan ställningar.
              </p>
              <Link href="/tjanster/fasadinspektion" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Läs mer om fasadinspektion &rarr;
              </Link>
            </div>
            <div className="card">
              <h3 className="text-heading-sm">Solcellsinspektion på tak</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Har ni solceller på era fastigheter? Vi identifierar defekta paneler, hotspots
                och anslutningsproblem med fullradiometrisk datainsamling.
              </p>
              <Link href="/tjanster/solcellsinspektion" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Läs mer om solcellsinspektion &rarr;
              </Link>
            </div>
            <div className="card">
              <h3 className="text-heading-sm">Underhållsplanering & beståndskartläggning</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Få en helhetsbild av ert fastighetsbestånds skick. Vi inspekterar flera
                fastigheter i samma mobilisering och levererar jämförbara rapporter.
              </p>
              <Link href="/kontakt" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Kontakta oss för upplägg &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Fördelar för fastighetsförvaltare"
        subtitle="Drönarinspektion sparar tid och pengar samtidigt som ni får bättre beslutsunderlag."
        benefits={[
          {
            title: 'Lägre inspektionskostnad',
            description:
              'Inga kostnader för byggnadsställningar, skylift eller omfattande säkerhetsutrustning. Drönaren inspekterar snabbare och till lägre kostnad.',
            icon: 'chart',
          },
          {
            title: 'Ingen arbetsmiljörisk',
            description:
              'Ingen personal behöver arbeta på taket eller i höjd. Hela inspektionen sker från säker position på marken.',
            icon: 'shield',
          },
          {
            title: 'Snabbare genomförande',
            description:
              'En inspektion som traditionellt tar dagar kan genomföras på några timmar. Perfekt för att hinna inspektera hela beståndet.',
            icon: 'clock',
          },
          {
            title: 'Dolda skador upptäcks',
            description:
              'Branschledande termisk kamera avslöjar fukt, köldbryggor och energiförluster som är osynliga vid visuell besiktning.',
            icon: 'camera',
          },
          {
            title: 'Tydliga rapporter',
            description:
              'Detaljerade rapporter med bilder, termiska analyser och prioriterade åtgärdsförslag — klara att integrera i underhållsplanen.',
            icon: 'file',
          },
          {
            title: 'Hela fastighetsbeståndet',
            description:
              'Vi inspekterar allt från enstaka BRF-fastigheter till stora kommersiella bestånd med flera hundra objekt.',
            icon: 'building',
          },
        ]}
        variant="dark"
      />

      <FaqAccordion
        headline="Vanliga frågor från fastighetsförvaltare"
        items={faqItems}
      />

      <CtaBand
        headline="Dags att inspektera ert fastighetsbestånd?"
        description="Kontakta oss för en kostnadsfri offert. Vi hjälper er att planera inspektioner anpassade efter ert behov och bestånd."
        ctaLabel="Begär offert"
        ctaHref="/kontakt"
      />
    </>
  )
}
