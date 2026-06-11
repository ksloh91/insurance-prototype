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
          class="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
          aria-hidden="true"
          @click="close"
        />

        <div
          class="relative w-full max-w-md rounded-2xl border border-amber-500/30 bg-white p-6 shadow-2xl shadow-slate-900/25 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="prototype-notice-title"
        >
          <div
            class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-2xl"
            aria-hidden="true"
          >
            🚧
          </div>

          <h2
            id="prototype-notice-title"
            class="text-center text-lg font-bold text-slate-900 sm:text-xl"
          >
            Prototype preview
          </h2>

          <p class="mt-3 text-center text-sm leading-relaxed text-slate-600 sm:text-base">
            This site is a work-in-progress demo for your review. Content, branding, and forms are
            not final — please do not share publicly or treat it as live.
          </p>

          <button
            type="button"
            class="mt-6 w-full rounded-lg bg-red-600 px-4 py-3 text-sm font-semibold text-white shadow-sm shadow-red-600/20 transition hover:bg-red-700 active:scale-[0.98]"
            @click="close"
          >
            I understand — view site
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
