import type { Article } from '@/lib/articles/types'

export const commonFacadeDefects: Article = {
  slug: 'common-facade-defects-and-how-to-detect-them',
  title: 'Common facade defects — and how to detect them in time',
  metaTitle: 'Common facade defects and how to detect them',
  description:
    'Cracks, detached render, frost damage, rebar corrosion and joint defects — a guide to the most common facade defects by material, why they occur and how to detect them before they become expensive.',
  category: 'Roofs & property',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'Facade defects almost always start small — a crack, a damp patch, a crumbling joint — and develop slowly until they suddenly become urgent and expensive. Most defect types also follow known patterns per facade material. This guide covers the most common defects on rendered, brick, concrete and metal facades, why they occur and how they can be detected in time.',
  sections: [
    {
      heading: 'Rendered facades',
      blocks: [
        {
          type: 'list',
          items: [
            '**Cracks** — from settlement, thermal movement or shrinkage. Cracks let in water, which drives further deterioration.',
            '**Detached render (hollow render)** — the render separates from its substrate and can eventually fall. Detachment is not always visible, but bulging areas, crack patterns and moisture staining are warning signs; physical verification is done by tapping.',
            '**Frost damage** — water that has penetrated freezes and bursts the render, typically around damaged areas and where drainage is deficient.',
            '**Moisture and algae staining** — discolouration and growth showing where the facade stays damp.',
          ],
        },
      ],
    },
    {
      heading: 'Brick facades',
      blocks: [
        {
          type: 'list',
          items: [
            '**Joint defects** — crumbling or cracked mortar is the brick facade’s most common problem and lets water into the masonry.',
            '**Frost-damaged bricks** — the surface flakes off (spalling) when moisture in the brick freezes.',
            '**Salt efflorescence** — white deposits showing that water is migrating through the masonry.',
            '**Rusting wall ties and balcony fixings** — concealed steel components that corrode can cause cracking and, in the long run, structural problems.',
          ],
        },
      ],
    },
    {
      heading: 'Concrete and metal facades',
      blocks: [
        {
          type: 'list',
          items: [
            '**Rebar corrosion** — when the concrete’s protective environment breaks down (carbonation) or chlorides penetrate, the reinforcement rusts, expands and bursts off the cover layer. Visible signs: rust staining, cracks and fallen pieces of concrete (spalling).',
            '**Balcony damage** — balcony slabs are particularly exposed; damage to the underside and edges should be taken seriously.',
            '**Corrosion on metal cladding** — rust in seams, at fixings and where the coating has been damaged.',
            '**Loose cassettes and flashings** — fixings that have aged or been loaded incorrectly.',
          ],
        },
      ],
    },
    {
      heading: 'How the defects are detected in time',
      blocks: [
        {
          type: 'p',
          text: 'What nearly all facade defects have in common: they are visible — if someone looks closely enough and often enough. The problem is that large parts of a facade are in practice never examined at close range, because that requires scaffolding or a lift. That is the gap the drone closes:',
        },
        {
          type: 'list',
          items: [
            '**Complete photographic coverage** — the entire facade is photographed at close range in high resolution, including areas never reached in a visual check from the ground. See [facade inspection](/en/services/facade-inspection).',
            '**Thermal analysis** — the [thermal camera](/en/knowledge-base/how-drone-thermography-works) can reveal moisture behind the surface and areas with abnormal temperature patterns that warrant closer examination.',
            '**Comparison over time** — recurring inspections show whether a crack is growing or stable, which guides prioritisation in the [maintenance plan](/en/knowledge-base/maintenance-plans-with-drone-inspection).',
            '**Targeted physical follow-up** — findings that require tapping or sampling are identified, so scaffolding is only erected where it is needed.',
          ],
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Which facade defects are most urgent?',
      answer:
        'Defects that risk falling material — detached render, spalling concrete and loose facade elements — are safety issues and must be dealt with promptly. The property owner is responsible for ensuring the facade does not endanger passers-by.',
    },
    {
      question: 'Can the drone see detached render?',
      answer:
        'Detachment itself is not always visible, but its secondary signs — crack patterns, bulging and moisture staining — are documented, and thermography can provide further indications. Definitive verification is done by tapping the identified areas.',
    },
    {
      question: 'How often should a facade be inspected?',
      answer:
        'An overview check every few years is a common recommendation, more frequently for older facades, exposed locations and where previous defects are being monitored. Balconies and fixings deserve particular attention.',
    },
  ],
  relatedServices: [
    { href: '/en/services/facade-inspection', label: 'Facade Inspection' },
    { href: '/en/services/thermal-inspection', label: 'Thermal Inspection' },
    { href: '/en/industries/property', label: 'Property' },
  ],
  relatedArticles: [
    'maintenance-plans-with-drone-inspection',
    'finding-moisture-damage-with-thermal-inspection',
    'drone-inspection-for-housing-associations',
  ],
}
