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
  title: 'Drönarinspektion Umeå | Tak & Fasad | SurveyDrone',
  description:
    'Drönarinspektion i Umeå med termisk kamera. Tak, fasader och solceller i Teg, Ålidhem, Ersboda och Universitetsområdet. EASA-certifierade piloter.',
  path: '/platser/inspektion-umea',
})

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'SurveyDrone - Umeå',
  description:
    'Professionell drönarinspektion i Umeå och Västerbotten. Tak, fasader, solceller och industri med termisk kamera. EASA-certifierade fjärrpiloter.',
  url: 'https://surveydrone.se/platser/inspektion-umea',
  email: 'info@surveydrone.se',
  areaServed: {
    '@type': 'City',
    name: 'Umeå',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 63.8258,
      longitude: 20.263,
    },
  },
  parentOrganization: {
    '@type': 'ProfessionalService',
    '@id': 'https://surveydrone.se/#organization',
  },
}

const faqItems = [
  {
    question: 'Utför ni drönarinspektioner i norra Sverige?',
    answer:
      'Ja, vi utför drönarinspektioner i Umeå och hela Västerbotten. Vi är verksamma i hela Sverige och har kapacitet att genomföra uppdrag i norra regionen.',
  },
  {
    question: 'Hur fungerar termisk inspektion i Umeås kalla klimat?',
    answer:
      'Det kalla klimatet i Umeå är faktiskt en fördel för termisk inspektion. Stora temperaturskillnader mellan inne och ute gör att köldbryggor och värmeläckage syns tydligare med termisk kamera under den kalla årstiden.',
  },
  {
    question: 'Inspekterar ni universitetsfastigheter i Umeå?',
    answer:
      'Ja, vi inspekterar alla typer av offentliga och kommersiella fastigheter, inklusive byggnader i Universitetsområdet. Drönarinspektion ger effektiv överblick av stora campusområden.',
  },
  {
    question: 'Kan ni inspektera bostadsområden som Ålidhem och Ersboda?',
    answer:
      'Absolut. Ålidhems och Ersbodas flerbostadshus inspekteras effektivt med drönare och termisk kamera. Vi identifierar köldbryggor, fuktskador och underhållsbehov.',
  },
  {
    question: 'Vilka tjänster erbjuder ni i Umeå?',
    answer:
      'Vi erbjuder takinspektion, fasadinspektion, solcellsinspektion och industriell inspektion med termisk kamera och RGB. Kontakta oss för att diskutera ert specifika behov.',
  },
]

export default function UmeaPage() {
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
          { name: 'Umeå', url: '/platser/inspektion-umea' },
        ]}
      />

      <Hero
        headline="Drönarinspektion Umeå — Subarktiskt Klimat, Smarta Inspektioner"
        subheadline="Umeås kalla vintrar ställer höga krav på byggnaders isolering och täthet. SurveyDrone inspekterar tak, fasader och solceller med termisk kamera i Teg, Ålidhem, Ersboda, Universitetsområdet och hela Umeåregionen — där det kalla klimatet gör termisk inspektion extra effektiv."
        ctaPrimary={{ label: 'Begär offert — Umeå', href: '/kontakt' }}
        ctaSecondary={{ label: 'Våra tjänster', href: '/inspektioner-med-dronare' }}
      />

      <TrustBar
        items={[
          'EASA-certifierade fjärrpiloter',
          'Ansvarsförsäkrade',
          'Umeå & Västerbotten',
          'Termisk kamera & RGB',
        ]}
      />

      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-heading-lg sm:text-display">
              Termisk drönarinspektion i Umeås krävande klimat
            </h2>
            <div className="mt-6 space-y-4 text-body-lg text-dark-600">
              <p>
                Umeå ligger i norra Sverige där vintrar med temperaturer långt under noll ställer
                extrema krav på byggnaders isolering, tak och fasader. Detta gör termisk
                drönarinspektion extra värdefullt — stora temperaturskillnader mellan inne och ute
                gör att köldbryggor, värmeläckage och fuktproblem syns tydligt med termisk kamera.
              </p>
              <p>
                I Teg, söder om Umeälven, finns en blandning av villabebyggelse och flerbostadshus.
                Ålidhem är ett av Umeås största bostadsområden med flerbostadshus där tak och fasader
                behöver regelbunden tillsyn. Ersboda i öster har liknande bebyggelse. Universitetsområdet
                rymmer institutionsbyggnader och campusfastigheter där energieffektivitet är en prioriterad fråga.
              </p>
              <p>
                Vi erbjuder{' '}
                <Link href="/inspektioner-med-dronare/takinspektion" className="text-brand-600 underline hover:text-brand-700">
                  takinspektion
                </Link>
                ,{' '}
                <Link href="/inspektioner-med-dronare/fasadinspektion" className="text-brand-600 underline hover:text-brand-700">
                  fasadinspektion
                </Link>
                ,{' '}
                <Link href="/inspektioner-med-dronare/solcellsinspektion" className="text-brand-600 underline hover:text-brand-700">
                  solcellsinspektion
                </Link>
                {' '}och{' '}
                <Link href="/inspektioner-med-dronare/industriell-inspektion" className="text-brand-600 underline hover:text-brand-700">
                  industriell inspektion
                </Link>
                {' '}i Umeå och hela Västerbotten.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BenefitsGrid
        headline="Fördelar med drönarinspektion i Umeå"
        subtitle="Anpassat för norra Sveriges klimat och fastighetsbestånd."
        benefits={[
          {
            title: 'Klimatoptimerad termisk inspektion',
            description:
              'Umeås kalla vintrar förstärker temperaturskillnaderna och gör termisk kamera extra effektiv för att hitta köldbryggor och värmeläckage.',
            icon: 'camera',
          },
          {
            title: 'Bostadsområden',
            description:
              'Ålidhems och Ersbodas flerbostadshus inspekteras effektivt. Termisk inspektion identifierar isoleringsbrister som driver uppvärmningskostnader.',
            icon: 'building',
          },
          {
            title: 'Campusfastigheter',
            description:
              'Universitetsområdets institutionsbyggnader och campusfastigheter inspekteras med drönare för energieffektivitetsanalys.',
            icon: 'chart',
          },
          {
            title: 'Säkert i tufft klimat',
            description:
              'Ingen personal behöver arbeta på höjd under krävande vinterförhållanden. Drönaren klarar uppdraget.',
            icon: 'shield',
          },
          {
            title: 'Snölastrelaterade skador',
            description:
              'Tunga snölaster kan orsaka skador på tak. Drönarinspektion efter vintersäsongen avslöjar deformationer och skador.',
            icon: 'clock',
          },
          {
            title: 'Detaljerad rapport',
            description:
              'Komplett dokumentation med termiska bilder, RGB-foton och åtgärdsförslag som underlag för underhåll.',
            icon: 'file',
          },
        ]}
        variant="dark"
      />

      <FaqAccordion
        headline="Vanliga frågor — Drönarinspektion Umeå"
        items={faqItems}
      />

      <CtaBand
        headline="Behöver ni drönarinspektion i Umeå?"
        description="Kontakta oss för en kostnadsfri offert. Vi inspekterar tak, fasader och solceller i Umeå och hela Västerbotten."
        ctaLabel="Begär offert"
        ctaHref="/kontakt"
      />
    </>
  )
}
