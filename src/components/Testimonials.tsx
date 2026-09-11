interface Testimonial {
  quote: string
  name: string
  role: string
  company?: string
}

interface TestimonialsProps {
  headline?: string
  testimonials: Testimonial[]
}

export function Testimonials({ headline = 'Vad våra kunder säger', testimonials }: TestimonialsProps) {

  return (
    <section className="section-padding section-muted">
      <div className="container-content">
        <h2
          className="text-center text-heading-lg sm:text-display"
        >
          {headline}
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="card relative"
            >
              <svg className="absolute top-6 right-6 z-0 h-8 w-8 text-brand-100" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>
              <p className="relative z-10 text-sm leading-relaxed text-dark-600 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/10 text-sm font-bold text-brand-600">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-dark-900">{t.name}</div>
                  <div className="text-xs text-dark-400">{t.company ? `${t.role}, ${t.company}` : t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
