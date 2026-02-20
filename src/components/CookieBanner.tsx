'use client'

import { useState, useEffect } from 'react'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) {
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem('cookie_consent', 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem('cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-lg rounded-2xl border border-dark-100 bg-white p-5 shadow-card-hover md:left-auto md:right-6 md:bottom-6"
      role="dialog"
      aria-label="Cookiemedgivande"
    >
      <p className="text-body-sm text-dark-600">
        Vi använder cookies för att förbättra din upplevelse och analysera trafik.
        Inga personuppgifter delas med tredje part.
      </p>
      <div className="mt-4 flex gap-3">
        <button onClick={decline} className="btn-ghost text-sm">
          Avvisa
        </button>
        <button onClick={accept} className="btn-primary text-sm">
          Acceptera
        </button>
      </div>
    </div>
  )
}
