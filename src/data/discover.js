/* ============================================================
   Per-state "Discover" page content + theming.
   Mirrors the reference state-page mockups (docs/reference-states):
   each state has its own colour palette, hero + card imagery,
   stats, about copy, four feature cards and a treasures row.
   Used by pages/StatePage.jsx. States.js stays the shared source
   for nav/shop/home; this is the state-page design layer.
   ============================================================ */

const d = (p) => `${import.meta.env.BASE_URL}discover/${p}`

// rich per-state palettes (ported from the reference design system)
const THEME = {
  assam:               { ink: '#2b2f1d', inkRgb: '43,47,29',  accent: '#bd9a36', accent2: '#d8c074', heroText: '#f4eedc', heroDim: '#cfc8ab', aboutBg: '#f4efe1', aboutInk: '#3d4226', aboutDim: '#6f6f4c', aboutLine: '#ddd2b0', treasureBg: '#2b2f1d', treasureTx: '#e7e1c9', cardBg: '#ffffff', cardInk: '#3d4226' },
  nagaland:            { ink: '#130a0a', inkRgb: '19,10,10',  accent: '#c23b2c', accent2: '#e07a5f', heroText: '#f3e7e2', heroDim: '#c9b3ad', aboutBg: '#160c0c', aboutInk: '#ecdcd4', aboutDim: '#b39a92', aboutLine: '#3a2422', treasureBg: '#0f0707', treasureTx: '#e7d6cf', cardBg: '#1c1110', cardInk: '#ecdcd4' },
  manipur:             { ink: '#241019', inkRgb: '36,16,25',  accent: '#bc6079', accent2: '#dca0ac', heroText: '#f5eaed', heroDim: '#d2bdc4', aboutBg: '#f4e9ec', aboutInk: '#46303b', aboutDim: '#6f5660', aboutLine: '#dcc7cd', treasureBg: '#241019', treasureTx: '#ecdce1', cardBg: '#ffffff', cardInk: '#46303b' },
  meghalaya:           { ink: '#1b2c3a', inkRgb: '27,44,58',  accent: '#6f93b0', accent2: '#9db8cd', heroText: '#eef3f8', heroDim: '#bcccd8', aboutBg: '#e9eef3', aboutInk: '#2c3e4d', aboutDim: '#5a7080', aboutLine: '#c6d4de', treasureBg: '#234156', treasureTx: '#d9e4ec', cardBg: '#ffffff', cardInk: '#2c3e4d' },
  mizoram:             { ink: '#2a311e', inkRgb: '42,49,30',  accent: '#b0a05c', accent2: '#cdbf86', heroText: '#f1efdf', heroDim: '#c8c8a6', aboutBg: '#efe9d7', aboutInk: '#3a4329', aboutDim: '#6c6f4a', aboutLine: '#d8cfb0', treasureBg: '#2a311e', treasureTx: '#e4e0c8', cardBg: '#ffffff', cardInk: '#3a4329' },
  tripura:             { ink: '#2d1c12', inkRgb: '45,28,18',  accent: '#b46a2f', accent2: '#d39058', heroText: '#f4e8dc', heroDim: '#d2bba6', aboutBg: '#f1e7d6', aboutInk: '#4a3220', aboutDim: '#7a5d44', aboutLine: '#ddccb4', treasureBg: '#2d1c12', treasureTx: '#ecdfce', cardBg: '#ffffff', cardInk: '#4a3220' },
  'arunachal-pradesh': { ink: '#2c2240', inkRgb: '44,34,64',  accent: '#d98a3a', accent2: '#e8ad6e', heroText: '#f1ecf3', heroDim: '#cabfd2', aboutBg: '#ebe7f0', aboutInk: '#3b2f52', aboutDim: '#6b5f80', aboutLine: '#cfc6dc', treasureBg: '#2c2240', treasureTx: '#e2dbec', cardBg: '#ffffff', cardInk: '#3b2f52' },
  sikkim:              { ink: '#1e3850', inkRgb: '30,56,80',  accent: '#4f86b3', accent2: '#86b0d0', heroText: '#eef4f9', heroDim: '#bcd0e0', aboutBg: '#eef2f5', aboutInk: '#2a4257', aboutDim: '#5a7488', aboutLine: '#cdd9e2', treasureBg: '#21405a', treasureTx: '#dbe6ef', cardBg: '#ffffff', cardInk: '#2a4257' },
}

