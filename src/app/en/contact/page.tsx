import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { CONTACT } from '@/lib/constants'
import { ContactFormEn } from '@/components/ContactFormEn'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = createMetadata({
  title: 'Contact SurveyDrone — Get a Quote',
  description:
    'Request a free quote for drone inspection with thermal camera. Response within 24 hours. SurveyDrone — EASA-certified pilots across all of Sweden.',
  path: '/en/contact',
  locale: 'en',
  alternateLocalePath: '/kontakt',
})

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', url: '/en' },
          { name: 'Contact', url: '/en/contact' },
        ]}
      />

      <section className="section-padding">
        <div className="container-content">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h1 className="text-3xl font-bold text-dark-900 sm:text-4xl">
                Request a quote
              </h1>
              <p className="mt-3 text-lg text-dark-500">
                Describe your needs and we will get back to you with a quote within 24 hours.
                The quote is free of charge and without obligation.
              </p>
              <div className="mt-8">
                <ContactFormEn
                  headline="Contact form"
                  subtitle="Fields marked with * are required."
                />
              </div>
            </div>

            <aside className="lg:col-span-2">
              <div className="rounded-xl border border-dark-100 bg-dark-50 p-6">
                <h2 className="text-lg font-semibold text-dark-900">Contact us directly</h2>
                <div className="mt-4 space-y-4 text-sm text-dark-700">
                  <div>
                    <p className="font-medium text-dark-900">Email</p>
                    <a href={`mailto:${CONTACT.email}`} className="text-brand-700 hover:text-brand-500">
                      {CONTACT.email}
                    </a>
                  </div>
                  <div>
                    <p className="font-medium text-dark-900">Response time</p>
                    <p>We typically respond within 24 hours.</p>
                  </div>
                  <div>
                    <p className="font-medium text-dark-900">Coverage</p>
                    <p>All of Sweden</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-dark-100 bg-white p-6">
                <h2 className="text-lg font-semibold text-dark-900">What happens next?</h2>
                <ol className="mt-4 space-y-3 text-sm text-dark-700">
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">1</span>
                    <span>We review your enquiry and respond with questions or a quote within 24 hours.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">2</span>
                    <span>Once the quote is approved, we plan airspace, weather and timing.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">3</span>
                    <span>The flight is carried out. You do not need to be on site.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">4</span>
                    <span>Report with analyses and recommended actions delivered within 48 hours.</span>
                  </li>
                </ol>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
