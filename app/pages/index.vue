<script setup lang="ts">
const { site } = useAppConfig()
const config = useRuntimeConfig()

useSeoMeta({
  title: `${site.name} — Free Insurance Portfolio Review`,
  description:
    'Licensed Malaysian insurance advisory. Medical cards, critical illness, eldercare & mortgage planning. Free consultation — no hidden charges.',
})

const stats = [
  { value: site.stats.founded, label: 'Established' },
  { value: site.stats.experience, label: 'Years of experience' },
  { value: site.stats.approvals, label: 'Approvals per year' },
  { value: site.stats.partners, label: 'Insurer partners' },
]

const concerns = [
  {
    title: '“I already have medical insurance — isn’t that enough?”',
    body: 'Most medical cards only cover hospital bills. They won’t pay for long-term nursing care, private caregivers, or retirement home stays.',
  },
  {
    title: '“I’m still healthy — isn’t it too early?”',
    body: 'That’s actually the best time. You qualify for better plans and lower premiums before any health issues appear.',
  },
  {
    title: '“I’m not rich — can I afford this?”',
    body: 'Our strategies are designed to make quality protection accessible without draining your savings or EPF.',
  },
]

const pillars = [
  {
    title: 'Fast Response',
    body: 'Dedicated support from application through claims — we’re with you for the life of your policy.',
  },
  {
    title: 'No Hidden Charges',
    body: 'We don’t charge clients to find the right plan. Our compensation comes from the insurer upon approval.',
  },
  {
    title: 'Reliable Information',
    body: 'We present facts and options clearly so you can make informed decisions — no pressure tactics.',
  },
  {
    title: 'One-Stop Solution',
    body: 'From paperwork to policy issuance, we manage the process on your behalf across multiple insurers.',
  },
]

const comparison = {
  left: {
    title: 'Medical Card Only',
    rows: [
      ['Covers', 'Hospital bills, surgery, medication'],
      ['When it pays', 'While you’re in hospital'],
      ['After discharge', 'Stops paying'],
      ['Typical claim', 'Days to weeks'],
      ['Main purpose', 'Protect against high hospital bills'],
    ],
  },
  right: {
    title: 'Comprehensive Protection',
    rows: [
      ['Covers', 'Hospital + critical illness + long-term care'],
      ['When it pays', 'Hospital + loss of independence (ADL)'],
      ['After discharge', 'Continues for months or years if needed'],
      ['Typical claim', 'Years (avg. 4 years care)'],
      ['Main purpose', 'Protect lifestyle, savings & family'],
    ],
  },
}

const faqs = [
  {
    q: 'Do I need to pay for the consultation?',
    a: 'No. The initial portfolio review is completely free with no obligation.',
  },
  {
    q: 'I already have medical insurance. Why should I review?',
    a: 'Medical inflation in Malaysia rises 10–15% yearly. Old plans may have coverage gaps, room limits, or co-pays that no longer match actual costs.',
  },
  {
    q: 'How soon will someone contact me?',
    a: 'Within 24 hours on business days via WhatsApp or phone — whichever you prefer.',
  },
  {
    q: 'Are you licensed?',
    a: 'Yes. We work with licensed insurers and Bank Negara-regulated products. All recommendations are backed by official policy documents.',
  },
]

const stories = [
  {
    quote:
      'A 69-year-old client suffered a stroke. Her eldercare policy paid RM 355,000+, covering care costs and easing her family’s burden.',
    tag: 'Eldercare claim',
  },
  {
    quote:
      'At 58, a director secured disability coverage. Four years later, a severe stroke meant she couldn’t return to work — her policy paid RM 300,000 in vital support.',
    tag: 'Disability income',
  },
]

// Signature hero visual: a faint fan of light rays echoing the logo's
// sunburst, spreading down across the hero like sunbeams. The one bold
// decorative element on the page — everything else stays quiet.
const sunRays = Array.from({ length: 13 }, (_, i) => {
  const spread = 130
  const angle = 25 + (spread / 12) * i
  const centered = Math.abs(i - 6)
  const length = 620 - centered * 34
  return { angle, length, delay: centered * 60, coral: i % 3 === 0 }
})
</script>

