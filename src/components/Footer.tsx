import Link from 'next/link'
import { INSPECTION_LINKS, COMPANY_LINKS, CONTACT } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-dark-900 text-white" role="contentinfo">
      <div className="container-content py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500">
                <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">SurveyDrone</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-dark-400">
              Professionell drönare-inspektion med termisk kamera i Sverige. Tak, fasader, solceller och industri. EASA-certifierade piloter.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-dark-400">Inspektioner</h3>
            <ul className="mt-4 space-y-2.5">
              {INSPECTION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-dark-300 transition-colors hover:text-brand-400">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-dark-400">Företag</h3>
            <ul className="mt-4 space-y-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-dark-300 transition-colors hover:text-brand-400">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-dark-400">Kontakt</h3>
            <div className="mt-4 space-y-2.5 text-sm text-dark-300">
              <p><a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-brand-400">{CONTACT.email}</a></p>
              <p><a href={`tel:${CONTACT.phone}`} className="transition-colors hover:text-brand-400">{CONTACT.phoneDisplay}</a></p>
              <p className="text-dark-400">Sverige</p>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-dark-500">&copy; {new Date().getFullYear()} SurveyDrone Sverige AB. Alla rättigheter förbehållna.</p>
          <div className="flex items-center gap-1.5 text-xs text-dark-500">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-500" />
            EASA-certifierade fjärrpiloter &amp; ansvarsförsäkrade
          </div>
        </div>
      </div>
    </footer>
  )
}
