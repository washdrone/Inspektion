import type { Article } from '@/lib/articles/types'

export const whatIsPhotogrammetry: Article = {
  slug: 'what-is-photogrammetry',
  title: 'What is photogrammetry? How 3D models are created from aerial images',
  metaTitle: 'What is photogrammetry? A simple explanation',
  description:
    'Photogrammetry is the technique of creating measurable 3D models from overlapping photographs. How the drone-based process works — from flight planning and GSD to point clouds, orthophotos and 3D models.',
  category: 'Surveying & 3D',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'Photogrammetry is the technique of making exact measurements and three-dimensional models from photographs. With a drone, an area or object is photographed from many positions with a large overlap between the images; specialised software then identifies the same points in several images and calculates their position in three dimensions. The result is point clouds, 3D models, orthophotos and elevation models that can be measured with high accuracy.',
  sections: [
    {
      heading: 'How the process works step by step',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            '**Flight planning** — the area is photographed along a pre-planned route where every image overlaps its neighbours, usually by 70–80%.',
            '**Data collection** — the drone flies the route automatically and captures hundreds to thousands of georeferenced images.',
            '**Bundle adjustment (SfM)** — the software finds common points in overlapping images and calculates both the camera positions and the points’ 3D coordinates (Structure from Motion).',
            '**Dense point clouds** — millions of 3D points are computed, forming a detailed digital copy of the surface.',
            '**Final products** — from the point cloud, 3D models, orthophotos, elevation models (DSM/DTM), contour lines and volume calculations are produced.',
          ],
        },
      ],
    },
    {
      heading: 'Key concepts: GSD, GCP and RTK',
      blocks: [
        {
          type: 'table',
          caption: 'Central concepts in drone photogrammetry',
          headers: ['Concept', 'Meaning'],
          rows: [
            [
              '**GSD** (Ground Sample Distance)',
              'Ground resolution — how much ground area one pixel represents. Lower GSD = higher level of detail. Governed mainly by flight altitude and camera.',
            ],
            [
              '**GCP** (Ground Control Points)',
              'Surveyed ground control points that tie the model to a coordinate system and improve accuracy.',
            ],
            [
              '**RTK/PPK**',
              'GNSS techniques that give the drone’s camera positions centimetre-level accuracy — in real time (RTK) or in post-processing (PPK). Reduces the need for ground control points.',
            ],
            [
              '**DSM/DTM**',
              'Digital surface model (including buildings and vegetation) and digital terrain model (bare ground), respectively.',
            ],
            [
              '**Orthophoto**',
              'A geometrically corrected aerial image with uniform scale — works as a map you can measure in.',
            ],
          ],
        },
        {
          type: 'p',
          text: 'More terms are explained in our [glossary](/en/glossary).',
        },
      ],
    },
    {
      heading: 'What is photogrammetry used for?',
      blocks: [
        {
          type: 'list',
          items: [
            '**Volume calculation** — stockpiles, quarries and excavations are measured from the surface model. See [How drone volume calculation works](/en/knowledge-base/how-drone-volume-calculation-works).',
            '**Construction documentation** — progress documentation of construction sites over time, quantity verification and as-built records.',
            '**Mapping** — orthophotos and elevation models for design, management and planning. See [3D mapping](/en/services/3d-mapping).',
            '**Inspection material** — 3D models of buildings and facilities where damage can be located and measured.',
            '**Surveying** — site plans and base data where traditional surveying would be time-consuming. See [3D mapping](/en/services/3d-mapping).',
          ],
        },
      ],
    },
    {
      heading: 'How accurate is drone photogrammetry?',
      blocks: [
        {
          type: 'p',
          text: 'Accuracy depends on several factors: GSD (flight altitude and camera), image overlap, the quality of the GNSS equipment (RTK/PPK), the use of ground control points and the nature of the surface. With the right methodology, drone photogrammetry achieves centimetre-level accuracy in plan, which is sufficient for most applications in construction, civil engineering and property management. For each assignment the methodology is adapted to the accuracy actually required — higher requirements mean lower flight altitude, more control points and more post-processing.',
        },
        {
          type: 'p',
          text: 'Vegetation, water, and shiny or uniformly coloured surfaces are difficult for photogrammetry because the software needs identifiable points in the images. An experienced operator knows where the method works and where supplementary measurement is required.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'What is the difference between photogrammetry and laser scanning (LiDAR)?',
      answer:
        'Photogrammetry computes 3D points from photographs, while LiDAR measures distances directly with laser pulses. LiDAR works better through vegetation and in darkness, while photogrammetry produces photorealistic models and is often lower in cost. The choice depends on the application.',
    },
    {
      question: 'What resolution can a 3D model have?',
      answer:
        'It is governed by the GSD, which in turn is governed by flight altitude and camera. At low altitude over smaller objects, GSD at millimetre to centimetre level can be achieved; when mapping larger areas, a few centimetres per pixel is common.',
    },
    {
      question: 'How long does delivery take?',
      answer:
        'The flight often takes only hours, while the post-processing — which is computationally heavy — can take from hours to a few days depending on the size of the area and the requested final products.',
    },
  ],
  relatedServices: [
    { href: '/en/services/3d-mapping', label: '3D Mapping' },
  ],
  relatedArticles: [
    'how-drone-volume-calculation-works',
    'what-is-drone-inspection',
    'drone-regulations-in-sweden',
  ],
}
