import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { CaseStudyCard } from '@/components/CaseStudyCard'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = createMetadata({
  title: 'Kundcase – Drönarinspektioner i praktiken',
  description:
    'Läs om hur fastighetsägare, förvaltare och byggföretag har använt drönarinspektioner för att effektivisera underhåll och dokumentation.',
  path: '/inspektioner-med-dronare/case',
})

const caseStudies = [
  {
    title: 'Takinspektion av flerbostadshus i Stockholm',
    industry: 'Fastighetsförvaltning',
    summary: 'En fastighetsförvaltare behövde inspektera taken på 12 flerbostadshus inför planerat underhåll. Med drönare genomfördes alla inspektioner på två dagar istället för uppskattningsvis två veckor med traditionella metoder.',
    href: '/inspektioner-med-dronare/case/takinspektion-flerbostadshus',
  },
  {
    title: 'Byggplatsdokumentation för nyproduktion',
    industry: 'Bygg & entreprenad',
    summary: 'Ett byggföretag använde regelbunden drönarfotografering för att dokumentera framsteg i ett nyproduktionsprojekt. Materialet användes i rapporter till beställare och för intern kvalitetskontroll.',
    href: '/inspektioner-med-dronare/case/byggplatsdokumentation-nyproduktion',
  },
  {
    title: 'Solcellsinspektion av kommersiell anläggning',
    industry: 'Energi',
    summary: 'En solcellsanläggning med över 500 paneler inspekterades med drönare. Flera skadade paneler identifierades som påverkade anläggningens totala effekt.',
    href: '/inspektioner-med-dronare/case/solcellsinspektion-kommersiell',
  },
]

export default function CasePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Hem', url: '/' },
          { name: 'Inspektioner med drönare', url: '/inspektioner-med-dronare' },
          { name: 'Kundcase', url: '/inspektioner-med-dronare/case' },
        ]}
      />

      <section className="section-padding">
        <div className="container-content">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
              Kundcase
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
              Se hur företag och fastighetsägare har nytta av drönarinspektioner i praktiken.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((cs) => (
              <CaseStudyCard key={cs.href} {...cs} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        headline="Vill ni bli nästa kundcase?"
        description="Kontakta oss för att diskutera hur drönarinspektion kan hjälpa er verksamhet."
        ctaLabel="Begär offert"
      />
    </>
  )
}
