import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaBand } from '@/components/CtaBand'

export const metadata: Metadata = createMetadata({
  title: 'Kundcase: Solcellsinspektion av kommersiell anläggning',
  description:
    'Läs hur en solcellsanläggning med över 500 paneler inspekterades med drönare och hur skadade paneler identifierades.',
  path: '/inspektioner-med-dronare/case/solcellsinspektion-kommersiell',
})

export default function CaseSolcellsinspektion() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Hem', url: '/' },
          { name: 'Inspektioner med drönare', url: '/inspektioner-med-dronare' },
          { name: 'Kundcase', url: '/inspektioner-med-dronare/case' },
          { name: 'Solcellsinspektion', url: '/inspektioner-med-dronare/case/solcellsinspektion-kommersiell' },
        ]}
      />

      <article className="section-padding">
        <div className="container-content max-w-3xl">
          <span className="inline-block rounded-full bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-700">
            Energi
          </span>

          <h1 className="mt-4 text-3xl font-bold text-dark-900 sm:text-4xl">
            Solcellsinspektion av kommersiell anläggning
          </h1>

          <div className="mt-8 space-y-8 text-dark-700">
            <section>
              <h2 className="text-xl font-semibold text-dark-900">Bakgrund</h2>
              <p className="mt-3 leading-relaxed">
                Ägaren till en kommersiell solcellsanläggning med över 500 paneler
                noterade sjunkande energiproduktion och ville identifiera orsaken
                utan att behöva inspektera varje panel manuellt.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dark-900">Utmaning</h2>
              <p className="mt-3 leading-relaxed">
                Manuell inspektion av 500+ paneler på tak skulle ta flera dagar och
                kräva arbete på höjd. Anläggningens storlek gjorde det svårt att
                lokalisera specifika problemområden utan systematisk överblick.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dark-900">Lösning</h2>
              <p className="mt-3 leading-relaxed">
                Vi genomförde en systematisk drönarflygning över hela anläggningen
                med högupplöst kamera. Bildmaterialet analyserades för att identifiera
                synliga skador, nedsmutsning och mekaniska avvikelser.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dark-900">Resultat</h2>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2">
                  <svg className="mt-1 h-4 w-4 flex-shrink-0 text-brand-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Hela anläggningen inspekterad på en halv dag</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-1 h-4 w-4 flex-shrink-0 text-brand-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Flera paneler med synliga skador identifierade</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-1 h-4 w-4 flex-shrink-0 text-brand-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Tydlig rapport med åtgärdsförslag för reparation och rengöring</span>
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
        headline="Behöver ni inspektera era solceller?"
        description="Kontakta oss för en kostnadsfri offert."
        ctaLabel="Begär offert"
      />
    </>
  )
}
