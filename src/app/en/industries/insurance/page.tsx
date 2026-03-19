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
  title: 'Drone Inspection for Insurance Companies',
  description:
    'Fast and objective damage documentation with drones for insurance companies. Thermal camera and high-resolution images. EASA-certified pilots across Sweden.',
  path: '/en/industries/insurance',
  locale: 'en',
  alternateLocalePath: '/branscher/forsakring',
})

const faqItems = [
  {
    question: 'How quickly can you be on site after a damage event?',
    answer:
      'We strive for rapid mobilisation and can in most cases carry out the inspection shortly after ordering. Contact us with your case and we will confirm availability.',
  },
  {
    question: 'Can drone inspection replace a traditional damage survey?',
    answer:
      'Drone inspection complements and strengthens the damage assessment by adding thermal analysis and high-resolution documentation of surfaces that are hard to reach during ground-level inspection. This provides a more complete picture of the damage extent.',
  },
  {
    question: 'What types of damage can you document?',
    answer:
      'We document storm damage, hail damage, fire damage, water damage and other events affecting roofs, facades and building elements. Thermal camera also reveals hidden moisture damage.',
  },
  {
    question: 'How is the documentation delivered?',
    answer:
      'You receive a detailed report with high-resolution images, thermal images with analysis, damage extent and position data. The report can be adapted to your internal requirements for claims settlement.',
  },
  {
    question: 'Can you document the extent of damage in large-scale events?',
    answer:
      'Yes, drone technology is particularly valuable during major damage events such as storms or flooding. We can quickly map the damage extent across multiple buildings and give you a consolidated overview.',
  },
  {
    question: 'Is the documentation legally usable?',
    answer:
      'Our reports contain timestamped images with position data and are produced by EASA-certified personnel using calibrated equipment. The documentation can be used as supplementary evidence in claims cases.',
  },
  {
    question: 'Can you carry out inspections across all of Sweden?',
    answer:
      'Yes, we operate across all of Sweden and can mobilise to your damage site regardless of location.',
  },
]

export default function InsurancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchemaEn({
              name: 'Drone Inspection for Insurance Companies',
              description:
                'Fast and objective damage documentation with drones and thermal camera. Support for claims settlement with high-resolution images and thermal analysis.',
              url: '/en/industries/insurance',
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
          { name: 'Insurance', url: '/en/industries/insurance' },
        ]}
      />

      <Hero
        headline="Drone Inspection for Insurance Companies"
        subheadline="Faster damage assessment, objective documentation and better decision-making data. With drones and thermal camera, we map the damage extent on roofs and facades — including hidden damage invisible during ground-level inspection."
        ctaPrimary={{ label: 'Request a quote', href: '/en/contact' }}
        ctaSecondary={{ label: 'Our services', href: '/en/services/roof-inspection' }}
        stats={[
          { value: 'Fast', label: 'Mobilisation' },
          { value: 'Objective', label: 'Documentation' },
          { value: 'All of', label: 'Sweden' },
          { value: 'EASA', label: 'Certified pilots' },
        ]}
      />

      <TrustBar
        items={[
          'EASA-certified remote pilots',
          'Insured operations',
          'Thermal camera & RGB',
          'Timestamped documentation',
        ]}
      />

      {/* Use cases section */}
      <section className="section-padding">
        <div className="container-content">
          <h2 className="text-heading-lg sm:text-display text-center">
            Use cases in insurance
          </h2>
          <p className="mt-4 text-body-lg text-dark-500 text-center max-w-2xl mx-auto">
            Drone inspection gives you a fast and complete picture of the damage extent,
            streamlining claims settlement and enabling more confident decisions.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="card">
              <h3 className="text-heading-sm">Storm damage documentation</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Rapid mapping of roof and facade damage after storms. The drone reaches all
                surfaces and gives you a complete picture without personnel needing to climb.
              </p>
              <Link href="/en/services/roof-inspection" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Read more about roof inspection &rarr;
              </Link>
            </div>
            <div className="card">
              <h3 className="text-heading-sm">Moisture and water damage</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Thermal camera reveals the extent of moisture in roofs and facades. Identify
                the damage scope without destructive intervention.
              </p>
              <Link href="/en/services/facade-inspection" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Read more about facade inspection &rarr;
              </Link>
            </div>
            <div className="card">
              <h3 className="text-heading-sm">Fire damage documentation</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Safe documentation of fire-damaged buildings from above. Map the damage extent
                without exposing personnel to collapse risk.
              </p>
              <Link href="/en/services/industrial-inspection" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Read more about industrial inspection &rarr;
              </Link>
            </div>
            <div className="card">
              <h3 className="text-heading-sm">Preventive risk assessment</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Proactive inspection of insured objects to identify risks before
                damage occurs. Thermal camera reveals problems that could lead to future claims.
              </p>
              <Link href="/en/contact" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Contact us for a tailored plan &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Benefits for insurance companies"
        subtitle="Drone technology streamlines claims settlement and provides better decision-making data."
        benefits={[
          {
            title: 'Fast damage assessment',
            description:
              'The drone inspection is carried out quickly and the report is normally delivered within a couple of working days. Shorter processing time for the claim.',
            icon: 'clock',
          },
          {
            title: 'Objective documentation',
            description:
              'High-resolution images and thermal data provide an objective and detailed picture of the damage extent, without subjective assessments.',
            icon: 'camera',
          },
          {
            title: 'Hidden damage revealed',
            description:
              'Thermal camera reveals moisture, cold bridges and subsurface damage invisible during visual inspection from the ground.',
            icon: 'shield',
          },
          {
            title: 'Safe documentation',
            description:
              'No personnel need to step on damaged roofs or climb unstable structures. The drone documents everything from a safe altitude.',
            icon: 'building',
          },
          {
            title: 'Position data and timestamps',
            description:
              'All images are delivered with GPS coordinates and timestamps. The documentation is traceable and usable as supplementary evidence.',
            icon: 'file',
          },
          {
            title: 'Nationwide capacity',
            description:
              'We operate across all of Sweden and can mobilise to the damage site regardless of location.',
            icon: 'chart',
          },
        ]}
        variant="dark"
      />

      <FaqAccordion
        headline="Frequently asked questions from insurance companies"
        items={faqItems}
      />

      <CtaBand
        headline="Need fast damage documentation?"
        description="Contact us to discuss how drone inspection can streamline your claims settlement."
        ctaLabel="Contact us"
        ctaHref="/en/contact"
      />
    </>
  )
}
