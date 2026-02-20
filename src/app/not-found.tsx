import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="section-padding">
      <div className="container-content text-center">
        <h1 className="text-4xl font-bold text-dark-900">404</h1>
        <p className="mt-4 text-lg text-dark-500">
          Sidan kunde inte hittas. Den kan ha flyttats eller tagits bort.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/" className="btn-primary">
            Till startsidan
          </Link>
          <Link href="/inspektioner-med-dronare" className="btn-secondary">
            Våra inspektioner
          </Link>
        </div>
      </div>
    </section>
  )
}
