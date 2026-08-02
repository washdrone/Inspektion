import Link from 'next/link'
import { SERVICE_LINKS_EN, INDUSTRY_LINKS_EN, REGION_LINKS_EN, COMPANY_LINKS_EN } from '@/lib/constants-en'
import { CONTACT } from '@/lib/constants'

export function FooterEn() {
  return (
    <footer className="bg-dark-900 text-white" role="contentinfo">
      <div className="container-content py-16 md:py-20">
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-8">
          {/* Brand — wide left */}
          <div className="sm:col-span-2 lg:col-span-3">
            <Link href="/en" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-700">
                <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">SurveyDrone</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-dark-400">
              Professional visual and thermal drone inspection across Sweden. EASA-certified pilots and full radiometric data collection.
            </p>
            <div className="mt-4 text-sm text-dark-400">
              <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-accent-400">{CONTACT.email}</a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-dark-400">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICE_LINKS_EN.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-dark-300 transition-colors hover:text-accent-400">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-dark-400">Industries</h3>
            <ul className="mt-4 space-y-2.5">
              {INDUSTRY_LINKS_EN.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-dark-300 transition-colors hover:text-accent-400">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-dark-400">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {COMPANY_LINKS_EN.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-dark-300 transition-colors hover:text-accent-400">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regions — wide right */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-dark-400">Regions</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {REGION_LINKS_EN.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-dark-300 transition-colors hover:text-accent-400">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-dark-500">&copy; {new Date().getFullYear()} SurveyDrone. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-xs text-dark-500">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-400" />
            EASA-certified remote pilots &amp; fully insured
          </div>
        </div>
      </div>
    </footer>
  )
}
