import type { Article } from './types'

export const saFungerarVolymberakning: Article = {
  slug: 'sa-fungerar-volymberakning-med-dronare',
  title: 'Så fungerar volymberäkning med drönare',
  metaTitle: 'Volymberäkning med drönare — så fungerar det',
  description:
    'Volymberäkning med drönare mäter upplag, täkter och schakter genom att en 3D-ytmodell skapas ur flygbilder och jämförs mot ett referensplan. Så går mätningen till och det här påverkar noggrannheten.',
  category: 'Mätning & 3D',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'Volymberäkning med drönare innebär att materialupplag, täkter eller schakter fotograferas från luften, att en detaljerad 3D-ytmodell skapas ur bilderna med fotogrammetri, och att volymen sedan beräknas genom att ytmodellen jämförs mot ett referensplan eller en tidigare mätning. Metoden är snabb, beröringsfri och dokumenterad — och personalen behöver aldrig beträda upplagen.',
  sections: [
    {
      heading: 'Mätningen steg för steg',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            '**Flygning** — drönaren fotograferar området enligt en planerad rutt med hög bildöverlappning. För en normal upplagsplan tar flygningen ofta under en timme.',
            '**3D-modellering** — bilderna bearbetas till ett tätt punktmoln och en ytmodell av upplagen. Läs mer om tekniken i [Vad är fotogrammetri?](/kunskapsbank/vad-ar-fotogrammetri)',
            '**Avgränsning** — varje upplags utbredning definieras, antingen automatiskt eller av en operatör som kvalitetsgranskar.',
            '**Beräkning** — volymen beräknas mellan ytmodellen och ett referensplan (markytan) eller mot en tidigare inmätning för att få fram förändringen.',
            '**Rapport** — resultatet levereras med volymer per upplag, ortofoto och dokumentation av beräkningsgrunderna.',
          ],
        },
      ],
    },
    {
      heading: 'Vad påverkar noggrannheten?',
      blocks: [
        {
          type: 'list',
          items: [
            '**Markupplösning (GSD)** — lägre flyghöjd ger fler mätpunkter per kvadratmeter och en mer detaljerad ytmodell.',
            '**Georeferering** — RTK/PPK-positionering och markstödpunkter avgör hur exakt modellen ligger i koordinatsystemet.',
            '**Referensplanets kvalitet** — volymen beräknas mot en basyta; en inmätt nollyta ger säkrare resultat än en antagen plan yta.',
            '**Upplagets form och omgivning** — vegetation, vatten eller material som hänger över kanter kan kräva manuell hantering i beräkningen.',
            '**Konsekvent metodik** — vid återkommande mätningar är samma flyghöjd, avgränsning och beräkningssätt nyckeln till jämförbara resultat.',
          ],
        },
        {
          type: 'p',
          text: 'Rätt utförd når drönarbaserad volymberäkning en noggrannhet som väl räcker för lagerredovisning, mängdreglering och produktionsuppföljning — och den stora vinsten är att hela ytan mäts, inte bara ett fåtal profiler.',
        },
      ],
    },
    {
      heading: 'Jämförelse med traditionella metoder',
      blocks: [
        {
          type: 'table',
          caption: 'Volymberäkning: drönare jämfört med traditionella metoder',
          headers: ['Aspekt', 'Drönare', 'GNSS-stång/totalstation'],
          rows: [
            [
              'Mätpunkter',
              'Miljontals punkter — hela ytan modelleras.',
              'Utvalda punkter och profiler — ytan interpoleras däremellan.',
            ],
            [
              'Tid i fält',
              'Ofta under en timme per område.',
              'Timmar till dagar beroende på antal upplag.',
            ],
            [
              'Säkerhet',
              'Ingen behöver beträda upplag eller slänter.',
              'Mätpersonal går på materialet — ras- och halkrisk.',
            ],
            [
              'Verksamhetspåverkan',
              'Produktionen kan pågå — flygningen sker ovanför.',
              'Maskiner kan behöva stoppas i mätområdet.',
            ],
            [
              'Dokumentation',
              'Ortofoto och 3D-modell följer med som bevis.',
              'Punktlista — svårare att granska i efterhand.',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Vanliga användningsområden',
      blocks: [
        {
          type: 'list',
          items: [
            '**Lagerinventering** — regelbunden volymuppföljning av råvaru- och produktupplag, ofta inför bokslut.',
            '**Täkter** — produktionsuppföljning och underlag för tillståndsrapportering.',
            '**Bygg och anläggning** — mängdreglering av schakt och fyll mot kontrakt. Se även [drönarinmätning](/tjanster/dronarinmatning).',
            '**Deponier** — uppföljning av deponerad volym och återstående kapacitet.',
          ],
        },
        {
          type: 'p',
          text: 'Läs mer om tjänsten på sidan [volymberäkning](/tjanster/volymberakning).',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Hur ofta bör volymer mätas?',
      answer:
        'Det beror på verksamheten. Många täkter och terminaler mäter kvartalsvis eller månadsvis för lageruppföljning, och alltid inför bokslut. Byggprojekt mäter ofta vid kontraktuella avstämningspunkter.',
    },
    {
      question: 'Kan man mäta volymer på vintern?',
      answer:
        'Ja, men snötäcke på upplagen påverkar resultatet eftersom kameran mäter snöytan, inte materialytan. Mätning planeras därför helst till barmarksförhållanden eller efter att upplagen sopats/skottats av.',
    },
    {
      question: 'Vilket underlag behöver ni från oss?',
      answer:
        'Helst en översikt över området och vilka upplag som ska mätas, samt eventuellt koordinatsystem ni vill ha leveransen i. Finns tidigare inmätningar kan de användas som referens för förändringsberäkningar.',
    },
  ],
  relatedServices: [
    { href: '/tjanster/volymberakning', label: 'Volymberäkning' },
    { href: '/tjanster/dronarinmatning', label: 'Drönarinmätning' },
    { href: '/tjanster/3d-kartlaggning', label: '3D-kartläggning' },
  ],
  relatedArticles: [
    'vad-ar-fotogrammetri',
    'vad-ar-dronarinspektion',
    'regler-for-dronarflygning-i-sverige',
  ],
}
