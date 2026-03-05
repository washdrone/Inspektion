import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { faqSchema } from '@/lib/schema'
import { Hero } from '@/components/Hero'
import { TrustBar } from '@/components/TrustBar'
import { UseCaseCards } from '@/components/UseCaseCards'
import { BenefitsGrid } from '@/components/BenefitsGrid'
import { ProcessSteps } from '@/components/ProcessSteps'
import { Testimonials } from '@/components/Testimonials'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'

export const metadata: Metadata = createMetadata({
  title: 'SurveyDrone | Drönare-Inspektion Sverige — Termisk & Visuell',
  description:
    'SurveyDrone erbjuder professionell drönare-inspektion i Sverige. Tak, fasader, solceller & industri med termisk kamera. EASA-certifierade piloter. Begär offert.',
  path: '/',
})

const homeFaqItems = [
  {
    question: 'Hur fungerar drönare-inspektion med termisk kamera?',
    answer: 'Vi flyger med drönare utrustade med termisk kamera och högupplöst RGB-kamera. Den termiska kameran identifierar fukt, köldbryggor och skador som är osynliga för blotta ögat. Hela objektet dokumenteras systematiskt och ni får en detaljerad rapport med bilder och åtgärdsförslag normalt inom ett par arbetsdagar.',
  },
  {
    question: 'Vad kostar en drönarinspektion?',
    answer: 'Priset varierar beroende på objektets storlek, typ och komplexitet. Kontakta oss för en kostnadsfri offert anpassad efter ert behov.',
  },
  {
    question: 'Vilka certifieringar har SurveyDrone?',
    answer: 'Våra piloter är EASA-certifierade fjärrpiloter. Vi är ansvarsförsäkrade och följer alla gällande regler för kommersiell drönardrift i Sverige.',
  },
  {
    question: 'Var i Sverige utför ni inspektioner?',
    answer: 'Vi utför drönare-inspektioner i stora delar av Sverige. Kontakta oss för att diskutera ert uppdrag och placering.',
  },
  {
    question: 'Hur lång tid tar en drönarinspektion?',
    answer: 'En inspektion på plats tar normalt 1–3 timmar beroende på objektets storlek. Rapporten med bilder, noteringar och åtgärdsförslag levereras normalt inom ett par arbetsdagar.',
  },
  {
    question: 'Vad är skillnaden mellan drönare-inspektion och traditionell besiktning?',
    answer: 'Traditionell inspektion kräver byggnadsställningar, skylift eller att personal beträder taket — med höga kostnader och arbetsmiljörisker. Med drönare inspekteras objektet från luften, avsevärt snabbare och till betydligt lägre kostnad.',
  },
  {
    question: 'Kan drönare hitta fukt i tak och fasad?',
    answer: 'Ja, med termisk kamera kan vi identifiera fuktansamlingar, köldbryggor och dolda skador som inte syns med blotta ögat. Termisk inspektion är en av de mest effektiva metoderna för att upptäcka fuktproblem utan destruktiv provtagning.',
  },
  {
    question: 'Vilka branscher anlitar SurveyDrone?',
    answer: 'Vi arbetar med fastighetsbolag, BRF:er, energibolag, industri, kommuner, försäkringsbolag och byggföretag. Våra tjänster är anpassade för B2B-kunder med behov av regelbunden eller engångsinspektioner.',
  },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(homeFaqItems)) }}
      />

      <Hero
        headline="Drönare-Inspektion Sverige — Termisk Kamera & Högupplöst Bildanalys"
        subheadline="SurveyDrone hjälper fastighetsägare, förvaltare och företag att inspektera tak, fasader, solceller och industrianläggningar med termisk kamera och drönarteknik — snabbare, säkrare och billigare än traditionella metoder."
        ctaPrimary={{ label: 'Begär offert', href: '/inspektioner-med-dronare/kontakt' }}
        ctaSecondary={{ label: 'Se våra tjänster', href: '/inspektioner-med-dronare' }}
        stats={[
          { value: 'Betydligt', label: 'Lägre inspektionskostnad' },
          { value: 'Avsevärt', label: 'Snabbare genomförande' },
          { value: 'Snabb', label: 'Rapportleverans' },
          { value: '0', label: 'Arbete på höjd' },
        ]}
      />

      <TrustBar
        items={[
          'EASA-certifierade fjärrpiloter',
          'Ansvarsförsäkrade',
          'Termisk kamera & RGB',
          'Verksamma i Sverige',
        ]}
      />

      <UseCaseCards
        headline="Inspektioner anpassade för ert behov"
        subtitle="Välj den tjänst som passar er fastighet, anläggning eller byggprojekt."
        useCases={[
          {
            title: 'Takinspektion med drönare',
            description: 'Identifiera skador, fukt och köldbryggor med termisk kamera — utan att beträda taket.',
            href: '/inspektioner-med-dronare/takinspektion',
            icon: '🏠',
          },
          {
            title: 'Fasadinspektion med drönare',
            description: 'Dokumentera sprickor, fukt och skador på fasaden utan ställningar eller skylift.',
            href: '/inspektioner-med-dronare/fasadinspektion',
            icon: '🏢',
          },
          {
            title: 'Solcellsinspektion med termisk kamera',
            description: 'Hitta hotspots, defekta paneler och prestandaproblem med termisk analys.',
            href: '/inspektioner-med-dronare/solcellsinspektion',
            icon: '☀️',
          },
          {
            title: 'Byggplatsdokumentation',
            description: 'Följ byggprojektets framsteg med regelbundna flygbilder, ortofoto och 3D-modeller.',
            href: '/inspektioner-med-dronare/byggplatsdokumentation',
            icon: '🏗️',
          },
          {
            title: 'Industriell inspektion',
            description: 'Inspektera tankar, torn, pipelines och svåråtkomliga anläggningar utan driftstopp.',
            href: '/inspektioner-med-dronare/industriell-inspektion',
            icon: '🏭',
          },
        ]}
      />

      <BenefitsGrid
        headline="Varför välja SurveyDrone?"
        benefits={[
          {
            title: 'Termisk & visuell inspektion',
            description: 'Vi kombinerar termisk kamera med högupplöst RGB för komplett analys av dolda och synliga skador.',
            icon: 'camera',
          },
          {
            title: 'Minskad arbetsmiljörisk',
            description: 'Ingen personal behöver arbeta på höga höjder eller i farliga miljöer.',
            icon: 'shield',
          },
          {
            title: 'Snabbare genomförande',
            description: 'En inspektion som tidigare tog dagar kan utföras på några timmar.',
            icon: 'clock',
          },
          {
            title: 'Lägre kostnad',
            description: 'Inget behov av byggnadsställningar, skylift eller omfattande säkerhetsutrustning.',
            icon: 'chart',
          },
          {
            title: 'Certifierad kvalitet',
            description: 'EASA-certifierade piloter och ansvarsförsäkrad verksamhet garanterar professionell leverans.',
            icon: 'file',
          },
          {
            title: 'Minimal driftstörning',
            description: 'Inspektionen utförs utan att störa verksamheten i byggnaden.',
            icon: 'building',
          },
        ]}
      />

      <ProcessSteps
        headline="Så går det till"
        steps={[
          {
            number: 1,
            title: 'Kontakt & planering',
            description: 'Ni beskriver ert behov och vi planerar inspektionens upplägg och lämnar offert.',
          },
          {
            number: 2,
            title: 'Flygning & datainsamling',
            description: 'EASA-certifierad pilot genomför flygningen med termisk kamera och RGB-kamera.',
          },
          {
            number: 3,
            title: 'Analys & rapport',
            description: 'Vi analyserar termisk och visuell data och sammanställer en detaljerad rapport.',
          },
          {
            number: 4,
            title: 'Leverans & uppföljning',
            description: 'Ni får rapport med bilder och åtgärdsförslag, med möjlighet till genomgång.',
          },
        ]}
      />

      <Testimonials
        testimonials={[
          {
            quote: 'Vi inspekterade taken på flera fastigheter på kort tid istället för veckor. Rapporten var tydlig och gav oss ett bra beslutsunderlag för planerat underhåll.',
            name: 'Teknisk förvaltare',
            role: 'Fastighetsförvaltning',
            company: '',
          },
          {
            quote: 'Drönarinspektionen sparade oss både tid och pengar. Inga ställningar, ingen risk för personalen och vi fick bilderna snabbt.',
            name: 'Projektledare',
            role: 'Byggbranschen',
            company: '',
          },
          {
            quote: 'Tack vare inspektion med drönare hittade vi defekta paneler som vi aldrig hade upptäckt från marken. Det förbättrade vår anläggnings effekt.',
            name: 'Driftansvarig',
            role: 'Energibranschen',
            company: '',
          },
        ]}
      />

      <FaqAccordion
        headline="Vanliga frågor om drönare-inspektion"
        items={homeFaqItems}
      />

      <CtaBand
        headline="Redo att effektivisera era inspektioner?"
        description="Kontakta oss för en kostnadsfri offert. Vi erbjuder drönare-inspektion med termisk kamera i Sverige."
        ctaLabel="Begär offert"
      />
    </>
  )
}
