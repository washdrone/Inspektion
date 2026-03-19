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
  title: 'Moisture Inspection with Drone — Find Hidden Leaks',
  description:
    'Locate moisture infiltration, leaks and water accumulation in roofs and facades with thermal camera from the air. Non-destructive method. EASA-certified pilots.',
  path: '/en/services/moisture-inspection',
  locale: 'en',
  alternateLocalePath: '/tjanster/fuktinspektion',
})

const faqItems = [
  {
    question: 'How can a thermal camera detect moisture?',
    answer:
      'Moist materials have different thermal properties than dry ones. They retain or release heat differently, creating temperature differences visible on thermal images.',
  },
  {
    question: 'What types of moisture damage can you detect?',
    answer:
      'Water infiltration, accumulated moisture in roof insulation, leaking membranes, condensation areas and cold bridges causing moisture.',
  },
  {
    question: 'Does moisture inspection work on all building materials?',
    answer:
      'The method works on most building materials. Results are best on flat roofs with insulation. We assess suitability for each project.',
  },
  {
    question: 'When should moisture inspection be done?',
    answer:
      'Best results when there is a temperature difference between inside and outside, and after a period without rain so surface water doesn\'t interfere.',
  },
  {
    question: 'Can drones find moisture not visible from inside?',
    answer:
      'Yes, thermal cameras detect moisture in roof constructions that has not yet caused visible damage indoors.',
  },
  {
    question: 'Do we need to supplement with other moisture measurements?',
    answer:
      'Thermal inspection identifies areas of concern. For verification, physical moisture measurement can complement the findings. We provide clear guidance.',
  },
  {
    question: 'Can you inspect large property portfolios?',
    answer:
      'Yes, drones are ideal for portfolio inspections as they cover large areas efficiently and systematically.',
  },
  {
    question: 'How does moisture inspection differ from standard roof inspection?',
    answer:
      'Moisture inspection focuses specifically on identifying water-related issues using optimised thermal analysis techniques and timing.',
  },
]

export default function MoistureInspectionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchemaEn({
              name: 'Moisture Inspection with Drone',
              description:
                'Locate moisture infiltration, leaks and water accumulation in roofs and facades with thermal camera from the air. Non-destructive method.',
              url: '/en/services/moisture-inspection',
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
              { name: 'Moisture Inspection', url: '/en/services/moisture-inspection' },
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
          { name: 'Moisture Inspection', url: '' },
        ]}
      />

      <Hero
        headline="Moisture Inspection with Drone — Find Hidden Leaks"
        subheadline="Locate moisture infiltration, leaks and water accumulation in roofs and facades with thermal camera from the air. Our EASA-certified pilots map moisture problems quickly and without opening the construction."
        ctaPrimary={{ label: 'Get a Quote', href: '/en/contact' }}
        ctaSecondary={{ label: 'See How It Works', href: '#process' }}
      />

      <TrustBar
        items={[
          'EASA-certified pilots',
          'Fully insured',
          'All of Sweden',
          'Thermal moisture detection',
        ]}
      />

      <BenefitsGrid
        headline="Why moisture inspection with drone?"
        benefits={[
          {
            icon: 'camera',
            title: 'Hidden leaks revealed',
            description:
              'Thermal camera reveals moisture invisible to the naked eye that has not yet penetrated to the interior.',
          },
          {
            icon: 'shield',
            title: 'Non-destructive method',
            description:
              'No demolition or sampling required to locate moisture areas. The construction is left intact.',
          },
          {
            icon: 'chart',
            title: 'Moisture area mapping',
            description:
              'Thermograms provide a visual map of moisture distribution, facilitating action planning.',
          },
          {
            icon: 'clock',
            title: 'Fast identification',
            description:
              'Large roof surfaces and facades are scanned in a short time. Moisture areas are identified during the flight.',
          },
          {
            icon: 'building',
            title: 'Management-efficient',
            description:
              'Inspect entire property portfolios systematically and prioritise maintenance based on data.',
          },
          {
            icon: 'file',
            title: 'Basis for action',
            description:
              'The report provides a clear basis for planning repairs and following up after completed actions.',
          },
        ]}
      />

      <ProcessSteps
        headline="How a moisture inspection is carried out"
        steps={[
          {
            number: 1,
            title: 'Pre-planning',
            description:
              'We assess the property, weather conditions and select the optimal time for clear thermal contrasts.',
          },
          {
            number: 2,
            title: 'Thermal flight',
            description:
              'The drone flies over the roof and facade with thermal camera, collecting full radiometric data.',
          },
          {
            number: 3,
            title: 'Moisture analysis',
            description:
              'Thermograms are analysed to identify and delineate areas with moisture anomalies.',
          },
          {
            number: 4,
            title: 'Report',
            description:
              'You receive a report with moisture map, thermograms, assessment and recommended actions.',
          },
        ]}
      />

      <Deliverables
        headline="What is included in the delivery"
        items={[
          {
            title: 'Moisture map',
            description:
              'Visual map with marked moisture areas and their extent on roof and facade.',
          },
          {
            title: 'Thermograms',
            description:
              'Full radiometric thermal images with temperature data for detailed post-analysis.',
          },
          {
            title: 'RGB reference images',
            description:
              'Visual images to link thermal findings to specific locations on the building.',
          },
          {
            title: 'Risk assessment',
            description:
              'Classification of moisture areas by severity and risk of structural damage.',
          },
          {
            title: 'Action recommendations',
            description:
              'Proposed repairs and preventive measures, prioritised by urgency.',
          },
          {
            title: 'Digital report',
            description:
              'Complete inspection report in PDF format with summary and detailed appendices.',
          },
        ]}
      />

      <FaqAccordion headline="Frequently asked questions about moisture inspection" items={faqItems} />

      <CtaBand
        headline="Find moisture problems before they grow"
        description="Book a moisture inspection with drone — contact us for a quote."
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
              'Complete roof inspection combining visual and thermal analysis.',
          },
          {
            title: 'Thermal Inspection',
            href: '/en/services/thermal-inspection',
            description:
              'General infrared inspection to find energy leaks, electrical faults and other hidden problems.',
          },
          {
            title: 'Facade Inspection',
            href: '/en/services/facade-inspection',
            description:
              'Inspection of facades to identify cracks, render detachment and moisture penetration.',
          },
        ]}
      />
    </>
  )
}
