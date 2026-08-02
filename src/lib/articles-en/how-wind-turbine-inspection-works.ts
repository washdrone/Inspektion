import type { Article } from '@/lib/articles/types'

export const howWindTurbineInspectionWorks: Article = {
  slug: 'how-wind-turbine-inspection-works',
  title: 'Wind turbine inspection with drones — how rotor blades and towers are inspected',
  metaTitle: 'Wind turbine inspection with drones — guide',
  description:
    'Rotor blades wear from erosion, lightning strikes and cracking. How wind turbines are inspected with drones: common damage types, how the flight is carried out and why early detection pays off.',
  category: 'Solar & energy',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'Wind turbine inspection with drones means that rotor blades, nacelle and tower are photographed systematically in high resolution while the turbine is stationary. In most cases the method replaces rope access and lifts for recurring condition checks: the entire turbine is documented in a fraction of the time, without personnel at height, and with images that make it possible to track damage development over time.',
  sections: [
    {
      heading: 'Common rotor blade damage',
      blocks: [
        {
          type: 'list',
          items: [
            '**Leading edge erosion** — rain, hail and particles wear the blade’s leading edge, degrading aerodynamics and potentially letting moisture into the laminate.',
            '**Lightning damage** — burn marks, cracks and damage around receptors; wind turbines are among the most lightning-exposed structures in existence.',
            '**Cracks in laminate and gelcoat** — from fatigue, manufacturing defects or mechanical impact.',
            '**Delamination** — layers in the composite material separating, often visible as blisters or surface irregularities.',
            '**Damage to add-ons and accessories** — vortex generators, deflector strips and drainage holes that have been damaged or blocked.',
            '**Leaks at the nacelle and hub** — oil and grease leaks visible as run marks.',
          ],
        },
      ],
    },
    {
      heading: 'How the inspection is carried out',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            '**The turbine is stopped and the blades parked** — the inspection is coordinated with the operations organisation; the blades are set in a suitable position.',
            '**Systematic flight** — each blade is photographed from several sides with even coverage, together with the hub, nacelle and tower.',
            '**Analysis and classification** — damage is identified, measured and classified by severity according to an agreed scale.',
            '**Report** — every anomaly is presented with an image, its position on the blade and a recommendation: remedy now, monitor, or no remarks.',
          ],
        },
        {
          type: 'p',
          text: 'Because the images are position-referenced, the same defect can be tracked between inspections — is the crack growing or stable? That is the information that makes a difference in maintenance planning. Read more about the service at [wind turbine inspection](/en/services/wind-turbine-inspection).',
        },
      ],
    },
    {
      heading: 'Why early detection pays off',
      blocks: [
        {
          type: 'p',
          text: 'Blade damage develops progressively: a minor erosion patch or crack that can be fixed with a simple repair can, if left, grow into damage requiring extensive on-site repair or, at worst, blade replacement. Moreover, even moderate leading edge erosion affects the blade’s aerodynamics and therefore production. Regular inspection means repairs can be made while they are still small — and scheduled for times when the production loss hurts least.',
        },
      ],
    },
    {
      heading: 'Drones compared with rope access and ground-based inspection',
      blocks: [
        {
          type: 'table',
          caption: 'Inspection methods for wind turbines',
          headers: ['Aspect', 'Drone', 'Rope access', 'Camera from the ground'],
          rows: [
            ['Personnel at height', 'No', 'Yes', 'No'],
            ['Downtime per turbine', 'Short — often under a couple of hours', 'Long — often a full day or more', 'Short'],
            ['Image quality and coverage', 'High and systematic, all surfaces', 'High but point-by-point, tactile checks possible', 'Limited by distance and angle'],
            ['Physical repair possible', 'No — documentation only', 'Yes — minor repairs on the spot', 'No'],
          ],
        },
        {
          type: 'p',
          text: 'In practice the methods are used together: the drone handles the recurring, comprehensive condition checks, and rope technicians are deployed selectively where the report shows that physical work is needed — the same two-step principle described in [Drone inspection vs traditional inspection](/en/knowledge-base/drone-inspection-vs-traditional-inspection).',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Does the wind turbine have to be stationary during the inspection?',
      answer:
        'Yes, for blade inspection the turbine is stopped and the blades are parked in a suitable position. The downtime is short, however, compared with methods that require climbing, which reduces the production loss.',
    },
    {
      question: 'How often should rotor blades be inspected?',
      answer:
        'Industry practice is regular inspection, often annually or in line with the manufacturer’s and insurer’s recommendations, and after known lightning strikes or extreme weather.',
    },
    {
      question: 'Can you inspect turbines offshore or in mountain environments?',
      answer:
        'Conditions vary with location, weather and logistics. Contact us with information about the site and we will assess feasibility for your specific case.',
    },
  ],
  relatedServices: [
    { href: '/en/services/wind-turbine-inspection', label: 'Wind Turbine Inspection' },
    { href: '/en/industries/energy', label: 'Energy' },
    { href: '/en/services/thermal-inspection', label: 'Thermal Inspection' },
  ],
  relatedArticles: [
    'drone-inspection-vs-traditional-inspection',
    'what-is-drone-inspection',
    'hotspots-in-solar-panels',
  ],
}
