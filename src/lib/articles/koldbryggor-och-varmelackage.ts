import type { Article } from './types'

export const koldbryggorOchVarmelackage: Article = {
  slug: 'koldbryggor-och-varmelackage',
  title: 'Köldbryggor och värmeläckage — så hittas energitjuvarna i klimatskalet',
  metaTitle: 'Köldbryggor och värmeläckage — guide',
  description:
    'Köldbryggor och värmeläckage ökar energikostnaden och kan ge kondens och mögel. Vad en köldbrygga är, var de vanligen finns och hur termografi med drönare kartlägger klimatskalet.',
  category: 'Termografi & fukt',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'En köldbrygga är en del av byggnadens klimatskal där värme leds ut betydligt lättare än genom omgivande konstruktion — till exempel där en betongbalkong går genom väggen eller där isoleringen brister. Köldbryggor och otätheter ökar energianvändningen, försämrar komforten och kan ge kalla innerytor där kondens och i förlängningen mögel kan uppstå. Med termografi kartläggs de snabbt över hela byggnaden.',
  sections: [
    {
      heading: 'Vad är en köldbrygga?',
      blocks: [
        {
          type: 'p',
          text: 'Värme tar alltid den lättaste vägen ut. En köldbrygga uppstår där material med hög värmeledningsförmåga bryter isoleringen eller där isoleringen är tunnare, skadad eller felaktigt utförd. Man skiljer ofta på **konstruktiva köldbryggor** — inbyggda i konstruktionen, som bjälklagskanter, balkonginfästningar och fönstersmygar — och **brister**, som saknad eller nedsjunken isolering och otätheter kring genomföringar.',
        },
        {
          type: 'list',
          items: [
            '**Typiska lägen**: bjälklagskanter, balkonginfästningar, fönster- och dörranslutningar, takfot, hörn, genomföringar och infästningar i fasaden.',
            '**Konsekvenser**: högre uppvärmningskostnad, kalla golv och drag, kalla innerytor med risk för kondens, mögel och i värsta fall fuktskador.',
          ],
        },
      ],
    },
    {
      heading: 'Så syns värmeläckage i värmekameran',
      blocks: [
        {
          type: 'p',
          text: 'När det är kallt ute och uppvärmt inne läcker värme ut genom klimatskalets svaga punkter — och dessa framträder som varmare områden på byggnadens utsida i värmebilden. Termograferas byggnaden i stället inifrån syns samma brister som kalla ytor. En [drönarburen värmekamera](/kunskapsbank/sa-fungerar-termografi-med-dronare) gör utvändig termografering effektiv även på höga byggnader och stora tak, där stegar och lift annars begränsar vad som går att se.',
        },
        {
          type: 'p',
          text: 'För tillförlitliga resultat krävs rätt förhållanden: tydlig temperaturskillnad mellan inne och ute, ingen direkt solinstrålning som stör mätningen och stabilt väder. Byggnadstermografi utförs därför normalt under uppvärmningssäsongen, gärna vid molnigt väder eller under dygnets mörka timmar — mer om detta i [Drönarinspektion på vintern](/kunskapsbank/dronarinspektion-pa-vintern).',
        },
      ],
    },
    {
      heading: 'Vad kan resultatet användas till?',
      blocks: [
        {
          type: 'list',
          items: [
            '**Prioritera energiåtgärder** — kartläggningen visar var tilläggsisolering och tätning gör störst nytta, i stället för att åtgärda på måfå.',
            '**Kontrollera utförd entreprenad** — termografering efter tilläggsisolering eller nybyggnad visar om utförandet håller måttet.',
            '**Utreda komfortproblem** — drag och kalla rum kan spåras till sina fysiska orsaker.',
            '**Förebygga fuktproblem** — kalla innerytor med kondensrisk identifieras innan mögelskador uppstår.',
            '**Komplettera energikartläggning** — termogrammen ger det visuella underlag som siffror i en energideklaration saknar.',
          ],
        },
        {
          type: 'p',
          text: 'Termografering av klimatskalet beställs som [termisk inspektion](/tjanster/termisk-inspektion) och kombineras ofta med [takinspektion](/tjanster/takinspektion) vid samma tillfälle.',
        },
      ],
    },
    {
      heading: 'Tolkningen avgör värdet',
      blocks: [
        {
          type: 'p',
          text: 'Alla varma områden i en värmebild är inte fel — skorstenar, ventilationsutblås och solvärmda ytor är normala företeelser, och materialskillnader kan ge mönster som liknar brister. Värdet ligger i tolkningen: att skilja konstruktiva köldbryggor från åtgärdbara brister, bedöma allvarlighetsgrad och koppla fynden till rätt åtgärd. Begär alltid en rapport där varje avvikelse är kommenterad och klassificerad, inte bara en samling färgglada bilder.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Kan alla köldbryggor åtgärdas?',
      answer:
        'Nej — konstruktiva köldbryggor som bjälklagskanter är inbyggda i huset och kan sällan elimineras helt utan större ombyggnad. Däremot kan brister som saknad isolering och otätheter ofta åtgärdas med god effekt, och kartläggningen visar vilka som är vilka.',
    },
    {
      question: 'När på året görs termografering av byggnader?',
      answer:
        'Under uppvärmningssäsongen, när skillnaden mellan inne- och utetemperatur är tydlig. Praxis är att undvika direkt solinstrålning — molniga dagar, kvällar och nätter ger bäst mätförhållanden.',
    },
    {
      question: 'Räcker det att termografera utifrån?',
      answer:
        'Utvändig termografering med drönare täcker hela klimatskalet effektivt och är ofta rätt startpunkt. Vid specifika problem — till exempel drag i en viss lägenhet — kan invändig termografering vara ett komplement för att ringa in orsaken.',
    },
  ],
  relatedServices: [
    { href: '/tjanster/termisk-inspektion', label: 'Termisk inspektion' },
    { href: '/tjanster/fasadinspektion', label: 'Fasadinspektion' },
    { href: '/branscher/fastighet', label: 'Fastighetsbranschen' },
  ],
  relatedArticles: [
    'sa-fungerar-termografi-med-dronare',
    'dronarinspektion-pa-vintern',
    'hitta-fuktskador-med-termisk-inspektion',
  ],
}
