import type { Article } from '@/lib/articles/types'

export const constructionDocumentationWithDrones: Article = {
  slug: 'construction-documentation-with-drones',
  title: 'Construction documentation with drones — follow the project from the air',
  metaTitle: 'Construction documentation with drones — guide',
  description:
    'Drones document construction projects with recurring flights: orthophotos, 3D models and progress images for planning, quantity verification, communication and dispute evidence. How the approach works.',
  category: 'Surveying & 3D',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'Construction documentation with drones means that a construction site is photographed and surveyed from the air at regular intervals — often weekly or monthly. Each flight produces up-to-date orthophotos, progress images and, where needed, 3D models showing exactly how far the project has come. The results are used for planning, coordination, quantity verification, client communication and as dated evidence if disputes arise.',
  sections: [
    {
      heading: 'What the documentation is used for',
      blocks: [
        {
          type: 'list',
          items: [
            '**Progress monitoring** — compare actual status against the schedule with dated aerial images instead of occasional site visits.',
            '**Quantity verification** — cut and fill volumes are measured from the surface models as a basis for reconciliation against the contract. See [How drone volume calculation works](/en/knowledge-base/how-drone-volume-calculation-works).',
            '**Coordination and logistics** — up-to-date orthophotos show stockpiles, crane positions, haul routes and site set-up areas for site layout planning.',
            '**Client and stakeholder communication** — aerial images make site meetings concrete and keep clients, neighbours and the public informed.',
            '**Dispute and warranty matters** — dated documentation of each stage shows what was completed when, and records what has been built in and is no longer visible.',
            '**As-built records** — documentation of the site before, during and after the contract.',
          ],
        },
      ],
    },
    {
      heading: 'How a documentation programme is structured',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            '**Baseline survey** — the area is documented before works begin: existing conditions, vegetation, adjacent buildings and roads.',
            '**Recurring flights** — the same flight route is repeated at the chosen interval, producing directly comparable images and models over time.',
            '**Event-driven flights** — extra documentation at milestones: completed excavation, cast slab, watertight frame, finished roof.',
            '**Final documentation** — the completed project is documented as part of the as-built records.',
          ],
        },
        {
          type: 'p',
          text: 'The interval is chosen to match the project’s pace — earthworks with rapid volume changes justify more frequent flights than frame erection. Read more about the technology behind the deliverables in [What is photogrammetry?](/en/knowledge-base/what-is-photogrammetry) and [What is an orthophoto?](/en/knowledge-base/what-is-an-orthophoto)',
        },
      ],
    },
    {
      heading: 'What is included in a delivery?',
      blocks: [
        {
          type: 'table',
          caption: 'Typical deliverables in construction documentation',
          headers: ['Deliverable', 'Use'],
          rows: [
            ['Orthophoto (GeoTIFF)', 'Measurable site view for planning, site layout and reconciliation'],
            ['Oblique and overview images', 'Communication, site meetings, reports'],
            ['Surface model (DSM)', 'Volume calculation and level checks'],
            ['3D model', 'Visualisation and documentation of complex stages'],
            ['Volume report', 'Quantity verification of cut and fill'],
          ],
        },
        {
          type: 'p',
          text: 'The deliverables are tailored to the project’s needs — not everything is required in every flight. See the [3D mapping](/en/services/3d-mapping) service page.',
        },
      ],
    },
    {
      heading: 'Rules and safety on the construction site',
      blocks: [
        {
          type: 'p',
          text: 'Flying over an active construction site requires planning: the airspace is checked, the flight is coordinated with site management and carried out in accordance with the [applicable drone regulations](/en/knowledge-base/drone-regulations-in-sweden). Site personnel are informed, and the flight route is planned so that lifting and crane operations are not disturbed. As the client you do not need to handle this yourself — it is part of the operator’s responsibility.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'How often should a construction site be documented?',
      answer:
        'Common arrangements are weekly during intensive earthworks and monthly during frame erection and enclosure, supplemented with flights at key milestones. The interval is adapted to the project’s pace and documentation needs.',
    },
    {
      question: 'Does the flight disturb work on site?',
      answer:
        'No, normally not. The flight takes little time, is coordinated with site management and is planned so it does not clash with crane lifts or other operations. Production can continue as normal.',
    },
    {
      question: 'Can the documentation be used in a dispute?',
      answer:
        'Dated orthophotos and images are strong evidence of what was completed at a given point in time. Many clients regard precisely that traceability as the documentation programme’s greatest value.',
    },
  ],
  relatedServices: [
    { href: '/en/services/3d-mapping', label: '3D Mapping' },
    { href: '/en/industries/construction', label: 'Construction' },
  ],
  relatedArticles: [
    'what-is-an-orthophoto',
    'how-drone-volume-calculation-works',
    'how-accurate-is-drone-surveying',
  ],
}
