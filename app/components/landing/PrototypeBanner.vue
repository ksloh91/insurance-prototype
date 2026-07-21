<script setup lang="ts">
const { site } = useAppConfig()

const open = ref(false)

function close() {
  open.value = false
}

function onKeydown(e: KeyboardEvent) {
  if (open.value && e.key === 'Escape') close()
}

onMounted(() => {
  if (site.prototype) open.value = true
  window.addEventListener('keydown', onKeydown)
})

watch(open, (visible) => {
  document.body.style.overflow = visible ? 'hidden' : ''
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open && site.prototype"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        role="presentation"
      >
        <div
          class="absolute inset-0 bg-ink/70 backdrop-blur-sm"
          aria-hidden="true"
          @click="close"
        />

        <div
          class="relative w-full max-w-md rounded-lg border border-coral/30 bg-daylight p-6 shadow-2xl shadow-ink/25 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="prototype-notice-title"
        >
          <div
            class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral/10 text-2xl"
            aria-hidden="true"
          >
            🚧
          </div>

          <h2
            id="prototype-notice-title"
            class="text-center font-display text-lg font-bold text-ink sm:text-xl"
          >
            Prototype preview
          </h2>

          <p class="mt-3 text-center text-sm leading-relaxed text-ink/70 sm:text-base">
            This site is a work-in-progress demo for your review. Content, branding, and forms are
            not final — please do not share publicly or treat it as live.
          </p>

          <button
            type="button"
            class="mt-6 w-full rounded-md bg-coral px-4 py-3 text-sm font-semibold text-daylight transition hover:bg-ink"
            @click="close"
          >
            I understand — view site
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
