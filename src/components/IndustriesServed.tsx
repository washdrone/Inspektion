interface Industry {
  name: string
  description: string
}

interface IndustriesServedProps {
  headline: string
  industries: Industry[]
}

export function IndustriesServed({ headline, industries }: IndustriesServedProps) {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-content">
        <h2 className="text-center text-2xl font-bold text-neutral-900 sm:text-3xl">{headline}</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <div key={i} className="rounded-lg border border-neutral-200 bg-white p-5">
              <h3 className="text-base font-semibold text-neutral-900">{ind.name}</h3>
              <p className="mt-1 text-sm text-neutral-600">{ind.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
