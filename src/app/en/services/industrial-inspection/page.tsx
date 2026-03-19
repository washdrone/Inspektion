import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { serviceSchemaEn } from '@/lib/schema-en'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Hero } from '@/components/Hero'
import { TrustBar } from '@/components/TrustBar'
import { BenefitsGrid } from '@/components/BenefitsGrid'
import { ProcessSteps } from '@/components/ProcessSteps'
import { Deliverables } from '@/components/Deliverables'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { RelatedServices } from '@/components/RelatedServices'

export const metadata: Metadata = createMetadata({
  title: 'Industrial Inspection with Drone — Facilities Safely',
  description:
    'Inspect chimneys, tanks, pipelines and hard-to-reach industrial objects with drone. Thermal and visual analysis. EASA-certified pilots with ex-zone experience.',
  path: '/en/services/industrial-inspection',
  locale: 'en',
  alternateLocalePath: '/tjanster/industriinspektion',
})

const faqItems = [
  {
    question: 'What industrial objects can be inspected with drone?',
    answer:
      'Chimneys, cooling towers, storage tanks, silos, pipelines, production halls, bridges and other hard-to-reach structures.',
  },
  {
    question: 'Can you fly in ex-classified zones?',
    answer:
      'Yes, we have experience operating in ex-classified environments and follow applicable safety requirements.',
  },
  {
    question: 'Does production need to stop during inspection?',
    answer:
      'In most cases, no. Drone inspection minimises production downtime compared to traditional methods.',
  },
  {
    question: 'What types of damage and problems can you identify?',
    answer:
      'Corrosion, cracks, deformation, thermal anomalies, insulation defects, coating damage and structural changes.',
  },
  {
    question: 'How do you handle safety on the industrial site?',
    answer:
      'We follow site-specific safety procedures, conduct risk assessments and coordinate with facility management.',
  },
  {
    question: 'Can results be integrated into our maintenance system?',
    answer:
      'Yes, we deliver data in formats compatible with common maintenance management systems.',
  },
  {
    question: 'How often should industrial objects be inspected?',
    answer:
      'Frequency depends on the object, regulations and risk assessment. We can help establish an appropriate inspection schedule.',
  },
  {
    question: 'Can you inspect confidential facilities?',
    answer:
      'Yes, we sign NDAs and follow your security protocols.',
  },
]

export default function IndustrialInspectionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchemaEn({
              name: 'Industrial Inspection with Drone',
              description:
                'Inspect chimneys, tanks, pipelines and hard-to-reach industrial objects with drone. Thermal and visual analysis. EASA-certified pilots with ex-zone experience.',
              url: '/en/services/industrial-inspection',
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/en' },
              { name: 'Services', url: '/en' },
              { name: 'Industrial Inspection', url: '/en/services/industrial-inspection' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(faqItems)),
        }}
      />

      <Breadcrumbs
        items={[
          { name: 'Home', url: '/en' },
          { name: 'Industrial Inspection', url: '' },
        ]}
      />

      <Hero
        headline="Industrial Inspection with Drone — Facilities Safely"
        subheadline="Inspect chimneys, tanks, pipelines and hard-to-reach industrial objects with drone. Thermal and visual analysis by EASA-certified pilots with experience in ex-classified environments."
        ctaPrimary={{ label: 'Get a Quote', href: '/en/contact' }}
        ctaSecondary={{ label: 'See How It Works', href: '#process' }}
      />

      <TrustBar
        items={[
          'EASA-certified pilots',
          'Fully insured',
          'Ex-classified zone experience',
          'All of Sweden',
        ]}
      />

      <BenefitsGrid
        headline="Why industrial drone inspection?"
        benefits={[
          {
            icon: 'shield',
            title: 'Increased personnel safety',
            description:
              'No need for rope access, scaffolding or confined space entry. The drone inspects from a safe distance.',
          },
          {
            icon: 'clock',
            title: 'Minimal production downtime',
            description:
              'Drone inspection is fast and in most cases does not require production to stop.',
          },
          {
            icon: 'camera',
            title: 'Visual and thermal analysis',
            description:
              'High-resolution images and thermal data combined for comprehensive condition assessment.',
          },
          {
            icon: 'building',
            title: 'Ex-classified environments',
            description:
              'We have experience operating in ex-classified zones and follow applicable safety requirements.',
          },
          {
            icon: 'chart',
            title: 'Condition assessment',
            description:
              'Systematic documentation and classification of damage for maintenance planning.',
          },
          {
            icon: 'file',
            title: 'Customised reports',
            description:
              'Reports adapted to your requirements and compatible with maintenance management systems.',
          },
        ]}
      />

      <ProcessSteps
        headline="How industrial inspection works"
        steps={[
          {
            number: 1,
            title: 'Site visit & risk assessment',
            description:
              'We visit the site, review safety requirements and plan the inspection in coordination with facility management.',
          },
          {
            number: 2,
            title: 'Inspection',
            description:
              'EASA-certified pilot carries out the inspection with visual and thermal camera.',
          },
          {
            number: 3,
            title: 'Analysis & assessment',
            description:
              'All data is analysed to identify damage, anomalies and areas requiring attention.',
          },
          {
            number: 4,
            title: 'Report & follow-up',
            description:
              'You receive a detailed report with damage classification, condition assessment and recommended actions.',
          },
        ]}
      />

      <Deliverables
        headline="What you receive"
        items={[
          {
            title: 'High-resolution inspection images',
            description:
              'Detailed visual documentation of all inspected surfaces and structures.',
          },
          {
            title: 'Thermal analyses',
            description:
              'Full radiometric thermal images revealing temperature anomalies and insulation defects.',
          },
          {
            title: 'Damage classification',
            description:
              'All findings categorised by type, severity and urgency.',
          },
          {
            title: 'Condition assessment',
            description:
              'Overall assessment of the inspected object with comparison to previous inspections where available.',
          },
          {
            title: 'Action recommendations',
            description:
              'Proposed maintenance and repair measures, prioritised by urgency and risk.',
          },
          {
            title: 'Digital report',
            description:
              'Professional report in PDF format with summary, detailed findings and appendices.',
          },
        ]}
      />

      <FaqAccordion headline="Frequently asked questions about industrial inspection" items={faqItems} />

      <CtaBand
        headline="Need an industrial inspection?"
        description="Contact us for a free quote. We inspect facilities across all of Sweden."
        ctaLabel="Get a Quote"
        ctaHref="/en/contact"
      />

      <RelatedServices
        headline="Related services"
        services={[
          {
            title: 'Thermal Inspection',
            href: '/en/services/thermal-inspection',
            description:
              'Full radiometric thermal analysis for buildings and industrial facilities.',
          },
          {
            title: '3D Mapping',
            href: '/en/services/3d-mapping',
            description:
              'Create precise 3D models, orthophotos and point clouds of industrial sites.',
          },
          {
            title: 'Wind Turbine Inspection',
            href: '/en/services/wind-turbine-inspection',
            description:
              'Inspect rotor blades, tower and nacelle without rope access or climbing.',
          },
        ]}
      />
    </>
  )
}
