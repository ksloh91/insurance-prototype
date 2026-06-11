<script setup lang="ts">
const { site } = useAppConfig()
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
      <NuxtLink to="/" class="flex min-w-0 items-center gap-3">
        <img
          :src="site.logo"
          :alt="site.name"
          class="h-9 w-auto shrink-0 sm:h-10"
          width="160"
          height="40"
        />
        <span class="hidden truncate text-xs leading-snug text-slate-500 lg:block">
          {{ site.tagline }}
        </span>
      </NuxtLink>
      <nav class="flex shrink-0 items-center gap-3 sm:gap-4">
        <NuxtLink
          to="/blog"
          class="text-sm font-semibold text-slate-600 transition hover:text-red-600"
        >
          Articles
        </NuxtLink>
        <a
          href="#lead-form"
          class="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700 sm:px-5"
        >
          Free Consultation
        </a>
      </nav>
    </div>
  </header>
</template>
