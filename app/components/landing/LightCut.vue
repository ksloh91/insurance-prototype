<script setup lang="ts">
// The page's signature device: a fragment of the logo's sunburst, used at
// every seam between a Daylight and an Ink section. Draws in once on view.
withDefaults(
  defineProps<{
    /** 'down' when transitioning into an Ink section, 'up' when leaving one */
    direction?: 'down' | 'up'
  }>(),
  { direction: 'down' },
)

const rayCount = 9
const rays = Array.from({ length: rayCount }, (_, i) => {
  const spread = 64
  const angle = -spread / 2 + (spread / (rayCount - 1)) * i
  const centered = Math.abs(i - (rayCount - 1) / 2)
  const length = 22 - centered * 3
  return { angle, length, delay: centered * 40 }
})
</script>

<template>
  <div
    class="relative flex h-14 items-end justify-center overflow-hidden"
    :class="direction === 'up' ? 'rotate-180' : ''"
    aria-hidden="true"
  >
    <span
      v-for="(ray, i) in rays"
      :key="i"
      v-motion
      class="absolute bottom-0 w-px origin-bottom bg-coral"
      :style="{ transform: `rotate(${ray.angle}deg)`, height: `${ray.length}px` }"
      :initial="{ scaleY: 0, opacity: 0 }"
      :visible="{ scaleY: 1, opacity: 1, transition: { duration: 500, delay: ray.delay, ease: [0.22, 1, 0.36, 1] } }"
    />
  </div>
</template>
