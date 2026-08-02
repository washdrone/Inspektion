import Link from 'next/link'
import { SERVICE_LINKS, INDUSTRY_LINKS, REGION_LINKS, COMPANY_LINKS, CONTACT } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-dark-900 text-white" role="contentinfo">
      <div className="container-content py-16 md:py-20">
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-8">
          {/* Brand — wide left */}
          <div className="sm:col-span-2 lg:col-span-3">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-700">
                <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">SurveyDrone</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-dark-400">
              Professionell visuell och termisk drönar&shy;inspektion i hela Sverige. EASA-certifierade piloter och fullradiometrisk datainsamling.
            </p>
            <div className="mt-4 text-sm text-dark-400">
              <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-accent-400">{CONTACT.email}</a>
            </div>
          </div>

          {/* Tjänster */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-dark-400">Tjänster</h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-dark-300 transition-colors hover:text-accent-400">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Branscher */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-dark-400">Branscher</h3>
            <ul className="mt-4 space-y-2.5">
              {INDUSTRY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-dark-300 transition-colors hover:text-accent-400">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Företag */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-dark-400">Företag</h3>
            <ul className="mt-4 space-y-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-dark-300 transition-colors hover:text-accent-400">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regioner — wide right */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-dark-400">Regioner</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {REGION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-dark-300 transition-colors hover:text-accent-400">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-dark-500">&copy; {new Date().getFullYear()} SurveyDrone. Alla rättigheter förbehållna.</p>
          <div className="flex items-center gap-1.5 text-xs text-dark-500">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-400" />
            EASA-certifierade fjärrpiloter &amp; ansvarsförsäkrade
          </div>
        </div>
      </div>
    </footer>
  )
}
