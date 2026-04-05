import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { CONTACT } from '@/lib/constants'
import { ContactForm } from '@/components/ContactForm'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = createMetadata({
  title: 'Begär offert — Drönarinspektion | SurveyDrone',
  description:
    'Begär en kostnadsfri offert för drönarinspektion med termisk kamera. Svar inom 24 timmar. SurveyDrone — EASA-certifierade piloter i hela Sverige.',
  path: '/kontakt',
})

export default function KontaktPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Hem', url: '/' },
          { name: 'Kontakt', url: '/kontakt' },
        ]}
      />

      <section className="section-padding">
        <div className="container-content">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h1 className="page-heading">
                Begär offert
              </h1>
              <p className="mt-3 text-lg text-dark-500">
                Beskriv ert behov så återkommer vi med en offert inom 24 timmar.
                Offerten är kostnadsfri och utan förpliktelser.
              </p>
              <div className="mt-8">
                <ContactForm
                  headline="Kontaktformulär"
                  subtitle="Fält markerade med * är obligatoriska."
                />
              </div>
            </div>

            <aside className="lg:col-span-2">
              <div className="rounded-2xl border border-dark-100 bg-dark-50 p-6">
                <h2 className="text-lg font-semibold text-dark-900">Kontakta oss direkt</h2>
                <div className="mt-4 space-y-4 text-sm text-dark-700">
                  <div>
                    <p className="font-medium text-dark-900">E-post</p>
                    <a href={`mailto:${CONTACT.email}`} className="text-brand-700 hover:text-brand-500">
                      {CONTACT.email}
                    </a>
                  </div>
                  <div>
                    <p className="font-medium text-dark-900">Svarstid</p>
                    <p>Vi svarar normalt inom 24 timmar.</p>
                  </div>
                  <div>
                    <p className="font-medium text-dark-900">Täckning</p>
                    <p>Hela Sverige</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-dark-100 bg-white p-6">
                <h2 className="text-lg font-semibold text-dark-900">Vad händer sedan?</h2>
                <ol className="mt-4 space-y-3 text-sm text-dark-700">
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">1</span>
                    <span>Vi granskar er förfrågan och återkommer med frågor eller offert inom 24 timmar.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">2</span>
                    <span>Vid godkänd offert planerar vi luftrum, väder och tidpunkt.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">3</span>
                    <span>Flygning genomförs. Ni behöver inte vara på plats.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">4</span>
                    <span>Rapport med analyser och åtgärdsförslag levereras inom 48 timmar.</span>
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
