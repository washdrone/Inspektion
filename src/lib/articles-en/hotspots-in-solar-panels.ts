import type { Article } from '@/lib/articles/types'

export const hotspotsInSolarPanels: Article = {
  slug: 'hotspots-in-solar-panels',
  title: 'Hotspots in solar panels — causes, risks and how they are detected',
  metaTitle: 'Hotspots in solar panels — causes and remedies',
  description:
    'A hotspot is an abnormally warm area in a solar panel indicating a fault: cell damage, shading, soiling or diode failure. How hotspots arise, the risks they pose and how thermography finds them.',
  category: 'Solar & energy',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'A hotspot is a locally overheated area in a solar panel. It arises when a cell produces less current than the cells around it — due to damage, shading or soiling — and instead starts absorbing energy that is converted into heat. Hotspots reduce the installation’s output, shorten the panel’s lifespan and can in serious cases pose a fire risk. With thermal drone inspection they are detected quickly across the entire installation.',
  sections: [
    {
      heading: 'Why do hotspots occur?',
      blocks: [
        {
          type: 'p',
          text: 'The cells in a panel are connected in series — the current through all cells in a string is the same. When one cell performs worse than the others it is forced to act as a load instead of a source: it absorbs power from the healthy cells and converts it into heat. Common underlying causes are:',
        },
        {
          type: 'list',
          items: [
            '**Cell cracks** — microcracks from manufacturing, transport, installation or snow load.',
            '**Soldering and contact faults** — poor connections causing locally elevated resistance.',
            '**Shading** — even partial shading from trees, masts or dirt forces cells to act as loads.',
            '**Soiling** — bird droppings, leaves and lichen causing permanent local shading.',
            '**Defective bypass diodes** — diodes meant to protect against the hotspot effect can themselves fail.',
            '**PID (Potential Induced Degradation)** — voltage-related degradation that reduces cell performance.',
            '**Delamination** — when the panel’s layers separate and moisture penetrates.',
          ],
        },
      ],
    },
    {
      heading: 'What risks do hotspots pose?',
      blocks: [
        {
          type: 'list',
          items: [
            '**Production loss** — the affected panel, and often the entire string, performs worse.',
            '**Accelerated ageing** — the heat damages cell material and encapsulation, worsening the fault over time.',
            '**Fire risk** — severely overheated points can in the worst case ignite panel materials or the roof beneath. This is a known risk scenario in the industry and an important reason to inspect regularly.',
          ],
        },
      ],
    },
    {
      heading: 'How hotspots are detected with thermal drone inspection',
      blocks: [
        {
          type: 'p',
          text: 'Hotspots are rarely visible to the eye — a panel can look completely intact and still have serious faults. With a radiometric thermal camera on a drone, the entire installation is thermographed systematically while in operation. Different faults produce characteristic heat patterns:',
        },
        {
          type: 'table',
          caption: 'Thermal patterns and probable cause',
          headers: ['Pattern in the thermal image', 'Probable cause'],
          rows: [
            ['A single warm cell', 'Cell damage, crack or local shading/soiling'],
            ['One third of the panel warm', 'Activated or defective bypass diode'],
            ['Whole panel warmer than its neighbours', 'Panel fault, contact fault or disconnected panel'],
            ['Whole string warm', 'String fault — e.g. fuse, connector or inverter problem'],
            ['Patchy pattern across several panels', 'Soiling or PID'],
          ],
        },
        {
          type: 'p',
          text: 'Reliable results require good solar irradiance — the industry standard IEC 62446-3 for thermographic inspection of solar installations specifies at least 600 W/m². Read more about the technology in [How drone thermography works](/en/knowledge-base/how-drone-thermography-works).',
        },
      ],
    },
    {
      heading: 'What can be done about a hotspot?',
      blocks: [
        {
          type: 'p',
          text: 'The remedy depends on the cause: cleaning in the case of soiling, pruning where vegetation causes shading, replacing a diode or connector in the case of component failure, and panel replacement in the case of cell damage. The inspection report identifies exactly which panels are affected and classifies the severity, so that the solar installer can fix the right things without their own troubleshooting. Regular [solar panel inspection](/en/services/solar-panel-inspection) means faults are detected before they spread or cause consequential damage.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'How do I know whether my installation has hotspots?',
      answer:
        'Unexplained production loss is a common first signal, but many faults do not show in production data until they have become extensive. Thermal inspection is the most reliable way to detect hotspots early — the panels can look completely normal to the eye.',
    },
    {
      question: 'How often should a solar installation be thermographed?',
      answer:
        'Many industry players recommend regular inspection, for example annually or every other year, and after warranty inspections, extreme weather events or suspected production loss.',
    },
    {
      question: 'Can hotspots be fixed without replacing the panel?',
      answer:
        'Often, yes — if the cause is dirt, shading or a defective diode. If the cell itself is damaged, the panel normally needs to be replaced. The inspection report shows what type of fault is involved.',
    },
    {
      question: 'Does the warranty cover faults found during an inspection?',
      answer:
        'Panels are normally covered by product and performance warranties from the manufacturer. A dated thermal report is good evidence in warranty claims. Check the terms of your specific warranty.',
    },
  ],
  relatedServices: [
    { href: '/en/services/solar-panel-inspection', label: 'Solar Panel Inspection' },
    { href: '/en/services/thermal-inspection', label: 'Thermal Inspection' },
    { href: '/en/industries/energy', label: 'Energy' },
  ],
  relatedArticles: [
    'how-drone-thermography-works',
    'what-is-drone-inspection',
    'solar-installation-inspection-checklist',
  ],
}
