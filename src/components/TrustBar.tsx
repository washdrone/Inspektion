interface TrustBarProps {
  items: string[]
  variant?: 'light' | 'dark'
}

export function TrustBar({ items, variant = 'dark' }: TrustBarProps) {
  const isDark = variant === 'dark'
  return (
    <section
      className={`${isDark ? 'bg-dark-800 border-y border-white/5' : 'bg-dark-50 border-y border-dark-100'} py-5`}
      aria-label="Förtroendefaktorer"
    >
      <div className="container-content">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <svg
                className={`h-4 w-4 ${isDark ? 'text-brand-400' : 'text-brand-600'}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className={`text-sm font-medium ${isDark ? 'text-dark-300' : 'text-dark-600'}`}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
