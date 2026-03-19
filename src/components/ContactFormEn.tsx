'use client'

import { useState, FormEvent } from 'react'
import { trackEvent } from '@/lib/analytics'

interface ContactFormEnProps {
  headline?: string
  subtitle?: string
  serviceContext?: string
}

const inputClasses = 'mt-1.5 block w-full rounded-xl border border-dark-200 bg-white px-4 py-3 text-sm text-dark-900 shadow-sm transition-all placeholder:text-dark-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20'

export function ContactFormEn({ headline, subtitle, serviceContext }: ContactFormEnProps) {
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
        <h3 className="mt-4 text-xl font-semibold text-dark-900">Thank you for your enquiry!</h3>
        <p className="mt-2 text-sm text-dark-500">We will get back to you within one business day with a quote or a suggested next step.</p>
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
            <label htmlFor="name" className="block text-sm font-medium text-dark-700">Name <span className="text-red-500" aria-label="required">*</span></label>
            <input type="text" id="name" name="name" required onFocus={handleFocus} className={inputClasses} placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-dark-700">Company <span className="text-red-500" aria-label="required">*</span></label>
            <input type="text" id="company" name="company" required onFocus={handleFocus} className={inputClasses} placeholder="Company name" />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark-700">Email <span className="text-red-500" aria-label="required">*</span></label>
          <input type="email" id="email" name="email" required onFocus={handleFocus} className={inputClasses} placeholder="name@company.com" />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-dark-700">Type of Inspection</label>
          <select id="service" name="service" defaultValue={serviceContext || ''} onFocus={handleFocus} className={inputClasses}>
            <option value="">Select type...</option>
            <option value="roof-inspection">Roof Inspection</option>
            <option value="facade-inspection">Facade Inspection</option>
            <option value="solar-panel-inspection">Solar Panel Inspection</option>
            <option value="thermal-inspection">Thermal Inspection</option>
            <option value="moisture-inspection">Moisture Inspection</option>
            <option value="industrial-inspection">Industrial Inspection</option>
            <option value="wind-turbine-inspection">Wind Turbine Inspection</option>
            <option value="3d-mapping">3D Mapping</option>
            <option value="maintenance-agreement">Maintenance Agreement</option>
            <option value="other">Other / Not Sure</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-dark-700">Describe Your Needs</label>
          <textarea id="message" name="message" rows={4} onFocus={handleFocus} className={inputClasses} placeholder="E.g. number of buildings, property type, preferred time..." />
        </div>
        {formState === 'error' && (
          <div className="rounded-xl bg-red-50 p-4 text-sm text-red-700" role="alert">Something went wrong. Please try again or contact us directly by email.</div>
        )}
        <button type="submit" disabled={formState === 'submitting'} className="btn-primary w-full py-4 text-base disabled:cursor-not-allowed disabled:opacity-60">
          {formState === 'submitting' ? 'Sending...' : 'Send Enquiry'}
        </button>
        <p className="text-center text-xs text-dark-400">By submitting, you agree that we may process your data to respond to your enquiry.</p>
      </form>
    </div>
  )
}
