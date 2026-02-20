interface Deliverable {
  title: string
  description: string
}

interface DeliverablesProps {
  headline: string
  items: Deliverable[]
}

export function Deliverables({ headline, items }: DeliverablesProps) {
  return (
    <section className="section-padding">
      <div className="container-content">
        <h2 className="text-center text-2xl font-bold text-neutral-900 sm:text-3xl">{headline}</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {items.map((item, i) => (
            <div key={i} className="flex gap-4 rounded-lg border border-neutral-200 bg-white p-5">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-neutral-900">{item.title}</h3>
                <p className="mt-1 text-sm text-neutral-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
