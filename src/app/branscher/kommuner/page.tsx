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
  title: 'Drönarinspektion för kommuner | SurveyDrone',
  description:
    'Drönarinspektion av kommunala fastigheter, skolor, idrottshallar och infrastruktur. Termisk kamera och dokumentation. EASA-certifierade piloter.',
  path: '/branscher/kommuner',
})

const faqItems = [
  {
    question: 'Kan ni inspektera kommunala fastigheter som skolor och förskolor?',
    answer:
      'Ja, vi inspekterar alla typer av kommunala fastigheter — skolor, förskolor, idrottshallar, bibliotek, äldreboenden och kontorsbyggnader. Inspektionen genomförs utan att störa verksamheten.',
  },
  {
    question: 'Hur hanterar ni upphandlingskrav?',
    answer:
      'Vi har erfarenhet av att arbeta med offentliga beställare och anpassar oss efter era upphandlingsrutiner. Kontakta oss för offert som kan ligga till grund för direktupphandling eller avrop.',
  },
  {
    question: 'Kan rapporten användas som underlag i budgetprocessen?',
    answer:
      'Ja, våra rapporter innehåller prioriterade åtgärdsförslag som kan ligga till grund för budgetäskanden och underhållsplanering. Vi kategoriserar skador efter allvarlighetsgrad för att underlätta prioritering.',
  },
  {
    question: 'Inspekterar ni även broar och annan infrastruktur?',
    answer:
      'Vi inspekterar byggnadsverk och konstruktioner med drönare. Kontakta oss för att diskutera ert specifika objekt och vilken typ av dokumentation ni behöver.',
  },
  {
    question: 'Hur snabbt kan ni inspektera ett större fastighetsbestånd?',
    answer:
      'Vi planerar inspektioner effektivt genom att kombinera flera objekt i samma mobilisering. Kontakta oss med en lista över fastigheter så ger vi er en tidsuppskattning och offert.',
  },
  {
    question: 'Är era piloter certifierade för flygning i tätort?',
    answer:
      'Ja, våra piloter är EASA-certifierade fjärrpiloter med behörighet att flyga i tätbebyggda områden. Vi genomför alltid riskbedömning och säkerställer att flygningen uppfyller alla myndighetskrav.',
  },
  {
    question: 'Kan vi använda data för energideklarationer?',
    answer:
      'Termisk inspektion ger värdefull information om köldbryggor och energiförluster som kan komplettera en energideklaration. Kontakta oss för att diskutera hur vi kan stödja ert energiarbete.',
  },
]

