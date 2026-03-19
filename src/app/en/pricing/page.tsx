import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { faqSchema } from '@/lib/schema'

export const metadata: Metadata = createMetadata({
  title: 'Pricing Guide — Drone Inspection',
  description:
    'What does drone inspection cost? The price depends on the object area, number of storeys, inspection type and deliverables. See our pricing model and request a free quote.',
  path: '/en/pricing',
  locale: 'en',
  alternateLocalePath: '/priser',
})

const faqItems = [
  {
    question: 'Does the quote cost anything?',
    answer: 'No, the quote is always free of charge and without obligation.',
  },
  {
    question: 'Are there any hidden costs?',
    answer: 'No. The price in the quote includes the flight, data processing and report. Any additional requests are always discussed in advance.',
  },
  {
    question: 'Do you offer better terms for ongoing contracts?',
    answer: 'Yes, ongoing contracts with regular inspections offer better terms compared to one-off assignments. See our maintenance agreements page.',
  },
  {
    question: 'How quickly can you provide a quote?',
    answer: 'We typically respond within 24 hours with a quote based on your description.',
  },
  {
    question: 'What does it cost to add thermal inspection?',
    answer: 'Thermal inspection is available as an add-on or in combined packages. The price depends on the size of the object. Contact us for an exact price.',
  },
]

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqItems)) }}
      />

      <Breadcrumbs
        items={[
          { name: 'Home', url: '/en' },
          { name: 'Pricing guide', url: '/en/pricing' },
        ]}
      />

      <section className="section-padding">
        <div className="container-content text-center">
          <h1 className="text-3xl font-bold text-dark-900 sm:text-4xl">
            How drone inspection is priced
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-dark-500">
            We do not publish fixed prices — every assignment is unique. Instead, we explain what
            affects the price so you know what to expect. All quotes are free of charge.
          </p>
        </div>
      </section>

      <section className="section-padding section-muted">
        <div className="container-content max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-dark-900 sm:text-3xl">
            What affects the price?
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Object area', desc: 'Larger roofs or facades require longer flight time and more image processing.' },
              { title: 'Number of storeys', desc: 'Multi-storey facades require multiple flight passes and more detailed documentation.' },
              { title: 'Type of inspection', desc: 'Visual, thermal or combined inspection has different requirements for flight patterns and analysis.' },
              { title: 'Deliverables', desc: 'Basic report, thermal analysis, orthophoto or 3D model affect processing time.' },
              { title: 'Travel time', desc: 'Objects outside major metropolitan areas may incur a travel time surcharge.' },
              { title: 'Number of objects', desc: 'More objects in the same area provide volume advantages. Ongoing contracts offer the best terms.' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-dark-100 bg-white p-5 shadow-card">
                <h3 className="font-semibold text-dark-900">{item.title}</h3>
                <p className="mt-2 text-sm text-dark-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-content max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-dark-900 sm:text-3xl">
            Three contract models
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-dark-500">
            Choose the arrangement that suits your needs.
          </p>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {[
              {
                name: 'Single inspection',
                description: 'A one-off inspection of a roof, facade or facility.',
                features: [
                  'Flight and data collection',
                  'Report with images and notes',
                  'Recommended actions',
                  'Digital image archive',
                  'Report within 48 hours',
                ],
                highlighted: false,
              },
              {
                name: 'Multi-object contract',
                description: 'Inspection of multiple properties or objects within the same contract.',
                features: [
                  'Everything in Single inspection',
                  'Volume pricing',
                  'Coordinated planning',
                  'Combined reporting',
                  'Dedicated contact person',
                ],
                highlighted: true,
              },
              {
                name: 'Maintenance agreement',
                description: 'Regular inspections at a fixed interval and price.',
                features: [
                  'Everything in Multi-object contract',
                  'Scheduled inspections 1-2 times/year',
                  'Historical comparison',
                  'Priority handling',
                  'Annual report with trend analysis',
                ],
                highlighted: false,
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-xl border p-6 md:p-8 ${
                  tier.highlighted
                    ? 'border-accent-400/30 bg-accent-50 shadow-lg ring-2 ring-accent-400/20'
                    : 'border-dark-100 bg-white'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-pill bg-accent-400 px-4 py-1 text-xs font-semibold text-dark-900">
                    Most popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-dark-900">{tier.name}</h3>
                <p className="mt-2 text-sm text-dark-500">{tier.description}</p>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-dark-700">
                      <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    href="/en/contact"
                    className={`block w-full text-center ${
                      tier.highlighted
                        ? 'btn-primary'
                        : 'btn-secondary'
                    }`}
                  >
                    Request a quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-dark-400">
            Want to know more about ongoing contracts?{' '}
            <Link href="/en/maintenance-agreements" className="text-brand-700 underline hover:text-brand-500">
              Read about maintenance agreements
            </Link>
          </p>
        </div>
      </section>

      <FaqAccordion headline="Frequently asked questions about pricing" items={faqItems} />

      <CtaBand
        headline="Request a free quote"
        description="Describe your needs and we will get back to you within 24 hours with a quote."
        ctaLabel="Request a quote"
        ctaHref="/en/contact"
      />
    </>
  )
}
