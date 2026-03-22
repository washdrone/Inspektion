import type { Metadata } from 'next'
import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { faqSchema } from '@/lib/schema'
import { Hero } from '@/components/Hero'
import { TrustBar } from '@/components/TrustBar'
import { BenefitsGrid } from '@/components/BenefitsGrid'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = createMetadata({
  title: 'Drönarinspektion Norrköping | Tak & Fasad | SurveyDrone',
  description:
    'Drönarinspektion i Norrköping med termisk kamera. Tak, fasader och solceller i Industrilandskapet, Ingelsta, Hageby och Linköping. Begär offert.',
  path: '/platser/inspektion-norrkoping',
})

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'SurveyDrone - Norrköping',
  description:
    'Professionell drönarinspektion i Norrköping och Östergötland. Tak, fasader, solceller och industri med termisk kamera. EASA-certifierade fjärrpiloter.',
  url: 'https://www.surveydrone.se/platser/inspektion-norrkoping',
  email: 'info@surveydrone.se',
  areaServed: {
    '@type': 'City',
    name: 'Norrköping',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 58.5877,
      longitude: 16.1924,
    },
  },
  parentOrganization: {
    '@type': 'ProfessionalService',
    '@id': 'https://www.surveydrone.se/#organization',
  },
}

const faqItems = [
  {
    question: 'Vilka områden i Norrköping täcker ni?',
    answer:
      'Vi utför drönarinspektioner i hela Norrköping — inklusive Industrilandskapet, Ingelsta, Hageby och centrala Norrköping. Vi täcker även Linköping och övriga Östergötland.',
  },
  {
    question: 'Kan ni inspektera de historiska industrifastigheterna i Industrilandskapet?',
    answer:
      'Ja, Norrköpings Industrilandskap med sina kulturhistoriska tegelbyggnader är fastigheter som drar stor nytta av drönarinspektion. Termisk kamera avslöjar fukt och skador utan ingrepp i de känsliga fasaderna.',
  },
  {
    question: 'Inspekterar ni handelsfastigheter i Ingelsta?',
    answer:
      'Absolut. Ingelsta handelsområde har stora kommersiella fastigheter med platta tak som inspekteras effektivt med drönare. Vi täcker hela handelsområdet.',
  },
  {
    question: 'Kan ni inspektera miljonprogramsområdet Hageby?',
    answer:
      'Ja, Hagebys flerbostadshus från miljonprogrammet har ofta renoveringsbehov. Termisk inspektion identifierar köldbryggor och fuktskador som underlag för underhållsplanering.',
  },
  {
    question: 'Täcker ni både Norrköping och Linköping?',
    answer:
      'Ja, vi utför inspektioner i båda städerna och kan ofta kombinera uppdrag. Kontakta oss för att diskutera ert behov.',
  },
]

export default function NorrkopingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqItems)) }}
      />

      <Breadcrumbs
        items={[
          { name: 'Hem', url: '/' },
          { name: 'Norrköping', url: '/platser/inspektion-norrkoping' },
        ]}
      />

      <Hero
        headline="Drönarinspektion Norrköping — Industriarv & Modern Handel"
        subheadline="Norrköping förenar ett unikt industriellt arv med moderna handels- och bostadsområden. SurveyDrone inspekterar tak, fasader och solceller med termisk kamera — från Industrilandskapets historiska tegelbyggnader till Ingelsta handelsområde och bostadsområdet Hageby."
        ctaPrimary={{ label: 'Begär offert — Norrköping', href: '/kontakt' }}
        ctaSecondary={{ label: 'Våra tjänster', href: '/tjanster/takinspektion' }}
      />

      <TrustBar
        items={[
          'EASA-certifierade fjärrpiloter',
          'Ansvarsförsäkrade',
          'Norrköping & Linköping',
          'Termisk kamera & RGB',
        ]}
      />

      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-heading-lg sm:text-display">
              Drönarinspektion för Norrköpings unika fastighetsbestånd
            </h2>
            <div className="mt-6 space-y-4 text-body-lg text-dark-600">
              <p>
                Norrköpings identitet präglas av det välbevarade Industrilandskapet — ett område med
                historiska tegelbyggnader som idag rymmer kontor, kultur och utbildning. Dessa
                kulturhistoriskt värdefulla fastigheter kräver varsam inspektion, och drönarteknik
                med termisk kamera erbjuder en icke-destruktiv metod för att identifiera fukt,
                köldbryggor och skador.
              </p>
              <p>
                Ingelsta är Norrköpings största handelsområde med stora kommersiella byggnader vars
                platta tak effektivt inspekteras med drönare. I bostadsområdet Hageby finns
                miljonprogramsbebyggelse där tak och fasader ofta står inför renovering — termisk
                inspektion ger fastighetsägare det underlag de behöver för att prioritera åtgärder.
                Närheten till Linköping innebär att vi ofta kombinerar uppdrag i båda städerna.
              </p>
              <p>
                Vi erbjuder{' '}
                <Link href="/tjanster/takinspektion" className="text-brand-600 underline hover:text-brand-700">
                  takinspektion
                </Link>
                ,{' '}
                <Link href="/tjanster/fasadinspektion" className="text-brand-600 underline hover:text-brand-700">
                  fasadinspektion
                </Link>
                ,{' '}
                <Link href="/tjanster/solcellsinspektion" className="text-brand-600 underline hover:text-brand-700">
                  solcellsinspektion
                </Link>
                {' '}och{' '}
                <Link href="/tjanster/industriinspektion" className="text-brand-600 underline hover:text-brand-700">
                  industriell inspektion
                </Link>
                {' '}i Norrköping, Linköping och hela Östergötland.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Fördelar med drönarinspektion i Norrköping"
        subtitle="Anpassat för Norrköpings industriarv och moderna fastighetsbestånd."
        benefits={[
          {
            title: 'Varsam inspektion av kulturarv',
            description:
              'Industrilandskapets historiska tegelbyggnader inspekteras med drönare utan fysisk kontakt — bevarar det kulturhistoriska värdet.',
            icon: 'building',
          },
          {
            title: 'Termisk analys av tegelfasader',
            description:
              'Norrköpings äldre tegelfastigheter drar nytta av termisk kamera som avslöjar fukt och köldbryggor utan ingrepp.',
            icon: 'camera',
          },
          {
            title: 'Effektiv handelsinspektion',
            description:
              'Ingelsta handelsområdes stora takytor inspekteras snabbt med drönare — utan att påverka butikernas verksamhet.',
            icon: 'clock',
          },
          {
            title: 'Säker metod',
            description:
              'EASA-certifierade piloter utför flygningen. Ingen personal behöver arbeta på höjd eller i riskfyllda miljöer.',
            icon: 'shield',
          },
          {
            title: 'Renoveringsunderlag',
            description:
              'Hagebys miljonprogramsbestånd får detaljerat beslutsunderlag för renovering genom termisk inspektion.',
            icon: 'file',
          },
          {
            title: 'Östergötland samlat',
            description:
              'Vi kombinerar uppdrag i Norrköping och Linköping för effektiv inspektion av hela Östergötland.',
            icon: 'chart',
          },
        ]}
        variant="dark"
      />

      <FaqAccordion
        headline="Vanliga frågor — Drönarinspektion Norrköping"
        items={faqItems}
      />

      <CtaBand
        headline="Behöver ni drönarinspektion i Norrköping?"
        description="Kontakta oss för en kostnadsfri offert. Vi inspekterar tak, fasader och solceller i Norrköping, Linköping och hela Östergötland."
        ctaLabel="Begär offert"
        ctaHref="/kontakt"
      />
    </>
  )
}
