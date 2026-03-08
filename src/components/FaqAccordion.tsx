'use client'

import { useState } from 'react'
import { trackEvent } from '@/lib/analytics'
import { useReveal } from '@/hooks/useReveal'

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
  const { ref, visible } = useReveal()

  function toggle(i: number) {
    const isOpening = openIndex !== i
    setOpenIndex(isOpening ? i : null)
    if (isOpening) {
      trackEvent('faq_toggle', { question: items[i].question })
    }
  }

  return (
    <section ref={ref} className="section-padding">
      <div className="container-narrow">
        {headline && (
          <h2
            className="mb-10 text-center text-heading-lg sm:text-display transition-all duration-700"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)' }}
          >
            {headline}
          </h2>
        )}
        <div className="space-y-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-dark-100 bg-white transition-all duration-700 hover:shadow-card"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${i * 60 + 200}ms`,
              }}
            >
              <button
                type="button"
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="pr-4 font-semibold text-dark-900">{item.question}</span>
                <div className={`flex h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${openIndex === i ? 'bg-brand-500 text-white rotate-180' : 'bg-dark-50 text-dark-500'}`}>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div
                className="faq-answer"
                data-open={openIndex === i ? 'true' : 'false'}
              >
                <div className="faq-answer-inner">
                  <div className="px-6 pb-5">
                    <p className="text-sm leading-relaxed text-dark-500">{item.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
