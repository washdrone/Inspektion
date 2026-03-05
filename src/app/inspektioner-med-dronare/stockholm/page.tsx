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
  title: 'Drönarinspektion Stockholm | SurveyDrone — Tak, Fasad & Solceller',
  description:
    'Professionell drönarinspektion i Stockholm och Stockholms län. Tak, fasader, solceller och industri med termisk kamera. EASA-certifierade piloter. Begär offert.',
  path: '/inspektioner-med-dronare/stockholm',
})

const faqItems = [
  {
    question: 'Utför ni drönarinspektioner i hela Stockholmsområdet?',
    answer: 'Ja, vi utför inspektioner i hela Stockholm och Stockholms län — inklusive Solna, Sundbyberg, Nacka, Huddinge, Täby, Lidingö och övriga kranskommuner.',
  },
  {
    question: 'Kan ni flyga drönare i Stockholms innerstad?',
    answer: 'Vi har kompetens och rutiner för att operera i tätbebyggda områden. Vi genomför alltid en riskbedömning och hanterar nödvändiga anmälningar innan flygning i stadsmiljö.',
  },
  {
    question: 'Vilka typer av fastigheter inspekterar ni i Stockholm?',
    answer: 'Vi inspekterar alla typer — flerbostadshus, villor, kommersiella fastigheter, industribyggnader, BRF-fastigheter och offentliga byggnader. Stockholm har en mix av äldre och nyare bebyggelse som alla kan dra nytta av drönarinspektion.',
  },
  {
    question: 'Hur bokar jag en drönarinspektion i Stockholm?',
    answer: 'Kontakta oss via formuläret eller e-post med en beskrivning av ert objekt. Vi återkommer med en offert och förslag på tid.',
  },
]

export default function StockholmPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Drönarinspektion Stockholm',
              description: 'Professionell drönarinspektion i Stockholm. Tak, fasader, solceller och industri med termisk kamera.',
              url: '/inspektioner-med-dronare/stockholm',
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
          { name: 'Stockholm', url: '/inspektioner-med-dronare/stockholm' },
        ]}
      />

      <Hero
        headline="Drönarinspektion Stockholm — Tak, Fasad, Solceller & Industri"
        subheadline="SurveyDrone erbjuder professionell drönarinspektion i Stockholm och Stockholms län. Inspektera tak, fasader och solceller med termisk kamera — snabbt, säkert och kostnadseffektivt."
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
          'Stockholm & kranskommuner',
        ]}
      />

      <BenefitsGrid
        headline="Drönarinspektion i Stockholmsområdet"
        benefits={[
          {
            title: 'Flerbostadshus & BRF',
            description: 'Stockholms stora bestånd av flerbostadshus gör drönarinspektion till ett kostnadseffektivt val för förvaltare och BRF-styrelser.',
            icon: 'building',
          },
          {
            title: 'Kommersiella fastigheter',
            description: 'Kontorsbyggnader, köpcentrum och andra kommersiella fastigheter i Stockholmsregionen.',
            icon: 'chart',
          },
          {
            title: 'Solcellsanläggningar',
            description: 'Identifiera hotspots och defekta paneler i Stockholmsområdets växande solcellsbestånd.',
            icon: 'camera',
          },
          {
            title: 'Industriområden',
            description: 'Inspektera industrianläggningar i områden som Värtahamnen, Årsta och Jordbro.',
            icon: 'shield',
          },
          {
            title: 'Stadsmiljö',
            description: 'Vi har erfarenhet av att operera i Stockholms tätbebyggda stadsmiljö med korrekt riskhantering.',
            icon: 'clock',
          },
          {
            title: 'Kranskommuner',
            description: 'Vi täcker hela Stockholms län inklusive Solna, Nacka, Huddinge, Täby och övriga kommuner.',
            icon: 'file',
          },
        ]}
      />

      <ProcessSteps
        headline="Så fungerar det i Stockholm"
        steps={[
          {
            number: 1,
            title: 'Kontakt & planering',
            description: 'Beskriv ert objekt i Stockholmsområdet. Vi planerar inspektion och lämnar offert.',
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

      <FaqAccordion headline="Vanliga frågor — drönarinspektion Stockholm" items={faqItems} />

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
        headline="Boka drönarinspektion i Stockholm"
        description="Kontakta oss för en kostnadsfri offert. Vi inspekterar fastigheter i hela Stockholms län."
        ctaLabel="Begär offert"
      />
    </>
  )
}
