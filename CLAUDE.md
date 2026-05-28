# CLAUDE.md — Nature Trade demo

> Read this first. It orients you to the project, the conventions, and exactly what
> to do to take this demo from "authored but unbuilt" to a polished, verified,
> deployed website. The detailed task plan is in **`FINISHING_PLAN.md`** (same folder).

---

## 1. What this is

**Nature Trade** — the e-commerce portal of the **North East Development Forum (NEDF)**,
a non-profit (in collaboration with the Govt. of India) promoting the handicrafts,
handlooms, tourism and history of the **eight states of Northeast India**.

- Brand line: **"Crafted by Tradition. Rooted in Nature."**
- Positioning: a *cinematic digital museum* — old-money luxury meets cultural commerce.
- Domain: `naturetradestore.in` · Client: Sivasagar, Assam · Built by **N8E Labs**.
- Remote: **https://github.com/Partha607/nature-trade.git**

This repo is a **complete front-end demo** authored in Cowork mode. The author's
environment had **no npm registry, no GitHub network access, and no browser**, so the
code was written and **statically verified** (every import/export/hook checks out) but
**never actually built, run, or rendered**. Your job: build it, fix anything the bundler
flags, QA it visually against the mockups, then deploy.

---

## 2. Tech stack

- **React 18** + **Vite 5** (SPA)
- **React Router 6** — `HashRouter` (works on GitHub Pages & `file://` with no server config)
- **Tailwind CSS v4** via `@tailwindcss/vite` — theme tokens live in `src/index.css` (`@theme` block)
- **Framer Motion** — carousels, scroll reveals, modals
- **lucide-react** — all icons
- Fonts: Cormorant Garamond (display) + Inter (UI), via Google Fonts in `index.html`

No backend. State (cart, wishlist, currency, mock auth) is in `StoreContext` and persists
to `localStorage`.

---

## 3. Commands

```bash
npm install
npm run dev        # http://localhost:5173  ← start here
npm run build      # production build to /dist
npm run preview    # serve the built bundle
```

Deploy: push to `main`, then enable **Settings → Pages → Source: GitHub Actions**
(workflow is at `.github/workflows/deploy.yml`).

---

## 4. Architecture & conventions

```
src/
  main.jsx               # entry: HashRouter + StoreProvider
  App.jsx                # all routes (Layout wraps everything except /admin)
  index.css              # Tailwind v4 import + @theme tokens + design-system classes
  lib/
    format.js            # formatPrice(amountINR, currencyCode) — single source of price truth
    headerMode.js        # per-route header style (overlay | dark | light)
  context/StoreContext.jsx  # currency, cart, wishlist, mock user — persisted to localStorage
  data/                  # ALL content lives here — change content here, not in components
    images.js            # photo(id,w,q) helper + IMG map + STORY_PANELS — every image routes through this
    currencies.js        # 16 currencies (symbol, flag country code, indicative rate, decimals)
    states.js            # the 8 states (content, stats, treasures, accent gradients, hero images)
    products.js          # catalogue (priceINR base) + tab content (story/process/artisan/care…)
    collections.js, journal.js, navItems.js, account.js
  components/
    common.jsx           # Button, Reveal, Price, Stars, SectionHeading, Badge, Ornament
    layout/              # Header, Footer, Layout, AnnouncementBar, CurrencySelect, SearchOverlay, Logo, ScrollToTop
    ui/                  # Carousel, InteractiveMap, StoryAccordion, VideoModal, ProductCard, TrustStrip, AuthShell
  pages/                 # one file per route (Home, Shop, Product, Northeast, StatePage, Artisans,
                         #   Journal, JournalPost, About, Register, Login, Members, Admin,
                         #   Wishlist, Cart, SearchResults, NotFound)
```

**Conventions to keep:**
- **Colours/fonts:** use the theme tokens (`bg-forest`, `text-gold-700`, `ivory`, `stone`, `line`,
  etc.) defined in `src/index.css` — don't hardcode hex in components. Per-state colours come
  from `states.js` `accent`.
