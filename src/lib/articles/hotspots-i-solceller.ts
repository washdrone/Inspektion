import type { Article } from './types'

export const hotspotsISolceller: Article = {
  slug: 'hotspots-i-solceller',
  title: 'Hotspots i solceller — orsaker, risker och hur de upptäcks',
  metaTitle: 'Hotspots i solceller — orsaker och åtgärder',
  description:
    'En hotspot är ett onormalt varmt område i en solcellspanel som tyder på fel: cellskador, skuggning, smuts eller diodfel. Så uppstår hotspots, vilka risker de medför och hur termografi hittar dem.',
  category: 'Solceller & energi',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'En hotspot är ett lokalt överhettat område i en solcellspanel. Den uppstår när en cell producerar mindre ström än cellerna runt omkring — på grund av skada, skuggning eller smuts — och i stället börjar ta emot energi som omvandlas till värme. Hotspots sänker anläggningens produktion, förkortar panelens livslängd och kan i allvarliga fall utgöra brandrisk. Med termisk drönarinspektion upptäcks de snabbt över hela anläggningen.',
  sections: [
    {
      heading: 'Varför uppstår hotspots?',
      blocks: [
        {
          type: 'p',
          text: 'Solceller i en panel är seriekopplade — strömmen genom alla celler i en sträng är densamma. När en cell presterar sämre än de övriga tvingas den arbeta som last i stället för källa: den tar emot effekt från de friska cellerna och omvandlar den till värme. Vanliga bakomliggande orsaker är:',
        },
        {
          type: 'list',
          items: [
            '**Cellsprickor** — mikrosprickor från tillverkning, transport, montage eller snölast.',
            '**Lödfel och kontaktfel** — dåliga förbindningar som ger lokalt förhöjd resistans.',
            '**Skuggning** — även partiell skuggning från träd, master eller smuts tvingar celler att arbeta som last.',
            '**Nedsmutsning** — fågelspillning, löv och lav som ger permanent lokal skuggning.',
            '**Defekta bypassdioder** — dioder som ska skydda mot hotspot-effekten men som själva kan gå sönder.',
            '**PID (Potential Induced Degradation)** — spänningsrelaterad degradering som försämrar cellernas prestanda.',
            '**Delaminering** — när panelens skikt släpper från varandra och fukt tränger in.',
          ],
        },
      ],
    },
    {
      heading: 'Vilka risker medför hotspots?',
      blocks: [
        {
          type: 'list',
          items: [
            '**Produktionsförlust** — den drabbade panelen och ofta hela strängen presterar sämre.',
            '**Accelererat åldrande** — värmen skadar cellmaterial och inkapsling, vilket förvärrar felet över tid.',
            '**Brandrisk** — kraftigt överhettade punkter kan i värsta fall antända panelmaterial eller underliggande tak. Detta är ett känt riskscenario i branschen och en viktig anledning att inspektera regelbundet.',
          ],
        },
      ],
    },
    {
      heading: 'Så upptäcks hotspots med termisk drönarinspektion',
      blocks: [
        {
          type: 'p',
          text: 'Hotspots syns sällan för ögat — en panel kan se helt intakt ut och ändå ha allvarliga fel. Med en radiometrisk värmekamera på drönare termograferas hela anläggningen systematiskt medan den är i drift. Olika fel ger karakteristiska värmemönster:',
        },
        {
          type: 'table',
          caption: 'Termiska mönster och trolig orsak',
          headers: ['Mönster i värmebilden', 'Trolig orsak'],
          rows: [
            ['En enskild cell varm', 'Cellskada, spricka eller lokal skuggning/smuts'],
            ['En tredjedel av panelen varm', 'Aktiverad eller defekt bypassdiod'],
            ['Hel panel varmare än grannarna', 'Panelfel, kontaktfel eller frånkopplad panel'],
            ['Hel sträng varm', 'Strängfel — t.ex. säkring, kontaktdon eller växelriktarproblem'],
            ['Fläckvis mönster över flera paneler', 'Nedsmutsning eller PID'],
          ],
        },
        {
          type: 'p',
          text: 'För tillförlitliga resultat krävs god solinstrålning — branschstandarden IEC 62446-3 för termografisk inspektion av solcellsanläggningar anger minst 600 W/m². Läs mer om tekniken i [Så fungerar termografi med drönare](/kunskapsbank/sa-fungerar-termografi-med-dronare).',
        },
      ],
    },
    {
      heading: 'Vad gör man åt en hotspot?',
      blocks: [
        {
          type: 'p',
          text: 'Åtgärden beror på orsaken: rengöring vid nedsmutsning, beskärning vid skuggande vegetation, byte av diod eller kontaktdon vid komponentfel, och panelbyte vid cellskador. Inspektionsrapporten pekar ut exakt vilka paneler som är drabbade och klassificerar allvarlighetsgraden, så att solcellsinstallatören kan åtgärda rätt saker utan eget felsökningsarbete. Regelbunden [solcellsinspektion](/tjanster/solcellsinspektion) gör att fel upptäcks innan de hunnit sprida sig eller orsaka följdskador.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Hur vet jag om min anläggning har hotspots?',
      answer:
        'Oförklarad produktionsminskning är en vanlig första signal, men många fel syns inte i produktionsdata förrän de blivit omfattande. Termisk inspektion är det säkraste sättet att upptäcka hotspots tidigt — panelerna kan se helt normala ut för ögat.',
    },
    {
      question: 'Hur ofta bör en solcellsanläggning termograferas?',
      answer:
        'Många aktörer i branschen rekommenderar regelbunden inspektion, till exempel årligen eller vartannat år, samt efter garantibesiktning, extrema väderhändelser eller vid misstänkt produktionsbortfall.',
    },
    {
      question: 'Kan hotspots åtgärdas utan att byta panel?',
      answer:
        'Ofta, ja — om orsaken är smuts, skuggning eller en defekt diod. Är själva cellen skadad behöver panelen normalt bytas. Rapporten från inspektionen visar vilken typ av fel det rör sig om.',
    },
    {
      question: 'Täcker garantin fel som hittas vid inspektion?',
      answer:
        'Paneler omfattas normalt av produkt- och effektgarantier från tillverkaren. En daterad termisk rapport är ett bra underlag i garantiärenden. Kontrollera villkoren i just er garanti.',
    },
  ],
  relatedServices: [
    { href: '/tjanster/solcellsinspektion', label: 'Solcellsinspektion' },
    { href: '/tjanster/termisk-inspektion', label: 'Termisk inspektion' },
    { href: '/branscher/energi', label: 'Energibranschen' },
  ],
  relatedArticles: [
    'sa-fungerar-termografi-med-dronare',
    'vad-ar-dronarinspektion',
    'besiktning-av-solcellsanlaggning-checklista',
  ],
}
