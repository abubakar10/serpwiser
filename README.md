# SERP Wiser

Digital marketing agency website built with React, Tailwind CSS, and Vite. Fully responsive and production-ready for Netlify.

## Features

- **Home**: Hero, What We Do, How We Work, Our Expertise, Why Choose Us, Case Studies, Impact, Trust, Contact form, Testimonials
- **What We Do dropdown**: Mega menu with Optimization, Web Design & Development, Marketing & Design columns + Contact CTA
- **Service pages**: All services from the dropdown have dedicated pages (SEO, Ecommerce SEO, GEO, Website Dev, WordPress, Shopify, Social Media, PPC, Logo Design, Content Marketing, Email Marketing)
- **Case Study** and **Contact** pages
- **Privacy** and **Terms** placeholder pages
- Responsive layout (mobile, tablet, desktop) with mobile hamburger menu
- **SEO**: Per-page meta (title, description, canonical), Open Graph & Twitter Cards, JSON-LD (Organization, WebSite, BreadcrumbList, Service), sitemap.xml, robots.txt, semantic HTML, skip link

## SEO

- **Per-route meta**: Each page has a unique `<title>`, `<meta name="description">`, and canonical URL via `react-helmet-async`.
- **Open Graph & Twitter**: Shared links get correct title, description, and image (set `VITE_SITE_URL` and add `public/og-image.webp` for best results and PageSpeed next-gen image score).
- **Structured data**: Home has Organization + WebSite schema; service pages have BreadcrumbList + Service schema.
- **Sitemap & robots**: `public/sitemap.xml` and `public/robots.txt` are included. For a custom domain, set **Build environment variable** in Netlify: `VITE_SITE_URL=https://yourdomain.com` and update the domain in `public/sitemap.xml` and `public/robots.txt` to match.

## Performance (PageSpeed)

- **Route-level code splitting**: Pages are lazy-loaded so the initial bundle is smaller; only the current route’s JS is loaded first.
- **Vendor chunks**: React, React DOM, React Router, and React Helmet are split into separate cacheable chunks.
- **Fonts**: Google Fonts are preconnected and preloaded with `display=swap` so text stays visible during load.
- **Build**: Production build uses esbuild minification and CSS minification. Add `public/og-image.webp` (e.g. 1200×630) for the “Serve images in next-gen formats” audit.

## Tech Stack

- React 19
- React Router 7
- Tailwind CSS 4
- Vite 7

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Output is in `dist/`.

## Deploy to Netlify

1. Push this repo to GitHub/GitLab/Bitbucket.
2. In Netlify: **New site from Git** → connect the repo.
3. Build settings (usually auto-detected):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy. SPA redirects are configured in `netlify.toml` so client-side routes work.

## Project Structure

```
src/
  components/   # Header, Footer, Hero, WhatWeDo, etc.
  pages/        # Home, Contact, CaseStudy, ServicePage, Privacy, Terms
  data/         # services.js, servicePages.js
```
