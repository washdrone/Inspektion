import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { serviceSchemaEn } from '@/lib/schema-en'
import { faqSchema } from '@/lib/schema'
import { Hero } from '@/components/Hero'
import { TrustBar } from '@/components/TrustBar'
import { BenefitsGrid } from '@/components/BenefitsGrid'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = createMetadata({
  title: 'Drone Inspection for the Energy Sector',
  description:
    'Thermal drone inspection of solar parks, power grids and energy facilities. Identify hotspots and operational disruptions. EASA-certified pilots across Sweden.',
  path: '/en/industries/energy',
  locale: 'en',
  alternateLocalePath: '/branscher/energi',
})

const faqItems = [
  {
    question: 'How do you identify defective solar panels with drones?',
    answer:
      'We use industry-leading thermal camera with fully radiometric data collection. Defective cells, hotspots, PID effects and poor connections are clearly visible as temperature anomalies in the thermograms. Each anomaly is documented with its exact position.',
  },
  {
    question: 'Can you inspect large solar parks?',
    answer:
      'Yes, drone technology is particularly effective for large installations. We can inspect extensive areas significantly faster than manual methods, with systematic coverage of all panels and strings.',
  },
  {
    question: 'What types of energy facilities do you inspect?',
    answer:
      'We inspect solar parks, rooftop solar installations, power grids, transformer stations and other energy-related facilities. Contact us to discuss your specific needs.',
  },
  {
    question: 'How is the inspection data delivered?',
    answer:
      'You receive a detailed report with thermal images, RGB images, identified anomalies with coordinates and recommended actions. Data can be adapted for integration with your asset management system.',
  },
  {
    question: 'Can the inspection be carried out without downtime?',
    answer:
      'Yes, the drone inspection is carried out without affecting operations. Solar installations are inspected during production — in fact, the panels need to be generating electricity for thermal inspection to yield the best results.',
  },
  {
    question: 'How often should solar installations be inspected?',
    answer:
      'We recommend annual thermal inspection to detect degradation and new defects early. Installations with known issues or older panels may benefit from more frequent intervals.',
  },
  {
    question: 'Do you have experience with ex-classified zones?',
    answer:
      'Yes, we have experience working in and around ex-classified zones. Contact us to discuss the conditions and requirements for your specific facility.',
  },
]

export default function EnergyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchemaEn({
              name: 'Drone Inspection for the Energy Sector',
              description:
                'Thermal drone inspection of solar parks, power grids and energy facilities. Identify hotspots, defective panels and operational disruptions.',
              url: '/en/industries/energy',
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqItems)) }}
      />

      <Breadcrumbs
        items={[
          { name: 'Home', url: '/en' },
          { name: 'Industries', url: '#' },
          { name: 'Energy', url: '/en/industries/energy' },
        ]}
      />

      <Hero
        headline="Drone Inspection for the Energy Sector"
        subheadline="Maximise uptime and minimise energy losses. With fully radiometric thermal inspection, we identify defective panels, hotspots and damage at your energy facilities — without interrupting production."
        ctaPrimary={{ label: 'Request a quote', href: '/en/contact' }}
        ctaSecondary={{ label: 'Solar panel inspection', href: '/en/services/solar-panel-inspection' }}
        stats={[
          { value: '0', label: 'Production downtime' },
          { value: 'Fast', label: 'Report delivery' },
          { value: 'All of', label: 'Sweden' },
          { value: 'EASA', label: 'Certified pilots' },
        ]}
      />

      <TrustBar
        items={[
          'EASA-certified remote pilots',
          'Insured operations',
          'Fully radiometric thermal camera',
          'Ex-classified zone experience',
        ]}
      />

      {/* Use cases section */}
      <section className="section-padding">
        <div className="container-content">
          <h2 className="text-heading-lg sm:text-display text-center">
            Inspections tailored for the energy sector
          </h2>
          <p className="mt-4 text-body-lg text-dark-500 text-center max-w-2xl mx-auto">
            Whether you operate a solar park, manage a power grid or are responsible for
            energy production, we help you keep your facilities running.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="card">
              <h3 className="text-heading-sm">Solar panel inspection</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Thermal inspection of solar parks and rooftop installations. We identify
                hotspots, defective cells, PID effects and connection issues with fully radiometric
                data collection.
              </p>
              <Link href="/en/services/solar-panel-inspection" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Read more about solar panel inspection &rarr;
              </Link>
            </div>
            <div className="card">
              <h3 className="text-heading-sm">Power grid and line inspection</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Visual and thermal inspection of power lines, pylons and transformer stations.
                Identify overheated connections and mechanical damage in hard-to-reach locations.
              </p>
              <Link href="/en/services/industrial-inspection" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Read more about industrial inspection &rarr;
              </Link>
            </div>
            <div className="card">
              <h3 className="text-heading-sm">Facility inspection</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Inspection of roofs, facades and building envelopes at energy facilities. Identify
                moisture damage, insulation deficiencies and maintenance needs without working at height.
              </p>
              <Link href="/en/services/roof-inspection" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Read more about roof inspection &rarr;
              </Link>
            </div>
            <div className="card">
              <h3 className="text-heading-sm">Documentation and follow-up</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Regular aerial documentation of your facilities. Track changes over time
                and build a history for proactive maintenance.
              </p>
              <Link href="/en/contact" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Contact us for a tailored plan &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Benefits for energy companies"
        subtitle="Drone technology gives you better inspections with less impact on operations."
        benefits={[
          {
            title: 'No production loss',
            description:
              'The inspection is carried out while the facility is in full operation. No interruptions, no production losses.',
            icon: 'clock',
          },
          {
            title: 'Fully radiometric data',
            description:
              'Industry-leading thermal camera with fully radiometric data collection provides exact temperature values for every pixel.',
            icon: 'camera',
          },
          {
            title: 'Large areas quickly',
            description:
              'Solar parks and extensive facilities are inspected significantly faster compared to manual methods.',
            icon: 'chart',
          },
          {
            title: 'Ex-classified zone experience',
            description:
              'We have experience working in and around explosion-classified environments within the energy sector.',
            icon: 'shield',
          },
          {
            title: 'Position data on anomalies',
            description:
              'Every identified defect is delivered with RTK/GNSS positioning with centimetre accuracy for fast localisation in the field.',
            icon: 'file',
          },
          {
            title: 'Customised deliverables',
            description:
              'Data and reports are adapted to your internal systems and routines for asset management and maintenance planning.',
            icon: 'building',
          },
        ]}
        variant="dark"
      />

      <FaqAccordion
        headline="Frequently asked questions from the energy sector"
        items={faqItems}
      />

      <CtaBand
        headline="Optimise operations at your energy facilities"
        description="Contact us for a free quote. We help you find hidden defects and maximise production."
        ctaLabel="Request a quote"
        ctaHref="/en/contact"
      />
    </>
  )
}
