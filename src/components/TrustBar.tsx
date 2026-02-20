interface TrustBarProps {
  items: string[]
}

export function TrustBar({ items }: TrustBarProps) {
  return (
    <section className="border-b border-neutral-200 bg-neutral-50 py-4" aria-label="Förtroendefaktorer">
      <div className="container-content">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm font-medium text-neutral-600">
              <svg className="h-5 w-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
