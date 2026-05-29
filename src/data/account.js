/* Sample member account data (demo only). */
export const ORDERS = [
  {
    id: 'NT-2041', date: 'May 18, 2026', status: 'Delivered', carrier: 'BlueDart', tracking: 'BD7741092IN',
    items: [{ id: 'muga-silk-mekhela', qty: 1 }, { id: 'assam-japi-decor', qty: 1 }], totalINR: 31800,
  },
  {
    id: 'NT-2038', date: 'May 9, 2026', status: 'In Transit', carrier: 'DHL Express', tracking: 'DHL558210447',
    items: [{ id: 'ao-naga-warrior-shawl', qty: 1 }], totalINR: 19200,
  },
  {
    id: 'NT-2025', date: 'Apr 27, 2026', status: 'Processing', carrier: '—', tracking: '—',
    items: [{ id: 'longpi-black-pottery', qty: 2 }, { id: 'bamboo-pendant-lamp', qty: 1 }], totalINR: 12000,
  },
  {
    id: 'NT-1998', date: 'Mar 30, 2026', status: 'Delivered', carrier: 'BlueDart', tracking: 'BD7740021IN',
    items: [{ id: 'eri-silk-stole', qty: 1 }], totalINR: 6800,
  },
]

export const ADDRESSES = [
  { label: 'Home', name: 'Julius Longjam', line: 'West Boragaon, Guwahati, Assam 781033', phone: '+91 98640 00000', default: true },
  { label: 'Work', name: 'Julius Longjam', line: 'Megha Plaza, Guwahati, Assam 781029', phone: '+91 98640 11111', default: false },
]

export const CARDS = [
  { brand: 'Visa', last4: '4242', exp: '08/28', default: true },
  { brand: 'Mastercard', last4: '8888', exp: '11/27', default: false },
]

export const SUBSCRIPTIONS = [
  { name: 'Artisan Box — Quarterly', desc: 'A curated box of Northeast crafts, every season', priceINR: 4999, status: 'Active', next: 'Jul 1, 2026' },
]

export const REVIEWS = [
  { product: 'Muga Gold Mekhela Sador', rating: 5, date: 'May 20, 2026', text: 'Exquisite craftsmanship — the golden sheen is even more beautiful in person.' },
  { product: 'Longpi Black Stone Pottery', rating: 4, date: 'Apr 12, 2026', text: 'Beautiful, earthy and clearly handmade. A conversation piece in our home.' },
]

export const ALERTS = [
  { type: 'Price Drop', detail: 'Eri Peace Silk Stole — now 10% off', date: 'May 22, 2026' },
  { type: 'Saved Search', detail: '“Muga silk under ₹30,000”', date: 'May 15, 2026' },
  { type: 'Back in Stock', detail: 'Tripura Cane Shoulder Bag', date: 'May 3, 2026' },
]

export const SOCIAL_LOGINS = [
  { name: 'Google', linked: true },
  { name: 'Apple', linked: false },
  { name: 'Facebook', linked: true },
]
