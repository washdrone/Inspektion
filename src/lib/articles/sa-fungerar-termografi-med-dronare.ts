import type { Article } from './types'

export const saFungerarTermografi: Article = {
  slug: 'sa-fungerar-termografi-med-dronare',
  title: 'Så fungerar termografi med drönare',
  metaTitle: 'Termografi med drönare — så fungerar tekniken',
  description:
    'Termografi med drönare använder en värmekamera som mäter infraröd strålning och visar temperaturskillnader på ytor. Guide till tekniken, radiometrisk data och vad metoden kan avslöja.',
  category: 'Termografi & fukt',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'Termografi med drönare innebär att en värmekamera monterad på drönaren mäter den infraröda strålning som alla ytor avger och omvandlar den till en bild där temperaturskillnader syns i färgskala. Eftersom många byggnads- och anläggningsproblem ger upphov till avvikande yttemperaturer — fukt, isoleringsbrister, elfel, defekta solceller — kan termografi avslöja problem som är helt osynliga för ögat.',
  sections: [
    {
      heading: 'Vad mäter en termisk kamera egentligen?',
      blocks: [
        {
          type: 'p',
          text: 'En termisk kamera ser inte temperatur direkt — den mäter infraröd strålning från ytan. Hur mycket strålning en yta avger beror både på dess temperatur och på materialets **emissivitet**, det vill säga förmågan att avge värmestrålning. För att mätningen ska bli korrekt måste kameran ställas in med rätt emissivitet för materialet, och faktorer som reflektioner, avstånd och luftfuktighet vägas in.',
        },
        {
          type: 'p',
          text: 'Professionella inspektioner görs med **radiometriska kameror** som lagrar ett exakt temperaturvärde för varje pixel. Det gör att bilderna kan analyseras kvantitativt i efterhand — temperaturer kan mätas, justeras och jämföras — i stället för att bara ge en färgglad ögonblicksbild.',
        },
      ],
    },
    {
      heading: 'Vad kan termografi upptäcka?',
      blocks: [
        {
          type: 'list',
          items: [
            '**Fuktskador** — fuktiga material ändrar temperatur långsammare och kyls av avdunstning, vilket ger synliga mönster. Läs mer i [Hitta fuktskador med termisk inspektion](/kunskapsbank/hitta-fuktskador-med-termisk-inspektion).',
            '**Isoleringsbrister och köldbryggor** — områden där värme läcker ut syns tydligt vid termografering av klimatskalet.',
            '**Defekta solceller** — hotspots, strängfel och diodfel ger karakteristiska värmemönster. Se [Hotspots i solceller](/kunskapsbank/hotspots-i-solceller).',
            '**Elektriska fel** — överhettade kopplingar och komponenter i t.ex. ställverk och installationer.',
            '**Processavvikelser i industrin** — nivåer i cisterner, igensatta rör och läckage kan framträda termiskt.',
          ],
        },
      ],
    },
    {
      heading: 'Varför drönare och termografi är en stark kombination',
      blocks: [
        {
          type: 'p',
          text: 'Traditionell termografering från marken begränsas av betraktningsvinkeln — tak, höga fasader och stora solcellsparker går inte att termografera effektivt underifrån. Drönaren placerar kameran rakt mot ytan på rätt avstånd, täcker stora områden snabbt och kan upprepa exakt samma flygrutt vid senare tillfällen, vilket gör mätningarna jämförbara över tid.',
        },
      ],
    },
    {
      heading: 'När är förhållandena rätt för termografi?',
      blocks: [
        {
          type: 'p',
          text: 'Termografi ställer krav på väder och tidpunkt, och kraven skiljer sig åt beroende på vad som ska inspekteras:',
        },
        {
          type: 'table',
          caption: 'Förhållanden för olika typer av termografi',
          headers: ['Inspektionstyp', 'Gynnsamma förhållanden'],
          rows: [
            [
              'Byggnadsskal (tak, fasad)',
              'Tydlig temperaturskillnad mellan inne och ute, normalt under uppvärmningssäsongen. Molnigt eller mörkt — direkt solinstrålning stör mätningen.',
            ],
            [
              'Solcellsanläggningar',
              'God solinstrålning krävs för att fel ska generera värme — branschstandarden IEC 62446-3 anger minst 600 W/m². Klart väder och låg vind.',
            ],
            [
              'Fuktsökning på låglutande tak',
              'Ofta kvälls- eller nattflygning efter en solig dag, då fuktiga områden håller värmen längre än torra.',
            ],
          ],
        },
        {
          type: 'p',
          text: 'En seriös operatör planerar därför inspektionen efter både syfte och väderprognos — och bokar hellre om än levererar data som inte går att tolka.',
        },
      ],
    },
    {
      heading: 'Från värmebild till beslutsunderlag',
      blocks: [
        {
          type: 'p',
          text: 'Råa värmebilder är bara första steget. I analysen granskas termogrammen tillsammans med vanliga visuella bilder, avvikelser klassificeras efter allvarlighetsgrad och resultatet sammanställs i en rapport med tydliga rekommendationer. Termiska avvikelser bör alltid tolkas av någon som förstår både tekniken och konstruktionen — en varm fläck kan vara ett allvarligt fel eller en helt normal företeelse beroende på sammanhang.',
        },
        {
          type: 'p',
          text: 'Vill du veta mer om tjänsten? Se [termisk inspektion](/tjanster/termisk-inspektion).',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Kan en värmekamera se genom väggar?',
      answer:
        'Nej. En termisk kamera mäter bara ytans temperatur. Däremot kan förhållanden inne i konstruktionen — som fukt eller saknad isolering — påverka yttemperaturen så att de indirekt blir synliga.',
    },
    {
      question: 'Vad är skillnaden mellan radiometrisk och icke-radiometrisk värmekamera?',
      answer:
        'En radiometrisk kamera lagrar temperaturvärden för varje pixel, vilket gör att bilden kan analyseras och mätas i efterhand. En icke-radiometrisk kamera visar bara en färgbild utan mätdata, vilket begränsar den professionella användbarheten.',
    },
    {
      question: 'Fungerar termografi på vintern?',
      answer:
        'Ja — för byggnadsskal är vinterhalvåret ofta den bästa tiden, eftersom temperaturskillnaden mellan inne och ute då är störst. För solceller krävs i stället god solinstrålning, vilket gör vår till tidig höst till bästa perioden.',
    },
    {
      question: 'Vilken utbildning krävs för att tolka termiska bilder?',
      answer:
        'Att ta en värmebild är enkelt — att tolka den rätt kräver kunskap om värmeöverföring, material och byggnadsfysik. Felaktig tolkning är den vanligaste felkällan inom termografi, så anlita alltid en aktör som kan visa hur analysen genomförs och redovisas.',
    },
  ],
  relatedServices: [
    { href: '/tjanster/termisk-inspektion', label: 'Termisk inspektion' },
    { href: '/tjanster/solcellsinspektion', label: 'Solcellsinspektion' },
    { href: '/tjanster/fuktinspektion', label: 'Fuktinspektion' },
  ],
  relatedArticles: [
    'hitta-fuktskador-med-termisk-inspektion',
    'hotspots-i-solceller',
    'vad-ar-dronarinspektion',
  ],
}
