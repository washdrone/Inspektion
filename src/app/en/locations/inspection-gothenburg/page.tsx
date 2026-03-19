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
  title: 'Drone Inspection Gothenburg | Roof & Facade | SurveyDrone',
  description:
    'Drone inspection in Gothenburg with thermal camera. Roofs, facades and solar panels in Hisingen, Lindholmen, Majorna and the entire Gothenburg region. Request a quote.',
  path: '/en/locations/inspection-gothenburg',
  locale: 'en',
  alternateLocalePath: '/platser/inspektion-goteborg',
})

const localBusinessSchema = localBusinessSchemaEn({
  name: 'SurveyDrone - Gothenburg',
  description:
    'Professional drone inspection in the Gothenburg region. Roofs, facades, solar panels and industrial facilities with thermal camera. EASA-certified remote pilots.',
  url: '/en/locations/inspection-gothenburg',
  city: 'Gothenburg',
  latitude: 57.7089,
  longitude: 11.9746,
})

const faqItems = [
  {
    question: 'Which areas in Gothenburg do you cover?',
    answer:
      'We perform drone inspections throughout the entire Gothenburg region — including Hisingen, Lindholmen, Majorna, Askim, Mölndal and Kungälv. We cover both central Gothenburg and surrounding municipalities.',
  },
  {
    question: 'Can you inspect port and industrial facilities in Gothenburg?',
    answer:
      'Yes, Gothenburg\'s port and industrial areas are an important part of our operations. We inspect warehouse properties, production facilities and port infrastructure with drones and thermal camera.',
  },
  {
    question: 'How do you handle wind conditions along Gothenburg\'s coast?',
    answer:
      'Gothenburg\'s coastal location means wind conditions can vary. We carefully monitor weather conditions and plan flights for optimal circumstances. If needed, we reschedule to a suitable day.',
  },
  {
    question: 'Do you inspect housing cooperative properties in central Gothenburg?',
    answer:
      'Absolutely. We inspect apartment buildings and housing cooperative properties in districts like Majorna, Linnéstaden, Haga and Johanneberg. Thermal inspection is particularly valuable for older brick buildings.',
  },
  {
    question: 'Can you perform solar panel inspections in the Gothenburg area?',
    answer:
      'Yes, we inspect solar panel installations on commercial properties and residential buildings throughout the Gothenburg region. With thermal camera, we identify hotspots and defective panels.',
  },
]

export default function GothenburgPage() {
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
          { name: 'Gothenburg', url: '' },
        ]}
      />

      <Hero
        headline="Drone Inspection Gothenburg — Port, Industry & Properties"
        subheadline="Gothenburg is Sweden&apos;s industrial heart, home to the Nordic region&apos;s largest port, extensive industrial areas on Hisingen and a varied building stock from Majorna to Mölndal. SurveyDrone inspects roofs, facades and facilities with thermal camera throughout the Gothenburg region."
        ctaPrimary={{ label: 'Request a quote — Gothenburg', href: '/en/contact' }}
        ctaSecondary={{ label: 'Our services', href: '/en/services/roof-inspection' }}
      />

      <TrustBar
        items={[
          'EASA-certified remote pilots',
          'Insured',
          'Entire Gothenburg region',
          'Thermal camera & RGB',
        ]}
      />

      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-heading-lg sm:text-display">
              Inspections adapted for Gothenburg&apos;s unique built environment
            </h2>
            <div className="mt-6 space-y-4 text-body-lg text-dark-600">
              <p>
                Gothenburg&apos;s building stock is shaped by the city&apos;s industrial history and coastal location.
                On Hisingen, there are large industrial and logistics properties that require regular inspection
                of roofs and facades. Lindholmen has developed into a modern technology cluster with office buildings
                where energy efficiency and maintenance are central.
              </p>
              <p>
                In older districts like Majorna, Haga and Linnéstaden, there are culturally significant brick buildings
                where thermal inspection reveals moisture damage and cold bridges without damaging the building.
                In Askim, Mölndal and Kungälv, there is mixed development with detached houses, apartment buildings
                and commercial properties that all benefit from drone technology.
              </p>
              <p>
                We offer{' '}
                <Link href="/en/services/roof-inspection" className="text-brand-600 underline hover:text-brand-700">
                  roof inspection
                </Link>
                ,{' '}
                <Link href="/en/services/facade-inspection" className="text-brand-600 underline hover:text-brand-700">
                  facade inspection
                </Link>
                ,{' '}
                <Link href="/en/services/solar-panel-inspection" className="text-brand-600 underline hover:text-brand-700">
                  solar panel inspection
                </Link>
                {' '}and{' '}
                <Link href="/en/services/industrial-inspection" className="text-brand-600 underline hover:text-brand-700">
                  industrial inspection
                </Link>
                {' '}throughout the Gothenburg region.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Benefits of drone inspection in Gothenburg"
        subtitle="Adapted for the Gothenburg region&apos;s industrial and property landscape."
        benefits={[
          {
            title: 'Industrial inspection',
            description:
              'Gothenburg\'s port and industrial areas on Hisingen require regular inspection of hard-to-reach structures. Drones reach where scaffolding cannot.',
            icon: 'building',
          },
          {
            title: 'Thermal analysis of brick facades',
            description:
              'Majorna\'s and Linnéstaden\'s older brick buildings benefit from thermal camera to identify moisture and cold bridges without intervention.',
            icon: 'camera',
          },
          {
            title: 'Weather-adapted planning',
            description:
              'We plan flights based on Gothenburg\'s coastal climate and ensure optimal conditions for inspection.',
            icon: 'clock',
          },
          {
            title: 'Safety in port and industry',
            description:
              'Drone inspection eliminates the need for work at height in industrial environments — safer for personnel and more operationally efficient.',
            icon: 'shield',
          },
          {
            title: 'Complete documentation',
            description:
              'Detailed report with thermal images, RGB photos and recommended actions. Used as a basis for maintenance planning.',
            icon: 'file',
          },
          {
            title: 'Cost-effective',
            description:
              'Replace scaffolding and cherry pickers with drone technology — lower total cost and faster execution.',
            icon: 'chart',
          },
        ]}
        variant="dark"
      />

      <FaqAccordion
        headline="FAQ — Drone Inspection Gothenburg"
        items={faqItems}
      />

      <CtaBand
        headline="Need drone inspection in Gothenburg?"
        description="Contact us for a free quote. We inspect roofs, facades, solar panels and industrial facilities throughout the Gothenburg region."
        ctaLabel="Request a quote"
        ctaHref="/en/contact"
      />
    </>
  )
}
