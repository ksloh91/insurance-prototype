import { readdirSync } from 'node:fs'
import { join } from 'node:path'

function getBlogPrerenderRoutes(): string[] {
  try {
    const blogDir = join(process.cwd(), 'content/blog')
    return readdirSync(blogDir)
      .filter((file) => file.endsWith('.md'))
      .map((file) => `/blog/${file.replace(/\.md$/, '')}`)
  } catch {
    return []
  }
}

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@vueuse/motion/nuxt'],

  compatibilityDate: '2026-06-11',

  ssr: true,

  app: {
    head: {
      title: 'Lumos Advisory — Breaking the Insurance Industry Taboo',
      meta: [
        {
          name: 'description',
          content:
            'Lumos Advisory — breaking the insurance industry taboo. Free portfolio review, medical cards, critical illness & eldercare planning in Malaysia.',
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/jpeg', href: '/logo-lumos.jpg' },
        { rel: 'apple-touch-icon', href: '/logo-lumos.jpg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Public+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@400;500;600&display=swap',
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      formspreeEndpoint:
        process.env.NUXT_PUBLIC_FORMSPREE_ENDPOINT ||
        'https://formspree.io/f/mdavlbyq',
      gtagId: process.env.NUXT_PUBLIC_GTAG_ID || '',
      metaPixelId: process.env.NUXT_PUBLIC_META_PIXEL_ID || '',
      whatsappNumber: process.env.NUXT_PUBLIC_WHATSAPP_NUMBER || '60123456789',
    },
  },

  content: {
    documentDriven: false,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/blog', ...getBlogPrerenderRoutes()],
    },
  },
})
