<script setup lang="ts">
const { site } = useAppConfig()

withDefaults(
  defineProps<{
    size?: 'header' | 'footer' | 'hero'
  }>(),
  { size: 'header' },
)

const boxClass: Record<string, string> = {
  header: 'h-11 w-44 sm:h-12 sm:w-52 md:w-56',
  footer: 'h-12 w-48 sm:w-56',
  hero: 'h-14 w-56 sm:h-16 sm:w-64',
}
</script>

<template>
  <!-- Logo JPG has large whitespace; clip + scale so the mark reads clearly -->
  <div :class="['flex shrink-0 items-center overflow-hidden', boxClass[size]]">
    <img
      :src="site.logo"
      :alt="site.name"
      class="h-[250%] w-auto max-w-none origin-left object-contain object-left"
    />
  </div>
</template>
