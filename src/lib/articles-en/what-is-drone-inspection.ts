import type { Article } from '@/lib/articles/types'

export const whatIsDroneInspection: Article = {
  slug: 'what-is-drone-inspection',
  title: 'What is drone inspection? A complete guide',
  metaTitle: 'What is drone inspection? Complete guide',
  description:
    'Drone inspection means a camera-equipped drone documents the condition of roofs, facades, solar panels or industrial facilities. Learn how the method works, when it is suitable and what you get.',
  category: 'Basics & methods',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'Drone inspection means that a remotely piloted drone equipped with a high-resolution camera — and often a thermal camera as well — flies over or along an object and documents its condition. The method is used for roofs, facades, solar installations, industrial facilities and infrastructure, and provides detailed imagery without scaffolding, lifts or hazardous work at height.',
  sections: [
    {
      heading: 'How does a drone inspection work?',
      blocks: [
        {
          type: 'p',
          text: 'A certified remote pilot plans the flight based on the layout of the object, its surroundings and applicable airspace rules. The drone then flies systematically over or along the object, capturing high-resolution images — supplemented where needed with thermal images that show temperature differences on the surface. The material is analysed afterwards and compiled into a report with marked deviations and recommended actions.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            '**Planning** — the object, the airspace and the risks are assessed before the flight.',
            '**Data collection** — the drone photographs the object systematically, often along pre-planned flight routes.',
            '**Analysis** — the images are reviewed and deviations are identified and classified.',
            '**Report** — the result is delivered as a structured report with images, a damage map and recommendations.',
          ],
        },
        {
          type: 'p',
          text: 'The whole process is described step by step on the page [How it works](/en/how-it-works).',
        },
      ],
    },
    {
      heading: 'What can be inspected with drones?',
      blocks: [
        {
          type: 'list',
          items: [
            '**Roofs** — roof tiles, metal roofing, felt roofing, chimneys, gutters and roof safety equipment. Read more about [drone roof inspection](/en/services/roof-inspection).',
            '**Facades** — render, brickwork, joints, balconies and fixings. See [facade inspection](/en/services/facade-inspection).',
            '**Solar installations** — defective cells, string faults and hotspots are identified with a thermal camera. See [solar panel inspection](/en/services/solar-panel-inspection).',
            '**Industrial facilities** — chimneys, tanks, pipe bridges and other hard-to-reach structures. See [industrial inspection](/en/services/industrial-inspection).',
            '**Wind turbines** — rotor blades and towers. See [wind turbine inspection](/en/services/wind-turbine-inspection).',
            '**Land and volumes** — stockpiles, quarries and construction sites are surveyed and measured with [drone surveying and 3D mapping](/en/services/3d-mapping).',
          ],
        },
      ],
    },
    {
      heading: 'Advantages compared with traditional inspection',
      blocks: [
        {
          type: 'list',
          items: [
            '**Safety** — no one needs to climb onto the roof or work from scaffolding for the inspection itself.',
            '**Access** — the drone reaches steep roofs, tall facades and confined spaces that would otherwise require a lift or climbers.',
            '**Documentation** — high-resolution, georeferenced images provide an objective record that can be compared over time.',
            '**Thermal analysis** — the thermal camera reveals hidden problems such as moisture, insulation defects and electrical faults that the eye cannot see.',
            '**Minimal disruption** — activities in the building can continue as normal during the inspection.',
          ],
        },
        {
          type: 'p',
          text: 'A detailed comparison is available in the article [Drone inspection vs traditional inspection](/en/knowledge-base/drone-inspection-vs-traditional-inspection).',
        },
      ],
    },
    {
      heading: 'Limitations to be aware of',
      blocks: [
        {
          type: 'p',
          text: 'Drone inspection is a powerful tool but does not replace every form of survey. A drone cannot tap on materials, measure moisture in the structure with direct contact or open up surface layers. Where findings require physical verification, the drone imagery is supplemented with an on-site survey. Weather also sets limits: strong wind, precipitation and poor visibility may mean the flight has to be rescheduled.',
        },
      ],
    },
    {
      heading: 'What does a drone inspection cost?',
      blocks: [
        {
          type: 'p',
          text: 'The cost depends on the size and complexity of the object, its location, the type of data collected and how comprehensive a report is required. An overview of what affects the price is available in our [pricing guide](/en/pricing).',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Who is allowed to carry out drone inspections?',
      answer:
        'Commercial drone operators in the EU must be registered and remote pilots must have the training required under the EU drone regulations. SurveyDrone’s pilots are EASA-certified and the company carries liability insurance.',
    },
    {
      question: 'How long does a drone inspection take?',
      answer:
        'The flight itself often takes considerably less time than a traditional inspection — for a normal-sized property it is usually a matter of hours rather than days. Analysis and reporting follow afterwards.',
    },
    {
      question: 'Do we need to prepare anything before the inspection?',
      answer:
        'Normally only access to the area and information about the object are needed. The pilot handles the risk assessment, any permits and the flight planning. When inspecting roofs or facades, the building does not need to be evacuated.',
    },
    {
      question: 'Does drone inspection work all year round?',
      answer:
        'Yes, with some limitations. Strong wind, heavy precipitation and very poor visibility prevent flying. Thermography of building envelopes often works best during the heating season, while solar panel thermography requires good solar irradiance.',
    },
  ],
  relatedServices: [
    { href: '/en/services/roof-inspection', label: 'Roof Inspection' },
    { href: '/en/services/facade-inspection', label: 'Facade Inspection' },
    { href: '/en/services/solar-panel-inspection', label: 'Solar Panel Inspection' },
    { href: '/en/services/thermal-inspection', label: 'Thermal Inspection' },
  ],
  relatedArticles: [
    'drone-inspection-vs-traditional-inspection',
    'drone-regulations-in-sweden',
    'how-drone-thermography-works',
  ],
}
