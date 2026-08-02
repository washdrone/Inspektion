import type { Article } from './types'

export const dronarinspektionPaVintern: Article = {
  slug: 'dronarinspektion-pa-vintern',
  title: 'Drönarinspektion på vintern — vad fungerar och vad kräver planering?',
  metaTitle: 'Drönarinspektion på vintern — så fungerar det',
  description:
    'Går det att inspektera med drönare på vintern? Ja — termografi av byggnadsskal fungerar ofta bäst under uppvärmningssäsongen. Så påverkar kyla, snö och ljus olika typer av inspektioner.',
  category: 'Regler & säkerhet',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'Drönarinspektion fungerar året runt i Sverige — men olika inspektionstyper har olika bästa säsong. Termografi av tak och fasader fungerar ofta som bäst under den kalla årstiden, när temperaturskillnaden mellan inne och ute gör värmeläckage och fuktproblem tydliga. Solcellstermografi kräver däremot stark sol, och snötäckta ytor kan dölja visuella skador. Med rätt planering är vintern därför inte ett hinder utan i flera fall den bästa tiden för inspektion.',
  sections: [
    {
      heading: 'Vad vintern gör bättre',
      blocks: [
        {
          type: 'list',
          items: [
            '**Termografi av klimatskal** — värmeläckage, köldbryggor och isoleringsbrister framträder tydligast när det är kallt ute och uppvärmt inne. Läs mer i [Så fungerar termografi med drönare](/kunskapsbank/sa-fungerar-termografi-med-dronare).',
            '**Snösmältningsmönster** — ojämn snösmältning på ett tak kan i sig avslöja var värme läcker upp genom konstruktionen.',
            '**Avlövade träd** — fasader och tak som skyms av grönska under sommaren blir åtkomliga för kameran.',
            '**Istappar och isbildning** — återkommande isproblem kan dokumenteras och spåras till sina orsaker, ofta värmeläckage eller brister i takavvattningen.',
          ],
        },
      ],
    },
    {
      heading: 'Vad vintern gör svårare',
      blocks: [
        {
          type: 'list',
          items: [
            '**Snötäckta ytor** — takpannor, tätskikt och detaljer under snö kan inte bedömas visuellt. Visuell takbesiktning planeras därför till barmark.',
            '**Solcellstermografi** — kräver god solinstrålning för att fel ska generera mätbar värme; vintersolen räcker sällan. Bästa säsong är vår till tidig höst. Se [Hotspots i solceller](/kunskapsbank/hotspots-i-solceller).',
            '**Kortare batteritid** — kyla sänker batteriernas kapacitet, vilket hanteras med förvärmda batterier och tätare batteribyten. Det påverkar planeringen men sällan resultatet.',
            '**Färre ljusa timmar** — flygfönstret per dag är kortare, vilket kräver god tidsplanering för större objekt.',
            '**Väderfönster** — snöfall, dimma och hård vind stoppar flygning; vintern kräver större flexibilitet i bokningen.',
          ],
        },
      ],
    },
    {
      heading: 'Säsongsguide för olika inspektionstyper',
      blocks: [
        {
          type: 'table',
          caption: 'Bästa säsong för olika drönarinspektioner',
          headers: ['Inspektionstyp', 'Bäst säsong', 'Kommentar'],
          rows: [
            [
              'Termografi av tak och fasad',
              'Sen höst till tidig vår',
              'Kräver tydlig temperaturskillnad inne/ute — uppvärmningssäsongen är idealisk.',
            ],
            [
              'Visuell takinspektion',
              'Barmarkssäsong',
              'Snöfria ytor krävs; vår efter snösmältning är populär för att fånga vinterns skador.',
            ],
            [
              'Solcellstermografi',
              'Vår till tidig höst',
              'Kräver stark solinstrålning (branschpraxis: minst 600 W/m²).',
            ],
            [
              'Fasadinspektion (visuell)',
              'Året runt',
              'Vintern kan vara en fördel när träd är avlövade.',
            ],
            [
              'Mätning och kartläggning',
              'Barmarkssäsong',
              'Snötäcke förvanskar ytmodeller och volymer.',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Praktiska råd till dig som beställare',
      blocks: [
        {
          type: 'list',
          items: [
            'Boka **termografi i god tid före uppvärmningssäsongen** — efterfrågan är störst när förhållandena är som bäst.',
            'Planera **visuell takbesiktning till våren** om syftet är att fånga skador efter vintern, eller till hösten för att gå in i vintern med känt skick.',
            'Räkna med **större flexibilitet i tidplanen** vintertid — en seriös operatör flyttar hellre flygningen än levererar data tagen under dåliga förhållanden.',
            'Kombinera gärna: **termografi på vintern och visuell besiktning på barmark** ger tillsammans en komplett bild av byggnadens skick över året.',
          ],
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Kan drönare flyga i minusgrader?',
      answer:
        'Ja, professionella drönare har driftstemperaturintervall som täcker normala svenska vinterförhållanden. Kylan hanteras operativt med förvärmda batterier och kortare flygpass. Vid extrem kyla flyttas uppdraget.',
    },
    {
      question: 'Är termografi tillförlitlig i kallt väder?',
      answer:
        'Ja — för byggnadsskal blir den tvärtom mer tillförlitlig, eftersom temperaturskillnaden mellan inne och ute är motorn i mätningen. Däremot undviks mätning i starkt solsken, regn och hård vind oavsett årstid.',
    },
    {
      question: 'Kan ni inspektera taket när det ligger snö på det?',
      answer:
        'Termiska mätningar av värmeläckage går ofta att göra även med visst snötäcke, men visuell bedömning av takmaterialet kräver snöfria ytor. Vi rekommenderar tidpunkt utifrån vad inspektionen ska svara på.',
    },
  ],
  relatedServices: [
    { href: '/tjanster/termisk-inspektion', label: 'Termisk inspektion' },
    { href: '/tjanster/takinspektion', label: 'Takinspektion' },
    { href: '/tjanster/fasadinspektion', label: 'Fasadinspektion' },
  ],
  relatedArticles: [
    'sa-fungerar-termografi-med-dronare',
    'sa-gar-en-takinspektion-till',
    'hitta-fuktskador-med-termisk-inspektion',
  ],
}
