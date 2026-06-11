<script setup lang="ts">
const { site } = useAppConfig()

const { data: articles } = await useAsyncData('blog-list', () =>
  queryCollection('blog').order('date', 'DESC').all(),
)

useSeoMeta({
  title: `Articles — ${site.name}`,
  description: 'Insurance insights, coverage guides, and financial planning tips for Malaysians.',
})
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <LandingSiteHeader />

    <main class="mx-auto max-w-4xl px-4 py-12">
      <h1 class="mb-2 text-3xl font-bold text-slate-900">Articles & Insights</h1>
      <p class="mb-10 text-slate-500">
        Educational guides on insurance, loans, and financial planning in Malaysia.
      </p>

      <div v-if="articles?.length" class="space-y-6">
        <article
          v-for="article in articles"
          :key="article.path"
          class="rounded-xl border border-slate-200 bg-white p-6 transition hover:shadow-md"
        >
          <NuxtLink :to="article.path" class="block space-y-2">
            <time
              v-if="article.date"
              class="text-xs font-semibold uppercase tracking-wider text-blue-600"
            >
              {{ new Date(article.date).toLocaleDateString('en-MY', { year: 'numeric', month: 'long', day: 'numeric' }) }}
            </time>
            <h2 class="text-xl font-bold text-slate-900 hover:text-blue-700">
              {{ article.title }}
            </h2>
            <p v-if="article.description" class="text-sm text-slate-600">
              {{ article.description }}
            </p>
          </NuxtLink>
        </article>
      </div>

      <p v-else class="text-slate-500">No articles published yet. Check back soon.</p>

      <NuxtLink to="/" class="mt-10 inline-block text-sm font-semibold text-blue-600 hover:underline">
        ← Back to home
      </NuxtLink>
    </main>

    <LandingSiteFooter />
  </div>
</template>
