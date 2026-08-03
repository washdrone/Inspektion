import type { Article } from './types'

export const vadArEnDigitalTvilling: Article = {
  slug: 'vad-ar-en-digital-tvilling',
  title: 'Vad är en digital tvilling? Definition, användning och krav',
  metaTitle: 'Vad är en digital tvilling?',
  description:
    'En digital tvilling är en måttriktig digital kopia av ett objekt som hålls uppdaterad över tid. Så skiljer den sig från en engångs-3D-modell, hur ofta den behöver uppdateras och vad som krävs för att hålla den aktuell.',
  category: 'Mätning & 3D',
  datePublished: '2026-08-03',
  dateModified: '2026-08-03',
  intro:
    'En digital tvilling är en digital, måttriktig kopia av en byggnad eller anläggning som **hålls uppdaterad över tid** så att den speglar objektets nuläge. Det avgörande ordet är uppdaterad. En 3D-modell blir en digital tvilling först när den byggs om vid återkommande mättillfällen och historiken sparas — då går det inte bara att se hur objektet ser ut nu, utan också vad som förändrats sedan förra gången.',
  sections: [
    {
      heading: 'Skillnaden mot en engångs-3D-modell',
      blocks: [
        {
          type: 'p',
          text: 'En vanlig [3D-modell](/kunskapsbank/3d-modeller-av-byggnader-anvandningsomraden) är en ögonblicksbild. Den är korrekt den dag objektet mättes in och blir successivt mindre aktuell därefter. Det är ofta helt tillräckligt — för en dokumentation av ett skick eller ett underlag till en enskild projektering behövs sällan mer.',
        },
        {
          type: 'p',
          text: 'En digital tvilling skiljer sig genom **rytmen och historiken**. Objektet mäts in på nytt enligt en överenskommen intervall, varje mättillfälle sparas som ett eget underlag och samtliga läggs i samma koordinatsystem. Det gör att två datum kan läggas över varandra och att förändringen mellan dem blir avläsbar. Tekniskt är modellerna likadana; det är underhållet som skiljer.',
        },
      ],
    },
    {
      heading: 'Så byggs och underhålls den',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            '**Basmätning** — objektet mäts in första gången och blir tidsseriens utgångsläge, georefererat i valt koordinatsystem.',
            '**Modellbygge** — data bearbetas till 3D-modell, punktmoln och ortofoto som beskriver nuläget.',
            '**Återkommande flygningar** — samma upplägg upprepas vid varje nytt tillfälle så att mätningarna blir jämförbara.',
            '**Jämförelse** — datumen läggs över varandra och skillnaderna redovisas i jämförelsevyer.',
            '**Delning** — underlaget görs tillgängligt för de parter som behöver arbeta mot samma nuläge.',
          ],
        },
        {
          type: 'p',
          text: 'Grunden är oftast fotogrammetri. Vid behov kompletteras den med laserskanning där vegetation skymmer marken — se [LiDAR eller fotogrammetri](/kunskapsbank/lidar-eller-fotogrammetri) — och med termisk data när värmerelaterade förhållanden ska följas över tid.',
        },
      ],
    },
    {
      heading: 'Hur ofta behöver den uppdateras?',
      blocks: [
        {
          type: 'p',
          text: 'Uppdateringsfrekvensen bestäms av hur snabbt objektet förändras och av vad tvillingen ska svara på. En byggarbetsplats i aktiv produktion förändras varje vecka och behöver tätare mätningar för att uppföljningen ska vara meningsfull. En färdig anläggning som främst dokumenteras för förvaltning kan mätas glesare, förslagsvis knutet till underhållsplanens egen rytm.',
        },
        {
          type: 'p',
          text: 'En rimlig utgångspunkt är att mäta så ofta att varje uppdatering faktiskt visar något nytt. Mäts det för sällan förlorar tvillingen sitt värde som nulägesbild; mäts det tätare än objektet förändras betalar man för data som inte tillför något. Intervallet får gärna variera över projektets faser — tätare under intensiva skeden, glesare däremellan.',
        },
      ],
    },
    {
      heading: 'Vad används en digital tvilling till?',
      blocks: [
        {
          type: 'list',
          items: [
            '**Produktionsuppföljning** — framdrift i byggskedet dokumenteras löpande och kan stämmas av mot tidplan. Se även [byggdokumentation med drönare](/kunskapsbank/byggdokumentation-med-dronare).',
            '**Förvaltning** — anläggningens skick följs mellan besiktningar och förändringar blir synliga innan de växer.',
            '**Dokumentation av anläggningar** — ett måttriktigt underlag som visar var saker faktiskt ligger, inte var de var projekterade att ligga.',
            '**Kommunikation mellan parter** — beställare, projektörer och entreprenörer utgår från samma bild, vilket minskar tolkningsutrymmet.',
            '**Underlag för projektering** — nuläget kan exporteras som [BIM-underlag](/tjanster/bim-underlag) inför om- och tillbyggnad.',
          ],
        },
      ],
    },
    {
      heading: 'Vad krävs för att den ska hållas aktuell',
      blocks: [
        {
          type: 'list',
          items: [
            '**Konsekvent metodik** — samma flygupplägg och samma koordinatsystem vid varje tillfälle, annars blir datumen inte jämförbara.',
            '**Bestämd intervall** — en överenskommen rytm i stället för mätningar när någon råkar tänka på det.',
            '**Bevarad historik** — tidigare mättillfällen sparas i stället för att skrivas över, så att förändring kan avläsas bakåt.',
            '**Tydlig ägare** — någon hos beställaren som ansvarar för att uppdateringarna beställs och att underlaget används.',
            '**Åtkomst för rätt parter** — materialet måste nå dem som ska fatta beslut på det, annars stannar värdet i filerna.',
          ],
        },
        {
          type: 'p',
          text: 'Vi arbetar med detta inom tjänsten [digital tvilling](/tjanster/digital-tvilling), där mätintervall, datakällor och leveransinnehåll bestäms tillsammans med er utifrån objektets förändringstakt.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Är en digital tvilling samma sak som en BIM-modell?',
      answer:
        'Nej. En BIM-modell är objektbaserad och beskriver byggdelar med egenskaper, ofta som en projekterad modell av något som ska byggas. En digital tvilling utgår från inmätt verklighet och beskriver hur objektet faktiskt ser ut vid varje mättillfälle. De kompletterar varandra: tvillingen kan användas för att stämma av verkligheten mot BIM-modellen.',
    },
    {
      question: 'Behöver man dyr programvara för att titta på den?',
      answer:
        'Nej, inte för att se den. Materialet kan levereras i en delbar visning som öppnas i vanlig webbläsare, så att alla berörda kan navigera i modellen. För att arbeta vidare med mätdata i projektering krävs däremot CAD- eller BIM-programvara.',
    },
    {
      question: 'Vad händer om ett mättillfälle hoppas över?',
      answer:
        'Tidsserien får ett glapp. Modellen fungerar fortfarande, men förändringen mellan de två närmaste datumen blir grövre eftersom mer hunnit hända mellan dem. Det är sällan kritiskt, men det gör uppföljningen mindre precis under just den perioden.',
    },
    {
      question: 'Passar en digital tvilling för mindre fastigheter?',
      answer:
        'Det beror mer på förändringstakt än på storlek. Ett litet objekt som byggs om eller följs över tid har nytta av återkommande inmätning, medan en stor men statisk anläggning ofta klarar sig med en väl gjord engångsdokumentation.',
    },
  ],
  relatedServices: [
    { href: '/tjanster/digital-tvilling', label: 'Digital tvilling' },
    { href: '/tjanster/bim-underlag', label: 'BIM-underlag' },
    { href: '/tjanster/fotogrammetri-3d-modell', label: 'Fotogrammetri & 3D-modell' },
  ],
  relatedArticles: [
    '3d-modeller-av-byggnader-anvandningsomraden',
    'byggdokumentation-med-dronare',
    'fran-punktmoln-till-bim-underlag',
  ],
}
