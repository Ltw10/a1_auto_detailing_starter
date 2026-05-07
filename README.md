# A1 Auto Detailing Website

Multi-page static website starter for A1 Auto Detailing, inspired by the structure and tone of [Auto Magic](https://www.automagic-ky.com/).

## Pages

- `index.html` - Landing page (services, A1 way, before/after showcase)
- `about.html` - Story of A1 and owner background
- `pricing.html` - Detail package cards + pricing flyer
- `community.html` - Community gallery scaffold
- `contact.html` - Contact details and service area

## Tech

- Vite multi-page static build
- Shared header/footer and reusable page data in `scripts/content.js`
- All Instagram/customer images loaded from `assets/`

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages deployment

Deployment is automated by `.github/workflows/deploy.yml`.

1. Push to `main`
2. In GitHub repo settings, set **Pages** source to **GitHub Actions**
3. Wait for the workflow to finish; site publishes from `dist/`

The Vite base path is configured for this project repo path (`/a1_auto_detailing_starter/`) during GitHub Actions builds.

## Quick content edits

- Update package pricing/features in `scripts/content.js` (`detailPackages`)
- Update contact info in `scripts/content.js` (`siteConfig.contact`)
- Swap or add photos inside `assets/`, then update arrays in `scripts/content.js`
