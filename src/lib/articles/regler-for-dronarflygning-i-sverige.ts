import type { Article } from './types'

export const reglerForDronarflygning: Article = {
  slug: 'regler-for-dronarflygning-i-sverige',
  title: 'Regler för drönarflygning i Sverige — det här gäller',
  metaTitle: 'Regler för drönarflygning i Sverige',
  description:
    'EU:s drönarregler gäller i Sverige: operatörsregistrering, drönarkort, maxhöjd 120 meter och krav på synkontakt. Guide till kategorier, kamerabilder och vad som gäller vid professionell flygning.',
  category: 'Regler & säkerhet',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'Drönarflygning i Sverige regleras av EU:s gemensamma drönarregelverk (förordning (EU) 2019/947) med Transportstyrelsen som ansvarig myndighet. I korthet: de flesta drönaroperatörer måste registrera sig, fjärrpiloten behöver drönarkort, flyghöjden är normalt begränsad till 120 meter och drönaren ska hållas inom synhåll. Vid professionell flygning i tätbebyggda områden eller nära människor tillkommer ytterligare krav.',
  sections: [
    {
      heading: 'Tre kategorier av drönarflygning',
      blocks: [
        {
          type: 'p',
          text: 'EU-regelverket delar in all drönardrift i tre kategorier baserat på risk:',
        },
        {
          type: 'table',
          caption: 'EU:s kategorier för drönardrift',
          headers: ['Kategori', 'Riskprofil', 'Typiska krav'],
          rows: [
            [
              '**Öppen**',
              'Låg risk',
              'Max 120 m höjd, drönare under 25 kg, inom synhåll (VLOS), inte över folksamlingar. Ingen förhandsansökan.',
            ],
            [
              '**Specifik**',
              'Förhöjd risk',
              'Riskbedömning och tillstånd/deklaration till Transportstyrelsen, t.ex. vid flygning utom synhåll eller nära människor.',
            ],
            [
              '**Certifierad**',
              'Hög risk',
              'Certifiering motsvarande bemannad luftfart. Berör t.ex. transport av personer eller farligt gods.',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Den öppna kategorin delas i sin tur in i underkategorierna A1, A2 och A3, som styr hur nära människor man får flyga beroende på drönarens vikt och C-klassmärkning.',
        },
      ],
    },
    {
      heading: 'Registrering och drönarkort',
      blocks: [
        {
          type: 'list',
          items: [
            '**Operatörsregistrering** — den som ansvarar för drönarverksamheten ska registrera sig hos Transportstyrelsen om drönaren väger 250 gram eller mer, eller om den har kamera eller annan sensor som kan fånga personuppgifter (och inte är en leksak). Operatörs-ID:t ska vara märkt på drönaren.',
            '**Drönarkort A1/A3** — krävs för de flesta fjärrpiloter i öppna kategorin och tas genom utbildning och prov hos Transportstyrelsen.',
            '**Drönarkort A2** — krävs för flygning närmare människor i underkategori A2 och omfattar ett utökat teoriprov.',
            '**Åldersgräns** — fjärrpiloter i den öppna kategorin ska i Sverige ha fyllt 15 år.',
          ],
        },
      ],
    },
    {
      heading: 'Var får man inte flyga?',
      blocks: [
        {
          type: 'list',
          items: [
            '**Kontrollzoner kring flygplatser** — kräver normalt klartering eller att särskilda villkor följs. Zoner och villkor framgår av kartor och NOTAM-information.',
            '**Restriktionsområden** — t.ex. kring skyddsobjekt, fängelser och vissa militära områden.',
            '**Nationalparker och naturreservat** — många har lokala drönarförbud i sina föreskrifter. Kontrollera alltid vad som gäller för det aktuella området.',
            '**Över folksamlingar** — förbjudet i den öppna kategorin.',
          ],
        },
        {
          type: 'p',
          text: 'Professionella operatörer kontrollerar alltid luftrum och lokala restriktioner i flygplaneringen innan varje uppdrag — det ingår i förberedelserna vid varje [inspektionsuppdrag](/hur-det-gar-till).',
        },
      ],
    },
    {
      heading: 'Kamerabilder, GDPR och spridningstillstånd',
      blocks: [
        {
          type: 'p',
          text: 'Drönare med kamera omfattas av dataskyddsförordningen (GDPR) när bilder kan innehålla personuppgifter. Vid professionell fotografering hanteras detta genom att flygningar planeras så att personer inte fotograferas i onödan och genom rutiner för lagring och gallring av bildmaterial.',
        },
        {
          type: 'p',
          text: 'För spridning av flygbilder över svenskt territorium kan det dessutom krävas spridningstillstånd enligt lagen om skydd för geografisk information, som prövas av Lantmäteriet. En seriös drönaroperatör känner till reglerna och hanterar detta i leveransen.',
        },
      ],
    },
    {
      heading: 'Vad innebär reglerna för dig som beställare?',
      blocks: [
        {
          type: 'p',
          text: 'Som beställare av en drönarinspektion behöver du inte själv ha tillstånd eller drönarkort — ansvaret ligger hos operatören. Det du bör kontrollera är att operatören är registrerad, att piloterna har rätt behörighet och att företaget är försäkrat. SurveyDrone flyger med EASA-certifierade fjärrpiloter och är ansvarsförsäkrat.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Får man flyga drönare över privat tomt?',
      answer:
        'Luftrummet regleras inte av markägaren, men hänsyn, GDPR och hemfridsregler gäller. Vid professionella inspektioner sker flygning i samråd med fastighetsägaren, och grannar informeras vid behov.',
    },
    {
      question: 'Hur högt får en drönare flyga?',
      answer:
        'I den öppna kategorin är maxhöjden 120 meter över marken. Undantag kräver tillstånd i den specifika kategorin. Nära hinder som master eller byggnader finns särskilda regler som medger flygning över 120 meter under vissa förutsättningar.',
    },
    {
      question: 'Krävs tillstånd för att inspektera i stadsmiljö?',
      answer:
        'Det beror på drönarens vikt, C-klass och avstånd till människor. Mycket flygning i tätort kan ske i den öppna kategorin under rätt förutsättningar, medan vissa uppdrag kräver drift i den specifika kategorin med tillstånd eller deklaration hos Transportstyrelsen. Operatören gör den bedömningen i flygplaneringen.',
    },
    {
      question: 'Vem är ansvarig om något går fel?',
      answer:
        'Drönaroperatören ansvarar för att flygningen genomförs enligt regelverket och ska ha ansvarsförsäkring som täcker eventuella skador. Som beställare bör du alltid kontrollera att operatören är försäkrad.',
    },
  ],
  relatedServices: [
    { href: '/hur-det-gar-till', label: 'Hur det går till' },
    { href: '/tjanster/takinspektion', label: 'Takinspektion' },
    { href: '/tjanster/industriinspektion', label: 'Industriinspektion' },
  ],
  relatedArticles: [
    'vad-ar-dronarinspektion',
    'dronarinspektion-vs-traditionell-inspektion',
    'sa-gar-en-takinspektion-till',
  ],
}
