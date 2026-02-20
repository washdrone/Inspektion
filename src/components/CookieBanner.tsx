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
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-200 bg-white p-4 shadow-lg md:p-6"
      role="dialog"
      aria-label="Cookiemedgivande"
    >
      <div className="container-content flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-neutral-700">
          Vi använder cookies för att förbättra din upplevelse och analysera trafik.
          Inga personuppgifter delas med tredje part.
        </p>
        <div className="flex gap-3">
          <button onClick={decline} className="btn-ghost text-sm">
            Avvisa
          </button>
          <button onClick={accept} className="btn-primary text-sm">
            Acceptera
          </button>
        </div>
      </div>
    </div>
  )
}
