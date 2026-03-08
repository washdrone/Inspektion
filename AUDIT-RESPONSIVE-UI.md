# Responsive UI Audit — SurveyDrone

**Date**: 2026-03-08
**Scope**: Full responsive layout, interaction, and accessibility audit
**Status**: Audit complete — ready for implementation pass

---

## 1. Executive Summary

### Top 5 Most Important Issues

1. **Mobile menu does not lock body scroll** — When the mobile hamburger menu is open, the page behind it remains scrollable. Users can accidentally scroll the page while navigating the menu.
2. **Hero `min-h-[90vh]` causes overflow on mobile Safari** — Does not account for mobile browser chrome. On iOS Safari, the hero extends beyond the visible viewport.
3. **Fixed header (80px) overlaps content on non-Hero pages** — Pages starting with Breadcrumbs rely on fragile `pt-24` offset. No centralized header-offset strategy exists.
4. **ProcessSteps 5-column grid breaks on tablet** — `md:grid-cols-2` with 5 items creates a 2+2+1 orphan layout.
5. **Cookie banner overlaps mobile CTA** — Fixed-position cookie banner can overlap with the mobile menu's bottom CTA button on short viewports.

### Overall Quality Assessment

The codebase is well-structured with consistent component library, design tokens, and shared utility classes. The responsive foundation (mobile-first Tailwind, container widths, section padding) is solid. Issues are predominantly in interaction behavior (scroll lock, viewport units), edge-case breakpoint handling (tablet grids, narrow viewports), and a few contrast/accessibility gaps.

### Biggest Risks to Usability/Conversion

- Mobile navigation scroll leak degrades trust on first visit
- Hero viewport issues on iOS push the primary CTA below the fold
- Pricing page CTA buttons use non-standard styles, weakening conversion signal

---

## 2. Findings by Severity

### CRITICAL

#### C1. Mobile menu does not lock body scroll
- **What**: When `mobileMenuOpen` is `true`, the underlying `<body>` remains scrollable
- **Where**: `src/components/Header.tsx:132-157`
- **Why**: No `overflow: hidden` applied to body when menu opens
- **Root cause**: Missing `useEffect` to toggle `document.body.style.overflow`
- **Fix**: Add `useEffect` that sets `body.style.overflow = 'hidden'` when `mobileMenuOpen === true`

#### C2. Hero `min-h-[90vh]` broken on mobile Safari
- **What**: Hero uses `min-h-[90vh]` which on iOS Safari calculates against largest possible viewport
- **Where**: `src/components/Hero.tsx:48`
- **Why**: Mobile browsers dynamically resize viewport; `vh` units don't update
- **Root cause**: Using `vh` instead of `dvh` (dynamic viewport height)
- **Fix**: Change to `min-h-[90dvh]` with fallback: `min-h-[90vh] supports-[height:1dvh]:min-h-[90dvh]`

#### C3. Header overlap on content pages
- **What**: Fixed header at 80px overlaps breadcrumb/content area on non-Hero pages
- **Where**: `src/components/Breadcrumbs.tsx:20` — `pt-24` is fragile offset
- **Root cause**: Each page/component handles header offset independently
- **Fix**: Add `pt-20` to `<main>` in `layout.tsx` for centralized offset

### MAJOR

#### M1. ProcessSteps 5-column orphan on tablets
- **What**: Grid `md:grid-cols-2 lg:grid-cols-5` creates 2+2+1 layout at tablet
- **Where**: `src/components/ProcessSteps.tsx:28`
- **Fix**: Use `md:grid-cols-3 lg:grid-cols-5` or center orphan item

#### M2. Pricing page uses non-standard button styles
- **What**: CTAs use inline `rounded-lg`, `border-2 border-brand-500` instead of `.btn-primary`/`.btn-secondary`
- **Where**: `src/app/priser/page.tsx:164-170`
- **Fix**: Replace with standard button component classes

#### M3. Hero glow animations may cause horizontal overflow
- **What**: `transform: translate(30px) scale(1.1)` on full-width elements
- **Where**: `src/styles/globals.css:47-57`, `src/components/Hero.tsx:50-52`
- **Fix**: Constrain glow elements or reduce transform values

#### M4. Mobile menu lacks backdrop and transition
- **What**: Menu appears/disappears instantly with no overlay
- **Where**: `src/components/Header.tsx:132-157`
- **Fix**: Add backdrop overlay and CSS transition

#### M5. Desktop dropdown hover gap causes premature close
- **What**: `mt-1` gap between trigger and dropdown fires `onMouseLeave`
- **Where**: `src/components/Header.tsx:56,84`
- **Fix**: Remove gap or add debounce on close

#### M6. TrustBar items wrap poorly at 320–360px
- **What**: `gap-x-10` is too generous for narrow viewports
- **Where**: `src/components/TrustBar.tsx:14`
- **Fix**: Use `gap-x-4 sm:gap-x-8 lg:gap-x-10`

#### M7. Testimonials grid orphan at `md` breakpoint
- **What**: 3 items in `md:grid-cols-2` creates orphan third card
- **Where**: `src/components/Testimonials.tsx:29`
- **Fix**: Acceptable for 3 items; note for variable item counts

#### M8. Contact form submit button not visible on mobile during input
- **What**: Submit button scrolls out of view while filling fields
- **Where**: `src/components/ContactForm.tsx:113`
- **Fix**: Consider sticky submit on mobile or compact form layout

