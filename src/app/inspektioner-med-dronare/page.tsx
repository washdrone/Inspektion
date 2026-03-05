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
import { Testimonials } from '@/components/Testimonials'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = createMetadata({
  title: 'Drönare-Inspektion | SurveyDrone — Tak, Fasad, Solceller & Industri',
  description:
    'SurveyDrone erbjuder professionell drönare-inspektion med termisk kamera i hela Sverige. Tak, fasader, solceller, industri och byggdokumentation. EASA-certifierade piloter. Begär offert.',
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
        headline="Drönare-Inspektion med Termisk Kamera — Tak, Fasad, Solceller & Industri"
        subheadline="SurveyDrone inspekterar tak, fasader, solceller och industrianläggningar med termisk kamera och drönarteknik. Snabb, säker och kostnadseffektiv dokumentation — utan ställningar, skylift eller arbete på höjd."
        ctaPrimary={{ label: 'Begär offert', href: '/inspektioner-med-dronare/kontakt' }}
        ctaSecondary={{ label: 'Se prisguide', href: '/inspektioner-med-dronare/priser' }}
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
          'Verksamma i hela Sverige',
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
            description: 'En inspektion som normalt tar dagar kan genomföras på timmar, med rapport normalt inom ett par arbetsdagar.',
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
            description: 'Ni får en tydlig rapport med bilder, noteringar och rekommendationer — normalt normalt inom ett par arbetsdagar.',
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
        headline="Vanliga frågor om drönarinspektion"
        items={[
          {
            question: 'Hur lång tid tar en typisk drönarinspektion?',
            answer: 'En inspektion på plats tar normalt mellan 1–3 timmar beroende på objektets storlek och komplexitet. Rapporten levereras sedan normalt inom ett par arbetsdagar.',
          },
          {
            question: 'Behövs det tillstånd för att flyga drönare vid en inspektion?',
            answer: 'Vi sköter alla nödvändiga tillstånd och anmälningar. Våra piloter är EASA-certifierade och vi följer Transportstyrelsens regler för drönare i Sverige.',
          },
          {
            question: 'Kan ni flyga i tätbebyggda områden?',
            answer: 'Ja, vi har kompetens och rutiner för att operera säkert i tätbebyggda områden. Vi genomför alltid en riskbedömning och anmälan enligt gällande regler.',
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
