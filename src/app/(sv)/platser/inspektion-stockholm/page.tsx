import type { Metadata } from 'next'
import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { faqSchema } from '@/lib/schema'
import { Hero } from '@/components/Hero'
import { TrustBar } from '@/components/TrustBar'
import { BenefitsGrid } from '@/components/BenefitsGrid'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = createMetadata({
  title: 'Drönarinspektion Stockholm | Tak & Fasad | SurveyDrone',
  description:
    'Professionell drönarinspektion i Stockholm med termisk kamera. Tak, fasader och solceller i Södermalm, Kungsholmen, Solna och hela Stockholmsregionen.',
  path: '/platser/inspektion-stockholm',
})

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'SurveyDrone - Stockholm',
  description:
    'Professionell drönarinspektion i Stockholmsregionen. Tak, fasader, solceller och industri med termisk kamera. EASA-certifierade fjärrpiloter.',
  url: 'https://www.surveydrone.se/platser/inspektion-stockholm',
  email: 'info@surveydrone.se',
  areaServed: {
    '@type': 'City',
    name: 'Stockholm',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 59.3293,
      longitude: 18.0686,
    },
  },
  parentOrganization: {
    '@type': 'ProfessionalService',
    '@id': 'https://www.surveydrone.se/#organization',
  },
}

const faqItems = [
  {
    question: 'Var i Stockholmsregionen utför ni drönarinspektioner?',
    answer:
      'Vi utför drönarinspektioner i hela Stockholmsregionen — inklusive Södermalm, Kungsholmen, Östermalm, Solna, Nacka, Huddinge, Täby och Lidingö. Vi täcker både innerstaden och kranskommunerna.',
  },
  {
    question: 'Kan ni inspektera flerbostadshus i Stockholms innerstad?',
    answer:
      'Ja, vi inspekterar flerbostadshus, BRF-fastigheter och kontorsbyggnader i innerstaden. Vi hanterar alla nödvändiga tillstånd för drönardrift i tätbebyggt område och anpassar flygningen efter lokala förutsättningar.',
  },
  {
    question: 'Hur snabbt kan ni vara på plats i Stockholm?',
    answer:
      'Tack vare vår lokala närvaro i Stockholmsregionen kan vi ofta genomföra inspektioner med kort framförhållning. Kontakta oss för att diskutera tidplan och tillgänglighet.',
  },
  {
    question: 'Vilka fastighetstyper inspekterar ni i Stockholm?',
    answer:
      'Vi inspekterar alla typer av fastigheter — från sekelskifteshus på Östermalm och flerbostadshus på Södermalm till industribyggnader i Solna och lagerfastigheter i Huddinge. Vi anpassar inspektionen efter fastighetens typ och ålder.',
  },
  {
    question: 'Erbjuder ni löpande inspektionsavtal för fastighetsbolag i Stockholm?',
    answer:
      'Ja, vi erbjuder löpande avtal för fastighetsförvaltare som behöver regelbundna inspektioner av sitt bestånd. Kontakta oss för att diskutera ett upplägg som passar ert behov.',
  },
]

