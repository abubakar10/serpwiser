# SERP Wiser

Digital marketing agency website built with React, Tailwind CSS, and Vite. Fully responsive and production-ready for Netlify.

## Features

- **Home**: Hero, What We Do, How We Work, Our Expertise, Why Choose Us, Case Studies, Impact, Trust, Contact form, Testimonials
- **What We Do dropdown**: Mega menu with Optimization, Web Design & Development, Marketing & Design columns + Contact CTA
- **Service pages**: All services from the dropdown have dedicated pages (SEO, Ecommerce SEO, GEO, Website Dev, WordPress, Shopify, Social Media, PPC, Logo Design, Content Marketing, Email Marketing)
- **Case Study** and **Contact** pages
- **Privacy** and **Terms** placeholder pages
- Responsive layout (mobile, tablet, desktop) with mobile hamburger menu

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
