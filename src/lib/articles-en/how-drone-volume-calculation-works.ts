import type { Article } from '@/lib/articles/types'

export const howDroneVolumeCalculationWorks: Article = {
  slug: 'how-drone-volume-calculation-works',
  title: 'How drone volume calculation works',
  metaTitle: 'Drone volume calculation — how it works',
  description:
    'Drone volume calculation measures stockpiles, quarries and excavations by creating a 3D surface model from aerial images and comparing it against a reference plane. How the measurement works and what affects accuracy.',
  category: 'Surveying & 3D',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'Drone volume calculation means that material stockpiles, quarries or excavations are photographed from the air, a detailed 3D surface model is created from the images using photogrammetry, and the volume is then calculated by comparing the surface model against a reference plane or a previous survey. The method is fast, non-contact and documented — and staff never need to walk on the stockpiles.',
  sections: [
    {
      heading: 'The measurement step by step',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            '**Flight** — the drone photographs the area along a planned route with high image overlap. For a typical stockyard the flight often takes less than an hour.',
            '**3D modelling** — the images are processed into a dense point cloud and a surface model of the stockpiles. Read more about the technology in [What is photogrammetry?](/en/knowledge-base/what-is-photogrammetry)',
            '**Delineation** — the extent of each stockpile is defined, either automatically or by an operator who performs quality checks.',
            '**Calculation** — the volume is calculated between the surface model and a reference plane (the ground surface), or against a previous survey to obtain the change.',
            '**Report** — the result is delivered with volumes per stockpile, an orthophoto and documentation of the calculation basis.',
          ],
        },
      ],
    },
    {
      heading: 'What affects accuracy?',
      blocks: [
        {
          type: 'list',
          items: [
            '**Ground resolution (GSD)** — a lower flight altitude gives more measurement points per square metre and a more detailed surface model.',
            '**Georeferencing** — RTK/PPK positioning and ground control points determine how precisely the model sits in the coordinate system.',
            '**Quality of the reference plane** — the volume is calculated against a base surface; a surveyed baseline surface gives more reliable results than an assumed flat plane.',
            '**Stockpile shape and surroundings** — vegetation, water or material overhanging edges may require manual handling in the calculation.',
            '**Consistent methodology** — for recurring surveys, the same flight altitude, delineation and calculation method are the key to comparable results.',
          ],
        },
        {
          type: 'p',
          text: 'Carried out correctly, drone-based volume calculation achieves an accuracy that is more than sufficient for inventory accounting, quantity verification and production monitoring — and the big win is that the entire surface is measured, not just a handful of profiles.',
        },
      ],
    },
    {
      heading: 'Comparison with traditional methods',
      blocks: [
        {
          type: 'table',
          caption: 'Volume calculation: drone compared with traditional methods',
          headers: ['Aspect', 'Drone', 'GNSS rover/total station'],
          rows: [
            [
              'Measurement points',
              'Millions of points — the entire surface is modelled.',
              'Selected points and profiles — the surface is interpolated in between.',
            ],
            [
              'Time in the field',
              'Often under an hour per area.',
              'Hours to days depending on the number of stockpiles.',
            ],
            [
              'Safety',
              'No one needs to walk on stockpiles or slopes.',
              'Survey staff walk on the material — risk of collapse and slipping.',
            ],
            [
              'Impact on operations',
              'Production can continue — the flight takes place overhead.',
              'Machines may need to stop in the survey area.',
            ],
            [
              'Documentation',
              'Orthophoto and 3D model are included as evidence.',
              'A list of points — harder to review afterwards.',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Common applications',
      blocks: [
        {
          type: 'list',
          items: [
            '**Stock inventory** — regular volume monitoring of raw material and product stockpiles, often ahead of financial year-end.',
            '**Quarries** — production monitoring and material for permit reporting.',
            '**Construction and civil engineering** — quantity verification of cut and fill against contracts.',
            '**Landfills** — monitoring of deposited volume and remaining capacity.',
          ],
        },
        {
          type: 'p',
          text: 'Read more about our surveying services on the [3D mapping](/en/services/3d-mapping) page.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'How often should volumes be measured?',
      answer:
        'It depends on the operation. Many quarries and terminals measure quarterly or monthly for stock monitoring, and always ahead of financial year-end. Construction projects often measure at contractual reconciliation points.',
    },
    {
      question: 'Can volumes be measured in winter?',
      answer:
        'Yes, but snow cover on the stockpiles affects the result, because the camera measures the snow surface, not the material surface. Surveys are therefore preferably planned for snow-free conditions or after the stockpiles have been cleared.',
    },
    {
      question: 'What material do you need from us?',
      answer:
        'Ideally an overview of the area and which stockpiles are to be measured, and if applicable the coordinate system you want the delivery in. If previous surveys exist, they can be used as a reference for change calculations.',
    },
  ],
  relatedServices: [
    { href: '/en/services/3d-mapping', label: '3D Mapping' },
  ],
  relatedArticles: [
    'what-is-photogrammetry',
    'what-is-drone-inspection',
    'drone-regulations-in-sweden',
  ],
}
