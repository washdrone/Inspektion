import type { Article } from './types'

export const vindkraftinspektionSaGarDetTill: Article = {
  slug: 'vindkraftinspektion-sa-gar-det-till',
  title: 'Vindkraftinspektion med drönare — så inspekteras rotorblad och torn',
  metaTitle: 'Vindkraftinspektion med drönare — guide',
  description:
    'Rotorblad slits av erosion, blixtnedslag och sprickbildning. Så inspekteras vindkraftverk med drönare: vanliga skadetyper, hur flygningen går till och varför tidig upptäckt lönar sig.',
  category: 'Solceller & energi',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'Vindkraftinspektion med drönare innebär att rotorblad, nacell och torn fotograferas systematiskt i hög upplösning medan verket står stilla. Metoden ersätter i de flesta fall repklättring och skylift för den återkommande statuskontrollen: hela verket dokumenteras på en bråkdel av tiden, utan personal på höjd, och med bilder som gör det möjligt att följa skadeutvecklingen över tid.',
  sections: [
    {
      heading: 'Vanliga skador på rotorblad',
      blocks: [
        {
          type: 'list',
          items: [
            '**Framkantserosion** — regn, hagel och partiklar sliter på bladets framkant, vilket försämrar aerodynamiken och kan öppna för fukt i laminatet.',
            '**Blixtskador** — brännmärken, sprickor och skador kring receptorer; vindkraftverk är bland de mest blixtutsatta konstruktionerna som finns.',
            '**Sprickor i laminat och gelcoat** — från utmattning, tillverkningsdefekter eller mekanisk påverkan.',
            '**Delaminering** — skikt i kompositmaterialet som släpper, ofta synligt som blåsor eller ojämnheter i ytan.',
            '**Skador på avvisare och tillbehör** — vortexgeneratorer, avvisarlister och dräneringshål som skadats eller satts igen.',
            '**Läckage vid nacell och nav** — olje- och fettläckage som syns som rinnmärken.',
          ],
        },
      ],
    },
    {
      heading: 'Så går inspektionen till',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            '**Verket stoppas och bladen parkeras** — inspektionen samordnas med driftorganisationen; bladen ställs i lämplig position.',
            '**Systematisk flygning** — varje blad fotograferas från flera sidor med jämn täckning, tillsammans med nav, nacell och torn.',
            '**Analys och klassificering** — skador identifieras, mäts och klassificeras efter allvarlighetsgrad enligt överenskommen skala.',
            '**Rapport** — varje avvikelse redovisas med bild, position på bladet och rekommendation: åtgärda nu, bevaka eller utan anmärkning.',
          ],
        },
        {
          type: 'p',
          text: 'Eftersom bilderna är positionsbestämda kan samma skada följas mellan inspektioner — utvecklas sprickan eller ligger den stilla? Det är den informationen som gör skillnad i underhållsplaneringen. Läs mer om tjänsten på [vindkraftinspektion](/tjanster/vindkraftinspektion).',
        },
      ],
    },
    {
      heading: 'Varför tidig upptäckt lönar sig',
      blocks: [
        {
          type: 'p',
          text: 'Bladskador utvecklas progressivt: en mindre erosionsskada eller spricka som åtgärdas med enkel reparation kan, om den lämnas, växa till en skada som kräver omfattande reparation på plats eller i värsta fall bladbyte. Dessutom påverkar redan måttlig framkantserosion bladets aerodynamik och därmed produktionen. Regelbunden inspektion gör att åtgärder kan sättas in när de fortfarande är små — och planeras till tidpunkter då produktionsbortfallet gör minst skada.',
        },
      ],
    },
    {
      heading: 'Drönare jämfört med repklättring och markbaserad inspektion',
      blocks: [
        {
          type: 'table',
          caption: 'Inspektionsmetoder för vindkraftverk',
          headers: ['Aspekt', 'Drönare', 'Repklättring', 'Kamera från marken'],
          rows: [
            ['Personal på höjd', 'Nej', 'Ja', 'Nej'],
            ['Stopptid per verk', 'Kort — ofta under ett par timmar', 'Lång — ofta en hel dag eller mer', 'Kort'],
            ['Bildkvalitet och täckning', 'Hög och systematisk, alla ytor', 'Hög men punktvis, taktil kontroll möjlig', 'Begränsad av avstånd och vinkel'],
            ['Fysisk åtgärd möjlig', 'Nej — endast dokumentation', 'Ja — mindre reparationer direkt', 'Nej'],
          ],
        },
        {
          type: 'p',
          text: 'I praktiken används metoderna tillsammans: drönaren står för den återkommande, heltäckande statuskontrollen, och repteknik sätts in riktat där rapporten visar att fysisk åtgärd behövs — samma tvåstegsprincip som beskrivs i [Drönarinspektion vs traditionell inspektion](/kunskapsbank/dronarinspektion-vs-traditionell-inspektion).',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Måste vindkraftverket stå stilla under inspektionen?',
      answer:
        'Ja, för bladinspektion stoppas verket och bladen parkeras i lämplig position. Stopptiden är dock kort jämfört med metoder som kräver klättring, vilket minskar produktionsbortfallet.',
    },
    {
      question: 'Hur ofta bör rotorblad inspekteras?',
      answer:
        'Branschpraxis är regelbunden inspektion, ofta årligen eller enligt tillverkarens och försäkringsgivarens rekommendationer, samt efter kända blixtnedslag eller extremväder.',
    },
    {
      question: 'Kan ni inspektera verk till havs eller i fjällmiljö?',
      answer:
        'Förutsättningarna varierar med plats, väder och logistik. Kontakta oss med information om parken så bedömer vi genomförbarheten för ert specifika fall.',
    },
  ],
  relatedServices: [
    { href: '/tjanster/vindkraftinspektion', label: 'Vindkraftinspektion' },
    { href: '/branscher/energi', label: 'Energibranschen' },
    { href: '/tjanster/termisk-inspektion', label: 'Termisk inspektion' },
  ],
  relatedArticles: [
    'dronarinspektion-vs-traditionell-inspektion',
    'vad-ar-dronarinspektion',
    'hotspots-i-solceller',
  ],
}
