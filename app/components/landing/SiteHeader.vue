<script setup lang="ts">
const { site } = useAppConfig()
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
      <NuxtLink to="/" class="text-lg font-bold tracking-tight text-blue-700 sm:text-xl">
        {{ site.name }}
      </NuxtLink>
      <nav class="flex items-center gap-4">
        <NuxtLink
          to="/blog"
          class="text-sm font-semibold text-slate-600 transition hover:text-blue-700"
        >
          Articles
        </NuxtLink>
        <a
          href="#lead-form"
          class="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 sm:px-5"
        >
          Free Consultation
        </a>
      </nav>
    </div>
  </header>
</template>
