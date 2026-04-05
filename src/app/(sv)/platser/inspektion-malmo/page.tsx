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
  title: 'Drönarinspektion Malmö | Tak & Fasad | SurveyDrone',
  description:
    'Drönarinspektion i Malmö med termisk kamera. Tak, fasader och solceller i Västra hamnen, Hyllie, Limhamn och hela Malmöregionen. Begär offert idag.',
  path: '/platser/inspektion-malmo',
})

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'SurveyDrone - Malmö',
  description:
    'Professionell drönarinspektion i Malmöregionen. Tak, fasader, solceller och industri med termisk kamera. EASA-certifierade fjärrpiloter.',
  url: 'https://www.surveydrone.se/platser/inspektion-malmo',
  email: 'info@surveydrone.se',
  areaServed: {
    '@type': 'City',
    name: 'Malmö',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 55.605,
      longitude: 13.0038,
    },
  },
  parentOrganization: {
    '@type': 'ProfessionalService',
    '@id': 'https://www.surveydrone.se/#organization',
  },
}

const faqItems = [
  {
    question: 'Vilka områden i Malmö och Skåne täcker ni?',
    answer:
      'Vi utför drönarinspektioner i hela Malmöregionen — inklusive Västra hamnen, Hyllie, Limhamn, Kirseberg och centrala Malmö. Vi täcker även närliggande Lund och övriga västra Skåne.',
  },
  {
    question: 'Kan ni inspektera nybyggnationer i Hyllie och Västra hamnen?',
    answer:
      'Ja, vi utför både byggplatsdokumentation och slutbesiktning av nyproduktion. Hyllie och Västra hamnen är områden med intensiv nybyggnation där drönarinspektion ger effektiv kvalitetskontroll.',
  },
  {
    question: 'Inspekterar ni solcellsanläggningar i Malmöregionen?',
    answer:
      'Absolut. Skåne har goda solförhållanden och allt fler fastigheter installerar solceller. Vi inspekterar solcellsanläggningar med termisk kamera för att identifiera hotspots och defekta paneler.',
  },
  {
    question: 'Hur fungerar drönarinspektion i Malmös vindförhållanden?',
    answer:
      'Malmös kustnära läge innebär att det kan blåsa. Vi övervakar väderförhållandena noga och planerar flygningarna för bästa resultat. Vid behov anpassar vi tidpunkten.',
  },
  {
    question: 'Kan ni inspektera industrifastigheter i Malmö?',
    answer:
      'Ja, vi inspekterar industrifastigheter, lagerlokaler och kommersiella byggnader i hela Malmöregionen. Drönarinspektion är särskilt effektivt för stora tak och svåråtkomliga fasader.',
  },
]

export default function MalmoPage() {
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
          { name: 'Malmö', url: '/platser/inspektion-malmo' },
        ]}
      />

      <Hero
        headline="Drönarinspektion Malmö — Nybyggt & Kulturhistoriskt"
        subheadline="Malmö växer snabbt med nya stadsdelar som Hyllie och Västra hamnen, samtidigt som stadens äldre bestånd i Limhamn och Kirseberg behöver regelbundet underhåll. SurveyDrone inspekterar tak, fasader och solceller med termisk kamera i hela Malmöregionen — inklusive Lund."
        ctaPrimary={{ label: 'Begär offert — Malmö', href: '/kontakt' }}
        ctaSecondary={{ label: 'Våra tjänster', href: '/tjanster/takinspektion' }}
      />

      <TrustBar
        items={[
          'EASA-certifierade fjärrpiloter',
          'Ansvarsförsäkrade',
          'Malmö & västra Skåne',
          'Termisk kamera & RGB',
        ]}
      />

      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-heading-lg sm:text-display">
              Drönarinspektion för Malmös varierade fastighetsbestånd
            </h2>
            <div className="mt-6 space-y-4 text-body-lg text-dark-600">
              <p>
                Malmö kombinerar snabb stadsutveckling med ett rikt kulturhistoriskt arv. I Västra hamnen
                och Hyllie växer moderna bostads- och kontorskvarter fram, medan Limhamn och Kirseberg
                har ett äldre fastighetsbestånd med tegelhus och villor som kräver regelbunden tillsyn.
              </p>
              <p>
                Skånes milda klimat och goda solförhållanden har gjort regionen till ett nav för
                solcellsinstallationer. Termisk drönarinspektion är den mest effektiva metoden för att
                övervaka solcellsanläggningars prestanda och identifiera defekta paneler i tid.
                I centrala Malmö finns flerbostadshus och kommersiella fastigheter där drönarinspektion
                ersätter dyr ställningsbyggnad på trånga gator.
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
                <Link href="/tjanster/3d-kartlaggning" className="link-inline">
                  byggplatsdokumentation
                </Link>
                {' '}i Malmö, Lund och hela västra Skåne.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Fördelar med drönarinspektion i Malmö"
        subtitle="Anpassat för Malmöregionens snabba tillväxt och fastighetsbestånd."
        benefits={[
          {
            title: 'Nybyggnationskontroll',
            description:
              'I expansiva områden som Hyllie och Västra hamnen erbjuder vi byggplatsdokumentation och kvalitetskontroll av nyproduktion.',
            icon: 'building',
          },
          {
            title: 'Solcellsinspektion',
            description:
              'Skånes solförhållanden gör regionen idealisk för solceller. Vi hittar hotspots och defekta paneler med termisk kamera.',
            icon: 'camera',
          },
          {
            title: 'Effektiv inspektion av äldre bestånd',
            description:
              'Limhamns och Kirsebergs äldre fastigheter inspekteras snabbt och utan ställningar — termisk kamera avslöjar dolda fuktskador.',
            icon: 'clock',
          },
          {
            title: 'Ingen risk vid höjdarbete',
            description:
              'Drönaren ersätter manuell inspektion på höjd. Säkrare för alla inblandade.',
            icon: 'shield',
          },
          {
            title: 'Rapport med beslutsunderlag',
            description:
              'Komplett rapport med termiska bilder, visuell dokumentation och rekommenderade åtgärder.',
            icon: 'file',
          },
          {
            title: 'Täcker Malmö och Lund',
            description:
              'Vi inspekterar fastigheter i hela Malmöregionen inklusive Lund, Staffanstorp och övriga västra Skåne.',
            icon: 'chart',
          },
        ]}
        variant="dark"
      />

      <FaqAccordion
        headline="Vanliga frågor — Drönarinspektion Malmö"
        items={faqItems}
      />

      <CtaBand
        headline="Behöver ni drönarinspektion i Malmö?"
        description="Kontakta oss för en kostnadsfri offert. Vi inspekterar tak, fasader, solceller och nybyggnationer i hela Malmöregionen."
        ctaLabel="Begär offert"
        ctaHref="/kontakt"
      />
    </>
  )
}