export const DISCOVER = {
  assam: {
    theme: THEME.assam,
    hero: d('assam/hero.webp'),
    sub: 'Where the mighty Brahmaputra flows, and timeless traditions thrive.',
    aboutHead: ['A Legacy Woven', 'in Muga Gold'],
    aboutText: 'Assam is a land of contrasts and harmony — ancient crafts and vibrant cultures, lush tea gardens and mighty rivers. From the golden sheen of Muga silk to the fragrance of handcrafted tea, every element tells a story of heritage and pride.',
    stats: [
      { v: '800+', l: 'Tea Gardens' },
      { v: '600+', l: 'Weaving Heritage' },
      { v: '200+', l: 'Artisan Communities' },
      { v: 'Rich & Diverse Craft Legacies', note: true },
    ],
    cards: [
      { title: 'Muga Silk', text: 'The pride of Assam, Muga silk is renowned for its natural golden lustre and unmatched durability.', cta: 'Explore Products', img: d('assam/c1.webp') },
      { title: 'Tea Heritage', text: 'From the world’s finest tea gardens comes a legacy of flavour, aroma and craftsmanship.', cta: 'Explore Story', img: d('assam/c2.webp') },
      { title: 'Craft Traditions', text: 'Handwoven textiles, bamboo crafts, bell metal and more — preserving skills passed down generations.', cta: 'Discover Crafts', img: d('assam/c3.webp') },
    ],
    treasures: ['Muga Silk Collection', 'Handwoven Textiles', 'Bamboo & Cane Crafts', 'Tea & Natural Products', 'Traditional Jewellery', 'Home & Living Decor'],
  },
  nagaland: {
    theme: THEME.nagaland,
    hero: d('nagaland/hero.webp'),
    sub: 'Land of the fearless and the free. Home to warrior traditions, bold patterns and timeless pride.',
    aboutHead: ['A Heritage', 'Woven in Courage'],
    aboutText: 'Nagaland is a land of rich warrior heritage and vibrant tribal traditions. The iconic Naga shawls are more than textiles — they are symbols of identity, honour and stories passed down through generations.',
    stats: [
      { v: '16+', l: 'Major Tribes' },
      { v: '37+', l: 'Weaving Villages' },
      { v: '200+', l: 'Artisan Families' },
      { v: '800+', l: 'Years of Heritage' },
      { v: 'Bold. Fearless. Timeless.', note: true },
    ],
    cards: [
      { title: 'Warrior Shawls', text: 'Handwoven with intricate motifs that signify valour, status and tribal identity.', cta: 'Explore Products', img: d('nagaland/c1.webp') },
      { title: 'Tribal Stories', text: 'Explore the legends, folklore and oral traditions that shape Naga culture.', cta: 'Discover Stories', img: d('nagaland/c2.webp') },
      { title: 'Making Process', text: 'From hand-spun yarn to intricate weaves — a process that takes days, sometimes weeks.', cta: 'See How It’s Made', img: d('nagaland/c3.webp') },
      { title: 'Tribal Crafts', text: 'Beyond textiles — explore beadwork, woodcraft, metalwork and other ancestral arts.', cta: 'Explore Crafts', img: d('nagaland/c4.webp') },
    ],
    treasures: ['Warrior Shawls', 'Beadwork Jewellery', 'Traditional Headgear', 'Wood & Cane Crafts', 'Tribal Accessories', 'Home & Living Decor'],
  },
  manipur: {
    theme: THEME.manipur,
    hero: d('manipur/hero.webp'),
    sub: 'A land of grace and artistry, where traditions flow like a dance and craftsmanship blooms like the lotus.',
    aboutHead: ['Where Culture', 'Blooms Like Lotus'],
    aboutText: 'Manipur is a land of timeless traditions and refined craftsmanship. From delicate handloom to exquisite black pottery, every creation reflects the spirit of its people and their deep connection with nature and art.',
    stats: [
      { v: '32+', l: 'Tribes & Communities' },
      { v: '200+', l: 'Artisan Families' },
      { v: '600+', l: 'Years of Weaving Heritage' },
      { v: 'Living Heritage of Dance, Music & Craft', note: true },
    ],
    cards: [
      { title: 'Handloom Weaves', text: 'Exquisite textiles like Phanek, Innaphi and more — woven with precision and tradition.', cta: 'Explore Products', img: d('manipur/c1.webp') },
      { title: 'Black Pottery', text: 'Ancient pottery from Moirang with intricate designs and a natural black finish.', cta: 'Explore Crafts', img: d('manipur/c2.webp') },
      { title: 'Cultural Heritage', text: 'From Ras Leela to Lai Haraoba, experience a vibrant culture deeply rooted in history.', cta: 'Discover Stories', img: d('manipur/c3.webp') },
      { title: 'Artisan Communities', text: 'Empowered artisan families preserving skills and passing them to future generations.', cta: 'Meet Artisans', img: d('manipur/c4.webp') },
    ],
    treasures: ['Handloom Textiles', 'Black Pottery', 'Traditional Jewellery', 'Bamboo & Cane Crafts', 'Dance & Music Heritage', 'Home & Living Decor'],
  },
  meghalaya: {
    theme: THEME.meghalaya,
    hero: d('meghalaya/hero.webp'),
    sub: 'Where clouds embrace the hills and living traditions flow like rain.',
    aboutHead: ['Where Nature', 'Shapes Culture'],
    aboutText: 'Meghalaya is a land of mist, music and timeless traditions. From living root bridges to handwoven textiles, every creation is a reflection of harmony between people and nature.',
    stats: [
      { v: '4', l: 'Major Regions' },
      { v: '100+', l: 'Rainy Days a Year' },
      { v: '200+', l: 'Living Root Bridges' },
      { v: '1000+', l: 'Artisan Families' },
      { v: 'A Living Harmony of Nature & Culture', note: true },
    ],
    cards: [
      { title: 'Living Landscapes', text: 'From cascading waterfalls to enchanted caves, Meghalaya’s landscapes inspire its artistry.', cta: 'Explore Stories', img: d('meghalaya/c1.webp') },
      { title: 'Handwoven Heritage', text: 'Intricate weaves and natural dyes passed down through generations of skilled hands.', cta: 'Explore Products', img: d('meghalaya/c2.webp') },
      { title: 'Living Root Bridges', text: 'Built by nature and nurtured by communities, an engineering legacy like no other.', cta: 'Discover More', img: d('meghalaya/c3.webp') },
      { title: 'Artisan Communities', text: 'Strong communities preserving traditions, language, music and indigenous knowledge.', cta: 'Meet Artisans', img: d('meghalaya/c4.webp') },
    ],
    treasures: ['Handwoven Textiles', 'Natural Dye Collection', 'Cane & Bamboo Crafts', 'Tribal Jewellery & Ornaments', 'Traditional Music & Art', 'Home & Living Decor'],
  },
  'arunachal-pradesh': {
    theme: THEME['arunachal-pradesh'],
    hero: d('arunachal-pradesh/hero.webp'),
    sub: 'Where the first light touches the mountains and ancient traditions shine forever.',
    aboutHead: ['Land of the', 'Rising Sun'],
    aboutText: 'Arunachal Pradesh is a land of breathtaking beauty, vibrant tribes and deep spiritual roots. From ancient monasteries to handwoven masterpieces, every creation reflects a legacy of harmony, courage and connection with nature.',
    stats: [
      { v: '26+', l: 'Major Tribes' },
      { v: '400+', l: 'Monasteries' },
      { v: '300+', l: 'Traditional Festivals' },
      { v: '8000+', l: 'Plant Species' },
      { v: 'A Land of Sunrise, Spirit & Serenity', note: true },
    ],
    cards: [
      { title: 'Breathtaking Landscapes', text: 'From snow-capped peaks to lush valleys, nature’s grandeur inspires life and creativity.', cta: 'Explore Stories', img: d('arunachal-pradesh/c1.webp') },
      { title: 'Monastic Heritage', text: 'Ancient monasteries preserve Buddhist wisdom, art and centuries-old traditions.', cta: 'Explore Heritage', img: d('arunachal-pradesh/c2.webp') },
      { title: 'Tribal Weaves', text: 'Handwoven with intricate motifs and natural dyes, each piece tells a story.', cta: 'Explore Products', img: d('arunachal-pradesh/c3.webp') },
      { title: 'Artisan Communities', text: 'Skilled artisans keep traditions alive through crafts passed down for generations.', cta: 'Meet Artisans', img: d('arunachal-pradesh/c4.webp') },
    ],
    treasures: ['Monastery Crafts', 'Handwoven Textiles', 'Tribal Jewellery', 'Bamboo & Cane Crafts', 'Traditional Music & Art', 'Home & Living Decor'],
  },
  mizoram: {
    theme: THEME.mizoram,
    hero: d('mizoram/hero.webp'),
    sub: 'Where life is simple, communities are close knit, and traditions are woven with nature.',
    aboutHead: ['Rooted in Nature.', 'Living in Harmony.'],
    aboutText: 'Mizoram is a land of rolling hills, lush forests, and resilient communities. Bamboo is life — shaping homes, crafts, music, and a way of living in balance with nature.',
    stats: [
      { v: '21+', l: 'Major Tribes' },
      { v: '500+', l: 'Crafting Villages' },
      { v: '300+', l: 'Traditional Weaves' },
      { v: '1000+', l: 'Artisan Families' },
      { v: 'Deeply Rooted in Nature & Harmony', note: true },
    ],
    cards: [
      { title: 'Bamboo Heritage', text: 'Bamboo is central to daily life and craftsmanship — sustainable, versatile, and timeless.', cta: 'Explore Products', img: d('mizoram/c1.webp') },
      { title: 'Handcrafted Beauty', text: 'Intricate weaves and artisanship turn natural materials into everyday artistry.', cta: 'Explore Crafts', img: d('mizoram/c2.webp') },
      { title: 'Living Culture', text: 'Rich in music, dance, and oral traditions that reflect the spirit of the Mizo people.', cta: 'Discover Stories', img: d('mizoram/c3.webp') },
      { title: 'Strong Communities', text: 'Close-knit communities preserve traditions and support each other with pride and purpose.', cta: 'Meet Artisans', img: d('mizoram/c4.webp') },
    ],
    treasures: ['Bamboo Crafts', 'Handwoven Textiles', 'Traditional Music', 'Tribal Jewellery', 'Natural Fibre Products', 'Home & Living Decor'],
  },
  tripura: {
    theme: THEME.tripura,
    hero: d('tripura/hero.webp'),
    sub: 'Where traditions are woven with warmth, and every craft carries a story.',
    aboutHead: ['Traditions', 'Woven with Warmth'],
    aboutText: 'Tripura is a land of rich cultural heritage and artistic expression. From intricate cane handicrafts to vibrant textiles and terracotta art, every creation reflects the warmth and spirit of its people.',
    stats: [
      { v: '19+', l: 'Major Tribes' },
      { v: '300+', l: 'Artisan Villages' },
      { v: '200+', l: 'Traditional Craft Forms' },
      { v: '800+', l: 'Artisan Families' },
      { v: 'A Heritage of Warmth & Tradition', note: true },
    ],
    cards: [
      { title: 'Cane Heritage', text: 'Exquisite cane and bamboo crafts crafted with skill, shaped by generations of artisans.', cta: 'Explore Products', img: d('tripura/c1.webp') },
      { title: 'Terracotta Art', text: 'Earthy, timeless, and beautiful — terracotta art that tells stories of culture and craft.', cta: 'Explore Crafts', img: d('tripura/c2.webp') },
      { title: 'Handwoven Textiles', text: 'Vibrant weaves and motifs that celebrate Tripura’s rich cultural identity and artistry.', cta: 'Discover Stories', img: d('tripura/c3.webp') },
      { title: 'Culture & Community', text: 'Festivals, folk traditions, and close-knit communities that keep heritage alive for future generations.', cta: 'Meet Artisans', img: d('tripura/c4.webp') },
    ],
    treasures: ['Cane & Bamboo Crafts', 'Terracotta Art', 'Handwoven Textiles', 'Traditional Jewellery', 'Folk Art & Paintings', 'Home & Living Decor'],
  },
  sikkim: {
    theme: THEME.sikkim,
    hero: d('sikkim/hero.webp'),
    sub: 'Where spirituality meets nature, and every moment feels sacred.',
    aboutHead: ['Where Serenity', 'Meets Spirit'],
    aboutText: 'Sikkim is a land of breathtaking beauty, deep spirituality, and living traditions. From ancient monasteries to vibrant handicrafts, every creation reflects the purity and peace of this Himalayan haven.',
    stats: [
      { v: '7096m', l: 'Mt. Kanchenjunga' },
      { v: '28+', l: 'Glaciers' },
      { v: '200+', l: 'Monasteries' },
      { v: '100+', l: 'Cultural Communities' },
      { v: 'A Sacred Land of Peace & Harmony', note: true },
    ],
    cards: [
      { title: 'Spiritual Heritage', text: 'Monasteries, rituals & traditions that have been preserved for centuries.', cta: 'Explore Stories', img: d('sikkim/c1.webp') },
      { title: 'Handwoven Textiles', text: 'Exquisite weaves inspired by nature, culture, and timeless Himalayan craftsmanship.', cta: 'Explore Products', img: d('sikkim/c2.webp') },
      { title: 'Living Culture', text: 'Festivals, dance, music & art that celebrate the spiritual soul of Sikkim.', cta: 'Discover Stories', img: d('sikkim/c3.webp') },
      { title: 'Artisan Communities', text: 'Skilled artisans & communities keeping Sikkim’s heritage alive through generations.', cta: 'Meet Artisans', img: d('sikkim/c4.webp') },
    ],
    treasures: ['Handwoven Textiles', 'Monastic Crafts', 'Thangka Art', 'Prayer Flags & Spiritual Decor', 'Silver Jewellery', 'Home & Living Decor'],
  },
}
