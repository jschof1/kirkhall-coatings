# Kirkhall Wall Coatings Website Transformation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the current website into a fully relevant, production-ready Kirkhall Wall Coatings site, including business-specific content, SEO/schema alignment, and new image assets.

**Architecture:** Keep the existing React/Vite route/component architecture, but replace business data at the source (`src/data/*`) and then eliminate hardcoded legacy copy in route/components. Add content-integrity tests to prevent brand/geography regression and complete with image generation + asset remapping.

**Tech Stack:** React 18, TypeScript, Vite, Vitest, React Router, react-helmet-async, Tailwind/shadcn, custom SEO scripts.

---

### Task 1: Add Content Integrity Guardrails (TDD Baseline)

**Files:**
- Create: `tests/content-integrity.spec.ts`
- Test: `tests/content-integrity.spec.ts`
- Modify: `package.json` (only if test script path adjustments are needed)

- [ ] **Step 1: Write the failing test**

```ts
import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const FILES = [
  "src/data/siteConfig.ts",
  "src/data/services.ts",
  "src/data/areas.ts",
  "src/data/seoCatalog.ts",
  "src/seo/routes.ts",
];

const FORBIDDEN = [
  "London Dec",
  "London & Kent",
  "Kent",
  "Wallpapering",
  "Gas Safe",
  "BESA",
];

describe("content integrity", () => {
  it("removes legacy brand/geography/service tokens", () => {
    const corpus = FILES.map((p) => readFileSync(join(ROOT, p), "utf8")).join("\n");
    for (const token of FORBIDDEN) {
      expect(corpus).not.toContain(token);
    }
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test -- tests/content-integrity.spec.ts`
Expected: FAIL with at least one forbidden token still present.

- [ ] **Step 3: Add a second failing test for canonical brand naming**

```ts
it("uses canonical brand naming", () => {
  const siteConfig = readFileSync(join(ROOT, "src/data/siteConfig.ts"), "utf8");
  expect(siteConfig).toContain("Kirkhall Wall Coatings");
});
```

- [ ] **Step 4: Run test again to verify controlled failure**

Run: `npm run test -- tests/content-integrity.spec.ts`
Expected: FAIL on canonical brand assertion before implementation changes.

- [ ] **Step 5: Commit**

```bash
git add tests/content-integrity.spec.ts
git commit -m "test: add content integrity guardrails for brand transformation"
```

### Task 2: Replace Core Business Identity and Contact/Trust Config

**Files:**
- Modify: `src/data/siteConfig.ts`
- Modify: `src/components/TopBanner.tsx`
- Test: `tests/content-integrity.spec.ts`

- [ ] **Step 1: Write minimal config implementation to satisfy brand test**

```ts
export const siteSettings = {
  businessName: "Kirkhall Wall Coatings",
  phone: "+44 7712 311478",
  phoneFormatted: "+447712311478",
  email: "kvaledrywall@yahoo.co.uk",
  address: "Kirkhall Road, Newarthill, Motherwell, ML1 5BG",
  // keep existing webhook keys until webhook reconciliation task
};

export const siteConfig = {
  business: {
    name: "Kirkhall Wall Coatings",
    shortName: "Kirkhall",
    tagline: "External Wall, Roof & uPVC Coatings Specialists",
    broadServiceName: "Property Coatings & Refurbishment",
    yearsExperience: 20,
    foundedYear: 2010,
  },
  serviceArea: {
    primary: "Motherwell",
    regions: ["North Lanarkshire", "Glasgow"],
    radiusMiles: 35,
  },
  trust: {
    insured: true,
    insuranceAmount: "Verified on request",
    certifications: ["ICORR coatings inspection", "Timeserved workforce"],
    responseTime: "24 Hours",
    guarantee: "Guaranteed workmanship",
  },
};
```

- [ ] **Step 2: Update top banner service-area copy to new territory**

```tsx
const displayArea = areaName || "Motherwell, North Lanarkshire & Glasgow";
```

- [ ] **Step 3: Run tests for this task**

Run: `npm run test -- tests/content-integrity.spec.ts`
Expected: Fewer failures than baseline; brand assertion should pass.

- [ ] **Step 4: Commit**

