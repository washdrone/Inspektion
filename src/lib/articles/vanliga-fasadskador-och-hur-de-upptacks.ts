import type { Article } from './types'

export const vanligaFasadskador: Article = {
  slug: 'vanliga-fasadskador-och-hur-de-upptacks',
  title: 'Vanliga fasadskador — och hur de upptäcks i tid',
  metaTitle: 'Vanliga fasadskador och hur de upptäcks',
  description:
    'Sprickor, putssläpp, frostsprängning, armeringskorrosion och fogskador — guide till de vanligaste fasadskadorna per material, varför de uppstår och hur de upptäcks innan de blir dyra.',
  category: 'Tak & fastighet',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'Fasadskador börjar nästan alltid smått — en spricka, en fuktfläck, en vittrande fog — och utvecklas långsamt tills de plötsligt blir akuta och dyra. De flesta skadetyper följer dessutom kända mönster per fasadmaterial. Den här guiden går igenom de vanligaste skadorna på puts-, tegel-, betong- och plåtfasader, varför de uppstår och hur de upptäcks i tid.',
  sections: [
    {
      heading: 'Putsfasader',
      blocks: [
        {
          type: 'list',
          items: [
            '**Sprickor** — från sättningar, temperaturrörelser eller krympning. Sprickor släpper in vatten som driver på fortsatt nedbrytning.',
            '**Putssläpp (bom)** — putsen släpper från underlaget och kan till slut falla. Bom syns inte alltid visuellt men buktande partier, sprickmönster och fuktspår är varningstecken; fysisk verifiering görs genom knackning.',
            '**Frostsprängning** — vatten som trängt in fryser och spränger putsen, typiskt kring skadade partier och där avvattningen brister.',
            '**Fukt- och alggenomslag** — missfärgningar och påväxt som visar var fasaden hålls fuktig.',
          ],
        },
      ],
    },
    {
      heading: 'Tegelfasader',
      blocks: [
        {
          type: 'list',
          items: [
            '**Fogskador** — vittrande eller sprucket murbruk är tegelfasadens vanligaste problem och släpper in vatten i murverket.',
            '**Frostsprängda tegel** — ytan flagnar av (avskalning) när fukt i teglet fryser.',
            '**Saltutfällningar** — vita utfällningar som visar att vatten vandrar genom murverket.',
            '**Rostande kramlor och balkonginfästningar** — dolda stålkomponenter som korroderar kan ge sprickbildning och i förlängningen hållfasthetsproblem.',
          ],
        },
      ],
    },
    {
      heading: 'Betong- och plåtfasader',
      blocks: [
        {
          type: 'list',
          items: [
            '**Armeringskorrosion** — när betongens skyddande miljö bryts ned (karbonatisering) eller klorider tränger in rostar armeringen, sväller och spränger av täckskiktet. Synliga tecken: rostutfällningar, sprickor och bortfallna betongbitar (spjälkning).',
            '**Balkongskador** — balkongplattor är särskilt utsatta; skador på undersida och kanter ska tas på allvar.',
            '**Korrosion på plåt** — rost i skarvar, vid infästningar och där ytskiktet skadats.',
            '**Lossnande kassetter och beslag** — infästningar som åldrats eller belastats fel.',
          ],
        },
      ],
    },
    {
      heading: 'Så upptäcks skadorna i tid',
      blocks: [
        {
          type: 'p',
          text: 'Gemensamt för nästan alla fasadskador: de syns — om någon tittar tillräckligt noga och tillräckligt ofta. Problemet är att stora delar av en fasad i praktiken aldrig granskas på nära håll, eftersom det kräver ställning eller lift. Det är det gapet drönaren stänger:',
        },
        {
          type: 'list',
          items: [
            '**Heltäckande fotodokumentation** — hela fasaden fotograferas på nära håll i hög upplösning, även partier som aldrig nås vid okulär kontroll från marken. Se [fasadinspektion](/tjanster/fasadinspektion).',
            '**Termisk analys** — [värmekameran](/kunskapsbank/sa-fungerar-termografi-med-dronare) kan avslöja fukt bakom ytan och områden med avvikande temperaturmönster som motiverar närmare undersökning.',
            '**Jämförelse över tid** — återkommande inspektioner visar om en spricka växer eller ligger stilla, vilket styr prioriteringen i [underhållsplanen](/kunskapsbank/underhallsplan-med-dronarinspektion).',
            '**Riktad fysisk uppföljning** — fynd som kräver knackning eller provtagning pekas ut, så att ställning bara byggs där den behövs.',
          ],
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Vilka fasadskador är mest akuta?',
      answer:
        'Skador som riskerar nedfallande material — putssläpp, spjälkande betong och lösa fasadelement — är säkerhetsfrågor och ska hanteras skyndsamt. Fastighetsägaren ansvarar för att fasaden inte utgör fara för förbipasserande.',
    },
    {
      question: 'Kan drönaren se putssläpp (bom)?',
      answer:
        'Bom i sig är inte alltid synligt, men dess följdtecken — sprickmönster, buktningar och fuktspår — dokumenteras, och termografi kan ge ytterligare indikationer. Definitiv verifiering görs genom knackning på de utpekade partierna.',
    },
    {
      question: 'Hur ofta bör en fasad inspekteras?',
      answer:
        'En översiktlig kontroll med några års mellanrum är en vanlig rekommendation, tätare för äldre fasader, utsatta lägen och där tidigare skador bevakas. Balkonger och infästningar förtjänar särskild uppmärksamhet.',
    },
  ],
  relatedServices: [
    { href: '/tjanster/fasadinspektion', label: 'Fasadinspektion' },
    { href: '/tjanster/termisk-inspektion', label: 'Termisk inspektion' },
    { href: '/branscher/fastighet', label: 'Fastighetsbranschen' },
  ],
  relatedArticles: [
    'underhallsplan-med-dronarinspektion',
    'hitta-fuktskador-med-termisk-inspektion',
    'dronarinspektion-for-bostadsrattsforeningar',
  ],
}
