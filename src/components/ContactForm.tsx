'use client'

import { useState, FormEvent } from 'react'
import { trackEvent } from '@/lib/analytics'

interface ContactFormProps {
  headline?: string
  subtitle?: string
  serviceContext?: string
}

const inputClasses = 'mt-1.5 block w-full rounded-xl border border-dark-200 bg-white px-4 py-3 text-sm text-dark-900 shadow-sm transition-all placeholder:text-dark-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20'

export function ContactForm({ headline, subtitle, serviceContext }: ContactFormProps) {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [hasStarted, setHasStarted] = useState(false)

  function handleFocus() {
    if (!hasStarted) {
      setHasStarted(true)
      trackEvent('form_start', { form: 'contact', service: serviceContext || 'general' })
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState('submitting')
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      company: formData.get('company') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
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
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-500/15">
          <svg className="h-7 w-7 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-dark-900">Tack för din förfrågan!</h3>
        <p className="mt-2 text-sm text-dark-500">Vi återkommer inom en arbetsdag med en offert eller förslag på nästa steg.</p>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-dark-100 bg-white p-6 shadow-card md:p-8">
      {headline && <h2 className="text-xl font-bold text-dark-900 sm:text-2xl">{headline}</h2>}
      {subtitle && <p className="mt-2 text-sm text-dark-500">{subtitle}</p>}
      <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-dark-700">Namn <span className="text-red-500" aria-label="obligatoriskt">*</span></label>
            <input type="text" id="name" name="name" required onFocus={handleFocus} className={inputClasses} placeholder="Ditt namn" />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-dark-700">Företag <span className="text-red-500" aria-label="obligatoriskt">*</span></label>
            <input type="text" id="company" name="company" required onFocus={handleFocus} className={inputClasses} placeholder="Företagsnamn" />
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-dark-700">E-post <span className="text-red-500" aria-label="obligatoriskt">*</span></label>
            <input type="email" id="email" name="email" required onFocus={handleFocus} className={inputClasses} placeholder="namn@foretag.se" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-dark-700">Telefon</label>
            <input type="tel" id="phone" name="phone" onFocus={handleFocus} className={inputClasses} placeholder="+46 70 123 45 67" />
          </div>
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-dark-700">Typ av inspektion</label>
          <select id="service" name="service" defaultValue={serviceContext || ''} onFocus={handleFocus} className={inputClasses}>
            <option value="">Välj typ...</option>
            <option value="takinspektion">Takinspektion</option>
            <option value="fasadinspektion">Fasadinspektion</option>
            <option value="solcellsinspektion">Solcellsinspektion</option>
            <option value="byggplatsdokumentation">Byggplatsdokumentation</option>
            <option value="industriell-inspektion">Industriell inspektion</option>
            <option value="annat">Annat / Osäker</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-dark-700">Beskriv ert behov</label>
          <textarea id="message" name="message" rows={4} onFocus={handleFocus} className={inputClasses} placeholder="T.ex. antal byggnader, typ av fastighet, önskad tidpunkt..." />
        </div>
        {formState === 'error' && (
          <div className="rounded-xl bg-red-50 p-4 text-sm text-red-700" role="alert">Något gick fel. Försök igen eller kontakta oss direkt via e-post.</div>
        )}
        <button type="submit" disabled={formState === 'submitting'} className="btn-primary w-full py-4 text-base disabled:cursor-not-allowed disabled:opacity-60">
          {formState === 'submitting' ? 'Skickar...' : 'Skicka förfrågan'}
        </button>
        <p className="text-center text-xs text-dark-400">Genom att skicka godkänner du att vi behandlar dina uppgifter för att besvara din förfrågan.</p>
      </form>
    </div>
  )
}