```bash
git add src/data/siteConfig.ts src/components/TopBanner.tsx tests/content-integrity.spec.ts
git commit -m "feat: switch core site identity to Kirkhall Wall Coatings"
```

### Task 3: Rebuild Service Data Model and Service SEO Entries

**Files:**
- Modify: `src/data/services.ts`
- Modify: `src/data/paintingServices.ts`
- Modify: `src/data/seoCatalog.ts`
- Test: `tests/content-integrity.spec.ts`

- [ ] **Step 1: Write failing service-shape test**

```ts
it("includes kirkhall core services", () => {
  const servicesFile = readFileSync(join(ROOT, "src/data/services.ts"), "utf8");
  expect(servicesFile).toContain('slug: "external-wall-coatings"');
  expect(servicesFile).toContain('slug: "roof-refurbishment"');
  expect(servicesFile).toContain('slug: "upvc-spraying"');
});
```

- [ ] **Step 2: Run test to verify failure**

Run: `npm run test -- tests/content-integrity.spec.ts`
Expected: FAIL because old service slugs still exist.

- [ ] **Step 3: Replace services with business-relevant entries**

```ts
export const services: Service[] = [
  {
    slug: "external-wall-coatings",
    title: "External Wall Coatings",
    metaTitle: "External Wall Coatings Motherwell & Glasgow | Kirkhall Wall Coatings",
    heroDescription:
      "Repair, biocide/seal, and minimum two-coat masonry coating systems for long-lasting external protection.",
    // ... features/pricing/faqs/process aligned to brief
  },
  {
    slug: "roof-refurbishment",
    title: "Roof Refurbishment",
    metaTitle: "Roof Refurbishment North Lanarkshire | Kirkhall Wall Coatings",
    // ...
  },
  {
    slug: "upvc-spraying",
    title: "uPVC Window & Door Spraying",
    metaTitle: "uPVC Spraying Motherwell & Glasgow | Kirkhall Wall Coatings",
    // ...
  },
];
```

- [ ] **Step 4: Align `seoCatalog` service entries with new slugs/titles**

```ts
export const serviceSeoEntries: ServiceSeoEntry[] = [
  { slug: "external-wall-coatings", title: "External Wall Coatings", metaTitle: "...", metaDescription: "..." },
  { slug: "roof-refurbishment", title: "Roof Refurbishment", metaTitle: "...", metaDescription: "..." },
  { slug: "upvc-spraying", title: "uPVC Window & Door Spraying", metaTitle: "...", metaDescription: "..." },
];
```

- [ ] **Step 5: Run tests**

Run: `npm run test -- tests/content-integrity.spec.ts`
Expected: PASS for service-shape test.

- [ ] **Step 6: Commit**

```bash
git add src/data/services.ts src/data/paintingServices.ts src/data/seoCatalog.ts tests/content-integrity.spec.ts
git commit -m "feat: replace legacy services with kirkhall coatings services"
```

### Task 4: Rebuild Area and Local SEO Data for Lanarkshire/Glasgow Coverage

**Files:**
- Modify: `src/data/areas.ts`
- Modify: `src/seo/routes.ts`
- Test: `tests/content-integrity.spec.ts`

- [ ] **Step 1: Add failing area-coverage test**

```ts
it("uses kirkhall target locations", () => {
  const areasFile = readFileSync(join(ROOT, "src/data/areas.ts"), "utf8");
  expect(areasFile).toContain('name: "Motherwell"');
  expect(areasFile).toContain('name: "Glasgow"');
  expect(areasFile).toContain('name: "Cumbernauld"');
});
```

- [ ] **Step 2: Run test to verify failure**

Run: `npm run test -- tests/content-integrity.spec.ts`
Expected: FAIL until areas are replaced.

- [ ] **Step 3: Replace area catalog with relevant localities only**

```ts
export const areas: Area[] = [
  { name: "Motherwell", slug: "motherwell", region: "North Lanarkshire", postcodes: ["ML1", "ML2"], responseTime: "Same day" },
  { name: "Glasgow", slug: "glasgow", region: "Glasgow", postcodes: ["G1", "G2", "G3"], responseTime: "Next day" },
  { name: "Cumbernauld", slug: "cumbernauld", region: "North Lanarkshire", postcodes: ["G67", "G68"], responseTime: "Next day" },
  // Coatbridge, Airdrie, Wishaw, Bellshill, Kilsyth
];
```

