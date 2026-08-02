import type { Article } from '@/lib/articles/types'

export const howDroneThermographyWorks: Article = {
  slug: 'how-drone-thermography-works',
  title: 'How drone thermography works',
  metaTitle: 'Drone thermography — how the technology works',
  description:
    'Drone thermography uses a thermal camera that measures infrared radiation and reveals temperature differences on surfaces. Guide to the technology, radiometric data and what the method can reveal.',
  category: 'Thermography & moisture',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'Drone thermography means that a thermal camera mounted on the drone measures the infrared radiation that all surfaces emit and converts it into an image where temperature differences are shown on a colour scale. Because many building and facility problems produce abnormal surface temperatures — moisture, insulation defects, electrical faults, defective solar cells — thermography can reveal problems that are completely invisible to the eye.',
  sections: [
    {
      heading: 'What does a thermal camera actually measure?',
      blocks: [
        {
          type: 'p',
          text: 'A thermal camera does not see temperature directly — it measures infrared radiation from the surface. How much radiation a surface emits depends both on its temperature and on the material’s **emissivity**, that is, its ability to emit thermal radiation. For the measurement to be correct, the camera must be set with the right emissivity for the material, and factors such as reflections, distance and humidity must be taken into account.',
        },
        {
          type: 'p',
          text: 'Professional inspections are carried out with **radiometric cameras** that store an exact temperature value for every pixel. This means the images can be analysed quantitatively afterwards — temperatures can be measured, adjusted and compared — instead of merely providing a colourful snapshot.',
        },
      ],
    },
    {
      heading: 'What can thermography detect?',
      blocks: [
        {
          type: 'list',
          items: [
            '**Moisture damage** — damp materials change temperature more slowly and are cooled by evaporation, producing visible patterns. Read more in [Finding moisture damage with thermal inspection](/en/knowledge-base/finding-moisture-damage-with-thermal-inspection).',
            '**Insulation defects and thermal bridges** — areas where heat leaks out show up clearly when the building envelope is thermographed.',
            '**Defective solar cells** — hotspots, string faults and diode faults produce characteristic heat patterns. See [Hotspots in solar panels](/en/knowledge-base/hotspots-in-solar-panels).',
            '**Electrical faults** — overheated connections and components in, for example, switchgear and installations.',
            '**Process anomalies in industry** — tank levels, blocked pipes and leaks can show up thermally.',
          ],
        },
      ],
    },
    {
      heading: 'Why drones and thermography are a powerful combination',
      blocks: [
        {
          type: 'p',
          text: 'Traditional thermography from the ground is limited by the viewing angle — roofs, tall facades and large solar farms cannot be thermographed effectively from below. The drone positions the camera squarely against the surface at the right distance, covers large areas quickly and can repeat exactly the same flight route on later occasions, making the measurements comparable over time.',
        },
      ],
    },
    {
      heading: 'When are conditions right for thermography?',
      blocks: [
        {
          type: 'p',
          text: 'Thermography places demands on weather and timing, and the requirements differ depending on what is being inspected:',
        },
        {
          type: 'table',
          caption: 'Conditions for different types of thermography',
          headers: ['Inspection type', 'Favourable conditions'],
          rows: [
            [
              'Building envelope (roof, facade)',
              'A clear temperature difference between inside and outside, normally during the heating season. Overcast or dark — direct sunlight disturbs the measurement.',
            ],
            [
              'Solar installations',
              'Good solar irradiance is required for faults to generate heat — the industry standard IEC 62446-3 specifies at least 600 W/m². Clear weather and low wind.',
            ],
            [
              'Moisture surveys on low-slope roofs',
              'Often evening or night flights after a sunny day, when damp areas retain heat longer than dry ones.',
            ],
          ],
        },
        {
          type: 'p',
          text: 'A reputable operator therefore plans the inspection around both the purpose and the weather forecast — and would rather reschedule than deliver data that cannot be interpreted.',
        },
      ],
    },
    {
      heading: 'From thermal image to decision support',
      blocks: [
        {
          type: 'p',
          text: 'Raw thermal images are only the first step. In the analysis, the thermograms are reviewed alongside ordinary visual images, deviations are classified by severity and the result is compiled into a report with clear recommendations. Thermal anomalies should always be interpreted by someone who understands both the technology and the structure — a warm spot can be a serious fault or a completely normal phenomenon depending on the context.',
        },
        {
          type: 'p',
          text: 'Want to know more about the service? See [thermal inspection](/en/services/thermal-inspection).',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Can a thermal camera see through walls?',
      answer:
        'No. A thermal camera only measures the temperature of the surface. However, conditions inside the structure — such as moisture or missing insulation — can affect the surface temperature so that they become indirectly visible.',
    },
    {
      question: 'What is the difference between a radiometric and a non-radiometric thermal camera?',
      answer:
        'A radiometric camera stores temperature values for every pixel, which means the image can be analysed and measured afterwards. A non-radiometric camera only shows a colour image without measurement data, which limits its professional usefulness.',
    },
    {
      question: 'Does thermography work in winter?',
      answer:
        'Yes — for building envelopes the winter months are often the best time, because the temperature difference between inside and outside is then at its greatest. Solar panels, by contrast, require good solar irradiance, making spring to early autumn the best period.',
    },
    {
      question: 'What training is required to interpret thermal images?',
      answer:
        'Taking a thermal image is easy — interpreting it correctly requires knowledge of heat transfer, materials and building physics. Misinterpretation is the most common source of error in thermography, so always engage a provider who can show how the analysis is carried out and reported.',
    },
  ],
  relatedServices: [
    { href: '/en/services/thermal-inspection', label: 'Thermal Inspection' },
    { href: '/en/services/solar-panel-inspection', label: 'Solar Panel Inspection' },
    { href: '/en/services/moisture-inspection', label: 'Moisture Inspection' },
  ],
  relatedArticles: [
    'finding-moisture-damage-with-thermal-inspection',
    'hotspots-in-solar-panels',
    'what-is-drone-inspection',
  ],
}
