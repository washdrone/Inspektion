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
  title: 'Facade Inspection with Drone — Without Scaffolding',
  description:
    'Professional facade inspection with drone. Document cracks, moisture damage and cold bridges without scaffolding. EASA-certified pilots.',
  path: '/en/services/facade-inspection',
  locale: 'en',
  alternateLocalePath: '/tjanster/fasadinspektion',
})

const faqItems = [
  {
    question: 'What types of facade damage can you detect?',
    answer:
      'Cracks, plaster detachment, moisture damage, cold bridges, mould, discoloration and structural deformations — both visible and thermal anomalies.',
  },
  {
    question: 'How tall buildings can you inspect?',
    answer:
      'We inspect buildings of all heights without scaffolding or cherry pickers. The drone reaches all parts of the facade safely and efficiently.',
  },
  {
    question: 'Does drone inspection replace the need for scaffolding?',
    answer:
      'For inspection and documentation, yes. If repair is needed, scaffolding may still be required, but the inspection data shows exactly where work is needed.',
  },
  {
    question: 'Can you inspect facades in densely built areas?',
    answer:
      'Yes, our EASA-certified pilots are trained for operations in populated areas.',
  },
  {
    question: 'What is included in the report?',
    answer:
      'High-resolution images, thermal images with full radiometric data, damage map, action plan and a complete digital report.',
  },
  {
    question: 'How long does a facade inspection take?',
    answer:
      'Typically 1–4 hours depending on building size and complexity. The report is delivered within 48 hours.',
  },
  {
    question: 'Can facade inspection be combined with roof inspection?',
    answer:
      'Yes, we often combine both in the same visit for cost efficiency and a complete picture of the building envelope.',
  },
  {
    question: 'How do I book a facade inspection?',
    answer:
      'Contact us via the form or email. We respond within 24 hours with a tailored quote.',
  },
]

export default function FacadeInspectionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchemaEn({
              name: 'Drone Facade Inspection',
              description:
                'Professional facade inspection with drone. Document cracks, moisture damage and cold bridges without scaffolding.',
              url: '/en/services/facade-inspection',
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
              { name: 'Facade Inspection', url: '/en/services/facade-inspection' },
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
          { name: 'Facade Inspection', url: '' },
        ]}
      />

      <Hero
        headline="Facade Inspection with Drone — without scaffolding"
        subheadline="Document cracks, moisture damage, cold bridges and structural issues with high-resolution aerial images and thermal camera — without scaffolding or cherry pickers. Safer, faster and more cost-effective."
        ctaPrimary={{ label: 'Get a Quote', href: '/en/contact' }}
        ctaSecondary={{ label: 'How It Works', href: '/en/how-it-works' }}
      />

      <TrustBar
        items={[
          'EASA-certified pilots',
          'Fully insured',
          'All of Sweden',
          'No scaffolding required',
        ]}
      />

      <BenefitsGrid
        headline="Why drone facade inspection?"
        benefits={[
          {
            icon: 'building',
            title: 'All building types',
            description:
              'From residential buildings to high-rise commercial properties — we inspect facades of all types and heights.',
          },
          {
            icon: 'shield',
            title: 'No scaffolding needed',
            description:
              'The entire inspection is carried out from the air, eliminating the cost and logistics of scaffolding.',
          },
          {
            icon: 'camera',
            title: 'Detailed close-ups',
            description:
              'High-resolution images capture cracks, plaster damage and other defects in fine detail.',
          },
          {
            icon: 'chart',
            title: 'Thermal analysis',
            description:
              'Full radiometric thermal camera reveals cold bridges, moisture and insulation defects invisible to the naked eye.',
          },
          {
            icon: 'clock',
            title: 'Time-efficient',
            description:
              'A complete facade inspection takes hours instead of days, with minimal disruption to occupants.',
          },
          {
            icon: 'file',
            title: 'Decision support',
            description:
              'Detailed reports with damage classification and action recommendations support informed maintenance decisions.',
          },
        ]}
      />

      <ProcessSteps
        headline="How facade inspection works"
        steps={[
          {
            number: 1,
            title: 'Needs Analysis',
            description:
              'We discuss your requirements and plan the inspection based on the building and its surroundings.',
          },
          {
            number: 2,
            title: 'Inspection',
            description:
              'EASA-certified pilot carries out the inspection with high-resolution and thermal camera.',
          },
          {
            number: 3,
            title: 'Analysis',
            description:
              'All images and thermal data are analysed to identify damage, moisture and anomalies.',
          },
          {
            number: 4,
            title: 'Reporting',
            description:
              'You receive a professional report with images, thermal analysis and recommended actions within 48 hours.',
          },
        ]}
      />

      <Deliverables
        headline="What you receive"
        items={[
          {
            title: 'Facade images in high resolution',
            description:
              'Detailed RGB photos of all facade surfaces, including close-ups of identified damage.',
          },
          {
            title: 'Thermograms',
            description:
              'Full radiometric thermal images showing temperature variations and anomalies.',
          },
          {
            title: 'Damage map',
            description:
              'All findings mapped and classified by location and severity.',
          },
          {
            title: 'Action plan',
            description:
              'Recommended measures for each identified issue, prioritised by urgency.',
          },
          {
            title: 'Digital report',
            description:
              'Professional PDF report with summary, detailed analysis and appendices.',
          },
          {
            title: 'Raw material',
            description:
              'Access to all original images and thermal data for your own analysis.',
          },
        ]}
      />

      <FaqAccordion
        headline="Frequently asked questions about facade inspection"
        items={faqItems}
      />

      <CtaBand
        headline="Need a facade inspection?"
        description="Contact us for a free quote. Response within 24 hours, report within 48 hours."
        ctaLabel="Get a Quote"
        ctaHref="/en/contact"
      />

      <RelatedServices
        headline="Related services"
        services={[
          {
            title: 'Roof Inspection',
            href: '/en/services/roof-inspection',
            description:
              'Combine with roof inspection for a complete building envelope analysis.',
          },
          {
            title: 'Thermal Inspection',
            href: '/en/services/thermal-inspection',
            description:
              'Full radiometric thermal analysis for all types of buildings.',
          },
          {
            title: 'Moisture Inspection',
            href: '/en/services/moisture-inspection',
            description:
              'Specialised moisture detection with thermal camera.',
          },
        ]}
      />
    </>
  )
}
