import type { Article } from '@/lib/articles/types'

export const threeDBuildingModelsUseCases: Article = {
  slug: '3d-building-models-use-cases',
  title: '3D models of buildings — practical use cases',
  metaTitle: '3D models of buildings — use cases',
  description:
    'A photorealistic 3D model of a building can be used for damage surveys, design, property management and communication. Concrete use cases and what is required for a good model.',
  category: 'Surveying & 3D',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'With drones and photogrammetry, a building or facility can be turned into a photorealistic, measurable 3D model — a digital copy that can be opened, rotated and measured at the office. The model captures the entire exterior of the object in a single delivery and is used for everything from damage surveys and design to management records and communication.',
  sections: [
    {
      heading: 'Concrete use cases',
      blocks: [
        {
          type: 'list',
          items: [
            '**Damage and condition surveys** — damage documented during an [inspection](/en/knowledge-base/what-is-drone-inspection) can be located and measured directly in the model: how large is the crack, where on the facade is it, how many square metres of render are damaged?',
            '**Design and tender material** — architects and contractors get correct measurements of facade areas, roof pitches and details without site visits and manual measurement.',
            '**Quantity take-off** — areas for painting, rendering or re-roofing are measured from the model as a basis for estimates and quote comparisons.',
            '**Solar panel design** — roof areas, pitches and shading objects provide the basis for layout and production calculations.',
            '**Management records** — a dated digital copy of the building’s condition, useful as a reference for future [maintenance planning](/en/knowledge-base/maintenance-plans-with-drone-inspection) and disputes.',
            '**Heritage documentation** — detailed documentation of older and listed buildings ahead of renovation.',
            '**Communication** — a rotatable model makes it easy to show a board, client or contractor exactly what is meant.',
          ],
        },
      ],
    },
    {
      heading: 'What determines the model’s quality?',
      blocks: [
        {
          type: 'list',
          items: [
            '**Image coverage** — all surfaces to be modelled must be photographed from several angles; obscured areas (recessed sections, dense vegetation) leave holes in the model.',
            '**Resolution (GSD)** — determines which details can be distinguished and measured. See [How accurate is drone surveying?](/en/knowledge-base/how-accurate-is-drone-surveying)',
            '**Georeferencing** — RTK/PPK and control points determine whether the model is merely true to scale or also correctly positioned in a coordinate system — important when the model is to be combined with design or map data.',
            '**Surface characteristics** — glass, shiny metal and uniformly coloured surfaces are difficult for photogrammetry and may require supplementary handling.',
          ],
        },
        {
          type: 'p',
          text: 'The technology behind it is described in more detail in [What is photogrammetry?](/en/knowledge-base/what-is-photogrammetry)',
        },
      ],
    },
    {
      heading: 'Delivery formats and use',
      blocks: [
        {
          type: 'table',
          caption: 'Common deliverables from 3D modelling',
          headers: ['Deliverable', 'Typical use'],
          rows: [
            ['Textured 3D model (mesh)', 'Visualisation, measurement, damage surveys'],
            ['Point cloud', 'Input for CAD/BIM design'],
            ['[Orthophoto](/en/knowledge-base/what-is-an-orthophoto) of roof/ground', 'Planning and area measurement'],
            ['Facade views (orthoprojections)', 'Facade drawing base and damage mapping'],
            ['Web sharing of the model', 'Review without specialist software'],
          ],
        },
        {
          type: 'p',
          text: 'The format is chosen to suit the recipient’s workflow — a property manager often wants a shareable web view, while a designer needs point clouds or CAD-compatible formats. See the [3D mapping](/en/services/3d-mapping) service.',
        },
      ],
    },
    {
      heading: 'When is a 3D model the right choice — and when are images enough?',
      blocks: [
        {
          type: 'p',
          text: 'A 3D model is justified when measurements and the whole picture are needed: design work, quantity take-off, a complex damage situation or documentation to be reused over time. For a simpler condition check, a systematic image delivery from an ordinary [roof inspection](/en/services/roof-inspection) is often sufficient — at a lower cost. A serious provider helps you choose the level based on the need, not on what is most advanced.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Can I take measurements in the 3D model myself?',
      answer:
        'Yes — models can be delivered in formats and web viewers where distances, areas and volumes are measured directly, without specialist software. Which tools are suitable depends on the delivery format.',
    },
    {
      question: 'Is the inside of the building modelled as well?',
      answer:
        'Drone photogrammetry covers the exterior. Interior modelling requires other methods, such as ground-based scanning, and can be combined with the exterior model if needed.',
    },
    {
      question: 'How large a building can be modelled?',
      answer:
        'The method scales from individual houses to large industrial facilities and entire city blocks — what changes is the flight time and processing time, not the principle.',
    },
  ],
  relatedServices: [
    { href: '/en/services/3d-mapping', label: '3D Mapping' },
  ],
  relatedArticles: [
    'what-is-photogrammetry',
    'what-is-an-orthophoto',
    'how-accurate-is-drone-surveying',
  ],
}
