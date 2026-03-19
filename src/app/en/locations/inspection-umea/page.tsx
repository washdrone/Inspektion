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
  title: 'Drone Inspection Umeå | Roof & Facade | SurveyDrone',
  description:
    'Drone inspection in Umeå with thermal camera. Roofs, facades and solar panels in Teg, Ålidhem, Ersboda and the University area. EASA-certified pilots.',
  path: '/en/locations/inspection-umea',
  locale: 'en',
  alternateLocalePath: '/platser/inspektion-umea',
})

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'SurveyDrone - Umeå',
  description:
    'Professional drone inspection in Umeå and Västerbotten. Roofs, facades, solar panels and industrial facilities with thermal camera. EASA-certified remote pilots.',
  url: 'https://surveydrone.se/en/locations/inspection-umea',
  email: 'info@surveydrone.se',
  areaServed: {
    '@type': 'City',
    name: 'Umeå',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 63.8258,
      longitude: 20.2630,
    },
  },
  parentOrganization: {
    '@type': 'ProfessionalService',
    '@id': 'https://surveydrone.se/#organization',
  },
}

const faqItems = [
  {
    question: 'Do you carry out drone inspections in northern Sweden?',
    answer:
      'Yes, we carry out drone inspections in Umeå and throughout Västerbotten. We operate across all of Sweden and have the capacity to undertake assignments in the northern region.',
  },
  {
    question: 'How does thermal inspection work in Umeå\'s cold climate?',
    answer:
      'The cold climate in Umeå is actually an advantage for thermal inspection. Large temperature differences between indoors and outdoors make cold bridges and heat leakage more visible with thermal cameras during the cold season.',
  },
  {
    question: 'Do you inspect university properties in Umeå?',
    answer:
      'Yes, we inspect all types of public and commercial properties, including buildings in the University area. Drone inspection provides an efficient overview of large campus areas.',
  },
  {
    question: 'Can you inspect residential areas like Ålidhem and Ersboda?',
    answer:
      'Absolutely. Apartment buildings in Ålidhem and Ersboda are efficiently inspected with drones and thermal cameras. We identify cold bridges, moisture damage and maintenance needs.',
  },
  {
    question: 'What services do you offer in Umeå?',
    answer:
      'We offer roof inspection, facade inspection, solar panel inspection and industrial inspection with thermal cameras and RGB. Contact us to discuss your specific needs.',
  },
]

export default function UmeaPage() {
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
          { name: 'Umeå', url: '' },
        ]}
      />

      <Hero
        headline="Drone Inspection Umeå — Subarctic Climate, Smart Inspections"
        subheadline="Umeå's cold winters place high demands on building insulation and airtightness. SurveyDrone inspects roofs, facades and solar panels with thermal cameras in Teg, Ålidhem, Ersboda, the University area and the entire Umeå region — where the cold climate makes thermal inspection especially effective."
        ctaPrimary={{ label: 'Get a quote — Umeå', href: '/en/contact' }}
        ctaSecondary={{ label: 'Our services', href: '/en/services/roof-inspection' }}
      />

      <TrustBar
        items={[
          'EASA-certified remote pilots',
          'Insured',
          'Umeå & Västerbotten',
          'Thermal camera & RGB',
        ]}
      />

      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-heading-lg sm:text-display">
              Thermal drone inspection in Umeå&apos;s demanding climate
            </h2>
            <div className="mt-6 space-y-4 text-body-lg text-dark-600">
              <p>
                Umeå is located in northern Sweden where winters with temperatures far below zero place
                extreme demands on building insulation, roofs and facades. This makes thermal drone
                inspection especially valuable — large temperature differences between indoors and
                outdoors make cold bridges, heat leakage and moisture problems clearly visible with
                thermal cameras.
              </p>
              <p>
                In Teg, south of the Ume River, there is a mix of detached houses and apartment buildings.
                Ålidhem is one of Umeå&apos;s largest residential areas with apartment buildings where roofs
                and facades need regular inspection. Ersboda to the east has similar housing. The University
                area contains institutional buildings and campus properties where energy efficiency is a
                priority.
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
                {' '}in Umeå and throughout Västerbotten.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Benefits of drone inspection in Umeå"
        subtitle="Tailored for northern Sweden's climate and property portfolio."
        benefits={[
          {
            title: 'Climate-optimised thermal inspection',
            description:
              'Umeå\'s cold winters amplify temperature differences and make thermal cameras especially effective for finding cold bridges and heat leakage.',
            icon: 'camera',
          },
          {
            title: 'Residential areas',
            description:
              'Apartment buildings in Ålidhem and Ersboda are efficiently inspected. Thermal inspection identifies insulation deficiencies that drive heating costs.',
            icon: 'building',
          },
          {
            title: 'Campus properties',
            description:
              'The University area\'s institutional buildings and campus properties are inspected by drone for energy efficiency analysis.',
            icon: 'chart',
          },
          {
            title: 'Safe in harsh climate',
            description:
              'No personnel need to work at height under demanding winter conditions. The drone handles the assignment.',
            icon: 'shield',
          },
          {
            title: 'Snow load related damage',
            description:
              'Heavy snow loads can cause roof damage. Drone inspection after the winter season reveals deformations and damage.',
            icon: 'clock',
          },
          {
            title: 'Detailed report',
            description:
              'Complete documentation with thermal images, RGB photos and recommended actions as a basis for maintenance.',
            icon: 'file',
          },
        ]}
        variant="dark"
      />

      <FaqAccordion
        headline="Frequently asked questions — Drone inspection Umeå"
        items={faqItems}
      />

      <CtaBand
        headline="Need drone inspection in Umeå?"
        description="Contact us for a free quote. We inspect roofs, facades and solar panels in Umeå and throughout Västerbotten."
        ctaLabel="Get a quote"
        ctaHref="/en/contact"
      />
    </>
  )
}
