# Nature Trade — Demo Storefront

**Crafted by Tradition. Rooted in Nature.**

A premium, cinematic e-commerce demo for **Nature Trade** — the cultural-commerce
portal of the **North East Development Forum (NEDF)**, showcasing the handwoven
textiles, handicrafts and heritage of the eight states of Northeast India.

Built by **N8E Labs**.

---

## ✨ Tech stack

- **React 18** + **Vite** (SPA)
- **React Router** (`HashRouter` — works on GitHub Pages & `file://` with no server config)
- **Tailwind CSS v4** (brand theme defined in `src/index.css`)
- **Framer Motion** (cinematic transitions & scroll reveals)
- **lucide-react** (icons)

Fonts: *Cormorant Garamond* (display) + *Inter* (UI), loaded from Google Fonts.
Photography: curated, free-to-use Unsplash imagery, centralised in `src/data/images.js`.

---

## 🚀 Quick start

```bash
npm install
npm run dev          # http://localhost:5173
```

Build & preview a production bundle:

```bash
npm run build
npm run preview
```

> **Heads-up:** the demo loads fonts, flag thumbnails (flagcdn.com) and photography
> (images.unsplash.com) over the network, so view it with an internet connection.

---

## 🌐 Deploy to GitHub Pages

A workflow is included at `.github/workflows/deploy.yml`. To go live:

1. Push to `main` (see below).
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The site builds and publishes automatically on every push to `main`.

Because the app uses a relative base (`base: './'`) and `HashRouter`, it works at any
path — a GitHub Pages project URL, a custom domain (`naturetradestore.in`), or even
opened from a built `dist/index.html`.

---

## 🗺️ Pages & routes

| Route | Page |
|---|---|
| `/` | Home — hero, interactive NE map, artisan stories, featured collections |
| `/shop` | Shop — filters, sort, grid/list, pagination |
| `/product/:id` | Product — gallery, details, story tabs, related |
| `/northeast` | Discover Northeast — hero, map, state explorer, state cards |
| `/northeast/:slug` | Individual state page (Assam, Nagaland, … Sikkim) |
| `/artisans` | Artisans — collective, process, impact, certifications |
| `/journal` · `/journal/:slug` | Journal & article pages |
| `/about` | About NEDF / Nature Trade |
| `/register` · `/login` | Account creation & sign-in (mock auth) |
| `/members` | Member dashboard (orders, profile, payments, loyalty…) |
| `/admin` | Admin console (analytics, orders, inventory, CRM, marketing, settings) |
| `/wishlist` · `/cart` | Wishlist & cart (persisted) · `/search` site-wide search |

---

## 📁 Structure

```
src/
  data/        product, state, currency, journal & account data + image library
  context/     StoreContext — currency, cart, wishlist, auth (localStorage)
  components/  layout/ (header, footer, search…) · ui/ (carousel, map, cards…) · common.jsx
  pages/       one file per route
  lib/         price formatting, header mode
  index.css    Tailwind v4 + brand design system
```

## 🎨 Customising

- **Swap photography** → edit `src/data/images.js` (every image routes through it).
- **Brand colours / fonts** → `@theme` block in `src/index.css`.
- **Products / states / journal** → the corresponding files in `src/data/`.
- **Currencies & rates** → `src/data/currencies.js` (rates are indicative demo values).

---

© Nature Trade · North East Development Forum (NEDF) · Sivasagar, Assam.
