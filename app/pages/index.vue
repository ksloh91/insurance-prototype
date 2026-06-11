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
</script>

<template>
  <div class="min-h-screen bg-slate-50 font-sans text-slate-800">
    <LandingSiteHeader />

    <!-- Hero: V100-style urgency hook -->
    <section class="bg-gradient-to-b from-blue-950 to-blue-900 text-white">
      <div class="mx-auto max-w-6xl px-4 py-14 lg:grid lg:grid-cols-2 lg:gap-12 lg:py-20">
        <div class="space-y-6">
          <p class="text-base italic leading-relaxed text-red-200 sm:text-lg">
            {{ site.tagline }}
          </p>
          <h1 class="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            92% of Malaysians Over 40 Have Coverage Gaps —
            <span class="text-blue-300">Are You Protected?</span>
          </h1>
          <p class="text-lg leading-relaxed text-blue-100">
            Stop relying on medical insurance that only covers hospital bills.
            Discover the overlooked plans that protect long-term care, critical illness,
            and your family’s financial future.
          </p>
          <div class="flex flex-col gap-3 sm:flex-row">
            <a
              href="#lead-form"
              class="rounded-xl bg-amber-400 px-8 py-4 text-center font-bold text-blue-950 shadow-lg transition hover:bg-amber-300"
            >
              Get Your Free Portfolio Review
            </a>
            <a
              :href="`https://wa.me/${config.public.whatsappNumber}`"
              target="_blank"
              rel="noopener"
              class="rounded-xl border border-white/30 px-8 py-4 justify-center text-center font-bold transition hover:bg-white/10 flex items-center gap-2"
            >
              Chat on WhatsApp
              <img src="/images/icon-whatsapp.png" alt="WhatsApp" class="w-8" />
            </a>
          </div>
          <p class="text-sm text-blue-300">
            Free consultation · No hidden charges · Licensed advisors
          </p>
        </div>

        <div class="mt-10 lg:mt-0">
          <LandingLeadForm />
        </div>
      </div>
    </section>

    <!-- Trust stats: MET-style -->
    <section class="border-b border-slate-200 bg-white py-12">
      <div class="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 md:grid-cols-4">
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <div class="text-3xl font-extrabold text-blue-700">{{ stat.value }}</div>
          <p class="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </section>

    <!-- 3 concerns: V100-style -->
    <section class="py-16">
      <div class="mx-auto max-w-6xl px-4">
        <div class="mx-auto mb-12 max-w-2xl text-center">
          <h2 class="text-3xl font-bold text-slate-900">
            The 3 Biggest Concerns Stopping Most Malaysians
          </h2>
          <p class="mt-3 text-slate-500">
            It’s normal to feel this way. That’s exactly why we offer a free, no-pressure review.
          </p>
        </div>
        <div class="grid gap-6 md:grid-cols-3">
          <article
            v-for="item in concerns"
            :key="item.title"
            class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 class="mb-3 text-lg font-bold text-slate-900">{{ item.title }}</h3>
            <p class="text-sm leading-relaxed text-slate-600">{{ item.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Harsh truth / stats block -->
    <section class="bg-slate-900 py-16 text-white">
      <div class="mx-auto max-w-4xl space-y-6 px-4 text-center">
        <h2 class="text-3xl font-bold">The Harsh Truth About Aging in Malaysia</h2>
        <p class="text-lg text-slate-300">
          70% of people over 65 will need long-term care — yet only 20% have adequate coverage.
          The rest pay out of pocket or become a burden on their children.
        </p>
        <div class="grid gap-4 pt-4 sm:grid-cols-3">
          <div class="rounded-xl bg-slate-800 p-5">
            <div class="text-2xl font-bold text-amber-400">RM 7,000</div>
            <p class="mt-1 text-sm text-slate-400">Avg. monthly care cost</p>
          </div>
          <div class="rounded-xl bg-slate-800 p-5">
            <div class="text-2xl font-bold text-amber-400">38%</div>
            <p class="mt-1 text-sm text-slate-400">Leading cause: Stroke</p>
          </div>
          <div class="rounded-xl bg-slate-800 p-5">
            <div class="text-2xl font-bold text-amber-400">4 yrs</div>
            <p class="mt-1 text-sm text-slate-400">Average care period</p>
          </div>
        </div>
        <a
          href="#lead-form"
          class="mt-6 inline-block rounded-xl bg-blue-600 px-8 py-4 font-bold transition hover:bg-blue-500"
        >
          Check My Coverage Gaps — Free
        </a>
      </div>
    </section>

    <!-- Comparison table: V100 + MET -->
    <section class="border-y border-slate-200 bg-white py-16">
      <div class="mx-auto max-w-6xl px-4">
        <div class="mx-auto mb-12 max-w-2xl text-center">
          <h2 class="text-3xl font-bold text-slate-900">
            Medical Card vs. Comprehensive Protection
          </h2>
          <p class="mt-2 text-slate-500">
            Understanding the difference is the first step to closing your coverage gaps.
          </p>
        </div>
        <div class="grid gap-6 md:grid-cols-2">
          <div
            v-for="side in [comparison.left, comparison.right]"
            :key="side.title"
            class="overflow-hidden rounded-2xl border border-slate-200"
          >
            <div
              class="px-6 py-4 font-bold"
              :class="
                side.title.includes('Comprehensive')
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-900'
              "
            >
              {{ side.title }}
            </div>
            <dl class="divide-y divide-slate-100">
              <div
                v-for="[label, value] in side.rows"
                :key="label"
                class="grid grid-cols-2 gap-2 px-6 py-3 text-sm"
              >
                <dt class="font-semibold text-slate-700">{{ label }}</dt>
                <dd class="text-slate-600">{{ value }}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>

    <!-- Why choose us: MET pillars -->
    <section class="py-16">
      <div class="mx-auto max-w-6xl px-4">
        <div class="mx-auto mb-12 max-w-2xl text-center">
          <h2 class="text-3xl font-bold text-slate-900">
            We’ll Go the Extra Mile for Your Protection
          </h2>
          <p class="mt-2 text-slate-500">
            Partnering with licensed insurers to get the best rates tailored to your profile.
          </p>
        </div>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="pillar in pillars"
            :key="pillar.title"
            class="rounded-xl border border-slate-200 bg-white p-6"
          >
            <h3 class="mb-2 font-bold text-blue-700">{{ pillar.title }}</h3>
            <p class="text-sm leading-relaxed text-slate-600">{{ pillar.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Client stories -->
    <section class="bg-blue-50 py-16">
      <div class="mx-auto max-w-6xl px-4">
        <h2 class="mb-10 text-center text-3xl font-bold text-slate-900">
          Real Client Outcomes
        </h2>
        <div class="grid gap-6 md:grid-cols-2">
          <blockquote
            v-for="story in stories"
            :key="story.tag"
            class="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm"
          >
            <span
              class="mb-3 inline-block rounded-full bg-blue-100 px-3 py-0.5 text-xs font-semibold text-blue-700"
            >
              {{ story.tag }}
            </span>
            <p class="text-sm italic leading-relaxed text-slate-700">“{{ story.quote }}”</p>
          </blockquote>
        </div>
      </div>
    </section>

    <!-- Advisor profile -->
    <section class="py-16">
      <div class="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
        <div class="flex aspect-square max-w-sm items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 text-6xl">
          👤
        </div>
        <div class="space-y-4">
          <span class="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Meet Your Advisor
          </span>
          <h2 class="text-3xl font-bold text-slate-900">Senior Licensed Consultant</h2>
          <p class="leading-relaxed text-slate-600">
            With {{ site.stats.experience }} years in the Malaysian insurance industry,
            our lead advisor has helped thousands of families secure medical, life, and
            eldercare protection — ensuring they never burden loved ones or sacrifice
            quality of care.
          </p>
          <ul class="space-y-2 text-sm text-slate-600">
            <li class="flex items-start gap-2">
              <span class="text-green-600">✓</span> Million Dollar Round Table qualifier
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-600">✓</span> President’s Club award recipient
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-600">✓</span> Specialises in eldercare & critical illness
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="border-t border-slate-200 bg-white py-16">
      <div class="mx-auto max-w-3xl px-4">
        <h2 class="mb-10 text-center text-3xl font-bold text-slate-900">
          Frequently Asked Questions
        </h2>
        <div class="divide-y divide-slate-200">
          <details
            v-for="faq in faqs"
            :key="faq.q"
            class="group py-4"
          >
            <summary class="cursor-pointer list-none font-semibold text-slate-900 marker:hidden">
              <span class="flex items-center justify-between gap-4">
                {{ faq.q }}
                <span class="text-blue-600 transition group-open:rotate-45">+</span>
              </span>
            </summary>
            <p class="mt-3 text-sm leading-relaxed text-slate-600">{{ faq.a }}</p>
          </details>
        </div>
      </div>
    </section>

    <!-- Bottom CTA + form -->
    <section class="bg-gradient-to-b from-slate-900 to-blue-950 py-20" id="lead-form">
      <div class="mx-auto max-w-xl px-4">
        <div class="mb-8 text-center text-white">
          <h2 class="text-2xl font-bold sm:text-3xl">
            The Best Time to Plan Was Yesterday. The Second-Best Is Today.
          </h2>
          <p class="mt-3 text-blue-200">
            Free portfolio review · No obligation · Licensed Malaysian advisors
          </p>
        </div>
        <LandingLeadForm />
      </div>
    </section>

    <LandingSiteFooter />
  </div>
</template>
