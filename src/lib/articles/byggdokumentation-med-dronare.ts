import type { Article } from './types'

export const byggdokumentationMedDronare: Article = {
  slug: 'byggdokumentation-med-dronare',
  title: 'Byggdokumentation med drönare — följ projektet från luften',
  metaTitle: 'Byggdokumentation med drönare — guide',
  description:
    'Drönare dokumenterar byggprojekt med återkommande flygningar: ortofoton, 3D-modeller och lägesbilder för planering, mängdavstämning, kommunikation och tvistunderlag. Så fungerar arbetssättet.',
  category: 'Mätning & 3D',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'Byggdokumentation med drönare innebär att en byggarbetsplats fotograferas och mäts in från luften med regelbundna intervall — ofta veckovis eller månadsvis. Varje flygning ger aktuella ortofoton, lägesbilder och vid behov 3D-modeller som visar exakt hur långt projektet kommit. Resultatet används för planering, samordning, mängdavstämning, beställarkommunikation och som daterat bevismaterial om tvister uppstår.',
  sections: [
    {
      heading: 'Vad dokumentationen används till',
      blocks: [
        {
          type: 'list',
          items: [
            '**Produktionsuppföljning** — jämför faktiskt läge mot tidplan med daterade flygbilder i stället för punktvisa platsbesök.',
            '**Mängdavstämning** — schakt- och fyllnadsvolymer mäts ur ytmodellerna som underlag för reglering mot kontrakt. Se [volymberäkning](/kunskapsbank/sa-fungerar-volymberakning-med-dronare).',
            '**Samordning och logistik** — aktuella ortofoton visar upplag, kranlägen, transportvägar och etableringsytor för APD-planering.',
            '**Beställar- och intressentkommunikation** — flygbilder gör byggmöten konkreta och håller beställare, grannar och allmänhet informerade.',
            '**Tviste- och garantiärenden** — daterad dokumentation av varje skede visar vad som var utfört när, och av vad som byggts in och inte längre syns.',
            '**Relationsunderlag** — dokumentation av läget före, under och efter entreprenaden.',
          ],
        },
      ],
    },
    {
      heading: 'Så läggs ett dokumentationsprogram upp',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            '**Nollmätning** — området dokumenteras innan arbetena börjar: befintliga förhållanden, vegetation, angränsande byggnader och vägar.',
            '**Återkommande flygningar** — samma flygrutt upprepas med valt intervall, vilket ger direkt jämförbara bilder och modeller över tid.',
            '**Händelsestyrda flygningar** — extra dokumentation vid milstolpar: färdig schakt, gjuten platta, tät stomme, färdigt tak.',
            '**Slutdokumentation** — det färdiga projektet dokumenteras som del av relationshandlingarna.',
          ],
        },
        {
          type: 'p',
          text: 'Intervallet väljs efter projektets tempo — markarbeten med snabba volymförändringar motiverar tätare flygningar än stomresning. Läs mer om tekniken bakom leveranserna i [Vad är fotogrammetri?](/kunskapsbank/vad-ar-fotogrammetri) och [Vad är ett ortofoto?](/kunskapsbank/vad-ar-ett-ortofoto)',
        },
      ],
    },
    {
      heading: 'Vad ingår i en leverans?',
      blocks: [
        {
          type: 'table',
          caption: 'Typiska leveranser vid byggdokumentation',
          headers: ['Leverans', 'Användning'],
          rows: [
            ['Ortofoto (GeoTIFF)', 'Mätbar lägesbild för planering, APD och avstämning'],
            ['Snedbilder och översiktsbilder', 'Kommunikation, byggmöten, rapporter'],
            ['Ytmodell (DSM)', 'Volymberäkning och höjdkontroll'],
            ['3D-modell', 'Visualisering och dokumentation av komplexa skeden'],
            ['Volymrapport', 'Mängdreglering av schakt och fyll'],
          ],
        },
        {
          type: 'p',
          text: 'Leveranserna anpassas till projektets behov — allt behövs inte i varje flygning. Se tjänstesidorna [drönarinmätning](/tjanster/dronarinmatning) och [3D-kartläggning](/tjanster/3d-kartlaggning).',
        },
      ],
    },
    {
      heading: 'Regler och säkerhet på byggarbetsplatsen',
      blocks: [
        {
          type: 'p',
          text: 'Flygning över en aktiv byggarbetsplats kräver planering: luftrummet kontrolleras, flygningen samordnas med platsledningen och genomförs enligt [gällande drönarregler](/kunskapsbank/regler-for-dronarflygning-i-sverige). Personal på arbetsplatsen informeras, och flygrutten läggs så att lyft och kranarbete inte störs. Som beställare behöver du inte hantera detta själv — det ingår i operatörens ansvar.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Hur ofta bör en byggarbetsplats dokumenteras?',
      answer:
        'Vanliga upplägg är veckovis under intensiva markarbeten och månadsvis under stomme och stängning, kompletterat med flygningar vid viktiga milstolpar. Intervallet anpassas efter projektets tempo och dokumentationsbehov.',
    },
    {
      question: 'Stör flygningen arbetet på platsen?',
      answer:
        'Nej, normalt inte. Flygningen tar kort tid, samordnas med platsledningen och planeras så att den inte krockar med kranlyft eller andra moment. Produktionen kan pågå som vanligt.',
    },
    {
      question: 'Kan dokumentationen användas i en tvist?',
      answer:
        'Daterade ortofoton och bilder är ett starkt underlag för att visa vad som var utfört vid en viss tidpunkt. Många beställare ser just den spårbarheten som dokumentationsprogrammets största värde.',
    },
  ],
  relatedServices: [
    { href: '/tjanster/dronarinmatning', label: 'Drönarinmätning' },
    { href: '/tjanster/volymberakning', label: 'Volymberäkning' },
    { href: '/branscher/bygg', label: 'Byggbranschen' },
  ],
  relatedArticles: [
    'vad-ar-ett-ortofoto',
    'sa-fungerar-volymberakning-med-dronare',
    'hur-noggrann-ar-dronarmatning',
  ],
}
