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
  title: 'SurveyDrone | Drönarinspektion Sverige — Termisk Kamera',
  description:
    'Professionell drönarinspektion med termisk kamera i hela Sverige. Tak, fasader, solceller och industri. EASA-certifierade piloter, fullradiometrisk datainsamling. Begär offert.',
  path: '/',
})

const homeFaqItems = [
  {
    question: 'Hur fungerar drönare-inspektion med termisk kamera?',
    answer: 'Vi flyger med kommersiell inspektionsklass-UAV utrustad med branschledande termisk kamera och högupplöst RGB-kamera. Den termiska kameran identifierar fukt, köldbryggor och skador osynliga för blotta ögat genom fullradiometrisk datainsamling. Hela objektet dokumenteras systematiskt och ni får en detaljerad rapport normalt inom 48 timmar.',
  },
  {
    question: 'Vad kostar drönare-inspektion?',
    answer: 'Priset beror på objektets storlek, typ av inspektion och placering. Kontakta oss för en kostnadsfri offert anpassad efter ert behov. Se vår prisguide för mer information om vad som påverkar priset.',
  },
  {
    question: 'Hur lång tid tar en takinspektion?',
    answer: 'En inspektion på plats tar normalt 1–4 timmar beroende på objektets storlek och komplexitet. Rapporten levereras normalt inom 48 timmar.',
  },
  {
    question: 'Behöver jag vara på plats under inspektionen?',
    answer: 'Nej, ni behöver inte vara på plats. Vi hanterar luftrumskontroll, planering och genomförande självständigt. Ni kan följa inspektionen i realtid via en säker länk om ni önskar.',
  },
  {
    question: 'Vad ingår i inspektionsrapporten?',
    answer: 'Rapporten innehåller högupplösta flygbilder, termiska bilder med fullradiometrisk data, identifierade avvikelser med georeferering, prioritetsklassning och rekommenderade åtgärder.',
  },
  {
    question: 'Vad är PDRA S-01 och varför är det viktigt?',
    answer: 'PDRA S-01 är ett europeiskt standardscenario för drönardrift i tätbebyggda områden. Det ställer krav på pilotens utbildning, operativa procedurer och riskbedömning — vilket säkerställer en säker och professionell inspektion.',
  },
  {
    question: 'Hur snabbt kommer rapporten?',
    answer: 'Rapporten levereras normalt inom 48 timmar efter genomförd flygning. Vid brådskande ärenden kan vi prioritera snabbare leverans.',
  },
  {
    question: 'Går det att inspektera på vintern?',
    answer: 'Ja, termisk inspektion fungerar ofta bättre under kyligare förhållanden eftersom temperaturskillnader mellan inomhus och utomhus blir tydligare. Vi anpassar flygtidpunkt efter väder och ljusförhållanden.',
  },
  {
    question: 'Kan drönare hitta fukt i tak?',
    answer: 'Ja, med fullradiometrisk termisk kamera identifierar vi fuktansamlingar och köldbryggor som inte syns med blotta ögat. Termisk inspektion är en av de mest effektiva metoderna för att upptäcka fuktproblem utan destruktiv provtagning.',
  },
  {
    question: 'Hur hittar man hotspots i solceller med drönare?',
    answer: 'Termisk kamera visar temperaturskillnader i solcellspaneler. Defekta celler, smutsiga ytor eller elektriska fel genererar avvikande värme (hotspots) som syns tydligt i termiska bilder tagna från luften.',
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
        headline="Drönarinspektion med termisk kamera — hela Sverige"
        subheadline="SurveyDrone hjälper fastighetsägare, förvaltare och företag att inspektera tak, fasader, solceller och industrianläggningar med branschledande termisk kamera och fullradiometrisk datainsamling — snabbare, säkrare och kostnadseffektivare än traditionella metoder."
        ctaPrimary={{ label: 'Begär offert', href: '/kontakt' }}
        ctaSecondary={{ label: 'Hur det går till', href: '/hur-det-gar-till' }}
        stats={[
          { value: 'Hela', label: 'Sverige' },
          { value: '1–4h', label: 'Inspektion på plats' },
          { value: '48h', label: 'Rapport levereras' },
          { value: '0', label: 'Arbete på höjd' },
        ]}
      />

      <TrustBar
        items={[
          'EASA-certifierade fjärrpiloter',
          'Ansvarsförsäkrade',
          'Fullradiometrisk termisk kamera',
          'RTK/GNSS-positionering',
        ]}
      />

      <UseCaseCards
        headline="Tjänster anpassade för ert behov"
        subtitle="Välj den inspektion som passar er fastighet, anläggning eller bransch."
        useCases={[
          {
            title: 'Takinspektion',
            description: 'Identifiera skador, fukt och köldbryggor med termisk kamera — utan att beträda taket.',
            href: '/tjanster/takinspektion',
            icon: '🏠',
          },
          {
            title: 'Fasadinspektion',
            description: 'Dokumentera sprickor, fukt och skador på fasaden utan ställningar eller skylift.',
            href: '/tjanster/fasadinspektion',
            icon: '🏢',
          },
          {
            title: 'Solcellsinspektion',
            description: 'Hitta hotspots, defekta paneler och prestandaproblem med termisk analys från luften.',
            href: '/tjanster/solcellsinspektion',
            icon: '☀️',
          },
          {
            title: 'Termisk inspektion',
            description: 'Fullradiometrisk datainsamling som avslöjar dolda skador i byggnader och anläggningar.',
            href: '/tjanster/termisk-inspektion',
            icon: '🌡️',
          },
          {
            title: 'Industriinspektion',
            description: 'Inspektera tankar, torn, pipelines och svåråtkomliga anläggningar utan driftstopp.',
            href: '/tjanster/industriinspektion',
            icon: '🏭',
          },
          {
            title: '3D-kartläggning',
            description: 'Ortofoto, 3D-modeller och fotogrammetri för mätning och dokumentation.',
            href: '/tjanster/3d-kartlaggning',
            icon: '📐',
          },
        ]}
      />

      <BenefitsGrid
        headline="Varför välja SurveyDrone?"
        benefits={[
          {
            title: 'Termisk & visuell inspektion',
            description: 'Fullradiometrisk termisk kamera kombinerat med högupplöst RGB för komplett analys av dolda och synliga skador.',
            icon: 'camera',
          },
          {
            title: 'Minskad arbetsmiljörisk',
            description: 'Ingen personal behöver arbeta på höga höjder eller i farliga miljöer.',
            icon: 'shield',
          },
          {
            title: 'Snabbare genomförande',
            description: 'En inspektion som tidigare tog dagar kan genomföras på 1–4 timmar.',
            icon: 'clock',
          },
          {
            title: 'Lägre kostnad',
            description: 'Inget behov av byggnadsställningar, skylift eller omfattande säkerhetsutrustning.',
            icon: 'chart',
          },
          {
            title: 'Certifierad kvalitet',
            description: 'EASA-certifierade piloter, ansvarsförsäkrad verksamhet och erfarenhet av ex-klassade zoner.',
            icon: 'file',
          },
          {
            title: 'Minimal driftstörning',
            description: 'Inspektionen utförs från luften utan att störa verksamheten i byggnaden eller på anläggningen.',
            icon: 'building',
          },
        ]}
      />

      <ProcessSteps
        headline="Så går det till"
        steps={[
          {
            number: 1,
            title: 'Offertförfrågan',
            description: 'Beskriv ert behov — vi svarar inom 24 timmar med en skräddarsydd offert.',
          },
          {
            number: 2,
            title: 'Planering',
            description: 'Vi kontrollerar luftrum och planerar flygningen. Ni behöver inte vara på plats.',
          },
          {
            number: 3,
            title: 'Flygning',
            description: 'EASA-certifierad pilot genomför inspektionen med termisk och RGB-kamera. 1–4 timmar.',
          },
          {
            number: 4,
            title: 'Analys',
            description: 'Alla avvikelser georefereras och prioritetsklassas med fullradiometrisk data.',
          },
          {
            number: 5,
            title: 'Rapport',
            description: 'Professionell PDF-rapport med bilder, analyser och åtgärdsförslag inom 48 timmar.',
          },
        ]}
      />

      <Testimonials
        testimonials={[
          {
            quote: 'Vi inspekterade taken på flera fastigheter på kort tid istället för veckor. Rapporten var tydlig och gav oss bra beslutsunderlag för planerat underhåll.',
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
            quote: 'Tack vare termisk inspektion med drönare hittade vi defekta paneler som vi aldrig hade upptäckt från marken.',
            name: 'Driftansvarig',
            role: 'Energibranschen',
            company: '',
          },
        ]}
      />

      <FaqAccordion
        headline="Vanliga frågor om drönarinspektion"
        items={homeFaqItems}
      />

      <CtaBand
        headline="Redo att effektivisera era inspektioner?"
        description="Kontakta oss för en kostnadsfri offert. Svar inom 24 timmar, rapport inom 48 timmar."
        ctaLabel="Begär offert"
      />
    </>
  )
}
