# London Dec

Marketing site for `https://londondec.co.uk`, built with Vite, React, TypeScript, and Tailwind.

## Development

Install dependencies and start the local dev server:

```sh
npm install
npm run dev
```

## SEO Prerender Build

This project now uses a manifest-driven SEO pipeline.

Source of truth:

- `src/seo/routes.ts`
- `src/data/seoCatalog.ts` for the asset-free service/project metadata consumed by Node scripts

That manifest drives:

- `scripts/generate-sitemap.ts`
- `scripts/prerender.ts`
- `scripts/verify-seo-build.ts`

### Build Flow

```sh
npm run build
```

The build now does four things in order:

1. Generates `public/sitemap.xml` from `src/seo/routes.ts`
2. Builds the static app with Vite
3. Prerenders every SEO route into real `dist/.../index.html` files
4. Verifies prerendered metadata, sitemap coverage, and `noindex` tags

### SEO Verification

Run the verification step on its own with:

```sh
npm run verify:seo
```

This checks that every SEO route has:

- a prerendered HTML file
- the expected title
- the expected description
- the expected canonical URL
- a matching sitemap entry when it is indexable
- a `noindex` robots tag when it is not indexable

## Adding A New SEO Route

When adding a new static, service, area, or project page:

1. Add or update the source data
2. Update `src/data/seoCatalog.ts` when service or project SEO metadata changes
3. Update `src/seo/routes.ts` if the route is static or needs special metadata
4. Run `npm run test -- src/seo/routes.test.ts`
5. Run `npm run build`

Do not add separate route lists to sitemap or prerender scripts.

## Useful Commands

```sh
npm run dev
npm run test
npm run generate-sitemap
npm run build
npm run verify:seo
```
