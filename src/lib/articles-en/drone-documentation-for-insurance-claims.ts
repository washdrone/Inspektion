import type { Article } from '@/lib/articles/types'

export const droneDocumentationForInsuranceClaims: Article = {
  slug: 'drone-documentation-for-insurance-claims',
  title: 'Drone documentation for insurance claims — how to strengthen your case',
  metaTitle: 'Drone documentation for insurance claims',
  description:
    'When roofs and facades are damaged, the documentation determines how smoothly the insurance claim proceeds. How drone imagery is used before and after damage, and what property owners should consider.',
  category: 'Roofs & property',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'In an insurance claim, the documentation is often decisive: what is damaged, how extensive is the damage and what caused it? Drone inspection provides dated, high-resolution and georeferenced images of roofs and facades — both as evidence after damage has occurred, and as a documented before-condition if damage has not yet occurred. This speeds up claims handling and reduces the scope for dispute about the cause and extent of the damage.',
  sections: [
    {
      heading: 'The role of documentation in the claim',
      blocks: [
        {
          type: 'p',
          text: 'When a claim is reported, the insurer needs to understand three things: the **extent** of the damage, its **cause** and the property’s **condition before the event**. Gaps in any of these lead to questions, requests for further information and, at worst, disputes about what should be compensated. Systematic drone documentation addresses all three:',
        },
        {
          type: 'list',
          items: [
            '**Extent** — the entire roof or facade is documented, not just what happens to be visible from the ground. No damage is missed or discovered late.',
            '**Cause** — images taken close to the event make it easier to distinguish a sudden event (storm, falling tree) from gradual deterioration.',
            '**Before-condition** — a previous inspection report shows the property’s condition before the damage, which is the strongest evidence for the causal link.',
          ],
        },
      ],
    },
    {
      heading: 'Typical situations where drone documentation is used',
      blocks: [
        {
          type: 'list',
          items: [
            '**Storm damage** — fast, safe documentation without walking on a damaged roof. See the guide [Documenting storm damage to roofs](/en/knowledge-base/documenting-storm-damage-to-roofs).',
            '**Water damage** — [thermal inspection](/en/knowledge-base/finding-moisture-damage-with-thermal-inspection) delimits the spread of moisture as a basis for the scope of remediation.',
            '**Snow load and collapse damage** — documentation of deformations and damage to roofs and roof equipment.',
            '**Damage to solar installations** — hail and storm damage as well as electrical faults are documented visually and thermally.',
            '**Liability claims** — e.g. when parts falling from a building have damaged property, and the building’s condition needs to be established.',
          ],
        },
      ],
    },
    {
      heading: 'Proactive documentation — the before-condition as insurance',
      blocks: [
        {
          type: 'p',
          text: 'The best claim is the one that never becomes a dispute. A regular, dated condition inspection of roofs and facades gives the property owner an archive showing that the building has been maintained and what condition it was in at each point in time. The day something happens, the before-condition is already documented. Regular inspection — for example through a [maintenance agreement](/en/maintenance-agreements) — thus serves a dual purpose: maintenance planning in everyday life and evidence preservation when something occurs.',
        },
      ],
    },
    {
      heading: 'Advice for property owners',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            '**Report the damage immediately** to your insurer and follow their instructions for the individual case.',
            '**Document before remediation** — urgent protective measures (e.g. tarpaulins) are often necessary and expected, but photograph the situation first if it can be done safely from the ground.',
            '**Order comprehensive documentation quickly** — the closer to the event, the stronger the evidence.',
            '**Keep everything** — reports, images and previous inspections. Dated material is hard to question.',
            '**Check the requirements with your insurer** — the evidence required varies between insurers and claim types; the drone report is a support, not a guarantee of the outcome.',
          ],
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Does the drone report replace the insurer’s own survey?',
      answer:
        'No, the insurer decides for itself how to investigate the claim and may send its own surveyor. The report is the property owner’s evidence — it speeds up the process and preserves proof, especially if remediation must begin before the insurer’s survey can take place.',
    },
    {
      question: 'How quickly should the documentation be done after damage occurs?',
      answer:
        'As soon as it is safe to fly — ideally within a few days. The shorter the time between the event and the documentation, the clearer the causal link and the less time consequential damage has to develop.',
    },
    {
      question: 'What does documentation for a damage claim cost?',
      answer:
        'It depends on the size of the object and how quickly the assignment needs to be carried out. Contact us with a description of the situation and we will come back with a price and schedule.',
    },
  ],
  relatedServices: [
    { href: '/en/services/roof-inspection', label: 'Roof Inspection' },
    { href: '/en/industries/insurance', label: 'Insurance' },
    { href: '/en/maintenance-agreements', label: 'Maintenance Agreements' },
  ],
  relatedArticles: [
    'documenting-storm-damage-to-roofs',
    'finding-moisture-damage-with-thermal-inspection',
    'maintenance-plans-with-drone-inspection',
  ],
}
