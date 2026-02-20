import Link from 'next/link'

interface CtaBandProps {
  headline: string
  description?: string
  ctaLabel?: string
  ctaHref?: string
}

export function CtaBand({
  headline,
  description,
  ctaLabel = 'Begär offert',
  ctaHref = '/inspektioner-med-dronare/kontakt',
}: CtaBandProps) {
  return (
    <section className="bg-primary-700">
      <div className="container-content py-12 text-center md:py-16">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{headline}</h2>
        {description && (
          <p className="mt-3 text-lg text-primary-100">{description}</p>
        )}
        <div className="mt-6">
          <Link href={ctaHref} className="btn-primary bg-white text-primary-700 hover:bg-primary-50">
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