### MINOR

#### m1. Display font sizes jump abruptly between breakpoints
- **Where**: `src/components/Hero.tsx:79`
- **Fix**: Use `clamp()` for fluid typography

#### m2. Card hover effects stick on touch devices
- **Where**: `src/styles/globals.css` — `.card` class
- **Fix**: Wrap hover transforms in `@media (hover: hover)`

#### m3. FAQ icon constrains question text at 320px
- **Where**: `src/components/FaqAccordion.tsx:58`
- **Fix**: Reduce icon to `h-6 w-6` on mobile

#### m4. CookieBanner button order — decline before accept
- **Where**: `src/components/CookieBanner.tsx:37-43`
- **Fix**: Swap order so "Acceptera" comes first

#### m5. `section-padding` excessive on mobile (80px)
- **Where**: `src/styles/globals.css` — `.section-padding`
- **Fix**: Change to `py-14 md:py-24 lg:py-32`

#### m6. Footer regions 2-col grid with 11 items — orphan
- **Where**: `src/components/Footer.tsx:66`
- **Fix**: Cosmetic only, no action needed

#### m7. No focus indicator on mobile menu links
- **Where**: `src/components/Header.tsx:137-150`
- **Fix**: Add `focus-visible:ring-2 focus-visible:ring-accent-400`

#### m8. Breadcrumb wrapping with long labels at 320px
- **Where**: `src/components/Breadcrumbs.tsx:21`
- **Fix**: Add truncation on last breadcrumb item at narrow viewports

---

## 3. Standardization Opportunities

### 3.1 Button Styles
Pricing page defines ad-hoc button styles. **Rule**: All CTAs must use `.btn-primary`, `.btn-secondary`, `.btn-secondary-dark`, or `.btn-ghost`.

### 3.2 Section Heading Pattern
`text-center text-heading-lg sm:text-display` repeated across 8+ components. **Opportunity**: Extract `SectionHeading` component.

### 3.3 Reveal Animation Pattern
`useReveal()` + inline `style={{ opacity, transform }}` duplicated in 8 components. **Opportunity**: Extract `<Reveal>` wrapper component.

### 3.4 Card Content Structure
`UseCaseCards`, `RelatedServices`, `CaseStudyCard` share identical card-with-arrow pattern. **Opportunity**: Extract `LinkCard` component.

### 3.5 Container Max-Width Inconsistency
Some pages use `container-content max-w-4xl` to narrow within main container. **Rule**: Use `container-narrow` instead.

---

## 4. Implementation Plan

### Phase 1: Must-Fix
1. Add body scroll lock when mobile menu is open (C1)
2. Fix Hero viewport height with `dvh` fallback (C2)
3. Normalize header offset strategy (C3)
4. Fix desktop dropdown hover gap (M5)
5. Add hover media query guard on card effects (m2)

### Phase 2: Should-Fix
6. Add mobile menu backdrop + transition (M4)
7. Fix ProcessSteps tablet grid (M1)
8. Standardize pricing page buttons (M2)
9. Reduce TrustBar gap on narrow viewports (M6)
10. Add focus-visible on mobile menu links (m7)
11. Constrain hero glow elements (M3)

### Phase 3: Polish
12. Fluid typography with `clamp()` (m1)
13. Reduce `section-padding` on mobile (m5)
14. Swap CookieBanner button order (m4)
15. Reduce FAQ icon on mobile (m3)
16. Extract `SectionHeading` component
17. Extract `Reveal` wrapper component
18. Extract `LinkCard` component

---

## 5. Implementation Checklist

1. [ ] `Header.tsx` — Add `useEffect` for body scroll lock on mobile menu open
2. [ ] `Hero.tsx:48` — Change `min-h-[90vh]` to `min-h-[90vh] min-h-[90dvh]`
3. [ ] `layout.tsx` — Add `pt-20` to `<main>`; adjust Breadcrumbs and Hero top padding
4. [ ] `Header.tsx:56,84` — Remove `mt-1` from dropdowns or add 150ms close debounce
5. [ ] `globals.css` `.card` — Wrap hover effects in `@media (hover: hover)`
6. [ ] `Header.tsx` — Add backdrop overlay + CSS transition for mobile menu
7. [ ] `ProcessSteps.tsx:28` — Change to `md:grid-cols-3 lg:grid-cols-5`
8. [ ] `priser/page.tsx:164-170` — Use `.btn-primary w-full` / `.btn-secondary w-full`
9. [ ] `TrustBar.tsx:14` — Change to `gap-x-4 sm:gap-x-8 lg:gap-x-10`
10. [ ] `Header.tsx:137-150` — Add `focus-visible:ring-2 focus-visible:ring-accent-400`
11. [ ] `globals.css` hero glows — Add `will-change: transform`, reduce translate values
12. [ ] `Hero.tsx:79` — Replace stepped font sizes with `clamp()`
13. [ ] `globals.css` `.section-padding` — Change to `py-14 md:py-24 lg:py-32`
14. [ ] `CookieBanner.tsx:37-43` — Swap button order
15. [ ] `FaqAccordion.tsx:58` — Change icon to `h-6 w-6 sm:h-8 sm:w-8`
16. [ ] Extract `SectionHeading` component
17. [ ] Extract `<Reveal>` wrapper component
18. [ ] Extract `LinkCard` component
