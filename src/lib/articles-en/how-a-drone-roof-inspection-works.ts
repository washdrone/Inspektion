import type { Article } from '@/lib/articles/types'

export const howADroneRoofInspectionWorks: Article = {
  slug: 'how-a-drone-roof-inspection-works',
  title: 'How a drone roof inspection works — step by step',
  metaTitle: 'How a drone roof inspection works',
  description:
    'A drone roof inspection is carried out in four steps: planning, flight, analysis and report. Guide to what happens in each step, what is documented and what the report contains.',
  category: 'Roofs & property',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'A drone roof inspection is carried out in four steps: preparation and flight planning, the flight itself, analysis of the imagery and finally delivery of the report. For a normal-sized property the flight often takes less than an hour, and no one needs to set foot on the roof. The result is a complete, documented record of the roof’s condition.',
  sections: [
    {
      heading: 'Step 1: Preparation and flight planning',
      blocks: [
        {
          type: 'p',
          text: 'Before the flight, the pilot maps the object and its surroundings: the layout of the roof, obstacles such as chimneys and cables, the local airspace and any restrictions. A risk assessment is carried out in accordance with the applicable [drone regulations](/en/knowledge-base/drone-regulations-in-sweden), and the flight route is planned so that the entire roof surface is covered with the right image overlap and level of detail.',
        },
        {
          type: 'p',
          text: 'As the client you normally only need to provide the address, any drawings and information about what should be examined in particular — for example known problem areas or previous leaks.',
        },
      ],
    },
    {
      heading: 'Step 2: Flight and data collection',
      blocks: [
        {
          type: 'p',
          text: 'The drone flies systematically over the roof and photographs the entire surface in high resolution — overview images for context and detailed images of critical areas such as the ridge, connections, penetrations and gutters. Where needed, the visual documentation is supplemented with [thermal imaging](/en/knowledge-base/how-drone-thermography-works), which can reveal moisture beneath the surface layer.',
        },
        {
          type: 'list',
          items: [
            'Activities in the building can continue as normal during the flight.',
            'No scaffolding, lift or roof safety equipment is needed for the inspection itself.',
            'The images are georeferenced so that every finding can be placed exactly on the roof.',
          ],
        },
      ],
    },
    {
      heading: 'Step 3: Analysis of the material',
      blocks: [
        {
          type: 'p',
          text: 'After the flight, the imagery is reviewed systematically. Typical findings in a roof inspection are:',
        },
        {
          type: 'list',
          items: [
            'Cracked, displaced or missing roof tiles',
            'Damage to metal details, seams and flashings',
            'Cracks or blisters in the membrane on low-slope roofs',
            'Rust and corrosion on metal roofs and fixings',
            'Damage around penetrations, chimneys and skylights',
            'Blocked or damaged gutters and downpipes',
            'Moss and vegetation retaining moisture',
            'Defects in roof safety equipment',
          ],
        },
        {
          type: 'p',
          text: 'Each deviation is classified by severity so that urgent problems can be distinguished from items that can be scheduled into upcoming maintenance.',
        },
      ],
    },
    {
      heading: 'Step 4: Report and recommendations',
      blocks: [
        {
          type: 'p',
          text: 'The result is compiled into a digital report with high-resolution images in which damage is marked, an overview damage map, classification of the findings and prioritised recommendations. The report serves as a basis for requesting quotes from roofing contractors, for the [maintenance plan](/en/knowledge-base/drone-inspection-for-housing-associations) and as documentation in insurance claims.',
        },
      ],
    },
    {
      heading: 'Why not just climb up and look?',
      blocks: [
        {
          type: 'p',
          text: 'Roof work is subject to occupational safety rules requiring fall protection, and every time a roof is walked on there is both risk and potential wear on the roofing material. The drone removes the risk from the inspection itself and also provides more complete documentation — the entire roof is photographed methodically instead of being assessed from the points a person can reach safely. A detailed comparison is available in [Drone inspection vs traditional inspection](/en/knowledge-base/drone-inspection-vs-traditional-inspection).',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'How often should a roof be inspected?',
      answer:
        'A common recommendation is to review the roof regularly — ideally annually and after severe storms. Regular inspection means small defects are discovered before they cause consequential damage such as moisture in the structure.',
    },
    {
      question: 'Does it work on all types of roof?',
      answer:
        'Yes — roof tiles, metal, felt, sedum and other materials can all be inspected. The method is particularly valuable on steep, tall or hard-to-reach roofs where a traditional survey is hazardous or requires a lift.',
    },
    {
      question: 'What happens if you find serious damage?',
      answer:
        'Serious findings are highlighted clearly in the report with a recommendation for prompt action. The report’s images allow a roofing contractor to assess and quote for the work directly from the material.',
    },
    {
      question: 'Can the roof inspection be combined with anything else?',
      answer:
        'Yes, it is common to combine a roof inspection with a facade inspection or a thermal moisture survey on the same occasion — this provides a complete picture of the building envelope at a lower total cost than separate visits.',
    },
  ],
  relatedServices: [
    { href: '/en/services/roof-inspection', label: 'Roof Inspection' },
    { href: '/en/services/facade-inspection', label: 'Facade Inspection' },
    { href: '/en/services/moisture-inspection', label: 'Moisture Inspection' },
  ],
  relatedArticles: [
    'finding-moisture-damage-with-thermal-inspection',
    'drone-inspection-vs-traditional-inspection',
    'drone-inspection-for-housing-associations',
  ],
}
