## Learned User Preferences

- When adding services or expanding copy, only include work the business actually performs; do not invent offerings they do not do.
- On dark navy backgrounds, favour high-contrast text and card surfaces over low-contrast accent-on-primary combinations.
- For theme and colour work, prefer centralized tokens and reusable utility classes in global CSS over scattered hard-coded hex values and fixed inline visual styles where behaviour does not require them.

## Learned Workspace Facts

- Remote Git repository: https://github.com/jschof1/kirkhall-coatings
- Canonical site URL in app config is https://kirkhall-wall-coatings.co.uk (SEO and schema should stay consistent with it).
- Client brief and verified public-footprint notes live in docs/kKrkhall-Coatings.md (filename keeps the brief spelling kKrkhall; public listings use Kirkhall).
- Webhook endpoints are documented in docs/webhooks.md and mirrored in src/data/siteConfig.ts under siteConfig.webhooks; tests/content-integrity.spec.ts enforces doc and config alignment.
- Site positioning is Kirkhall Wall Coatings: external wall coatings, roof refurbishment, and uPVC spraying across Motherwell, North Lanarkshire, and Glasgow.
- Hero and quote flows use service intent values such as external-wall-coatings, roof-refurbishment, and upvc-spraying alongside sensible fallbacks.
- Brand lockups and favicon use hand-authored SVGs under src/assets/branding/ with copies in public/ for absolute URLs and JSON-LD where needed.
- Static and prerender SEO metadata is defined in src/seo/routes.ts and must stay aligned with page-level SEO components so builds and integrity tests pass.
