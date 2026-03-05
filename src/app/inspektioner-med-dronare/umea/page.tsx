import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { serviceSchema, faqSchema } from '@/lib/schema'
import { Hero } from '@/components/Hero'
import { TrustBar } from '@/components/TrustBar'
import { BenefitsGrid } from '@/components/BenefitsGrid'
import { ProcessSteps } from '@/components/ProcessSteps'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { RelatedServices } from '@/components/RelatedServices'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = createMetadata({
  title: 'Drönarinspektion Umeå | SurveyDrone — Tak, Fasad & Solceller',
  description:
    'Professionell drönarinspektion i Umeå och Västerbotten. Tak, fasader, solceller och industri med termisk kamera. EASA-certifierade piloter. Begär offert.',
  path: '/inspektioner-med-dronare/umea',
})

const faqItems = [
  {
    question: 'Utför ni drönarinspektioner i hela Västerbotten?',
    answer: 'Ja, vi utför inspektioner i Umeå och övriga Västerbotten — inklusive Skellefteå, Örnsköldsvik och andra kommuner i norra Sverige.',
  },
  {
    question: 'Kan ni flyga drönare under vintermånaderna i Umeå?',
    answer: 'Vi genomför inspektioner året runt, men väderförhållanden i norra Sverige kan påverka planering. Vi anpassar alltid flygning efter rådande förhållanden och säkerställer att data håller hög kvalitet.',
  },
  {
    question: 'Vilka typer av fastigheter inspekterar ni i Umeå?',
    answer: 'Vi inspekterar alla typer — flerbostadshus, villor, kommersiella fastigheter, industribyggnader, universitetslokaler och offentliga byggnader. Umeås mix av äldre och nyare bebyggelse kan alla dra nytta av drönarinspektion.',
  },
  {
    question: 'Hur bokar jag en drönarinspektion i Umeå?',
    answer: 'Kontakta oss via formuläret eller e-post med en beskrivning av ert objekt. Vi återkommer med en offert och förslag på tid.',
  },
]

export default function UmeaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Drönarinspektion Umeå',
              description: 'Professionell drönarinspektion i Umeå. Tak, fasader, solceller och industri med termisk kamera.',
              url: '/inspektioner-med-dronare/umea',
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
          { name: 'Umeå', url: '/inspektioner-med-dronare/umea' },
        ]}
      />

      <Hero
        headline="Drönarinspektion Umeå — Tak, Fasad, Solceller & Industri"
        subheadline="SurveyDrone erbjuder professionell drönarinspektion i Umeå och Västerbotten. Inspektera tak, fasader och solceller med termisk kamera — snabbt, säkert och kostnadseffektivt."
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
          'Umeå & Västerbotten',
        ]}
      />

      <BenefitsGrid
        headline="Drönarinspektion i Umeå och Västerbotten"
        benefits={[
          {
            title: 'Nordligt klimat & snölast',
            description: 'Tak i norra Sverige utsätts för stora snölaster och temperaturväxlingar. Drönarinspektion identifierar skador orsakade av det nordliga klimatet.',
            icon: 'building',
          },
          {
            title: 'Universitetsstaden Umeå',
            description: 'Campus- och utbildningslokaler, studentbostäder och offentliga byggnader i Umeå inspekteras effektivt med drönare.',
            icon: 'chart',
          },
          {
            title: 'Solcellsanläggningar',
            description: 'Identifiera hotspots och defekta paneler i Västerbottens växande solcellsbestånd med termisk kamera.',
            icon: 'camera',
          },
          {
            title: 'Industriområden',
            description: 'Inspektera industrianläggningar och tillverkningsfastigheter i Umeå och Skellefteå med drönare.',
            icon: 'shield',
          },
          {
            title: 'Väderpåfrestade fasader',
            description: 'Fasader i norra Sverige utsätts för extremt väder. Vi dokumenterar skador, fukt och sprickor utan ställningar.',
            icon: 'clock',
          },
          {
            title: 'Hela Västerbotten',
            description: 'Vi täcker Umeå, Skellefteå, Örnsköldsvik och övriga kommuner i Västerbotten.',
            icon: 'file',
          },
        ]}
      />

      <ProcessSteps
        headline="Så fungerar det i Umeå"
        steps={[
          {
            number: 1,
            title: 'Kontakt & planering',
            description: 'Beskriv ert objekt i Umeåområdet. Vi planerar inspektion och lämnar offert.',
          },
          {
            number: 2,
            title: 'Flygning & datainsamling',
            description: 'Certifierad pilot genomför flygningen med termisk kamera och RGB-kamera.',
          },
          {
            number: 3,
            title: 'Analys & rapport',
            description: 'Vi analyserar data och sammanställer en detaljerad rapport med åtgärdsförslag.',
          },
          {
            number: 4,
            title: 'Leverans & uppföljning',
            description: 'Ni får rapport med bilder och rekommendationer, med möjlighet till genomgång.',
          },
        ]}
      />

      <FaqAccordion headline="Vanliga frågor — drönarinspektion Umeå" items={faqItems} />

      <RelatedServices
        services={[
          {
            title: 'Takinspektion med drönare',
            href: '/inspektioner-med-dronare/takinspektion',
            description: 'Identifiera skador, fukt och köldbryggor med termisk kamera.',
          },
          {
            title: 'Fasadinspektion med drönare',
            href: '/inspektioner-med-dronare/fasadinspektion',
            description: 'Dokumentera sprickor, fukt och skador utan ställningar.',
          },
          {
            title: 'Solcellsinspektion',
            href: '/inspektioner-med-dronare/solcellsinspektion',
            description: 'Hitta hotspots och defekta paneler med termisk analys.',
          },
        ]}
      />

      <CtaBand
        headline="Boka drönarinspektion i Umeå"
        description="Kontakta oss för en kostnadsfri offert. Vi inspekterar fastigheter i Umeå och hela Västerbotten."
        ctaLabel="Begär offert"
      />
    </>
  )
}
