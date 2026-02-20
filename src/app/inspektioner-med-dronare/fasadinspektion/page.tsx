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
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = createMetadata({
  title: 'Fasadinspektion med drönare – Dokumentera fasadens skick',
  description:
    'Professionell fasadinspektion med drönare. Kartlägg sprickor, fukt, mögel och skador på fasaden utan ställningar. Snabb rapport med högupplösta bilder.',
  path: '/inspektioner-med-dronare/fasadinspektion',
})

const faqItems = [
  {
    question: 'Vilka typer av fasader kan inspekteras?',
    answer: 'Vi inspekterar alla typer av fasader — puts, tegel, trä, metall, glas och kompositmaterial. Drönaren anpassar flygväg och kameravinkel efter fasadens utformning.',
  },
  {
    question: 'Kan drönaren nå fasader i trånga gaturum?',
    answer: 'Ja, vi använder kompakta drönare som kan operera i trånga utrymmen. Vi genomför alltid en platsbedömning för att säkerställa säker flygning.',
  },
  {
    question: 'Ser man fuktskador med en drönarinspektion?',
    answer: 'Visuella tecken på fukt som missfärgning, mögel och avflagning syns tydligt på högupplösta bilder. För att identifiera fukt inne i konstruktionen krävs kompletterande metoder.',
  },
  {
    question: 'Hur ofta bör man inspektera fasaden?',
    answer: 'En fasadinspektion vart tredje till femte år är en bra utgångspunkt, eller vid misstanke om skada efter stormar eller andra händelser.',
  },
]

export default function FasadinspektionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Fasadinspektion med drönare',
              description: 'Professionell fasadinspektion med drönare. Dokumentera sprickor, fukt och skador utan ställningar.',
              url: '/inspektioner-med-dronare/fasadinspektion',
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
          { name: 'Fasadinspektion', url: '/inspektioner-med-dronare/fasadinspektion' },
        ]}
      />

      <Hero
        headline="Fasadinspektion med drönare"
        subheadline="Dokumentera hela fasadens skick med högupplösta flygbilder. Identifiera sprickor, fuktskador, mögel och slitage — utan byggnadsställningar eller skylift."
        ctaPrimary={{ label: 'Begär offert för fasadinspektion', href: '/inspektioner-med-dronare/kontakt' }}
        stats={[
          { value: '48h', label: 'Rapport levererad' },
          { value: '100%', label: 'Fasadtäckning' },
          { value: '0kr', label: 'Ställningskostnad' },
        ]}
      />

      <TrustBar
        items={[
          'Certifierade piloter',
          'Ansvarsförsäkring',
          'Alla fasadmaterial',
          'Hög detaljnivå',
        ]}
      />

      <BenefitsGrid
        headline="Fördelar med drönarbaserad fasadinspektion"
        benefits={[
          {
            title: 'Eliminerar ställningskostnad',
            description: 'Ingen ställning behövs — sparar både tid och pengar vid inspektion av höga byggnader.',
            icon: 'chart',
          },
          {
            title: 'Säkrare metod',
            description: 'Ingen personal behöver arbeta på höjd eller hänga i rep.',
            icon: 'shield',
          },
          {
            title: 'Snabbt och smidigt',
            description: 'En fasadinspektion kan genomföras på ett par timmar istället för dagar.',
            icon: 'clock',
          },
          {
            title: 'Fullständig täckning',
            description: 'Hela fasaden dokumenteras systematiskt — inklusive svåråtkomliga ytor och höga partier.',
            icon: 'camera',
          },
          {
            title: 'Tydlig dokumentation',
            description: 'Detaljerade bilder med noteringar gör det enkelt att planera underhåll.',
            icon: 'file',
          },
          {
            title: 'Jämförelse över tid',
            description: 'Digitalt bildarkiv gör det möjligt att följa fasadens förändring mellan inspektioner.',
            icon: 'building',
          },
        ]}
      />

      <Deliverables
        headline="Det här ingår"
        items={[
          {
            title: 'Högupplösta fasadbilder',
            description: 'Detaljerade flygbilder av hela fasaden, organiserade per sida och våningsplan.',
          },
          {
            title: 'Skaderapport',
            description: 'Identifierade skador markerade på bilderna med beskrivning och gradering.',
          },
          {
            title: 'Underhållsrekommendationer',
            description: 'Förslag på prioriterade åtgärder baserat på identifierade brister.',
          },
          {
            title: 'Digitalt bildarkiv',
            description: 'Allt material levereras digitalt för enkel delning med styrelse eller entreprenör.',
          },
        ]}
      />

      <ProcessSteps
        headline="Så går en fasadinspektion till"
        steps={[
          {
            number: 1,
            title: 'Platsbedömning',
            description: 'Vi bedömer byggnaden och omgivningen för att planera flygningen.',
          },
          {
            number: 2,
            title: 'Systematisk flygning',
            description: 'Drönaren flygs metodiskt längs fasaden och fotograferar alla ytor.',
          },
          {
            number: 3,
            title: 'Analys av material',
            description: 'Vi granskar bilderna och noterar skador, avvikelser och slitage.',
          },
          {
            number: 4,
            title: 'Rapport & leverans',
            description: 'Ni får en tydlig rapport med bilder och rekommendationer.',
          },
        ]}
      />

      <FaqAccordion headline="Vanliga frågor om fasadinspektion" items={faqItems} />

      <CtaBand
        headline="Behöver ni inspektera en fasad?"
        description="Vi dokumenterar fasadens skick snabbt och säkert. Begär en offert idag."
        ctaLabel="Begär offert"
      />
    </>
  )
}
