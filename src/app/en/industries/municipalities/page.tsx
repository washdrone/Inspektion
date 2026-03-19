import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { serviceSchemaEn } from '@/lib/schema-en'
import { faqSchema } from '@/lib/schema'
import { Hero } from '@/components/Hero'
import { TrustBar } from '@/components/TrustBar'
import { BenefitsGrid } from '@/components/BenefitsGrid'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = createMetadata({
  title: 'Drone Inspection for Municipalities',
  description:
    'Drone inspection of municipal properties, schools, sports halls and infrastructure. Thermal camera and documentation. EASA-certified pilots.',
  path: '/en/industries/municipalities',
  locale: 'en',
  alternateLocalePath: '/branscher/kommuner',
})

const faqItems = [
  {
    question: 'Can you inspect municipal properties such as schools and preschools?',
    answer:
      'Yes, we inspect all types of municipal properties — schools, preschools, sports halls, libraries, care homes and office buildings. The inspection is carried out without disrupting operations.',
  },
  {
    question: 'How do you handle procurement requirements?',
    answer:
      'We have experience working with public sector clients and adapt to your procurement procedures. Contact us for a quote that can serve as a basis for direct procurement or call-off agreements.',
  },
  {
    question: 'Can the report be used as a basis in the budget process?',
    answer:
      'Yes, our reports contain prioritised remediation recommendations that can serve as a basis for budget requests and maintenance planning. We categorise damage by severity to facilitate prioritisation.',
  },
  {
    question: 'Do you also inspect bridges and other infrastructure?',
    answer:
      'We inspect building structures and constructions with drones. Contact us to discuss your specific object and what type of documentation you need.',
  },
  {
    question: 'How quickly can you inspect a larger property portfolio?',
    answer:
      'We plan inspections efficiently by combining multiple objects in the same mobilisation. Contact us with a list of properties and we will provide a time estimate and quote.',
  },
  {
    question: 'Are your pilots certified for flying in urban areas?',
    answer:
      'Yes, our pilots are EASA-certified remote pilots with authorisation to fly in built-up areas. We always carry out a risk assessment and ensure the flight meets all regulatory requirements.',
  },
  {
    question: 'Can we use the data for energy performance certificates?',
    answer:
      'Thermal inspection provides valuable information about cold bridges and energy losses that can complement an energy performance certificate. Contact us to discuss how we can support your energy work.',
  },
]

export default function MunicipalitiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchemaEn({
              name: 'Drone Inspection for Municipalities and Public Administration',
              description:
                'Professional drone inspection of municipal properties, schools and infrastructure. Thermal camera and detailed reporting.',
              url: '/en/industries/municipalities',
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqItems)) }}
      />

      <Breadcrumbs
        items={[
          { name: 'Home', url: '/en' },
          { name: 'Industries', url: '#' },
          { name: 'Municipalities', url: '/en/industries/municipalities' },
        ]}
      />

      <Hero
        headline="Drone Inspection for Municipalities"
        subheadline="Take control of the condition of your municipal properties and facilities. With thermal camera and drone technology, we map maintenance needs at schools, sports halls and public buildings — efficiently and without disrupting operations."
        ctaPrimary={{ label: 'Request a quote', href: '/en/contact' }}
        ctaSecondary={{ label: 'Our services', href: '/en/services/roof-inspection' }}
        stats={[
          { value: '0', label: 'Disruption to operations' },
          { value: '0', label: 'Work at height' },
          { value: 'All of', label: 'Sweden' },
          { value: 'EASA', label: 'Certified pilots' },
        ]}
      />

      <TrustBar
        items={[
          'EASA-certified remote pilots',
          'Insured operations',
          'Thermal camera & RGB',
          'Public sector experience',
        ]}
      />

      {/* Use cases section */}
      <section className="section-padding">
        <div className="container-content">
          <h2 className="text-heading-lg sm:text-display text-center">
            How we help municipalities and public administration
          </h2>
          <p className="mt-4 text-body-lg text-dark-500 text-center max-w-2xl mx-auto">
            Municipal property departments often manage large portfolios with limited resources.
            Drone inspection provides a cost-effective way to map maintenance needs.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="card">
              <h3 className="text-heading-sm">Schools and preschools</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Inspection of roofs and facades at school properties. Thermal camera identifies
                moisture damage and cold bridges affecting indoor climate. Carried out without
                disrupting teaching.
              </p>
              <Link href="/en/services/roof-inspection" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Read more about roof inspection &rarr;
              </Link>
            </div>
            <div className="card">
              <h3 className="text-heading-sm">Sports facilities</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Roofs on sports halls, swimming pools and arenas are often large and difficult to inspect.
                With drones, we assess the condition quickly and safely.
              </p>
              <Link href="/en/services/facade-inspection" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Read more about facade inspection &rarr;
              </Link>
            </div>
            <div className="card">
              <h3 className="text-heading-sm">Energy mapping</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Thermal inspection identifies cold bridges and energy losses in municipal
                buildings. The results can be used as a basis for energy efficiency work.
              </p>
              <Link href="/en/services/solar-panel-inspection" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Read more about solar panel inspection &rarr;
              </Link>
            </div>
            <div className="card">
              <h3 className="text-heading-sm">Portfolio mapping</h3>
              <p className="mt-2 text-body-sm text-dark-500">
                Systematic inspection of the entire municipal property portfolio. We deliver
                comparable reports that provide a basis for prioritisation of actions and budgeting.
              </p>
              <Link href="/en/contact" className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Contact us for a tailored plan &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Benefits for municipalities"
        subtitle="Drone inspection helps you use your maintenance budget wisely."
        benefits={[
          {
            title: 'Cost-effective mapping',
            description:
              'Inspect large property portfolios without scaffolding or cherry pickers. More properties per budget.',
            icon: 'chart',
          },
          {
            title: 'No disruption to operations',
            description:
              'The inspection is carried out without affecting schools, preschools or other activities in the building.',
            icon: 'building',
          },
          {
            title: 'Better decision-making data',
            description:
              'Detailed reports with prioritised remediation recommendations that can be used directly in the budget process.',
            icon: 'file',
          },
          {
            title: 'Safe inspection',
            description:
              'No personnel need to work at height. EASA-certified pilots and insured operations.',
            icon: 'shield',
          },
          {
            title: 'Thermal energy analysis',
            description:
              'Identify cold bridges and energy losses as a basis for the municipality\'s energy efficiency work.',
            icon: 'camera',
          },
          {
            title: 'Fast delivery',
            description:
              'Report with images and remediation recommendations normally delivered within a couple of working days after inspection.',
            icon: 'clock',
          },
        ]}
        variant="dark"
      />

      <FaqAccordion
        headline="Frequently asked questions from municipalities"
        items={faqItems}
      />

      <CtaBand
        headline="Need to inspect municipal properties?"
        description="Contact us for a free quote. We help you map maintenance needs across your entire portfolio."
        ctaLabel="Request a quote"
        ctaHref="/en/contact"
      />
    </>
  )
}
