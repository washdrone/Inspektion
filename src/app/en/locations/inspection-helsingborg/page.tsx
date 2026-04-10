import type { Metadata } from 'next'
import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { faqSchema } from '@/lib/schema'
import { localBusinessSchemaEn } from '@/lib/schema-en'
import { Hero } from '@/components/Hero'
import { TrustBar } from '@/components/TrustBar'
import { BenefitsGrid } from '@/components/BenefitsGrid'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = createMetadata({
  title: 'Drone Inspection Helsingborg | Roof & Facade | SurveyDrone',
  description:
    'Drone inspection in Helsingborg with thermal camera. Roofs, facades and solar panels in Söder, Ramlösa, Berga and Landskrona. EASA-certified pilots.',
  path: '/en/locations/inspection-helsingborg',
  locale: 'en',
  alternateLocalePath: '/platser/inspektion-helsingborg',
})

const localBusinessSchema = localBusinessSchemaEn({
  name: 'SurveyDrone - Helsingborg',
  description:
    'Professional drone inspection in Helsingborg and northwestern Skåne. Roofs, facades, solar panels and industrial facilities with thermal camera. EASA-certified remote pilots.',
  url: '/en/locations/inspection-helsingborg',
  city: 'Helsingborg',
  latitude: 56.0465,
  longitude: 12.6945,
})

const faqItems = [
  {
    question: 'Which areas in Helsingborg do you cover?',
    answer:
      'We carry out drone inspections across all of Helsingborg — including Söder, Ramlösa, Berga, central Helsingborg and the harbour area. We also cover Landskrona and the rest of northwestern Skåne.',
  },
  {
    question: 'Do you inspect harbour and logistics properties in Helsingborg?',
    answer:
      'Yes, the Port of Helsingborg and its logistics areas are an important part of our operations in the region. We inspect warehouse properties, terminals and industrial buildings using drones and thermal cameras.',
  },
  {
    question: 'Can you inspect older properties in central Helsingborg?',
    answer:
      'Absolutely. Central Helsingborg has many older buildings of cultural and historical value. Drone inspection with thermal cameras identifies maintenance needs without any intervention to the building.',
  },
  {
    question: 'Do you also cover Landskrona?',
    answer:
      'Yes, we carry out drone inspections in Landskrona and throughout northwestern Skåne. We can combine assignments in Helsingborg and Landskrona for greater efficiency.',
  },
  {
    question: 'How do you handle the coastal climate?',
    answer:
      'We are accustomed to working in coastal environments and plan flights based on current weather conditions. In unfavourable weather, we reschedule to a more suitable time.',
  },
]

export default function HelsingborgPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqItems)) }}
      />

      <Breadcrumbs
        items={[
          { name: 'Home', url: '/en' },
          { name: 'Helsingborg', url: '' },
        ]}
      />

      <Hero
        headline="Drone Inspection Helsingborg — Harbour, Commerce & Historic City"
        subheadline="Helsingborg is a dynamic port city in northwestern Skåne with a diverse property portfolio — from historic buildings in the centre to modern logistics properties at the harbour. SurveyDrone inspects roofs, facades and solar panels in Söder, Ramlösa, Berga and the wider region including Landskrona."
        ctaPrimary={{ label: 'Get a quote — Helsingborg', href: '/en/contact' }}
        ctaSecondary={{ label: 'Our services', href: '/en/services/roof-inspection' }}
      />

      <TrustBar
        items={[
          'EASA-certified remote pilots',
          'Insured',
          'Helsingborg & Landskrona',
          'Thermal camera & RGB',
        ]}
      />

      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-heading-lg sm:text-display">
              Drone inspection for harbour and urban properties in Helsingborg
            </h2>
            <div className="mt-6 space-y-4 text-body-lg text-dark-600">
              <p>
                Helsingborg is one of Skåne&apos;s most important port cities with extensive logistics
                operations and a rich cultural-historical centre. The harbour area and the city&apos;s
                logistics properties have large roof surfaces that require regular inspection. Drone
                technology makes it possible to inspect these efficiently without disrupting ongoing
                cargo handling.
              </p>
              <p>
                In districts like Söder, there is mixed housing with older apartment buildings and
                detached houses. Ramlösa and Berga have residential areas where thermal inspection
                identifies cold bridges and moisture problems. Central Helsingborg, with its historic
                buildings, benefits from non-destructive drone inspection of facades and roofs.
                Landskrona, located nearby, has similar inspection needs and we cover both cities.
              </p>
              <p>
                We offer{' '}
                <Link href="/en/services/roof-inspection" className="link-inline">
                  roof inspection
                </Link>
                ,{' '}
                <Link href="/en/services/facade-inspection" className="link-inline">
                  facade inspection
                </Link>
                ,{' '}
                <Link href="/en/services/solar-panel-inspection" className="link-inline">
                  solar panel inspection
                </Link>
                {' '}and{' '}
                <Link href="/en/services/industrial-inspection" className="link-inline">
                  industrial inspection
                </Link>
                {' '}in Helsingborg, Landskrona and throughout northwestern Skåne.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Benefits of drone inspection in Helsingborg"
        subtitle="Tailored for Helsingborg's harbour, commerce and historic buildings."
        benefits={[
          {
            title: 'Harbour and logistics',
            description:
              'Harbour and logistics properties in Helsingborg are inspected by drone without disrupting cargo handling and transport operations.',
            icon: 'building',
          },
          {
            title: 'Historic facades',
            description:
              'Cultural-historical buildings in central Helsingborg are inspected with thermal cameras without intervention — preserving the building\'s integrity.',
            icon: 'camera',
          },
          {
            title: 'Rapid inspection',
            description:
              'Drone inspection is completed in hours rather than days. Ideal for property managers with multiple assets.',
            icon: 'clock',
          },
          {
            title: 'No scaffolding required',
            description:
              'Eliminate the cost and risk of scaffolding on Helsingborg\'s narrow city streets.',
            icon: 'shield',
          },
          {
            title: 'Documentation and report',
            description:
              'Complete report with thermal images, RGB photos and prioritised action recommendations.',
            icon: 'file',
          },
          {
            title: 'Regional coverage',
            description:
              'We cover Helsingborg, Landskrona and all of northwestern Skåne — combine assignments for better efficiency.',
            icon: 'chart',
          },
        ]}
        variant="dark"
      />

      <FaqAccordion
        headline="Frequently asked questions — Drone inspection Helsingborg"
        items={faqItems}
      />

      <CtaBand
        headline="Need drone inspection in Helsingborg?"
        description="Contact us for a free quote. We inspect roofs, facades and solar panels in Helsingborg, Landskrona and northwestern Skåne."
        ctaLabel="Get a quote"
        ctaHref="/en/contact"
      />
    </>
  )
}
