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
  title: 'Thermal Inspection with Drone — IR and Infrared',
  description:
    'Reveal hidden problems with full radiometric infrared data collection. Moisture, cold bridges, insulation defects and energy losses. EASA-certified pilots.',
  path: '/en/services/thermal-inspection',
  locale: 'en',
  alternateLocalePath: '/tjanster/termisk-inspektion',
})

const faqItems = [
  {
    question: 'What is thermal inspection with drone?',
    answer:
      'A non-destructive inspection method using infrared camera from the air. The thermal camera detects temperature differences that reveal hidden problems in buildings and facilities.',
  },
  {
    question: 'What does full radiometric data collection mean?',
    answer:
      'Every pixel in the thermal image contains an exact temperature value, enabling detailed analysis and comparison rather than just colour representation.',
  },
  {
    question: 'What applications are there for thermal inspection?',
    answer:
      'Roof and facade inspection, moisture detection, insulation assessment, solar panel analysis, industrial equipment monitoring and energy audits.',
  },
  {
    question: 'What time of year gives best results?',
    answer:
      'Cooler months (autumn, winter, spring) when temperature differences between indoors and outdoors are greatest. Some applications work year-round.',
  },
  {
    question: 'Can thermal inspection replace other inspection methods?',
    answer:
      'It complements traditional methods. Thermal inspection identifies areas that may need closer physical examination.',
  },
  {
    question: 'How are results presented?',
    answer:
      'Full radiometric thermograms, RGB reference images, anomaly analysis, temperature profiles and action recommendations in a professional PDF report.',
  },
  {
    question: 'Are special preparations required before inspection?',
    answer:
      'Normally heating should be on and windows closed for best results on buildings. We provide specific guidance for each project.',
  },
  {
    question: 'Can you perform thermal inspection indoors?',
    answer:
      'Our service focuses on exterior aerial inspection with drones. For indoor thermal inspection, we can discuss your specific needs.',
  },
]

export default function ThermalInspectionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchemaEn({
              name: 'Drone Thermal Inspection',
              description:
                'Reveal hidden problems with full radiometric infrared data collection. Moisture, cold bridges, insulation defects and energy losses.',
              url: '/en/services/thermal-inspection',
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
              { name: 'Thermal Inspection', url: '/en/services/thermal-inspection' },
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
          { name: 'Thermal Inspection', url: '' },
        ]}
      />

      <Hero
        headline="Thermal Inspection with Drone — IR and Infrared"
        subheadline="Reveal hidden problems with full radiometric infrared data collection. Identify moisture, cold bridges, insulation defects and energy losses — quickly, safely and without disruption."
        ctaPrimary={{ label: 'Get a Quote', href: '/en/contact' }}
        ctaSecondary={{ label: 'How It Works', href: '/en/how-it-works' }}
      />

      <TrustBar
        items={[
          'EASA-certified pilots',
          'Fully insured',
          'All of Sweden',
          'Full radiometric IR camera',
        ]}
      />

      <BenefitsGrid
        headline="Why thermal inspection with drone?"
        benefits={[
          {
            icon: 'camera',
            title: 'Full radiometric data',
            description:
              'Every pixel contains an exact temperature value for detailed analysis and comparison.',
          },
          {
            icon: 'building',
            title: 'Wide application',
            description:
              'Roofs, facades, solar panels, industrial equipment — thermal inspection suits many needs.',
          },
          {
            icon: 'shield',
            title: 'Preventive maintenance',
            description:
              'Identify problems before they become costly repairs or cause energy losses.',
          },
          {
            icon: 'chart',
            title: 'Measurable data',
            description:
              'Exact temperature values enable objective assessment and tracking over time.',
          },
          {
            icon: 'clock',
            title: 'Quick overview',
            description:
              'Large areas are scanned in hours, providing a comprehensive thermal picture.',
          },
          {
            icon: 'file',
            title: 'Professional report',
            description:
              'Detailed PDF report with thermograms, anomaly analysis and action recommendations.',
          },
        ]}
      />

      <ProcessSteps
        headline="How thermal inspection works"
        steps={[
          {
            number: 1,
            title: 'Needs Dialogue',
            description:
              'We discuss your requirements and determine the best approach for your project.',
          },
          {
            number: 2,
            title: 'IR Flight',
            description:
              'EASA-certified pilot carries out the inspection with full radiometric IR camera.',
          },
          {
            number: 3,
            title: 'Thermal Analysis',
            description:
              'All thermal data is analysed to identify anomalies, temperature profiles and patterns.',
          },
          {
            number: 4,
            title: 'Delivery',
            description:
              'Professional report with thermograms, RGB reference images and action recommendations.',
          },
        ]}
      />

      <Deliverables
        headline="What you receive"
        items={[
          {
            title: 'Full radiometric thermograms',
            description:
              'Thermal images where every pixel contains an exact temperature value.',
          },
          {
            title: 'RGB reference images',
            description:
              'High-resolution visual photos for reference and comparison with thermal data.',
          },
          {
            title: 'Anomaly analysis',
            description:
              'All identified anomalies documented with location, severity and interpretation.',
          },
          {
            title: 'Temperature profiles',
            description:
              'Detailed temperature data along selected lines and areas for in-depth analysis.',
          },
          {
            title: 'Action recommendations',
            description:
              'Prioritised recommendations based on findings and their severity.',
          },
          {
            title: 'Digital report',
            description:
              'Professional PDF report with all data, analysis and appendices.',
          },
        ]}
      />

      <FaqAccordion
        headline="Frequently asked questions about thermal inspection"
        items={faqItems}
      />

      <CtaBand
        headline="Need a thermal inspection?"
        description="Contact us for a free quote. We carry out thermal inspections across all of Sweden."
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
              'Thermal and visual roof inspection without accessing the roof.',
          },
          {
            title: 'Moisture Inspection',
            href: '/en/services/moisture-inspection',
            description:
              'Specialised moisture detection with thermal camera.',
          },
          {
            title: 'Solar Panel Inspection',
            href: '/en/services/solar-panel-inspection',
            description:
              'Identify hotspots and defective cells in solar installations.',
          },
        ]}
      />
    </>
  )
}