- **Prices:** always render via `<Price inr={…}/>` or `formatPrice(...)`. Base prices are INR.
- **Images:** add/replace via `src/data/images.js` only (so swapping to real photography is one file).
- **State pages** are data-driven from `states.js` — never hardcode a state in `StatePage.jsx`.
- **Routing:** keep `HashRouter` and `base: './'` in `vite.config.js` (required for GitHub Pages / file://).
- **Header** transparency is route-driven via `lib/headerMode.js` (`OVERLAY_ROUTES`). If you add a
  page with a dark full-bleed hero, add its path there.
- New icons: import from `lucide-react`. New shared UI: add to `components/common.jsx`.

---

## 5. START HERE (first session)

1. `npm install` then `npm run dev`. **Fix anything Vite reports** — the module graph was
   verified, so expect at most small JSX typos; the overlay shows the exact file:line.
2. Click through **every route** (list in §6). Confirm: nav, expanding search, currency
   switch (prices change everywhere), add-to-cart/wishlist (badges + persistence), filters &
   pagination on `/shop`, product tabs, the interactive map, video modals, mobile menu,
   `/login` → "Explore the demo account" → `/members`, and `/admin`.
3. **Visual QA against the mockups** in `../../docs/concept-nature_trade/` (also embedded in
   `../../docs/Nature_Trade_Demo_Walkthrough.html`). Take a screenshot of each route, compare,
   and tighten spacing/typography/layout. Work through `FINISHING_PLAN.md` Phase 1.
4. Commit & push (see §3). If git says the index is locked, close any open Git GUI on the folder.

Then continue through `FINISHING_PLAN.md` (content, a11y, performance, SEO, production roadmap).

---

## 6. Routes ↔ reference mockups

| Route | Mockup (`docs/concept-nature_trade/`) |
|---|---|
| `/` | `HOMEPAGE.png` |
| `/shop` | `SHOP_Page.png` |
| `/product/:id` | `PRODUCT_PAGE.png` |
| `/northeast` | `Discover_NORTHEAST_PAGE.png` |
| `/northeast/:slug` | `ASSAM.png`, `NAGALAND.png`, `MANIPUR.png`, `MEGHALAYA.png`, `ARUNACHAL.png`, `MIZORAM.png`, `SIKKIM.png`, `TRIPURA.png` |
| `/artisans` | `Artisan_Page.png` |
| `/journal` | `Journal_Page.png` |
| `/about` | `ABOUT_PAGE.png` |
| `/register`, `/login`, `/members`, `/admin`, `/wishlist`, `/cart`, `/search` | no mockup — designed on-brand |

---

## 7. Known approximations to refine (intentional shortcuts)

These work but were simplified for the first pass — improve toward the mockups:

- **Interactive map** (`components/ui/InteractiveMap.jsx`) uses *stylised* blob geometry, not
  survey-accurate state shapes. Replace `GEO` paths with an accurate Northeast-India SVG if higher
  fidelity is wanted (keep the same per-state click/colour API).
- **Product gallery** is thumbnail-column + main image; the mockup leans more "masonry". Optional upgrade.
- **Photography** is curated Unsplash stock — swap for real NEDF artisan photography via `data/images.js`.
- **Videos** ("Watch the Story", story panels) open a styled player *placeholder* (`VideoModal`) —
  wire real video URLs when available.
- **Currency rates** in `data/currencies.js` are indicative — connect a live FX source for production.
- **Auth/checkout** are simulated (no backend). See production roadmap in `FINISHING_PLAN.md`.

---

## 8. Guardrails

- Don't commit `node_modules/` or `dist/` (already git-ignored).
- Keep `HashRouter` + `base: './'` unless you also add the GitHub Pages SPA 404 fallback.
- Don't move content into components — keep it in `src/data/`.
- Preserve the brand palette & type scale; this is a luxury brand — restraint over decoration.
- Test mobile (≤640px), tablet, and desktop for every change.

**Definition of done for the demo:** every route renders cleanly with no console errors,
matches its mockup closely, is fully responsive, all links/CTAs work, currency/cart/wishlist/
search behave, and the site builds (`npm run build`) and deploys to a live GitHub Pages URL.
