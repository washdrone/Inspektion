import type { Article } from '@/lib/articles/types'

export const droneInspectionInAtexZones: Article = {
  slug: 'drone-inspection-in-atex-zones',
  title: 'Drone inspection in ATEX zones — how the risks are managed',
  metaTitle: 'Drone inspection in ATEX zones',
  description:
    'ATEX-classified zones place special demands on inspection work. How drone inspections are planned at facilities with potentially explosive atmospheres: risk assessment, work permits and zone management.',
  category: 'Rules & safety',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'At facilities where potentially explosive atmospheres can occur — refineries, chemical plants, biogas facilities, port terminals — areas are classified into ATEX zones, and all equipment and all work within the zones is subject to special requirements. Drones are normally not ATEX-rated, so inspections at such facilities come down to proper planning: flying outside the zones or when the zones are declassified, risk assessment together with the facility, and working within the facility’s permit system. Carried out correctly, drone inspection removes the need to send personnel to height in sensitive environments.',
  sections: [
    {
      heading: 'What does ATEX classification mean?',
      blocks: [
        {
          type: 'p',
          text: 'Areas where flammable gases, vapours or dust can form an explosive atmosphere are divided into zones based on how often and for how long such an atmosphere can occur. The zoning determines the requirements placed on equipment and work in the area — the basis is the EU ATEX framework and Swedish regulations on potentially explosive atmospheres. For inspection work this means, in practice, that ignition sources must not be introduced into an active zone.',
        },
        {
          type: 'table',
          caption: 'Zone classification for gas and dust',
          headers: ['Zone (gas)', 'Zone (dust)', 'Meaning'],
          rows: [
            ['Zone 0', 'Zone 20', 'Explosive atmosphere is present continuously or for long periods'],
            ['Zone 1', 'Zone 21', 'Explosive atmosphere occurs occasionally in normal operation'],
            ['Zone 2', 'Zone 22', 'Explosive atmosphere occurs rarely and briefly'],
          ],
        },
      ],
    },
    {
      heading: 'How can drones be used at ATEX facilities?',
      blocks: [
        {
          type: 'p',
          text: 'Because a standard drone with electric motors and a battery is regarded as a potential ignition source, assignments are planned according to one of the following principles:',
        },
        {
          type: 'list',
          items: [
            '**Flying outside the zone boundaries** — many inspection objects (chimneys, flare systems, tank roofs, pipe bridges) can be documented with the camera’s zoom from positions outside the classified zones.',
            '**Flying under declassified conditions** — during shutdowns or after gas-free certification, zones can be temporarily declassified, opening the way for closer inspection.',
            '**Coordinated risk assessment** — every assignment is planned together with the facility’s operations and safety organisation, with zone maps as the basis.',
            '**Working within the permit system** — the flight is managed within the facility’s work permit system, in the same way as any other work on site.',
          ],
        },
        {
          type: 'p',
          text: 'SurveyDrone has experience of assignments in and around ATEX-classified zones and always plans these assignments in close cooperation with the facility’s safety organisation. Read more about [industrial inspection](/en/services/industrial-inspection).',
        },
      ],
    },
    {
      heading: 'Why drones instead of personnel at height?',
      blocks: [
        {
          type: 'list',
          items: [
            '**Fewer people in hazardous environments** — the inspection moves people from scaffolding, baskets and climbing to a safe position on the ground.',
            '**Shorter shutdowns** — objects that would otherwise require scaffolding can be documented in a fraction of the time, shortening turnarounds.',
            '**Thermal analysis included** — the [thermal camera](/en/knowledge-base/how-drone-thermography-works) can reveal levels, blockages and abnormal temperatures in process equipment.',
            '**Documented evidence** — high-resolution images give the maintenance organisation an objective basis for prioritising work.',
          ],
        },
      ],
    },
    {
      heading: 'What does the facility need to contribute?',
      blocks: [
        {
          type: 'list',
          items: [
            'Up-to-date **zone classification drawings** for the area concerned',
            'A contact person in the **operations or safety organisation** for coordination and permits',
            'Information about **planned operating conditions** — ongoing operation, shutdown or declassification',
            'The facility’s requirements for **safety training and site access**',
          ],
        },
        {
          type: 'p',
          text: 'With that material, the operator produces an assignment-specific risk assessment and flight plan that is approved by the facility before execution.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Are there ATEX-rated drones?',
      answer:
        'The market for ATEX-adapted drones is very limited and standard drones are not ATEX-rated. Safe assignments are therefore based on zone management: flying outside the zones, under declassified conditions, or in accordance with the facility’s risk assessment and permit system.',
    },
    {
      question: 'Can you inspect during ongoing operation?',
      answer:
        'Often, yes — many objects can be documented from positions outside the classified zones using the camera’s range and zoom. What is possible is determined in the risk assessment together with the facility.',
    },
    {
      question: 'What types of facilities does this apply to?',
      answer:
        'Among others: refineries, chemical and petrochemical plants, biogas and wastewater treatment plants, fuel depots, port terminals and facilities handling combustible dust, for example in the timber and grain industries.',
    },
  ],
  relatedServices: [
    { href: '/en/services/industrial-inspection', label: 'Industrial Inspection' },
    { href: '/en/services/thermal-inspection', label: 'Thermal Inspection' },
    { href: '/en/industries/industrial', label: 'Industrial' },
  ],
  relatedArticles: [
    'drone-regulations-in-sweden',
    'how-drone-thermography-works',
    'what-is-drone-inspection',
  ],
}
