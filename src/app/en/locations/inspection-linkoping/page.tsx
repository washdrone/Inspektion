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
  title: 'Drone Inspection Linköping | Roof & Facade | SurveyDrone',
  description:
    'Drone inspection in Linköping with thermal camera. Roofs, facades and solar panels in Mjärdevi, Tornby, Ryd and Norrköping. EASA-certified pilots.',
  path: '/en/locations/inspection-linkoping',
  locale: 'en',
  alternateLocalePath: '/platser/inspektion-linkoping',
})

const localBusinessSchema = localBusinessSchemaEn({
  name: 'SurveyDrone - Linköping',
  description:
    'Professional drone inspection in Linköping and Norrköping. Roofs, facades, solar panels and industrial facilities with thermal camera. EASA-certified remote pilots.',
  url: '/en/locations/inspection-linkoping',
  city: 'Linköping',
  latitude: 58.4108,
  longitude: 15.6214,
})

const faqItems = [
  {
    question: 'Do you cover both Linköping and Norrköping?',
    answer:
      'Yes, we perform drone inspections throughout all of Östergötland — including Linköping, Norrköping and surrounding municipalities. The two cities are close to each other and we can often combine assignments.',
  },
  {
    question: 'Can you inspect technology properties at Mjärdevi Science Park?',
    answer:
      'Yes, we inspect office and technology properties at Mjärdevi and other business parks. Thermal inspection identifies energy losses and maintenance needs in modern office buildings.',
  },
  {
    question: 'Do you inspect residential areas like Ryd?',
    answer:
      'Absolutely. Ryd\'s student housing and apartment buildings are efficiently inspected with drones. Thermal camera reveals cold bridges and moisture problems in buildings from various eras.',
  },
  {
    question: 'Can you perform industrial inspection in Östergötland?',
    answer:
      'Yes, the region has a strong industrial cluster and we inspect production facilities, warehouse properties and infrastructure with drones and thermal camera.',
  },
  {
    question: 'What is included in a drone inspection in Linköping?',
    answer:
      'We fly with thermal camera and RGB camera, systematically document the entire object and deliver a detailed report with images and recommended actions.',
  },
]

export default function LinkopingPage() {
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
          { name: 'Linköping', url: '' },
        ]}
      />

      <Hero
        headline="Drone Inspection Linköping — Technology, Residential & Industrial"
        subheadline="Linköping is a hub for high technology with Mjärdevi Science Park and an active industrial cluster. SurveyDrone inspects roofs, facades and solar panels with thermal camera in Linköping, Tornby, Ryd and all of Östergötland — including Norrköping."
        ctaPrimary={{ label: 'Request a quote — Linköping', href: '/en/contact' }}
        ctaSecondary={{ label: 'Our services', href: '/en/services/roof-inspection' }}
      />

      <TrustBar
        items={[
          'EASA-certified remote pilots',
          'Insured',
          'Linköping & Norrköping',
          'Thermal camera & RGB',
        ]}
      />

      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-heading-lg sm:text-display">
              Drone inspection for Linköping&apos;s technology and residential properties
            </h2>
            <div className="mt-6 space-y-4 text-body-lg text-dark-600">
              <p>
                Linköping is defined by its role as a technology and knowledge city. Mjärdevi Science Park brings together
                hundreds of technology companies in modern office properties where energy efficiency and maintenance
                are essential. The Tornby commercial area has large commercial properties with flat roofs that
                require regular inspection.
              </p>
              <p>
                Residential areas like Ryd have apartment buildings from various eras where thermal inspection
                identifies cold bridges and moisture. Linköping&apos;s central districts have older buildings
                with brick facades that benefit from non-destructive drone inspection. The proximity to
                Norrköping means we often cover both cities on the same trip.
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
                {' '}throughout Östergötland.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Benefits of drone inspection in Linköping"
        subtitle="Adapted for Östergötland's technology and industrial landscape."
        benefits={[
          {
            title: 'Office properties at Mjärdevi',
            description:
              'Modern technology properties at Mjärdevi Science Park are inspected with thermal camera to find energy losses and maintenance needs.',
            icon: 'building',
          },
          {
            title: 'Commercial properties in Tornby',
            description:
              'Large commercial roofs in the Tornby retail area are efficiently inspected with drones — without disrupting operations.',
            icon: 'camera',
          },
          {
            title: 'Two cities in one trip',
            description:
              'Linköping and Norrköping are close to each other. We can often combine assignments in both cities for increased efficiency.',
            icon: 'clock',
          },
          {
            title: 'Safe inspection',
            description:
              'No personnel need to work at height. EASA-certified pilots carry out the flight safely and professionally.',
            icon: 'shield',
          },
          {
            title: 'Complete report',
            description:
              'Thermal images, RGB documentation and recommended actions are delivered in a clear report.',
            icon: 'file',
          },
          {
            title: 'Industrial capacity',
            description:
              'We inspect production facilities and infrastructure in Östergötland\'s industrial cluster with drone technology.',
            icon: 'chart',
          },
        ]}
        variant="dark"
      />

      <FaqAccordion
        headline="FAQ — Drone Inspection Linköping"
        items={faqItems}
      />

      <CtaBand
        headline="Need drone inspection in Linköping?"
        description="Contact us for a free quote. We inspect roofs, facades and solar panels in Linköping, Norrköping and all of Östergötland."
        ctaLabel="Request a quote"
        ctaHref="/en/contact"
      />
    </>
  )
}
