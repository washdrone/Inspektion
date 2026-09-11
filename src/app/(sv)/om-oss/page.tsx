import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { TrustBar } from '@/components/TrustBar'
import { CtaBand } from '@/components/CtaBand'

export const metadata: Metadata = createMetadata({
  title: 'Om SurveyDrone — Drönarinspektion i hela Sverige',
  description:
    'SurveyDrone erbjuder professionell visuell och termisk drönarinspektion i hela Sverige. EASA-certifierade fjärrpiloter, ansvarsförsäkrade och erfarenhet av ex-klassade zoner.',
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
            <h1 className="page-heading">
              Om SurveyDrone
            </h1>
            <div className="mt-8 space-y-6 text-dark-600 text-body-lg leading-relaxed">
              <p>
                SurveyDrone utför drönarinspektion, inmätning och 3D-kartläggning. Vi hjälper fastighetsägare, förvaltare, energibolag,
                industri och offentlig sektor att inspektera tak, fasader, solceller och anläggningar
                och ta fram dokumentation för underhåll, projektering och uppföljning.
              </p>
              <p>
                Våra piloter är EASA-certifierade fjärrpiloter med erfarenhet av arbete i krävande
                miljöer, inklusive ex-klassade zoner. Vi är ansvarsförsäkrade och opererar i
                hela Sverige.
              </p>
              <p>
                Vi väljer visuell kamera, termisk kamera eller LiDAR efter uppdraget.
                Metod, referenssystem, kvalitetskrav och leveransformat stäms av utifrån
                vad resultatet ska användas till.
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

      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <h2 className="section-heading text-center">Vår utrustning</h2>
            <p className="mt-6 text-body-lg text-dark-600 leading-relaxed text-center">
              Vi flyger med drönare ur DJI:s enterprise-serie tillsammans med utbytbara
              Zenmuse-nyttolaster, utvalda för professionellt inspektions- och kartläggningsarbete.
              Sensorvalet anpassas efter uppdraget.
            </p>
            <h3 className="mt-10 text-xs font-semibold uppercase tracking-widest text-dark-400">Drönare</h3>
            <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="card">
                <h4 className="text-lg font-bold text-dark-900">DJI Matrice 400</h4>
                <p className="mt-2 text-dark-600 leading-relaxed">
                  Bärarplattform för utbytbara Zenmuse-nyttolaster med RTK-positionering. Används
                  för uppdrag som kräver termisk zoominspektion eller laserskanning.
                </p>
              </div>
              <div className="card">
                <h4 className="text-lg font-bold text-dark-900">DJI Matrice 4T</h4>
                <p className="mt-2 text-dark-600 leading-relaxed">
                  Inspektionsdrönare med radiometrisk värmekamera i kombination med högupplösta
                  vidvinkel- och zoomkameror. Används för termisk och visuell inspektion av tak,
                  fasader, solceller och industrianläggningar.
                </p>
              </div>
              <div className="card">
                <h4 className="text-lg font-bold text-dark-900">DJI Matrice 4E</h4>
                <p className="mt-2 text-dark-600 leading-relaxed">
                  Kartläggningsdrönare med högupplöst kamerasystem anpassat för fotogrammetri.
                  Används för drönarinmätning, ortofoto, 3D-modeller och volymberäkning med
                  hög noggrannhet.
                </p>
              </div>
            </div>
            <h3 className="mt-10 text-xs font-semibold uppercase tracking-widest text-dark-400">Nyttolaster</h3>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              <div className="card">
                <h4 className="text-lg font-bold text-dark-900">DJI Zenmuse H30T</h4>
                <p className="mt-2 text-dark-600 leading-relaxed">
                  Kombinerad sensor med radiometrisk värmekamera samt högupplösta vidvinkel- och
                  zoomkameror. Används för termisk och visuell inspektion på avstånd, exempelvis av
                  höga fasader, skorstenar och industrianläggningar.
                </p>
              </div>
              <div className="card">
                <h4 className="text-lg font-bold text-dark-900">DJI Zenmuse L2</h4>
                <p className="mt-2 text-dark-600 leading-relaxed">
                  LiDAR-nyttolast för laserskanning från drönare. Ger klassificerbara punktmoln
                  och kan delvis mäta marken genom vegetation, vilket ger terrängmodeller även
                  där bildbaserad mätning inte räcker.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-muted">
        <div className="container-content">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center section-heading">
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
                  desc: 'Inspektera tak från luften och dokumentera synliga ytor för fortsatt underhåll.',
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
                  desc: 'Inspektera svåråtkomliga anläggningar med planering efter verksamhetens drift och tillträdeskrav.',
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
          <h2 className="text-center section-heading">
            Så arbetar vi
          </h2>
          <div className="mt-8 space-y-6 text-dark-600">
            <p>
              Vi tror på rak kommunikation. Inga floskler, inga uppblåsta löften. Varje rapport vi
              levererar ska vara ett tydligt beslutsunderlag — inte en säljpitch. Hittar vi inget
              anmärkningsvärt säger vi det. Hittar vi allvarliga brister prioriterar vi dem tydligt.
            </p>
            <p>
              Utrustningen ovan används för olika uppdrag. Vi beskriver i offerten vilken
              leverans ni får och vilka förutsättningar som gäller. Vid återkommande uppdrag
              behöver metod och referensunderlag ge meningsfulla jämförelser över tid.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        headline="Vill ni veta mer?"
        description="Kontakta oss för att diskutera ert inspektionsbehov. Vi återkommer så snart vi kan."
        ctaLabel="Kontakta oss"
      />
    </>
  )
}
