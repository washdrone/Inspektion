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
  title: '3D Mapping with Drone — Photogrammetry and Orthophoto',
  description:
    'Create precise 3D models, orthophotos and point clouds with RTK/GNSS positioning. For measurement, documentation and BIM integration.',
  path: '/en/services/3d-mapping',
  locale: 'en',
  alternateLocalePath: '/tjanster/3d-kartlaggning',
})

const faqItems = [
  {
    question: 'What is photogrammetry?',
    answer:
      'A technique that creates 3D models from overlapping aerial photographs. Hundreds of images are processed into accurate digital models.',
  },
  {
    question: 'What is an orthophoto?',
    answer:
      'A geometrically corrected aerial image where every pixel has accurate geographic coordinates. Used for measurement and mapping.',
  },
  {
    question: 'How accurate is the positioning?',
    answer:
      'With RTK/GNSS positioning we achieve centimetre-level accuracy for georeferenced data.',
  },
  {
    question: 'What delivery formats do you offer?',
    answer:
      'Orthophoto (GeoTIFF), 3D model (OBJ, FBX), point cloud (LAS, LAZ), digital terrain model (DTM) and other formats as agreed.',
  },
  {
    question: 'How large areas can be mapped?',
    answer:
      'From individual buildings to large construction sites and land areas. Flight planning is adapted to the project scope.',
  },
  {
    question: 'Can the 3D model be used in BIM projects?',
    answer:
      'Yes, our 3D models and point clouds can be imported into common BIM software.',
  },
  {
    question: 'How long from flight to delivery?',
    answer:
      'Data processing takes a few days depending on area size and complexity. We coordinate delivery timing for each project.',
  },
  {
    question: 'Can you document construction projects over time?',
    answer:
      'Yes, regular flights create time-series documentation showing project progress. Ideal for construction documentation.',
  },
]

export default function ThreeDMappingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchemaEn({
              name: '3D Mapping with Drone',
              description:
                'Create precise 3D models, orthophotos and point clouds with RTK/GNSS positioning. For measurement, documentation and BIM integration.',
              url: '/en/services/3d-mapping',
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
              { name: '3D Mapping', url: '/en/services/3d-mapping' },
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
          { name: '3D Mapping', url: '' },
        ]}
      />

      <Hero
        headline="3D Mapping with Drone — Photogrammetry and Orthophoto"
        subheadline="Create precise 3D models, orthophotos and point clouds with RTK/GNSS positioning. For measurement, documentation and BIM integration — collected safely and efficiently from the air by EASA-certified pilots."
        ctaPrimary={{ label: 'Get a Quote', href: '/en/contact' }}
        ctaSecondary={{ label: 'See How It Works', href: '#process' }}
      />

      <TrustBar
        items={[
          'EASA-certified pilots',
          'Fully insured',
          'RTK/GNSS positioning',
          'All of Sweden',
        ]}
      />

      <BenefitsGrid
        headline="Why 3D mapping with drone?"
        benefits={[
          {
            icon: 'chart',
            title: 'Centimetre accuracy',
            description:
              'RTK/GNSS positioning ensures georeferenced data with centimetre-level accuracy.',
          },
          {
            icon: 'camera',
            title: 'Photogrammetry',
            description:
              'Overlapping aerial images are processed into detailed 3D models, orthophotos and point clouds.',
          },
          {
            icon: 'clock',
            title: 'Fast data collection',
            description:
              'Large areas are mapped in hours instead of days compared to traditional ground-based surveying.',
          },
          {
            icon: 'building',
            title: 'Construction documentation',
            description:
              'Regular flights create time-series documentation showing project progress over time.',
          },
          {
            icon: 'file',
            title: 'BIM-compatible',
            description:
              '3D models and point clouds delivered in formats compatible with common BIM software.',
          },
          {
            icon: 'shield',
            title: 'Safe collection',
            description:
              'No personnel need to access hazardous areas. Data is collected safely from the air.',
          },
        ]}
      />

      <ProcessSteps
        headline="How 3D mapping works"
        steps={[
          {
            number: 1,
            title: 'Planning',
            description:
              'We define the mapping area, accuracy requirements and delivery formats together with you.',
          },
          {
            number: 2,
            title: 'Flight & data collection',
            description:
              'EASA-certified pilot carries out the flight with RTK/GNSS positioning, capturing overlapping images.',
          },
          {
            number: 3,
            title: 'Processing',
            description:
              'Images are processed into 3D models, orthophotos, point clouds and terrain models.',
          },
          {
            number: 4,
            title: 'Delivery',
            description:
              'You receive georeferenced data in agreed formats with a project report.',
          },
        ]}
      />

      <Deliverables
        headline="What you receive"
        items={[
          {
            title: 'Orthophoto',
            description:
              'Geometrically corrected aerial image with accurate geographic coordinates (GeoTIFF).',
          },
          {
            title: '3D model',
            description:
              'Detailed three-dimensional model of the mapped area (OBJ, FBX).',
          },
          {
            title: 'Point cloud',
            description:
              'Dense point cloud with colour information for detailed analysis (LAS, LAZ).',
          },
          {
            title: 'Digital terrain model',
            description:
              'Terrain model showing elevation data for the mapped area (DTM).',
          },
          {
            title: 'Georeferenced data',
            description:
              'All data georeferenced with centimetre accuracy using RTK/GNSS positioning.',
          },
          {
            title: 'Project report',
            description:
              'Documentation of flight parameters, accuracy assessment and data specifications.',
          },
        ]}
      />

      <FaqAccordion headline="Frequently asked questions about 3D mapping" items={faqItems} />

      <CtaBand
        headline="Need precise 3D mapping?"
        description="Contact us for a free quote. We map areas across all of Sweden with centimetre accuracy."
        ctaLabel="Get a Quote"
        ctaHref="/en/contact"
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
            title: 'Roof Inspection',
            href: '/en/services/roof-inspection',
            description:
              'Complete roof inspection combining visual and thermal analysis.',
          },
          {
            title: 'Facade Inspection',
            href: '/en/services/facade-inspection',
            description:
              'Inspect facades to identify cracks, moisture damage and structural issues.',
          },
        ]}
      />
    </>
  )
}
