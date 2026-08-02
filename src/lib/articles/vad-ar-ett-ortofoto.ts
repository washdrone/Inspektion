import type { Article } from './types'

export const vadArEttOrtofoto: Article = {
  slug: 'vad-ar-ett-ortofoto',
  title: 'Vad är ett ortofoto? Så fungerar den mätbara flygbilden',
  metaTitle: 'Vad är ett ortofoto? Enkel förklaring',
  description:
    'Ett ortofoto är en flygbild som korrigerats geometriskt så att den har enhetlig skala och kan användas som karta. Så skapas ortofoton med drönare och så används de i bygg och förvaltning.',
  category: 'Mätning & 3D',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'Ett ortofoto är en flygbild som korrigerats geometriskt — ortorektifierats — så att den får enhetlig skala över hela bilden och kan användas som en karta. I ett vanligt flygfoto lutar byggnader och skalan varierar med avståndet från kameran; i ett ortofoto är varje punkt återgiven rakt uppifrån, vilket gör att avstånd och ytor kan mätas direkt i bilden.',
  sections: [
    {
      heading: 'Skillnaden mellan flygfoto och ortofoto',
      blocks: [
        {
          type: 'p',
          text: 'Ett vanligt fotografi har ett perspektiv: objekt nära bildens kant avbildas snett, höga objekt "lutar" utåt och skalan varierar över bilden. Det gör vanliga flygbilder olämpliga att mäta i. Vid ortorektifiering kombineras många överlappande bilder med en höjdmodell av terrängen, så att varje pixel räknas om till sin korrekta position i ett koordinatsystem. Resultatet ser ut som ett foto men beter sig som en karta.',
        },
        {
          type: 'table',
          caption: 'Flygfoto jämfört med ortofoto',
          headers: ['Egenskap', 'Vanligt flygfoto', 'Ortofoto'],
          rows: [
            ['Skala', 'Varierar över bilden', 'Enhetlig i hela bilden'],
            ['Perspektiv', 'Objekt lutar mot kanterna', 'Allt återges rakt uppifrån'],
            ['Mätbarhet', 'Endast ungefärlig', 'Avstånd och areor kan mätas'],
            ['Koordinatsystem', 'Saknas', 'Georefererat i valt system'],
          ],
        },
      ],
    },
    {
      heading: 'Så skapas ett ortofoto med drönare',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Drönaren fotograferar området i ett systematiskt rutmönster med hög bildöverlappning.',
            'Bilderna bearbetas med [fotogrammetri](/kunskapsbank/vad-ar-fotogrammetri) till ett punktmoln och en höjdmodell.',
            'Varje bild ortorektifieras mot höjdmodellen och bilderna sammanfogas till en enda skalriktig mosaik.',
            'Ortofotot georefereras — med RTK/PPK-data och vid behov markstödpunkter — så att det ligger rätt i koordinatsystemet.',
          ],
        },
        {
          type: 'p',
          text: 'Med drönare kan ortofoton dessutom tas fram med mycket högre upplösning än traditionella flygfoton — ofta någon eller några centimeter per pixel — och exakt när de behövs, i stället för att förlita sig på flygfotograferingar som kan vara flera år gamla.',
        },
      ],
    },
    {
      heading: 'Vad används ortofoton till?',
      blocks: [
        {
          type: 'list',
          items: [
            '**Byggarbetsplatser** — aktuella lägesbilder för planering, samordning, APD-planer och dokumentation av utfört arbete.',
            '**Fastighetsförvaltning** — översikt över tak, markytor och installationer; underlag för skötselplaner.',
            '**Projektering** — aktuellt och högupplöst underlag att rita mot, som komplement till kartdata.',
            '**Mängdavstämning** — ytor för asfalt, grönytor och beläggningar kan mätas direkt i bilden.',
            '**Dokumentation över tid** — återkommande ortofoton visar förändringar och utgör spårbart underlag vid tvister.',
          ],
        },
        {
          type: 'p',
          text: 'Ortofoto ingår ofta som leverans i [3D-kartläggning](/tjanster/3d-kartlaggning) och [drönarinmätning](/tjanster/dronarinmatning).',
        },
      ],
    },
    {
      heading: 'Vad avgör kvaliteten?',
      blocks: [
        {
          type: 'list',
          items: [
            '**Upplösning (GSD)** — styrs av flyghöjd och kamera; avgör vilka detaljer som syns. Läs mer i [Hur noggrann är drönarmätning?](/kunskapsbank/hur-noggrann-ar-dronarmatning)',
            '**Georeferering** — RTK/PPK och markstödpunkter avgör hur exakt bilden ligger i koordinatsystemet.',
            '**Höjdmodellens kvalitet** — fel i höjdmodellen ger geometriska fel, särskilt vid byggnadskanter och branta slänter.',
            '**Ljusförhållanden** — jämnt ljus utan hårda skuggor ger den mest användbara bilden.',
          ],
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Kan man mäta höjder i ett ortofoto?',
      answer:
        'Nej, ortofotot är tvådimensionellt. Höjdinformationen finns i den höjdmodell (DSM/DTM) som skapas i samma process och som ofta levereras tillsammans med ortofotot.',
    },
    {
      question: 'Hur aktuellt är ett ortofoto från drönare?',
      answer:
        'Det visar läget vid flygtillfället — vilket är en av de största fördelarna. I stället för att använda kartunderlag som kan vara flera år gammalt kan ett ortofoto tas fram samma vecka som det behövs.',
    },
    {
      question: 'I vilket format levereras ortofoton?',
      answer:
        'Vanligen som GeoTIFF i önskat koordinatsystem, vilket kan öppnas i GIS- och CAD-program. Enklare bildformat kan också levereras för presentation och rapporter.',
    },
  ],
  relatedServices: [
    { href: '/tjanster/3d-kartlaggning', label: '3D-kartläggning' },
    { href: '/tjanster/dronarinmatning', label: 'Drönarinmätning' },
    { href: '/tjanster/fotogrammetri-3d-modell', label: 'Fotogrammetri & 3D-modell' },
  ],
  relatedArticles: [
    'vad-ar-fotogrammetri',
    'hur-noggrann-ar-dronarmatning',
    'sa-fungerar-volymberakning-med-dronare',
  ],
}
