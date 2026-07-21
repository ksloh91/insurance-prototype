<script setup lang="ts">
const { site } = useAppConfig()
const config = useRuntimeConfig()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-ink/10 bg-haze py-10 text-center text-xs text-stone">
    <div class="mx-auto max-w-6xl space-y-4 px-4">
      <div class="grid gap-6 text-left font-mono sm:grid-cols-3">
        <div>
          <p class="mb-1 font-semibold uppercase tracking-wider text-ink">Head Office</p>
          <p class="leading-relaxed">{{ site.address }}</p>
        </div>
        <div>
          <p class="mb-1 font-semibold uppercase tracking-wider text-ink">Email</p>
          <a :href="`mailto:${site.email}`" class="text-coral-deep hover:underline">
            {{ site.email }}
          </a>
        </div>
        <div>
          <p class="mb-1 font-semibold uppercase tracking-wider text-ink">Phone</p>
          <a :href="`tel:${site.phone.replace(/\s/g, '')}`" class="text-coral-deep hover:underline">
            {{ site.phone }}
          </a>
        </div>
      </div>

      <div class="flex flex-col items-center gap-2 pt-4">
        <LandingSiteLogo size="footer" />
        <p class="text-sm italic text-ink/70">{{ site.tagline }}</p>
        <p>© {{ year }} {{ site.name }}. All rights reserved.</p>
      </div>
      <p class="mx-auto max-w-lg leading-relaxed">
        Disclaimer: This platform is an educational landing system for licensed agency representatives.
        We comply with Malaysia's Personal Data Protection Act (PDPA).
      </p>
      <div class="flex justify-center gap-4 pt-2">
        <NuxtLink to="/blog" class="text-coral-deep hover:underline">Articles</NuxtLink>
        <a
          :href="`https://wa.me/${config.public.whatsappNumber}`"
          target="_blank"
          rel="noopener"
          class="text-coral-deep hover:underline"
        >
          WhatsApp
        </a>
      </div>
    </div>
  </footer>
</template>
