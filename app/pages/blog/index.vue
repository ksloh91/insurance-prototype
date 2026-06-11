<script setup lang="ts">
const { site } = useAppConfig()

const { data: articles } = await useAsyncData('blog-list', async () => {
  const items = await queryCollection('blog').all()
  return [...items].sort((a, b) => {
    const aTime = a.date ? new Date(String(a.date)).getTime() : 0
    const bTime = b.date ? new Date(String(b.date)).getTime() : 0
    return bTime - aTime
  })
})

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
          class="overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:shadow-md"
        >
          <NuxtLink :to="article.path" class="block">
            <img
              v-if="article.image"
              :src="article.image"
              :alt="article.title"
              class="aspect-[16/9] w-full object-cover"
            />
            <div class="space-y-2 p-6">
              <time
                v-if="article.date"
                class="text-xs font-semibold uppercase tracking-wider text-red-600"
              >
                {{ new Date(article.date).toLocaleDateString('en-MY', { year: 'numeric', month: 'long', day: 'numeric' }) }}
              </time>
              <h2 class="text-xl font-bold text-slate-900 hover:text-red-700">
                {{ article.title }}
              </h2>
              <p v-if="article.description" class="text-sm text-slate-600">
                {{ article.description }}
              </p>
            </div>
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
