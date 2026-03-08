'use client'

import { useState, useEffect } from 'react'

function updateConsent(granted: boolean) {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    const value = granted ? 'granted' : 'denied'
    ;(window as any).gtag('consent', 'update', {
      ad_storage: value,
      ad_user_data: value,
      ad_personalization: value,
      analytics_storage: value,
    })
  }
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) {
      setVisible(true)
    } else if (consent === 'accepted') {
      updateConsent(true)
    }
  }, [])

  function accept() {
    localStorage.setItem('cookie_consent', 'accepted')
    updateConsent(true)
    setVisible(false)
  }

  function decline() {
    localStorage.setItem('cookie_consent', 'declined')
    updateConsent(false)
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
        <button onClick={accept} className="btn-primary text-sm">
          Acceptera
        </button>
        <button onClick={decline} className="btn-ghost text-sm">
          Avvisa
        </button>
      </div>
    </div>
  )
}
