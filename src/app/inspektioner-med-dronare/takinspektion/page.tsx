import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { serviceSchema, faqSchema } from '@/lib/schema'
import { Hero } from '@/components/Hero'
import { TrustBar } from '@/components/TrustBar'
import { BenefitsGrid } from '@/components/BenefitsGrid'
import { ProcessSteps } from '@/components/ProcessSteps'
import { Deliverables } from '@/components/Deliverables'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { RelatedServices } from '@/components/RelatedServices'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = createMetadata({
  title: 'Takinspektion med Drönare | SurveyDrone — Hela Sverige',
  description:
    'Professionell takinspektion med drönare och termisk kamera. Identifiera skador, fukt, köldbryggor och slitage utan att beträda taket. PDRA S-01-certifierat. Rapport inom 48 h.',
  path: '/inspektioner-med-dronare/takinspektion',
})

const faqItems = [
  {
    question: 'Hur fungerar takinspektion med drönare?',
    answer: 'Vi flyger med drönare utrustade med termisk kamera och högupplöst RGB-kamera. Den termiska kameran identifierar fukt, köldbryggor och skador som är osynliga för blotta ögat. Hela taket dokumenteras systematiskt och ni får en detaljerad rapport med bilder och åtgärdsförslag inom 48 timmar.',
  },
  {
    question: 'Vad kostar takinspektion med drönare?',
    answer: 'Priset varierar beroende på takarea, komplexitet och typ av inspektion. En standardinspektion av ett villatak startar från ca 3 500 SEK. Större fastigheter och industrianläggningar prissätts separat. Kontakta oss för en kostnadsfri offert.',
  },
  {
    question: 'Vilka typer av tak kan inspekteras med drönare?',
    answer: 'Vi inspekterar alla typer av tak — platta tak, sadeltak, pulpettak och komplexa takformer. Materialet spelar ingen roll: tegel, plåt, papp, betong eller gröna tak. Drönaren anpassas efter takets form och storlek.',
  },
  {
    question: 'Kan drönaren hitta dolda fuktskador i taket?',
    answer: 'Ja, med termisk kamera kan vi identifiera fuktansamlingar och köldbryggor som inte syns med blotta ögat. Termisk imaging visar temperaturskillnader som avslöjar fukt under takmaterialet utan destruktiv provtagning.',
  },
  {
    question: 'Hur ofta bör man inspektera taket?',
    answer: 'Vi rekommenderar en takinspektion minst en gång per år, eller efter kraftig storm, hagel eller andra extrema väderhändelser. Regelbundna inspektioner förebygger kostsamma reparationer.',
  },
  {
    question: 'Hur skiljer sig drönarinspektion från traditionell takinspektion?',
    answer: 'Traditionell inspektion kräver byggnadsställningar, skylift eller att en person beträder taket — vilket medför både kostnader och arbetsmiljörisker. Med drönare inspekteras taket från luften, upp till 80% snabbare och till betydligt lägre kostnad. Dessutom ger termisk kamera data som traditionell inspektion inte kan leverera.',
  },
  {
    question: 'Vad ingår i rapporten från en takinspektion?',
    answer: 'Rapporten innehåller högupplösta flygbilder med annoteringar, termiska bilder (vid termisk inspektion), en sammanfattning av identifierade problem, gradering av skadornas allvarlighet och prioriterade rekommendationer för åtgärder.',
  },
  {
    question: 'Kan ni inspektera tak på BRF-fastigheter?',
    answer: 'Ja, vi arbetar regelbundet med bostadsrättsföreningar och deras förvaltare. Drönare-inspektion är idealisk för BRF:er som vill ha effektiv och kostnadseffektiv takkontroll som beslutsunderlag för underhållsplaner.',
  },
]

