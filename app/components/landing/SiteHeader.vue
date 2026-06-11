<script setup lang="ts">
const { site } = useAppConfig()
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:gap-4">
      <NuxtLink to="/" class="flex min-w-0 flex-1 items-center gap-3 pr-2">
        <LandingSiteLogo size="header" />
        <span class="hidden truncate text-xs leading-snug text-slate-500 xl:block">
          {{ site.tagline }}
        </span>
      </NuxtLink>
      <nav class="flex shrink-0 items-center gap-2 sm:gap-4">
        <NuxtLink
          to="/blog"
          class="text-sm font-semibold text-slate-600 transition hover:text-red-600"
        >
          Articles
        </NuxtLink>
        <NuxtLink
          to="/#lead-form"
          class="rounded-lg bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm shadow-red-600/20 transition duration-300 hover:scale-[1.02] hover:bg-red-700 hover:shadow-red-600/30 active:scale-[0.98] sm:px-5"
        >
          Free Consultation
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
