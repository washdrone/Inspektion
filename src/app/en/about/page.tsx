import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { TrustBar } from '@/components/TrustBar'
import { CtaBand } from '@/components/CtaBand'

export const metadata: Metadata = createMetadata({
  title: 'About SurveyDrone — Drone Inspection Sweden',
  description:
    'SurveyDrone provides professional drone inspection with thermal camera across all of Sweden. EASA-certified remote pilots, insured and experienced in ex-classified zones.',
  path: '/en/about',
  locale: 'en',
  alternateLocalePath: '/om-oss',
})

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', url: '/en' },
          { name: 'About', url: '/en/about' },
        ]}
      />

      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <h1 className="page-heading">
              About SurveyDrone
            </h1>
            <div className="mt-8 space-y-6 text-dark-600 text-body-lg leading-relaxed">
              <p>
                SurveyDrone performs professional drone inspections using industry-leading thermal
                cameras and high-resolution imaging. We help property owners, managers, energy
                companies, industrial operators and the public sector inspect roofs, facades, solar
                panels and facilities — faster, safer and more cost-effectively than traditional
                methods.
              </p>
              <p>
                Our pilots are EASA-certified remote pilots with experience working in demanding
                environments, including ex-classified zones. We are insured and operate across
                all of Sweden.
              </p>
              <p>
                All data collection is carried out using fully radiometric thermal cameras and
                RTK/GNSS positioning with centimetre-level accuracy. This delivers precise,
                georeferenced results that can be compared between inspection occasions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TrustBar
        items={[
          'EASA-certified remote pilots',
          'Insured',
          'Ex-classified zone experience',
          'Operating across all of Sweden',
        ]}
        variant="light"
      />

      <section className="section-padding section-muted">
        <div className="container-content">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center section-heading">
              What we offer
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Thermal inspection',
                  desc: 'Fully radiometric data collection that reveals hidden damage, moisture and cold bridges.',
                  href: '/en/services/thermal-inspection',
                },
                {
                  title: 'Roof inspection',
                  desc: 'Inspect roofs without scaffolding or fall risk. All roof types and materials.',
                  href: '/en/services/roof-inspection',
                },
                {
                  title: 'Facade inspection',
                  desc: 'Document facade condition without a cherry picker. Cracks, moisture and flaking.',
                  href: '/en/services/facade-inspection',
                },
                {
                  title: 'Solar panel inspection',
                  desc: 'Find hotspots and defective panels with aerial thermal analysis.',
                  href: '/en/services/solar-panel-inspection',
                },
                {
                  title: 'Industrial inspection',
                  desc: 'Inspect hard-to-reach facilities without downtime or scaffolding.',
                  href: '/en/services/industrial-inspection',
                },
                {
                  title: '3D mapping',
                  desc: 'Orthophotos, 3D models and photogrammetry for measurement and documentation.',
                  href: '/en/services/3d-mapping',
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="card group"
                >
                  <h3 className="font-semibold text-dark-900 group-hover:text-brand-700">{item.title}</h3>
                  <p className="mt-2 text-sm text-dark-500">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-center section-heading">
            Our approach
          </h2>
          <div className="mt-8 space-y-6 text-dark-600">
            <p>
              We believe in straight-forward communication. No jargon, no inflated promises. Every
              report we deliver should be a clear basis for decision-making — not a sales pitch. If
              we find nothing noteworthy, we say so. If we find serious defects, we prioritise them
              clearly.
            </p>
            <p>
              We describe our equipment in general terms because technology evolves rapidly. What
              matters is the result: georeferenced, fully radiometric data of high quality that you
              can act on.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        headline="Want to learn more?"
        description="Contact us to discuss your inspection needs. We respond within one business day."
        ctaLabel="Contact us"
        ctaHref="/en/contact"
      />
    </>
  )
}
