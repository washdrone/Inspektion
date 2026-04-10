import type { Metadata } from 'next'
import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { faqSchema } from '@/lib/schema'
import { localBusinessSchemaEn } from '@/lib/schema-en'
import { Hero } from '@/components/Hero'
import { TrustBar } from '@/components/TrustBar'
import { BenefitsGrid } from '@/components/BenefitsGrid'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = createMetadata({
  title: 'Drone Inspection Norrköping | Roof & Facade | SurveyDrone',
  description:
    'Drone inspection in Norrköping with thermal camera. Roofs, facades and solar panels in Industrilandskapet, Ingelsta, Hageby and Linköping. Get a quote.',
  path: '/en/locations/inspection-norrkoping',
  locale: 'en',
  alternateLocalePath: '/platser/inspektion-norrkoping',
})

const localBusinessSchema = localBusinessSchemaEn({
  name: 'SurveyDrone - Norrköping',
  description:
    'Professional drone inspection in Norrköping and Östergötland. Roofs, facades, solar panels and industrial facilities with thermal camera. EASA-certified remote pilots.',
  url: '/en/locations/inspection-norrkoping',
  city: 'Norrköping',
  latitude: 58.5942,
  longitude: 16.1826,
})

const faqItems = [
  {
    question: 'Which areas in Norrköping do you cover?',
    answer:
      'We carry out drone inspections across all of Norrköping — including Industrilandskapet, Ingelsta, Hageby and central Norrköping. We also cover Linköping and the rest of Östergötland.',
  },
  {
    question: 'Can you inspect the historic industrial properties in Industrilandskapet?',
    answer:
      'Yes, Norrköping\'s Industrilandskapet with its culturally significant brick buildings are properties that benefit greatly from drone inspection. Thermal cameras reveal moisture and damage without any intervention to the sensitive facades.',
  },
  {
    question: 'Do you inspect commercial properties in Ingelsta?',
    answer:
      'Absolutely. Ingelsta retail area has large commercial properties with flat roofs that are efficiently inspected by drone. We cover the entire retail district.',
  },
  {
    question: 'Can you inspect the million programme area Hageby?',
    answer:
      'Yes, Hageby\'s apartment buildings from the million programme era often have renovation needs. Thermal inspection identifies cold bridges and moisture damage as a basis for maintenance planning.',
  },
  {
    question: 'Do you cover both Norrköping and Linköping?',
    answer:
      'Yes, we carry out inspections in both cities and can often combine assignments. Contact us to discuss your needs.',
  },
]

export default function NorrkopingPage() {
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
          { name: 'Home', url: '/en' },
          { name: 'Norrköping', url: '' },
        ]}
      />

      <Hero
        headline="Drone Inspection Norrköping — Industrial Heritage & Modern Commerce"
        subheadline="Norrköping combines a unique industrial heritage with modern retail and residential areas. SurveyDrone inspects roofs, facades and solar panels with thermal cameras — from the historic brick buildings of Industrilandskapet to the Ingelsta retail area and the residential district of Hageby."
        ctaPrimary={{ label: 'Get a quote — Norrköping', href: '/en/contact' }}
        ctaSecondary={{ label: 'Our services', href: '/en/services/roof-inspection' }}
      />

      <TrustBar
        items={[
          'EASA-certified remote pilots',
          'Insured',
          'Norrköping & Linköping',
          'Thermal camera & RGB',
        ]}
      />

      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-heading-lg sm:text-display">
              Drone inspection for Norrköping&apos;s unique property portfolio
            </h2>
            <div className="mt-6 space-y-4 text-body-lg text-dark-600">
              <p>
                Norrköping&apos;s identity is shaped by the well-preserved Industrilandskapet — an area of
                historic brick buildings that today houses offices, cultural venues and educational
                institutions. These culturally valuable properties require careful inspection, and drone
                technology with thermal cameras offers a non-destructive method for identifying moisture,
                cold bridges and damage.
              </p>
              <p>
                Ingelsta is Norrköping&apos;s largest retail area with large commercial buildings whose flat
                roofs are efficiently inspected by drone. In the residential area of Hageby, there are
                million programme buildings where roofs and facades often face renovation — thermal
                inspection gives property owners the data they need to prioritise actions. The proximity
                to Linköping means we frequently combine assignments in both cities.
              </p>
              <p>
                We offer{' '}
                <Link href="/en/services/roof-inspection" className="link-inline">
                  roof inspection
                </Link>
                ,{' '}
                <Link href="/en/services/facade-inspection" className="link-inline">
                  facade inspection
                </Link>
                ,{' '}
                <Link href="/en/services/solar-panel-inspection" className="link-inline">
                  solar panel inspection
                </Link>
                {' '}and{' '}
                <Link href="/en/services/industrial-inspection" className="link-inline">
                  industrial inspection
                </Link>
                {' '}in Norrköping, Linköping and throughout Östergötland.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Benefits of drone inspection in Norrköping"
        subtitle="Tailored for Norrköping's industrial heritage and modern property portfolio."
        benefits={[
          {
            title: 'Careful heritage inspection',
            description:
              'The historic brick buildings of Industrilandskapet are inspected by drone without physical contact — preserving their cultural-historical value.',
            icon: 'building',
          },
          {
            title: 'Thermal analysis of brick facades',
            description:
              'Norrköping\'s older brick properties benefit from thermal cameras that reveal moisture and cold bridges without intervention.',
            icon: 'camera',
          },
          {
            title: 'Efficient retail inspection',
            description:
              'The large roof surfaces of the Ingelsta retail area are inspected quickly by drone — without affecting store operations.',
            icon: 'clock',
          },
          {
            title: 'Safe method',
            description:
              'EASA-certified pilots carry out the flight. No personnel need to work at height or in hazardous environments.',
            icon: 'shield',
          },
          {
            title: 'Renovation decision support',
            description:
              'Hageby\'s million programme housing stock receives detailed decision support for renovation through thermal inspection.',
            icon: 'file',
          },
          {
            title: 'All of Östergötland',
            description:
              'We combine assignments in Norrköping and Linköping for efficient inspection across all of Östergötland.',
            icon: 'chart',
          },
        ]}
        variant="dark"
      />

      <FaqAccordion
        headline="Frequently asked questions — Drone inspection Norrköping"
        items={faqItems}
      />

      <CtaBand
        headline="Need drone inspection in Norrköping?"
        description="Contact us for a free quote. We inspect roofs, facades and solar panels in Norrköping, Linköping and throughout Östergötland."
        ctaLabel="Get a quote"
        ctaHref="/en/contact"
      />
    </>
  )
}