export default function TakinspektionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Takinspektion med Drönare',
              description: 'Professionell takinspektion med drönare och termisk kamera. Vi identifierar skador, fukt, köldbryggor och konstruktionsfel utan skylift.',
              url: '/inspektioner-med-dronare/takinspektion',
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqItems)) }}
      />

      <Breadcrumbs
        items={[
          { name: 'Hem', url: '/' },
          { name: 'Inspektioner med drönare', url: '/inspektioner-med-dronare' },
          { name: 'Takinspektion', url: '/inspektioner-med-dronare/takinspektion' },
        ]}
      />

      <Hero
        headline="Takinspektion med Drönare — Termisk Kamera & Visuell Analys"
        subheadline="Identifiera skador, fukt, köldbryggor och slitage på ert tak — snabbt, säkert och utan att någon behöver beträda takytan. Perfekt för fastighetsägare, BRF:er och förvaltare."
        ctaPrimary={{ label: 'Begär offert för takinspektion', href: '/inspektioner-med-dronare/kontakt' }}
        stats={[
          { value: 'Upp till 50%', label: 'Lägre kostnad vs ställning' },
          { value: '1–3h', label: 'Inspektion på plats' },
          { value: '48h', label: 'Rapportleverans' },
          { value: '0', label: 'Arbete på höjd' },
        ]}
      />

      <TrustBar
        items={[
          'PDRA S-01-certifierade',
          'EASA-certifierade fjärrpiloter',
          'Termisk kamera & RGB',
          'Alla taktyper och material',
        ]}
      />

      <BenefitsGrid
        headline="Varför välja drönarinspektion av tak?"
        benefits={[
          {
            title: 'Termisk + visuell analys',
            description: 'Kombinerar termisk kamera med RGB för att avslöja fukt, köldbryggor och ytskador.',
            icon: 'camera',
          },
          {
            title: 'Ingen risk för fall',
            description: 'Personal behöver inte beträda taket. All dokumentation sker från luften.',
            icon: 'shield',
          },
          {
            title: 'Snabbt genomförande',
            description: 'De flesta tak inspekteras på 1–2 timmar, utan förberedelse av ställningar.',
            icon: 'clock',
          },
          {
            title: 'Kostnadseffektivt',
            description: 'Inga utgifter för byggnadsställningar, skylift eller fallskyddsutrustning.',
            icon: 'chart',
          },
          {
            title: 'Jämförbar dokumentation',
            description: 'Digital lagring gör det enkelt att jämföra takets skick mellan inspektioner.',
            icon: 'file',
          },
          {
            title: 'Ingen driftstörning',
            description: 'Verksamheten under taket kan pågå som vanligt under hela inspektionen.',
            icon: 'building',
          },
        ]}
      />

      <Deliverables
        headline="Det här får ni"
        items={[
          {
            title: 'Termisk rapport',
            description: 'Termiska bilder som visar fukt, köldbryggor och dolda skador i taket.',
          },
          {
            title: 'Högupplösta RGB-flygbilder',
            description: 'Detaljerade bilder av hela takytan med synliga skador markerade.',
          },
          {
            title: 'Skadeinventering & åtgärdsförslag',
            description: 'Tydliga prioriteringar av vad som bör åtgärdas nu och vad som kan vänta.',
          },
          {
            title: 'Digitalt bildarkiv',
            description: 'Allt material levereras digitalt för enkel delning och framtida jämförelser.',
          },
        ]}
      />

      <ProcessSteps
        headline="Så går en takinspektion till"
        steps={[
          {
            number: 1,
            title: 'Behovsanalys',
            description: 'Ni beskriver fastigheten och eventuella problem. Vi planerar insatsen och lämnar offert.',
          },
          {
            number: 2,
            title: 'Flygning med termisk & RGB-kamera',
            description: 'PDRA S-01-certifierad pilot flyger drönaren över taket och samlar in termisk och visuell data.',
          },
          {
            number: 3,
            title: 'Analys',
            description: 'Vi granskar termisk och visuell data och identifierar skador, fukt och risker.',
          },
          {
            number: 4,
            title: 'Leverans',
            description: 'Ni får rapport med termiska bilder, RGB-bilder och åtgärdsförslag inom 48 timmar.',
          },
        ]}
      />

      <FaqAccordion headline="Vanliga frågor om takinspektion med drönare" items={faqItems} />

      <RelatedServices
        services={[
          {
            title: 'Fasadinspektion med drönare',
            href: '/inspektioner-med-dronare/fasadinspektion',
            description: 'Dokumentera sprickor, fukt och skador på fasaden utan ställningar.',
          },
          {
            title: 'Solcellsinspektion med termisk kamera',
            href: '/inspektioner-med-dronare/solcellsinspektion',
            description: 'Hitta hotspots och defekta paneler med termisk analys.',
          },
          {
            title: 'Industriell inspektion',
            href: '/inspektioner-med-dronare/industriell-inspektion',
            description: 'Inspektera svåråtkomliga industrianläggningar utan driftstopp.',
          },
        ]}
      />

      <CtaBand
        headline="Boka takinspektion med drönare"
        description="Kontakta oss för en kostnadsfri offert. Vi inspekterar alla typer av tak i hela Sverige med termisk kamera."
        ctaLabel="Begär offert"
      />
    </>
  )
}
