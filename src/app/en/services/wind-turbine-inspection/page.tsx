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
  title: 'Wind Turbine Inspection with Drone — Blades and Tower',
  description:
    'Inspect rotor blades, tower and nacelle without rope access or climbing. Detailed images and thermal analysis. EASA-certified pilots.',
  path: '/en/services/wind-turbine-inspection',
  locale: 'en',
  alternateLocalePath: '/tjanster/vindkraftinspektion',
})

const faqItems = [
  {
    question: 'What parts of the wind turbine are inspected?',
    answer:
      'Rotor blades (leading edge, trailing edge, tip), tower surface, nacelle exterior and foundation.',
  },
  {
    question: 'Does the wind turbine need to be stopped during inspection?',
    answer:
      'Blade inspection requires the turbine to be stopped. Tower and nacelle can sometimes be inspected during low-speed rotation.',
  },
  {
    question: 'What types of blade damage can you identify?',
    answer:
      'Erosion, cracks, lightning damage, delamination, surface defects and ice damage.',
  },
  {
    question: 'How does drone inspection compare with rope inspection?',
    answer:
      'Drone inspection is faster, requires shorter standstill time and reduces risk for personnel. Suitable for regular condition monitoring.',
  },
  {
    question: 'Can you inspect entire wind farms?',
    answer:
      'Yes, we inspect individual turbines and entire wind farms efficiently.',
  },
  {
    question: 'How are weather conditions handled?',
    answer:
      'We plan flights around weather windows. Wind speed, precipitation and visibility determine when inspection is possible.',
  },
  {
    question: 'Can results be used for warranty claims?',
    answer:
      'Yes, our documentation provides timestamped, high-resolution evidence suitable for warranty claims.',
  },
  {
    question: 'How often should wind turbines be inspected?',
    answer:
      'Annual blade inspection is recommended. More frequent if damage or performance issues are suspected.',
  },
]

export default function WindTurbineInspectionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchemaEn({
              name: 'Wind Turbine Inspection with Drone',
              description:
                'Inspect rotor blades, tower and nacelle without rope access or climbing. Detailed images and thermal analysis.',
              url: '/en/services/wind-turbine-inspection',
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
              { name: 'Wind Turbine Inspection', url: '/en/services/wind-turbine-inspection' },
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
          { name: 'Wind Turbine Inspection', url: '' },
        ]}
      />

      <Hero
        headline="Wind Turbine Inspection with Drone — Blades and Tower"
        subheadline="Inspect rotor blades, tower and nacelle without rope access or climbing. Detailed images and thermal analysis by EASA-certified pilots — faster, safer and with shorter standstill time."
        ctaPrimary={{ label: 'Get a Quote', href: '/en/contact?service=wind-turbine-inspection' }}
        ctaSecondary={{ label: 'See How It Works', href: '#process' }}
      />

      <TrustBar
        items={[
          'EASA-certified pilots',
          'Fully insured',
          'All of Sweden',
          'Close-range blade inspection',
        ]}
      />

      <BenefitsGrid
        headline="Why drone wind turbine inspection?"
        benefits={[
          {
            icon: 'shield',
            title: 'Safer inspection',
            description:
              'No rope access or climbing required. The drone inspects all parts of the turbine from a safe distance.',
          },
          {
            icon: 'clock',
            title: 'Shorter standstill',
            description:
              'Drone inspection requires less turbine downtime than traditional rope access methods.',
          },
          {
            icon: 'camera',
            title: 'Detailed blade images',
            description:
              'High-resolution close-up images of leading edge, trailing edge and blade tip for thorough damage assessment.',
          },
          {
            icon: 'chart',
            title: 'Thermal analysis',
            description:
              'Thermal imaging reveals internal defects, delamination and other issues not visible to the naked eye.',
          },
          {
            icon: 'building',
            title: 'Entire turbine',
            description:
              'Blades, tower, nacelle and foundation inspected in a single visit for complete condition overview.',
          },
          {
            icon: 'file',
            title: 'Documentation for warranties',
            description:
              'Timestamped, high-resolution evidence suitable for warranty claims and compliance documentation.',
          },
        ]}
      />

      <ProcessSteps
        id="process"
        headline="How wind turbine inspection works"
        steps={[
          {
            number: 1,
            title: 'Planning & coordination',
            description:
              'We coordinate with the turbine operator on timing, safety requirements and access.',
          },
          {
            number: 2,
            title: 'Blade inspection',
            description:
              'Each blade is inspected with high-resolution and thermal camera during turbine standstill.',
          },
          {
            number: 3,
            title: 'Tower & nacelle',
            description:
              'Tower surface and nacelle exterior are inspected for damage, corrosion and anomalies.',
          },
          {
            number: 4,
            title: 'Report & follow-up',
            description:
              'Detailed report with damage classification, thermal analysis and recommended actions.',
          },
        ]}
      />

      <Deliverables
        headline="What you receive"
        items={[
          {
            title: 'Blade report',
            description:
              'Detailed documentation of each blade with close-up images and identified damage.',
          },
          {
            title: 'Tower inspection',
            description:
              'Visual documentation of the tower surface with identified corrosion, cracks or coating damage.',
          },
          {
            title: 'Thermal analyses',
            description:
              'Thermal images revealing internal defects, delamination and temperature anomalies.',
          },
          {
            title: 'Damage classification',
            description:
              'All findings categorised by type, severity and recommended action.',
          },
          {
            title: 'Action recommendations',
            description:
              'Proposed maintenance and repair measures, prioritised by urgency.',
          },
          {
            title: 'Digital report',
            description:
              'Professional report in PDF format with summary, detailed findings and appendices.',
          },
        ]}
      />

      <FaqAccordion headline="Frequently asked questions about wind turbine inspection" items={faqItems} />

      <CtaBand
        headline="Need a wind turbine inspection?"
        description="Contact us for a free quote. We inspect individual turbines and entire wind farms across Sweden."
        ctaLabel="Get a Quote"
        ctaHref="/en/contact?service=wind-turbine-inspection"
      />

      <RelatedServices
        headline="Related services"
        services={[
          {
            title: 'Industrial Inspection',
            href: '/en/services/industrial-inspection',
            description:
              'Inspect chimneys, tanks, pipelines and other industrial structures with drone.',
          },
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
              'Create precise 3D models, orthophotos and point clouds with drone photogrammetry.',
          },
        ]}
      />
    </>
  )
}