- [ ] **Step 4: Align static SEO routes and descriptions to new location strategy**

```ts
{
  path: "/locations",
  title: "Service Areas | Kirkhall Wall Coatings Motherwell, Lanarkshire & Glasgow",
  description: "Local wall coatings, roof refurbishment, and uPVC spraying across Motherwell, North Lanarkshire, and Glasgow.",
}
```

- [ ] **Step 5: Run tests**

Run: `npm run test -- tests/content-integrity.spec.ts`
Expected: PASS for area-coverage test and reduced legacy tokens.

- [ ] **Step 6: Commit**

```bash
git add src/data/areas.ts src/seo/routes.ts tests/content-integrity.spec.ts
git commit -m "feat: localize coverage data for motherwell lanarkshire and glasgow"
```

### Task 5: Update Shared Components with Coatings-Relevant Messaging

**Files:**
- Modify: `src/components/Header.tsx`
- Modify: `src/components/Hero.tsx`
- Modify: `src/components/ServicesGrid.tsx`
- Modify: `src/components/WhyChooseUs.tsx`
- Modify: `src/components/Testimonials.tsx`
- Modify: `src/components/FAQ.tsx`
- Modify: `src/components/TrustBar.tsx`
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Replace hardcoded service selector values and hero statements**

```tsx
<SelectItem value="external-wall-coatings">External Wall Coatings</SelectItem>
<SelectItem value="roof-refurbishment">Roof Refurbishment</SelectItem>
<SelectItem value="upvc-spraying">uPVC Window & Door Spraying</SelectItem>
```

- [ ] **Step 2: Replace trust/credential blocks with valid Kirkhall claims**

```tsx
const trustItems = [
  { icon: Shield, text: "ICORR Aware", subtext: "Coatings inspection standards" },
  { icon: Award, text: "Timeserved Workforce", subtext: "Top class workmanship" },
  { icon: Clock, text: "Fast Local Response", subtext: "Motherwell & surrounding areas" },
];
```

- [ ] **Step 3: Rewrite FAQ component defaults to coatings process FAQs**

```tsx
{
  question: "What does your external wall coating process involve?",
  answer:
    "We repair loose damage, apply biocide/sealer, then apply a minimum of two masonry coating coats for durable protection.",
}
```

- [ ] **Step 4: Run focused tests**

Run: `npm run test -- tests/content-integrity.spec.ts`
Expected: PASS, no legacy token failures from shared components.

- [ ] **Step 5: Commit**

```bash
git add src/components/Header.tsx src/components/Hero.tsx src/components/ServicesGrid.tsx src/components/WhyChooseUs.tsx src/components/Testimonials.tsx src/components/FAQ.tsx src/components/TrustBar.tsx src/components/Footer.tsx tests/content-integrity.spec.ts
git commit -m "feat: rewrite shared marketing components for kirkhall coatings context"
```

### Task 6: Rewrite High-Impact Pages and Route-Level SEO Copy

**Files:**
- Modify: `src/pages/Index.tsx`
- Modify: `src/pages/AboutPage.tsx`
- Modify: `src/pages/ServicesPage.tsx`
- Modify: `src/pages/ServiceDetailPage.tsx`
- Modify: `src/pages/LocationsPage.tsx`
- Modify: `src/pages/AreaPage.tsx`
- Modify: `src/pages/ReviewsPage.tsx`
- Modify: `src/pages/FAQPage.tsx`
- Modify: `src/pages/GetQuotePage.tsx`

- [ ] **Step 1: Add failing route-copy test for homepage SEO title**

```ts
it("homepage uses kirkhall seo title", () => {
  const indexPage = readFileSync(join(ROOT, "src/pages/Index.tsx"), "utf8");
  expect(indexPage).toContain("Kirkhall Wall Coatings");
});
```

- [ ] **Step 2: Run to confirm failure**

Run: `npm run test -- tests/content-integrity.spec.ts`
Expected: FAIL until page-level SEO strings are updated.

