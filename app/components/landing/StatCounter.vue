<script setup lang="ts">
const props = defineProps<{
  value: string
}>()

const el = ref<HTMLElement | null>(null)
const displayed = ref(props.value)

onMounted(() => {
  if (!el.value) return

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry?.isIntersecting) return
      observer.disconnect()
      animateValue()
    },
    { threshold: 0.5 },
  )

  observer.observe(el.value)
  onUnmounted(() => observer.disconnect())
})

function animateValue() {
  const match = props.value.match(/^([^0-9]*)([0-9]+)(.*)$/)
  if (!match) return

  const [, prefix, numStr, suffix] = match
  const target = Number(numStr)
  const duration = 1200
  const start = performance.now()

  function tick(now: number) {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - (1 - progress) ** 3
    displayed.value = `${prefix}${Math.round(target * eased)}${suffix}`
    if (progress < 1) requestAnimationFrame(tick)
    else displayed.value = props.value
  }

  requestAnimationFrame(tick)
}
</script>

<template>
  <span ref="el">{{ displayed }}</span>
</template>
