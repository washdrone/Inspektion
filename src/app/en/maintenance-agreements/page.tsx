import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { BenefitsGrid } from '@/components/BenefitsGrid'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { faqSchema } from '@/lib/schema'

export const metadata: Metadata = createMetadata({
  title: 'Maintenance Agreements — Recurring Drone Inspection',
  description:
    'Deviations are best detected over time. With a maintenance agreement from SurveyDrone you get pre-booked inspections, historical comparison and fixed pricing. Ideal for housing associations and property companies.',
  path: '/en/maintenance-agreements',
  locale: 'en',
  alternateLocalePath: '/forvaltningsavtal',
})

const faqItems = [
  {
    question: 'What is included in a maintenance agreement?',
    answer: 'Pre-booked inspection 1-2 times per year, full report with thermal and visual images, historical comparison between occasions, priority handling and fixed pricing with no surprises.',
  },
  {
    question: 'How often should inspections be carried out?',
    answer: 'For most properties we recommend inspection 1-2 times per year — ideally once in autumn before winter and once in spring after snowmelt. We adapt the frequency to your needs.',
  },
  {
    question: 'Can we add more objects during the contract period?',
    answer: 'Yes, the agreement can be expanded with additional properties or objects. We adjust the terms in consultation with you.',
  },
  {
    question: 'Who are maintenance agreements suited for?',
    answer: 'Maintenance agreements are best suited for housing associations, property companies, municipalities and energy companies with recurring inspection needs. They provide better terms and continuous follow-up.',
  },
  {
    question: 'What does the historical comparison look like?',
    answer: 'We compare data from each inspection occasion visually and thermally. The report clearly shows what has changed since the last inspection — new deviations, improvements and unchanged defects.',
  },
]

export default function MaintenanceAgreementsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqItems)) }}
      />

      <Breadcrumbs
        items={[
          { name: 'Home', url: '/en' },
          { name: 'Maintenance agreements', url: '/en/maintenance-agreements' },
        ]}
      />

      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold text-dark-900 sm:text-4xl lg:text-display">
              Maintenance agreements for recurring inspection
            </h1>
            <p className="mt-4 text-lg text-dark-500">
              Deviations are best detected over time. The same property inspected three years in a row
              tells a story that a single inspection can never provide. With a maintenance agreement you
              get continuous follow-up, historical comparison and fixed pricing.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding section-muted">
        <div className="container-content">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-2xl font-bold text-dark-900 sm:text-3xl">What is included?</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'Pre-booked inspection', desc: '1-2 times per year, scheduled in advance so you do not have to plan.' },
                { title: 'Thermal + visual analysis', desc: 'Full inspection with industry-leading thermal camera and RGB.' },
                { title: 'Historical comparison', desc: 'Comparison of findings between inspection occasions shows changes over time.' },
                { title: 'Priority handling', desc: 'Contract customers are prioritised for booking and report delivery.' },
                { title: 'Fixed pricing', desc: 'No surprises. You know exactly what it costs per year.' },
                { title: 'Digital documentation', desc: 'All material is stored digitally and available for future comparison.' },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-dark-100 bg-white p-5 shadow-card">
                  <h3 className="font-semibold text-dark-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-dark-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Why an ongoing contract?"
        subtitle="The advantages of continuous inspection compared to one-off assignments."
        benefits={[
          {
            title: 'Trend analysis',
            description: 'See how the roof or facade condition changes year by year. Identify deterioration early.',
            icon: 'chart',
          },
          {
            title: 'Preventive maintenance',
            description: 'Catch problems before they become costly repairs. Data drives the decisions.',
            icon: 'shield',
          },
          {
            title: 'Better decision-making',
            description: 'Historical data gives the board or property manager concrete evidence for maintenance budgets.',
            icon: 'file',
          },
          {
            title: 'Time savings',
            description: 'No need to procure a new supplier each time. We already know your properties.',
            icon: 'clock',
          },
          {
            title: 'Financial advantages',
            description: 'Ongoing contracts offer better terms compared to one-off inspections.',
            icon: 'chart',
          },
          {
            title: 'Documented condition',
            description: 'Complete image archive and report history — valuable for sales or insurance claims.',
            icon: 'camera',
          },
        ]}
      />

      <section className="section-padding section-muted">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-dark-900 sm:text-3xl">Suited for</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Housing associations', desc: 'Regular roof inspections as a basis for maintenance plans.' },
              { title: 'Property companies', desc: 'Efficient oversight of the entire portfolio with comparison data.' },
              { title: 'Municipalities', desc: 'Systematic inspection of public buildings and facilities.' },
              { title: 'Energy companies', desc: 'Ongoing monitoring of solar parks and technical installations.' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-dark-100 bg-white p-5 text-left">
                <h3 className="font-semibold text-dark-900">{item.title}</h3>
                <p className="mt-1 text-sm text-dark-500">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/en/contact" className="btn-primary px-8 py-4 text-base">
              Discuss a maintenance agreement
            </Link>
          </div>
        </div>
      </section>

      <FaqAccordion headline="Frequently asked questions about maintenance agreements" items={faqItems} />

      <CtaBand
        headline="Invest in long-term property data"
        description="Contact us to discuss a maintenance agreement tailored to your portfolio."
        ctaLabel="Contact us"
        ctaHref="/en/contact"
      />
    </>
  )
}
