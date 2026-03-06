'use client'

type EventName =
  | 'click_email'
  | 'form_start'
  | 'form_submit'
  | 'cta_click'
  | 'faq_toggle'
  | 'page_section_view'

interface EventParams {
  [key: string]: string | number | boolean
}

export function trackEvent(event: EventName, params?: EventParams) {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    ;(window as any).gtag('event', event, params)
  }
}
