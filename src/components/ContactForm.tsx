'use client'

import { useState, FormEvent } from 'react'
import { trackEvent } from '@/lib/analytics'

interface ContactFormProps {
  headline?: string
  subtitle?: string
  serviceContext?: string
}

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
      <div className="rounded-xl border border-accent-200 bg-accent-50 p-8 text-center">
        <svg className="mx-auto h-12 w-12 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="mt-4 text-xl font-semibold text-neutral-900">Tack för din förfrågan!</h3>
        <p className="mt-2 text-neutral-600">
          Vi återkommer inom en arbetsdag med en offert eller förslag på nästa steg.
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
      {headline && <h2 className="text-xl font-bold text-neutral-900 sm:text-2xl">{headline}</h2>}
      {subtitle && <p className="mt-2 text-sm text-neutral-600">{subtitle}</p>}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
        {/* Honeypot */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700">
              Namn <span className="text-red-500" aria-label="obligatoriskt">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              onFocus={handleFocus}
              className="mt-1 block w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm shadow-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              placeholder="Ditt namn"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-neutral-700">
              Företag <span className="text-red-500" aria-label="obligatoriskt">*</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              onFocus={handleFocus}
              className="mt-1 block w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm shadow-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              placeholder="Företagsnamn"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
              E-post <span className="text-red-500" aria-label="obligatoriskt">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onFocus={handleFocus}
              className="mt-1 block w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm shadow-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              placeholder="namn@foretag.se"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-neutral-700">
              Telefon
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              onFocus={handleFocus}
              className="mt-1 block w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm shadow-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              placeholder="+46 70 123 45 67"
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-neutral-700">
            Typ av inspektion
          </label>
          <select
            id="service"
            name="service"
            defaultValue={serviceContext || ''}
            onFocus={handleFocus}
            className="mt-1 block w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm shadow-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          >
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
          <label htmlFor="message" className="block text-sm font-medium text-neutral-700">
            Beskriv ert behov
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            onFocus={handleFocus}
            className="mt-1 block w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm shadow-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            placeholder="T.ex. antal byggnader, typ av fastighet, önskad tidpunkt..."
          />
        </div>

        {formState === 'error' && (
          <div className="rounded-lg bg-red-50 p-3 text-sm text-red-700" role="alert">
            Något gick fel. Försök igen eller kontakta oss direkt via e-post.
          </div>
        )}

        <button
          type="submit"
          disabled={formState === 'submitting'}
          className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
        >
          {formState === 'submitting' ? 'Skickar...' : 'Skicka förfrågan'}
        </button>

        <p className="text-xs text-neutral-500">
          Genom att skicka godkänner du att vi behandlar dina uppgifter för att besvara din förfrågan.
          Vi delar aldrig dina uppgifter med tredje part.
        </p>
      </form>
    </div>
  )
}
