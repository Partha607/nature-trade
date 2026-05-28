/* ============================================================
   Centralised image library.
   All photography is curated, free-to-use Unsplash imagery
   (images.unsplash.com). Every image used in the site routes
   through this file, so swapping in the client's own artisan
   photography later is a one-file change.

   helper:  photo(id, width, quality)
   ============================================================ */

const BASE = 'https://images.unsplash.com/photo-'

export const photo = (id, w = 1600, q = 80) =>
  `${BASE}${id}?auto=format&fit=crop&w=${w}&q=${q}`

/* ---- Real NEDF brand photography (local /public/nedf, WebP) ----
   Sourced from the North East Development Forum portal and optimised.
   Helper resolves against Vite's BASE_URL so it works in dev, on
   GitHub Pages and from file:// (base './'). */
const NEDF_BASE = `${import.meta.env.BASE_URL}nedf/`
export const nedf = (p) => `${NEDF_BASE}${p}`

export const NEDF = {
  logo: nedf('brand/nedf-logo.webp'),
  insignia: nedf('brand/nedf-insignia.webp'),
  vmv: nedf('brand/vmv-about.webp'),
  contactHero: nedf('brand/contact-hero.webp'),
  // per-state "roots" hero photography
  roots: {
    assam: nedf('roots/assam.webp'),
    'arunachal-pradesh': nedf('roots/arunachal.webp'),
    nagaland: nedf('roots/nagaland.webp'),
    manipur: nedf('roots/manipur.webp'),
    meghalaya: nedf('roots/meghalaya.webp'),
    mizoram: nedf('roots/mizoram.webp'),
    tripura: nedf('roots/tripura.webp'),
    sikkim: nedf('roots/sikkim.webp'),
  },
  // artisan portraits
  artisans: {
    handloomWoman: nedf('artisans/handloom-weaver-woman.webp'),
    silkSpinner: nedf('artisans/silk-spinner-woman.webp'),
    bambooMan: nedf('artisans/bamboo-craftsman.webp'),
    youngCane: nedf('artisans/young-cane-weaver.webp'),
    potteryWoman: nedf('artisans/pottery-woman.webp'),
    elder: nedf('artisans/tribal-elder-man.webp'),
    nagaWoman: nedf('artisans/naga-weaver-woman.webp'),
    bellMetalSmith: nedf('artisans/bell-metal-smith.webp'),
  },
  // craft category imagery
  crafts: {
    bamboo: nedf('crafts/bamboo.webp'),
    cane: nedf('crafts/cane.webp'),
    handloom: nedf('crafts/handloom.webp'),
    waterHyacinth: nedf('crafts/water-hyacinth.webp'),
    tribalTextile: nedf('crafts/tribal-textile.webp'),
    woodMetal: nedf('crafts/wood-metal.webp'),
  },
  // product / cluster shots
  products: {
    longpi: nedf('products/longpi-pottery.webp'),
    bellMetal: nedf('products/sarthebari-bellmetal.webp'),
    kauna: nedf('products/kauna-grass.webp'),
    bambooBasket: nedf('products/bamboo-basket.webp'),
    konyakWood: nedf('products/konyak-wood.webp'),
    woodCarving: nedf('products/wood-carving.webp'),
    waterHyacinthBag: nedf('products/water-hyacinth-bag.webp'),
    rudrasagar: nedf('products/rudrasagar.webp'),
  },
}

// Raw Unsplash photo IDs grouped by subject ------------------
export const POOL = {
  // weaving, looms, threads, artisans at the loom
  weaving: [
    '1638310533874-6c124c012e1d',
    '1640292343595-889db1c8262e',
    '1646750421466-a04e689254d4',
    '1714245145426-c8565109aa34',
    '1643766883805-829d9ad95c42',
    '1599303000936-1cf21eac4456',
    '1707978932202-751b08324daf',
    '1699817702889-01bc4c1a45d9',
    '1694855475416-64d819d20648',
    '1593671186131-d58817e7dee0',
  ],
  // finished textiles, fabric, colour
  textile: [
    '1569909115134-a0426936c879',
    '1646750421466-a04e689254d4',
    '1643766883805-829d9ad95c42',
  ],
  // tea gardens, green terraces, cultural figures in the landscape
  tea: [
    '1602020277972-99978250c8bd',
    '1615472910606-9d4f7291944f',
    '1758390287060-aed62e4144f6',
    '1758390286286-9b3b690989e7',
    '1615472266015-63f3eed1e5b4',
  ],
  // cultural figures / people in traditional dress in nature
  figure: [
    '1602020277972-fd160de66021',
    '1615472910606-9d4f7291944f',
  ],
  // pottery, clay, ceramics, decor — products & making process
  pottery: [
    '1699371830139-cb02e94878f1',
    '1580467469359-91a73a6e92ca',
    '1658155058681-7a17cf3c42fd',
    '1760156885430-cd0bd9609ff6',
    '1770777470722-9b4052cdab68',
    '1493106641515-6b5631de4bb9',
    '1715845779797-ee1e42374925',
    '1678296728930-775d299daaca',
    '1607867810523-d10955f2a8df',
    '1744893497803-4631294c3a31',
    '1678082309214-3b2941e387f8',
    '1712210332599-0cb76e647e43',
  ],
}

// Semantic, page-ready URLs ----------------------------------
export const IMG = {
  // ---- Home ----
  homeHero: [
    photo('1640292343595-889db1c8262e', 2000),
    photo('1569909115134-a0426936c879', 2000),
    photo('1638310533874-6c124c012e1d', 2000),
  ],
  homeDiscoverBg: photo('1602020277972-fd160de66021', 2000),

  // ---- Discover Northeast ----
  northeastHero: [
    photo('1602020277972-fd160de66021', 2000),
    photo('1758390286286-9b3b690989e7', 2000),
    photo('1615472910606-9d4f7291944f', 2000),
  ],

  // ---- Artisans ----
  artisanHero: photo('1638310533874-6c124c012e1d', 2000),
  artisanPortrait: NEDF.artisans.handloomWoman,

  // ---- Journal ----
  journalHero: photo('1758390287060-aed62e4144f6', 2000),

  // ---- About ----
  aboutHero: NEDF.roots.assam,
  aboutArtisan: NEDF.artisans.silkSpinner,

  // ---- shared decorative ----
  threadTexture: photo('1694855475416-64d819d20648', 1400),
  fabricTexture: photo('1569909115134-a0426936c879', 1400),
}

// Story accordion panels (home + reused) ---------------------
export const STORY_PANELS = [
  { title: 'The Weaver', caption: 'In the hills of Sualkuchi, tradition is woven into every thread.', img: NEDF.artisans.handloomWoman },
  { title: 'Natural Dyes', caption: 'From roots, leaves and bark — colours drawn from nature.', img: NEDF.crafts.tribalTextile },
  { title: 'A Piece to Cherish', caption: 'Precious, priceless, patient. This is the rhythm of our weavers.', img: NEDF.products.longpi },
  { title: 'Rooted in Culture', caption: 'Crafts that celebrate our rituals, reverence and way of life.', img: NEDF.artisans.elder },
  { title: 'Made by Artisans', caption: 'Honouring hands that keep age-old traditions alive.', img: NEDF.artisans.bambooMan },
]
