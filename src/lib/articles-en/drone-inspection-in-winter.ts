import type { Article } from '@/lib/articles/types'

export const droneInspectionInWinter: Article = {
  slug: 'drone-inspection-in-winter',
  title: 'Drone inspection in winter — what works and what needs planning?',
  metaTitle: 'Drone inspection in winter — how it works',
  description:
    'Is drone inspection possible in winter? Yes — thermography of building envelopes often works best during the heating season. How cold, snow and light affect different types of inspections.',
  category: 'Rules & safety',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'Drone inspection works all year round in Sweden — but different inspection types have different best seasons. Thermography of roofs and facades often works best during the cold season, when the temperature difference between inside and outside makes heat loss and moisture problems clearly visible. Solar panel thermography, on the other hand, requires strong sunshine, and snow-covered surfaces can conceal visual damage. With the right planning, winter is therefore not an obstacle but in several cases the best time for an inspection.',
  sections: [
    {
      heading: 'What winter makes better',
      blocks: [
        {
          type: 'list',
          items: [
            '**Thermography of the building envelope** — heat loss, thermal bridges and insulation defects stand out most clearly when it is cold outside and heated inside. Read more in [How drone thermography works](/en/knowledge-base/how-drone-thermography-works).',
            '**Snow-melt patterns** — uneven snow melt on a roof can itself reveal where heat is leaking up through the structure.',
            '**Leafless trees** — facades and roofs hidden by greenery in summer become accessible to the camera.',
            '**Icicles and ice build-up** — recurring ice problems can be documented and traced to their causes, often heat loss or defects in the roof drainage.',
          ],
        },
      ],
    },
    {
      heading: 'What winter makes harder',
      blocks: [
        {
          type: 'list',
          items: [
            '**Snow-covered surfaces** — roof tiles, membranes and details under snow cannot be assessed visually. Visual roof surveys are therefore planned for snow-free conditions.',
            '**Solar panel thermography** — requires good solar irradiance for faults to generate measurable heat; the winter sun is rarely sufficient. The best season is spring to early autumn. See [Hotspots in solar panels](/en/knowledge-base/hotspots-in-solar-panels).',
            '**Shorter battery life** — cold reduces battery capacity, which is handled with pre-warmed batteries and more frequent battery changes. It affects planning but rarely the result.',
            '**Fewer daylight hours** — the daily flight window is shorter, which requires good scheduling for larger objects.',
            '**Weather windows** — snowfall, fog and strong wind stop flights; winter requires greater flexibility in booking.',
          ],
        },
      ],
    },
    {
      heading: 'Season guide for different inspection types',
      blocks: [
        {
          type: 'table',
          caption: 'Best season for different drone inspections',
          headers: ['Inspection type', 'Best season', 'Comment'],
          rows: [
            [
              'Thermography of roofs and facades',
              'Late autumn to early spring',
              'Requires a clear temperature difference inside/outside — the heating season is ideal.',
            ],
            [
              'Visual roof inspection',
              'Snow-free season',
              'Snow-free surfaces are required; spring after the snow melt is popular for capturing winter damage.',
            ],
            [
              'Solar panel thermography',
              'Spring to early autumn',
              'Requires strong solar irradiance (industry practice: at least 600 W/m²).',
            ],
            [
              'Facade inspection (visual)',
              'All year round',
              'Winter can be an advantage when trees are leafless.',
            ],
            [
              'Surveying and mapping',
              'Snow-free season',
              'Snow cover distorts surface models and volumes.',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Practical advice for you as a client',
      blocks: [
        {
          type: 'list',
          items: [
            'Book **thermography well before the heating season** — demand is highest when conditions are at their best.',
            'Plan a **visual roof survey for spring** if the aim is to capture damage from the winter, or for autumn to enter the winter with a known condition.',
            'Allow for **greater flexibility in the schedule** in winter — a reputable operator would rather move the flight than deliver data captured in poor conditions.',
            'Consider combining: **thermography in winter and a visual survey in snow-free conditions** together provide a complete picture of the building’s condition across the year.',
          ],
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Can drones fly in sub-zero temperatures?',
      answer:
        'Yes, professional drones have operating temperature ranges that cover normal Swedish winter conditions. The cold is handled operationally with pre-warmed batteries and shorter flight sessions. In extreme cold the assignment is rescheduled.',
    },
    {
      question: 'Is thermography reliable in cold weather?',
      answer:
        'Yes — for building envelopes it actually becomes more reliable, because the temperature difference between inside and outside is what drives the measurement. However, measurement is avoided in strong sunshine, rain and strong wind regardless of season.',
    },
    {
      question: 'Can you inspect the roof when it is covered in snow?',
      answer:
        'Thermal measurements of heat loss can often be carried out even with some snow cover, but visual assessment of the roofing material requires snow-free surfaces. We recommend a time based on what the inspection is meant to answer.',
    },
  ],
  relatedServices: [
    { href: '/en/services/thermal-inspection', label: 'Thermal Inspection' },
    { href: '/en/services/roof-inspection', label: 'Roof Inspection' },
    { href: '/en/services/facade-inspection', label: 'Facade Inspection' },
  ],
  relatedArticles: [
    'how-drone-thermography-works',
    'how-a-drone-roof-inspection-works',
    'finding-moisture-damage-with-thermal-inspection',
  ],
}
