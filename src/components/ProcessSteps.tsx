interface Step {
  number: number
  title: string
  description: string
}

interface ProcessStepsProps {
  headline: string
  steps: Step[]
}

export function ProcessSteps({ headline, steps }: ProcessStepsProps) {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-content">
        <h2 className="text-center text-2xl font-bold text-neutral-900 sm:text-3xl">{headline}</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-lg font-bold text-white">
                {step.number}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900">{step.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{step.description}</p>
              {step.number < steps.length && (
                <div className="absolute right-0 top-6 hidden h-0.5 w-full -translate-y-1/2 bg-primary-200 lg:block" style={{ left: '60%', width: '80%' }} aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
