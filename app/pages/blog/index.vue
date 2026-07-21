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
  <div class="min-h-screen bg-daylight font-sans text-ink">
    <LandingSiteHeader />

    <main class="mx-auto max-w-4xl px-4 py-12">
      <LandingReveal>
        <h1 class="mb-2 font-display text-3xl font-bold text-ink">Articles & Insights</h1>
        <p class="mb-10 text-ink/70">
          Educational guides on insurance, loans, and financial planning in Malaysia.
        </p>
      </LandingReveal>

      <div v-if="articles?.length" class="space-y-6">
        <LandingReveal
          v-for="(article, i) in articles"
          :key="article.path"
          :delay="i * 80"
        >
        <article class="overflow-hidden border border-ink/10 bg-daylight transition duration-200 hover:border-coral/50">
          <NuxtLink :to="article.path" class="block">
            <img
              v-if="article.image"
              :src="article.image"
              :alt="article.title"
              class="aspect-[16/9] w-full object-cover"
              width="800"
              height="450"
              loading="lazy"
              decoding="async"
            />
            <div class="space-y-2 p-6">
              <time
                v-if="article.date"
                class="font-mono text-xs font-semibold uppercase tracking-wider text-coral-deep"
              >
                {{ new Date(article.date).toLocaleDateString('en-MY', { year: 'numeric', month: 'long', day: 'numeric' }) }}
              </time>
              <h2 class="font-display text-xl font-bold text-ink">
                {{ article.title }}
              </h2>
              <p v-if="article.description" class="text-sm text-ink/70">
                {{ article.description }}
              </p>
            </div>
          </NuxtLink>
        </article>
        </LandingReveal>
      </div>

      <p v-else class="text-ink/70">No articles published yet. Check back soon.</p>

      <NuxtLink to="/" class="mt-10 inline-block text-sm font-semibold text-coral-deep hover:underline">
        ← Back to home
      </NuxtLink>
    </main>

    <LandingSiteFooter />
  </div>
</template>
