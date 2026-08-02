import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { faqSchema } from '@/lib/schema'

export const metadata: Metadata = createMetadata({
  title: 'How It Works — Drone Inspection Process',
  description:
    'From quote request to finished report. See how a drone inspection with SurveyDrone works in five simple steps. You do not need to be on site.',
  path: '/en/how-it-works',
  locale: 'en',
  alternateLocalePath: '/hur-det-gar-till',
})

const steps = [
  {
    number: 1,
    title: 'Quote request',
    description: 'Describe the object and your needs via the form or email. We get back to you promptly with a tailored quote.',
    detail: 'You do not need to be an expert — just describe what you want inspected and why. We help you choose the right service and setup.',
  },
  {
    number: 2,
    title: 'Planning',
    description: 'We check airspace, weather conditions and any required permits. You do not need to be on site.',
    detail: 'All contact with authorities and airspace planning is handled by us. We notify you of the date and time in advance.',
  },
  {
    number: 3,
    title: 'Flight',
    description: 'An EASA-certified pilot carries out the inspection using industry-leading thermal camera and high-resolution RGB camera.',
    detail: 'Time on site depends on the size and complexity of the object — a few hours is often enough, and multiple objects can be inspected on the same day.',
  },
  {
    number: 4,
    title: 'Analysis',
    description: 'All deviations are georeferenced and priority-classified. We identify damage, moisture, cold bridges and other defects.',
    detail: 'Each finding is documented with position, images and a severity assessment so you know what should be addressed first.',
  },
  {
    number: 5,
    title: 'Report',
    description: 'A professional PDF report with images, analyses and recommended actions. Delivery time depends on the amount of data and is stated in the quote.',
    detail: 'The report is designed as a decision-making document — clear, structured and ready to share with board members, property managers or contractors.',
  },
]

const faqItems = [
  {
    question: 'Do I need to be on site during the inspection?',
    answer: 'No, you do not need to be on site. We handle the entire process independently. If you would like to follow the inspection in real time, we can provide a secure live link.',
  },
  {
    question: 'How quickly will the report be delivered?',
    answer: 'Delivery time depends on the scope and the amount of data to analyse — you get a clear delivery time in the quote, and urgent matters can be prioritised.',
  },
  {
    question: 'What is included in the inspection report?',
    answer: 'The report contains high-resolution aerial images, thermal images (for thermal inspections), a summary of identified deviations, priority classification and recommended actions.',
  },
  {
    question: 'Can inspections be carried out in winter?',
    answer: 'Yes, thermal inspection often works better in cooler conditions as temperature differences become more apparent. We adapt the flight timing to weather and light conditions.',
  },
  {
    question: 'What is PDRA S-01 and why is it important?',
    answer: 'PDRA S-01 is a European standard scenario (Predefined Risk Assessment) for drone operations in populated areas. It requires risk assessment, operational procedures and pilot competence — ensuring a safe and professional inspection.',
  },
  {
    question: 'Can you inspect multiple objects on the same day?',
    answer: 'Yes, if the objects are in the same geographical area, we can inspect multiple properties or facilities during the same assignment. This often provides better terms.',
  },
]

export default function HowItWorksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqItems)) }}
      />

      <Breadcrumbs
        items={[
          { name: 'Home', url: '/en' },
          { name: 'How it works', url: '/en/how-it-works' },
        ]}
      />

      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="page-heading">
              How a drone inspection works
            </h1>
            <p className="mt-4 text-lg text-dark-500">
              From quote request to finished report — five clear steps. We handle everything from
              airspace planning to analysis. You do not need to be on site.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding section-muted">
        <div className="container-content">
          <div className="mx-auto max-w-3xl space-y-12">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex gap-6 md:gap-8">
                {/* Timeline line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-5 top-12 bottom-0 w-px bg-brand-200 md:left-6" aria-hidden="true" />
                )}
                {/* Step number */}
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-700 text-sm font-bold text-white md:h-12 md:w-12 md:text-base">
                  {String(step.number).padStart(2, '0')}
                </div>
                {/* Content */}
                <div className="pb-8">
                  <h2 className="text-xl font-bold text-dark-900 md:text-2xl">{step.title}</h2>
                  <p className="mt-2 text-dark-600">{step.description}</p>
                  <p className="mt-2 text-sm text-dark-500">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="text-center section-heading">Ready to get started?</h2>
          <p className="mt-3 text-lg text-dark-500">
            It starts with a simple quote request — we get back to you promptly.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/en/contact" className="btn-primary px-8 py-4 text-base">
              Request a quote
            </Link>
            <Link href="/en/pricing" className="btn-secondary px-8 py-4 text-base">
              See pricing guide
            </Link>
          </div>
        </div>
      </section>

      <FaqAccordion headline="Frequently asked questions about the process" items={faqItems} />

      <CtaBand
        headline="Easier than you think"
        description="Describe your needs — we handle the rest. Free quote with a clear delivery time."
        ctaHref="/en/contact"
      />
    </>
  )
}
