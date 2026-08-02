import type { Article } from './types'

export const vadArFotogrammetri: Article = {
  slug: 'vad-ar-fotogrammetri',
  title: 'Vad är fotogrammetri? Så skapas 3D-modeller av flygbilder',
  metaTitle: 'Vad är fotogrammetri? Enkel förklaring',
  description:
    'Fotogrammetri är tekniken att skapa mätbara 3D-modeller ur överlappande fotografier. Så fungerar processen med drönare — från flygplanering och GSD till punktmoln, ortofoto och 3D-modell.',
  category: 'Mätning & 3D',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'Fotogrammetri är tekniken att göra exakta mätningar och tredimensionella modeller utifrån fotografier. Med drönare fotograferas ett område eller objekt från många positioner med stor överlappning mellan bilderna; specialiserad programvara identifierar sedan samma punkter i flera bilder och beräknar deras position i tre dimensioner. Resultatet är punktmoln, 3D-modeller, ortofoton och höjdmodeller som går att mäta i med hög noggrannhet.',
  sections: [
    {
      heading: 'Så fungerar processen steg för steg',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            '**Flygplanering** — området fotograferas enligt en förplanerad rutt där varje bild överlappar de intilliggande, vanligen med 70–80 % överlapp.',
            '**Datainsamling** — drönaren flyger rutten automatiskt och tar hundratals till tusentals georefererade bilder.',
            '**Blockutjämning (SfM)** — programvaran hittar gemensamma punkter i överlappande bilder och beräknar både kamerapositioner och punkternas 3D-koordinater (Structure from Motion).',
            '**Täta punktmoln** — miljontals 3D-punkter beräknas och bildar en detaljerad digital kopia av ytan.',
            '**Slutprodukter** — ur punktmolnet skapas 3D-modeller, ortofoton, höjdmodeller (DSM/DTM), konturlinjer och volymberäkningar.',
          ],
        },
      ],
    },
    {
      heading: 'Viktiga begrepp: GSD, GCP och RTK',
      blocks: [
        {
          type: 'table',
          caption: 'Centrala begrepp inom drönarfotogrammetri',
          headers: ['Begrepp', 'Betydelse'],
          rows: [
            [
              '**GSD** (Ground Sample Distance)',
              'Markupplösning — hur stor yta på marken en pixel motsvarar. Lägre GSD = högre detaljnivå. Styrs främst av flyghöjd och kamera.',
            ],
            [
              '**GCP** (Ground Control Points)',
              'Inmätta markstödpunkter som knyter modellen till ett koordinatsystem och höjer noggrannheten.',
            ],
            [
              '**RTK/PPK**',
              'GNSS-tekniker som ger drönarens kamerapositioner centimeternoggrannhet — i realtid (RTK) eller i efterbearbetning (PPK). Minskar behovet av markstödpunkter.',
            ],
            [
              '**DSM/DTM**',
              'Digital ytmodell (med byggnader och vegetation) respektive digital terrängmodell (ren mark).',
            ],
            [
              '**Ortofoto**',
              'Geometriskt korrigerad flygbild med enhetlig skala — fungerar som en karta att mäta i.',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Fler begrepp förklaras i vår [ordlista](/ordlista).',
        },
      ],
    },
    {
      heading: 'Vad används fotogrammetri till?',
      blocks: [
        {
          type: 'list',
          items: [
            '**Volymberäkning** — upplag, täkter och schakter mäts ur ytmodellen. Se [volymberäkning med drönare](/tjanster/volymberakning).',
            '**Byggdokumentation** — lägesdokumentation av byggarbetsplatser över tid, mängdreglering och relationsunderlag.',
            '**Kartläggning** — ortofoton och höjdmodeller för projektering, förvaltning och planering. Se [3D-kartläggning](/tjanster/3d-kartlaggning).',
            '**Inspektionsunderlag** — 3D-modeller av byggnader och anläggningar där skador kan lokaliseras och mätas. Se [fotogrammetri & 3D-modell](/tjanster/fotogrammetri-3d-modell).',
            '**Inmätning** — situationsplaner och underlag där traditionell inmätning vore tidskrävande. Se [drönarinmätning](/tjanster/dronarinmatning).',
          ],
        },
      ],
    },
    {
      heading: 'Hur noggrann är drönarfotogrammetri?',
      blocks: [
        {
          type: 'p',
          text: 'Noggrannheten beror på flera faktorer: GSD (flyghöjd och kamera), bildöverlapp, GNSS-utrustningens kvalitet (RTK/PPK), användning av markstödpunkter samt ytans beskaffenhet. Med rätt metodik når drönarfotogrammetri noggrannheter på centimeternivå i plan, vilket räcker för de flesta tillämpningar inom bygg, anläggning och förvaltning. För varje uppdrag anpassas metodiken efter den noggrannhet som faktiskt behövs — högre krav innebär lägre flyghöjd, fler stödpunkter och mer efterbearbetning.',
        },
        {
          type: 'p',
          text: 'Vegetation, vatten, blanka och enfärgade ytor är svåra för fotogrammetri eftersom programvaran behöver identifierbara punkter i bilderna. En erfaren operatör vet var metoden fungerar och var kompletterande mätning krävs.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Vad är skillnaden mellan fotogrammetri och laserskanning (LiDAR)?',
      answer:
        'Fotogrammetri beräknar 3D-punkter ur fotografier medan LiDAR mäter avstånd direkt med laserpulser. LiDAR fungerar bättre genom vegetation och i mörker, medan fotogrammetri ger fotorealistiska modeller och ofta lägre kostnad. Valet beror på tillämpningen.',
    },
    {
      question: 'Vilken upplösning kan man få på en 3D-modell?',
      answer:
        'Det styrs av GSD, som i sin tur styrs av flyghöjd och kamera. Vid låg flyghöjd över mindre objekt kan GSD på millimeter- till centimeternivå uppnås; vid kartläggning av större områden är några centimeter per pixel vanligt.',
    },
    {
      question: 'Hur lång tid tar det att få leverans?',
      answer:
        'Flygningen tar ofta bara timmar, medan efterbearbetningen — som är beräkningstung — kan ta från timmar till några dagar beroende på områdets storlek och önskade slutprodukter.',
    },
  ],
  relatedServices: [
    { href: '/tjanster/fotogrammetri-3d-modell', label: 'Fotogrammetri & 3D-modell' },
    { href: '/tjanster/3d-kartlaggning', label: '3D-kartläggning' },
    { href: '/tjanster/dronarinmatning', label: 'Drönarinmätning' },
  ],
  relatedArticles: [
    'sa-fungerar-volymberakning-med-dronare',
    'vad-ar-dronarinspektion',
    'regler-for-dronarflygning-i-sverige',
  ],
}
