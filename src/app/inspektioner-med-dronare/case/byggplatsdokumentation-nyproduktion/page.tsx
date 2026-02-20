import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaBand } from '@/components/CtaBand'

export const metadata: Metadata = createMetadata({
  title: 'Kundcase: Byggplatsdokumentation för nyproduktion',
  description:
    'Läs hur ett byggföretag använde regelbunden drönarfotografering för att dokumentera framsteg i ett nyproduktionsprojekt.',
  path: '/inspektioner-med-dronare/case/byggplatsdokumentation-nyproduktion',
})

export default function CaseByggplatsdokumentation() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Hem', url: '/' },
          { name: 'Inspektioner med drönare', url: '/inspektioner-med-dronare' },
          { name: 'Kundcase', url: '/inspektioner-med-dronare/case' },
          { name: 'Byggplatsdokumentation', url: '/inspektioner-med-dronare/case/byggplatsdokumentation-nyproduktion' },
        ]}
      />

      <article className="section-padding">
        <div className="container-content max-w-3xl">
          <span className="inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700">
            Bygg &amp; entreprenad
          </span>

          <h1 className="mt-4 text-3xl font-bold text-neutral-900 sm:text-4xl">
            Byggplatsdokumentation för nyproduktion
          </h1>

          <div className="mt-8 space-y-8 text-neutral-700">
            <section>
              <h2 className="text-xl font-semibold text-neutral-900">Bakgrund</h2>
              <p className="mt-3 leading-relaxed">
                Ett byggföretag i västra Sverige genomförde ett större nyproduktionsprojekt
                och behövde en effektiv metod för att dokumentera byggplatsens framsteg
                och kommunicera status till beställare.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-900">Utmaning</h2>
              <p className="mt-3 leading-relaxed">
                Manuell fotografering från marknivå gav en begränsad bild av projektets
                totala status. Beställaren efterfrågade överskådlig dokumentation som
                tydligt visade framsteg över tid.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-900">Lösning</h2>
              <p className="mt-3 leading-relaxed">
                Vi genomförde flygfotografering varannan vecka under hela byggperioden.
                Materialet bearbetades till ortofoto och tidslinjepresentationer som
                delades med projektledning och beställare.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-900">Resultat</h2>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2">
                  <svg className="mt-1 h-4 w-4 flex-shrink-0 text-accent-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Överskådlig visuell tidslinje av hela projektet</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-1 h-4 w-4 flex-shrink-0 text-accent-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Förbättrad kommunikation med beställare</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-1 h-4 w-4 flex-shrink-0 text-accent-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Tidig upptäckt av avvikelse från planritning</span>
                </li>
              </ul>
            </section>
          </div>

          <div className="mt-10">
            <Link
              href="/inspektioner-med-dronare/case"
              className="text-sm font-medium text-primary-600 hover:text-primary-700"
            >
              &larr; Tillbaka till alla kundcase
            </Link>
          </div>
        </div>
      </article>

      <CtaBand
        headline="Dokumentera ert byggprojekt med drönare"
        description="Kontakta oss för att diskutera upplägg för ert projekt."
        ctaLabel="Begär offert"
      />
    </>
  )
}
