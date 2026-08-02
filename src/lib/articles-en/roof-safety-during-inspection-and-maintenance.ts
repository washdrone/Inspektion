import type { Article } from '@/lib/articles/types'

export const roofSafetyDuringInspection: Article = {
  slug: 'roof-safety-during-inspection-and-maintenance',
  title: 'Roof safety during inspection and maintenance — rules and alternatives',
  metaTitle: 'Roof safety during inspection and maintenance',
  description:
    'Roof work is subject to occupational safety rules requiring fall protection, and the property owner is responsible for roof safety equipment. How drone inspection reduces the need to walk on the roof.',
  category: 'Rules & safety',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'Falls from roofs are among the most serious accident risks in construction and property management, and the regulations reflect this: work on roofs is covered by the Swedish Work Environment Authority’s provisions requiring fall protection, and the property owner is responsible for the roof having the safety equipment required for safe access. The safest roof work, however, is the work that does not need to be carried out at all — drone inspection moves the entire recurring inspection task from the roof to the ground.',
  sections: [
    {
      heading: 'Responsibility — who bears what?',
      blocks: [
        {
          type: 'list',
          items: [
            '**The property owner** is responsible for the building having functioning roof safety equipment — anchor points, walkways, ladders and snow guards in accordance with the requirements that applied at construction or alteration — and for its maintenance.',
            '**The employer** of anyone carrying out roof work is responsible for the work being planned and performed safely, with fall protection in accordance with the Swedish Work Environment Authority’s provisions. Work at height requires risk assessment, equipment and trained personnel.',
            '**The client** commissioning work also has a responsibility to ensure the conditions for safe work exist — sending someone onto a roof without functioning safety equipment is not an option.',
          ],
        },
        {
          type: 'p',
          text: 'Exact requirements depend on the roof’s design, the age of the building and the nature of the work — when in doubt, consult a specialist or the guidance issued by the Swedish Work Environment Authority and the Swedish National Board of Housing, Building and Planning (Boverket).',
        },
      ],
    },
    {
      heading: 'The risks of traditional roof checks',
      blocks: [
        {
          type: 'list',
          items: [
            '**Fall risk** — every time a roof is walked on it constitutes work at height, even "a quick look". Many serious falls happen during precisely these short, unplanned tasks.',
            '**Slippery surfaces and weather** — moisture, frost, moss and wind turn even low-slope roofs into hazardous environments.',
            '**Falling through** — older roofs and sheet materials can have hidden weaknesses that will not bear a point load.',
            '**Wear on the roof** — foot traffic on roof tiles and membranes itself causes damage, especially in cold weather.',
          ],
        },
      ],
    },
    {
      heading: 'The drone as a safety measure',
      blocks: [
        {
          type: 'p',
          text: 'The most effective risk reduction is to eliminate the exposure. For recurring condition checks, damage assessments and documentation, the drone can completely replace time spent on the roof — the pilot stands on the ground and [the entire roof is documented systematically](/en/knowledge-base/how-a-drone-roof-inspection-works) in greater detail than a visual walk-around provides. The roof is only walked on once the report shows that physical work is actually needed — and then by the right professionals with the right equipment, for a known and well-defined task.',
        },
        {
          type: 'list',
          items: [
            '**Inspection after storms** — assess the damage situation without putting anyone on a potentially weakened roof. See [Documenting storm damage to roofs](/en/knowledge-base/documenting-storm-damage-to-roofs).',
            '**Checking roof safety equipment** — anchor points, walkways and snow guards are photo-documented as a basis for maintaining the safety equipment itself.',
            '**Planning roof work** — the contractor can assess risks and plan the work from real imagery before anyone goes up.',
          ],
        },
      ],
    },
    {
      heading: 'What the drone does not replace',
      blocks: [
        {
          type: 'p',
          text: 'Physical work — repairs, snow clearing, installation — still requires people on the roof, with the safety equipment and fall protection the regulations require. The drone’s role is to make these tasks fewer, shorter and better planned. Functional testing of anchor points (e.g. pull testing) is also a physical task; the drone documents visible condition but does not replace that check.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'May the caretaker go up on the roof for a simple check?',
      answer:
        'Only if the work can be carried out safely in accordance with occupational safety rules — which in practice requires functioning roof safety equipment, fall protection and competence. For pure inspection tasks, drone inspection is a safer and often more thorough alternative.',
    },
    {
      question: 'What roof safety equipment must a roof have?',
      answer:
        'It depends on the building’s height, the roof’s pitch and when the building was constructed or altered — the requirements are set out in building legislation and associated regulations. The property owner is responsible for the equipment being in place and maintained; an inspection can document its visible condition.',
    },
    {
      question: 'Can drone inspection be used in our systematic work environment management?',
      answer:
        'Yes — replacing recurring work-at-height tasks with ground-based inspection is a concrete risk-reduction measure that can be documented in risk assessments and procedures.',
    },
  ],
  relatedServices: [
    { href: '/en/services/roof-inspection', label: 'Roof Inspection' },
    { href: '/en/maintenance-agreements', label: 'Maintenance Agreements' },
    { href: '/en/industries/property', label: 'Property' },
  ],
  relatedArticles: [
    'how-a-drone-roof-inspection-works',
    'documenting-storm-damage-to-roofs',
    'drone-inspection-vs-traditional-inspection',
  ],
}
