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
  title: 'Drone Inspection Malmö | Roof & Facade | SurveyDrone',
  description:
    'Drone inspection in Malmö with thermal camera. Roofs, facades and solar panels in Västra hamnen, Hyllie, Limhamn and the entire Malmö region. Request a quote today.',
  path: '/en/locations/inspection-malmo',
  locale: 'en',
  alternateLocalePath: '/platser/inspektion-malmo',
})

const localBusinessSchema = localBusinessSchemaEn({
  name: 'SurveyDrone - Malmö',
  description:
    'Professional drone inspection in the Malmö region. Roofs, facades, solar panels and industrial facilities with thermal camera. EASA-certified remote pilots.',
  url: '/en/locations/inspection-malmo',
  city: 'Malmö',
  latitude: 55.6049,
  longitude: 13.0038,
})

const faqItems = [
  {
    question: 'Which areas in Malmö and Skåne do you cover?',
    answer:
      'We perform drone inspections throughout the entire Malmö region — including Västra hamnen, Hyllie, Limhamn, Kirseberg and central Malmö. We also cover nearby Lund and the rest of western Skåne.',
  },
  {
    question: 'Can you inspect new construction in Hyllie and Västra hamnen?',
    answer:
      'Yes, we perform both construction site documentation and final inspections of new developments. Hyllie and Västra hamnen are areas with intensive new construction where drone inspection provides efficient quality control.',
  },
  {
    question: 'Do you inspect solar panel installations in the Malmö region?',
    answer:
      'Absolutely. Skåne has favourable sun conditions and an increasing number of properties are installing solar panels. We inspect solar panel installations with thermal camera to identify hotspots and defective panels.',
  },
  {
    question: 'How does drone inspection work in Malmö\'s wind conditions?',
    answer:
      'Malmö\'s coastal location means it can be windy. We carefully monitor weather conditions and plan flights for the best results. If needed, we adjust the timing.',
  },
  {
    question: 'Can you inspect industrial properties in Malmö?',
    answer:
      'Yes, we inspect industrial properties, warehouse facilities and commercial buildings throughout the Malmö region. Drone inspection is particularly effective for large roofs and hard-to-reach facades.',
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
          { name: 'Home', url: '/en' },
          { name: 'Malmö', url: '' },
        ]}
      />

      <Hero
        headline="Drone Inspection Malmö — New Build & Heritage Properties"
        subheadline="Malmö is growing rapidly with new districts like Hyllie and Västra hamnen, while the city&apos;s older stock in Limhamn and Kirseberg requires regular maintenance. SurveyDrone inspects roofs, facades and solar panels with thermal camera throughout the Malmö region — including Lund."
        ctaPrimary={{ label: 'Request a quote — Malmö', href: '/en/contact' }}
        ctaSecondary={{ label: 'Our services', href: '/en/services/roof-inspection' }}
      />

      <TrustBar
        items={[
          'EASA-certified remote pilots',
          'Insured',
          'Malmö & western Skåne',
          'Thermal camera & RGB',
        ]}
      />

      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-heading-lg sm:text-display">
              Drone inspection for Malmö&apos;s varied building stock
            </h2>
            <div className="mt-6 space-y-4 text-body-lg text-dark-600">
              <p>
                Malmö combines rapid urban development with a rich cultural heritage. In Västra hamnen
                and Hyllie, modern residential and office districts are emerging, while Limhamn and Kirseberg
                have an older building stock with brick houses and detached homes that require regular monitoring.
              </p>
              <p>
                Skåne&apos;s mild climate and favourable sun conditions have made the region a hub for
                solar panel installations. Thermal drone inspection is the most efficient method for
                monitoring the performance of solar panel systems and identifying defective panels in time.
                In central Malmö, there are apartment buildings and commercial properties where drone inspection
                replaces expensive scaffolding on narrow streets.
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
                {' '}in Malmö, Lund and all of western Skåne.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Benefits of drone inspection in Malmö"
        subtitle="Adapted for the Malmö region&apos;s rapid growth and building stock."
        benefits={[
          {
            title: 'New construction quality control',
            description:
              'In expanding areas like Hyllie and Västra hamnen, we offer construction site documentation and quality control of new developments.',
            icon: 'building',
          },
          {
            title: 'Solar panel inspection',
            description:
              'Skåne\'s sun conditions make the region ideal for solar panels. We detect hotspots and defective panels with thermal camera.',
            icon: 'camera',
          },
          {
            title: 'Efficient inspection of older stock',
            description:
              'Limhamn\'s and Kirseberg\'s older properties are inspected quickly and without scaffolding — thermal camera reveals hidden moisture damage.',
            icon: 'clock',
          },
          {
            title: 'No risk from work at height',
            description:
              'The drone replaces manual inspection at height. Safer for everyone involved.',
            icon: 'shield',
          },
          {
            title: 'Report with decision-making basis',
            description:
              'Complete report with thermal images, visual documentation and recommended actions.',
            icon: 'file',
          },
          {
            title: 'Covers Malmö and Lund',
            description:
              'We inspect properties throughout the Malmö region including Lund, Staffanstorp and the rest of western Skåne.',
            icon: 'chart',
          },
        ]}
        variant="dark"
      />

      <FaqAccordion
        headline="FAQ — Drone Inspection Malmö"
        items={faqItems}
      />

      <CtaBand
        headline="Need drone inspection in Malmö?"
        description="Contact us for a free quote. We inspect roofs, facades, solar panels and new developments throughout the Malmö region."
        ctaLabel="Request a quote"
        ctaHref="/en/contact"
      />
    </>
  )
}