export default function StockholmPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqItems)) }}
      />

      <Breadcrumbs
        items={[
          { name: 'Hem', url: '/' },
          { name: 'Stockholm', url: '/platser/inspektion-stockholm' },
        ]}
      />

      <Hero
        headline="Drönarinspektion i Stockholm — Tak, Fasader & Solceller"
        subheadline="Stockholms fastighetsbestånd spänner från sekelskifteshus på Östermalm till moderna kontorskomplex i Solna. SurveyDrone inspekterar tak, fasader och solcellsanläggningar med termisk kamera i hela Stockholmsregionen — från Södermalm och Kungsholmen till Nacka, Huddinge och Täby."
        ctaPrimary={{ label: 'Begär offert — Stockholm', href: '/kontakt' }}
        ctaSecondary={{ label: 'Våra tjänster', href: '/tjanster/takinspektion' }}
      />

      <TrustBar
        items={[
          'EASA-certifierade fjärrpiloter',
          'Ansvarsförsäkrade',
          'Hela Stockholmsregionen',
          'Termisk kamera & RGB',
        ]}
      />

      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-heading-lg sm:text-display">
              Drönarinspektion anpassad för Stockholms fastigheter
            </h2>
            <div className="mt-6 space-y-4 text-body-lg text-dark-600">
              <p>
                Stockholm har ett unikt fastighetsbestånd med allt från kulturhistoriska byggnader i Gamla Stan
                till funktionalistiska bostadshus i ytterstaden och moderna kontorsfastigheter i Kista och
                Solna Business Park. Oavsett fastighetstyp erbjuder drönarinspektion en effektiv metod för att
                identifiera skador, fukt och underhållsbehov.
              </p>
              <p>
                I stadsdelar som Södermalm och Kungsholmen finns många äldre flerbostadshus där taken och
                fasaderna kräver regelbunden tillsyn. På Lidingö och i Täby dominerar villabebyggelse och
                radhus som också drar nytta av termisk inspektion för att hitta köldbryggor och fuktskador.
                Industriområdena i Huddinge och Nacka har lagerfastigheter och produktionsanläggningar där
                drönarinspektion minskar behovet av ställningar och arbete på höjd.
              </p>
              <p>
                Vi erbjuder{' '}
                <Link href="/tjanster/takinspektion" className="link-inline">
                  takinspektion
                </Link>
                ,{' '}
                <Link href="/tjanster/fasadinspektion" className="link-inline">
                  fasadinspektion
                </Link>
                ,{' '}
                <Link href="/tjanster/solcellsinspektion" className="link-inline">
                  solcellsinspektion
                </Link>
                {' '}och{' '}
                <Link href="/tjanster/industriinspektion" className="link-inline">
                  industriell inspektion
                </Link>
                {' '}i hela Stockholmsregionen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Fördelar med drönarinspektion i Stockholm"
        subtitle="Anpassat för Stockholmsregionens fastighetsbestånd och förutsättningar."
        benefits={[
          {
            title: 'Inspektera utan ställningar',
            description:
              'I tätbebyggda områden som Södermalm och Vasastan eliminerar drönarinspektion behovet av byggnadsställningar på trånga innergårdar.',
            icon: 'building',
          },
          {
            title: 'Termisk kamera för äldre fastigheter',
            description:
              'Stockholms många sekelskifteshus och funktionalistiska byggnader drar nytta av termisk analys för att avslöja dolda fuktskador och köldbryggor.',
            icon: 'camera',
          },
          {
            title: 'Snabbt genomförande',
            description:
              'Inspektera flera fastigheter i ert Stockholmsbestånd under samma dag — idealiskt för fastighetsförvaltare med spritt bestånd.',
            icon: 'clock',
          },
          {
            title: 'Säkrare inspektion',
            description:
              'Ingen personal behöver arbeta på höjd. Särskilt värdefullt vid höga kontorsfastigheter och flerbostadshus.',
            icon: 'shield',
          },
          {
            title: 'Detaljerad rapport',
            description:
              'Ni får termiska bilder, RGB-fotografier och en rapport med åtgärdsförslag — redo att användas som beslutsunderlag.',
            icon: 'file',
          },
          {
            title: 'Lägre inspektionskostnad',
            description:
              'Drönare ersätter dyr skylift och ställningar, vilket ger en betydligt lägre totalkostnad per inspektion.',
            icon: 'chart',
          },
        ]}
        variant="dark"
      />

      <FaqAccordion
        headline="Vanliga frågor — Drönarinspektion Stockholm"
        items={faqItems}
      />

      <CtaBand
        headline="Behöver ni drönarinspektion i Stockholm?"
        description="Kontakta oss för en kostnadsfri offert. Vi inspekterar tak, fasader, solceller och industrianläggningar i hela Stockholmsregionen."
        ctaLabel="Begär offert"
        ctaHref="/kontakt"
      />
    </>
  )
}
