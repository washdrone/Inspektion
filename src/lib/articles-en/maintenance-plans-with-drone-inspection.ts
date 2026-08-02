import type { Article } from '@/lib/articles/types'

export const maintenancePlansWithDroneInspection: Article = {
  slug: 'maintenance-plans-with-drone-inspection',
  title: 'Maintenance plans with drone inspection — from assumptions to facts',
  metaTitle: 'Maintenance plans with drone inspection',
  description:
    'A maintenance plan is only as good as the evidence behind it. How recurring drone inspections are used to build the maintenance plan on documented condition instead of standard assumptions.',
  category: 'Roofs & property',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'A maintenance plan describes which works a property needs and when — but plans built on standard intervals and visual assessments from the ground often end up either too cautious (works are carried out unnecessarily) or too optimistic (damage is allowed to develop). By building the plan on recurring drone inspections, assumptions are replaced with documented condition: works are scheduled according to the actual rate of deterioration, and the budget is spent where the need genuinely exists.',
  sections: [
    {
      heading: 'The problem with template-based plans',
      blocks: [
        {
          type: 'p',
          text: 'Traditional maintenance plans are often based on theoretical service lives: a roof covering "lasts" a certain number of years, a facade should be reviewed at a certain interval. Reality deviates in both directions — exposure, workmanship and local conditions mean the same material may need attention ten years earlier or later than the template suggests. Without actual evidence, the deviations are only discovered once they have become expensive.',
        },
        {
          type: 'list',
          items: [
            '**Premature works** tie up capital in renovations that could have waited.',
            '**Late works** allow small defects to develop into consequential damage — a cracked roof tile becomes moisture damage within the structure.',
            '**Wrong priorities** — without comparable evidence across buildings, the money is not spent where the risk is greatest.',
          ],
        },
      ],
    },
    {
      heading: 'How the plan is built on inspection data',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            '**Baseline condition** — a comprehensive inspection of roofs, facades and other critical surfaces documents the current condition of each building. See [How a drone roof inspection works](/en/knowledge-base/how-a-drone-roof-inspection-works).',
            '**Classification** — every deviation is classified by severity: remedy now, schedule, or monitor.',
            '**Incorporation into the plan** — the findings are scheduled and cost-estimated in the maintenance plan, with the photographic documentation as an appendix.',
            '**Recurring checks** — the inspection is repeated at a suitable interval; because the images are comparable, the rate of deterioration becomes visible, and the schedule is adjusted to the actual development.',
          ],
        },
        {
          type: 'p',
          text: 'Step 4 is the key: it is the comparison over time that turns individual surveys into a management tool. A defect that remains stable can be monitored; one that is growing is moved forward in the plan.',
        },
      ],
    },
    {
      heading: 'What should the recurring check include?',
      blocks: [
        {
          type: 'table',
          caption: 'Building elements suited to drone-based condition checks',
          headers: ['Building element', 'What is monitored', 'Read more'],
          rows: [
            ['Roofs', 'Roofing material, metal details, penetrations, drainage, roof safety', '[Roof Inspection](/en/services/roof-inspection)'],
            ['Facades', 'Render, joints, balconies, fixings', '[Facade Inspection](/en/services/facade-inspection)'],
            ['Building envelope (thermal)', 'Heat loss, suspected moisture', '[Thermal Inspection](/en/services/thermal-inspection)'],
            ['Solar panels', 'Hotspots, string faults, soiling', '[Solar Panel Inspection](/en/services/solar-panel-inspection)'],
          ],
        },
        {
          type: 'p',
          text: 'For property owners with several buildings, the same methodology also provides comparability across objects — the portfolio can be prioritised on facts instead of gut feeling.',
        },
      ],
    },
    {
      heading: 'The benefits in summary',
      blocks: [
        {
          type: 'list',
          items: [
            '**More accurate budgeting** — works are scheduled according to documented deterioration, not theoretical service life.',
            '**Fewer urgent surprises** — small defects are caught before they become consequential damage.',
            '**Better procurement** — contractors quote against documented, well-defined works.',
            '**Traceability** — boards, owners and auditors can see what the assessments are based on.',
            '**Evidence preservation** — the documented condition also strengthens [insurance claims](/en/knowledge-base/drone-documentation-for-insurance-claims).',
          ],
        },
        {
          type: 'p',
          text: 'For housing associations there is a dedicated guide in [Drone inspection for housing associations](/en/knowledge-base/drone-inspection-for-housing-associations). Recurring inspection can be arranged as a [maintenance agreement](/en/maintenance-agreements).',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'How often should the inspection be repeated?',
      answer:
        'It depends on the building’s age, condition and exposure. A common rhythm is an annual overview check of roofs and a more thorough review every few years — more frequently for older or exposed buildings.',
    },
    {
      question: 'Does drone inspection replace statutory or contractual surveys?',
      answer:
        'No, formal survey types requiring a certified surveyor are not replaced. The drone inspection is the maintenance plan’s fact-gathering and complements the formal surveys.',
    },
    {
      question: 'Can old inspections be used when the plan is revised?',
      answer:
        'Yes — that is one of the method’s strengths. Dated and comparable images mean the revision can be based on documented development instead of new assumptions.',
    },
  ],
  relatedServices: [
    { href: '/en/maintenance-agreements', label: 'Maintenance Agreements' },
    { href: '/en/services/roof-inspection', label: 'Roof Inspection' },
    { href: '/en/industries/property', label: 'Property' },
  ],
  relatedArticles: [
    'drone-inspection-for-housing-associations',
    'how-a-drone-roof-inspection-works',
    'drone-documentation-for-insurance-claims',
  ],
}
