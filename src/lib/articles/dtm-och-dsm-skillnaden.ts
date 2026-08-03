import type { Article } from './types'

export const dtmOchDsmSkillnaden: Article = {
  slug: 'dtm-och-dsm-skillnaden',
  title: 'DTM och DSM — vad är skillnaden mellan terrängmodell och ytmodell?',
  metaTitle: 'DTM och DSM — skillnaden förklarad',
  description:
    'DTM beskriver den rena marken, DSM den översta ytan inklusive vegetation och byggnader. Så skiljer sig modellerna från DHM, hur de framställs ur fotogrammetri eller LiDAR och när du behöver vilken.',
  category: 'Mätning & 3D',
  datePublished: '2026-08-03',
  dateModified: '2026-08-03',
  intro:
    'Skillnaden i en mening: **DTM** (digital terrängmodell) beskriver den rena markytan utan vegetation och byggnader, medan **DSM** (digital ytmodell) beskriver den översta ytan som den faktiskt ser ut — alltså med trädkronor, buskar och tak inräknade. Ska du projektera, schakta eller räkna massor behöver du DTM. Ska du studera höjder, sikt, skuggor eller vegetationens omfattning är DSM rätt modell.',
  sections: [
    {
      heading: 'DTM, DSM och DHM jämförda',
      blocks: [
        {
          type: 'table',
          caption: 'De tre begreppen och vad de beskriver',
          headers: ['Modell', 'Beskriver', 'Typisk användning'],
          rows: [
            [
              '**DTM** — digital terrängmodell',
              'Den rena markytan, filtrerad från vegetation och byggnader.',
              'Projektering, schakt och fyll, massberäkning, höjdkurvor, avrinning.',
            ],
            [
              '**DSM** — digital ytmodell',
              'Den översta ytan inklusive trädkronor, buskar, tak och andra objekt.',
              'Siktanalys, skuggstudier, höjd på vegetation och byggnader, solinstrålning.',
            ],
            [
              '**DHM** — digital höjdmodell',
              'Samlingsbegrepp för höjddata över ett område, utan att i sig specificera om vegetation ingår.',
              'Används brett i tal och skrift; be alltid om förtydligande om det är mark eller yta som avses.',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Just DHM orsakar ofta missförstånd, eftersom termen används både som paraplybegrepp och ibland synonymt med DTM. Vid beställning är det säkrast att skriva ut vad som avses: **mark** eller **yta**.',
        },
      ],
    },
    {
      heading: 'Hur modellerna framställs',
      blocks: [
        {
          type: 'p',
          text: 'Båda modellerna härleds ur samma sorts underlag — ett punktmoln. Skillnaden uppstår i bearbetningen. DSM byggs av de högsta punkterna i varje läge och beskriver därmed vad som syns ovanifrån. DTM byggs enbart av punkter som klassificerats som mark, vilket kräver att vegetation och byggnader först filtrerats bort.',
        },
        {
          type: 'p',
          text: 'Vilken datakälla som används påverkar hur väl det går. [Fotogrammetri](/kunskapsbank/vad-ar-fotogrammetri) registrerar bara den yta kameran ser, så under tät vegetation finns helt enkelt inga markpunkter att bygga en DTM av. Laserskanning kan ge flera returer per puls, vilket gör att en del strålar tar sig ner till marken mellan löv och grenar — jämförelsen mellan metoderna finns i [LiDAR eller fotogrammetri](/kunskapsbank/lidar-eller-fotogrammetri).',
        },
      ],
    },
    {
      heading: 'När behöver du vilken modell?',
      blocks: [
        {
          type: 'list',
          items: [
            '**Projektering av mark och anläggning** — DTM, eftersom höjdsättning och anslutningar utgår från den verkliga markytan.',
            '**Massberäkning och schakt** — DTM, som är den yta volymer beräknas mot. Se [så fungerar volymberäkning](/kunskapsbank/sa-fungerar-volymberakning-med-dronare).',
            '**Höjdkurvor** — DTM, annars följer kurvorna trädkronor i stället för mark.',
            '**Sikt- och skuggstudier** — DSM, eftersom det är det som står på marken som skymmer.',
            '**Solinstrålning på tak** — DSM, som innehåller takens verkliga form och omgivande skuggande objekt.',
            '**Vegetationshöjd** — skillnaden mellan DSM och DTM ger höjden på det som står på marken.',
          ],
        },
      ],
    },
    {
      heading: 'Vad påverkar kvaliteten på en DTM?',
      blocks: [
        {
          type: 'p',
          text: 'Den avgörande faktorn är hur många verkliga markpunkter som finns i underlaget. På öppen mark blir punkttätheten hög och modellen detaljerad. I tät vegetation blir markpunkterna glesa, och modellen måste då interpolera mellan dem — resultatet blir jämnare och mindre detaljerat just där. Det är inte ett fel i bearbetningen utan en följd av vad som gick att mäta.',
        },
        {
          type: 'p',
          text: 'Därför bör en leverans redovisa var underlaget är starkt respektive svagt, tillsammans med kontroll mot kända punkter. Mer om vad som styr resultatet finns i [hur noggrann är drönarmätning](/kunskapsbank/hur-noggrann-ar-dronarmatning). Vi tar fram båda modelltyperna inom [markmodellering](/tjanster/markmodellering).',
        },
      ],
    },
    {
      heading: 'Att tänka på vid beställning',
      blocks: [
        {
          type: 'list',
          items: [
            '**Ange mark eller yta** — skriv DTM eller DSM i klartext i stället för enbart "höjdmodell".',
            '**Beskriv vegetationen** — öppen mark, gräs, sly eller skog styr metodvalet helt.',
            '**Ange upplösning** — rutnätets täthet ska matcha hur detaljerat underlaget behöver vara.',
            '**Ange koordinat- och höjdsystem** — exempelvis SWEREF 99 i plan och RH 2000 i höjd.',
            '**Bestäm följdprodukter** — höjdkurvor, sektioner och analyser tas fram ur modellen och bör beställas samtidigt.',
          ],
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Kan man få både DTM och DSM ur samma flygning?',
      answer:
        'Ja. Båda härleds ur samma punktmoln — DSM av de översta punkterna och DTM av de markklassade. Kvaliteten på DTM begränsas dock av hur många markpunkter som faktiskt registrerats, vilket i tät vegetation kan vara få.',
    },
    {
      question: 'Vad menas med att en modell interpolerats?',
      answer:
        'Att höjden mellan uppmätta punkter beräknats fram i stället för mätts. Det är normalt och nödvändigt för att få en sammanhängande yta, men ju glesare mätpunkterna är desto mer av modellen är beräknad och desto osäkrare blir den lokalt.',
    },
    {
      question: 'Räcker öppen kartdata i stället för egen inmätning?',
      answer:
        'För översiktliga bedömningar kan nationell höjddata ofta räcka. För projektering, massberäkning och uppföljning behövs normalt en egen, aktuell inmätning eftersom marken kan ha förändrats och upplösningen i öppna dataset sällan är anpassad till ett enskilt projekt.',
    },
    {
      question: 'Vad är skillnaden mellan höjdkurvor ur DTM och ur DSM?',
      answer:
        'Kurvor ur DTM följer markens form och är det som används i projektering. Kurvor ur DSM följer den översta ytan och kan därför löpa över trädkronor och tak, vilket gör dem missvisande som markunderlag.',
    },
  ],
  relatedServices: [
    { href: '/tjanster/markmodellering', label: 'Markmodellering' },
    { href: '/tjanster/lidar-skanning', label: 'LiDAR-skanning' },
    { href: '/tjanster/volymberakning', label: 'Volymberäkning' },
  ],
  relatedArticles: [
    'lidar-eller-fotogrammetri',
    'vad-ar-ett-ortofoto',
    'sa-fungerar-volymberakning-med-dronare',
  ],
}
