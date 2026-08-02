import type { Article } from '@/lib/articles/types'

export const howAccurateIsDroneSurveying: Article = {
  slug: 'how-accurate-is-drone-surveying',
  title: 'How accurate is drone surveying? GSD, RTK and control points explained',
  metaTitle: 'How accurate is drone surveying?',
  description:
    'Drone surveying can achieve centimetre-level accuracy with the right methodology. How GSD, RTK/PPK, ground control points and surface characteristics affect accuracy — and how to choose the right level for your project.',
  category: 'Surveying & 3D',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'Carried out correctly, drone surveying can achieve centimetre-level accuracy — fully sufficient for most applications in construction, civil engineering and property management. But accuracy is not a property of the drone itself: it is determined by the ground resolution (GSD), the positioning technique (RTK/PPK), the use of ground control points and the nature of the surface. The most important question is therefore not "how accurate is the drone?" but "what accuracy does my project require?".',
  sections: [
    {
      heading: 'Four factors that govern accuracy',
      blocks: [
        {
          type: 'table',
          caption: 'Factors affecting accuracy in drone surveying',
          headers: ['Factor', 'What it affects', 'How it is controlled'],
          rows: [
            [
              '**GSD** (ground resolution)',
              'The level of detail — how small objects can be distinguished and measured.',
              'Flight altitude and camera resolution. Lower altitude gives lower (better) GSD.',
            ],
            [
              '**Positioning** (RTK/PPK)',
              'How precisely each image’s position is known.',
              'GNSS corrections in real time (RTK) or in post-processing (PPK) give centimetre level instead of metre level.',
            ],
            [
              '**Ground control points** (GCP)',
              'The model’s tie to the coordinate system and verification of the result.',
              'Surveyed, marked points in the area. Even with RTK, check points are used for verification.',
            ],
            [
              '**Surface characteristics**',
              'How well the software can match points between images.',
              'Vegetation, water and uniformly coloured surfaces degrade the result; structure and texture improve it.',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Absolute and relative accuracy — an important distinction',
      blocks: [
        {
          type: 'p',
          text: '**Relative accuracy** describes how correct measurements are within the model — for example the distance between two points or the volume of a stockpile. **Absolute accuracy** describes how well the model sits in the real-world coordinate system. A model can have excellent relative accuracy but a poorer absolute position, which is perfectly adequate for [volume calculation](/en/knowledge-base/how-drone-volume-calculation-works) but not for setting out against designed lines. Which type of accuracy is needed governs the choice of method — and the cost.',
        },
      ],
    },
    {
      heading: 'What accuracy do different applications need?',
      blocks: [
        {
          type: 'list',
          items: [
            '**Visual documentation and overviews** — GSD matters most; absolute position is less important.',
            '**Volume calculation** — high relative accuracy is required; consistent methodology between surveys is crucial.',
            '**Quantity verification and as-built records** — both relative and absolute accuracy are needed; control points and check measurements are recommended.',
            '**Design base data** — the highest requirements; low flight altitude, RTK/PPK and marked control points with documented verification.',
          ],
        },
        {
          type: 'p',
          text: 'In every surveying assignment within [3D mapping](/en/services/3d-mapping), the methodology is adapted to the project’s actual requirements — always flying at maximum accuracy would mean charging for precision that goes unused.',
        },
      ],
    },
    {
      heading: 'How accuracy is verified',
      blocks: [
        {
          type: 'p',
          text: 'A serious delivery reports not just the result but also its quality. This is done through check points — surveyed points not used in the computation — where the model’s values are compared with the surveyed ones. The deviations are compiled into a quality report that accompanies the delivery. Always ask how accuracy has been verified when commissioning survey work.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Can drone surveying completely replace traditional surveying?',
      answer:
        'For surfaces and volumes the drone is often superior in efficiency. For individual points with the highest requirements, measurement under vegetation or indoor surveying, a total station, GNSS rover or scanner is still needed. The methods complement each other.',
    },
    {
      question: 'What does it mean that a drone has RTK?',
      answer:
        'That it receives GNSS corrections in real time and therefore knows its position with centimetre accuracy instead of metre accuracy. This greatly improves the model’s georeferencing and reduces the need for ground control points — but does not replace check measurements.',
    },
    {
      question: 'How does vegetation affect the survey result?',
      answer:
        'Photogrammetry measures what the camera sees — that is, the top of the vegetation, not the ground beneath. For ground models in vegetated areas, filtering, supplementary measurement or laser scanning that partially penetrates vegetation is required.',
    },
  ],
  relatedServices: [
    { href: '/en/services/3d-mapping', label: '3D Mapping' },
  ],
  relatedArticles: [
    'what-is-photogrammetry',
    'what-is-an-orthophoto',
    'how-drone-volume-calculation-works',
  ],
}
