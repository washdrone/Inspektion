import type { Article } from '@/lib/articles/types'

export const droneInspectionVsTraditional: Article = {
  slug: 'drone-inspection-vs-traditional-inspection',
  title: 'Drone inspection vs traditional inspection — which fits when?',
  metaTitle: 'Drone inspection vs traditional inspection',
  description:
    'Comparison between drone inspection and traditional surveying with scaffolding, lifts or climbing: safety, documentation, cost and limitations — and when the methods complement each other.',
  category: 'Basics & methods',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'Drone inspection in many cases replaces scaffolding, lifts and climbing for the inspection itself — it is faster to carry out, removes the risk of work at height and provides more complete photographic documentation. Traditional methods retain their role, however, when something needs to be examined physically: tapping render, measuring moisture with direct contact or opening up structures. In practice the methods complement each other.',
  sections: [
    {
      heading: 'The comparison in brief',
      blocks: [
        {
          type: 'table',
          caption: 'Drone inspection compared with traditional inspection',
          headers: ['Aspect', 'Drone inspection', 'Traditional inspection'],
          rows: [
            [
              'Safety',
              'No time spent at height — the pilot stands on the ground.',
              'Work at height with requirements for fall protection, scaffolding or a lift.',
            ],
            [
              'Set-up',
              'No set-up — the drone launches from the ground.',
              'Scaffolding or a lift must be ordered, erected and dismantled.',
            ],
            [
              'Time to complete',
              'Often hours for a normal-sized property.',
              'Often days including set-up, depending on the object.',
            ],
            [
              'Documentation',
              'Systematic, georeferenced and comparable photographic coverage of the entire surface.',
              'Depends on the surveyor’s notes and photos from accessible points.',
            ],
            [
              'Thermal analysis',
              'Can be included in the same flight.',
              'Requires separate thermography, often with a limited viewing angle.',
            ],
            [
              'Physical examination',
              'Not possible — a non-contact method.',
              'Possible: tapping, moisture measurement, sampling, dismantling.',
            ],
            [
              'Weather dependency',
              'Cannot fly in strong wind or heavy precipitation.',
              'Less weather-sensitive but also affected by slippery surfaces and wind.',
            ],
          ],
        },
      ],
    },
    {
      heading: 'When is the drone the right choice?',
      blocks: [
        {
          type: 'list',
          items: [
            '**Regular condition checks** — annual reviews of roofs and facades without the cost of scaffolding. See [roof inspection](/en/services/roof-inspection) and [facade inspection](/en/services/facade-inspection).',
            '**Hard-to-reach objects** — tall buildings, steep roofs, chimneys, masts and [industrial facilities](/en/services/industrial-inspection).',
            '**Large areas** — solar farms, large roof areas and property portfolios where manual inspection would take an unreasonable amount of time.',
            '**Ahead of procurement** — a documented baseline lets contractors quote on the same evidence.',
            '**After a storm or incident** — rapid damage assessment without waiting for scaffolding, often important in insurance claims.',
          ],
        },
      ],
    },
    {
      heading: 'When is a traditional survey needed?',
      blocks: [
        {
          type: 'list',
          items: [
            '**Physical verification** — suspected detached render needs to be tapped, moisture needs to be measured in the material, fixings need to be tightened or load-tested.',
            '**Concealed spaces** — attics, crawl spaces and shafts that cannot be seen from outside.',
            '**Remedial work** — when repairs are being carried out anyway, the scaffolding is already in place for closer examination.',
            '**Formal surveys** — some forms of survey require, by contract or established practice, the physical presence of a certified surveyor.',
          ],
        },
      ],
    },
    {
      heading: 'The smart approach: combine the methods',
      blocks: [
        {
          type: 'p',
          text: 'The most cost-effective approach is often the two-step principle: let the drone map the whole object first, then direct physical work exactly where it is needed. Instead of erecting scaffolding around the entire facade "just in case", it is only erected where the drone documentation has shown that action is required. The drone report also becomes an objective basis for requesting quotes and for following up completed work.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Is drone inspection cheaper than traditional inspection?',
      answer:
        'For the inspection itself the cost is often lower because scaffolding, lifts and set-up time are eliminated. The total saving depends on the object — it is greatest for tall, steep or hard-to-reach buildings. Request a quote for a concrete comparison for your specific object.',
    },
    {
      question: 'Can a drone report be used in insurance claims?',
      answer:
        'Yes, dated and georeferenced photographic documentation is good evidence when reporting a claim. Check with your insurer what requirements apply in the individual case.',
    },
    {
      question: 'Does the drone miss damage that a surveyor would find?',
      answer:
        'The drone sees the surface in greater detail than the eye at a distance, but it cannot feel, tap or measure within the material. Damage with no visual or thermal signature may therefore require physical examination. That is why we recommend the combination: map with the drone, verify physically where needed.',
    },
  ],
  relatedServices: [
    { href: '/en/services/roof-inspection', label: 'Roof Inspection' },
    { href: '/en/services/facade-inspection', label: 'Facade Inspection' },
    { href: '/en/how-it-works', label: 'How It Works' },
  ],
  relatedArticles: [
    'what-is-drone-inspection',
    'how-a-drone-roof-inspection-works',
    'drone-regulations-in-sweden',
  ],
}