export default function KommunerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Drönarinspektion för kommuner och offentlig förvaltning',
              description:
                'Professionell drönarinspektion av kommunala fastigheter, skolor och infrastruktur. Termisk kamera och detaljerad rapportering.',
              url: '/branscher/kommuner',
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
          { name: 'Kommuner', url: '/branscher/kommuner' },
        ]}
      />

      <Hero
        headline="Drönarinspektion för kommuner"
        subheadline="Få kontroll över skicket på era kommunala fastigheter och anläggningar. Med termisk kamera och drönarteknik kartlägger vi underhållsbehov på skolor, idrottshallar och offentliga byggnader — effektivt och utan störning i verksamheten."
        ctaPrimary={{ label: 'Begär offert', href: '/kontakt' }}
        ctaSecondary={{ label: 'Våra tjänster', href: '/inspektioner-med-dronare' }}
        stats={[
          { value: '0', label: 'Störning i verksamheten' },
          { value: '0', label: 'Arbete på höjd' },
          { value: 'Hela', label: 'Sverige' },
          { value: 'EASA', label: 'Certifierade piloter' },
        ]}
      />

      <TrustBar
        items={[
          'EASA-certifierade fjärrpiloter',
          'Ansvarsförsäkrade',
          'Termisk kamera & RGB',
          'Erfarenhet av offentlig sektor',
        ]}
      />

      {/* Use cases section */}
      <section className="section-padding">
        <div className="container-content">
          <h2 className="text-heading-lg sm:text-display text-center">
            Så hjälper vi kommuner och offentlig förvaltning
          </h2>
          <p className="mt-4 text-body-lg text-dark-500 text-center max-w-2xl mx-auto">
            Kommunala fastighetsavdelningar ansvarar ofta för stora bestånd med begränsade resurser.
            Drönarinspektion ger er ett kostnadseffektivt sätt att kartlägga underhållsbehov.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="card">
              <h3 className="text-heading-sm">Skolor och förskolor</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Inspektion av tak och fasader på skolfastigheter. Termisk kamera identifierar
                fuktskador och köldbryggor som påverkar inomhusklimatet. Genomförs utan att
                störa undervisningen.
              </p>
              <Link href="/inspektioner-med-dronare/takinspektion" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Läs mer om takinspektion &rarr;
              </Link>
            </div>
            <div className="card">
              <h3 className="text-heading-sm">Idrottsanläggningar</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Tak på sporthallar, simhallar och arenor är ofta stora och svårinspekterade.
                Med drönare kartlägger vi skicket snabbt och säkert.
              </p>
              <Link href="/inspektioner-med-dronare/fasadinspektion" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Läs mer om fasadinspektion &rarr;
              </Link>
            </div>
            <div className="card">
              <h3 className="text-heading-sm">Energikartläggning</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Termisk inspektion identifierar köldbryggor och energiförluster i kommunala
                byggnader. Resultatet kan användas som underlag i energibesparingsarbetet.
              </p>
              <Link href="/inspektioner-med-dronare/solcellsinspektion" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Läs mer om solcellsinspektion &rarr;
              </Link>
            </div>
            <div className="card">
              <h3 className="text-heading-sm">Beståndskartläggning</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Systematisk inspektion av hela det kommunala fastighetsbeståndet. Vi levererar
                jämförbara rapporter som ger underlag för prioritering av åtgärder och budget.
              </p>
              <Link href="/kontakt" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Kontakta oss för upplägg &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Fördelar för kommuner"
        subtitle="Drönarinspektion hjälper er att använda underhållsbudgeten rätt."
        benefits={[
          {
            title: 'Kostnadseffektiv kartläggning',
            description:
              'Inspektera stora fastighetsbestånd utan ställningar eller skylift. Fler fastigheter per budget.',
            icon: 'chart',
          },
          {
            title: 'Ingen verksamhetsstörning',
            description:
              'Inspektionen genomförs utan att påverka skolor, förskolor eller andra verksamheter i byggnaden.',
            icon: 'building',
          },
          {
            title: 'Bättre beslutsunderlag',
            description:
              'Detaljerade rapporter med prioriterade åtgärdsförslag som kan användas direkt i budgetprocessen.',
            icon: 'file',
          },
          {
            title: 'Säker inspektion',
            description:
              'Ingen personal behöver arbeta på höga höjder. EASA-certifierade piloter och ansvarsförsäkrad verksamhet.',
            icon: 'shield',
          },
          {
            title: 'Termisk energianalys',
            description:
              'Identifiera köldbryggor och energiförluster som underlag för kommunens energibesparingsarbete.',
            icon: 'camera',
          },
          {
            title: 'Snabb leverans',
            description:
              'Rapport med bilder och åtgärdsförslag levereras normalt inom ett par arbetsdagar efter inspektion.',
            icon: 'clock',
          },
        ]}
        variant="dark"
      />

      <FaqAccordion
        headline="Vanliga frågor från kommuner"
        items={faqItems}
      />

      <CtaBand
        headline="Behöver ni inspektera kommunala fastigheter?"
        description="Kontakta oss för en kostnadsfri offert. Vi hjälper er att kartlägga underhållsbehov i hela ert bestånd."
        ctaLabel="Begär offert"
        ctaHref="/kontakt"
      />
    </>
  )
}
