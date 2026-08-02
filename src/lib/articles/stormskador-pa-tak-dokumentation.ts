import type { Article } from './types'

export const stormskadorPaTak: Article = {
  slug: 'stormskador-pa-tak-dokumentation',
  title: 'Stormskador på tak — så dokumenterar du snabbt och säkert',
  metaTitle: 'Stormskador på tak — dokumentation med drönare',
  description:
    'Efter en storm behöver takskador dokumenteras snabbt — för försäkringen och för att stoppa följdskador. Så används drönare för säker skadebedömning utan att någon behöver gå upp på taket.',
  category: 'Tak & fastighet',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'Efter en storm är två saker viktiga: att snabbt få veta om taket är skadat, och att dokumentera skadorna korrekt innan de åtgärdas eller förvärras. Drönarinspektion löser båda — hela taket fotograferas i hög upplösning samma dag som vädret tillåter, utan att någon behöver beträda ett potentiellt försvagat tak. Den daterade bilddokumentationen blir samtidigt underlag i försäkringsärendet.',
  sections: [
    {
      heading: 'Varför tiden är kritisk efter en storm',
      blocks: [
        {
          type: 'list',
          items: [
            '**Följdskador växer snabbt** — en lossnad takpanna eller ett skadat tätskikt släpper in vatten vid nästa regn. Det som börjar som en mindre reparation kan bli en fuktskada i konstruktionen.',
            '**Försäkringen förutsätter aktsamhet** — fastighetsägaren förväntas begränsa skadans omfattning. Snabb dokumentation visar att skadan hanterats ansvarsfullt.',
            '**Orsakssamband ska kunna styrkas** — ju närmare stormen dokumentationen görs, desto tydligare kan skadan knytas till händelsen i stället för till eftersatt underhåll.',
            '**Hantverkare är överbokade** — efter större stormar är takentreprenörer hårt belastade. En tydlig skaderapport gör att du kan begära offert direkt och hamna rätt i kön.',
          ],
        },
      ],
    },
    {
      heading: 'Vanliga stormskador som drönaren hittar',
      blocks: [
        {
          type: 'list',
          items: [
            'Lossade, förskjutna eller saknade takpannor och plåtar',
            'Uppfläkta eller veckade tätskikt på låglutande tak',
            'Skadade eller nedfallna skorstensdelar, huvar och beslag',
            'Nedfallna grenar och punktskador från flygande föremål',
            'Skadade hängrännor, stuprör och snörasskydd',
            'Skador på solcellspaneler och deras infästningar',
            'Antenner, ventilationshuvar och annan takutrustning i fel läge',
          ],
        },
        {
          type: 'p',
          text: 'Vid behov kompletteras den visuella genomgången med [termisk avbildning](/kunskapsbank/hitta-fuktskador-med-termisk-inspektion) för att kontrollera om vatten redan trängt in under ytskiktet.',
        },
      ],
    },
    {
      heading: 'Därför är drönare rätt verktyg efter storm',
      blocks: [
        {
          type: 'list',
          items: [
            '**Säkerhet** — ett stormskadat tak kan ha dolda försvagningar; ingen behöver beträda det för att bedöma läget.',
            '**Snabbhet** — flygningen genomförs så snart vinden lagt sig, utan väntan på ställning eller skylift.',
            '**Fullständighet** — hela takytan dokumenteras systematiskt, inte bara det som syns från marken eller stegen.',
            '**Bevisvärde** — daterade, högupplösta och georefererade bilder utgör ett robust underlag i försäkringsärendet.',
            '**Jämförbarhet** — finns en tidigare inspektion kan före- och efterläget jämföras direkt, vilket gör orsakssambandet tydligt.',
          ],
        },
      ],
    },
    {
      heading: 'Så går det till — från samtal till rapport',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            '**Kontakt** — beskriv fastigheten och vad som hänt. Vid akuta lägen prioriteras snabb flygning så snart vädret tillåter.',
            '**Flygning** — taket dokumenteras systematiskt; uppenbara riskområden (lösa delar som kan falla) rapporteras omgående.',
            '**Rapport** — skadorna markeras, klassificeras och sammanställs med rekommendation om vad som kräver akut åtgärd respektive kan planeras.',
            '**Användning** — rapporten skickas till försäkringsbolaget och används som offertunderlag mot takentreprenörer.',
          ],
        },
        {
          type: 'p',
          text: 'Ett proaktivt alternativ: med en aktuell [takinspektion](/tjanster/takinspektion) i arkivet finns redan ett dokumenterat före-läge den dag stormen kommer — läs mer om regelbunden kontroll i [Så går en takinspektion till](/kunskapsbank/sa-gar-en-takinspektion-till).',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Hur snabbt efter stormen kan ni flyga?',
      answer:
        'Så snart vinden ligger under säkra nivåer och sikten är tillräcklig — ofta samma eller nästa dag. Vi bedömer förhållandena löpande och prioriterar akuta skadeärenden.',
    },
    {
      question: 'Accepterar försäkringsbolag drönardokumentation?',
      answer:
        'Daterad och tydlig bilddokumentation är generellt ett starkt underlag vid skadeanmälan. Vilka krav som ställs i det enskilda ärendet avgörs av ditt försäkringsbolag — stäm av med dem, och använd rapporten som stöd.',
    },
    {
      question: 'Vad gör jag akut innan inspektionen?',
      answer:
        'Säkra området under taket om delar riskerar att falla, dokumentera synliga skador från marken och anmäl skadan till försäkringsbolaget. Gå inte upp på taket — det är just den risken drönarinspektionen tar bort.',
    },
  ],
  relatedServices: [
    { href: '/tjanster/takinspektion', label: 'Takinspektion' },
    { href: '/tjanster/fuktinspektion', label: 'Fuktinspektion' },
    { href: '/branscher/forsakring', label: 'Försäkringsbranschen' },
  ],
  relatedArticles: [
    'sa-gar-en-takinspektion-till',
    'hitta-fuktskador-med-termisk-inspektion',
    'dronarinspektion-for-bostadsrattsforeningar',
  ],
}
