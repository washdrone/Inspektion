import type { Article } from '@/lib/articles/types'

export const documentingStormDamage: Article = {
  slug: 'documenting-storm-damage-to-roofs',
  title: 'Storm damage to roofs — how to document it quickly and safely',
  metaTitle: 'Storm damage to roofs — drone documentation',
  description:
    'After a storm, roof damage needs to be documented quickly — for the insurance claim and to stop consequential damage. How drones are used for safe damage assessment without anyone going up on the roof.',
  category: 'Roofs & property',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'After a storm, two things matter: finding out quickly whether the roof is damaged, and documenting the damage correctly before it is repaired or gets worse. Drone inspection solves both — the entire roof is photographed in high resolution on the same day the weather allows, without anyone having to set foot on a potentially weakened roof. The dated photographic documentation also becomes evidence in the insurance claim.',
  sections: [
    {
      heading: 'Why time is critical after a storm',
      blocks: [
        {
          type: 'list',
          items: [
            '**Consequential damage grows quickly** — a dislodged roof tile or a damaged membrane lets water in with the next rain. What starts as a minor repair can become moisture damage within the structure.',
            '**Insurance requires due care** — the property owner is expected to limit the extent of the damage. Prompt documentation shows the damage has been handled responsibly.',
            '**Causation must be provable** — the closer to the storm the documentation is made, the more clearly the damage can be linked to the event rather than to neglected maintenance.',
            '**Contractors are overbooked** — after major storms, roofing contractors are under heavy pressure. A clear damage report lets you request quotes immediately and get a proper place in the queue.',
          ],
        },
      ],
    },
    {
      heading: 'Common storm damage the drone finds',
      blocks: [
        {
          type: 'list',
          items: [
            'Dislodged, displaced or missing roof tiles and metal sheets',
            'Torn or creased membranes on low-slope roofs',
            'Damaged or fallen chimney components, cowls and flashings',
            'Fallen branches and impact damage from flying objects',
            'Damaged gutters, downpipes and snow guards',
            'Damage to solar panels and their mountings',
            'Aerials, ventilation cowls and other roof equipment out of position',
          ],
        },
        {
          type: 'p',
          text: 'Where needed, the visual review is supplemented with [thermal imaging](/en/knowledge-base/finding-moisture-damage-with-thermal-inspection) to check whether water has already penetrated beneath the surface layer.',
        },
      ],
    },
    {
      heading: 'Why the drone is the right tool after a storm',
      blocks: [
        {
          type: 'list',
          items: [
            '**Safety** — a storm-damaged roof can have hidden weaknesses; no one needs to walk on it to assess the situation.',
            '**Speed** — the flight takes place as soon as the wind has dropped, without waiting for scaffolding or a lift.',
            '**Completeness** — the entire roof surface is documented systematically, not just what can be seen from the ground or a ladder.',
            '**Evidential value** — dated, high-resolution and georeferenced images form robust evidence in the insurance claim.',
            '**Comparability** — if a previous inspection exists, the before and after conditions can be compared directly, making the causal link clear.',
          ],
        },
      ],
    },
    {
      heading: 'How it works — from call to report',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            '**Contact** — describe the property and what has happened. In urgent situations a rapid flight is prioritised as soon as the weather allows.',
            '**Flight** — the roof is documented systematically; obvious hazard areas (loose parts that could fall) are reported immediately.',
            '**Report** — the damage is marked, classified and compiled with recommendations on what requires urgent action and what can be planned.',
            '**Use** — the report is sent to the insurer and used as the basis for quotes from roofing contractors.',
          ],
        },
        {
          type: 'p',
          text: 'A proactive alternative: with an up-to-date [roof inspection](/en/services/roof-inspection) on file, a documented before-condition already exists the day the storm arrives — read more about regular checks in [How a drone roof inspection works](/en/knowledge-base/how-a-drone-roof-inspection-works).',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'How soon after the storm can you fly?',
      answer:
        'As soon as the wind is below safe levels and visibility is sufficient — often the same or the next day. We assess conditions continuously and prioritise urgent damage cases.',
    },
    {
      question: 'Do insurance companies accept drone documentation?',
      answer:
        'Dated and clear photographic documentation is generally strong evidence when reporting a claim. The requirements in the individual case are determined by your insurer — check with them, and use the report as support.',
    },
    {
      question: 'What should I do urgently before the inspection?',
      answer:
        'Secure the area beneath the roof if parts risk falling, document visible damage from the ground and report the damage to your insurer. Do not go up on the roof — that is exactly the risk the drone inspection removes.',
    },
  ],
  relatedServices: [
    { href: '/en/services/roof-inspection', label: 'Roof Inspection' },
    { href: '/en/services/moisture-inspection', label: 'Moisture Inspection' },
    { href: '/en/industries/insurance', label: 'Insurance' },
  ],
  relatedArticles: [
    'how-a-drone-roof-inspection-works',
    'finding-moisture-damage-with-thermal-inspection',
    'drone-inspection-for-housing-associations',
  ],
}
