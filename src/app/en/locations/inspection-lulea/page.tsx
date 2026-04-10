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
  title: 'Drone Inspection Luleå | Roof & Facade | SurveyDrone',
  description:
    'Drone inspection in Luleå with thermal camera. Roofs, facades and solar panels in Centrum, Bergnäset, Porsön and Gammelstad. EASA-certified pilots.',
  path: '/en/locations/inspection-lulea',
  locale: 'en',
  alternateLocalePath: '/platser/inspektion-lulea',
})

const localBusinessSchema = localBusinessSchemaEn({
  name: 'SurveyDrone - Luleå',
  description:
    'Professional drone inspection in Luleå and Norrbotten. Roofs, facades, solar panels and industrial facilities with thermal camera. EASA-certified remote pilots.',
  url: '/en/locations/inspection-lulea',
  city: 'Luleå',
  latitude: 65.5848,
  longitude: 22.1547,
})

const faqItems = [
  {
    question: 'Do you carry out drone inspections in Luleå and Norrbotten?',
    answer:
      'Yes, we carry out drone inspections in Luleå and throughout Norrbotten. We operate across all of Sweden and have the capacity to undertake assignments in the northern region.',
  },
  {
    question: 'How does thermal inspection work in Luleå\'s arctic climate?',
    answer:
      'The cold climate in Luleå is an advantage for thermal inspection. Large temperature differences between indoors and outdoors make cold bridges and heat leakage more visible with thermal cameras during the winter months.',
  },
  {
    question: 'Can you inspect industrial properties in Luleå?',
    answer:
      'Yes, we inspect all types of industrial and commercial properties. Luleå has a strong industrial sector and drone inspection provides an efficient overview of large industrial areas.',
  },
  {
    question: 'Do you inspect Gammelstad and older buildings?',
    answer:
      'Absolutely. Older buildings require regular inspection and drone inspection with thermal cameras identifies cold bridges, moisture and maintenance needs without damaging cultural-historical values.',
  },
  {
    question: 'What services do you offer in Luleå?',
    answer:
      'We offer roof inspection, facade inspection, solar panel inspection and industrial inspection with thermal cameras and RGB. Contact us to discuss your specific needs.',
  },
]

export default function LuleaPage() {
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
          { name: 'Luleå', url: '' },
        ]}
      />

      <Hero
        headline="Drone Inspection Luleå — Arctic Climate, Precise Inspections"
        subheadline="Luleå's long winters and extreme cold place high demands on building insulation and airtightness. SurveyDrone inspects roofs, facades and solar panels with thermal cameras in Centrum, Bergnäset, Porsön, Gammelstad and the entire Luleå region — where the arctic climate makes thermal inspection especially effective."
        ctaPrimary={{ label: 'Get a quote — Luleå', href: '/en/contact' }}
        ctaSecondary={{ label: 'Our services', href: '/en/services/roof-inspection' }}
      />

      <TrustBar
        items={[
          'EASA-certified remote pilots',
          'Insured',
          'Luleå & Norrbotten',
          'Thermal camera & RGB',
        ]}
      />

      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-heading-lg sm:text-display">
              Thermal drone inspection in Luleå&apos;s arctic climate
            </h2>
            <div className="mt-6 space-y-4 text-body-lg text-dark-600">
              <p>
                Luleå is located on the coast of the Gulf of Bothnia in Norrbotten, where winters with
                temperatures far below zero place extreme demands on building insulation, roofs and
                facades. Thermal drone inspection is especially valuable here — large temperature
                differences between indoors and outdoors make cold bridges, heat leakage and moisture
                problems clearly visible with thermal cameras.
              </p>
              <p>
                In Centrum, there are commercial properties and apartment buildings that require regular
                maintenance. Bergnäset, south of the Lule River, has detached houses and older properties.
                Porsön houses the university&apos;s campus buildings. Gammelstad, with its UNESCO-listed
                church town, has older buildings that need gentle but thorough inspection.
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
                {' '}in Luleå and throughout Norrbotten.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Benefits of drone inspection in Luleå"
        subtitle="Tailored for Norrbotten's arctic climate and property portfolio."
        benefits={[
          {
            title: 'Arctic thermal inspection',
            description:
              'Luleå\'s extreme cold amplifies temperature differences and makes thermal cameras especially effective for finding cold bridges and heat leakage.',
            icon: 'camera',
          },
          {
            title: 'Industrial inspection',
            description:
              'Luleå has a strong industrial sector. Drone inspection of industrial roofs, facades and facilities is carried out safely and efficiently.',
            icon: 'building',
          },
          {
            title: 'Cultural-historical buildings',
            description:
              'Gammelstad\'s older buildings are gently inspected by drone. No scaffolding or physical contact required.',
            icon: 'chart',
          },
          {
            title: 'Safe in extreme climate',
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
        headline="Frequently asked questions — Drone inspection Luleå"
        items={faqItems}
      />

      <CtaBand
        headline="Need drone inspection in Luleå?"
        description="Contact us for a free quote. We inspect roofs, facades and solar panels in Luleå and throughout Norrbotten."
        ctaLabel="Get a quote"
        ctaHref="/en/contact"
      />
    </>
  )
}
