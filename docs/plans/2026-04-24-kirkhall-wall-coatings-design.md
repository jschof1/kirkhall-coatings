# Kirkhall Wall Coatings Website Transformation Design

## Goal

Transform the current site into a fully relevant, trustworthy, and SEO-aligned website for **Kirkhall Wall Coatings**, replacing all legacy London/Kent painting-and-decorating content with business-specific messaging, services, service areas, trust signals, and visual assets.

## Confirmed Brand Inputs

- Canonical brand name: **Kirkhall Wall Coatings**
- Primary focus services:
  - External wall coatings refurbishment
  - Roof refurbishment
  - uPVC windows/doors refurbishment and respraying (HVLP)
- Core service region:
  - Motherwell base
  - North Lanarkshire and Glasgow area
- Key trust signals:
  - ICORR coatings inspection accreditation
  - Top class workmanship and timeserved workforce
  - Work guarantee language (where legally/operationally valid)
- Promotions:
  - 10% referral discount
  - Review incentive tied to a homeless charity donation

## Deep Current-State Analysis

The current implementation is structurally strong (data-driven routes, reusable SEO, dynamic service/area/project pages) but content is heavily misaligned with the target business:

1. **Brand and geography drift**
   - `src/data/siteConfig.ts`, `src/seo/routes.ts`, `src/pages/*`, and multiple components still reference "London Dec", "London", and "Kent".
2. **Service model mismatch**
   - Service catalog is currently centered on interior painting, wallpapering, woodwork, and commercial decorating rather than coatings/refurbishment/uPVC spraying.
3. **Trust and compliance mismatch**
   - Trust badges and credentials include unrelated accreditations/logos (Checkatrade/Gas Safe/BESA/CHAS/NADC/QMS), while required ICORR and business-specific trust language are missing.
4. **Location architecture mismatch**
   - `src/data/areas.ts` contains London/Kent towns and metadata not relevant to Kirkhall Wall Coatings.
5. **SEO and schema inconsistency**
   - Static + dynamic SEO route metadata in `src/seo/routes.ts`, `src/data/seoCatalog.ts`, and inline page SEO props are all misaligned with brand/services/locations.
6. **Visual identity mismatch**
   - Image imports and alt text describe generic decorating imagery and London contexts.
7. **Potential operational inconsistency**
   - `docs/webhooks.md` contains webhook URLs that differ from `src/data/siteConfig.ts`; this needs reconciliation before launch.

## Approach Options

### Option A: Fast patch in existing pages

- Edit only visible text and a few data files.
- Pros: fast initial turnaround.
- Cons: high risk of hidden legacy references, schema drift, and long-term maintenance issues.

### Option B: Data-first replatform within current architecture (recommended)

- Keep route/component architecture, but centralize/replace business content and metadata at the data layer first, then patch page-level hardcoded strings.
- Pros: lower regression risk, consistent SEO output, easier future client swaps, cleaner agent execution.
- Cons: slightly longer than a surface-level patch.

### Option C: Full page rewrite

- Rebuild pages/components around new IA from scratch.
- Pros: highest design freedom.
- Cons: unnecessary scope and risk for this transformation; violates YAGNI for current objective.

## Recommended Design

Use **Option B** with a staged transformation pipeline:

1. **Content truth source first**
   - Define canonical business profile, service definitions, location metadata, trust claims, FAQ bank, and offer copy.
2. **Page and route parity pass**
   - Ensure every route and every section aligns to business context; remove obsolete claims and categories.
3. **SEO + schema hardening**
   - Align titles/descriptions/keywords/structured data to Kirkhall Wall Coatings entities and geographies.
4. **Image system replacement**
   - Generate and/or curate replacement images with consistent visual language and service relevance.
5. **Validation gates**
   - Content lint pass (legacy string detection), build + prerender + SEO verification, and manual route QA.

## Information Architecture (Target)

- Home: coatings-first positioning + lead capture + trust signals.
- Services index and service detail pages:
  - External wall coatings refurbishment
  - Roof refurbishment
  - uPVC spraying/refurbishment
- Areas index and area pages:
  - Motherwell + North Lanarkshire + Glasgow area cluster
- About:
  - Local positioning, timeserved workforce, quality process.
- Reviews:
  - Real/testimonial-safe content aligned to new geography.
- FAQ:
  - Process, durability, prep steps, pricing guidance, materials.
- Offers:
  - Referral discount and review incentive messaging.

## Image Generation Design

Use generated images where client-provided photos are absent or insufficient, with a strict mapping to section intent:

- Hero: external wall coating team in Scottish residential context.
- Services: 1 image per service (walls, roofs, uPVC spray finishes).
- Trust/about: workmanship detail shots and before/after style framing.
- Area pages: neutral local housing stock imagery for contextual relevance.

### Prompting constraints

- Brand/locale context: "Kirkhall Wall Coatings", Motherwell/North Lanarkshire/Glasgow visual cues.
- Avoid generic interior-decorating stock scenes.
- Include no fake certificates/brand logos in generated outputs.
- Maintain consistent color mood and composition across all generated sets.
- Prefer model workflows that preserve aspect ratio reliability and produce legible text only when text is intentional.

## Error Handling and Quality Controls

- Introduce a pre-launch legacy sweep:
  - detect forbidden legacy tokens (`London Dec`, `Kent`, unrelated accreditations, old service names).
- Enforce schema sanity checks:
  - organization name, service type labels, areaServed arrays, canonical URLs.
- Webhook consistency gate:
  - compare `docs/webhooks.md` and `src/data/siteConfig.ts`; select canonical source and update.

## Testing Strategy

- Automated:
  - `npm run test`
  - `npm run build` (includes sitemap/static/prerender/SEO verify)
- Content integrity checks:
  - repo-wide scan for legacy terms
  - route-level spot checks for metadata and heading alignment
- Manual acceptance:
  - all primary routes reflect Kirkhall Wall Coatings and relevant services/areas
  - all visible images are business-relevant
  - contact CTAs and forms still function with selected webhook config

## Out of Scope

- New feature development unrelated to content/brand transformation.
- Major architectural redesign of routing or component system.
- Paid ads, CRM automations, or external listing management beyond website content/schema.

## Handoff Notes for Agent Execution

- Implementation should proceed through a checklist-driven plan with small, verifiable commits.
- Agents must prioritize data-layer correctness, then page-level copy harmonization, then SEO/schema, then image replacement.
- Any uncertain business facts (e.g., alternate contact numbers/emails) must be flagged for explicit owner confirmation before production publish.
