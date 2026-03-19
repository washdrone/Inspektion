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
  title: 'Drone Inspection for Industry',
  description:
    'Industrial drone inspection of tanks, towers, pipelines and hard-to-reach facilities. Minimise downtime. EASA-certified pilots with ex-classified zone experience.',
  path: '/en/industries/industrial',
  locale: 'en',
  alternateLocalePath: '/branscher/industri',
})

const faqItems = [
  {
    question: 'Can you inspect in ex-classified zones?',
    answer:
      'Yes, we have experience working in and around explosion-classified environments. Contact us to discuss the conditions and safety requirements for your specific facility.',
  },
  {
    question: 'How do you minimise downtime during inspection?',
    answer:
      'The drone inspection is carried out without disrupting ongoing production. We do not need to erect scaffolding, cordon off areas or shut down processes. Most objects can be inspected while the facility is in operation.',
  },
  {
    question: 'What types of industrial objects do you inspect?',
    answer:
      'We inspect tanks, reactors, chimneys, flare stacks, pipe racks, cooling water systems, production hall roofs and other hard-to-reach structures. Contact us to describe your object.',
  },
  {
    question: 'What is included in the inspection report?',
    answer:
      'The report contains high-resolution RGB images, thermal images with analysis, identified anomalies with position data and recommended actions. We can adapt the report format to your internal requirements.',
  },
  {
    question: 'How do you handle safety at industrial sites?',
    answer:
      'We follow your internal safety procedures and always carry out a risk assessment before flight. Our pilots are EASA-certified and we are insured. We coordinate with your operations staff for safe execution.',
  },
  {
    question: 'Can thermal camera detect insulation deficiencies on pipelines?',
    answer:
      'Yes, thermal inspection is an effective method for identifying inadequate insulation, leaks and temperature anomalies on pipelines and process vessels without needing to open or dismantle anything.',
  },
  {
    question: 'How far in advance do we need to book?',
    answer:
      'We recommend contacting us well in advance, especially if the inspection needs to be coordinated with planned shutdowns or turnarounds. In most cases, we can carry out assignments at short notice.',
  },
]

export default function IndustrialPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchemaEn({
              name: 'Industrial Drone Inspection',
              description:
                'Professional drone inspection of industrial facilities, tanks, towers and pipelines. Thermal and visual inspection without downtime.',
              url: '/en/industries/industrial',
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
          { name: 'Industrial', url: '/en/industries/industrial' },
        ]}
      />

      <Hero
        headline="Drone Inspection for Process Industry"
        subheadline="Inspect tanks, chimneys, pipe racks and hard-to-reach structures without scaffolding and without downtime. We have experience with ex-classified zones and work according to your safety procedures."
        ctaPrimary={{ label: 'Request a quote', href: '/en/contact' }}
        ctaSecondary={{ label: 'Industrial inspection', href: '/en/services/industrial-inspection' }}
        stats={[
          { value: '0', label: 'Downtime required' },
          { value: '0', label: 'Work at height' },
          { value: 'All of', label: 'Sweden' },
          { value: 'EASA', label: 'Certified pilots' },
        ]}
      />

      <TrustBar
        items={[
          'EASA-certified remote pilots',
          'Insured operations',
          'Ex-classified zone experience',
          'Thermal & visual inspection',
        ]}
      />

      {/* Use cases section */}
      <section className="section-padding">
        <div className="container-content">
          <h2 className="text-heading-lg sm:text-display text-center">
            Challenges we solve for industry
          </h2>
          <p className="mt-4 text-body-lg text-dark-500 text-center max-w-2xl mx-auto">
            Drone inspection replaces hazardous and time-consuming manual inspections
            of hard-to-reach industrial objects.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="card">
              <h3 className="text-heading-sm">Tank and vessel inspection</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Visual and thermal inspection of external surfaces on tanks and vessels.
                Identify corrosion, deformation, insulation deficiencies and leakage indicators.
              </p>
              <Link href="/en/services/industrial-inspection" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Read more about industrial inspection &rarr;
              </Link>
            </div>
            <div className="card">
              <h3 className="text-heading-sm">Chimneys and flare stacks</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Inspection of tall structures without climbing or scaffolding. We document
                surface damage, cracks and joint defects with high-resolution camera.
              </p>
              <Link href="/en/services/facade-inspection" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Read more about facade inspection &rarr;
              </Link>
            </div>
            <div className="card">
              <h3 className="text-heading-sm">Production hall roofs</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Thermal inspection of industrial building roofs to identify moisture ingress,
                insulation deficiencies and waterproofing damage.
              </p>
              <Link href="/en/services/roof-inspection" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Read more about roof inspection &rarr;
              </Link>
            </div>
            <div className="card">
              <h3 className="text-heading-sm">Pipe racks and pipeline corridors</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Thermal and visual inspection of pipelines and supporting structures. Identify
                insulation deficiencies, temperature anomalies and mechanical damage.
              </p>
              <Link href="/en/contact" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Contact us for guidance &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Benefits for industrial facilities"
        subtitle="Drone technology reduces risk, cost and downtime during inspections."
        benefits={[
          {
            title: 'Minimal downtime',
            description:
              'The inspection is carried out while the facility is in operation. No production losses or costly shutdowns required.',
            icon: 'clock',
          },
          {
            title: 'Eliminated height risk',
            description:
              'No personnel need to climb on tanks, chimneys or other tall structures. The entire inspection is carried out from a safe position.',
            icon: 'shield',
          },
          {
            title: 'Ex-classified zone experience',
            description:
              'We have experience working in and around explosion-classified environments and adapt the assignment to your safety requirements.',
            icon: 'building',
          },
          {
            title: 'Thermal analysis',
            description:
              'Industry-leading thermal camera identifies insulation deficiencies, overheating and leaks invisible during visual inspection.',
            icon: 'camera',
          },
          {
            title: 'Detailed documentation',
            description:
              'Reports with high-resolution images, thermograms and position data that can be integrated into your maintenance system.',
            icon: 'file',
          },
          {
            title: 'Cost-effective',
            description:
              'No scaffolding, mobile cranes or industrial rope access needed. The drone reaches hard-to-access locations at a fraction of the cost.',
            icon: 'chart',
          },
        ]}
        variant="dark"
      />

      <FaqAccordion
        headline="Frequently asked questions from industry"
        items={faqItems}
      />

      <CtaBand
        headline="Need to inspect your facility?"
        description="Contact us to discuss your assignment. We adapt the inspection to your safety requirements and needs."
        ctaLabel="Request a quote"
        ctaHref="/en/contact"
      />
    </>
  )
}
