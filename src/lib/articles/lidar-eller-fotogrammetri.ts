import type { Article } from './types'

export const lidarEllerFotogrammetri: Article = {
  slug: 'lidar-eller-fotogrammetri',
  title: 'LiDAR eller fotogrammetri — vilken metod passar när?',
  metaTitle: 'LiDAR eller fotogrammetri — så väljer du',
  description:
    'LiDAR mäter avstånd med laser, fotogrammetri beräknar 3D ur foton. Så skiljer sig metoderna i vegetation, ljusförhållanden, färginformation och kostnad — och så väljer du rätt för ditt uppdrag.',
  category: 'Mätning & 3D',
  datePublished: '2026-08-03',
  dateModified: '2026-08-03',
  intro:
    'Kortfattat: välj **fotogrammetri** när marken är öppen och du vill ha färgrik, fotorealistisk dokumentation, och **LiDAR** när vegetation skymmer marken, ljuset är svagt eller smala strukturer som ledningar ska mätas. Skillnaden ligger i hur punkterna skapas. Fotogrammetri räknar fram 3D-punkter genom att matcha samma detalj i flera överlappande foton — metoden ser bara det kameran ser. LiDAR skickar ut laserpulser och mäter avståndet direkt, vilket gör den oberoende av bildmatchning och av dagsljus.',
  sections: [
    {
      heading: 'Så fungerar de två metoderna',
      blocks: [
        {
          type: 'p',
          text: '**Fotogrammetri** bygger på att ett område fotograferas från många positioner med stor överlappning. Programvaran hittar gemensamma punkter i bilderna och beräknar deras läge i tre dimensioner. Metoden förutsätter alltså att ytan syns och har tillräckligt med struktur för att kunna matchas — läs mer i vår guide om [vad fotogrammetri är](/kunskapsbank/vad-ar-fotogrammetri).',
        },
        {
          type: 'p',
          text: '**LiDAR** (Light Detection and Ranging) mäter i stället avståndet till varje träffpunkt genom att skicka ut laserpulser och registrera reflexen. Tillsammans med sensorns läge och riktning blir varje mätning en 3D-koordinat. En viktig egenskap är att en och samma laserpuls kan ge **flera returer** — några från löv och grenar, andra från punkter längre ner och i gynnsamma fall från marken.',
        },
      ],
    },
    {
      heading: 'Jämförelse: LiDAR mot fotogrammetri',
      blocks: [
        {
          type: 'table',
          caption: 'Så skiljer sig metoderna i praktiken',
          headers: ['Egenskap', 'LiDAR', 'Fotogrammetri'],
          rows: [
            [
              '**Vegetation**',
              'Flera returer per puls gör att marken delvis kan mätas under gräs, sly och trädkronor.',
              'Ser bara vegetationens ovansida; marken under förblir omätt.',
            ],
            [
              '**Ljusförhållanden**',
              'Skapar sin egen mätsignal och är därför i hög grad oberoende av dagsljus och skuggor.',
              'Kräver jämnt och tillräckligt ljus; skuggor och mörker försämrar bildmatchningen.',
            ],
            [
              '**Färginformation**',
              'Ger i grunden geometri; färg tillförs genom att kombinera med bilder.',
              'Ger naturliga färger och fotorealistiska modeller direkt ur materialet.',
            ],
            [
              '**Kostnad**',
              'Högre — kräver särskild sensor och mer efterbearbetning i form av klassificering.',
              'Lägre — bygger på kamerabaserad insamling och är den vanligare metoden.',
            ],
            [
              '**Punkttäthet**',
              'Jämn täthet även på svaga ytor, och smala objekt som ledningar registreras som egna punkter.',
              'Mycket tät på texturrika ytor, men gles eller brusig på enfärgade, blanka och blöta ytor.',
            ],
            [
              '**Lämpliga uppdrag**',
              'Skogs- och vegetationsklädd mark, kraftledningsgator, korridorkartering, terrängmodeller i bevuxen terräng.',
              'Öppen mark, upplag och täkter, byggnadsmodeller, ortofoto och visuell dokumentation.',
            ],
          ],
        },
      ],
    },
    {
      heading: 'När passar LiDAR bäst?',
      blocks: [
        {
          type: 'list',
          items: [
            '**Bevuxen mark** — när en terrängmodell behövs i skog, på ängsmark eller där sly täcker ytan.',
            '**Korridorer** — kraftledningsgator, vägar, järnväg och andra långsträckta objekt där smala strukturer ska med.',
            '**Svaga ljusförhållanden** — sen höst och vinter i Sverige när dagsljuset är kort och lågt.',
            '**Volymer i bevuxen terräng** — där basytan under massan behöver skannas fram i stället för uppskattas.',
            '**Kompletterande underlag** — när fotogrammetrin inte räcker till och resultatet behöver kvalitetssäkras.',
          ],
        },
        {
          type: 'p',
          text: 'Vi utför laserskanning inom tjänsten [LiDAR-skanning](/tjanster/lidar-skanning), där punktmolnet klassificeras i mark, vegetation och byggnad.',
        },
      ],
    },
    {
      heading: 'När räcker fotogrammetri?',
      blocks: [
        {
          type: 'p',
          text: 'På öppen, texturrik mark är fotogrammetri ofta det självklara valet. Metoden ger både geometri och färg i samma insamling, vilket betyder att du får ortofoto och visuell dokumentation utan extra arbete. För upplag, täkter, byggnadsfasader, byggarbetsplatser och situationsplaner är det normalt tillräckligt — se [drönarinmätning](/tjanster/dronarinmatning) och [volymberäkning](/tjanster/volymberakning).',
        },
        {
          type: 'p',
          text: 'Där metoden kommer till korta är på blanka och blöta ytor, i enfärgade partier utan struktur och överallt där marken är skymd. Då blir punktmolnet glest eller brusigt just där underlaget behöver vara som bäst.',
        },
      ],
    },
    {
      heading: 'Kombinera metoderna',
      blocks: [
        {
          type: 'p',
          text: 'Valet behöver sällan vara antingen eller. Ett vanligt upplägg är att skanna med LiDAR för att få en pålitlig markmodell och samtidigt flyga fotogrammetri för färg, ortofoto och visuell dokumentation. Resultaten läggs i samma koordinatsystem och kompletterar varandra: lasern ger marken, bilderna ger utseendet. Se [markmodellering](/tjanster/markmodellering) för hur DTM och DSM tas fram ur båda datakällorna.',
        },
        {
          type: 'p',
          text: 'Oavsett metod avgörs slutresultatets kvalitet av upplägget — flyghöjd, täthet, positionering och kontrollpunkter. Läs mer om vad som styr resultatet i [hur noggrann är drönarmätning](/kunskapsbank/hur-noggrann-ar-dronarmatning).',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Ger LiDAR alltid bättre resultat än fotogrammetri?',
      answer:
        'Nej. LiDAR är starkare i vegetation, i svagt ljus och på smala strukturer, men fotogrammetri ger färginformation och fotorealistiska modeller som lasern inte producerar på egen hand. På öppen, texturrik mark ger fotogrammetri ofta ett minst lika användbart underlag till lägre kostnad.',
    },
    {
      question: 'Kan LiDAR se ända ner till marken i tät skog?',
      answer:
        'Bara delvis. Flera returer per puls gör att en del strålar tar sig ner mellan löv och grenar, men i mycket tät vegetation blir markpunkterna glesa. Hur väl det fungerar beror på vegetationens täthet, årstiden och skanningens upplägg — det kan aldrig utlovas i förväg.',
    },
    {
      question: 'Behöver jag markstödpunkter med LiDAR?',
      answer:
        'Positioneringen sker med RTK/GNSS, men kontrollpunkter används fortfarande för att verifiera och dokumentera resultatet. Kontroll mot kända punkter är det som gör noggrannheten spårbar, oavsett vilken av metoderna som använts.',
    },
    {
      question: 'Vilken metod ska jag välja för en volymberäkning?',
      answer:
        'Är upplaget eller täkten fri från vegetation räcker fotogrammetri gott. Ligger massan i bevuxen terräng, eller behöver basytan under massan mätas fram, är laserskanning ett bättre underlag eftersom markpunkter kan registreras under växtligheten.',
    },
  ],
  relatedServices: [
    { href: '/tjanster/lidar-skanning', label: 'LiDAR-skanning' },
    { href: '/tjanster/markmodellering', label: 'Markmodellering' },
    { href: '/tjanster/fotogrammetri-3d-modell', label: 'Fotogrammetri & 3D-modell' },
  ],
  relatedArticles: [
    'vad-ar-fotogrammetri',
    'dtm-och-dsm-skillnaden',
    'hur-noggrann-ar-dronarmatning',
  ],
}
