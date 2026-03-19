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
  title: 'Drone Inspection for Construction',
  description:
    'Construction site documentation and inspection with drones. Aerial images, thermal camera and ongoing documentation of construction projects. EASA-certified pilots.',
  path: '/en/industries/construction',
  locale: 'en',
  alternateLocalePath: '/branscher/bygg',
})

const faqItems = [
  {
    question: 'How can drones be used for construction site documentation?',
    answer:
      'We fly regular documentation flights that provide aerial images, orthophotos and visual tracking of the construction project\'s progress. The material can be used for internal follow-up, client reports and dispute documentation.',
  },
  {
    question: 'Can you inspect newly built roofs before warranty inspection?',
    answer:
      'Yes, thermal inspection of newly laid roofs reveals faulty insulation, moisture traps and waterproofing defects that should be addressed within the warranty period. This gives you a strong basis for warranty claims.',
  },
  {
    question: 'How often should documentation flights be carried out?',
    answer:
      'It depends on the project\'s duration and complexity. Common intervals are weekly or monthly. Contact us for an arrangement that suits your project.',
  },
  {
    question: 'Can the material be used in BIM processes?',
    answer:
      'Our aerial images and orthophotos can be used as reference material in BIM processes. Contact us to discuss which formats and deliverables suit your workflows.',
  },
  {
    question: 'Is it feasible to fly drones on an active construction site?',
    answer:
      'Yes, we have experience working on active construction sites. We coordinate with the site manager, carry out a risk assessment and adapt the flight to the site conditions.',
  },
  {
    question: 'What type of report do we receive?',
    answer:
      'Depending on the nature of the assignment, we deliver high-resolution aerial images, orthophotos, thermal analyses and detailed inspection reports. We adapt the delivery format to your needs.',
  },
  {
    question: 'Can drones be used to document facade work?',
    answer:
      'Yes, we document facade work before, during and after completion. Thermal camera can also verify that insulation and waterproofing have been correctly installed.',
  },
]

export default function ConstructionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchemaEn({
              name: 'Drone Inspection for Construction Companies',
              description:
                'Construction site documentation and inspection with drones. Aerial images, orthophotos, thermal camera and ongoing documentation of construction projects.',
              url: '/en/industries/construction',
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
          { name: 'Construction', url: '/en/industries/construction' },
        ]}
      />

      <Hero
        headline="Drone Inspection for the Construction Industry"
        subheadline="Document construction project progress, inspect newly built roofs and verify workmanship with thermal camera. We provide aerial images, orthophotos and inspection reports that strengthen your project documentation."
        ctaPrimary={{ label: 'Request a quote', href: '/en/contact' }}
        ctaSecondary={{ label: 'Construction site documentation', href: '/en/services/3d-mapping' }}
        stats={[
          { value: '0', label: 'Work at height' },
          { value: 'Fast', label: 'Delivery' },
          { value: 'All of', label: 'Sweden' },
          { value: 'EASA', label: 'Certified pilots' },
        ]}
      />

      <TrustBar
        items={[
          'EASA-certified remote pilots',
          'Insured operations',
          'Thermal camera & RGB',
          'Active construction site experience',
        ]}
      />

      {/* Use cases section */}
      <section className="section-padding">
        <div className="container-content">
          <h2 className="text-heading-lg sm:text-display text-center">
            How we support your construction project
          </h2>
          <p className="mt-4 text-body-lg text-dark-500 text-center max-w-2xl mx-auto">
            From ongoing project documentation to final inspection of roofs and facades
            — drone technology gives you a better overview and stronger documentation.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="card">
              <h3 className="text-heading-sm">Ongoing construction site documentation</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Regular aerial images and orthophotos showing the construction project&apos;s progress.
                The material can be used for internal follow-up, client reports
                and as legal documentation.
              </p>
              <Link href="/en/services/3d-mapping" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Read more about construction site documentation &rarr;
              </Link>
            </div>
            <div className="card">
              <h3 className="text-heading-sm">Roof inspection after new construction</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Thermal inspection of newly laid roofs and waterproofing. Identify faulty workmanship,
                inadequate insulation and moisture traps before the warranty period expires.
              </p>
              <Link href="/en/services/roof-inspection" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Read more about roof inspection &rarr;
              </Link>
            </div>
            <div className="card">
              <h3 className="text-heading-sm">Facade control and verification</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Document and verify facade work with high-resolution images and thermal
                analysis. Check that insulation and waterproofing have been correctly installed.
              </p>
              <Link href="/en/services/facade-inspection" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Read more about facade inspection &rarr;
              </Link>
            </div>
            <div className="card">
              <h3 className="text-heading-sm">Solar panel verification at installation</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Thermal inspection of newly installed solar panel systems to verify
                that all panels and strings are functioning correctly at commissioning.
              </p>
              <Link href="/en/services/solar-panel-inspection" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Read more about solar panel inspection &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Benefits for construction companies"
        subtitle="Drone inspection strengthens your project documentation and quality control."
        benefits={[
          {
            title: 'Complete project documentation',
            description:
              'Aerial images and orthophotos showing the project\'s development. Valuable for follow-up, reporting and potential disputes.',
            icon: 'file',
          },
          {
            title: 'Quality control without scaffolding',
            description:
              'Inspect roofs and facades after completion without needing to erect scaffolding or cherry pickers.',
            icon: 'building',
          },
          {
            title: 'Thermal verification',
            description:
              'Industry-leading thermal camera reveals insulation deficiencies and workmanship defects invisible to the naked eye.',
            icon: 'camera',
          },
          {
            title: 'Stronger warranty documentation',
            description:
              'Thermal documentation during new construction provides evidence if defects arise within the warranty period.',
            icon: 'shield',
          },
          {
            title: 'Time-efficient',
            description:
              'A documentation flight takes a fraction of the time compared to ground-based photography of the entire construction site.',
            icon: 'clock',
          },
          {
            title: 'RTK positioning',
            description:
              'RTK/GNSS positioning with centimetre accuracy provides exact positions on all images and observations.',
            icon: 'chart',
          },
        ]}
        variant="dark"
      />

      <FaqAccordion
        headline="Frequently asked questions from the construction industry"
        items={faqItems}
      />

      <CtaBand
        headline="Strengthen your construction project documentation"
        description="Contact us to discuss how drone inspection and construction site documentation can support your project."
        ctaLabel="Request a quote"
        ctaHref="/en/contact"
      />
    </>
  )
}
