import type { Article } from '@/lib/articles/types'

export const thermalBridgesAndHeatLoss: Article = {
  slug: 'thermal-bridges-and-heat-loss',
  title: 'Thermal bridges and heat loss — finding the energy thieves in the building envelope',
  metaTitle: 'Thermal bridges and heat loss — guide',
  description:
    'Thermal bridges and heat loss increase energy costs and can cause condensation and mould. What a thermal bridge is, where they typically occur and how drone thermography maps the building envelope.',
  category: 'Thermography & moisture',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'A thermal bridge is a part of the building envelope where heat escapes considerably more easily than through the surrounding structure — for example where a concrete balcony passes through the wall or where the insulation is deficient. Thermal bridges and air leaks increase energy use, reduce comfort and can create cold interior surfaces where condensation and, in time, mould can develop. With thermography they are mapped quickly across the entire building.',
  sections: [
    {
      heading: 'What is a thermal bridge?',
      blocks: [
        {
          type: 'p',
          text: 'Heat always takes the easiest way out. A thermal bridge occurs where a material with high thermal conductivity interrupts the insulation, or where the insulation is thinner, damaged or poorly installed. A distinction is often made between **structural thermal bridges** — built into the structure, such as floor slab edges, balcony fixings and window reveals — and **defects**, such as missing or slumped insulation and air leaks around penetrations.',
        },
        {
          type: 'list',
          items: [
            '**Typical locations**: floor slab edges, balcony fixings, window and door connections, eaves, corners, penetrations and fixings in the facade.',
            '**Consequences**: higher heating costs, cold floors and draughts, cold interior surfaces with a risk of condensation, mould and, at worst, moisture damage.',
          ],
        },
      ],
    },
    {
      heading: 'How heat loss appears in the thermal camera',
      blocks: [
        {
          type: 'p',
          text: 'When it is cold outside and heated inside, heat leaks out through the weak points of the building envelope — and these appear as warmer areas on the building’s exterior in the thermal image. If the building is instead thermographed from the inside, the same defects show as cold surfaces. A [drone-mounted thermal camera](/en/knowledge-base/how-drone-thermography-works) makes external thermography efficient even on tall buildings and large roofs, where ladders and lifts otherwise limit what can be seen.',
        },
        {
          type: 'p',
          text: 'Reliable results require the right conditions: a clear temperature difference between inside and outside, no direct sunlight disturbing the measurement and stable weather. Building thermography is therefore normally carried out during the heating season, preferably in overcast weather or during the dark hours — more on this in [Drone inspection in winter](/en/knowledge-base/drone-inspection-in-winter).',
        },
      ],
    },
    {
      heading: 'What can the results be used for?',
      blocks: [
        {
          type: 'list',
          items: [
            '**Prioritising energy measures** — the mapping shows where additional insulation and sealing will do the most good, instead of remediating at random.',
            '**Checking completed work** — thermography after additional insulation or new construction shows whether the workmanship is up to standard.',
            '**Investigating comfort problems** — draughts and cold rooms can be traced to their physical causes.',
            '**Preventing moisture problems** — cold interior surfaces with a condensation risk are identified before mould damage develops.',
            '**Complementing energy audits** — the thermograms provide the visual evidence that the figures in an energy performance certificate lack.',
          ],
        },
        {
          type: 'p',
          text: 'Thermography of the building envelope is ordered as a [thermal inspection](/en/services/thermal-inspection) and is often combined with a [roof inspection](/en/services/roof-inspection) on the same occasion.',
        },
      ],
    },
    {
      heading: 'Interpretation determines the value',
      blocks: [
        {
          type: 'p',
          text: 'Not every warm area in a thermal image is a fault — chimneys, ventilation outlets and sun-warmed surfaces are normal phenomena, and material differences can produce patterns that resemble defects. The value lies in the interpretation: distinguishing structural thermal bridges from remediable defects, assessing severity and linking the findings to the right measure. Always ask for a report in which every anomaly is commented on and classified, not just a collection of colourful images.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Can all thermal bridges be remedied?',
      answer:
        'No — structural thermal bridges such as floor slab edges are built into the building and can rarely be eliminated entirely without major reconstruction. Defects such as missing insulation and air leaks, however, can often be remedied effectively, and the mapping shows which is which.',
    },
    {
      question: 'At what time of year is building thermography carried out?',
      answer:
        'During the heating season, when the difference between indoor and outdoor temperature is clear. Standard practice is to avoid direct sunlight — overcast days, evenings and nights provide the best measurement conditions.',
    },
    {
      question: 'Is external thermography sufficient?',
      answer:
        'External drone thermography covers the entire building envelope efficiently and is often the right starting point. For specific problems — for example draughts in a particular apartment — internal thermography can be a complement to pinpoint the cause.',
    },
  ],
  relatedServices: [
    { href: '/en/services/thermal-inspection', label: 'Thermal Inspection' },
    { href: '/en/services/facade-inspection', label: 'Facade Inspection' },
    { href: '/en/industries/property', label: 'Property' },
  ],
  relatedArticles: [
    'how-drone-thermography-works',
    'drone-inspection-in-winter',
    'finding-moisture-damage-with-thermal-inspection',
  ],
}
