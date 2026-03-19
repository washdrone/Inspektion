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
  title: 'Drone Inspection for Property Management',
  description:
    'Efficient drone inspection of roofs and facades for property companies and housing associations. Thermal camera reveals hidden damage. EASA-certified pilots across Sweden.',
  path: '/en/industries/property',
  locale: 'en',
  alternateLocalePath: '/branscher/fastighet',
})

const faqItems = [
  {
    question: 'How does drone inspection help us plan maintenance better?',
    answer:
      'Using thermal camera and high-resolution photography, we identify damage, moisture ingress and cold bridges that are invisible during ground-level inspections. You receive a complete decision-making basis with prioritised remediation recommendations that can be integrated directly into your maintenance plan.',
  },
  {
    question: 'Can you inspect multiple properties at the same time?',
    answer:
      'Yes, we are happy to plan inspections of entire property portfolios in a single mobilisation. This gives you a cost-effective overview and enables comparisons across the properties in your portfolio.',
  },
  {
    question: 'What type of report do we receive after the inspection?',
    answer:
      'You receive a detailed report with high-resolution images, thermal images with analysis, identified damage with coordinates and prioritised remediation recommendations. The report is normally delivered within a couple of working days.',
  },
  {
    question: 'Is access to the roof or facade needed during the inspection?',
    answer:
      'No, the inspection is carried out entirely from the air. No scaffolding, cherry pickers or personnel on the roof are required. We only need access to a launch site near the property.',
  },
  {
    question: 'Does thermal inspection work on all types of roofs?',
    answer:
      'Thermal inspection works on most roof types, including flat roofs, pitched roofs and felt roofs. The best results are achieved in suitable weather conditions, which we take into account during planning.',
  },
  {
    question: 'How often should we inspect our properties with drones?',
    answer:
      'We recommend annual inspections as part of your preventive maintenance strategy. Properties with known problem areas may need more frequent inspections. Contact us for a plan tailored to your portfolio.',
  },
  {
    question: 'Are SurveyDrone\'s pilots certified?',
    answer:
      'Yes, all pilots are EASA-certified remote pilots. We are insured and comply with all applicable regulations for commercial drone operations in Sweden.',
  },
]

export default function PropertyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchemaEn({
              name: 'Drone Inspection for Property Management',
              description:
                'Professional drone inspection of roofs and facades for property companies, housing association boards and property managers. Thermal camera and high-resolution image analysis.',
              url: '/en/industries/property',
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
          { name: 'Property', url: '/en/industries/property' },
        ]}
      />

      <Hero
        headline="Drone Inspection for Property Managers"
        subheadline="Skip the scaffolding and manual roof walks. With thermal camera and drone technology, we provide you with a complete decision-making basis for planned maintenance of roofs, facades and building details — faster and safer."
        ctaPrimary={{ label: 'Request a quote', href: '/en/contact' }}
        ctaSecondary={{ label: 'Our services', href: '/en/services/roof-inspection' }}
        stats={[
          { value: '0', label: 'Work at height' },
          { value: 'Fast', label: 'Report delivery' },
          { value: 'All of', label: 'Sweden' },
          { value: 'EASA', label: 'Certified pilots' },
        ]}
      />

      <TrustBar
        items={[
          'EASA-certified remote pilots',
          'Insured operations',
          'Thermal camera & RGB',
          'Operating across Sweden',
        ]}
      />

      {/* Use cases section */}
      <section className="section-padding">
        <div className="container-content">
          <h2 className="text-heading-lg sm:text-display text-center">
            Typical assignments we handle for property managers
          </h2>
          <p className="mt-4 text-body-lg text-dark-500 text-center max-w-2xl mx-auto">
            Whether you manage a single apartment building or a large property portfolio,
            we help you identify and document issues before they become costly.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="card">
              <h3 className="text-heading-sm">Roof condition assessment</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Thermal and visual inspection of the entire roof surface. We identify moisture ingress,
                damaged waterproofing, cold bridges and mechanical damage — without stepping on the roof.
              </p>
              <Link href="/en/services/roof-inspection" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Read more about roof inspection &rarr;
              </Link>
            </div>
            <div className="card">
              <h3 className="text-heading-sm">Facade documentation</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                High-resolution photography and thermal analysis of the facade. Identify cracks,
                render damage, moisture accumulation and cold bridges without scaffolding.
              </p>
              <Link href="/en/services/facade-inspection" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Read more about facade inspection &rarr;
              </Link>
            </div>
            <div className="card">
              <h3 className="text-heading-sm">Solar panel inspection on roofs</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Do you have solar panels on your properties? We identify defective panels, hotspots
                and connection issues with fully radiometric data collection.
              </p>
              <Link href="/en/services/solar-panel-inspection" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Read more about solar panel inspection &rarr;
              </Link>
            </div>
            <div className="card">
              <h3 className="text-heading-sm">Maintenance planning & portfolio mapping</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Get a complete overview of your property portfolio&apos;s condition. We inspect multiple
                properties in the same mobilisation and deliver comparable reports.
              </p>
              <Link href="/en/contact" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Contact us for a tailored plan &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Benefits for property managers"
        subtitle="Drone inspection saves time and money while providing better decision-making data."
        benefits={[
          {
            title: 'Lower inspection cost',
            description:
              'No costs for scaffolding, cherry pickers or extensive safety equipment. The drone inspects faster and at lower cost.',
            icon: 'chart',
          },
          {
            title: 'No workplace safety risk',
            description:
              'No personnel need to work on the roof or at height. The entire inspection is carried out from a safe position on the ground.',
            icon: 'shield',
          },
          {
            title: 'Faster completion',
            description:
              'An inspection that traditionally takes days can be completed in a few hours. Perfect for inspecting the entire portfolio in time.',
            icon: 'clock',
          },
          {
            title: 'Hidden damage detected',
            description:
              'Industry-leading thermal camera reveals moisture, cold bridges and energy losses invisible during visual inspection.',
            icon: 'camera',
          },
          {
            title: 'Clear reports',
            description:
              'Detailed reports with images, thermal analyses and prioritised remediation recommendations — ready to integrate into the maintenance plan.',
            icon: 'file',
          },
          {
            title: 'Entire property portfolio',
            description:
              'We inspect everything from individual housing association properties to large commercial portfolios with hundreds of assets.',
            icon: 'building',
          },
        ]}
        variant="dark"
      />

      <FaqAccordion
        headline="Frequently asked questions from property managers"
        items={faqItems}
      />

      <CtaBand
        headline="Time to inspect your property portfolio?"
        description="Contact us for a free quote. We help you plan inspections tailored to your needs and portfolio."
        ctaLabel="Request a quote"
        ctaHref="/en/contact"
      />
    </>
  )
}