- [ ] **Step 3: Update route-level SEO/title/description blocks**

```tsx
<SEO
  title="Kirkhall Wall Coatings | External Wall, Roof & uPVC Specialists"
  description="Wall coatings refurbishment, roof refurbishment, and uPVC spraying across Motherwell, North Lanarkshire, and Glasgow."
  canonical="https://kirkhall-wall-coatings.co.uk/"
/>
```

- [ ] **Step 4: Update page narratives and CTAs to match brief**

```tsx
<h2 className="font-display text-3xl md:text-4xl text-foreground">
  External Wall, Roof and uPVC Coatings Done Properly
</h2>
<p className="text-muted-foreground">
  Repair, prep, seal, and spray-applied systems delivered by a timeserved coatings team.
</p>
```

- [ ] **Step 5: Run tests**

Run: `npm run test -- tests/content-integrity.spec.ts`
Expected: PASS for new route-copy checks.

- [ ] **Step 6: Commit**

```bash
git add src/pages/Index.tsx src/pages/AboutPage.tsx src/pages/ServicesPage.tsx src/pages/ServiceDetailPage.tsx src/pages/LocationsPage.tsx src/pages/AreaPage.tsx src/pages/ReviewsPage.tsx src/pages/FAQPage.tsx src/pages/GetQuotePage.tsx tests/content-integrity.spec.ts
git commit -m "feat: align route content and seo messaging with kirkhall wall coatings"
```

### Task 7: Align Structured Data, Canonicals, and Webhook Source of Truth

**Files:**
- Modify: `src/components/SEO.tsx`
- Modify: `src/seo/routes.ts`
- Modify: `src/data/siteConfig.ts`
- Modify: `docs/webhooks.md`
- Test: `tests/content-integrity.spec.ts`

- [ ] **Step 1: Add failing webhook consistency test**

```ts
it("site config and webhook docs stay consistent", () => {
  const cfg = readFileSync(join(ROOT, "src/data/siteConfig.ts"), "utf8");
  const docs = readFileSync(join(ROOT, "docs/webhooks.md"), "utf8");
  expect(cfg).toContain("services.leadconnectorhq.com/hooks/");
  expect(docs).toContain("services.leadconnectorhq.com/hooks/");
});
```

- [ ] **Step 2: Run test to capture current inconsistency**

Run: `npm run test -- tests/content-integrity.spec.ts`
Expected: FAIL or reveal mismatched endpoints during manual comparison.

- [ ] **Step 3: Reconcile webhook sources and update both files**

```ts
webhooks: {
  quote: "https://services.leadconnectorhq.com/hooks/<canonical>/webhook-trigger/<quote>",
  discount: "https://services.leadconnectorhq.com/hooks/<canonical>/webhook-trigger/<discount>",
  review: "https://services.leadconnectorhq.com/hooks/<canonical>/webhook-trigger/<review>",
  contact: "https://services.leadconnectorhq.com/hooks/<canonical>/webhook-trigger/<contact>",
},
```

- [ ] **Step 4: Ensure schema entities output Kirkhall-specific data**

```ts
const localBusinessSchema = {
  "@type": "HomeAndConstructionBusiness",
  name: "Kirkhall Wall Coatings",
  areaServed: [{ "@type": "Place", name: "North Lanarkshire" }, { "@type": "Place", name: "Glasgow" }],
};
```

- [ ] **Step 5: Run tests**

Run: `npm run test -- tests/content-integrity.spec.ts`
Expected: PASS for consistency and no forbidden legacy terms.

- [ ] **Step 6: Commit**

```bash
git add src/components/SEO.tsx src/seo/routes.ts src/data/siteConfig.ts docs/webhooks.md tests/content-integrity.spec.ts
git commit -m "fix: align schema and webhook configuration for kirkhall deployment"
```

### Task 8: Generate and Integrate New Business-Relevant Images

**Files:**
- Create: `docs/plans/2026-04-24-kirkhall-image-manifest.md`
- Create: `src/assets/kirkhall/` (new image outputs)
- Modify: `src/data/services.ts`
- Modify: `src/components/Hero.tsx`
- Modify: `src/components/WhyChooseUs.tsx`
- Modify: `src/pages/*` files that reference outdated imagery

