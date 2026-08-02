import type { Article } from './types'

export const dronarinspektionExMiljoer: Article = {
  slug: 'dronarinspektion-i-ex-klassade-miljoer',
  title: 'Drönarinspektion i Ex-klassade miljöer — så hanteras riskerna',
  metaTitle: 'Drönarinspektion i Ex-klassade miljöer',
  description:
    'Ex-klassade zoner ställer särskilda krav på inspektionsarbete. Så planeras drönarinspektion vid anläggningar med explosionsfarlig atmosfär: riskbedömning, arbetstillstånd och zonhantering.',
  category: 'Regler & säkerhet',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'I anläggningar där explosionsfarlig atmosfär kan förekomma — raffinaderier, kemisk industri, biogasanläggningar, hamnterminaler — klassas områden i Ex-zoner, och all utrustning och allt arbete i zonerna omfattas av särskilda krav. Drönare är normalt inte Ex-klassade, så inspektioner vid sådana anläggningar handlar om rätt planering: flygning utanför zonerna eller när zonerna är friklassade, riskbedömning tillsammans med anläggningen och arbete enligt anläggningens tillståndssystem. Rätt genomförd tar drönarinspektionen bort behovet av att skicka personal på höjd i känsliga miljöer.',
  sections: [
    {
      heading: 'Vad betyder Ex-klassning?',
      blocks: [
        {
          type: 'p',
          text: 'Områden där brännbara gaser, ångor eller damm kan bilda explosiv atmosfär delas in i zoner utifrån hur ofta och hur länge sådan atmosfär kan förekomma. Zonindelningen styr vilka krav som ställs på utrustning och arbete i området — grunden finns i EU:s ATEX-regelverk och svenska föreskrifter om explosionsfarlig miljö. För inspektionsarbete innebär det i praktiken att tändkällor inte får introduceras i en aktiv zon.',
        },
        {
          type: 'table',
          caption: 'Zonindelning för gas och damm',
          headers: ['Zon (gas)', 'Zon (damm)', 'Innebörd'],
          rows: [
            ['Zon 0', 'Zon 20', 'Explosiv atmosfär förekommer ständigt eller långvarigt'],
            ['Zon 1', 'Zon 21', 'Explosiv atmosfär förekommer ibland vid normal drift'],
            ['Zon 2', 'Zon 22', 'Explosiv atmosfär förekommer sällan och kortvarigt'],
          ],
        },
      ],
    },
    {
      heading: 'Hur kan drönare användas vid Ex-anläggningar?',
      blocks: [
        {
          type: 'p',
          text: 'Eftersom en standarddrönare med elmotorer och batteri betraktas som potentiell tändkälla planeras uppdragen enligt någon av följande principer:',
        },
        {
          type: 'list',
          items: [
            '**Flygning utanför zongränserna** — många inspektionsobjekt (skorstenar, fackelsystem, cisterntak, rörbryggor) kan dokumenteras med kamerans zoom från positioner utanför de klassade zonerna.',
            '**Flygning vid friklassade förhållanden** — under driftstopp eller efter gasfriförklaring kan zoner tillfälligt vara friklassade, vilket öppnar för närmare inspektion.',
            '**Samordnad riskbedömning** — varje uppdrag planeras tillsammans med anläggningens drift- och säkerhetsorganisation, med zonkartor som underlag.',
            '**Arbete enligt tillståndssystem** — flygningen hanteras inom anläggningens system för arbetstillstånd, på samma sätt som annat arbete på området.',
          ],
        },
        {
          type: 'p',
          text: 'SurveyDrone har erfarenhet av uppdrag i och vid Ex-klassade zoner och planerar alltid dessa uppdrag i nära samarbete med anläggningens säkerhetsorganisation. Läs mer om [industriinspektion](/tjanster/industriinspektion).',
        },
      ],
    },
    {
      heading: 'Varför drönare i stället för personal på höjd?',
      blocks: [
        {
          type: 'list',
          items: [
            '**Färre personer i riskmiljö** — inspektionen flyttar människor från ställning, korgar och klättring till en säker markposition.',
            '**Kortare driftstopp** — objekt som annars kräver byggnation av ställning kan dokumenteras på en bråkdel av tiden, vilket kortar revisionsstopp.',
            '**Termisk analys på köpet** — [värmekameran](/kunskapsbank/sa-fungerar-termografi-med-dronare) kan avslöja nivåer, igensättningar och avvikande temperaturer i processutrustning.',
            '**Dokumenterat underlag** — högupplösta bilder ger underhållsorganisationen ett objektivt underlag för prioritering av åtgärder.',
          ],
        },
      ],
    },
    {
      heading: 'Vad behöver anläggningen bidra med?',
      blocks: [
        {
          type: 'list',
          items: [
            'Aktuella **zonklassningsritningar** för det aktuella området',
            'Kontaktperson i **drift- eller säkerhetsorganisationen** för samordning och tillstånd',
            'Information om **planerade driftlägen** — pågående drift, driftstopp eller friklassning',
            'Anläggningens krav på **säkerhetsutbildning och inpassering**',
          ],
        },
        {
          type: 'p',
          text: 'Med det underlaget tar operatören fram en uppdragsspecifik riskbedömning och flygplan som godkänns av anläggningen innan genomförande.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Finns det Ex-klassade drönare?',
      answer:
        'Marknaden för Ex-anpassade drönare är mycket begränsad och standarddrönare är inte Ex-klassade. Därför bygger säkra uppdrag på zonhantering: flygning utanför zoner, vid friklassade förhållanden eller enligt anläggningens riskbedömning och tillståndssystem.',
    },
    {
      question: 'Kan ni inspektera under pågående drift?',
      answer:
        'Ofta, ja — många objekt kan dokumenteras från positioner utanför de klassade zonerna med hjälp av kamerans räckvidd och zoom. Vad som är möjligt avgörs i riskbedömningen tillsammans med anläggningen.',
    },
    {
      question: 'Vilka typer av anläggningar gäller detta?',
      answer:
        'Bland annat raffinaderier, kemisk och petrokemisk industri, biogas- och avloppsreningsverk, bränsledepåer, hamnterminaler och anläggningar som hanterar brännbart damm, till exempel inom trä- och spannmålsindustri.',
    },
  ],
  relatedServices: [
    { href: '/tjanster/industriinspektion', label: 'Industriinspektion' },
    { href: '/tjanster/termisk-inspektion', label: 'Termisk inspektion' },
    { href: '/branscher/industri', label: 'Industribranschen' },
  ],
  relatedArticles: [
    'regler-for-dronarflygning-i-sverige',
    'sa-fungerar-termografi-med-dronare',
    'vad-ar-dronarinspektion',
  ],
}
