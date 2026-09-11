'use client'

import { useState, FormEvent } from 'react'
import { CONTACT_SERVICES, validService } from '@/lib/contact-services'
import { trackEvent } from '@/lib/analytics'

interface ContactFormProps {
  headline?: string
  subtitle?: string
  serviceContext?: string
}

const inputClasses = 'mt-1.5 block w-full rounded-xl border border-dark-200 bg-white px-4 py-3 text-base text-dark-900 shadow-sm transition-all placeholder:text-dark-500 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20'

export function ContactForm({ headline, subtitle, serviceContext }: ContactFormProps) {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [hasStarted, setHasStarted] = useState(false)

  function handleFocus() {
    if (!hasStarted) {
      setHasStarted(true)
      trackEvent('form_start', { form: 'contact', service: validService(serviceContext) && serviceContext ? serviceContext : 'general' })
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (formState === 'submitting') return
    setFormState('submitting')
    const formData = new FormData(e.currentTarget)
    const data = {
      website: formData.get('website') as string,
      name: (formData.get('name') as string).trim(),
      company: (formData.get('company') as string).trim(),
      email: (formData.get('email') as string).trim(),
      service: formData.get('service') as string,
      message: formData.get('message') as string,
    }
    try {
      const res = await fetch('/api/kontakt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setFormState('success')
        trackEvent('form_submit', { form: 'contact', service: data.service })
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

  if (formState === 'success') {
    return (
      <div role="status" aria-live="polite" className="rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-500/15">
          <svg className="h-7 w-7 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-dark-900">Tack för din förfrågan!</h3>
        <p className="mt-2 text-sm text-dark-500">Vi återkommer så snart vi kan med frågor, en offert eller förslag på nästa steg.</p>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-dark-100 bg-white p-6 shadow-card md:p-8">
      {headline && <h2 className="text-xl font-bold text-dark-900 sm:text-2xl">{headline}</h2>}
      {subtitle && <p className="mt-2 text-sm text-dark-500">{subtitle}</p>}
      <form onSubmit={handleSubmit} className="mt-6 space-y-5" aria-busy={formState === 'submitting'}>
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-dark-700">Namn <span className="text-red-500" aria-label="obligatoriskt">*</span></label>
            <input type="text" id="name" name="name" autoComplete="name" maxLength={120} required onFocus={handleFocus} className={inputClasses} placeholder="Ditt namn" />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-dark-700">Företag / organisation <span className="text-red-500" aria-label="obligatoriskt">*</span></label>
            <input type="text" id="company" name="company" autoComplete="organization" maxLength={200} required onFocus={handleFocus} className={inputClasses} placeholder="Företagsnamn" />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark-700">E-post <span className="text-red-500" aria-label="obligatoriskt">*</span></label>
          <input type="email" id="email" name="email" autoComplete="email" maxLength={254} required onFocus={handleFocus} className={inputClasses} placeholder="namn@foretag.se" />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-dark-700">Tjänst</label>
          <select id="service" name="service" defaultValue={validService(serviceContext) ? serviceContext : ''} onFocus={handleFocus} className={inputClasses}>
            <option value="">Välj tjänst...</option>
            {CONTACT_SERVICES.map(item => <option key={item.sv} value={item.sv}>{item.labelSv}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-dark-700">Beskriv ert behov</label>
          <textarea id="message" name="message" maxLength={5000} rows={5} onFocus={handleFocus} className={inputClasses} placeholder="Beskriv objektet, orten och vad ni vill få svar på. Ange gärna ungefärlig yta och önskad tidpunkt." />
        </div>
        {formState === 'error' && (
          <div className="rounded-xl bg-red-50 p-4 text-sm text-red-700" role="alert">Något gick fel. Försök igen eller <a href="mailto:info@surveydrone.se" className="underline">kontakta oss via info@surveydrone.se</a>.</div>
        )}
        <button type="submit" disabled={formState === 'submitting'} className="btn-primary w-full py-4 text-base disabled:cursor-not-allowed disabled:opacity-60">
          {formState === 'submitting' ? 'Skickar...' : 'Skicka förfrågan'}
        </button>
        <p className="text-center text-sm text-dark-600">Vi använder uppgifterna för att besvara din förfrågan. Skicka inte känsliga uppgifter i formuläret.</p>
      </form>
    </div>
  )
}
