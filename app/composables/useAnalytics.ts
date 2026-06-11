declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    gtag?: (...args: unknown[]) => void
  }
}

/** Fire Meta Pixel Lead + GA4 generate_lead after a successful form submission. */
export function trackLeadConversion() {
  if (!import.meta.client) return

  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Lead')
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'generate_lead', {
      event_category: 'engagement',
      event_label: 'lead_form',
    })
  }
}
