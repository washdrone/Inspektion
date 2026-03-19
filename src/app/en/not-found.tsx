import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="section-padding">
      <div className="container-content text-center">
        <h1 className="text-4xl font-bold text-dark-900">404</h1>
        <p className="mt-4 text-lg text-dark-500">
          Page not found. It may have been moved or removed.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/en" className="btn-primary">
            Go to homepage
          </Link>
          <Link href="/en/contact" className="btn-secondary">
            Contact
          </Link>
        </div>
      </div>
    </section>
  )
}
