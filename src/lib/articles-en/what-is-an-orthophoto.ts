import type { Article } from '@/lib/articles/types'

export const whatIsAnOrthophoto: Article = {
  slug: 'what-is-an-orthophoto',
  title: 'What is an orthophoto? How the measurable aerial image works',
  metaTitle: 'What is an orthophoto? A simple explanation',
  description:
    'An orthophoto is an aerial image that has been geometrically corrected so that it has a uniform scale and can be used as a map. How orthophotos are created with drones and how they are used in construction and property management.',
  category: 'Surveying & 3D',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'An orthophoto is an aerial image that has been geometrically corrected — orthorectified — so that it has a uniform scale across the entire image and can be used as a map. In an ordinary aerial photo, buildings lean and the scale varies with distance from the camera; in an orthophoto every point is depicted straight from above, meaning distances and areas can be measured directly in the image.',
  sections: [
    {
      heading: 'The difference between an aerial photo and an orthophoto',
      blocks: [
        {
          type: 'p',
          text: 'An ordinary photograph has perspective: objects near the edge of the image are depicted at an angle, tall objects "lean" outwards and the scale varies across the image. This makes ordinary aerial photos unsuitable for measuring. In orthorectification, many overlapping images are combined with an elevation model of the terrain, so that every pixel is recalculated to its correct position in a coordinate system. The result looks like a photo but behaves like a map.',
        },
        {
          type: 'table',
          caption: 'Aerial photo compared with orthophoto',
          headers: ['Property', 'Ordinary aerial photo', 'Orthophoto'],
          rows: [
            ['Scale', 'Varies across the image', 'Uniform throughout the image'],
            ['Perspective', 'Objects lean towards the edges', 'Everything is depicted straight from above'],
            ['Measurability', 'Approximate only', 'Distances and areas can be measured'],
            ['Coordinate system', 'None', 'Georeferenced in the chosen system'],
          ],
        },
      ],
    },
    {
      heading: 'How an orthophoto is created with a drone',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'The drone photographs the area in a systematic grid pattern with high image overlap.',
            'The images are processed with [photogrammetry](/en/knowledge-base/what-is-photogrammetry) into a point cloud and an elevation model.',
            'Each image is orthorectified against the elevation model and the images are stitched into a single true-to-scale mosaic.',
            'The orthophoto is georeferenced — using RTK/PPK data and, where needed, ground control points — so that it sits correctly in the coordinate system.',
          ],
        },
        {
          type: 'p',
          text: 'With drones, orthophotos can also be produced at much higher resolution than traditional aerial photography — often one or a few centimetres per pixel — and exactly when they are needed, instead of relying on aerial surveys that may be several years old.',
        },
      ],
    },
    {
      heading: 'What are orthophotos used for?',
      blocks: [
        {
          type: 'list',
          items: [
            '**Construction sites** — up-to-date site views for planning, coordination, site layout plans and documentation of completed work.',
            '**Property management** — overviews of roofs, ground surfaces and installations; input for management plans.',
            '**Design work** — an up-to-date, high-resolution base layer to design against, complementing map data.',
            '**Quantity verification** — areas of asphalt, green space and surfacing can be measured directly in the image.',
            '**Documentation over time** — recurring orthophotos show changes and provide traceable evidence in disputes.',
          ],
        },
        {
          type: 'p',
          text: 'An orthophoto is often included as a deliverable in [3D mapping](/en/services/3d-mapping) assignments.',
        },
      ],
    },
    {
      heading: 'What determines the quality?',
      blocks: [
        {
          type: 'list',
          items: [
            '**Resolution (GSD)** — governed by flight altitude and camera; determines which details are visible. Read more in [How accurate is drone surveying?](/en/knowledge-base/how-accurate-is-drone-surveying)',
            '**Georeferencing** — RTK/PPK and ground control points determine how precisely the image sits in the coordinate system.',
            '**Quality of the elevation model** — errors in the elevation model cause geometric errors, especially at building edges and steep slopes.',
            '**Lighting conditions** — even light without hard shadows produces the most usable image.',
          ],
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Can heights be measured in an orthophoto?',
      answer:
        'No, the orthophoto is two-dimensional. The height information is in the elevation model (DSM/DTM) created in the same process, which is often delivered together with the orthophoto.',
    },
    {
      question: 'How up to date is a drone orthophoto?',
      answer:
        'It shows the situation at the time of the flight — which is one of its greatest advantages. Instead of using base maps that may be several years old, an orthophoto can be produced the same week it is needed.',
    },
    {
      question: 'In what format are orthophotos delivered?',
      answer:
        'Usually as GeoTIFF in the desired coordinate system, which can be opened in GIS and CAD software. Simpler image formats can also be delivered for presentations and reports.',
    },
  ],
  relatedServices: [
    { href: '/en/services/3d-mapping', label: '3D Mapping' },
  ],
  relatedArticles: [
    'what-is-photogrammetry',
    'how-accurate-is-drone-surveying',
    'how-drone-volume-calculation-works',
  ],
}
