import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { TrustBar } from '@/components/TrustBar'
import { CtaBand } from '@/components/CtaBand'

export const metadata: Metadata = createMetadata({
  title: 'Om SurveyDrone — Drönarinspektion i hela Sverige',
  description:
    'SurveyDrone erbjuder professionell drönarinspektion med termisk kamera i hela Sverige. EASA-certifierade fjärrpiloter, ansvarsförsäkrade och erfarenhet av ex-klassade zoner.',
  path: '/om-oss',
})

export default function OmOssPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Hem', url: '/' },
          { name: 'Om oss', url: '/om-oss' },
        ]}
      />

      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold text-dark-900 sm:text-4xl lg:text-display">
              Om SurveyDrone
            </h1>
            <div className="mt-8 space-y-6 text-dark-600 text-body-lg leading-relaxed">
              <p>
                SurveyDrone utför professionella drönarinspektioner med branschledande termisk kamera
                och högupplöst bildteknik. Vi hjälper fastighetsägare, förvaltare, energibolag,
                industri och offentlig sektor att inspektera tak, fasader, solceller och anläggningar
                — snabbare, säkrare och mer kostnadseffektivt än traditionella metoder.
              </p>
              <p>
                Våra piloter är EASA-certifierade fjärrpiloter med erfarenhet av arbete i krävande
                miljöer, inklusive ex-klassade zoner. Vi är ansvarsförsäkrade och opererar i
                hela Sverige.
              </p>
              <p>
                All datainsamling sker med fullradiometrisk termisk kamera och RTK/GNSS-positionering
                med centimeternoggrannhet. Det ger exakta, georefererade resultat som kan jämföras
                mellan inspektionstillfällen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TrustBar
        items={[
          'EASA-certifierade fjärrpiloter',
          'Ansvarsförsäkrade',
          'Erfarenhet av ex-klassade zoner',
          'Verksamma i hela Sverige',
        ]}
        variant="light"
      />

      <section className="section-padding section-muted">
        <div className="container-content">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-2xl font-bold text-dark-900 sm:text-3xl">
              Vad vi erbjuder
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Termisk inspektion',
                  desc: 'Fullradiometrisk datainsamling som avslöjar dolda skador, fukt och köldbryggor.',
                  href: '/tjanster/termisk-inspektion',
                },
                {
                  title: 'Takinspektion',
                  desc: 'Inspektera tak utan ställningar eller risk för fall. Alla taktyper och material.',
                  href: '/tjanster/takinspektion',
                },
                {
                  title: 'Fasadinspektion',
                  desc: 'Dokumentera fasadens skick utan skylift. Sprickor, fukt och avflagning.',
                  href: '/tjanster/fasadinspektion',
                },
                {
                  title: 'Solcellsinspektion',
                  desc: 'Hitta hotspots och defekta paneler med termisk analys från luften.',
                  href: '/tjanster/solcellsinspektion',
                },
                {
                  title: 'Industriinspektion',
                  desc: 'Inspektera svåråtkomliga anläggningar utan driftstopp eller ställningsarbete.',
                  href: '/tjanster/industriinspektion',
                },
                {
                  title: '3D-kartläggning',
                  desc: 'Ortofoto, 3D-modeller och fotogrammetri för mätning och dokumentation.',
                  href: '/tjanster/3d-kartlaggning',
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="card group"
                >
                  <h3 className="font-semibold text-dark-900 group-hover:text-brand-700">{item.title}</h3>
                  <p className="mt-2 text-sm text-dark-500">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-center text-2xl font-bold text-dark-900 sm:text-3xl">
            Vår approach
          </h2>
          <div className="mt-8 space-y-6 text-dark-600">
            <p>
              Vi tror på rak kommunikation. Inga floskler, inga uppblåsta löften. Varje rapport vi
              levererar ska vara ett tydligt beslutsunderlag — inte en säljpitch. Hittar vi inget
              anmärkningsvärt säger vi det. Hittar vi allvarliga brister prioriterar vi dem tydligt.
            </p>
            <p>
              Vi kommunicerar utrustning generellt eftersom tekniken utvecklas snabbt. Det som spelar
              roll är resultatet: georefererade, fullradiometriska data av hög kvalitet som ni kan
              agera på.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        headline="Vill ni veta mer?"
        description="Kontakta oss för att diskutera ert inspektionsbehov. Vi svarar inom en arbetsdag."
        ctaLabel="Kontakta oss"
      />
    </>
  )
}
