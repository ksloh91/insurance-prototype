<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /** Stagger delay in ms */
    delay?: number
    /** Slide distance in px */
    y?: number
    /** Animate on mount (hero) vs on scroll into view */
    onMount?: boolean
  }>(),
  { delay: 0, y: 28, onMount: false },
)

const transition = {
  duration: 700,
  delay: props.delay,
  ease: [0.22, 1, 0.36, 1],
}

const motion = computed(() => {
  const initial = { opacity: 0, y: props.y }
  const target = { opacity: 1, y: 0, transition }

  return props.onMount
    ? { initial, enter: target }
    : { initial, visible: target }
})
</script>

<template>
  <div v-motion="motion">
    <slot />
  </div>
</template>
