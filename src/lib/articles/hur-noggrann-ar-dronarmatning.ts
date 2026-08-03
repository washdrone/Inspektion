import type { Article } from './types'

export const hurNoggrannArDronarmatning: Article = {
  slug: 'hur-noggrann-ar-dronarmatning',
  title: 'Hur noggrann är drönarmätning? GSD, RTK och stödpunkter förklarat',
  metaTitle: 'Hur noggrann är drönarmätning?',
  description:
    'Drönarmätning kan nå centimeternoggrannhet med rätt metodik. Så påverkar GSD, RTK/PPK, markstödpunkter och ytans beskaffenhet noggrannheten — och så väljer du rätt nivå för ditt projekt.',
  category: 'Mätning & 3D',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'Rätt utförd kan drönarmätning nå noggrannheter på centimeternivå — fullt tillräckligt för de flesta tillämpningar inom bygg, anläggning och förvaltning. Men noggrannheten är inte en egenskap hos drönaren i sig: den avgörs av markupplösningen (GSD), positioneringstekniken (RTK/PPK), användningen av markstödpunkter och ytans beskaffenhet. Den viktigaste frågan är därför inte "hur noggrann är drönaren?" utan "vilken noggrannhet kräver mitt projekt?".',
  sections: [
    {
      heading: 'Fyra faktorer som styr noggrannheten',
      blocks: [
        {
          type: 'table',
          caption: 'Faktorer som påverkar noggrannheten vid drönarmätning',
          headers: ['Faktor', 'Vad den påverkar', 'Hur den styrs'],
          rows: [
            [
              '**GSD** (markupplösning)',
              'Detaljnivån — hur små objekt som kan urskiljas och mätas.',
              'Flyghöjd och kamerans upplösning. Lägre höjd ger lägre (bättre) GSD.',
            ],
            [
              '**Positionering** (RTK/PPK)',
              'Hur exakt varje bilds position är känd.',
              'GNSS-korrektioner i realtid (RTK) eller efterbearbetning (PPK) ger centimeternivå i stället för meternivå.',
            ],
            [
              '**Markstödpunkter** (GCP)',
              'Modellens koppling till koordinatsystemet och kontroll av resultatet.',
              'Inmätta, signalerade punkter i området. Även med RTK används kontrollpunkter för att verifiera.',
            ],
            [
              '**Ytans beskaffenhet**',
              'Hur väl programvaran kan matcha punkter mellan bilder.',
              'Vegetation, vatten och enfärgade ytor försämrar resultatet; struktur och textur förbättrar det.',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Absolut och relativ noggrannhet — en viktig skillnad',
      blocks: [
        {
          type: 'p',
          text: '**Relativ noggrannhet** beskriver hur korrekta mått är inom modellen — till exempel avståndet mellan två punkter eller volymen på ett upplag. **Absolut noggrannhet** beskriver hur väl modellen ligger i det verkliga koordinatsystemet. En modell kan ha utmärkt relativ noggrannhet men sämre absolut position, vilket räcker gott för [volymberäkning](/kunskapsbank/sa-fungerar-volymberakning-med-dronare) men inte för utsättning mot projekterade linjer. Vilken typ av noggrannhet som behövs styr metodvalet — och kostnaden.',
        },
      ],
    },
    {
      heading: 'Vilken noggrannhet behöver olika tillämpningar?',
      blocks: [
        {
          type: 'list',
          items: [
            '**Visuell dokumentation och översikt** — GSD är viktigast; absolut position har mindre betydelse.',
            '**Volymberäkning** — hög relativ noggrannhet krävs; konsekvent metodik mellan mätningar är avgörande.',
            '**Mängdreglering och relationsunderlag** — både relativ och absolut noggrannhet behövs; stödpunkter och kontrollmätning rekommenderas.',
            '**Projekteringsunderlag** — högsta kraven; låg flyghöjd, RTK/PPK och signalerade stödpunkter med dokumenterad kontroll.',
          ],
        },
        {
          type: 'p',
          text: 'Vid varje uppdrag inom [drönarinmätning](/tjanster/dronarinmatning) anpassas metodiken efter projektets faktiska krav — att alltid flyga med maximal noggrannhet vore att ta betalt för precision som inte används.',
        },
      ],
    },
    {
      heading: 'Så verifieras noggrannheten',
      blocks: [
        {
          type: 'p',
          text: 'En seriös leverans redovisar inte bara resultatet utan också dess kvalitet. Det görs genom kontrollpunkter — inmätta punkter som inte använts i beräkningen — där modellens värden jämförs med de inmätta. Avvikelserna sammanställs i en kvalitetsrapport som följer med leveransen. Fråga alltid efter hur noggrannheten verifierats när du beställer mätuppdrag.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Kan drönarmätning ersätta traditionell inmätning helt?',
      answer:
        'För ytor och volymer är drönaren ofta överlägsen i effektivitet. För enstaka punkter med högsta krav, mätning under vegetation eller invändig mätning behövs fortfarande totalstation, GNSS-stång eller skanner. Metoderna kompletterar varandra.',
    },
    {
      question: 'Vad betyder det att en drönare har RTK?',
      answer:
        'Att den tar emot GNSS-korrektioner i realtid och därmed vet sin position med centimeternoggrannhet i stället för meternoggrannhet. Det förbättrar modellens georeferering kraftigt och minskar behovet av markstödpunkter — men ersätter inte kontrollmätning.',
    },
    {
      question: 'Hur påverkar vegetation mätresultatet?',
      answer:
        'Fotogrammetri mäter det kameran ser — alltså vegetationens ovansida, inte marken under. För markmodeller i bevuxna områden krävs filtrering, kompletterande mätning eller laserskanning som delvis tränger genom vegetation.',
    },
  ],
  relatedServices: [
    { href: '/tjanster/dronarinmatning', label: 'Drönarinmätning' },
    { href: '/tjanster/volymberakning', label: 'Volymberäkning' },
    { href: '/tjanster/3d-kartlaggning', label: '3D-kartläggning' },
  ],
  relatedArticles: [
    'lidar-eller-fotogrammetri',
    'dtm-och-dsm-skillnaden',
    'vad-ar-fotogrammetri',
    'vad-ar-ett-ortofoto',
    'sa-fungerar-volymberakning-med-dronare',
  ],
}
