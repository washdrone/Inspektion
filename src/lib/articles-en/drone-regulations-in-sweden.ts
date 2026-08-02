import type { Article } from '@/lib/articles/types'

export const droneRegulationsInSweden: Article = {
  slug: 'drone-regulations-in-sweden',
  title: 'Drone regulations in Sweden — what applies',
  metaTitle: 'Drone regulations in Sweden',
  description:
    'The EU drone rules apply in Sweden: operator registration, remote pilot certificates, a 120-metre altitude limit and visual line of sight. Guide to the categories, camera imagery and professional flying.',
  category: 'Rules & safety',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'Drone flying in Sweden is governed by the EU’s common drone regulations (Regulation (EU) 2019/947), with the Swedish Transport Agency (Transportstyrelsen) as the responsible authority. In short: most drone operators must register, the remote pilot needs a drone certificate, flight altitude is normally limited to 120 metres and the drone must be kept within visual line of sight. Professional flying in built-up areas or close to people involves additional requirements.',
  sections: [
    {
      heading: 'Three categories of drone operations',
      blocks: [
        {
          type: 'p',
          text: 'The EU framework divides all drone operations into three categories based on risk:',
        },
        {
          type: 'table',
          caption: 'The EU categories for drone operations',
          headers: ['Category', 'Risk profile', 'Typical requirements'],
          rows: [
            [
              '**Open**',
              'Low risk',
              'Maximum 120 m altitude, drone under 25 kg, within visual line of sight (VLOS), not over assemblies of people. No prior authorisation.',
            ],
            [
              '**Specific**',
              'Elevated risk',
              'Risk assessment and authorisation/declaration to the Swedish Transport Agency, e.g. for flights beyond visual line of sight or close to people.',
            ],
            [
              '**Certified**',
              'High risk',
              'Certification equivalent to manned aviation. Covers, for example, transport of people or dangerous goods.',
            ],
          ],
        },
        {
          type: 'p',
          text: 'The open category is in turn divided into subcategories A1, A2 and A3, which govern how close to people you may fly depending on the drone’s weight and C-class marking.',
        },
      ],
    },
    {
      heading: 'Registration and drone certificates',
      blocks: [
        {
          type: 'list',
          items: [
            '**Operator registration** — whoever is responsible for the drone operation must register with the Swedish Transport Agency if the drone weighs 250 grams or more, or if it has a camera or other sensor capable of capturing personal data (and is not a toy). The operator ID must be marked on the drone.',
            '**A1/A3 drone certificate** — required for most remote pilots in the open category and obtained through training and an exam with the Swedish Transport Agency.',
            '**A2 drone certificate** — required for flying closer to people in subcategory A2 and includes an extended theory exam.',
            '**Age limit** — remote pilots in the open category in Sweden must be at least 15 years old.',
          ],
        },
      ],
    },
    {
      heading: 'Where is flying not allowed?',
      blocks: [
        {
          type: 'list',
          items: [
            '**Control zones around airports** — normally require clearance or compliance with specific conditions. Zones and conditions are shown on maps and in NOTAM information.',
            '**Restricted areas** — e.g. around protected sites, prisons and certain military areas.',
            '**National parks and nature reserves** — many have local drone bans in their regulations. Always check what applies in the area concerned.',
            '**Over assemblies of people** — prohibited in the open category.',
          ],
        },
        {
          type: 'p',
          text: 'Professional operators always check the airspace and local restrictions as part of flight planning before every assignment — it is part of the preparation for every [inspection assignment](/en/how-it-works).',
        },
      ],
    },
    {
      heading: 'Camera imagery, GDPR and dissemination permits',
      blocks: [
        {
          type: 'p',
          text: 'Drones with cameras are subject to the General Data Protection Regulation (GDPR) when images may contain personal data. In professional photography this is handled by planning flights so that people are not photographed unnecessarily, and through routines for storing and deleting imagery.',
        },
        {
          type: 'p',
          text: 'In addition, disseminating aerial images of Swedish territory may require a dissemination permit under the Swedish law on the protection of geographic information, which is assessed by the Swedish mapping authority (Lantmäteriet). A reputable drone operator knows the rules and handles this as part of the delivery.',
        },
      ],
    },
    {
      heading: 'What do the rules mean for you as a client?',
      blocks: [
        {
          type: 'p',
          text: 'As the client of a drone inspection you do not need a permit or drone certificate yourself — the responsibility lies with the operator. What you should check is that the operator is registered, that the pilots have the correct qualifications and that the company is insured. SurveyDrone flies with EASA-certified remote pilots and carries liability insurance.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Is it allowed to fly a drone over private property?',
      answer:
        'The airspace is not controlled by the landowner, but consideration, GDPR and Swedish rules on domestic privacy apply. In professional inspections, flights are carried out in consultation with the property owner, and neighbours are informed where needed.',
    },
    {
      question: 'How high may a drone fly?',
      answer:
        'In the open category the maximum altitude is 120 metres above the ground. Exceptions require authorisation in the specific category. Close to obstacles such as masts or buildings there are special rules that permit flying above 120 metres under certain conditions.',
    },
    {
      question: 'Is a permit required for inspections in urban environments?',
      answer:
        'It depends on the drone’s weight, C-class and distance to people. Much urban flying can take place in the open category under the right conditions, while some assignments require operations in the specific category with authorisation from or a declaration to the Swedish Transport Agency. The operator makes that assessment in the flight planning.',
    },
    {
      question: 'Who is liable if something goes wrong?',
      answer:
        'The drone operator is responsible for conducting the flight in accordance with the regulations and must carry liability insurance covering any damage. As a client you should always check that the operator is insured.',
    },
  ],
  relatedServices: [
    { href: '/en/how-it-works', label: 'How It Works' },
    { href: '/en/services/roof-inspection', label: 'Roof Inspection' },
    { href: '/en/services/industrial-inspection', label: 'Industrial Inspection' },
  ],
  relatedArticles: [
    'what-is-drone-inspection',
    'drone-inspection-vs-traditional-inspection',
    'how-a-drone-roof-inspection-works',
  ],
}
