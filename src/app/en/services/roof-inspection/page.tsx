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
  title: 'Roof Inspection with Drone — Thermal Camera',
  description:
    'Professional drone roof inspection with thermal camera. Identify moisture, cold bridges and damage without stepping on the roof. EASA-certified pilots. Get a quote.',
  path: '/en/services/roof-inspection',
  locale: 'en',
  alternateLocalePath: '/tjanster/takinspektion',
})

const faqItems = [
  {
    question: 'What types of roof damage can you detect?',
    answer:
      'With thermal camera and high-resolution RGB imaging, we identify moisture damage, cold bridges, insulation defects, membrane damage, clogged drains and visible wear. Thermal images reveal issues invisible to the naked eye.',
  },
  {
    question: 'Do you need access to the roof?',
    answer:
      'No, the entire inspection is carried out from the air. No personnel need to be on the roof, which eliminates fall risk and the need for safety equipment.',
  },
  {
    question: 'How large roofs can you inspect?',
    answer:
      'We inspect everything from individual residential properties to large industrial and commercial roofs. The drone covers large areas efficiently and systematically.',
  },
  {
    question: 'When is the best time for roof inspection?',
    answer:
      'Thermal inspection works best when there is a temperature difference between indoors and outdoors — typically autumn, winter and spring. Visual inspection can be done year-round.',
  },
  {
    question: 'What is included in the report?',
    answer:
      'The report includes high-resolution aerial images, thermal images with full radiometric data, identified anomalies with georeferencing, priority classification and recommended actions.',
  },
  {
    question: 'How quickly do we get the report?',
    answer:
      'Delivery time depends on the amount of data to analyse and is stated in the quote. For urgent matters, faster delivery can be arranged.',
  },
  {
    question: 'Can roof inspection be combined with facade inspection?',
    answer:
      'Yes, we often combine roof and facade inspection in the same visit, which is more cost-effective and gives a complete picture of the building envelope.',
  },
  {
    question: 'How do I book a roof inspection?',
    answer:
      'Contact us via the form or email with information about the property. We get back to you promptly with a tailored quote.',
  },
]

export default function RoofInspectionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchemaEn({
              name: 'Drone Roof Inspection',
              description:
                'Professional roof inspection with drone and thermal camera. Identify moisture, cold bridges and damage without accessing the roof.',
              url: '/en/services/roof-inspection',
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
              { name: 'Roof Inspection', url: '/en/services/roof-inspection' },
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
          { name: 'Roof Inspection', url: '' },
        ]}
      />

      <Hero
        headline="Roof Inspection with Drone — without accessing the roof"
        subheadline="Identify moisture, cold bridges, insulation defects and membrane damage with thermal camera and high-resolution aerial images — without personnel on the roof. Faster, safer and more cost-effective than traditional methods."
        ctaPrimary={{ label: 'Get a Quote', href: '/en/contact' }}
        ctaSecondary={{ label: 'How It Works', href: '/en/how-it-works' }}
      />

      <TrustBar
        items={[
          'EASA-certified pilots',
          'Fully insured',
          'All of Sweden',
          'Full radiometric thermal camera',
        ]}
      />

      <BenefitsGrid
        headline="Why drone roof inspection?"
        benefits={[
          {
            icon: 'shield',
            title: 'No work at height',
            description:
              'The entire inspection is carried out from the air. No fall risk for personnel.',
          },
          {
            icon: 'camera',
            title: 'Thermal & visual',
            description:
              'Full radiometric thermal camera combined with high-resolution RGB for complete analysis.',
          },
          {
            icon: 'clock',
            title: 'Fast coverage',
            description:
              'Large roof areas are inspected in hours instead of days.',
          },
          {
            icon: 'chart',
            title: 'Moisture detection',
            description:
              'Thermal camera reveals moisture damage and cold bridges invisible to the naked eye.',
          },
          {
            icon: 'file',
            title: 'Cost-effective',
            description:
              'No scaffolding, cherry pickers or extensive safety equipment needed.',
          },
          {
            icon: 'building',
            title: 'Detailed report',
            description:
              'Georeferenced anomalies with priority classification and recommended actions.',
          },
        ]}
      />

      <ProcessSteps
        headline="How roof inspection works"
        steps={[
          {
            number: 1,
            title: 'Quote Request',
            description:
              'Tell us about the property — we get back to you promptly.',
          },
          {
            number: 2,
            title: 'Planning',
            description:
              'We check airspace and plan the flight. You do not need to be on site.',
          },
          {
            number: 3,
            title: 'Inspection',
            description:
              'EASA-certified pilot carries out the inspection with thermal and RGB camera.',
          },
          {
            number: 4,
            title: 'Report',
            description:
              'PDF report with images, thermal analysis and recommended actions — delivery time as stated in the quote.',
          },
        ]}
      />

      <Deliverables
        headline="What you receive"
        items={[
          {
            title: 'Aerial images',
            description:
              'High-resolution RGB photos of the entire roof surface.',
          },
          {
            title: 'Thermal images',
            description:
              'Full radiometric thermograms showing temperature variations.',
          },
          {
            title: 'Anomaly map',
            description:
              'All findings georeferenced and marked on the roof plan.',
          },
          {
            title: 'Priority classification',
            description:
              'Damage classified by severity and urgency.',
          },
          {
            title: 'Action plan',
            description:
              'Recommended measures for each identified issue.',
          },
          {
            title: 'Digital report',
            description:
              'Professional PDF report with all data and analysis.',
          },
        ]}
      />

      <FaqAccordion
        headline="Frequently asked questions about roof inspection"
        items={faqItems}
      />

      <CtaBand
        headline="Need a roof inspection?"
        description="Contact us for a free quote with a clear delivery time."
        ctaLabel="Get a Quote"
        ctaHref="/en/contact"
      />

      <RelatedServices
        headline="Related services"
        services={[
          {
            title: 'Facade Inspection',
            href: '/en/services/facade-inspection',
            description:
              'Combine with facade inspection for a complete building envelope analysis.',
          },
          {
            title: 'Moisture Inspection',
            href: '/en/services/moisture-inspection',
            description:
              'Specialised moisture detection with thermal camera.',
          },
          {
            title: 'Thermal Inspection',
            href: '/en/services/thermal-inspection',
            description:
              'Full radiometric thermal analysis for all types of buildings.',
          },
        ]}
      />
    </>
  )
}
