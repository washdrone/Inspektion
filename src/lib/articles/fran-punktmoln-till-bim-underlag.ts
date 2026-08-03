import type { Article } from './types'

export const franPunktmolnTillBimUnderlag: Article = {
  slug: 'fran-punktmoln-till-bim-underlag',
  title: 'Från punktmoln till BIM-underlag — så går processen till',
  metaTitle: 'Från punktmoln till BIM-underlag',
  description:
    'Så blir en drönarflygning ett användbart BIM-underlag: punktmoln, filtrering, klassificering, georeferering och leveransformat. Vad LAS, LAZ, E57 och IFC är — och vad du bör specificera vid beställning.',
  category: 'Mätning & 3D',
  datePublished: '2026-08-03',
  dateModified: '2026-08-03',
  intro:
    'Vägen från drönarflygning till användbart BIM-underlag går i sex steg: flygning, punktmoln, filtrering och klassificering, georeferering, leverans i rätt format och slutligen användning hos projektören. Det som avgör om underlaget blir användbart är sällan själva flygningen — utan att koordinatsystem, format och detaljnivå bestämts innan mätningen. Här går vi igenom varje steg och vad du som beställare behöver specificera.',
  sections: [
    {
      heading: 'Processen steg för steg',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            '**Flygning** — objektet fotograferas eller skannas efter en planerad rutt med RTK/GNSS-positionering. Bildvinklar och flyghöjd anpassas efter om tak, fasad eller mark är det viktiga.',
            '**Punktmoln** — insamlade data bearbetas till miljontals 3D-punkter som tillsammans beskriver objektets och markens yta.',
            '**Filtrering och klassificering** — brus och irrelevanta punkter tas bort, och kvarvarande punkter delas i klasser som mark, vegetation och byggnad.',
            '**Georeferering** — molnet knyts till ett koordinatsystem, exempelvis SWEREF 99 i plan och RH 2000 i höjd, och kontrolleras mot kända punkter.',
            '**Leveransformat** — underlaget exporteras i de format mottagande programvara läser, tillsammans med dokumentation av system och kontroll.',
            '**Användning hos projektör** — punktmolnet läses in som referens i CAD- eller BIM-miljön, där byggdelar modelleras och projekteringen utgår från verkligt läge.',
          ],
        },
      ],
    },
    {
      heading: 'Vanliga format — och vad de gör',
      blocks: [
        {
          type: 'table',
          caption: 'Format som förekommer i kedjan från mätning till modell',
          headers: ['Format', 'Vad det är', 'När det används'],
          rows: [
            [
              '**LAS**',
              'Standardformat för punktmoln med stöd för klassificering och attribut per punkt.',
              'Leverans av mät- och laserdata till mät-, GIS- och projekteringsprogram.',
            ],
            [
              '**LAZ**',
              'Komprimerad variant av LAS med samma innehåll men betydligt mindre filstorlek.',
              'När stora punktmoln ska skickas eller lagras utan att information går förlorad.',
            ],
            [
              '**E57**',
              'Öppet utbytesformat för punktmoln, vanligt i skannings- och BIM-sammanhang.',
              'Inläsning i CAD- och BIM-programvara som föredrar E57 framför LAS.',
            ],
            [
              '**IFC**',
              'Öppet objektbaserat format för byggnadsinformation — väggar, bjälklag och andra byggdelar med egenskaper.',
              'Mottagarsidans format: det projektören producerar när underlaget modellerats till objekt.',
            ],
            [
              '**Mesh / 3D-modell**',
              'Sammanhängande texturerad ytmodell byggd av trianglar i stället för lösa punkter.',
              'Visualisering, överblick och kommunikation mellan parter.',
            ],
          ],
        },
        {
          type: 'p',
          text: 'En viktig distinktion: **punktmoln är mätdata, IFC är en modell**. Ett punktmoln blir inte en IFC-modell genom en filkonvertering — någon behöver tolka mätdatan och modellera byggdelar med egenskaper. Det arbetet görs av projektören, i deras egen BIM-miljö och enligt deras objektstandarder.',
        },
      ],
    },
    {
      heading: 'Vad filtrering och klassificering betyder i praktiken',
      blocks: [
        {
          type: 'p',
          text: 'Ett obehandlat punktmoln innehåller allt sensorn registrerat — inklusive fåglar, fordon, brus och vegetation. Klassificeringen delar upp punkterna i kategorier så att olika delar kan användas var för sig. Markklassade punkter blir en [terrängmodell](/kunskapsbank/dtm-och-dsm-skillnaden), byggnadsklassade punkter blir underlaget för fasad- och takgeometri.',
        },
        {
          type: 'p',
          text: 'Hur väl klassificeringen lyckas beror på datakällan. Laserdata har fördelen att flera returer per puls gör det möjligt att skilja mark från vegetation — se [LiDAR eller fotogrammetri](/kunskapsbank/lidar-eller-fotogrammetri). Fotogrammetriskt data ser bara den översta ytan, vilket gör markfiltrering svårare i bevuxna partier.',
        },
      ],
    },
    {
      heading: 'Georeferering — det som gör underlaget användbart',
      blocks: [
        {
          type: 'p',
          text: 'Ett punktmoln utan känt koordinatsystem går att mäta i men inte att kombinera med annat. Först när underlaget ligger i samma system som den projekterade modellen kan de läggas över varandra, jämföras och samgranskas. I Sverige används normalt **SWEREF 99** med lämplig projektionszon i plan och **RH 2000** i höjd, men vissa projekt arbetar i ett lokalt projektsystem.',
        },
        {
          type: 'p',
          text: 'Valet måste vara gjort innan flygningen, eftersom det styr hur inmätningen knyts till kända punkter. Kontroll mot punkter som inte använts i beräkningen är det som gör noggrannheten spårbar — mer om detta i [hur noggrann är drönarmätning](/kunskapsbank/hur-noggrann-ar-dronarmatning).',
        },
      ],
    },
    {
      heading: 'Vad du bör specificera vid beställning',
      blocks: [
        {
          type: 'list',
          items: [
            '**Koordinatsystem och höjdsystem** — vilket plan- och höjdsystem projektet arbetar i.',
            '**Leveransformat** — vilka format mottagande programvara faktiskt läser in, inte bara vilka som finns.',
            '**Detaljnivå** — hur små detaljer som behöver kunna urskiljas, eftersom det styr flyghöjd och insamling.',
            '**Omfattning** — vilken yta och vilka delar av objektet som ska mätas in, och vad som kan utelämnas.',
            '**Klassificering** — om punktmolnet ska levereras klassificerat och i så fall i vilka klasser.',
            '**Kontroll och kvalitetsredovisning** — hur resultatet ska verifieras och vad som ska dokumenteras.',
            '**Vem som modellerar** — att det är tydligt att mätleveransen är underlag och att modelleringen till objekt sker hos projektören.',
          ],
        },
        {
          type: 'p',
          text: 'Vi levererar sådana underlag inom [BIM-underlag från drönardata](/tjanster/bim-underlag), där format och koordinatsystem stäms av mot mottagande programvara innan uppdraget påbörjas.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Kan ett punktmoln konverteras direkt till IFC?',
      answer:
        'Nej, inte på ett meningsfullt sätt. Ett punktmoln beskriver ytor som lösa mätpunkter, medan IFC beskriver byggdelar som objekt med egenskaper. Steget däremellan kräver tolkning och modellering, vilket görs av projektören med punktmolnet som referens.',
    },
    {
      question: 'Hur stora blir filerna?',
      answer:
        'Punktmoln kan bli mycket stora eftersom varje punkt lagras med koordinater och attribut. Därför levereras de ofta som LAZ, som är komprimerat utan att information går förlorad, och vid behov uppdelade i kakelrutor så att projektören kan läsa in bara det område som är aktuellt.',
    },
    {
      question: 'Vad kan drönaren inte mäta in?',
      answer:
        'Invändiga utrymmen, ytor under tak och partier som är helt skymda av vegetation eller intilliggande byggnader nås inte från luften. För sådana delar behövs kompletterande mätning på plats, exempelvis med markbaserad skanner eller totalstation.',
    },
    {
      question: 'Behöver punktmolnet uppdateras under projektets gång?',
      answer:
        'Om objektet förändras, ja. Ett underlag speglar läget vid mättillfället. Vid ombyggnad eller pågående produktion är det vanligt att mäta in på nytt vid utvalda skeden, vilket i förlängningen kan hanteras som en [digital tvilling](/tjanster/digital-tvilling).',
    },
  ],
  relatedServices: [
    { href: '/tjanster/bim-underlag', label: 'BIM-underlag' },
    { href: '/tjanster/dronarinmatning', label: 'Drönarinmätning' },
    { href: '/tjanster/lidar-skanning', label: 'LiDAR-skanning' },
  ],
  relatedArticles: [
    'lidar-eller-fotogrammetri',
    'vad-ar-en-digital-tvilling',
    '3d-modeller-av-byggnader-anvandningsomraden',
  ],
}
