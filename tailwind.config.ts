import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        daylight: '#FAF7F2',
        ink: '#1C1917',
        coral: '#E4472F',
        'coral-deep': '#BB3A27',
        'coral-bright': '#E75944',
        stone: '#69635A',
        haze: '#F0EAE0',
        sage: '#4B6B54',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Public Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#1C1917',
            '--tw-prose-headings': '#1C1917',
            '--tw-prose-lead': '#69635A',
            '--tw-prose-links': '#BB3A27',
            '--tw-prose-bold': '#1C1917',
            '--tw-prose-counters': '#69635A',
            '--tw-prose-bullets': '#E4472F',
            '--tw-prose-hr': 'rgba(28,25,23,0.1)',
            '--tw-prose-quotes': '#1C1917',
            '--tw-prose-quote-borders': '#E4472F',
            '--tw-prose-captions': '#69635A',
            '--tw-prose-code': '#1C1917',
            '--tw-prose-pre-code': '#FAF7F2',
            '--tw-prose-pre-bg': '#1C1917',
            '--tw-prose-th-borders': 'rgba(28,25,23,0.15)',
            '--tw-prose-td-borders': 'rgba(28,25,23,0.1)',
            a: { fontWeight: '600', textDecoration: 'none' },
            'a:hover': { textDecoration: 'underline' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config
