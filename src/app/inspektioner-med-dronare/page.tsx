import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { serviceSchema } from '@/lib/schema'
import { Hero } from '@/components/Hero'
import { TrustBar } from '@/components/TrustBar'
import { UseCaseCards } from '@/components/UseCaseCards'
import { BenefitsGrid } from '@/components/BenefitsGrid'
import { IndustriesServed } from '@/components/IndustriesServed'
import { ProcessSteps } from '@/components/ProcessSteps'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = createMetadata({
  title: 'Inspektioner med drönare – Tak, fasad, solceller & industri',
  description:
    'Professionella drönarinspektioner för fastighetsägare och företag. Takinspektion, fasadinspektion, solcellsinspektion och byggplatsdokumentation – snabbare, säkrare och mer kostnadseffektivt.',
  path: '/inspektioner-med-dronare',
})

export default function InspektionerHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Drönarinspektioner',
              description:
                'Professionella drönarinspektioner för tak, fasader, solceller, byggen och industri.',
              url: '/inspektioner-med-dronare',
            })
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { name: 'Hem', url: '/' },
          { name: 'Inspektioner med drönare', url: '/inspektioner-med-dronare' },
        ]}
      />

      <Hero
        headline="Professionella drönarinspektioner för företag"
        subheadline="Inspektera tak, fasader, solceller och industrianläggningar med drönarteknik. Ni får snabb, säker och kostnadseffektiv dokumentation — utan ställningar, skylift eller arbete på höjd."
        ctaPrimary={{ label: 'Begär offert', href: '/inspektioner-med-dronare/kontakt' }}
        ctaSecondary={{ label: 'Se priser', href: '/inspektioner-med-dronare/priser' }}
        proofItems={[
          'Certifierade drönarpilot­er',
          'Ansvarsförsäkring',
          'Leverans inom 48 h',
          'Verksamma i hela Sverige',
        ]}
      />

      <TrustBar
        items={[
          'EASA-certifierade piloter',
          'Fullt ansvarsförsäkrade',
          'Hela Sverige',
          'Rapport inom 48 timmar',
        ]}
      />

      <UseCaseCards
        headline="Våra inspektionstjänster"
        subtitle="Vi erbjuder drönarinspektion anpassad för olika typer av fastigheter och projekt."
        useCases={[
          {
            title: 'Takinspektion med drönare',
            description: 'Identifiera skador, slitage och läckage på tak utan att behöva beträda takytan. Passar alla typer av byggnader.',
            href: '/inspektioner-med-dronare/takinspektion',
            icon: '🏠',
          },
          {
            title: 'Fasadinspektion med drönare',
            description: 'Kartlägg fasadens skick och dokumentera sprickor, fukt, mögel eller andra skador med högupplösta bilder.',
            href: '/inspektioner-med-dronare/fasadinspektion',
            icon: '🏢',
          },
          {
            title: 'Solcellsinspektion',
            description: 'Upptäck defekta celler, hotspots och nedsmutsning som påverkar er anläggnings prestanda.',
            href: '/inspektioner-med-dronare/solcellsinspektion',
            icon: '☀️',
          },
          {
            title: 'Byggplatsdokumentation',
            description: 'Regelbundna flygfotografier och ortofoto för att följa byggprojektets framsteg och kvalitet.',
            href: '/inspektioner-med-dronare/byggplatsdokumentation',
            icon: '🏗️',
          },
          {
            title: 'Industriell inspektion',
            description: 'Inspektera cisterner, skorstenar, master och andra svåråtkomliga strukturer utan driftstopp.',
            href: '/inspektioner-med-dronare/industriell-inspektion',
            icon: '🏭',
          },
        ]}
      />

      <BenefitsGrid
        headline="Fördelar med drönarinspektion"
        subtitle="Jämfört med traditionella inspektionsmetoder erbjuder drönare betydande fördelar."
        benefits={[
          {
            title: 'Minskad arbetsmiljörisk',
            description: 'Ingen behöver arbeta på höga höjder. Inspektionen utförs från marken med drönare.',
            icon: 'shield',
          },
          {
            title: 'Snabbare resultat',
            description: 'En inspektion som normalt tar dagar kan genomföras på timmar, med rapport inom 48 timmar.',
            icon: 'clock',
          },
          {
            title: 'Lägre totalkostnad',
            description: 'Inga kostnader för ställningar, skylift eller omfattande säkerhetsåtgärder.',
            icon: 'chart',
          },
          {
            title: 'Detaljerad bilddata',
            description: 'Högupplösta flygbilder ger ett bättre beslutsunderlag för underhåll och renovering.',
            icon: 'camera',
          },
          {
            title: 'Spårbar dokumentation',
            description: 'Allt material lagras digitalt och kan jämföras över tid för att följa förändring.',
            icon: 'file',
          },
          {
            title: 'Minimal störning',
            description: 'Verksamheten i byggnaden kan pågå som vanligt under inspektionen.',
            icon: 'building',
          },
        ]}
      />

      <IndustriesServed
        headline="Branscher vi arbetar med"
        industries={[
          { name: 'Fastighetsförvaltning', description: 'Löpande inspektion av tak och fasader för bostadsrättsföreningar och hyresfastigheter.' },
          { name: 'Bygg & entreprenad', description: 'Dokumentation av byggplatser, kvalitetskontroller och projektuppföljning.' },
          { name: 'Industri & logistik', description: 'Inspektion av lager, produktionsanläggningar och svåråtkomliga strukturer.' },
          { name: 'Energi & solcellsparker', description: 'Kontroll av solcellsanläggningar för optimal drift och underhåll.' },
          { name: 'Kommuner & offentlig sektor', description: 'Inspektion av offentliga byggnader, skolor och infrastruktur.' },
          { name: 'Försäkring & skadereglering', description: 'Snabb och objektiv dokumentation vid skadeärenden.' },
        ]}
      />

      <ProcessSteps
        headline="Så går en drönarinspektion till"
        steps={[
          {
            number: 1,
            title: 'Kontakt & behovsanalys',
            description: 'Ni berättar om ert objekt och era behov. Vi föreslår upplägg och lämnar offert.',
          },
          {
            number: 2,
            title: 'Planering & tillstånd',
            description: 'Vi planerar flygningen och säkerställer att alla tillstånd och säkerhetskrav är uppfyllda.',
          },
          {
            number: 3,
            title: 'Inspektion på plats',
            description: 'Certifierad pilot genomför flygningen och samlar in högupplöst bild- och videodata.',
          },
          {
            number: 4,
            title: 'Rapport & leverans',
            description: 'Ni får en tydlig rapport med bilder, noteringar och rekommendationer — normalt inom 48 timmar.',
          },
        ]}
      />

      <FaqAccordion
        headline="Vanliga frågor om drönarinspektion"
        items={[
          {
            question: 'Hur lång tid tar en typisk drönarinspektion?',
            answer: 'En inspektion på plats tar normalt mellan 1–3 timmar beroende på objektets storlek och komplexitet. Rapporten levereras sedan inom 48 timmar.',
          },
          {
            question: 'Behövs det tillstånd för att flyga drönare vid en inspektion?',
            answer: 'Vi sköter alla nödvändiga tillstånd och anmälningar. Våra piloter är EASA-certifierade och vi följer Transportstyrelsens regler för drönare.',
          },
          {
            question: 'Kan ni flyga i tätbebyggda områden?',
            answer: 'Ja, vi har tillstånd och kompetens att operera i tätbebyggt område. Vi genomför alltid en riskbedömning innan varje flygning.',
          },
          {
            question: 'Vad ingår i rapporten?',
            answer: 'Rapporten innehåller högupplösta bilder med annoteringar, en sammanfattning av identifierade problem och rekommendationer för åtgärder.',
          },
          {
            question: 'Hur mycket kostar en drönarinspektion?',
            answer: 'Priset beror på objektets storlek, typ och komplexitet. Kontakta oss för en kostnadsfri offert anpassad efter ert behov.',
          },
        ]}
      />

      <CtaBand
        headline="Boka en drönarinspektion"
        description="Kontakta oss för en kostnadsfri offert. Vi återkommer inom en arbetsdag."
        ctaLabel="Begär offert"
      />
    </>
  )
}
