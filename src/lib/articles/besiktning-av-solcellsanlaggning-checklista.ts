import type { Article } from './types'

export const besiktningSolcellsanlaggning: Article = {
  slug: 'besiktning-av-solcellsanlaggning-checklista',
  title: 'Besiktning av solcellsanläggning — checklista för ägare',
  metaTitle: 'Besiktning av solcellsanläggning — checklista',
  description:
    'Checklista för dig som äger eller förvaltar en solcellsanläggning: vad som bör kontrolleras visuellt, elektriskt och termiskt, hur ofta — och när termisk drönarinspektion gör störst nytta.',
  category: 'Solceller & energi',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'En solcellsanläggning är en investering som ska producera i decennier — men fel som cellskador, kontaktfel och nedsmutsning smyger sig in utan att synas från marken. En strukturerad kontroll omfattar tre delar: visuell kontroll, genomgång av produktionsdata och termisk inspektion. Checklistan nedan hjälper dig som äger eller förvaltar en anläggning att fånga problemen i tid.',
  sections: [
    {
      heading: 'Checklista: löpande egenkontroll',
      blocks: [
        {
          type: 'p',
          text: 'Detta kan du som ägare göra själv, regelbundet och utan specialutrustning:',
        },
        {
          type: 'list',
          items: [
            '**Följ produktionen** — jämför utfall mot förväntan och mot tidigare år vid samma tid. Oförklarade tapp är ofta första signalen på fel.',
            '**Kontrollera växelriktaren** — titta efter felkoder och varningar i display eller app.',
            '**Titta på panelerna från marken** — synlig smuts, löv, fågelspillning, snölast eller fysiska skador.',
            '**Kontrollera skuggning** — har träd eller annan vegetation vuxit upp sedan installationen?',
            '**Lyssna och titta vid växelriktare och kopplingslådor** — missljud, missfärgningar eller brännlukt kräver omedelbar åtgärd av behörig elektriker.',
          ],
        },
      ],
    },
    {
      heading: 'Checklista: professionell kontroll',
      blocks: [
        {
          type: 'p',
          text: 'Vissa kontroller kräver fackkunskap och rätt utrustning:',
        },
        {
          type: 'list',
          items: [
            '**Termisk inspektion av panelerna** — hittar [hotspots](/kunskapsbank/hotspots-i-solceller), diodfel, strängfel och PID som inte syns för ögat. Utförs effektivast med drönare över hela anläggningen, se [solcellsinspektion](/tjanster/solcellsinspektion).',
            '**Detaljerad visuell kontroll** — mikrosprickor, delaminering, snail trails och skador på kablage och kontaktdon dokumenteras på nära håll.',
            '**Elektrisk kontroll** — mätningar på strängnivå och kontroll av skyddsfunktioner, utförs av behörig elinstallatör.',
            '**Infästningar och montage** — kontroll av att montagesystemet sitter fast och att genomföringar i taket är täta, särskilt efter storm.',
          ],
        },
      ],
    },
    {
      heading: 'Hur ofta bör anläggningen kontrolleras?',
      blocks: [
        {
          type: 'table',
          caption: 'Rekommenderad kontrollrytm för solcellsanläggningar',
          headers: ['Kontroll', 'Frekvens'],
          rows: [
            ['Produktionsuppföljning', 'Löpande — gärna månadsvis'],
            ['Visuell egenkontroll från marken', 'Några gånger per år och efter storm'],
            ['Termisk drönarinspektion', 'Regelbundet, t.ex. årligen eller vartannat år, samt vid misstänkt produktionstapp'],
            ['Elektrisk kontroll av behörig installatör', 'Enligt installatörens och försäkringsbolagets rekommendation'],
          ],
        },
        {
          type: 'p',
          text: 'Särskilda tillfällen som motiverar extra kontroll: inför garantitidens utgång (fel som dokumenteras i tid kan reklameras), efter extremväder, vid ägarbyte och vid om- eller tillbyggnad av anläggningen.',
        },
      ],
    },
    {
      heading: 'Varför termisk inspektion är den viktigaste punkten',
      blocks: [
        {
          type: 'p',
          text: 'De allvarligaste felen i en solcellsanläggning — cellskador, kontaktfel och diodfel — är ofta helt osynliga för ögat och märks i produktionsdata först när de blivit omfattande. Termisk inspektion med drönare är den metod som hittar dessa fel tidigt över hela anläggningen på kort tid. Vid inspektionen fotograferas varje panel både termiskt och visuellt, och rapporten pekar ut exakt vilka paneler som avviker och varför. Så fungerar tekniken: [Så fungerar termografi med drönare](/kunskapsbank/sa-fungerar-termografi-med-dronare).',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Kan jag besikta min solcellsanläggning själv?',
      answer:
        'Egenkontroll från marken och uppföljning av produktionsdata kan och bör du göra själv. Arbete på taket, elektriska mätningar och termisk analys kräver däremot rätt behörighet, utrustning och kompetens.',
    },
    {
      question: 'Vad kostar en termisk inspektion av solceller?',
      answer:
        'Priset beror främst på anläggningens storlek och läge. Se vår prisguide för vad som påverkar kostnaden, eller begär offert för er anläggning.',
    },
    {
      question: 'Min anläggning är ny — behöver den verkligen inspekteras?',
      answer:
        'Ja, gärna tidigt. Transport- och montageskador samt installationsfel förekommer även i nya anläggningar, och en dokumenterad kontroll medan garantierna gäller gör det möjligt att reklamera fel i tid.',
    },
    {
      question: 'Behöver anläggningen stängas av under inspektionen?',
      answer:
        'Nej — tvärtom ska anläggningen vara i drift och belastad under termisk inspektion, eftersom det är då felen genererar värme och blir synliga.',
    },
  ],
  relatedServices: [
    { href: '/tjanster/solcellsinspektion', label: 'Solcellsinspektion' },
    { href: '/tjanster/termisk-inspektion', label: 'Termisk inspektion' },
    { href: '/branscher/energi', label: 'Energibranschen' },
  ],
  relatedArticles: [
    'hotspots-i-solceller',
    'sa-fungerar-termografi-med-dronare',
    'vad-ar-dronarinspektion',
  ],
}
