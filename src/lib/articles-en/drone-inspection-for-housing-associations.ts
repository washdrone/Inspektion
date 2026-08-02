import type { Article } from '@/lib/articles/types'

export const droneInspectionForHousingAssociations: Article = {
  slug: 'drone-inspection-for-housing-associations',
  title: 'Drone inspection for housing associations — a practical guide',
  metaTitle: 'Drone inspection for housing associations',
  description:
    'Guide for boards of Swedish housing associations (bostadsrättsföreningar): how to use drone inspection for roofs and facades, how the results strengthen the maintenance plan and what to consider when ordering.',
  category: 'Roofs & property',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'For a Swedish housing association (bostadsrättsförening), roofs and facades are among the largest and most expensive maintenance items. Drone inspection gives the board a documented, objective record of the buildings’ condition — without scaffolding costs and without disturbing residents. The material strengthens the maintenance plan, improves procurement and makes it easier to justify decisions to the members.',
  sections: [
    {
      heading: 'Why is this relevant for housing associations in particular?',
      blocks: [
        {
          type: 'list',
          items: [
            '**The board’s maintenance responsibility** — the board is responsible for keeping the property well maintained, and a documented condition check shows that this responsibility is taken seriously.',
            '**The maintenance plan needs facts** — a plan built on actual, documented condition is more accurate than one built on standard assumptions.',
            '**Small defects become expensive** — a cracked roof tile costs little to replace; the moisture damage it causes over time can become very costly. Early detection is the cheapest insurance.',
            '**Better procurement** — with a damage report in hand, the association can request quotes for precisely defined works and compare bids on the same basis.',
            '**Decision support for the general meeting** — clear images of actual damage make it easier to anchor maintenance decisions with the members.',
          ],
        },
      ],
    },
    {
      heading: 'What can be inspected in an association?',
      blocks: [
        {
          type: 'list',
          items: [
            '**Roofs** — roofing, chimneys, penetrations, gutters and roof safety equipment. See [roof inspection](/en/services/roof-inspection) and the guide [How a drone roof inspection works](/en/knowledge-base/how-a-drone-roof-inspection-works).',
            '**Facades and balconies** — render, joints, balcony slabs and fixings. See [facade inspection](/en/services/facade-inspection).',
            '**Thermal checks** — heat loss and suspected moisture areas in the building envelope. See [thermal inspection](/en/services/thermal-inspection).',
            '**Solar panels** — more and more associations have solar panels on their roofs; regular [solar panel inspection](/en/services/solar-panel-inspection) protects the investment.',
          ],
        },
      ],
    },
    {
      heading: 'How it works for the association',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            '**Quote** — the association describes the property and what is to be inspected; the operator provides a fixed price or a price range.',
            '**Inspection day** — the flight is carried out without scaffolding and without residents needing to move. The board usually only needs to arrange access to the courtyard.',
            '**Report** — the association receives a report with marked damage, severity classification and prioritised recommendations.',
            '**Follow-up** — the report is worked into the maintenance plan and used as a basis when procuring remedial work.',
          ],
        },
        {
          type: 'p',
          text: 'Many associations choose recurring inspections — for example annually or every other year — so that developments can be followed over time and works planned well in advance. Read about [maintenance agreements](/en/maintenance-agreements) for regular condition checks.',
        },
      ],
    },
    {
      heading: 'What should the board check before ordering?',
      blocks: [
        {
          type: 'list',
          items: [
            'That the operator is **registered** and that the pilots hold the correct qualifications under the [EU drone regulations](/en/knowledge-base/drone-regulations-in-sweden).',
            'That the company carries **liability insurance** covering the assignment.',
            'That **privacy matters** are handled correctly — flights should be planned so that residents are not photographed unnecessarily, and imagery must be handled in accordance with the GDPR.',
            'What **the report contains** — ideally request a sample report before ordering.',
            'That the offer covers **inspection and documentation** and is not tied to the sale of specific remedial works — this keeps the advice objective.',
          ],
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Do residents need to be informed before the flight?',
      answer:
        'It is good practice and recommended. A simple notice in the stairwell stating the date and purpose is usually sufficient. The flight is directed at the building’s surfaces, not at windows or patios, and is carried out in accordance with the GDPR.',
    },
    {
      question: 'What does a drone inspection cost for a housing association?',
      answer:
        'The cost depends on the number of buildings, their size and what is included (roofs, facades, thermography). See the pricing guide for what affects the price, or request a fixed-price quote for your property.',
    },
    {
      question: 'Can the report be used directly in the maintenance plan?',
      answer:
        'Yes — the report’s damage classification and recommendations are designed to be incorporated into the maintenance plan, with prioritisation of what should be remedied now and what should be monitored.',
    },
    {
      question: 'How often should an association inspect roofs and facades?',
      answer:
        'A common rhythm is an overview check annually and a more thorough review every few years, and always after storms or other events that may have caused damage.',
    },
  ],
  relatedServices: [
    { href: '/en/services/roof-inspection', label: 'Roof Inspection' },
    { href: '/en/services/facade-inspection', label: 'Facade Inspection' },
    { href: '/en/maintenance-agreements', label: 'Maintenance Agreements' },
    { href: '/en/industries/property', label: 'Property' },
  ],
  relatedArticles: [
    'how-a-drone-roof-inspection-works',
    'finding-moisture-damage-with-thermal-inspection',
    'drone-inspection-vs-traditional-inspection',
  ],
}
