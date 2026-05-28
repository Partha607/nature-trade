# Nature Trade — Finishing Plan

A phased, checkable plan to take the demo from *authored* to *polished, verified and
deployed*. Read `CLAUDE.md` first. Work top-to-bottom; each phase has a clear exit bar.
Tick boxes as you go.

Mockups: `../../docs/concept-nature_trade/*.png` (also embedded in
`../../docs/Nature_Trade_Demo_Walkthrough.html`).

---

## Phase 0 — Boot & triage  *(do this immediately)*

- [ ] `npm install` (Node 18+; 20 recommended).
- [ ] `npm run dev`; open http://localhost:5173.
- [ ] Resolve any errors Vite reports. The full import/export/hook graph was statically
      verified, so expect at most small JSX typos — the error overlay gives the exact file:line.
- [ ] Open the browser console; drive every route in §"Route checklist" below; note any
      runtime warnings (key props, image 404s, etc.).
- [ ] `npm run build` succeeds with no errors.

**Exit bar:** dev server runs, every route loads, `npm run build` passes, console is clean.

---

## Phase 1 — Visual fidelity pass (page-by-page vs mockups)

For **each** route: open it, open its mockup side-by-side, screenshot, and reconcile
layout, spacing, type scale, colour, and content. Use the acceptance checklists below
(these encode the client's original brief A–K).

### Home `/` — `HOMEPAGE.png`
- [ ] Header nav: Shop, Discover Northeast, Artisans, Journal, About, Membership + search,
      wishlist, cart, multi-currency dropdown (transparent over hero, solid on scroll).
- [ ] Primary hero carousel with 2 CTAs ("Explore Collections", "Discover the States").
- [ ] Secondary hero: interactive NE map (left) + selected-state panel with thumbnail, text,
      "Explore [state]" CTA (right). Hover/click a state updates the panel.
- [ ] Story accordion ("Behind Every Piece is a Person") — panels open a video lightbox.
- [ ] Featured Collections with "Shop Now" links.
- [ ] Footer: About / Quick Links / Policy / Contact / Socials.

### Shop `/shop` — `SHOP_Page.png`
- [ ] Thin hero strip: "Shop Collections" + supporting text over a textile background.
- [ ] Left filter panel: State, Category, Tribe/Community, Colour, Price.
- [ ] Sort control + grid/list view toggle; "Showing X of Y".
- [ ] Product cards: wishlist heart (top-right), badges, quick add-to-cart; click → product.
- [ ] Pagination; bottom trust strip (5 icons).

### Product `/product/:id` — `PRODUCT_PAGE.png`
- [ ] Row 1: gallery (left) + details (name, style, tribe, material, colour, price, rating);
      Add to Cart + Buy it Now + wishlist; trust graphics below.
- [ ] Row 2: six expandable tabs — The Story, Making Process, Artisan, Cultural Significance,
      Details & Care, Shipping & Returns (each with content + graphics; process = 6-step timeline).
- [ ] Row 3: "You May Also Like" related products.
- [ ] *(Optional)* upgrade gallery toward a masonry layout.

### Discover Northeast `/northeast` — `Discover_NORTHEAST_PAGE.png`
- [ ] Row 1: hero carousel of all 8 states + "Explore the States" & "Watch our Story" + numbered state list.
- [ ] Row 2: interactive map + "View all States".
- [ ] Row 3: circular state icons → swap a featured state (stats, video thumbnails) + "Explore [state]" & "View Products".
- [ ] Row 4: 8 interactive state cards → each opens its state page.

### State pages `/northeast/:slug` — `ASSAM.png` (+ 7 others)
- [ ] Hero carousel + "Watch the Story" + key-facts strip.
- [ ] Left sidebar: list of all 8 states, current one highlighted.
- [ ] "About [state]" + "Explore [state]" CTA; right-side cards (Stories, Heritage, Products, Artisans).
- [ ] "Explore [state]'s Treasures" infographics strip.
- [ ] Verify each of the 8 with its own accent palette: Assam, Nagaland, Manipur, Meghalaya,
      Arunachal Pradesh, Mizoram, Tripura, Sikkim.

### Artisans `/artisans` — `Artisan_Page.png`
- [ ] Hero with infographics both sides + quote (bottom-right) + "Shop the Collection".
- [ ] "The Art of Muga" process (6 steps).
- [ ] Our Impact / Artisan Stories / Certifications & Recognitions.
- [ ] Bottom values strip.

### Journal `/journal` — `Journal_Page.png`
- [ ] Hero carousel + intro + "Explore Stories".
- [ ] Explore by Theme; Featured Story; Latest Stories grid; Editor's Picks sidebar.
- [ ] Newsletter subscription; Journal Values strip.
- [ ] Article pages `/journal/:slug` render.

### About `/about` — `ABOUT_PAGE.png`
- [ ] Hero (split) + text.
- [ ] Our Purpose / Our Promise / Our Values.
- [ ] "The Spirit of Northeast" — 8 colour state cards.
- [ ] Meet the Artisans + stats; closing quote strip.

### Account, Members, Admin (no mockup — keep on-brand)
- [ ] `/register` + `/login` (mock auth → `/members`); social buttons; demo-account shortcut.
- [ ] `/members`: Orders (history/tracking/returns/invoices), Profile & Security
      (info/password/2FA/address book/social logins), Payments (cards/store credit/subscriptions),
      Personalisation (wishlist/reviews/browsing/alerts), Communication (notifications/marketing/
      language & currency), Support & Loyalty (points/tier/help desk).
- [ ] `/admin`: Overview & Analytics (sales/traffic/top products/customer insights + charts),
      Orders & Fulfillment, Product & Inventory, CRM, Marketing & Promotions, Settings & Governance.
- [ ] `/wishlist`, `/cart` (currency-aware totals, demo checkout), `/search` (site-wide).

**Exit bar:** every page closely matches its mockup (or its on-brand spec) on desktop.

---

## Phase 2 — Interaction & responsive QA

- [ ] All header/footer links and every CTA route correctly (no dead links).
- [ ] Search: header icon expands → submit → `/search` returns products, states, journal.
- [ ] Currency: switching updates prices on home, shop, product, cart, members.
- [ ] Cart & wishlist: add/remove/qty, badge counts, persistence across reload.
- [ ] Filters + sort + pagination + grid/list all behave on `/shop`; `?state=` / `?category=` deep-links work.
- [ ] Mobile (≤640px): drawer menu, filter drawer, stacked heroes, the story accordion, dashboards.
- [ ] Keyboard: Esc closes search/modals; focus states visible; tab order sane.
- [ ] No layout shift / overflow on tablet (768–1024px).

**Exit bar:** no broken links, clean responsive behaviour at 375 / 768 / 1280px.

---

## Phase 3 — Real content & imagery  *(coordinate with NEDF / client)*

- [ ] Replace curated Unsplash photos with real artisan/product/landscape photography —
      **edit `src/data/images.js` only** (helper `photo(id,w,q)` or swap to local `/public` assets).
- [ ] Real product catalogue in `src/data/products.js` (names, prices INR, tribe, material,
      colour, story/process/artisan/care/shipping per item).
- [ ] Real state copy, stats and treasures in `src/data/states.js`.
- [ ] Real journal articles in `src/data/journal.js` (+ full body in `pages/JournalPost.jsx`).
- [ ] Real artisan profiles for `/artisans`.
- [ ] Real "Watch the Story" video URLs → extend `VideoModal` to embed (YouTube/Vimeo/MP4).
- [ ] Confirm image licensing for anything shipped.

**Exit bar:** no placeholder content remains for launch-critical pages.

---

## Phase 4 — Accessibility, performance, SEO

- [ ] Meaningful `alt` text on all imagery (currently many decorative images use `alt=""`).
- [ ] Colour-contrast check (gold-on-ivory, ivory/70 on dark) to WCAG AA.
- [ ] `loading="lazy"` + width/height on non-hero images; preload hero images.
- [ ] Per-page `<title>` + meta description + Open Graph (add `react-helmet-async` or a small head manager).
- [ ] `sitemap.xml` + `robots.txt`; structured data (Product / BreadcrumbList) on shop/product.
- [ ] Run Lighthouse; target ≥90 Performance / ≥95 Accessibility / ≥95 Best-Practices / ≥95 SEO.
- [ ] Reduced-motion: respect `prefers-reduced-motion` (gate ken-burns / autoplay).

**Exit bar:** Lighthouse targets met; no a11y blockers.

---

## Phase 5 — Deploy

- [ ] `npm run build` clean; `npm run preview` looks correct.
- [ ] Commit & push to `main` (`git add -A && git commit -m "…" && git push`).
      If the index is locked, close any Git GUI on the folder.
- [ ] GitHub → Settings → Pages → Source: **GitHub Actions** (workflow already present).
- [ ] Verify the live URL; then point the custom domain `naturetradestore.in` (add `CNAME`).

**Exit bar:** a public, shareable live URL renders identically to local.

---

## Phase 6 — Production architecture (roadmap, beyond the demo)

The demo is a real foundation; productionising means wiring data & commerce:

- **Commerce backend:** Shopify Headless (Storefront API) or WooCommerce headless — replace
  `data/products.js` reads with API calls; real cart/checkout/payments (Stripe/Razorpay/PayPal).
- **CMS:** Sanity (per blueprint) for products, states, journal, artisans — swap the `data/`
  modules for CMS queries; give NEDF editors a dashboard.
- **Auth & accounts:** real authentication, order history, addresses, loyalty — back the
  Members dashboard with live data; protect routes.
- **Admin:** connect the console to real orders/inventory/CRM/marketing data & permissions.
- **Multi-currency:** live FX feed + geolocation default; tax & international shipping rules.
- **i18n:** English + Assamese/Hindi/Bengali (the language switcher is already stubbed in Members).
- **Analytics & SEO:** GA4 / privacy-friendly analytics; server-side rendering or prerender for SEO
  (consider migrating to Next.js — the components port directly — if SEO/SSR becomes a priority).

---

## Quick reference — where to change things

| Need | File |
|---|---|
| Any image | `src/data/images.js` |
| Brand colours / fonts | `@theme` in `src/index.css` |
| Products | `src/data/products.js` |
| States | `src/data/states.js` |
| Journal | `src/data/journal.js` |
| Currencies / rates | `src/data/currencies.js` |
| Nav & footer | `src/data/navItems.js` |
| Member sample data | `src/data/account.js` |
| Price formatting | `src/lib/format.js` |
| Header per-route style | `src/lib/headerMode.js` |
| Shared UI (Button/Price/etc.) | `src/components/common.jsx` |

## Route checklist (smoke test)

`/` · `/shop` · `/shop?state=nagaland` · `/product/ao-naga-warrior-shawl` · `/northeast` ·
`/northeast/assam` … `/northeast/sikkim` · `/artisans` · `/journal` ·
`/journal/threads-of-identity-nagaland` · `/about` · `/register` · `/login` · `/members` ·
`/admin` · `/wishlist` · `/cart` · `/search?q=muga` · a bad URL → 404 page.
