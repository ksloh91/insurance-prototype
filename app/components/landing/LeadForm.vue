<script setup lang="ts">
import type { LeadFormData } from '~/composables/useLeadForm'

const props = withDefaults(
  defineProps<{
    variant?: 'dark' | 'light'
    compact?: boolean
    anchorId?: string
  }>(),
  { variant: 'dark', compact: false },
)

const form = reactive<LeadFormData>({
  name: '',
  phone: '',
  email: '',
  interest: 'Free Portfolio Review',
  message: '',
})

const { isSubmitting, isSuccess, error, submitLead, reset } = useLeadForm()

const interestOptions = [
  'Free Portfolio Review',
  'Medical Card Upgrade',
  'Critical Illness Protection',
  'Eldercare & Long-Term Care',
  'Life Insurance Planning',
  'Mortgage / Loan Advisory',
]

async function handleSubmit() {
  await submitLead({ ...form })
}

const isDark = computed(() => props.variant === 'dark')
</script>

<template>
  <div
    :id="anchorId"
    class="scroll-mt-24 rounded-2xl p-6 shadow-2xl sm:p-8"
    :class="
      isDark
        ? 'bg-slate-900 text-white'
        : 'border border-slate-200 bg-white text-slate-900'
    "
  >
    <div v-if="isSuccess" class="space-y-4 py-6 text-center">
      <div
        class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-500/20 text-2xl text-green-400"
      >
        ✓
      </div>
      <h3 class="text-xl font-bold">Thank You!</h3>
      <p :class="isDark ? 'text-slate-400' : 'text-slate-600'">
        Our advisor will contact you within 24 hours via WhatsApp.
      </p>
      <button
        type="button"
        class="text-sm font-semibold text-blue-400 underline"
        @click="reset"
      >
        Submit another request
      </button>
    </div>

    <form v-else class="space-y-4" @submit.prevent="handleSubmit">
      <div class="space-y-1">
        <h2 class="text-xl font-bold sm:text-2xl">Request Your Free Consultation</h2>
        <p
          class="text-sm"
          :class="isDark ? 'text-slate-400' : 'text-slate-500'"
        >
          Licensed advisor will review your coverage gaps within 24 hours.
        </p>
      </div>

      <div>
        <label
          class="mb-1.5 block text-xs font-semibold uppercase tracking-wider"
          :class="isDark ? 'text-slate-300' : 'text-slate-600'"
        >
          Full Name
        </label>
        <input
          v-model="form.name"
          type="text"
          required
          autocomplete="name"
          class="w-full rounded-lg border px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
          :class="
            isDark
              ? 'border-slate-700 bg-slate-800 text-white'
              : 'border-slate-300 bg-white text-slate-900'
          "
          placeholder="e.g., Ahmad bin Abdullah"
        />
      </div>

      <div>
        <label
          class="mb-1.5 block text-xs font-semibold uppercase tracking-wider"
          :class="isDark ? 'text-slate-300' : 'text-slate-600'"
        >
          WhatsApp Number
        </label>
        <input
          v-model="form.phone"
          type="tel"
          required
          autocomplete="tel"
          inputmode="tel"
          class="w-full rounded-lg border px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
          :class="
            isDark
              ? 'border-slate-700 bg-slate-800 text-white'
              : 'border-slate-300 bg-white text-slate-900'
          "
          placeholder="e.g., 012-3456789 (01x-xxxxxxx)"
        />
      </div>

      <div>
        <label
          class="mb-1.5 block text-xs font-semibold uppercase tracking-wider"
          :class="isDark ? 'text-slate-300' : 'text-slate-600'"
        >
          Email <span class="font-normal normal-case">(optional)</span>
        </label>
        <input
          v-model="form.email"
          type="email"
          autocomplete="email"
          class="w-full rounded-lg border px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
          :class="
            isDark
              ? 'border-slate-700 bg-slate-800 text-white'
              : 'border-slate-300 bg-white text-slate-900'
          "
          placeholder="e.g., you@email.com"
        />
      </div>

      <div>
        <label
          class="mb-1.5 block text-xs font-semibold uppercase tracking-wider"
          :class="isDark ? 'text-slate-300' : 'text-slate-600'"
        >
          I'm Interested In
        </label>
        <select
          v-model="form.interest"
          class="w-full rounded-lg border px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
          :class="
            isDark
              ? 'border-slate-700 bg-slate-800 text-white'
              : 'border-slate-300 bg-white text-slate-900'
          "
        >
          <option v-for="opt in interestOptions" :key="opt" :value="opt">
            {{ opt }}
          </option>
        </select>
      </div>

      <p v-if="error" class="text-sm text-red-400">{{ error }}</p>

      <button
        type="submit"
        :disabled="isSubmitting"
        class="mt-2 w-full rounded-xl bg-blue-600 py-4 text-center font-bold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-700 disabled:opacity-60"
      >
        {{ isSubmitting ? 'Submitting…' : 'Secure My Free Consultation' }}
      </button>

      <p
        class="text-center text-xs leading-relaxed"
        :class="isDark ? 'text-slate-500' : 'text-slate-400'"
      >
        By submitting, you agree to our PDPA-compliant data handling. No spam, ever.
      </p>
    </form>
  </div>
</template>