<template>
  <div class="min-h-screen bg-daylight font-sans text-ink">
    <LandingSiteHeader />

    <!-- Hero: leads with light, not urgency -->
    <section class="relative overflow-hidden border-b border-ink/10 bg-daylight">
      <div class="pointer-events-none absolute inset-0" aria-hidden="true">
        <div class="absolute left-1/2 top-0 h-0 w-0 -translate-x-1/2">
          <span
            v-for="(ray, i) in sunRays"
            :key="i"
            v-motion
            class="absolute left-0 top-0 h-px origin-left"
            :class="ray.coral ? 'bg-coral/20' : 'bg-ink/[0.06]'"
            :style="{ transform: `rotate(${ray.angle}deg)`, width: `${ray.length}px` }"
            :initial="{ scaleX: 0, opacity: 0 }"
            :enter="{ scaleX: 1, opacity: 1, transition: { duration: 900, delay: 200 + ray.delay, ease: [0.22, 1, 0.36, 1] } }"
          />
        </div>
      </div>

      <div class="relative mx-auto max-w-6xl px-4 py-14 lg:grid lg:grid-cols-2 lg:gap-12 lg:py-24">
        <div class="space-y-6">
          <LandingReveal :delay="0" on-mount>
            <p class="font-mono text-xs uppercase tracking-widest text-coral-deep sm:text-sm">
              {{ site.tagline }}
            </p>
          </LandingReveal>
          <LandingReveal :delay="80" on-mount>
            <h1 class="font-display text-3xl font-bold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Most Malaysians over 40 carry a coverage gap they’ve never seen.
            </h1>
          </LandingReveal>
          <LandingReveal :delay="160" on-mount>
            <p class="text-lg leading-relaxed text-ink/70">
              In our reviews, 92% of clients over 40 had at least one meaningful gap —
              usually in long-term care, not hospital cover. Medical cards stop at the
              hospital door; they don’t pay for the months or years of care that can follow.
            </p>
          </LandingReveal>
          <LandingReveal :delay="240" on-mount>
            <div class="flex flex-col gap-3 sm:flex-row">
              <a
                href="#lead-form"
                class="rounded-md bg-coral px-8 py-4 text-center font-semibold text-daylight transition duration-200 hover:bg-ink"
              >
                Request a Free Portfolio Review
              </a>
              <a
                :href="`https://wa.me/${config.public.whatsappNumber}`"
                target="_blank"
                rel="noopener"
                class="flex items-center justify-center gap-2 rounded-md border border-ink/20 px-8 py-4 text-center font-semibold text-ink transition duration-200 hover:border-ink hover:bg-ink hover:text-daylight"
              >
                Chat on WhatsApp
                <img src="/images/icon-whatsapp.png" alt="" class="w-6" />
              </a>
            </div>
          </LandingReveal>
          <LandingReveal :delay="320" on-mount>
            <p class="font-mono text-xs uppercase tracking-wider text-stone">
              Free review · No obligation · Licensed advisors
            </p>
          </LandingReveal>
        </div>

        <LandingReveal :delay="200" :y="24" on-mount class="mt-10 lg:mt-0">
          <LandingLeadForm variant="light" />
        </LandingReveal>
      </div>
    </section>

    <!-- Trust stats -->
    <section class="border-b border-ink/10 bg-daylight py-12">
      <div class="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 md:grid-cols-4">
        <LandingReveal
          v-for="(stat, i) in stats"
          :key="stat.label"
          :delay="i * 60"
        >
          <div class="border border-ink/10 bg-haze px-4 py-5 text-center">
            <div class="font-mono text-2xl font-bold text-ink sm:text-3xl">
              <LandingStatCounter :value="stat.value" />
            </div>
            <p class="mt-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-stone">
              {{ stat.label }}
            </p>
          </div>
        </LandingReveal>
      </div>
    </section>

    <LandingLightCut direction="down" />

    <!-- Concerns -->
    <section class="bg-ink py-16 text-daylight">
      <div class="mx-auto max-w-6xl px-4">
        <LandingReveal class="mx-auto mb-12 max-w-2xl text-center">
          <p class="mb-2 font-mono text-xs uppercase tracking-widest text-coral-bright">Why people wait</p>
          <h2 class="font-display text-3xl font-bold">
            The Questions Most People Ask Themselves First
          </h2>
          <p class="mt-3 text-daylight/60">
            None of these are unreasonable. Here’s a direct answer to each.
          </p>
        </LandingReveal>
        <div class="grid gap-6 md:grid-cols-3">
          <LandingReveal
            v-for="(item, i) in concerns"
            :key="item.title"
            :delay="i * 100"
          >
            <article class="h-full border border-daylight/15 p-6 transition duration-200 hover:border-coral/50">
              <h3 class="mb-3 font-display text-lg font-bold text-daylight">{{ item.title }}</h3>
              <p class="text-sm leading-relaxed text-daylight/60">{{ item.body }}</p>
            </article>
          </LandingReveal>
        </div>
      </div>

      <!-- Harsh truth stats: continues the same Ink section, no seam needed -->
      <div class="mx-auto mt-16 max-w-4xl space-y-6 border-t border-daylight/10 px-4 pt-16 text-center">
        <LandingReveal>
          <h2 class="font-display text-3xl font-bold">What Long-Term Care Actually Costs in Malaysia</h2>
          <p class="mt-4 text-lg text-daylight/60">
            70% of people over 65 will need long-term care. Only 1 in 5 has coverage that pays
            for it — the rest draw down savings, or lean on their children.
          </p>
        </LandingReveal>
        <div class="grid gap-4 pt-4 sm:grid-cols-3">
          <LandingReveal
            v-for="(item, i) in [
              { v: 'RM 7,000', l: 'Avg. monthly care cost' },
              { v: '38%', l: 'Leading cause: Stroke' },
              { v: '4 yrs', l: 'Average care period' },
            ]"
            :key="item.l"
            :delay="i * 80"
          >
            <div class="border border-daylight/15 p-5">
              <div class="font-mono text-2xl font-bold text-coral-bright">{{ item.v }}</div>
              <p class="mt-1 text-sm text-daylight/50">{{ item.l }}</p>
            </div>
          </LandingReveal>
        </div>
        <LandingReveal :delay="160">
          <a
            href="#lead-form"
            class="mt-6 inline-block bg-coral px-8 py-4 font-semibold text-daylight transition duration-200 hover:bg-daylight hover:text-ink"
          >
            See Where You Stand — Free Review
          </a>
        </LandingReveal>
      </div>
    </section>

    <LandingLightCut direction="up" />

    <!-- Comparison table -->
    <section class="border-b border-ink/10 bg-daylight py-16">
      <div class="mx-auto max-w-6xl px-4">
        <div class="mx-auto mb-12 max-w-2xl text-center">
          <h2 class="font-display text-3xl font-bold text-ink">
            Medical Card vs. Comprehensive Protection
          </h2>
          <p class="mt-2 text-ink/70">
            Here’s exactly where the difference shows up.
          </p>
        </div>
        <div class="grid gap-6 md:grid-cols-2">
          <LandingReveal
            v-for="(side, i) in [comparison.left, comparison.right]"
            :key="side.title"
            :delay="i * 100"
          >
            <div class="h-full border border-ink/15">
              <div
                class="px-6 py-4 font-display font-bold"
                :class="
                  side.title.includes('Comprehensive')
                    ? 'bg-coral text-daylight'
                    : 'bg-haze text-ink'
                "
              >
                {{ side.title }}
              </div>
              <dl class="divide-y divide-ink/10">
                <div
                  v-for="[label, value] in side.rows"
                  :key="label"
                  class="grid grid-cols-2 gap-2 px-6 py-3 text-sm"
                >
                  <dt class="font-mono text-xs font-semibold uppercase tracking-wide text-stone">{{ label }}</dt>
                  <dd class="text-ink/80">{{ value }}</dd>
                </div>
              </dl>
            </div>
          </LandingReveal>
        </div>
      </div>
    </section>

    <!-- Why choose us -->
    <section class="bg-daylight py-16">
      <div class="mx-auto max-w-6xl px-4">
        <div class="mx-auto mb-12 max-w-2xl text-center">
          <h2 class="font-display text-3xl font-bold text-ink">How We Work</h2>
          <p class="mt-2 text-ink/70">
            Partnering with licensed insurers to match coverage to your actual situation —
            not a one-size template.
          </p>
        </div>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <LandingReveal
            v-for="(pillar, i) in pillars"
            :key="pillar.title"
            :delay="i * 70"
          >
            <article class="h-full border border-ink/10 p-6 transition duration-200 hover:border-coral/50">
              <h3 class="mb-2 font-display font-bold text-ink">{{ pillar.title }}</h3>
              <p class="text-sm leading-relaxed text-ink/70">{{ pillar.body }}</p>
            </article>
          </LandingReveal>
        </div>
      </div>
    </section>

    <!-- Client stories -->
    <section class="border-y border-ink/10 bg-haze py-16">
      <div class="mx-auto max-w-6xl px-4">
        <h2 class="mb-10 text-center font-display text-3xl font-bold text-ink">
          What Coverage Actually Paid For
        </h2>
        <div class="grid gap-6 md:grid-cols-2">
          <LandingReveal
            v-for="(story, i) in stories"
            :key="story.tag"
            :delay="i * 100"
          >
            <blockquote class="border border-ink/10 bg-daylight p-6">
              <span class="mb-3 inline-block border border-coral/30 px-2.5 py-0.5 font-mono text-xs font-semibold uppercase tracking-wide text-coral-deep">
                {{ story.tag }}
              </span>
              <p class="text-sm italic leading-relaxed text-ink/80">“{{ story.quote }}”</p>
            </blockquote>
          </LandingReveal>
        </div>
      </div>
    </section>

    <!-- Advisor profile -->
    <section class="bg-daylight py-16">
      <div class="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
        <LandingReveal>
          <div class="aspect-square max-w-sm border border-ink/10">
            <img
              src="/images/img-portrait.jpeg"
              alt="Senior licensed insurance advisor at Lumos Advisory"
              class="h-full w-full object-cover"
              width="400"
              height="400"
              loading="lazy"
              decoding="async"
            />
          </div>
        </LandingReveal>
        <LandingReveal :delay="100">
          <div class="space-y-4">
            <span class="font-mono text-xs font-semibold uppercase tracking-widest text-coral-deep">
              Meet Your Advisor
            </span>
            <h2 class="font-display text-3xl font-bold text-ink">Senior Licensed Consultant</h2>
            <p class="leading-relaxed text-ink/70">
              With {{ site.stats.experience }} years in the Malaysian insurance industry,
              our lead advisor has helped thousands of families secure medical, life, and
              eldercare protection — ensuring they never burden loved ones or sacrifice
              quality of care.
            </p>
            <ul class="space-y-2 text-sm text-ink/70">
              <li class="flex items-start gap-2">
                <span class="text-coral-deep">✓</span> Million Dollar Round Table qualifier
              </li>
              <li class="flex items-start gap-2">
                <span class="text-coral-deep">✓</span> President’s Club award recipient
              </li>
              <li class="flex items-start gap-2">
                <span class="text-coral-deep">✓</span> Specialises in eldercare & critical illness
              </li>
            </ul>
          </div>
        </LandingReveal>
      </div>
    </section>

    <!-- FAQ -->
    <section class="border-t border-ink/10 bg-daylight py-16">
      <div class="mx-auto max-w-3xl px-4">
        <LandingReveal class="mb-10 text-center">
          <h2 class="font-display text-3xl font-bold text-ink">
            Frequently Asked Questions
          </h2>
        </LandingReveal>
        <div class="divide-y divide-ink/10">
          <LandingReveal
            v-for="(faq, i) in faqs"
            :key="faq.q"
            :delay="i * 50"
          >
            <details class="group py-4">
              <summary class="cursor-pointer list-none font-semibold text-ink marker:hidden">
                <span class="flex items-center justify-between gap-4">
                  {{ faq.q }}
                  <span class="text-coral-deep transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p class="mt-3 text-sm leading-relaxed text-ink/70">{{ faq.a }}</p>
            </details>
          </LandingReveal>
        </div>
      </div>
    </section>

    <LandingLightCut direction="down" />

    <!-- Bottom CTA + form -->
    <section class="bg-ink py-20">
      <div class="mx-auto max-w-xl px-4">
        <LandingReveal class="mb-8 text-center text-daylight">
          <h2 class="font-display text-2xl font-bold sm:text-3xl">
            Ready to see where you stand?
          </h2>
          <p class="mt-3 text-daylight/60">
            Free portfolio review · No obligation · A licensed advisor will walk you through it in plain language.
          </p>
        </LandingReveal>
        <LandingReveal :delay="100">
          <LandingLeadForm anchor-id="lead-form" variant="dark" />
        </LandingReveal>
      </div>
    </section>

    <LandingSiteFooter />
  </div>
</template>
