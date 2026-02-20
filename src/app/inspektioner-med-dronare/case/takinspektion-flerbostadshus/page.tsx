import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaBand } from '@/components/CtaBand'

export const metadata: Metadata = createMetadata({
  title: 'Kundcase: Takinspektion av flerbostadshus',
  description:
    'Läs hur en fastighetsförvaltare inspekterade 12 flerbostadshus med drönare på två dagar istället för två veckor.',
  path: '/inspektioner-med-dronare/case/takinspektion-flerbostadshus',
})

export default function CaseStudyPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Hem', url: '/' },
          { name: 'Inspektioner med drönare', url: '/inspektioner-med-dronare' },
          { name: 'Kundcase', url: '/inspektioner-med-dronare/case' },
          { name: 'Takinspektion flerbostadshus', url: '/inspektioner-med-dronare/case/takinspektion-flerbostadshus' },
        ]}
      />

      <article className="section-padding">
        <div className="container-content max-w-3xl">
          <span className="inline-block rounded-full bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-700">
            Fastighetsförvaltning
          </span>

          <h1 className="mt-4 text-3xl font-bold text-dark-900 sm:text-4xl">
            Takinspektion av 12 flerbostadshus i Stockholm
          </h1>

          <div className="mt-8 space-y-8 text-dark-700">
            <section>
              <h2 className="text-xl font-semibold text-dark-900">Bakgrund</h2>
              <p className="mt-3 leading-relaxed">
                En fastighetsförvaltare med ett bestånd av flerbostadshus i Stockholmsområdet
                behövde inspektera taken inför en planerad underhållsperiod. Målet var att
                kartlägga skick, identifiera akuta brister och prioritera åtgärder.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dark-900">Utmaning</h2>
              <p className="mt-3 leading-relaxed">
                Med traditionella metoder hade inspektionerna krävt byggnadsställningar eller
                skylift för varje fastighet — en process som uppskattades ta cirka två veckor
                och innebära betydande kostnader och arbetsmiljörisker.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dark-900">Lösning</h2>
              <p className="mt-3 leading-relaxed">
                Vi genomförde drönarinspektioner av samtliga 12 fastigheter under två dagar.
                Varje tak dokumenterades med högupplösta flygbilder och en certifierad pilot
                analyserade materialet för att identifiera skador och slitage.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dark-900">Resultat</h2>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2">
                  <svg className="mt-1 h-4 w-4 flex-shrink-0 text-brand-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>12 fastigheter inspekterade på 2 dagar</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-1 h-4 w-4 flex-shrink-0 text-brand-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Ingen personal behövde arbeta på höjd</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-1 h-4 w-4 flex-shrink-0 text-brand-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Tydligt beslutsunderlag för underhållsprioritering</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-1 h-4 w-4 flex-shrink-0 text-brand-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Digitalt bildarkiv för framtida jämförelser</span>
                </li>
              </ul>
            </section>
          </div>

          <div className="mt-10">
            <Link
              href="/inspektioner-med-dronare/case"
              className="text-sm font-medium text-brand-600 hover:text-brand-700"
            >
              &larr; Tillbaka till alla kundcase
            </Link>
          </div>
        </div>
      </article>

      <CtaBand
        headline="Behöver ni inspektera era fastigheter?"
        description="Kontakta oss för en kostnadsfri offert."
        ctaLabel="Begär offert"
      />
    </>
  )
}