- [ ] **Step 1: Create image manifest with exact mapping**

```md
# Kirkhall Image Manifest
- hero-external-wall-coating-16x9.webp -> Home hero
- service-external-wall-coatings-4x3.webp -> external wall service card/hero
- service-roof-refurbishment-4x3.webp -> roof service card/hero
- service-upvc-spraying-4x3.webp -> upvc service card/hero
- trust-team-workmanship-4x3.webp -> why-choose-us
```

- [ ] **Step 2: Generate first batch images (manual or scripted)**

Run: `npm run generate:kirkhall-images` (if script exists) or execute documented image generation prompts manually.
Expected: New files created under `src/assets/kirkhall/`.

- [ ] **Step 3: Wire new images into imports/usages**

```ts
import heroExternalWallImg from "@/assets/kirkhall/hero-external-wall-coating-16x9.webp";
import upvcSprayingImg from "@/assets/kirkhall/service-upvc-spraying-4x3.webp";
```

- [ ] **Step 4: Validate alt text relevance**

```tsx
alt="Kirkhall Wall Coatings team applying external wall coating in Motherwell"
```

- [ ] **Step 5: Commit**

```bash
git add docs/plans/2026-04-24-kirkhall-image-manifest.md src/assets/kirkhall src/data/services.ts src/components/Hero.tsx src/components/WhyChooseUs.tsx
git commit -m "feat: add kirkhall-specific generated imagery and asset mappings"
```

### Task 9: Final Verification, Regression Sweep, and Handoff Documentation

**Files:**
- Modify: `docs/plans/2026-04-24-kirkhall-wall-coatings-design.md` (status addendum)
- Modify: `docs/superpowers/plans/2026-04-24-kirkhall-wall-coatings-website-transform.md` (checklist status updates as work progresses)
- Test: `tests/content-integrity.spec.ts`

- [ ] **Step 1: Run full automated verification**

Run: `npm run test && npm run build`
Expected: PASS tests, PASS build pipeline (`generate-sitemap`, `build:static`, `build:prerender`, `verify:seo`).

- [ ] **Step 2: Run legacy-term sweep**

Run: `rg "London Dec|London & Kent|Wallpapering|Gas Safe|BESA|CHAS|NADC|QMS" src docs`
Expected: No matches in customer-facing content unless intentionally retained in historical notes.

- [ ] **Step 3: Perform manual route QA checklist**

```md
- Home reflects Kirkhall Wall Coatings
- Services only include coatings/roof/uPVC offerings
- Locations reflect Motherwell/North Lanarkshire/Glasgow set
- Forms submit successfully to canonical webhook URLs
- Structured data includes Kirkhall entity names
```

- [ ] **Step 4: Publish handoff notes for sub-agents**

```md
## Execution Notes
- Use one sub-agent per task.
- Do not merge task branches without test/build evidence.
- Preserve schema/SEO consistency with data-layer source of truth.
```

- [ ] **Step 5: Commit**

```bash
git add docs/plans/2026-04-24-kirkhall-wall-coatings-design.md docs/superpowers/plans/2026-04-24-kirkhall-wall-coatings-website-transform.md tests/content-integrity.spec.ts
git commit -m "docs: finalize kirkhall transformation verification and handoff checklist"
```

## Self-Review

### 1. Spec coverage

- Brand transformation: covered by Tasks 2, 5, 6, 7.
- Deep website relevance audit/remediation: covered by Tasks 1 through 7 with data + route + component sweeps.
- Agent/sub-agent execution clarity: covered by task file mapping, 2-5 minute step granularity, and per-task commit points.
- New images requirement: covered by Task 8 (manifest + generation + integration).

### 2. Placeholder scan

- No `TODO`, `TBD`, or "implement later" placeholders are used in execution steps.
- Commands and expected outcomes are explicit.

### 3. Type/signature consistency

- Service slug set is consistent across `services.ts`, `seoCatalog.ts`, route usage, and tests.
- Area model references remain tied to existing `Area` type shape in `areas.ts`.

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-04-24-kirkhall-wall-coatings-website-transform.md`. Two execution options:

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

Which approach?
