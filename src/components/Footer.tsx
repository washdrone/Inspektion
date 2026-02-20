import Link from 'next/link'

const inspectionLinks = [
  { href: '/inspektioner-med-dronare/takinspektion', label: 'Takinspektion' },
  { href: '/inspektioner-med-dronare/fasadinspektion', label: 'Fasadinspektion' },
  { href: '/inspektioner-med-dronare/solcellsinspektion', label: 'Solcellsinspektion' },
  { href: '/inspektioner-med-dronare/byggplatsdokumentation', label: 'Byggplatsdokumentation' },
  { href: '/inspektioner-med-dronare/industriell-inspektion', label: 'Industriell inspektion' },
]

const companyLinks = [
  { href: '/inspektioner-med-dronare/case', label: 'Kundcase' },
  { href: '/inspektioner-med-dronare/priser', label: 'Priser' },
  { href: '/inspektioner-med-dronare/faq', label: 'Vanliga frågor' },
  { href: '/inspektioner-med-dronare/kontakt', label: 'Kontakt' },
]

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50" role="contentinfo">
      <div className="container-content py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold text-primary-700">
              WashDrone
            </Link>
            <p className="mt-3 text-sm text-neutral-600">
              Professionella drönarinspektioner för fastighetsägare, förvaltare och industri i hela Sverige.
            </p>
          </div>

          {/* Inspections */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900">
              Inspektioner
            </h3>
            <ul className="mt-3 space-y-2">
              {inspectionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 transition-colors hover:text-primary-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900">
              Företag
            </h3>
            <ul className="mt-3 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 transition-colors hover:text-primary-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900">
              Kontakt
            </h3>
            <div className="mt-3 space-y-2 text-sm text-neutral-600">
              <p>
                <a href="mailto:info@washdrone.se" className="hover:text-primary-600">
                  info@washdrone.se
                </a>
              </p>
              <p>
                <a href="tel:+46XXXXXXXXX" className="hover:text-primary-600">
                  +46 (0)XX-XXX XX XX
                </a>
              </p>
              <p>Sverige</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-200 pt-6 text-center text-xs text-neutral-500">
          <p>&copy; {new Date().getFullYear()} WashDrone. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  )
}
