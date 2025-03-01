# Astro template

This template uses the [Astro](https://astro.build/) web framework. Pages are generated via **SSG** (Static Site Generation). It uses **CSR** (Client Side Rendering) only where needed with the help of **React**. No need to use **Next.js** and **SSR** (Server Side Rendering).

Uses [TypeScript](https://www.typescriptlang.org/).

Uses [pnpm](https://pnpm.io/) as package manager.

## Folder structure

> TODO

## This template is configured for:

- [React](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) components
- [sharp](https://sharp.pixelplumbing.com/) - image processing
- **Icons** - icon packs:
  - [Lucide Icons](https://lucide.dev/) - icons used in app (`lucide-react` is better `lucide-astro`)
  - [Simple Icons](https://simpleicons.org/) - icons of companies (download only those needed)
  - [Astro Icons](https://www.astroicon.dev/) - usage of custom icons
- [i18n](https://github.com/astrolicious/i18n/) - internationalization
  - locales: `[cs_CZ, en_US, de_DE]`
- [sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) - generates `sitemap-index.xml` file
- [robots.txt](https://www.npmjs.com/package/astro-robots-txt) - generates `robots.txt` file
- [Plausible Analytics](https://plausible.io/about)
  - GDPR-friendly Google Analytics alternative
  - proxied via **Netlify** using `[[redirects]]` entries inside the `netlify.toml` file
  - change first `[[redirects]]` entry for tracking more events
- [Netlify Config](https://docs.netlify.com/configure-builds/file-based-configuration/)
  - file based config
  - contains Plausible proxy and [security headers](https://securityheaders.com/) config
- [Partytown](https://docs.astro.build/en/guides/integrations-guide/partytown/) - lazy loads scripts by relocating them into a web-worker
- [Netlify Forms](https://www.netlify.com/platform/core/forms/) - form handling
- [Sveltia CMS](https://github.com/sveltia/sveltia-cms) - Git-based CMS
  - any change forces a rebuild of the project => new content gets created via **SSG**
  - replaces DecapCMS => decoupling from **Netlify**
  - need to create an OAuth application on GitHub/GitLab
  - create serverless [authenticator](https://github.com/sveltia/sveltia-cms-auth)

## How to:

### Getting started

1. Copy this template and create a repo on **GitLab**
2. Change name in package.json
3. Change `PNPM_VERSION` in `.gitlab-ci.yml` if necessary
4. Fill out `config.ts` file
5. Set up **Plausible** tracking
6. Deploy this bad boy to **Netlify** ASAP
   1. Create a subdomain at [Cloudflare](https://dash.cloudflare.com/) - looks more professional
   2. Provision an SSL/TLS certificate
   3. Get Build hook (name it `GitLab CI/CD`) from **Netlify** and replace it in `.gitlab-ci.yml`
7. If using **Sveltia CMS**
   1. authentication via Netlify (authenticate with email and password)
      1. Enable **Identity** in Site Configuration on **Netlify**
      2. Change Registration to `invite only`
      3. Enable **Git Gateway**
   2. authentication via auth server (GitHub or GitLab - repo permission)
      1. change `backend: repo:` in `config.yml`
8. Create links in `links.ts`
9. Install fonts from [here](https://gwfh.mranftl.com/fonts)
   1. Extract and put into `/public` folder
   2. Edit preload `<link>` tags
10. Remove **i18n** and **DecapCMS** if not needed
11. Edit `global.css` for brand colors
12. Edit `Header.astro` `Footer.astro`, `Main.astro` and `Section.astro`
13. Create home page inside `index.astro`
14. Create the rest of the pages

### Audit website

1. Validate HTML [here](https://validator.w3.org/)
2. Check for broken links via [Dr. Link Check](https://www.drlinkcheck.com/)
3. Check for Performance, Accessibility, SEO and Best Practices at [PageSpeed Insights](https://pagespeed.web.dev/)
4. Create favicon at [Real Favicon Generator](https://realfavicongenerator.net/)
   1. Add it to the public folder and edit `<link>` tags in `<head>`
5. Generate JSON-LD schema [here](https://technicalseo.com/tools/schema-markup-generator/)
   1. Validate it with a [linter](http://linter.structured-data.org/)
6. Add website to [Google Search Console](https://search.google.com/search-console/about)
7. Add website to [Seznam Webmaster](https://reporter.seznam.cz/wm/)

### Add scheduling and payment:

1. Client creates [Cal.com](https://cal.com/) account
2. For payments create a [Stripe](https://stripe.com/en-cz) account
3. Connect **Cal.com** with **Stripe**
4. Create events in **Cal.com**
5. run `pnpm add @calcom/embed-react`
6. Embed code into `.astro` files

### Publishing the website

1. Validate **Plausible** is working
2. Use client email for forms in **Netlify**
3. Client buys a domain, most likely at [WEDOS](https://wedos.cz/domeny/).
4. Client gives me access to it.
5. Add an **A** and a **CNAME** record so that it points to **Netlify**
6. Create **1** email account for customer [MX Route](https://glacier.mxrouting.net:2222/evo/login)
7. Register website for monitoring with [Uptime Kuma](https://uptime.kuma.pet/)
8. Track keywords ranking with [SerpBear](https://docs.serpbear.com/)
