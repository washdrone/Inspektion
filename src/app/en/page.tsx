import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { faqSchema } from '@/lib/schema'
import { Hero } from '@/components/Hero'
import { TrustBar } from '@/components/TrustBar'
import { UseCaseCards } from '@/components/UseCaseCards'
import { BenefitsGrid } from '@/components/BenefitsGrid'
import { ProcessSteps } from '@/components/ProcessSteps'
import { Testimonials } from '@/components/Testimonials'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'

export const metadata: Metadata = createMetadata({
  title: 'SurveyDrone | Drone Inspection Sweden — Visual & Thermal',
  description:
    'Professional drone inspection across Sweden with high-resolution RGB and thermal cameras. Roofs, facades, solar panels and industry — analysed reports with recommended actions. EASA-certified pilots. Get a quote.',
  path: '/en',
  locale: 'en',
  alternateLocalePath: '/',
})

const homeFaqItems = [
  {
    question: 'How does drone inspection with thermal camera work?',
    answer: 'We fly a commercial inspection-class UAV equipped with an industry-leading thermal camera and a high-resolution RGB camera. The thermal camera identifies moisture, cold bridges and damage invisible to the naked eye through full radiometric data collection. The entire object is systematically documented and you receive a detailed, analysed report — delivery time is stated in the quote.',
  },
  {
    question: 'How much does drone inspection cost?',
    answer: 'The price depends on the size of the object, type of inspection and location. Contact us for a free quote tailored to your needs. See our pricing guide for more information about what affects the price.',
  },
  {
    question: 'How long does a roof inspection take?',
    answer: 'Time on site depends on the size and complexity of the object — a few hours is often enough. The material is then analysed, and the report delivery time is stated in the quote.',
  },
  {
    question: 'Do I need to be on site during the inspection?',
    answer: 'No, you do not need to be on site. We handle airspace control, planning and execution independently. You can follow the inspection in real time via a secure link if you wish.',
  },
  {
    question: 'What is included in the inspection report?',
    answer: 'The report contains high-resolution aerial images, thermal images with full radiometric data, identified anomalies with georeferencing, priority classification and recommended actions.',
  },
  {
    question: 'What is PDRA S-01 and why is it important?',
    answer: 'PDRA S-01 is a European standard scenario for drone operations in populated areas. It sets requirements for pilot training, operational procedures and risk assessment — ensuring a safe and professional inspection.',
  },
  {
    question: 'How quickly will the report be delivered?',
    answer: 'Delivery time depends on the scope of the assignment and the amount of data to analyse — you always get a clear delivery time in the quote, and urgent matters can be prioritised.',
  },
  {
    question: 'Is it possible to inspect during winter?',
    answer: 'Yes, thermal inspection often works better in cooler conditions because temperature differences between indoors and outdoors become clearer. We adjust the flight time according to weather and light conditions.',
  },
  {
    question: 'Can drones detect moisture in roofs?',
    answer: 'Yes, with a full radiometric thermal camera we identify moisture accumulations and cold bridges that are not visible to the naked eye. Thermal inspection is one of the most effective methods for detecting moisture problems without destructive sampling.',
  },
  {
    question: 'How do you find hotspots in solar panels with drones?',
    answer: 'The thermal camera shows temperature differences in solar panels. Defective cells, dirty surfaces or electrical faults generate abnormal heat (hotspots) that are clearly visible in thermal images taken from the air.',
  },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(homeFaqItems)) }}
      />

      <Hero
        headline="Visual and Thermal Drone Inspection — All of Sweden"
        subheadline="SurveyDrone documents roofs, facades, solar panels and industrial facilities with high-resolution RGB and full radiometric thermal cameras — and delivers analysed reports with prioritised recommendations."
        ctaPrimary={{ label: 'Get a Quote', href: '/en/contact' }}
        ctaSecondary={{ label: 'How It Works', href: '/en/how-it-works' }}
        stats={[
          { value: 'All of', label: 'Sweden' },
          { value: 'RGB + IR', label: 'Visual & thermal data' },
          { value: 'EASA', label: 'Certified pilots' },
          { value: '0', label: 'Work at height' },
        ]}
      />

      <TrustBar
        items={[
          'EASA-certified remote pilots',
          'Fully insured',
          'Full radiometric thermal camera',
          'RTK/GNSS positioning',
        ]}
      />

      <UseCaseCards
        headline="Services tailored to your needs"
        subtitle="Choose the inspection that suits your property, facility or industry."
        useCases={[
          {
            title: 'Roof Inspection',
            description: 'Identify damage, moisture and cold bridges with thermal camera — without stepping on the roof.',
            href: '/en/services/roof-inspection',
            icon: '🏠',
          },
          {
            title: 'Facade Inspection',
            description: 'Document cracks, moisture and damage on building facades without scaffolding or cherry pickers.',
            href: '/en/services/facade-inspection',
            icon: '🏢',
          },
          {
            title: 'Solar Panel Inspection',
            description: 'Find hotspots, defective panels and performance issues with thermal analysis from the air.',
            href: '/en/services/solar-panel-inspection',
            icon: '☀️',
          },
          {
            title: 'Thermal Inspection',
            description: 'Full radiometric data collection that reveals hidden damage in buildings and facilities.',
            href: '/en/services/thermal-inspection',
            icon: '🌡️',
          },
          {
            title: 'Industrial Inspection',
            description: 'Inspect tanks, towers, pipelines and hard-to-reach facilities without downtime.',
            href: '/en/services/industrial-inspection',
            icon: '🏭',
          },
          {
            title: '3D Mapping',
            description: 'Orthophotos, 3D models and photogrammetry for measurement and documentation.',
            href: '/en/services/3d-mapping',
            icon: '📐',
          },
        ]}
      />

      <BenefitsGrid
        headline="Why choose SurveyDrone?"
        benefits={[
          {
            title: 'Thermal & visual inspection',
            description: 'Full radiometric thermal camera combined with high-resolution RGB for complete analysis of hidden and visible damage.',
            icon: 'camera',
          },
          {
            title: 'Reduced workplace risk',
            description: 'No personnel need to work at heights or in hazardous environments.',
            icon: 'shield',
          },
          {
            title: 'Faster execution',
            description: 'An inspection that previously required days of scaffolding can often be completed in hours.',
            icon: 'clock',
          },
          {
            title: 'Lower cost',
            description: 'No need for scaffolding, cherry pickers or extensive safety equipment.',
            icon: 'chart',
          },
          {
            title: 'Certified quality',
            description: 'EASA-certified pilots, fully insured operations and experience in ex-classified zones.',
            icon: 'file',
          },
          {
            title: 'Minimal disruption',
            description: 'The inspection is carried out from the air without disturbing operations in the building or facility.',
            icon: 'building',
          },
        ]}
      />

      <ProcessSteps
        headline="How it works"
        steps={[
          {
            number: 1,
            title: 'Quote Request',
            description: 'Describe your needs — we get back to you promptly with a tailored quote.',
          },
          {
            number: 2,
            title: 'Planning',
            description: 'We check airspace and plan the flight. You do not need to be on site.',
          },
          {
            number: 3,
            title: 'Flight',
            description: 'EASA-certified pilot conducts the inspection with RGB and thermal cameras.',
          },
          {
            number: 4,
            title: 'Analysis',
            description: 'All anomalies are georeferenced and priority-classified with full radiometric data.',
          },
          {
            number: 5,
            title: 'Report',
            description: 'Professional PDF report with images, analyses and recommended actions — delivery time as stated in the quote.',
          },
        ]}
      />

      <Testimonials
        testimonials={[
          {
            quote: 'We inspected the roofs of several properties in a short time instead of weeks. The report was clear and gave us good decision support for planned maintenance.',
            name: 'Technical Manager',
            role: 'Property Management',
            company: '',
          },
          {
            quote: 'The drone inspection saved us both time and money. No scaffolding, no risk for staff and we got the images quickly.',
            name: 'Project Manager',
            role: 'Construction Industry',
            company: '',
          },
          {
            quote: 'Thanks to thermal drone inspection, we found defective panels that we would never have discovered from the ground.',
            name: 'Operations Manager',
            role: 'Energy Sector',
            company: '',
          },
        ]}
      />

      <FaqAccordion
        headline="Frequently asked questions about drone inspection"
        items={homeFaqItems}
      />

      <CtaBand
        headline="Ready to streamline your inspections?"
        description="Contact us for a free quote with a clear delivery time."
        ctaLabel="Get a Quote"
        ctaHref="/en/contact"
      />
    </>
  )
}
