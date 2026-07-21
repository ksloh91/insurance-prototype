<script setup lang="ts">
const { site } = useAppConfig()
const scrolled = ref(false)

onMounted(() => {
  const onScroll = () => {
    scrolled.value = window.scrollY > 16
  }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b bg-daylight/95 backdrop-blur transition-shadow duration-300"
    :class="scrolled ? 'border-ink/10 shadow-sm' : 'border-transparent shadow-none'"
  >
    <div class="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:gap-4">
      <NuxtLink to="/" class="flex min-w-0 flex-1 items-center gap-3 pr-2">
        <LandingSiteLogo size="header" />
        <span class="hidden truncate text-xs leading-snug text-stone xl:block">
          {{ site.tagline }}
        </span>
      </NuxtLink>
      <nav class="flex shrink-0 items-center gap-2 sm:gap-4">
        <NuxtLink
          to="/blog"
          class="text-sm font-semibold text-ink/70 transition hover:text-coral-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral-deep"
        >
          Articles
        </NuxtLink>
        <NuxtLink
          to="/#lead-form"
          class="rounded-md bg-coral px-3 py-3 text-sm font-semibold text-daylight transition duration-200 hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral sm:px-5"
        >
          Free Consultation
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
