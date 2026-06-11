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
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],

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
