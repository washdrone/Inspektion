import Image from 'next/image'
import { serviceImages, type ServiceImageKey } from '@/lib/service-images'

export function ServiceImage({ service }: { service: ServiceImageKey }) {
  const image = serviceImages[service]

  return (
    <figure className="mt-8 sm:mt-10">
      <a
        href={image.src}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${image.title} – öppna bilden i full storlek i en ny flik`}
        className="group block overflow-hidden rounded-2xl border border-dark-200 bg-white shadow-sm outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600"
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
          quality={85}
          className="h-auto w-full object-contain"
        />
        <span className="flex min-h-12 items-center justify-end gap-2 border-t border-dark-100 px-4 py-3 text-sm font-medium text-brand-700 group-hover:underline">
          Visa bilden i full storlek
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="M14 3h7v7M21 3l-9 9M10 3H3v18h18v-7" />
          </svg>
        </span>
      </a>
    </figure>
  )
}
