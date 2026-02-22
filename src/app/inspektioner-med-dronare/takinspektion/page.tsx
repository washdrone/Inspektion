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
  title: 'Takinspektion med drönare – Snabb och säker takkontroll',
  description:
    'Professionell takinspektion med drönare för fastighetsägare och förvaltare. Identifiera skador, slitage och läckage utan att beträda taket. Rapport inom 48 h.',
  path: '/inspektioner-med-dronare/takinspektion',
})

const faqItems = [
  {
    question: 'Vilka typer av tak kan inspekteras med drönare?',
    answer: 'Vi inspekterar alla typer av tak — platta tak, sadeltak, pulpettak och komplexa takformer. Materialet spelar ingen roll: tegel, plåt, papp, betong eller gröna tak.',
  },
  {
    question: 'Kan drönaren se dolda skador under takmaterialet?',
    answer: 'Drönaren fotograferar takets yta med hög upplösning, vilket synliggör ytliga skador, sprickor, mossväxt och slitage. Dolda skador under takmaterialet kräver kompletterande metoder.',
  },
  {
    question: 'Hur ofta bör man inspektera taket?',
    answer: 'Vi rekommenderar en takinspek­tion minst en gång per år, eller efter kraftig storm, hagel eller andra extrema väder­händelser.',
  },
  {
    question: 'Hur skiljer sig drönarinspektion från traditionell takinspektion?',
    answer: 'Traditionell inspektion kräver byggnadsställningar, skylift eller att en person beträder taket — vilket medför både kostnader och arbetsmiljörisker. Med drönare inspekteras taket från luften, snabbare och säkrare.',
  },
  {
    question: 'Vad kostar en takinspektion med drönare?',
    answer: 'Priset varierar beroende på takets storlek och byggnadens placering. Kontakta oss för en offert anpassad efter ert objekt.',
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
              name: 'Takinspektion med drönare',
              description: 'Professionell takinspektion med drönare. Identifiera skador, slitage och läckage utan att beträda taket.',
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
        headline="Takinspektion med drönare"
        subheadline="Identifiera skador, slitage och underhållsbehov på ert tak — snabbt, säkert och utan att någon behöver beträda takytan. Perfekt för fastighetsägare, BRF:er och förvaltare."
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
          'EASA-certifierade fjärrpiloter',
          'Ansvarsförsäkrade',
          'Alla taktyper och material',
        ]}
      />

      <BenefitsGrid
        headline="Varför välja drönarinspektion av tak?"
        benefits={[
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
            title: 'Detaljerade flygbilder',
            description: 'Högupplösta bilder visar varje detalj — sprickor, mossväxt, brunnar och beslag.',
            icon: 'camera',
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
            title: 'Högupplösta flygbilder',
            description: 'Detaljerade bilder av hela takytan, tagna från optimala vinklar.',
          },
          {
            title: 'Rapport med noteringar',
            description: 'Sammanfattande rapport med identifierade problem markerade direkt på bilderna.',
          },
          {
            title: 'Rekommenderade åtgärder',
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
            description: 'Ni beskriver fastigheten och eventuella problem. Vi planerar insatsen.',
          },
          {
            number: 2,
            title: 'Flygning',
            description: 'Certifierad pilot flyger drönaren över taket och samlar in högupplöst data.',
          },
          {
            number: 3,
            title: 'Analys',
            description: 'Vi granskar bildmaterialet och identifierar skador, slitage och risker.',
          },
          {
            number: 4,
            title: 'Leverans',
            description: 'Ni får rapport med bilder och rekommendationer inom 48 timmar.',
          },
        ]}
      />

      <FaqAccordion headline="Vanliga frågor om takinspektion" items={faqItems} />

      <RelatedServices
        services={[
          {
            title: 'Fasadinspektion',
            href: '/inspektioner-med-dronare/fasadinspektion',
            description: 'Dokumentera fasadens skick och upptäck sprickor, fukt eller skador.',
          },
          {
            title: 'Solcellsinspektion',
            href: '/inspektioner-med-dronare/solcellsinspektion',
            description: 'Kontrollera solcellspaneler för defekter och nedsmutsning.',
          },
        ]}
      />

      <CtaBand
        headline="Boka takinspektion med drönare"
        description="Kontakta oss för en offert. Vi inspekterar alla typer av tak i hela Sverige."
        ctaLabel="Begär offert"
      />
    </>
  )
}
