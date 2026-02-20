import { Hero } from '@/components/Hero'
import { TrustBar } from '@/components/TrustBar'
import { UseCaseCards } from '@/components/UseCaseCards'
import { BenefitsGrid } from '@/components/BenefitsGrid'
import { ProcessSteps } from '@/components/ProcessSteps'
import { CtaBand } from '@/components/CtaBand'

export default function HomePage() {
  return (
    <>
      <Hero
        headline="Drönarinspektioner som sparar tid, pengar och risker"
        subheadline="Vi hjälper fastighetsägare, förvaltare och byggföretag att inspektera tak, fasader, solceller och industrianläggningar — snabbare och säkrare än traditionella metoder."
        ctaPrimary={{ label: 'Begär offert', href: '/inspektioner-med-dronare/kontakt' }}
        ctaSecondary={{ label: 'Se våra tjänster', href: '/inspektioner-med-dronare' }}
        proofItems={[
          'Certifierade drönarpilot­er',
          'Ansvarsförsäkring',
          'Snabb leverans av rapport',
        ]}
      />

      <TrustBar
        items={[
          'Certifierade enligt EASA',
          'Ansvarsförsäkrade',
          'Verksamma i hela Sverige',
          'Leverans inom 48 h',
        ]}
      />

      <UseCaseCards
        headline="Inspektioner anpassade för ert behov"
        subtitle="Välj den tjänst som passar er fastighet, anläggning eller byggprojekt."
        useCases={[
          {
            title: 'Takinspektion',
            description: 'Identifiera skador, slitage och underhållsbehov utan att beträda taket.',
            href: '/inspektioner-med-dronare/takinspektion',
            icon: '🏠',
          },
          {
            title: 'Fasadinspektion',
            description: 'Dokumentera fasadens skick och upptäck sprickor, fukt eller skador.',
            href: '/inspektioner-med-dronare/fasadinspektion',
            icon: '🏢',
          },
          {
            title: 'Solcellsinspektion',
            description: 'Kontrollera solcellspaneler för defekter, smuts och prestandaproblem.',
            href: '/inspektioner-med-dronare/solcellsinspektion',
            icon: '☀️',
          },
          {
            title: 'Byggplatsdokumentation',
            description: 'Följ byggprojektets framsteg med regelbundna flygbilder och 3D-modeller.',
            href: '/inspektioner-med-dronare/byggplatsdokumentation',
            icon: '🏗️',
          },
          {
            title: 'Industriell inspektion',
            description: 'Inspektera svåråtkomliga industrianläggningar utan driftstopp.',
            href: '/inspektioner-med-dronare/industriell-inspektion',
            icon: '🏭',
          },
        ]}
      />

      <BenefitsGrid
        headline="Varför välja drönarinspektion?"
        benefits={[
          {
            title: 'Minskad risk',
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
            title: 'Högupplöst dokumentation',
            description: 'Detaljerade flygbilder och video som ger tydlig beslutsgrund.',
            icon: 'camera',
          },
          {
            title: 'Tydlig rapportering',
            description: 'Ni får en sammanfattande rapport med bilder, noteringar och rekommendationer.',
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
            description: 'Ni beskriver ert behov och vi planerar inspektionens upplägg.',
          },
          {
            number: 2,
            title: 'Flygning & datainsamling',
            description: 'Certifierad pilot genomför flygningen och samlar in bild- och videodata.',
          },
          {
            number: 3,
            title: 'Analys & rapport',
            description: 'Vi analyserar materialet och sammanställer en tydlig rapport.',
          },
          {
            number: 4,
            title: 'Leverans & uppföljning',
            description: 'Ni får rapport och bildmaterial, med möjlighet till genomgång.',
          },
        ]}
      />

      <CtaBand
        headline="Redo att effektivisera era inspektioner?"
        description="Kontakta oss för en kostnadsfri genomgång av hur drönarteknik kan förbättra ert underhållsarbete."
        ctaLabel="Begär offert"
      />
    </>
  )
}
