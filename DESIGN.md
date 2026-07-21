# Lumos Advisory — Design System

## Grounding

Lumos Advisory is a licensed Malaysian insurance advisory. The name means
"light" and the tagline is "breaking the insurance industry taboo" — the
brand's actual position is that insurance in Malaysia is sold through
confusion, jargon and pressure, and Lumos's job is to make it legible. The
existing mark (a coral-red sunburst radiating beside a black wordmark) already
encodes this: light cutting through something obscured.

The previous design ignored that mark entirely — navy-blue gradients, amber
CTAs, glassy rounded cards, pulsing blur blobs, hover-scale on nearly every
element. It's the generic "high-converting funnel" template (fear stat →
urgency CTA → stat wall → comparison table → testimonials → FAQ), which is
literally what the project was originally briefed to build (see
`.cursorrules`). That structure is fine — it's kept — but every surface of it
reads as stock. This system re-derives the visual language from the one thing
that's actually specific to Lumos: light vs. obscurity.

**Page's single job:** get a qualified visitor to request a free portfolio
review, while feeling informed and respected rather than funneled.

## Color

Named, not decorative — each color maps to a role in the "light / obscured"
narrative.

| Name | Hex | Role |
|---|---|---|
| Daylight | `#FAF7F2` | Primary background — the page's default state is "lit" |
| Ink | `#1C1917` | Primary text; also the background for "obscured/problem" sections |
| Lumos Coral | `#E4472F` | Sampled from the logo sunburst. The one bold accent — CTAs, marks, key figures. Spent deliberately, not on every element |
| Stone | `#8C8478` | Secondary text, borders, muted labels |
| Haze | `#F0EAE0` | One step off Daylight — card/panel fill, dividers |
| Sage | `#4B6B54` | Functional only (form success state). Never decorative |

Rule: **Daylight is the default mode.** Ink sections are used only where the
copy is naming a problem or blind spot (the "harsh truth" stats, the closing
urgency block) — an intentional day/night rhythm down the page, not a mood
board. Coral never appears as a gradient or glow; it's used flat, as ink,
line, or fill.

## Type

| Role | Face | Notes |
|---|---|---|
| Display | Bricolage Grotesque | Headlines, big stat figures. Bold, characterful grotesk — used at size, tight tracking, restraint elsewhere |
| Body | Public Sans | Paragraphs, UI copy. Humanist and warm, deliberately not Inter |
| Utility/mono | IBM Plex Mono | Form labels, stat labels, comparison-table values, badges — small caps, tabular. Reinforces "precise, documented, licensed" |

## Layout & signature

- **Hero is bright, not dark.** Insurance funnels default to a serious navy
  hero; Lumos opens in Daylight instead, with a large thin-line sunburst
  (drawn from the actual logo mark) radiating behind the headline. Literally
  leads with light.
- **The lead form is a document, not a SaaS card.** Hairline ink border,
  small corner tick marks (registration marks), mono field labels — it should
  read like a form you'd actually fill in at an advisor's desk, not a glossy
  gradient card.
- **Cards are flat.** Hairline `ink/10` borders, minimal/no shadow, generous
  padding. No `rounded-2xl` + `shadow-md` + hover-lift-everything.
- **Signature element — "the light-cut":** a thin radiating hairline arc
  (a fragment of the logo's sunburst) marks every transition between a
  Daylight and Ink section, and sits beside section eyebrows. It's the one
  recurring device the page is built around — everything else stays quiet so
  this reads as intentional rather than decorative clutter.

## Motion

Dialed down deliberately — pulsing blur blobs and hover-scale-on-everything
are the clearest "AI template" tell in the original build.

- One orchestrated hero load-in (staged rise/fade, slower pacing than before).
- Scroll reveals kept, simplified to opacity + small rise only.
- The light-cut arc draws in once when its section enters view — the one
  signature interaction on the page.
- Buttons/links use color and underline shifts, not scale bounce.
- `prefers-reduced-motion` is respected globally (already wired in `app.vue`).

## Copy tone

Calmer and advisory-led. Real facts and figures are kept (medical inflation,
claim stories, coverage-gap stats) but reframed as things an advisor would
tell you plainly, not direct-response hooks. Concretely: fewer stacked CTAs,
declarative headlines instead of rhetorical-question hooks, one clear next
step per section instead of urgency stacking.

## Applying this system

- Tokens live in `tailwind.config.ts` under `colors.daylight/ink/coral/stone/
  haze/sage` and `fontFamily.display/sans/mono`.
- Fonts are loaded via `nuxt.config.ts` (Google Fonts links) — no new
  dependency required.
- The light-cut motif is a shared component: `LandingLightCut.vue`.
