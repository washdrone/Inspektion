import type { Article } from '@/lib/articles/types'

export const findingMoistureDamage: Article = {
  slug: 'finding-moisture-damage-with-thermal-inspection',
  title: 'Finding moisture damage with thermal inspection — how it works',
  metaTitle: 'Finding moisture damage with thermal inspection',
  description:
    'Thermal inspection can reveal moisture in roofs and facades through temperature patterns — without opening up the structure. How the method works, when it is reliable and how findings are verified.',
  category: 'Thermography & moisture',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'Moisture is rarely visible until the damage is already extensive. With thermal inspection, suspected moisture damage in roofs, facades and structures can be located without destructive intervention — the thermal camera reveals the temperature patterns that moisture creates. The method pinpoints where the problem is, so that sampling and remediation can be targeted precisely instead of searching at random.',
  sections: [
    {
      heading: 'Why is moisture visible to a thermal camera?',
      blocks: [
        {
          type: 'p',
          text: 'The thermal camera does not see the water itself — it sees the water’s effect on the surface temperature. Three physical mechanisms make moisture visible thermally:',
        },
        {
          type: 'list',
          items: [
            '**Evaporative cooling** — when moisture evaporates from a surface it cools down, and the damp area becomes colder than its surroundings.',
            '**Thermal inertia** — water stores a great deal of heat. Damp materials warm up and cool down more slowly than dry ones, producing visible differences when the ambient temperature changes.',
            '**Degraded insulation** — wet insulation conducts heat considerably better than dry insulation, creating clear patterns when the building envelope is thermographed.',
          ],
        },
      ],
    },
    {
      heading: 'Where is the method most useful?',
      blocks: [
        {
          type: 'list',
          items: [
            '**Low-slope and terrace roofs** — moisture in the roof insulation can be mapped across the entire surface, often with evening or night flights when damp areas retain the day’s heat longer.',
            '**Facades** — moisture penetration, leaking joints and damaged connections around windows and balconies.',
            '**Connections and penetrations** — around chimneys, skylights, ventilation penetrations and gutters, where leaks often begin.',
            '**After water damage** — to delimit how far the moisture has spread before remediation.',
          ],
        },
        {
          type: 'p',
          text: 'The drone makes it possible to thermograph entire roof and facade surfaces in a short time — even on buildings that would otherwise require scaffolding or a lift. Read more about [moisture inspection](/en/services/moisture-inspection) and [roof inspection](/en/services/roof-inspection).',
        },
      ],
    },
    {
      heading: 'Important: thermal findings must be verified',
      blocks: [
        {
          type: 'p',
          text: 'A thermal anomaly is an **indication**, not proof. Shadows, reflections, material differences and thermal bridges can produce patterns that resemble moisture. A professional approach therefore means that thermal findings are verified — for example with a moisture indicator or moisture content measurement at the identified locations — before remediation is decided. The strength of the method is that verification can be directed exactly where the camera points, instead of opening up large areas unnecessarily.',
        },
      ],
    },
    {
      heading: 'When does the method work — and when does it not?',
      blocks: [
        {
          type: 'table',
          caption: 'Conditions for thermal moisture surveys',
          headers: ['Condition', 'Significance'],
          rows: [
            [
              'Temperature dynamics',
              'The method requires that the surface has warmed up and is cooling (or vice versa) — that is when the difference between damp and dry emerges.',
            ],
            [
              'Dry weather at the time of measurement',
              'Rain-soaked surfaces give misleading images — the entire surface is then cold and wet.',
            ],
            [
              'Accessible surface',
              'The surface must be visible to the camera. Moisture deep inside a structure with no effect on the surface temperature cannot be seen.',
            ],
            [
              'Skilled interpretation',
              'Material transitions and reflections must be distinguishable from genuine moisture patterns.',
            ],
          ],
        },
      ],
    },
    {
      heading: 'What do you get in the report?',
      blocks: [
        {
          type: 'p',
          text: 'After the inspection a report is delivered in which the thermograms are presented side by side with ordinary images, suspected moisture areas are marked on an overview image of the roof or facade, and each anomaly is commented on with recommended follow-up. This gives property owners and managers a concrete basis for ordering the right remediation — neither more nor less.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Can thermography find all moisture in a building?',
      answer:
        'No. Thermography detects moisture that affects the surface temperature. Moisture deep inside structures with no thermal effect on the surface cannot be seen. The method is therefore a mapping tool, supplemented with moisture measurement where needed.',
    },
    {
      question: 'At what time of day are thermal moisture surveys of roofs carried out?',
      answer:
        'Often in the evening or at night after a warm, sunny day. Damp areas in the roof insulation then retain heat longer than dry areas and appear as warmer patches in the thermal image.',
    },
    {
      question: 'Does the inspection damage the roof or facade in any way?',
      answer:
        'No. Thermal drone inspection is completely non-contact. Only when a suspected area needs to be verified may moisture measurement requiring contact with the material become relevant.',
    },
    {
      question: 'What does a thermal moisture inspection cost?',
      answer:
        'It depends on the size of the surface, the complexity of the building and the scope of the report. See our pricing guide or request a quote for a concrete assessment.',
    },
  ],
  relatedServices: [
    { href: '/en/services/moisture-inspection', label: 'Moisture Inspection' },
    { href: '/en/services/thermal-inspection', label: 'Thermal Inspection' },
    { href: '/en/services/roof-inspection', label: 'Roof Inspection' },
  ],
  relatedArticles: [
    'how-drone-thermography-works',
    'how-a-drone-roof-inspection-works',
    'what-is-drone-inspection',
  ],
}
