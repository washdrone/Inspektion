
'use client'

import { useRef } from 'react'

interface UseRevealOptions { threshold?: number; rootMargin?: string }

// Content must remain visible in server HTML and when JavaScript is unavailable.
// Preserve the hook API used by the existing sections without hiding their content.
export function useReveal(_options: UseRevealOptions = {}) {
  const ref = useRef<HTMLDivElement>(null)
  return { ref, visible: true }
}
