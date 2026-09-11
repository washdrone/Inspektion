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
  title: 'Solar Panel Inspection with Drone and Thermal Camera',
  description:
    'Maximise energy production by identifying hotspots, defective cells and performance issues with thermal drone inspection. EASA-certified pilots.',
  path: '/en/services/solar-panel-inspection',
  locale: 'en',
  alternateLocalePath: '/tjanster/solcellsinspektion',
})

const faqItems = [
  {
    question: 'How does thermal inspection of solar panels work?',
    answer:
      'The thermal camera detects temperature anomalies in individual cells. Defective cells, dirty surfaces or electrical faults generate abnormal heat visible in thermal images.',
  },
  {
    question: 'What types of faults can you find?',
    answer:
      'Hotspots, defective cells, delamination, micro-cracks, diode failures, shading issues and connection problems.',
  },
  {
    question: 'Must the solar panels be operating during inspection?',
    answer:
      'Yes, ideally panels should be under load with good solar irradiation for the clearest thermal signatures.',
  },
  {
    question: 'How large installations can you inspect?',
    answer:
      'From individual rooftop systems to large-scale solar parks. Drones cover large areas efficiently.',
  },
  {
    question: 'How often should solar installations be inspected?',
    answer:
      'Annually recommended for optimal performance. More frequent if performance drops.',
  },
  {
    question: 'Can inspection show how much production we are losing?',
    answer:
      'Thermal data identifies underperforming panels. Combined with system data, this can estimate production losses.',
  },
  {
    question: 'Does it work on all types of solar panels?',
    answer:
      'Yes, thermal inspection works on monocrystalline, polycrystalline and thin-film panels.',
  },
  {
    question: 'What does a solar panel inspection cost?',
    answer:
      'Price depends on installation size and location. Contact us for a free quote.',
  },
]

export default function SolarPanelInspectionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchemaEn({
              name: 'Drone Solar Panel Inspection',
              description:
                'Maximise energy production by identifying hotspots, defective cells and performance issues with thermal drone inspection.',
              url: '/en/services/solar-panel-inspection',
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
              { name: 'Solar Panel Inspection', url: '/en/services/solar-panel-inspection' },
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
          { name: 'Solar Panel Inspection', url: '' },
        ]}
      />

      <Hero
        headline="Solar Panel Inspection with Drone and Thermal Camera"
        subheadline="Maximise energy production by identifying hotspots, defective cells and performance issues. Thermal drone inspection covers large installations quickly and without disruption."
        ctaPrimary={{ label: 'Get a Quote', href: '/en/contact?service=solar-panel-inspection' }}
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
        headline="Why drone solar panel inspection?"
        benefits={[
          {
            icon: 'chart',
            title: 'Thermal hotspot detection',
            description:
              'Full radiometric thermal camera identifies hotspots and defective cells with precision.',
          },
          {
            icon: 'shield',
            title: 'Maximise production',
            description:
              'Identify underperforming panels and take action to restore optimal energy output.',
          },
          {
            icon: 'clock',
            title: 'Large area in short time',
            description:
              'Drones cover large solar installations efficiently — from rooftop systems to solar parks.',
          },
          {
            icon: 'building',
            title: 'Preventive maintenance',
            description:
              'Regular inspection prevents costly failures and extends the lifespan of your installation.',
          },
          {
            icon: 'file',
            title: 'Panel-specific report',
            description:
              'Every panel is classified and mapped so you know exactly where action is needed.',
          },
          {
            icon: 'camera',
            title: 'All installation types',
            description:
              'Works on monocrystalline, polycrystalline and thin-film panels of all sizes.',
          },
        ]}
      />

      <ProcessSteps
        headline="How solar panel inspection works"
        steps={[
          {
            number: 1,
            title: 'Planning',
            description:
              'We discuss your installation and plan the inspection for optimal conditions.',
          },
          {
            number: 2,
            title: 'Thermal Flight',
            description:
              'EASA-certified pilot carries out the inspection with full radiometric thermal camera.',
          },
          {
            number: 3,
            title: 'Analysis',
            description:
              'All thermal data is analysed to identify hotspots, defective cells and anomalies.',
          },
          {
            number: 4,
            title: 'Report',
            description:
              'Professional report with panel classification, thermal maps and action recommendations.',
          },
        ]}
      />

      <Deliverables
        headline="What you receive"
        items={[
          {
            title: 'Thermal maps',
            description:
              'Full radiometric thermograms of the entire installation showing temperature anomalies.',
          },
          {
            title: 'RGB images',
            description:
              'High-resolution aerial photos for visual reference and documentation.',
          },
          {
            title: 'Panel classification',
            description:
              'Each panel classified by condition — from healthy to critical.',
          },
          {
            title: 'Layout map',
            description:
              'All findings mapped on the installation layout for easy identification.',
          },
          {
            title: 'Action recommendations',
            description:
              'Prioritised recommendations for maintenance and replacement.',
          },
          {
            title: 'Digital report',
            description:
              'Professional PDF report with all data, analysis and appendices.',
          },
        ]}
      />

      <FaqAccordion
        headline="Frequently asked questions about solar panel inspection"
        items={faqItems}
      />

      <CtaBand
        headline="Need a solar panel inspection?"
        description="Contact us for a free quote. We inspect installations of all sizes across Sweden."
        ctaLabel="Get a Quote"
        ctaHref="/en/contact?service=solar-panel-inspection"
      />

      <RelatedServices
        headline="Related services"
        services={[
          {
            title: 'Thermal Inspection',
            href: '/en/services/thermal-inspection',
            description:
              'Full radiometric thermal analysis for all types of buildings and facilities.',
          },
          {
            title: 'Industrial Inspection',
            href: '/en/services/industrial-inspection',
            description:
              'Drone inspection of industrial facilities and equipment.',
          },
          {
            title: 'Roof Inspection',
            href: '/en/services/roof-inspection',
            description:
              'Combine with roof inspection when solar panels are roof-mounted.',
          },
        ]}
      />
    </>
  )
}
