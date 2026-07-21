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

// Unique per-instance ids so labels stay correctly associated even when
// both the light and dark variant of this form render on the same page.
const uid = useId()
const nameId = `${uid}-name`
const phoneId = `${uid}-phone`
const emailId = `${uid}-email`
const interestId = `${uid}-interest`

const fieldClass =
  'w-full border bg-transparent px-4 py-3 text-sm focus:border-coral focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral'
</script>

<template>
  <div
    :id="anchorId"
    class="relative scroll-mt-24 border p-6 sm:p-8"
    :class="isDark ? 'border-daylight/20 bg-ink text-daylight' : 'border-ink/15 bg-daylight text-ink'"
  >
    <!-- Corner registration marks: the form reads as a document, not a card -->
    <span
      v-for="corner in ['top-0 left-0 border-t border-l', 'top-0 right-0 border-t border-r', 'bottom-0 left-0 border-b border-l', 'bottom-0 right-0 border-b border-r']"
      :key="corner"
      class="absolute h-3 w-3 border-coral"
      :class="corner"
      aria-hidden="true"
    />

    <div v-if="isSuccess" class="space-y-4 py-6 text-center">
      <div
        class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sage/15 text-2xl text-sage"
      >
        ✓
      </div>
      <h3 class="font-display text-xl font-bold">Request received</h3>
      <p :class="isDark ? 'text-daylight/70' : 'text-ink/70'">
        A licensed advisor will reach out within 24 hours via WhatsApp.
      </p>
      <button
        type="button"
        class="text-sm font-semibold underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        :class="isDark ? 'text-coral-bright focus-visible:outline-coral-bright' : 'text-coral-deep focus-visible:outline-coral-deep'"
        @click="reset"
      >
        Submit another request
      </button>
    </div>

    <form v-else class="space-y-4" @submit.prevent="handleSubmit">
      <div class="space-y-1">
        <p
          class="font-mono text-xs uppercase tracking-widest"
          :class="isDark ? 'text-coral-bright' : 'text-coral-deep'"
        >
          Portfolio Review Request
        </p>
        <h2 class="font-display text-xl font-bold sm:text-2xl">Tell us where to reach you</h2>
        <p
          class="text-sm"
          :class="isDark ? 'text-daylight/60' : 'text-ink/70'"
        >
          A licensed advisor will look at your current coverage and tell you plainly where the gaps are.
        </p>
      </div>

      <div>
        <label
          :for="nameId"
          class="mb-1.5 block font-mono text-xs uppercase tracking-widest"
          :class="isDark ? 'text-daylight/50' : 'text-stone'"
        >
          Full Name
        </label>
        <input
          :id="nameId"
          v-model="form.name"
          type="text"
          required
          autocomplete="name"
          :class="[fieldClass, isDark ? 'border-daylight/25 text-daylight placeholder:text-daylight/50' : 'border-ink/20 text-ink placeholder:text-stone']"
          placeholder="e.g., Ahmad bin Abdullah"
        />
      </div>

      <div>
        <label
          :for="phoneId"
          class="mb-1.5 block font-mono text-xs uppercase tracking-widest"
          :class="isDark ? 'text-daylight/50' : 'text-stone'"
        >
          WhatsApp Number
        </label>
        <input
          :id="phoneId"
          v-model="form.phone"
          type="tel"
          required
          autocomplete="tel"
          inputmode="tel"
          :class="[fieldClass, isDark ? 'border-daylight/25 text-daylight placeholder:text-daylight/50' : 'border-ink/20 text-ink placeholder:text-stone']"
          placeholder="e.g., 012-3456789 (01x-xxxxxxx)"
        />
      </div>

      <div>
        <label
          :for="emailId"
          class="mb-1.5 block font-mono text-xs uppercase tracking-widest"
          :class="isDark ? 'text-daylight/50' : 'text-stone'"
        >
          Email <span class="font-sans normal-case">(optional)</span>
        </label>
        <input
          :id="emailId"
          v-model="form.email"
          type="email"
          autocomplete="email"
          :class="[fieldClass, isDark ? 'border-daylight/25 text-daylight placeholder:text-daylight/50' : 'border-ink/20 text-ink placeholder:text-stone']"
          placeholder="e.g., you@email.com"
        />
      </div>

      <div>
        <label
          :for="interestId"
          class="mb-1.5 block font-mono text-xs uppercase tracking-widest"
          :class="isDark ? 'text-daylight/50' : 'text-stone'"
        >
          I'm Interested In
        </label>
        <select
          :id="interestId"
          v-model="form.interest"
          :class="[fieldClass, isDark ? 'border-daylight/25 text-daylight' : 'border-ink/20 text-ink']"
        >
          <option v-for="opt in interestOptions" :key="opt" :value="opt" class="text-ink">
            {{ opt }}
          </option>
        </select>
      </div>

      <p v-if="error" class="text-sm" :class="isDark ? 'text-coral-bright' : 'text-coral-deep'">
        {{ error }}
      </p>

      <button
        type="submit"
        :disabled="isSubmitting"
        class="mt-2 w-full bg-coral py-4 text-center font-semibold text-daylight transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral disabled:opacity-60"
        :class="isDark ? 'hover:bg-daylight hover:text-ink' : 'hover:bg-ink hover:text-daylight'"
      >
        {{ isSubmitting ? 'Submitting…' : 'Request Free Consultation' }}
      </button>

      <p
        class="text-center text-xs leading-relaxed"
        :class="isDark ? 'text-daylight/50' : 'text-stone'"
      >
        By submitting, you agree to our PDPA-compliant data handling. No spam, ever.
      </p>
    </form>
  </div>
</template>
