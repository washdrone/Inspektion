import type { Article } from '@/lib/articles/types'

export const dronesInMunicipalPropertyManagement: Article = {
  slug: 'drones-in-municipal-property-management',
  title: 'Drones in municipal property management — applications and benefits',
  metaTitle: 'Drones in municipal property management',
  description:
    'Municipalities manage large, mixed property portfolios on limited budgets. How drone inspection is used for schools, sports halls and public buildings — and what procuring authorities should require.',
  category: 'Basics & methods',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'Swedish municipalities are among the country’s largest property owners, with portfolios ranging from schools and preschools to sports halls, care homes and technical facilities — often with maintenance backlogs and limited budgets. Drone inspection gives the management organisation a cost-effective way to obtain comparable, documented condition data across the entire portfolio, so that maintenance funds can be directed where the need is greatest.',
  sections: [
    {
      heading: 'Why the method suits municipal portfolios',
      blocks: [
        {
          type: 'list',
          items: [
            '**Many buildings, one methodology** — the entire portfolio can be inspected with a uniform method and report structure, making buildings comparable when prioritising.',
            '**Ongoing activities are not disturbed** — schools, preschools and care homes can be used as normal during the inspection; no scaffolding in the schoolyard, no contractors on the roof.',
            '**Safety and privacy** — no work at height for inspection tasks, and flights are planned with consideration for the activities and the GDPR — particularly important at schools and care environments.',
            '**Traceable documentation** — dated reports provide audit-proof evidence for decisions on maintenance funding, and protect against disputes about why a measure was prioritised.',
            '**An objective basis for political decisions** — photographic evidence makes the maintenance backlog concrete when committees and the council have to prioritise.',
          ],
        },
      ],
    },
    {
      heading: 'Typical applications',
      blocks: [
        {
          type: 'list',
          items: [
            '**Condition inspection of roofs** across the portfolio — leak-prone school roofs and sports halls with large, low-slope roof areas are typical candidates. See [roof inspection](/en/services/roof-inspection).',
            '**Thermal checks** of building envelopes ahead of energy measures — map [thermal bridges and heat loss](/en/knowledge-base/thermal-bridges-and-heat-loss) before investment decisions.',
            '**Solar installations** — municipal roofs increasingly carry solar panels; regular [solar panel inspection](/en/services/solar-panel-inspection) protects the investment.',
            '**Facade and balcony checks** — safety inspection of older buildings where falling material would be a serious risk. See [common facade defects](/en/knowledge-base/common-facade-defects-and-how-to-detect-them).',
            '**Damage documentation** — rapid assessment after storms, fire or vandalism as evidence for [insurance claims](/en/knowledge-base/drone-documentation-for-insurance-claims).',
            '**Input for maintenance plans** — inspection data as the basis for planning, see [Maintenance plans with drone inspection](/en/knowledge-base/maintenance-plans-with-drone-inspection).',
          ],
        },
      ],
    },
    {
      heading: 'Points to consider in procurement',
      blocks: [
        {
          type: 'p',
          text: 'For a procuring authority, some requirements are reasonable to place on the supplier:',
        },
        {
          type: 'list',
          items: [
            '**Qualifications and registration** — the operator must be registered and the pilots certified in accordance with the [EU drone regulations](/en/knowledge-base/drone-regulations-in-sweden).',
            '**Liability insurance** — documented insurance cover for the type of assignment.',
            '**GDPR routines** — a description of how personal data in imagery is avoided, handled and deleted, especially for sensitive activities.',
            '**Delivery specification** — a clearly defined report format, classification scale and delivery format so that results are comparable across buildings and years.',
            '**Reference assignments and a sample report** — request examples showing the depth of analysis and report quality before awarding the contract.',
          ],
        },
      ],
    },
    {
      heading: 'Get started step by step',
      blocks: [
        {
          type: 'p',
          text: 'A proven approach is to start with a pilot round: select a handful of buildings with known problems, have them inspected and evaluate the usefulness of the reports in your own maintenance process. If the pilot goes well, the methodology is scaled up to portfolio level, possibly as a recurring [maintenance agreement](/en/maintenance-agreements) with a fixed annual cycle.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Are special permits required to fly at schools and public buildings?',
      answer:
        'The flights follow the same EU regulations as other drone operations; in addition, assignments at sensitive facilities are planned with extra care — times outside operating hours, information to the organisation and strict GDPR routines for the imagery.',
    },
    {
      question: 'Can several departments coordinate a procurement?',
      answer:
        'Yes, the methodology is well suited to coordinated call-offs — the same delivery and report structure across several departments’ portfolios increases comparability and reduces the unit cost per building.',
    },
    {
      question: 'How is confidentiality handled for certain buildings?',
      answer:
        'Assignments are planned according to the sensitivity of the object, and imagery is handled according to agreed routines for storage, sharing and deletion. Any requirements for dissemination permits for aerial images are handled by the operator.',
    },
  ],
  relatedServices: [
    { href: '/en/industries/municipalities', label: 'Municipalities' },
    { href: '/en/services/roof-inspection', label: 'Roof Inspection' },
    { href: '/en/maintenance-agreements', label: 'Maintenance Agreements' },
  ],
  relatedArticles: [
    'maintenance-plans-with-drone-inspection',
    'drone-regulations-in-sweden',
    'thermal-bridges-and-heat-loss',
  ],
}
