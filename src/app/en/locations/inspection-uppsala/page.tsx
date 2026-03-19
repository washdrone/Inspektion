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
  title: 'Drone Inspection Uppsala | Roof & Facade | SurveyDrone',
  description:
    'Drone inspection in Uppsala with thermal camera. Roofs, facades and solar panels in Fyrislund, Boländerna, Sala backe and the entire Uppsala region. Request a quote.',
  path: '/en/locations/inspection-uppsala',
  locale: 'en',
  alternateLocalePath: '/platser/inspektion-uppsala',
})

const localBusinessSchema = localBusinessSchemaEn({
  name: 'SurveyDrone - Uppsala',
  description:
    'Professional drone inspection in the Uppsala region. Roofs, facades, solar panels and industrial facilities with thermal camera. EASA-certified remote pilots.',
  url: '/en/locations/inspection-uppsala',
  city: 'Uppsala',
  latitude: 59.8586,
  longitude: 17.6389,
})

const faqItems = [
  {
    question: 'Which areas in Uppsala do you cover?',
    answer:
      'We perform drone inspections throughout all of Uppsala — including Fyrislund, Boländerna, Sala backe, Sunnersta and central Uppsala. We also cover surrounding municipalities in the Uppsala region.',
  },
  {
    question: 'Can you inspect university and institutional buildings?',
    answer:
      'Yes, we inspect all types of public and commercial properties. Uppsala has a large stock of institutional buildings and public properties that benefit from regular drone inspection.',
  },
  {
    question: 'Do you inspect industrial properties in Boländerna?',
    answer:
      'Absolutely. Boländerna\'s commercial and industrial area has large roofs and commercial properties that are efficiently inspected with drones and thermal camera.',
  },
  {
    question: 'Can you inspect residential areas like Sala backe and Sunnersta?',
    answer:
      'Yes, we inspect apartment buildings and residential areas throughout Uppsala. Sala backe\'s apartment buildings from the Million Programme era and Sunnersta\'s detached housing stock both benefit from thermal inspection.',
  },
  {
    question: 'How do I book a drone inspection in Uppsala?',
    answer:
      'Contact us via the form on the contact page or send an email to info@surveydrone.se. We will respond with a quote and proposed schedule.',
  },
]

export default function UppsalaPage() {
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
          { name: 'Uppsala', url: '' },
        ]}
      />

      <Hero
        headline="Drone Inspection Uppsala — Academic, Residential & Industrial"
        subheadline="Uppsala is one of Sweden&apos;s fastest growing cities, with a mix of historic university buildings, expanding residential areas and the active industrial district of Boländerna. SurveyDrone inspects roofs, facades and solar panels with thermal camera throughout the Uppsala region."
        ctaPrimary={{ label: 'Request a quote — Uppsala', href: '/en/contact' }}
        ctaSecondary={{ label: 'Our services', href: '/en/services/roof-inspection' }}
      />

      <TrustBar
        items={[
          'EASA-certified remote pilots',
          'Insured',
          'Entire Uppsala region',
          'Thermal camera & RGB',
        ]}
      />

      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-heading-lg sm:text-display">
              Drone inspection for Uppsala&apos;s growing building stock
            </h2>
            <div className="mt-6 space-y-4 text-body-lg text-dark-600">
              <p>
                Uppsala combines areas of national cultural interest with historic buildings and modern districts
                undergoing rapid expansion. In Fyrislund and Boländerna, there are commercial and industrial properties with
                large roofs that require regular inspection. Central Uppsala has older residential buildings and
                institutional properties where thermal inspection reveals hidden problems.
              </p>
              <p>
                Sala backe represents Uppsala&apos;s Million Programme stock — apartment buildings from the 1960s and
                70s where roofs and facades often need renovation. In Sunnersta, there is detached housing
                where homeowners benefit from thermal roof inspection to find cold bridges.
                Uppsala&apos;s growth also means new construction where construction site documentation
                with drones provides efficient project monitoring.
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
                {' '}and{' '}
                <Link href="/en/services/solar-panel-inspection" className="text-brand-600 underline hover:text-brand-700">
                  solar panel inspection
                </Link>
                {' '}throughout the Uppsala region.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Benefits of drone inspection in Uppsala"
        subtitle="Adapted for Uppsala&apos;s mix of historic and modern properties."
        benefits={[
          {
            title: 'Industrial areas efficiently',
            description:
              'Boländerna\'s and Fyrislund\'s large commercial and industrial properties are inspected quickly with drones — no scaffolding needed.',
            icon: 'building',
          },
          {
            title: 'Thermal analysis of older stock',
            description:
              'Uppsala\'s older properties and Million Programme buildings in Sala backe benefit from thermal camera that reveals moisture and cold bridges.',
            icon: 'camera',
          },
          {
            title: 'Quick availability',
            description:
              'We are available for assignments in the Uppsala region and can often carry out inspections at short notice.',
            icon: 'clock',
          },
          {
            title: 'Safe inspection',
            description:
              'No scaffolding or work at height. Better working conditions and reduced risk.',
            icon: 'shield',
          },
          {
            title: 'Detailed reports',
            description:
              'Complete documentation with thermal images, RGB photos and recommended actions as a decision-making basis.',
            icon: 'file',
          },
          {
            title: 'Support for new construction',
            description:
              'Construction site documentation with drones provides overview and monitoring of Uppsala\'s many new building projects.',
            icon: 'chart',
          },
        ]}
        variant="dark"
      />

      <FaqAccordion
        headline="FAQ — Drone Inspection Uppsala"
        items={faqItems}
      />

      <CtaBand
        headline="Need drone inspection in Uppsala?"
        description="Contact us for a free quote. We inspect roofs, facades and solar panels throughout the Uppsala region."
        ctaLabel="Request a quote"
        ctaHref="/en/contact"
      />
    </>
  )
}
