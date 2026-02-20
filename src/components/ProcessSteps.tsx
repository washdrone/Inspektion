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
    <section className="section-padding section-dark">
      <div className="container-content">
        <h2 className="text-center text-heading-lg text-white sm:text-display">{headline}</h2>
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="absolute top-5 left-[calc(50%+24px)] right-0 hidden h-px bg-gradient-to-r from-brand-500/40 to-transparent lg:block" aria-hidden="true" />
              )}
              <div className="text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/15 text-sm font-bold text-brand-400 ring-1 ring-brand-500/30">
                  {String(step.number).padStart(2, '0')}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-dark-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
