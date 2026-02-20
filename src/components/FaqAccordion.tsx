'use client'

import { useState } from 'react'
import { trackEvent } from '@/lib/analytics'

interface FaqItem {
  question: string
  answer: string
}

interface FaqAccordionProps {
  headline?: string
  items: FaqItem[]
}

export function FaqAccordion({ headline, items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(i: number) {
    const isOpening = openIndex !== i
    setOpenIndex(isOpening ? i : null)
    if (isOpening) {
      trackEvent('faq_toggle', { question: items[i].question })
    }
  }

  return (
    <section className="section-padding">
      <div className="container-content max-w-3xl">
        {headline && (
          <h2 className="mb-8 text-center text-2xl font-bold text-neutral-900 sm:text-3xl">
            {headline}
          </h2>
        )}
        <div className="divide-y divide-neutral-200 rounded-xl border border-neutral-200">
          {items.map((item, i) => (
            <div key={i}>
              <button
                type="button"
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-neutral-50"
                aria-expanded={openIndex === i}
              >
                <span className="pr-4 text-base font-medium text-neutral-900">
                  {item.question}
                </span>
                <svg
                  className={`h-5 w-5 flex-shrink-0 text-neutral-500 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4">
                  <p className="text-sm leading-relaxed text-neutral-600">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
