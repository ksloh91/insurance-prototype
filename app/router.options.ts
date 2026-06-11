import type { RouterConfig } from '@nuxt/schema'

const HEADER_OFFSET = 88

export default {
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition

    if (to.hash) {
      return new Promise((resolve) => {
        requestAnimationFrame(() => {
          setTimeout(() => {
            const el = document.querySelector(to.hash)
            if (!el) {
              resolve({ top: 0 })
              return
            }
            const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
            resolve({ top, behavior: 'smooth' })
          }, 100)
        })
      })
    }

    return { top: 0 }
  },
} satisfies RouterConfig
