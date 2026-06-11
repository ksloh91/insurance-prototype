export interface LeadFormData {
  name: string
  phone: string
  email?: string
  interest: string
  message?: string
}

export function useLeadForm() {
  const config = useRuntimeConfig()
  const isSubmitting = ref(false)
  const isSuccess = ref(false)
  const error = ref<string | null>(null)

  async function submitLead(form: LeadFormData) {
    isSubmitting.value = true
    error.value = null

    try {
      await $fetch(config.public.formspreeEndpoint, {
        method: 'POST',
        body: {
          name: form.name,
          phone: form.phone,
          email: form.email || '',
          interest: form.interest,
          message: form.message || '',
          _subject: `New lead: ${form.interest}`,
        },
        headers: { Accept: 'application/json' },
      })

      trackLeadConversion()
      isSuccess.value = true
    } catch {
      error.value =
        'Submission failed. Please try again or contact us via WhatsApp.'
    } finally {
      isSubmitting.value = false
    }
  }

  function reset() {
    isSuccess.value = false
    error.value = null
  }

  return { isSubmitting, isSuccess, error, submitLead, reset }
}
