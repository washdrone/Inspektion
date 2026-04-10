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
  title: 'Drone Inspection Västerås | Roof & Facade | SurveyDrone',
  description:
    'Drone inspection in Västerås with thermal camera. Roofs, facades and solar panels in Rocklunda, Bäckby, Viksäng and the entire Västerås region. Get a quote.',
  path: '/en/locations/inspection-vasteras',
  locale: 'en',
  alternateLocalePath: '/platser/inspektion-vasteras',
})

const localBusinessSchema = localBusinessSchemaEn({
  name: 'SurveyDrone - Västerås',
  description:
    'Professional drone inspection in the Västerås region. Roofs, facades, solar panels and industrial facilities with thermal camera. EASA-certified remote pilots.',
  url: '/en/locations/inspection-vasteras',
  city: 'Västerås',
  latitude: 59.6099,
  longitude: 16.5448,
})

const faqItems = [
  {
    question: 'Which areas in Västerås do you cover?',
    answer:
      'We carry out drone inspections across all of Västerås — including Rocklunda, Bäckby, Viksäng and central Västerås. We also cover the surrounding municipalities in the Mälardalen region.',
  },
  {
    question: 'Do you inspect energy and industrial facilities in Västerås?',
    answer:
      'Yes, Västerås has a strong tradition in the energy and power industry. We inspect industrial facilities, power plants and associated infrastructure using drones and thermal cameras.',
  },
  {
    question: 'Can you inspect properties near Lake Mälaren?',
    answer:
      'Absolutely. We inspect properties throughout Västerås, including areas along Lake Mälaren. Lakeside properties are often exposed to moisture, and we identify damage using thermal cameras.',
  },
  {
    question: 'Do you inspect residential areas like Bäckby and Viksäng?',
    answer:
      'Yes, we inspect apartment buildings in Bäckby, Viksäng and other residential areas. Thermal inspection is particularly valuable for planning renovations of million programme housing stock.',
  },
  {
    question: 'How quickly do we receive the report after the inspection?',
    answer:
      'We typically deliver the report with thermal images, RGB photos and recommended actions within a couple of working days after the completed inspection.',
  },
]

export default function VasterasPage() {
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
          { name: 'Västerås', url: '' },
        ]}
      />

      <Hero
        headline="Drone Inspection Västerås — Energy, Industry & the Mälardalen Region"
        subheadline="Västerås is an industrial city on the shores of Lake Mälaren with a strong focus on energy and technology. SurveyDrone inspects roofs, facades and facilities with thermal cameras in Rocklunda, Bäckby, Viksäng and the entire Västerås region."
        ctaPrimary={{ label: 'Get a quote — Västerås', href: '/en/contact' }}
        ctaSecondary={{ label: 'Our services', href: '/en/services/roof-inspection' }}
      />

      <TrustBar
        items={[
          'EASA-certified remote pilots',
          'Insured',
          'Entire Västerås region',
          'Thermal camera & RGB',
        ]}
      />

      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-heading-lg sm:text-display">
              Drone inspection for industrial and residential properties in Västerås
            </h2>
            <div className="mt-6 space-y-4 text-body-lg text-dark-600">
              <p>
                Västerås has a deeply rooted industrial tradition with prominent energy and technology
                companies. The city&apos;s industrial areas house production facilities, power infrastructure
                and logistics properties where drone inspection offers an efficient method for monitoring
                condition and identifying maintenance needs without operational downtime.
              </p>
              <p>
                Proximity to Lake Mälaren affects the city&apos;s properties — moisture is a recurring
                challenge for buildings in lakeside locations. In residential areas such as Bäckby and
                Viksäng, there are million programme apartment buildings where roofs and facades often
                need renovation. The Rocklunda area has a mix of sports facilities and housing. Central
                Västerås, with its blend of older and newer buildings, benefits from thermal inspection
                for prioritising maintenance.
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
                {' '}across the entire Västerås region.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Benefits of drone inspection in Västerås"
        subtitle="Tailored for the Västerås energy sector and diverse property portfolio."
        benefits={[
          {
            title: 'Energy and industrial facilities',
            description:
              'Industrial facilities and energy infrastructure in Västerås are inspected by drone without operational downtime or hazardous work at height.',
            icon: 'building',
          },
          {
            title: 'Moisture detection near Lake Mälaren',
            description:
              'Lakeside properties are exposed to moisture. Thermal cameras identify moisture damage and cold bridges early.',
            icon: 'camera',
          },
          {
            title: 'Million programme renovation',
            description:
              'Bäckby and Viksäng have apartment buildings in need of renovation. Thermal inspection provides decision support for prioritisation.',
            icon: 'clock',
          },
          {
            title: 'Safe working environment',
            description:
              'No personnel at height. Especially valuable when inspecting tall industrial buildings and chimneys.',
            icon: 'shield',
          },
          {
            title: 'Report with recommended actions',
            description:
              'Detailed report with thermal images, RGB photos and prioritised action recommendations.',
            icon: 'file',
          },
          {
            title: 'The Mälardalen region',
            description:
              'We cover the entire Mälardalen region and can combine assignments in Västerås with neighbouring municipalities.',
            icon: 'chart',
          },
        ]}
        variant="dark"
      />

      <FaqAccordion
        headline="Frequently asked questions — Drone inspection Västerås"
        items={faqItems}
      />

      <CtaBand
        headline="Need drone inspection in Västerås?"
        description="Contact us for a free quote. We inspect roofs, facades, solar panels and industrial facilities across the entire Västerås region."
        ctaLabel="Get a quote"
        ctaHref="/en/contact"
      />
    </>
  )
}
