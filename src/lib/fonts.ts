import { Inter } from 'next/font/google'

/**
 * Self-hostad Inter via next/font — eliminerar renderblockerande extern CSS
 * och preconnects mot fonts.googleapis.com/fonts.gstatic.com.
 * Exponeras som CSS-variabel som Tailwinds font-sans pekar på.
 */
export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
})
