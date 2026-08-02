import type { Article } from './types'

export const hittaFuktskador: Article = {
  slug: 'hitta-fuktskador-med-termisk-inspektion',
  title: 'Hitta fuktskador med termisk inspektion — så går det till',
  metaTitle: 'Hitta fuktskador med termisk inspektion',
  description:
    'Termisk inspektion kan avslöja fukt i tak och fasader genom temperaturmönster — utan att öppna konstruktionen. Så fungerar metoden, när den är tillförlitlig och hur fynd verifieras.',
  category: 'Termografi & fukt',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'Fukt syns sällan förrän skadan redan är omfattande. Med termisk inspektion kan misstänkta fuktskador i tak, fasader och konstruktioner lokaliseras utan förstörande ingrepp — värmekameran avslöjar de temperaturmönster som fukt ger upphov till. Metoden pekar ut var problemet finns, så att provtagning och åtgärder kan riktas rätt i stället för att söka på måfå.',
  sections: [
    {
      heading: 'Varför syns fukt i en värmekamera?',
      blocks: [
        {
          type: 'p',
          text: 'Värmekameran ser inte vattnet i sig — den ser vattnets effekt på ytans temperatur. Tre fysikaliska mekanismer gör fukt synlig termiskt:',
        },
        {
          type: 'list',
          items: [
            '**Avdunstningskyla** — när fukt avdunstar från en yta kyls den ner, och det fuktiga området blir kallare än omgivningen.',
            '**Värmetröghet** — vatten lagrar mycket värme. Fuktiga material värms upp och svalnar långsammare än torra, vilket ger synliga skillnader när omgivningstemperaturen ändras.',
            '**Försämrad isolering** — blöt isolering leder värme betydligt bättre än torr, vilket skapar tydliga mönster vid termografering av klimatskalet.',
          ],
        },
      ],
    },
    {
      heading: 'Var är metoden mest användbar?',
      blocks: [
        {
          type: 'list',
          items: [
            '**Låglutande tak och terrasstak** — fukt i takisoleringen kan kartläggas över hela ytan, ofta vid kvälls- eller nattflygning då fuktiga områden håller kvar dagens värme längre.',
            '**Fasader** — fuktgenomslag, läckande fogar och skadade anslutningar kring fönster och balkonger.',
            '**Anslutningar och genomföringar** — kring skorstenar, takfönster, ventilationsgenomföringar och hängrännor där läckage ofta börjar.',
            '**Efter vattenskador** — för att avgränsa hur långt fukten spridit sig innan sanering.',
          ],
        },
        {
          type: 'p',
          text: 'Drönaren gör det möjligt att termografera hela tak- och fasadytor på kort tid — även på byggnader där det annars krävts ställning eller skylift. Läs mer om [fuktinspektion](/tjanster/fuktinspektion) och [takinspektion](/tjanster/takinspektion).',
        },
      ],
    },
    {
      heading: 'Viktigt: termiska fynd ska verifieras',
      blocks: [
        {
          type: 'p',
          text: 'En termisk avvikelse är en **indikation**, inte ett bevis. Skuggor, reflektioner, materialskillnader och köldbryggor kan ge mönster som liknar fukt. Ett professionellt arbetssätt innebär därför att termiska fynd verifieras — till exempel med fuktindikator eller fuktkvotsmätning på de utpekade ställena — innan åtgärder beslutas. Styrkan i metoden är att verifieringen kan riktas exakt dit kameran pekar, i stället för att stora ytor öppnas upp i onödan.',
        },
      ],
    },
    {
      heading: 'När fungerar metoden — och när fungerar den inte?',
      blocks: [
        {
          type: 'table',
          caption: 'Förutsättningar för termisk fuktsökning',
          headers: ['Förutsättning', 'Betydelse'],
          rows: [
            [
              'Temperaturdynamik',
              'Metoden kräver att ytan värmts upp och svalnar (eller tvärtom) — det är då skillnaden mellan fuktigt och torrt framträder.',
            ],
            [
              'Torrt väder vid mätning',
              'Regnvåta ytor ger missvisande bilder — hela ytan är då kall och våt.',
            ],
            [
              'Åtkomlig yta',
              'Ytan måste kunna ses av kameran. Fukt djupt inne i en konstruktion utan påverkan på yttemperaturen syns inte.',
            ],
            [
              'Kunnig tolkning',
              'Materialövergångar och reflektioner måste kunna skiljas från verkliga fuktmönster.',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Vad får du i rapporten?',
      blocks: [
        {
          type: 'p',
          text: 'Efter inspektionen levereras en rapport där termogrammen presenteras sida vid sida med vanliga bilder, misstänkta fuktområden markeras på en översiktsbild av taket eller fasaden, och varje avvikelse kommenteras med rekommenderad uppföljning. Det ger fastighetsägare och förvaltare ett konkret underlag för att beställa rätt åtgärd — varken mer eller mindre.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Kan termografi hitta all fukt i en byggnad?',
      answer:
        'Nej. Termografi upptäcker fukt som påverkar yttemperaturen. Fukt djupt inne i konstruktioner utan termisk påverkan på ytan kan inte ses. Metoden är därför ett kartläggningsverktyg som kompletteras med fuktmätning vid behov.',
    },
    {
      question: 'När på dygnet görs termisk fuktsökning på tak?',
      answer:
        'Ofta under kväll eller natt efter en varm och solig dag. Fuktiga områden i takisoleringen håller då kvar värmen längre än torra områden och framträder som varmare fält i värmebilden.',
    },
    {
      question: 'Förstör inspektionen något på taket eller fasaden?',
      answer:
        'Nej. Termisk inspektion med drönare är helt beröringsfri. Först när ett misstänkt område ska verifieras kan det bli aktuellt med fuktmätning som kräver kontakt med materialet.',
    },
    {
      question: 'Vad kostar en termisk fuktinspektion?',
      answer:
        'Det beror på ytans storlek, byggnadens komplexitet och rapportens omfattning. Se vår prisguide eller begär offert för en konkret bedömning.',
    },
  ],
  relatedServices: [
    { href: '/tjanster/fuktinspektion', label: 'Fuktinspektion' },
    { href: '/tjanster/termisk-inspektion', label: 'Termisk inspektion' },
    { href: '/tjanster/takinspektion', label: 'Takinspektion' },
  ],
  relatedArticles: [
    'sa-fungerar-termografi-med-dronare',
    'sa-gar-en-takinspektion-till',
    'vad-ar-dronarinspektion',
  ],
}
