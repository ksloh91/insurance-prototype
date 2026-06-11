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
      title: 'Shield Advisory Group — Insurance & Financial Planning Malaysia',
      meta: [
        {
          name: 'description',
          content:
            'Licensed insurance advisory in Malaysia. Free portfolio review, medical card upgrades, critical illness & eldercare planning.',
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  runtimeConfig: {
    public: {
      formspreeEndpoint:
        process.env.NUXT_PUBLIC_FORMSPREE_ENDPOINT ||
        'https://formspree.io/f/YOUR_FORM_ID',
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
