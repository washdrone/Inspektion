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
  title: 'Drone Inspection Örebro | Roof & Facade | SurveyDrone',
  description:
    'Drone inspection in Örebro with thermal camera. Roofs, facades and solar panels in Brickebacken, Marieberg, Baronbackarna and the entire Örebro region.',
  path: '/en/locations/inspection-orebro',
  locale: 'en',
  alternateLocalePath: '/platser/inspektion-orebro',
})

const localBusinessSchema = localBusinessSchemaEn({
  name: 'SurveyDrone - Örebro',
  description:
    'Professional drone inspection in the Örebro region. Roofs, facades, solar panels and industrial facilities with thermal camera. EASA-certified remote pilots.',
  url: '/en/locations/inspection-orebro',
  city: 'Örebro',
  latitude: 59.2753,
  longitude: 15.2134,
})

const faqItems = [
  {
    question: 'Which districts in Örebro do you cover?',
    answer:
      'We perform drone inspections throughout all of Örebro — including Brickebacken, Marieberg, Baronbackarna and central Örebro. We also cover surrounding municipalities in the Örebro region.',
  },
  {
    question: 'Do you inspect Million Programme buildings in Brickebacken?',
    answer:
      'Yes, Brickebacken\'s apartment buildings from the Million Programme era are properties that particularly benefit from thermal inspection. We identify cold bridges, moisture damage and maintenance needs in roofs and facades.',
  },
  {
    question: 'Can you inspect the Marieberg retail area?',
    answer:
      'Absolutely. Marieberg\'s retail area has large commercial properties with flat roofs that are efficiently inspected with drones and thermal camera.',
  },
  {
    question: 'Do you offer drone inspection of logistics properties?',
    answer:
      'Yes, Örebro\'s central location in Sweden makes the city a logistics hub. We inspect warehouse properties and logistics centres with drones — large roofs are covered quickly without operational disruption.',
  },
  {
    question: 'How do I contact SurveyDrone for an assignment in Örebro?',
    answer:
      'Contact us via the contact form or send an email to info@surveydrone.se. We will respond with a quote tailored to your needs.',
  },
]

export default function OrebroPage() {
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
          { name: 'Örebro', url: '' },
        ]}
      />

      <Hero
        headline="Drone Inspection Örebro — Logistics, Residential & Retail"
        subheadline="Örebro is Sweden&apos;s logistics hub with large warehouse properties, active retail areas in Marieberg and a housing stock stretching from Brickebacken to Baronbackarna. SurveyDrone inspects roofs, facades and solar panels with thermal camera throughout the Örebro region."
        ctaPrimary={{ label: 'Request a quote — Örebro', href: '/en/contact' }}
        ctaSecondary={{ label: 'Our services', href: '/en/services/roof-inspection' }}
      />

      <TrustBar
        items={[
          'EASA-certified remote pilots',
          'Insured',
          'Entire Örebro region',
          'Thermal camera & RGB',
        ]}
      />

      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-heading-lg sm:text-display">
              Drone inspection for Örebro&apos;s logistics and residential properties
            </h2>
            <div className="mt-6 space-y-4 text-body-lg text-dark-600">
              <p>
                Örebro&apos;s central location in Sweden has made the city a hub for logistics and distribution.
                Large warehouse properties and logistics centres characterise the city&apos;s industrial areas. These buildings
                often have extensive roof surfaces that need regular inspection — an assignment perfectly suited
                for drone technology.
              </p>
              <p>
                Marieberg&apos;s retail area brings together shops and commercial properties with flat roofs where
                drone inspection replaces time-consuming manual methods. In residential areas like
                Brickebacken and Baronbackarna, there are apartment buildings from the Million Programme era where thermal
                camera reveals cold bridges and moisture problems requiring action. Central Örebro has
                older buildings where facade inspections with drones avoid the need for scaffolding.
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
                {' '}throughout the Örebro region.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Benefits of drone inspection in Örebro"
        subtitle="Adapted for Örebro&apos;s logistics and residential properties."
        benefits={[
          {
            title: 'Large roof areas efficiently',
            description:
              'Örebro\'s warehouse properties and logistics centres have extensive roofs. Drones inspect them quickly without disrupting logistics operations.',
            icon: 'building',
          },
          {
            title: 'Million Programme properties',
            description:
              'Brickebacken\'s and Baronbackarna\'s apartment buildings are inspected with thermal camera to identify renovation needs.',
            icon: 'camera',
          },
          {
            title: 'Fast execution',
            description:
              'An inspection that previously took days with scaffolding is completed in hours with drones.',
            icon: 'clock',
          },
          {
            title: 'No work at height',
            description:
              'Personnel never need to work at height. EASA-certified pilots handle the entire flight.',
            icon: 'shield',
          },
          {
            title: 'Maintenance planning',
            description:
              'The report provides a clear decision-making basis for prioritising maintenance and renovations.',
            icon: 'file',
          },
          {
            title: 'Retail areas',
            description:
              'Marieberg\'s and other retail areas\' commercial properties are inspected without affecting customer flow.',
            icon: 'chart',
          },
        ]}
        variant="dark"
      />

      <FaqAccordion
        headline="FAQ — Drone Inspection Örebro"
        items={faqItems}
      />

      <CtaBand
        headline="Need drone inspection in Örebro?"
        description="Contact us for a free quote. We inspect roofs, facades and solar panels throughout the Örebro region."
        ctaLabel="Request a quote"
        ctaHref="/en/contact"
      />
    </>
  )
}
