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
  title: 'Drone Inspection Stockholm | Roof & Facade | SurveyDrone',
  description:
    'Professional drone inspection in Stockholm with thermal camera. Roofs, facades and solar panels in Södermalm, Kungsholmen, Solna and the entire Stockholm region.',
  path: '/en/locations/inspection-stockholm',
  locale: 'en',
  alternateLocalePath: '/platser/inspektion-stockholm',
})

const localBusinessSchema = localBusinessSchemaEn({
  name: 'SurveyDrone - Stockholm',
  description:
    'Professional drone inspection in the Stockholm region. Roofs, facades, solar panels and industrial facilities with thermal camera. EASA-certified remote pilots.',
  url: '/en/locations/inspection-stockholm',
  city: 'Stockholm',
  latitude: 59.3293,
  longitude: 18.0686,
})

const faqItems = [
  {
    question: 'Where in the Stockholm region do you perform drone inspections?',
    answer:
      'We perform drone inspections throughout the entire Stockholm region — including Södermalm, Kungsholmen, Östermalm, Solna, Nacka, Huddinge, Täby and Lidingö. We cover both the inner city and surrounding municipalities.',
  },
  {
    question: 'Can you inspect apartment buildings in central Stockholm?',
    answer:
      'Yes, we inspect apartment buildings, housing cooperative properties and office buildings in the inner city. We handle all necessary permits for drone operations in densely built areas and adapt the flight to local conditions.',
  },
  {
    question: 'How quickly can you be on site in Stockholm?',
    answer:
      'Thanks to our local presence in the Stockholm region, we can often carry out inspections at short notice. Contact us to discuss scheduling and availability.',
  },
  {
    question: 'What property types do you inspect in Stockholm?',
    answer:
      'We inspect all types of properties — from turn-of-the-century buildings in Östermalm and apartment blocks in Södermalm to industrial buildings in Solna and warehouse properties in Huddinge. We adapt the inspection to the property type and age.',
  },
  {
    question: 'Do you offer ongoing inspection contracts for property companies in Stockholm?',
    answer:
      'Yes, we offer ongoing contracts for property managers who need regular inspections of their portfolio. Contact us to discuss an arrangement that suits your needs.',
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
          { name: 'Home', url: '/en' },
          { name: 'Stockholm', url: '' },
        ]}
      />

      <Hero
        headline="Drone Inspection in Stockholm — Roofs, Facades & Solar Panels"
        subheadline="Stockholm's building stock ranges from turn-of-the-century buildings in Östermalm to modern office complexes in Solna. SurveyDrone inspects roofs, facades and solar panel installations with thermal camera throughout the Stockholm region — from Södermalm and Kungsholmen to Nacka, Huddinge and Täby."
        ctaPrimary={{ label: 'Request a quote — Stockholm', href: '/en/contact' }}
        ctaSecondary={{ label: 'Our services', href: '/en/services/roof-inspection' }}
      />

      <TrustBar
        items={[
          'EASA-certified remote pilots',
          'Insured',
          'Entire Stockholm region',
          'Thermal camera & RGB',
        ]}
      />

      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-heading-lg sm:text-display">
              Drone inspection tailored for Stockholm properties
            </h2>
            <div className="mt-6 space-y-4 text-body-lg text-dark-600">
              <p>
                Stockholm has a unique building stock ranging from culturally significant buildings in Gamla Stan
                to functionalist housing in the outer city and modern office properties in Kista and
                Solna Business Park. Regardless of property type, drone inspection offers an efficient method for
                identifying damage, moisture and maintenance needs.
              </p>
              <p>
                In districts like Södermalm and Kungsholmen, there are many older apartment buildings where roofs and
                facades require regular monitoring. In Lidingö and Täby, detached houses and terraced housing
                benefit from thermal inspection to detect cold bridges and moisture damage.
                Industrial areas in Huddinge and Nacka have warehouse properties and production facilities where
                drone inspection reduces the need for scaffolding and work at height.
              </p>
              <p>
                We offer{' '}
                <Link href="/en/services/roof-inspection" className="text-brand-600 underline hover:text-brand-700">
                  roof inspection
                </Link>
                ,{' '}
                <Link href="/en/services/facade-inspection" className="text-brand-600 underline hover:text-brand-700">
                  facade inspection
                </Link>
                ,{' '}
                <Link href="/en/services/solar-panel-inspection" className="text-brand-600 underline hover:text-brand-700">
                  solar panel inspection
                </Link>
                {' '}and{' '}
                <Link href="/en/services/industrial-inspection" className="text-brand-600 underline hover:text-brand-700">
                  industrial inspection
                </Link>
                {' '}throughout the Stockholm region.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Benefits of drone inspection in Stockholm"
        subtitle="Adapted for the Stockholm region's building stock and conditions."
        benefits={[
          {
            title: 'Inspect without scaffolding',
            description:
              'In densely built areas like Södermalm and Vasastan, drone inspection eliminates the need for scaffolding in tight courtyards.',
            icon: 'building',
          },
          {
            title: 'Thermal camera for older properties',
            description:
              'Stockholm\'s many turn-of-the-century and functionalist buildings benefit from thermal analysis to reveal hidden moisture damage and cold bridges.',
            icon: 'camera',
          },
          {
            title: 'Fast execution',
            description:
              'Inspect multiple properties in your Stockholm portfolio in a single day — ideal for property managers with a dispersed portfolio.',
            icon: 'clock',
          },
          {
            title: 'Safer inspection',
            description:
              'No personnel need to work at height. Particularly valuable for tall office buildings and apartment blocks.',
            icon: 'shield',
          },
          {
            title: 'Detailed report',
            description:
              'You receive thermal images, RGB photographs and a report with recommended actions — ready to use as a decision-making basis.',
            icon: 'file',
          },
          {
            title: 'Lower inspection cost',
            description:
              'Drones replace expensive cherry pickers and scaffolding, resulting in a significantly lower total cost per inspection.',
            icon: 'chart',
          },
        ]}
        variant="dark"
      />

      <FaqAccordion
        headline="FAQ — Drone Inspection Stockholm"
        items={faqItems}
      />

      <CtaBand
        headline="Need drone inspection in Stockholm?"
        description="Contact us for a free quote. We inspect roofs, facades, solar panels and industrial facilities throughout the Stockholm region."
        ctaLabel="Request a quote"
        ctaHref="/en/contact"
      />
    </>
  )
}
