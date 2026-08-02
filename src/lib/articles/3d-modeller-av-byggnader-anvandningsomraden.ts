import type { Article } from './types'

export const tredimensionellaModeller: Article = {
  slug: '3d-modeller-av-byggnader-anvandningsomraden',
  title: '3D-modeller av byggnader — användningsområden i praktiken',
  metaTitle: '3D-modeller av byggnader — användningsområden',
  description:
    'En fotorealistisk 3D-modell av en byggnad kan användas för skadeinventering, projektering, förvaltning och kommunikation. Konkreta användningsområden och vad som krävs för en bra modell.',
  category: 'Mätning & 3D',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'Med drönare och fotogrammetri kan en byggnad eller anläggning omvandlas till en fotorealistisk, mätbar 3D-modell — en digital kopia som kan öppnas, snurras och mätas i på kontoret. Modellen samlar hela objektets utsida i en enda leverans och används för allt från skadeinventering och projektering till förvaltningsunderlag och kommunikation.',
  sections: [
    {
      heading: 'Konkreta användningsområden',
      blocks: [
        {
          type: 'list',
          items: [
            '**Skade- och statusinventering** — skador som dokumenterats vid [inspektion](/kunskapsbank/vad-ar-dronarinspektion) kan lokaliseras och mätas direkt i modellen: hur stor är sprickan, var på fasaden sitter den, hur många kvadratmeter puts är skadad?',
            '**Projekterings- och anbudsunderlag** — arkitekter och entreprenörer får korrekta mått på fasadytor, taklutningar och detaljer utan platsbesök och uppmätning på plats.',
            '**Mängdberäkning** — ytor för målning, putsning eller takomläggning mäts ur modellen som underlag för kalkyl och offertjämförelse.',
            '**Solcellsprojektering** — takytor, lutningar och skuggande objekt ger underlag för layout och produktionsberäkning.',
            '**Förvaltningsdokumentation** — en daterad digital kopia av byggnadens skick, användbar som referens vid framtida [underhållsplanering](/kunskapsbank/underhallsplan-med-dronarinspektion) och tvister.',
            '**Kulturmiljödokumentation** — detaljerad dokumentation av äldre och skyddade byggnader inför renovering.',
            '**Kommunikation** — en snurrbar modell gör det enkelt att visa styrelse, beställare eller entreprenör exakt vad som avses.',
          ],
        },
      ],
    },
    {
      heading: 'Vad avgör modellens kvalitet?',
      blocks: [
        {
          type: 'list',
          items: [
            '**Bildtäckning** — alla ytor som ska modelleras måste fotograferas från flera vinklar; skymda partier (indragna partier, tät vegetation) ger hål i modellen.',
            '**Upplösning (GSD)** — avgör vilka detaljer som går att urskilja och mäta. Se [Hur noggrann är drönarmätning?](/kunskapsbank/hur-noggrann-ar-dronarmatning)',
            '**Georeferering** — RTK/PPK och stödpunkter avgör om modellen bara är skalriktig eller också ligger korrekt i koordinatsystem — viktigt när modellen ska kombineras med projekterings- eller kartdata.',
            '**Ytors beskaffenhet** — glas, blanka plåtar och enfärgade ytor är svåra för fotogrammetrin och kan kräva kompletterande hantering.',
          ],
        },
        {
          type: 'p',
          text: 'Tekniken bakom beskrivs närmare i [Vad är fotogrammetri?](/kunskapsbank/vad-ar-fotogrammetri)',
        },
      ],
    },
    {
      heading: 'Leveransformat och användning',
      blocks: [
        {
          type: 'table',
          caption: 'Vanliga leveranser från 3D-modellering',
          headers: ['Leverans', 'Typisk användning'],
          rows: [
            ['Texturerad 3D-modell (mesh)', 'Visualisering, mätning, skadeinventering'],
            ['Punktmoln', 'Underlag till CAD/BIM-projektering'],
            ['[Ortofoto](/kunskapsbank/vad-ar-ett-ortofoto) av tak/mark', 'Planering och ytmätning'],
            ['Fasadvyer (ortoprojektioner)', 'Fasadritningsunderlag och skadekartering'],
            ['Webbdelning av modell', 'Granskning utan specialprogram'],
          ],
        },
        {
          type: 'p',
          text: 'Formatet väljs efter mottagarens arbetsflöde — en förvaltare vill ofta ha en delbar webbvy, medan en projektör behöver punktmoln eller CAD-kompatibla format. Se tjänsten [fotogrammetri & 3D-modell](/tjanster/fotogrammetri-3d-modell).',
        },
      ],
    },
    {
      heading: 'När är 3D-modell rätt val — och när räcker bilder?',
      blocks: [
        {
          type: 'p',
          text: 'En 3D-modell är motiverad när måtten och helheten behövs: projektering, mängdning, komplex skadebild eller dokumentation som ska återanvändas över tid. För en enklare statuskontroll räcker ofta en systematisk bildleverans från en vanlig [takinspektion](/tjanster/takinspektion) — till lägre kostnad. En seriös leverantör hjälper dig välja nivå efter behovet, inte efter vad som är mest avancerat.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Kan man mäta i 3D-modellen själv?',
      answer:
        'Ja — modeller kan levereras i format och webbvisare där avstånd, ytor och volymer mäts direkt, utan specialprogramvara. Vilka verktyg som passar beror på leveransformatet.',
    },
    {
      question: 'Modelleras även byggnadens insida?',
      answer:
        'Drönarfotogrammetri täcker utsidan. Invändig modellering kräver andra metoder, till exempel markbunden skanning, och kan vid behov kombineras med den utvändiga modellen.',
    },
    {
      question: 'Hur stor byggnad kan modelleras?',
      answer:
        'Metoden skalar från enskilda villor till stora industrianläggningar och hela kvarter — det som förändras är flygtid och bearbetningstid, inte principen.',
    },
  ],
  relatedServices: [
    { href: '/tjanster/fotogrammetri-3d-modell', label: 'Fotogrammetri & 3D-modell' },
    { href: '/tjanster/3d-kartlaggning', label: '3D-kartläggning' },
    { href: '/tjanster/dronarinmatning', label: 'Drönarinmätning' },
  ],
  relatedArticles: [
    'vad-ar-fotogrammetri',
    'vad-ar-ett-ortofoto',
    'hur-noggrann-ar-dronarmatning',
  ],
}
