<script setup lang="ts">
const route = useRoute()
const slug = computed(() => `/blog/${(route.params.slug as string[]).join('/')}`)

const { data: article } = await useAsyncData(`blog-${slug.value}`, () =>
  queryCollection('blog').path(slug.value).first(),
)

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found' })
}

useSeoMeta({
  title: `${article.value.title} — Lumos Advisory`,
  description: article.value.description,
})
</script>

<template>
  <div class="min-h-screen bg-daylight font-sans text-ink">
    <LandingSiteHeader />

    <article class="mx-auto max-w-3xl px-4 py-12">
      <NuxtLink to="/blog" class="text-sm font-semibold text-coral-deep hover:underline">
        ← All articles
      </NuxtLink>

      <header class="mt-6 space-y-4 border-b border-ink/10 pb-8">
        <img
          v-if="article?.image"
          :src="article.image"
          :alt="article.title"
          class="w-full border border-ink/10 object-cover"
          width="800"
          height="450"
          loading="eager"
          decoding="async"
          fetchpriority="high"
        />
        <time
          v-if="article?.date"
          class="font-mono text-xs font-semibold uppercase tracking-wider text-coral-deep"
        >
          {{ new Date(article.date).toLocaleDateString('en-MY', { year: 'numeric', month: 'long', day: 'numeric' }) }}
        </time>
        <h1 class="font-display text-3xl font-bold text-ink sm:text-4xl">
          {{ article?.title }}
        </h1>
        <p v-if="article?.description" class="text-lg text-ink/70">
          {{ article.description }}
        </p>
      </header>

      <div class="prose prose-headings:font-display prose-headings:font-bold mt-8 max-w-none">
        <ContentRenderer v-if="article" :value="article" />
      </div>
    </article>

    <LandingSiteFooter />
  </div>
</template>
