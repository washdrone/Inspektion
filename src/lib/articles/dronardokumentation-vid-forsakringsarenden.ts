import type { Article } from './types'

export const dronardokumentationForsakring: Article = {
  slug: 'dronardokumentation-vid-forsakringsarenden',
  title: 'Drönardokumentation vid försäkringsärenden — så stärker du ditt ärende',
  metaTitle: 'Drönardokumentation vid försäkringsärenden',
  description:
    'Vid skador på tak och fasad avgör dokumentationen hur smidigt försäkringsärendet löper. Så används drönarbilder före och efter skada, och det här bör du tänka på som fastighetsägare.',
  category: 'Tak & fastighet',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'I ett försäkringsärende är dokumentationen ofta avgörande: vad är skadat, hur omfattande är skadan och vad orsakade den? Drönarinspektion ger daterade, högupplösta och georefererade bilder av tak och fasader — både som bevis efter en skada och som dokumenterat före-läge om skadan ännu inte inträffat. Det snabbar upp skaderegleringen och minskar utrymmet för diskussion om skadans orsak och omfattning.',
  sections: [
    {
      heading: 'Dokumentationens roll i skadeärendet',
      blocks: [
        {
          type: 'p',
          text: 'Vid en skadeanmälan behöver försäkringsbolaget förstå tre saker: skadans **omfattning**, dess **orsak** och fastighetens **skick före händelsen**. Brister i något av leden leder till frågor, kompletteringar och i värsta fall tvist om vad som ska ersättas. En systematisk drönardokumentation adresserar alla tre:',
        },
        {
          type: 'list',
          items: [
            '**Omfattning** — hela taket eller fasaden dokumenteras, inte bara det som råkar synas från marken. Inga skador missas eller upptäcks sent.',
            '**Orsak** — bilder tagna nära händelsen gör det lättare att skilja en plötslig händelse (storm, nedfallande träd) från långsam försämring.',
            '**Före-läge** — en tidigare inspektionsrapport visar fastighetens skick före skadan, vilket är det starkaste underlaget för orsakssambandet.',
          ],
        },
      ],
    },
    {
      heading: 'Typiska situationer där drönardokumentation används',
      blocks: [
        {
          type: 'list',
          items: [
            '**Stormskador** — snabb och säker dokumentation utan att beträda skadat tak. Se guiden [Stormskador på tak](/kunskapsbank/stormskador-pa-tak-dokumentation).',
            '**Vattenskador** — [termisk inspektion](/kunskapsbank/hitta-fuktskador-med-termisk-inspektion) avgränsar fuktutbredningen som underlag för saneringsomfattning.',
            '**Snölast- och rasskador** — dokumentation av deformationer och skador på tak och takutrustning.',
            '**Skador på solcellsanläggningar** — hagel- och stormskador samt elfel dokumenteras visuellt och termiskt.',
            '**Ansvarsskador** — t.ex. när nedfallande delar från en byggnad skadat egendom, där byggnadens skick behöver klarläggas.',
          ],
        },
      ],
    },
    {
      heading: 'Proaktiv dokumentation — före-läget som försäkring',
      blocks: [
        {
          type: 'p',
          text: 'Det bästa skadeärendet är det som aldrig blir en diskussion. En regelbunden, daterad statusinspektion av tak och fasader ger fastighetsägaren ett arkiv som visar att byggnaden underhållits och vilket skick den hade vid varje tidpunkt. Den dagen något händer finns före-läget redan dokumenterat. Regelbunden inspektion — till exempel genom ett [förvaltningsavtal](/forvaltningsavtal) — fyller därmed dubbel funktion: underhållsplanering till vardags och bevissäkring när något inträffar.',
        },
      ],
    },
    {
      heading: 'Råd till dig som fastighetsägare',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            '**Anmäl skadan direkt** till försäkringsbolaget och följ deras anvisningar för det enskilda ärendet.',
            '**Dokumentera innan åtgärd** — akuta skyddsåtgärder (t.ex. presenning) är ofta nödvändiga och förväntade, men fotografera läget innan om det går att göra säkert från marken.',
            '**Beställ heltäckande dokumentation snabbt** — ju närmare händelsen, desto starkare underlag.',
            '**Spara allt** — rapporter, bilder och tidigare inspektioner. Daterat material är svårt att ifrågasätta.',
            '**Stäm av kraven med ditt bolag** — vilka underlag som krävs varierar mellan bolag och ärendetyper; drönarrapporten är ett stöd, inte en garanti för utfallet.',
          ],
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Ersätter drönarrapporten försäkringsbolagets egen besiktning?',
      answer:
        'Nej, försäkringsbolaget avgör själva hur de utreder ärendet och kan skicka egen besiktningsperson. Rapporten är fastighetsägarens underlag — den snabbar upp processen och säkrar bevis, särskilt om åtgärder måste påbörjas innan bolagets besiktning hinner ske.',
    },
    {
      question: 'Hur snabbt bör dokumentationen göras efter en skada?',
      answer:
        'Så snart det är säkert att flyga — helst inom några dagar. Ju kortare tid mellan händelse och dokumentation, desto tydligare blir orsakssambandet och desto mindre hinner följdskador utvecklas.',
    },
    {
      question: 'Vad kostar dokumentation vid ett skadeärende?',
      answer:
        'Det beror på objektets storlek och hur snabbt uppdraget behöver genomföras. Kontakta oss med en beskrivning av läget så återkommer vi med pris och tidplan.',
    },
  ],
  relatedServices: [
    { href: '/tjanster/takinspektion', label: 'Takinspektion' },
    { href: '/branscher/forsakring', label: 'Försäkringsbranschen' },
    { href: '/forvaltningsavtal', label: 'Förvaltningsavtal' },
  ],
  relatedArticles: [
    'stormskador-pa-tak-dokumentation',
    'hitta-fuktskador-med-termisk-inspektion',
    'underhallsplan-med-dronarinspektion',
  ],
}
