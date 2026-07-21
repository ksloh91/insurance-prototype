<script setup lang="ts">
const config = useRuntimeConfig()
</script>

<template>
  <a
    :href="`https://wa.me/${config.public.whatsappNumber}`"
    target="_blank"
    rel="noopener"
    aria-label="Chat on WhatsApp"
    class="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg shadow-ink/20 transition duration-200 hover:bg-green-400 sm:bottom-6 sm:right-6"
  >
    <img
      src="/images/icon-whatsapp.png"
      alt=""
      class="h-8 w-8"
      width="32"
      height="32"
      loading="lazy"
    />
  </a>
</template>
