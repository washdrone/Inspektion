import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { ContactForm } from '@/components/ContactForm'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = createMetadata({
  title: 'Kontakt & offert – Boka drönarinspektion',
  description:
    'Begär en kostnadsfri offert för drönarinspektion. Fyll i formuläret eller kontakta oss direkt via e-post eller telefon. Vi återkommer inom en arbetsdag.',
  path: '/inspektioner-med-dronare/kontakt',
})

export default function KontaktPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Hem', url: '/' },
          { name: 'Inspektioner med drönare', url: '/inspektioner-med-dronare' },
          { name: 'Kontakt', url: '/inspektioner-med-dronare/kontakt' },
        ]}
      />

      <section className="section-padding">
        <div className="container-content">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <h1 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
                Begär offert
              </h1>
              <p className="mt-3 text-lg text-neutral-600">
                Beskriv ert behov så återkommer vi med en offert inom en arbetsdag.
                Offerten är kostnadsfri och utan förpliktelser.
              </p>
              <div className="mt-8">
                <ContactForm
                  headline="Kontaktformulär"
                  subtitle="Fält markerade med * är obligatoriska."
                />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-2">
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <h2 className="text-lg font-semibold text-neutral-900">Kontakta oss direkt</h2>
                <div className="mt-4 space-y-4 text-sm text-neutral-700">
                  <div>
                    <p className="font-medium text-neutral-900">E-post</p>
                    <a href="mailto:info@washdrone.se" className="text-primary-600 hover:text-primary-700">
                      info@washdrone.se
                    </a>
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">Telefon</p>
                    <a href="tel:+46XXXXXXXXX" className="text-primary-600 hover:text-primary-700">
                      +46 (0)XX-XXX XX XX
                    </a>
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">Svarstid</p>
                    <p>Vi svarar normalt inom en arbetsdag.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-neutral-200 bg-white p-6">
                <h2 className="text-lg font-semibold text-neutral-900">Vad händer sedan?</h2>
                <ol className="mt-4 space-y-3 text-sm text-neutral-700">
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">1</span>
                    <span>Vi granskar er förfrågan och återkommer med frågor eller offert.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">2</span>
                    <span>Vid godkänd offert planerar vi inspektion och tidpunkt.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">3</span>
                    <span>Inspektionen genomförs och rapport levereras inom 48 h.</span>
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
