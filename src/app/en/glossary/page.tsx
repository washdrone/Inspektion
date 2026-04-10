import type { Metadata } from 'next'
import { BASE_URL, createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaBand } from '@/components/CtaBand'

export const metadata: Metadata = createMetadata({
  title: 'Glossary — Drone Inspection Terms',
  description:
    'Explanations of common terms in drone inspection and thermal analysis: hotspot, IRT, radiometric camera, NDVI, orthophoto, photogrammetry, PDRA S-01 and more.',
  path: '/en/glossary',
  locale: 'en',
  alternateLocalePath: '/ordlista',
})

const terms = [
  {
    id: 'delta-t',
    term: '\u0394T (Delta T)',
    definition: 'The temperature difference between a deviating point and the surrounding material. Used to assess the severity of a thermal anomaly. A larger \u0394T often indicates a more serious defect.',
  },
  {
    id: 'emissivity',
    term: 'Emissivity',
    definition: 'A material\'s ability to emit thermal radiation, expressed as a value between 0 and 1. Correctly set emissivity in the camera is crucial for reliable thermal measurements. Different materials have different emissivity values.',
  },
  {
    id: 'photogrammetry',
    term: 'Photogrammetry',
    definition: 'A technique for creating three-dimensional models and measurements from overlapping photographs taken from different angles. Used in 3D mapping and construction site documentation with drones.',
  },
  {
    id: 'gsd',
    term: 'GSD (Ground Sample Distance)',
    definition: 'Ground resolution — the distance on the ground that corresponds to one pixel in the image. Lower GSD means higher detail. During inspections we fly low enough to ensure that relevant details are visible.',
  },
  {
    id: 'hotspot',
    term: 'Hotspot',
    definition: 'A point or area with an anomalous temperature identified with a thermal camera. Hotspots in solar panels can indicate defective cells, dirty surfaces or electrical faults affecting performance.',
  },
  {
    id: 'cold-bridge',
    term: 'Cold bridge (thermal bridge)',
    definition: 'A part of a building\'s thermal envelope where insulation is inadequate, leading to increased heat loss. Cold bridges appear clearly as warmer areas on thermal images taken from outside during the heating season.',
  },
  {
    id: 'ndvi',
    term: 'NDVI (Normalized Difference Vegetation Index)',
    definition: 'A measure of vegetation health based on how plants reflect different wavelengths of light. Used in inspection of green roofs and in mapping soil and vegetation conditions.',
  },
  {
    id: 'orthophoto',
    term: 'Orthophoto',
    definition: 'An aerial image that has been geometrically corrected so that it has a uniform scale and can be used as a map. Orthophotos enable accurate measurements of distances and areas directly in the image.',
  },
  {
    id: 'pdra-s-01',
    term: 'PDRA S-01',
    definition: 'A European standard scenario (Predefined Risk Assessment) for drone operations in populated areas. PDRA S-01 requires pilot training, operational procedures and risk management. The certification demonstrates that the operator has the competence to fly safely in urban environments.',
  },
  {
    id: 'radiometric-camera',
    term: 'Radiometric camera',
    definition: 'A thermal camera that measures and records exact temperature values for each pixel in the image. Unlike simpler thermal cameras, fully radiometric data collection enables quantitative analysis and precise temperature measurements in post-processing.',
  },
  {
    id: 'rtk-positioning',
    term: 'RTK positioning',
    definition: 'Real-Time Kinematic — a GNSS technique that provides centimetre-level positioning accuracy. RTK positioning ensures that images and measurement data can be linked to exact coordinates, which is essential for georeferencing and repeated inspections.',
  },
  {
    id: 'thermal-imaging',
    term: 'Thermal imaging / IRT (infrared thermography)',
    definition: 'A technique for visualising and measuring thermal radiation that is invisible to the eye. Thermal imaging reveals temperature differences on surfaces, making it possible to identify moisture, insulation defects, electrical faults and other hidden problems without destructive intervention.',
  },
]

export default function GlossaryPage() {
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
                name: 'Glossary — Drone Inspection Terms',
                url: `${BASE_URL}/en/glossary`,
              },
            }))
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { name: 'Home', url: '/en' },
          { name: 'Glossary', url: '/en/glossary' },
        ]}
      />

      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="page-heading">
              Glossary — Drone Inspection Terms
            </h1>
            <p className="mt-4 text-lg text-dark-500">
              Short explanations of common terms in drone inspection and thermal analysis,
              written for decision-makers — not engineers.
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
              <div key={t.id} id={t.id} className="card scroll-mt-28">
                <h2 className="text-lg font-bold text-dark-900">{t.term}</h2>
                <p className="mt-2 text-dark-600 leading-relaxed">{t.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        headline="Have more questions?"
        description="Contact us — we are happy to explain more about technology, process and what suits your needs."
        ctaLabel="Contact us"
        ctaHref="/en/contact"
      />
    </>
  )
}
