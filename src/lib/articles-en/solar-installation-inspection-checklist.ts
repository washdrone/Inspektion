import type { Article } from '@/lib/articles/types'

export const solarInstallationInspectionChecklist: Article = {
  slug: 'solar-installation-inspection-checklist',
  title: 'Solar installation inspection — checklist for owners',
  metaTitle: 'Solar installation inspection — checklist',
  description:
    'Checklist for owners and managers of solar installations: what should be checked visually, electrically and thermally, how often — and when thermal drone inspection delivers the most value.',
  category: 'Solar & energy',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'A solar installation is an investment that should keep producing for decades — but faults such as cell damage, contact faults and soiling creep in without being visible from the ground. A structured check comprises three parts: visual inspection, a review of production data and thermal inspection. The checklist below helps you as an owner or manager catch problems in time.',
  sections: [
    {
      heading: 'Checklist: routine self-inspection',
      blocks: [
        {
          type: 'p',
          text: 'These are things you as an owner can do yourself, regularly and without special equipment:',
        },
        {
          type: 'list',
          items: [
            '**Monitor production** — compare output against expectations and against previous years at the same time. Unexplained drops are often the first sign of a fault.',
            '**Check the inverter** — look for fault codes and warnings on the display or in the app.',
            '**Look at the panels from the ground** — visible dirt, leaves, bird droppings, snow load or physical damage.',
            '**Check for shading** — have trees or other vegetation grown up since the installation?',
            '**Listen and look at the inverter and junction boxes** — unusual noises, discolouration or a burning smell require immediate attention from a qualified electrician.',
          ],
        },
      ],
    },
    {
      heading: 'Checklist: professional inspection',
      blocks: [
        {
          type: 'p',
          text: 'Some checks require professional expertise and the right equipment:',
        },
        {
          type: 'list',
          items: [
            '**Thermal inspection of the panels** — finds [hotspots](/en/knowledge-base/hotspots-in-solar-panels), diode faults, string faults and PID that are invisible to the eye. Most efficiently carried out with a drone across the entire installation, see [solar panel inspection](/en/services/solar-panel-inspection).',
            '**Detailed visual inspection** — microcracks, delamination, snail trails and damage to cabling and connectors are documented at close range.',
            '**Electrical inspection** — string-level measurements and checks of protective functions, carried out by a qualified electrical installer.',
            '**Mounting and fixings** — checking that the mounting system is secure and that roof penetrations are watertight, especially after storms.',
          ],
        },
      ],
    },
    {
      heading: 'How often should the installation be checked?',
      blocks: [
        {
          type: 'table',
          caption: 'Recommended inspection rhythm for solar installations',
          headers: ['Check', 'Frequency'],
          rows: [
            ['Production monitoring', 'Ongoing — ideally monthly'],
            ['Visual self-inspection from the ground', 'A few times a year and after storms'],
            ['Thermal drone inspection', 'Regularly, e.g. annually or every other year, and when production loss is suspected'],
            ['Electrical inspection by a qualified installer', 'As recommended by the installer and the insurer'],
          ],
        },
        {
          type: 'p',
          text: 'Particular occasions that justify an extra check: before the warranty period expires (faults documented in time can be claimed), after extreme weather, on change of ownership and when the installation is modified or extended.',
        },
      ],
    },
    {
      heading: 'Why thermal inspection is the most important item',
      blocks: [
        {
          type: 'p',
          text: 'The most serious faults in a solar installation — cell damage, contact faults and diode faults — are often completely invisible to the eye and only show up in production data once they have become extensive. Thermal drone inspection is the method that finds these faults early across the entire installation in a short time. During the inspection every panel is photographed both thermally and visually, and the report identifies exactly which panels deviate and why. How the technology works: [How drone thermography works](/en/knowledge-base/how-drone-thermography-works).',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Can I inspect my solar installation myself?',
      answer:
        'Self-inspection from the ground and monitoring of production data are things you can and should do yourself. Work on the roof, electrical measurements and thermal analysis, however, require the right qualifications, equipment and expertise.',
    },
    {
      question: 'What does a thermal inspection of solar panels cost?',
      answer:
        'The price depends mainly on the size and location of the installation. See our pricing guide for what affects the cost, or request a quote for your installation.',
    },
    {
      question: 'My installation is new — does it really need inspecting?',
      answer:
        'Yes, ideally early on. Transport and installation damage as well as installation faults occur even in new installations, and a documented check while the warranties are valid makes it possible to claim faults in time.',
    },
    {
      question: 'Does the installation need to be switched off during the inspection?',
      answer:
        'No — on the contrary, the installation should be operating and under load during a thermal inspection, because that is when faults generate heat and become visible.',
    },
  ],
  relatedServices: [
    { href: '/en/services/solar-panel-inspection', label: 'Solar Panel Inspection' },
    { href: '/en/services/thermal-inspection', label: 'Thermal Inspection' },
    { href: '/en/industries/energy', label: 'Energy' },
  ],
  relatedArticles: [
    'hotspots-in-solar-panels',
    'how-drone-thermography-works',
    'what-is-drone-inspection',
  ],
}
