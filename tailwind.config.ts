import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6fb',
          100: '#d4e8f5',
          200: '#a8d1eb',
          300: '#6db3db',
          400: '#3d96c4',
          500: '#2E7D9F',
          600: '#246a88',
          700: '#1B3A6B',
          800: '#152e55',
          900: '#0f2240',
        },
        accent: {
          50: '#fef8ec',
          100: '#fcedc4',
          200: '#f9dc8e',
          300: '#f3c453',
          400: '#E8A020',
          500: '#d08a10',
          600: '#b36e0c',
          700: '#8c540e',
          800: '#6e4212',
          900: '#5a3614',
        },
        dark: {
          50: '#f1f5f9',
          100: '#e2e8f0',
          200: '#cbd5e1',
          300: '#94a3b8',
          400: '#64748b',
          500: '#475569',
          600: '#1e293b',
          700: '#1B3A6B',
          800: '#152e55',
          900: '#0f2240',
          950: '#091428',
        },
      },
      fontFamily: {
        sans: [
          'var(--font-inter)',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        display: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.025em', fontWeight: '800' }],
        'display-lg': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: '800' }],
        'display': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'heading-lg': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        'heading': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '700' }],
        'heading-sm': ['1.5rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }],
      },
      maxWidth: {
        content: '1240px',
        narrow: '800px',
      },
      borderRadius: {
        'pill': '9999px',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.04), 0 6px 16px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.06), 0 16px 40px rgba(0,0,0,0.1)',
        'glow': '0 0 40px rgba(27,58,107,0.2)',
      },
    },
  },
  plugins: [],
}
export default config
