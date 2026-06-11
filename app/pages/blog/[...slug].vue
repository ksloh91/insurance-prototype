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
  <div class="min-h-screen bg-slate-50">
    <LandingSiteHeader />

    <article class="mx-auto max-w-3xl px-4 py-12">
      <NuxtLink to="/blog" class="text-sm font-semibold text-blue-600 hover:underline">
        ← All articles
      </NuxtLink>

      <header class="mt-6 space-y-3 border-b border-slate-200 pb-8">
        <time
          v-if="article?.date"
          class="text-xs font-semibold uppercase tracking-wider text-blue-600"
        >
          {{ new Date(article.date).toLocaleDateString('en-MY', { year: 'numeric', month: 'long', day: 'numeric' }) }}
        </time>
        <h1 class="text-3xl font-bold text-slate-900 sm:text-4xl">
          {{ article?.title }}
        </h1>
        <p v-if="article?.description" class="text-lg text-slate-600">
          {{ article.description }}
        </p>
      </header>

      <div class="prose prose-slate prose-headings:font-bold prose-a:text-blue-600 mt-8 max-w-none">
        <ContentRenderer v-if="article" :value="article" />
      </div>
    </article>

    <LandingSiteFooter />
  </div>
</template>
