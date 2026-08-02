import type { Article } from './types'

export const dronarinspektionVsTraditionell: Article = {
  slug: 'dronarinspektion-vs-traditionell-inspektion',
  title: 'Drönarinspektion vs traditionell inspektion — vad passar när?',
  metaTitle: 'Drönarinspektion vs traditionell inspektion',
  description:
    'Jämförelse mellan drönarinspektion och traditionell besiktning med ställning, skylift eller klättring: säkerhet, dokumentation, kostnad och begränsningar — och när metoderna kompletterar varandra.',
  category: 'Grunder & metoder',
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  intro:
    'Drönarinspektion ersätter i många fall ställning, skylift och klättring för själva inspektionsmomentet — den är snabbare att genomföra, tar bort risken med arbete på höjd och ger en mer komplett bilddokumentation. Traditionella metoder behåller dock sin roll när något ska undersökas fysiskt: knacka på puts, mäta fukt med direktkontakt eller öppna upp konstruktioner. I praktiken kompletterar metoderna varandra.',
  sections: [
    {
      heading: 'Jämförelsen i korthet',
      blocks: [
        {
          type: 'table',
          caption: 'Drönarinspektion jämfört med traditionell inspektion',
          headers: ['Aspekt', 'Drönarinspektion', 'Traditionell inspektion'],
          rows: [
            [
              'Säkerhet',
              'Ingen vistelse på höjd — piloten står på marken.',
              'Arbete på höjd med krav på fallskydd, ställning eller lift.',
            ],
            [
              'Etablering',
              'Ingen etablering — drönaren startar från marken.',
              'Ställning eller skylift ska beställas, etableras och avetableras.',
            ],
            [
              'Genomförandetid',
              'Ofta timmar för en normalstor fastighet.',
              'Ofta dagar inklusive etablering, beroende på objekt.',
            ],
            [
              'Dokumentation',
              'Systematisk, georefererad och jämförbar bilddokumentation av hela ytan.',
              'Beror på besiktningspersonens anteckningar och foton från åtkomliga punkter.',
            ],
            [
              'Termisk analys',
              'Kan ingå i samma flygning.',
              'Kräver separat termografering, ofta med begränsad betraktningsvinkel.',
            ],
            [
              'Fysisk undersökning',
              'Inte möjlig — beröringsfri metod.',
              'Möjlig: knackning, fuktmätning, provtagning, demontering.',
            ],
            [
              'Väderberoende',
              'Kan inte flyga i hård vind eller kraftig nederbörd.',
              'Mindre väderkänslig men påverkas också av halka och vind.',
            ],
          ],
        },
      ],
    },
    {
      heading: 'När är drönaren rätt val?',
      blocks: [
        {
          type: 'list',
          items: [
            '**Regelbunden statuskontroll** — årlig översyn av tak och fasader utan kostnad för ställning. Se [takinspektion](/tjanster/takinspektion) och [fasadinspektion](/tjanster/fasadinspektion).',
            '**Svåråtkomliga objekt** — höga byggnader, branta tak, skorstenar, master och [industrianläggningar](/tjanster/industriinspektion).',
            '**Stora ytor** — solcellsparker, stora takytor och fastighetsbestånd där manuell inspektion tar orimligt lång tid.',
            '**Inför upphandling** — ett dokumenterat nuläge gör att entreprenörer kan offerera på samma underlag.',
            '**Efter storm eller händelse** — snabb skadebedömning utan att invänta ställning, ofta viktigt i försäkringsärenden.',
          ],
        },
      ],
    },
    {
      heading: 'När behövs traditionell besiktning?',
      blocks: [
        {
          type: 'list',
          items: [
            '**Fysisk verifiering** — misstänkt putssläpp behöver knackas, fukt behöver mätas i materialet, infästningar behöver dras åt eller provbelastas.',
            '**Dolda utrymmen** — vindar, krypgrunder och schakt som inte kan ses utifrån.',
            '**Åtgärdsarbete** — när reparation ändå ska utföras finns ställningen redan på plats för fördjupad kontroll.',
            '**Formella besiktningar** — vissa besiktningsformer kräver enligt avtal eller praxis fysisk närvaro av certifierad besiktningsperson.',
          ],
        },
      ],
    },
    {
      heading: 'Det smarta arbetssättet: kombinera metoderna',
      blocks: [
        {
          type: 'p',
          text: 'Det mest kostnadseffektiva arbetssättet är ofta tvåstegsprincipen: låt drönaren kartlägga hela objektet först, och rikta sedan fysiska insatser exakt dit de behövs. I stället för att bygga ställning runt hela fasaden "för säkerhets skull" byggs den bara där drönardokumentationen visat att åtgärd krävs. Drönarrapporten blir samtidigt ett objektivt underlag för offertförfrågan och uppföljning av utfört arbete.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Är drönarinspektion billigare än traditionell inspektion?',
      answer:
        'För inspektionsmomentet är kostnaden ofta lägre eftersom ställning, lift och etableringstid utgår. Den totala besparingen beror på objektet — störst blir den på höga, branta eller svåråtkomliga byggnader. Begär offert för en konkret jämförelse för just ert objekt.',
    },
    {
      question: 'Kan en drönarrapport användas i försäkringsärenden?',
      answer:
        'Ja, daterad och georefererad bilddokumentation är ett bra underlag vid skadeanmälan. Kontrollera med ditt försäkringsbolag vilka krav de ställer i det enskilda ärendet.',
    },
    {
      question: 'Missar drönaren skador som en besiktningsperson skulle hitta?',
      answer:
        'Drönaren ser ytan i högre detalj än ögat på avstånd, men den kan inte känna, knacka eller mäta i materialet. Skador utan visuellt eller termiskt uttryck kan därför kräva fysisk undersökning. Därför rekommenderar vi kombinationen: kartlägg med drönare, verifiera fysiskt där det behövs.',
    },
  ],
  relatedServices: [
    { href: '/tjanster/takinspektion', label: 'Takinspektion' },
    { href: '/tjanster/fasadinspektion', label: 'Fasadinspektion' },
    { href: '/hur-det-gar-till', label: 'Hur det går till' },
  ],
  relatedArticles: [
    'vad-ar-dronarinspektion',
    'sa-gar-en-takinspektion-till',
    'regler-for-dronarflygning-i-sverige',
  ],
}
