import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaBand } from '@/components/CtaBand'

export const metadata: Metadata = createMetadata({
  title: 'Ordlista — Termer inom drönarinspektion',
  description:
    'Förklaringar av vanliga termer inom drönarinspektion och termisk analys: hotspot, IRT, radiometrisk kamera, NDVI, ortofoto, fotogrammetri, PDRA S-01 med mera.',
  path: '/ordlista',
})

const terms = [
  {
    id: 'delta-t',
    term: 'ΔT (Delta T)',
    definition: 'Temperaturskillnaden mellan en avvikande punkt och omgivande material. Används för att bedöma allvarlighetsgraden av en termisk avvikelse. Större ΔT indikerar ofta en allvarligare brist.',
  },
  {
    id: 'emissivitet',
    term: 'Emissivitet',
    definition: 'Ett materials förmåga att avge värmestrålning, uttryckt som ett tal mellan 0 och 1. Korrekt inställd emissivitet i kameran är avgörande för att termiska mätningar ska vara tillförlitliga. Olika material har olika emissivitet.',
  },
  {
    id: 'fotogrammetri',
    term: 'Fotogrammetri',
    definition: 'Teknik för att skapa tredimensionella modeller och mätningar utifrån överlappande fotografier tagna från olika vinklar. Används vid 3D-kartläggning och byggplatsdokumentation med drönare.',
  },
  {
    id: 'gsd',
    term: 'GSD (Ground Sample Distance)',
    definition: 'Markupplösning — avståndet på marken som motsvarar en pixel i bilden. Lägre GSD innebär högre detaljnivå. Vid inspektioner flyger vi tillräckligt lågt för att säkerställa att relevanta detaljer syns.',
  },
  {
    id: 'hotspot',
    term: 'Hotspot',
    definition: 'En punkt eller yta med avvikande temperatur som identifieras med termisk kamera. Hotspots i solcellspaneler kan indikera defekta celler, smutsiga ytor eller elektriska fel som påverkar prestandan.',
  },
  {
    id: 'koldbrygga',
    term: 'Köldbrygga',
    definition: 'En del av en byggnads klimatskal där värmeisoleringen är bristfällig, vilket leder till ökad värmeförlust. Köldbryggor syns tydligt som varmare områden på termiska bilder tagna utifrån under uppvärmningssäsong.',
  },
  {
    id: 'ndvi',
    term: 'NDVI (Normalized Difference Vegetation Index)',
    definition: 'Ett mått på vegetationens hälsa baserat på hur växter reflekterar olika våglängder av ljus. Används vid inspektion av gröna tak och vid kartläggning av mark- och vegetationsförhållanden.',
  },
  {
    id: 'ortofoto',
    term: 'Ortofoto',
    definition: 'En flygbild som korrigerats geometriskt så att den har en enhetlig skala och kan användas som en karta. Ortofoto möjliggör noggranna mätningar av avstånd och areor direkt i bilden.',
  },
  {
    id: 'pdra-s-01',
    term: 'PDRA S-01',
    definition: 'Ett europeiskt standardscenario (Predefined Risk Assessment) för drönardrift i tätbebyggt område. PDRA S-01 ställer krav på pilotens utbildning, operativa procedurer och riskhantering. Certifieringen visar att operatören har kompetens att flyga säkert i stadsmiljö.',
  },
  {
    id: 'radiometrisk-kamera',
    term: 'Radiometrisk kamera',
    definition: 'En termisk kamera som mäter och lagrar exakta temperaturvärden för varje pixel i bilden. Till skillnad från enklare värmekameror ger fullradiometrisk datainsamling möjlighet till kvantitativ analys och noggranna temperaturmätningar i efterbearbetningen.',
  },
  {
    id: 'rtk-positionering',
    term: 'RTK-positionering',
    definition: 'Real-Time Kinematic — en GNSS-teknik som ger centimeternoggrannhet vid positionering. RTK-positionering säkerställer att bilder och mätdata kan kopplas till exakta koordinater, vilket är avgörande för georeferering och upprepade inspektioner.',
  },
  {
    id: 'termisk-imaging',
    term: 'Termisk imaging / IRT (infraröd termografi)',
    definition: 'Teknik för att visualisera och mäta värmestrålning som är osynlig för ögat. Termisk imaging avslöjar temperaturskillnader på ytor, vilket gör det möjligt att identifiera fukt, isoleringsbrister, elektriska fel och andra dolda problem utan destruktiva ingrepp.',
  },
]

export default function OrdlistaPage() {
  return (
    <>
      {/* DefinedTerm schema for each term */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            terms.map((t) => ({
              '@context': 'https://schema.org',
              '@type': 'DefinedTerm',
              name: t.term,
              description: t.definition,
              inDefinedTermSet: {
                '@type': 'DefinedTermSet',
                name: 'Ordlista — Termer inom drönarinspektion',
                url: 'https://www.surveydrone.se/ordlista',
              },
            }))
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { name: 'Hem', url: '/' },
          { name: 'Ordlista', url: '/ordlista' },
        ]}
      />

      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold text-dark-900 sm:text-4xl">
              Ordlista — Termer inom drönarinspektion
            </h1>
            <p className="mt-4 text-lg text-dark-500">
              Korta förklaringar av vanliga begrepp inom drönarinspektion och termisk analys,
              skrivna för beslutsfattare — inte ingenjörer.
            </p>
          </div>

          {/* Anchor links */}
          <div className="mx-auto mt-8 max-w-3xl">
            <div className="flex flex-wrap gap-2 justify-center">
              {terms.map((t) => (
                <a
                  key={t.id}
                  href={`#${t.id}`}
                  className="rounded-lg border border-dark-100 px-3 py-1.5 text-sm font-medium text-brand-700 transition-colors hover:border-brand-500 hover:bg-brand-50"
                >
                  {t.term.split(' (')[0].split(' /')[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Terms */}
          <div className="mx-auto mt-12 max-w-3xl space-y-8">
            {terms.map((t) => (
              <div key={t.id} id={t.id} className="scroll-mt-28 rounded-xl border border-dark-100 bg-white p-6 shadow-card">
                <h2 className="text-lg font-bold text-dark-900">{t.term}</h2>
                <p className="mt-2 text-dark-600 leading-relaxed">{t.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        headline="Har ni fler frågor?"
        description="Kontakta oss — vi förklarar gärna mer om teknik, process och vad som passar ert behov."
        ctaLabel="Kontakta oss"
      />
    </>
  )
}
