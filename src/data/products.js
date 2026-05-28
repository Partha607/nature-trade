/* ============================================================
   Product catalogue. Prices are authored in INR (store base
   currency) and converted at display time. Each product carries
   full storytelling content for the product page tabs.
   ============================================================ */
import { photo, NEDF } from './images.js'

export const CATEGORIES = [
  'Textiles', 'Silk', 'Pottery', 'Jewellery', 'Bamboo & Cane', 'Home Decor',
]

// Material families for the shop filter — each product's specific material
// (e.g. "Muga Silk", "Kauna Reed") maps to one clean, filterable family.
export const MATERIALS = ['Silk', 'Cotton', 'Bamboo & Cane', 'Bell Metal', 'Beadwork', 'Stone & Clay', 'Wool']

export function materialFamily(material = '') {
  const m = material.toLowerCase()
  if (m.includes('silk')) return 'Silk'
  if (m.includes('cotton')) return 'Cotton'
  if (m.includes('bamboo') || m.includes('cane') || m.includes('reed') || m.includes('palm')) return 'Bamboo & Cane'
  if (m.includes('bell metal')) return 'Bell Metal'
  if (m.includes('bead') || m.includes('brass')) return 'Beadwork'
  if (m.includes('stone') || m.includes('clay')) return 'Stone & Clay'
  if (m.includes('wool')) return 'Wool'
  return material
}

export const COLORS = [
  { name: 'Red', hex: '#7c1f1f' },
  { name: 'Black', hex: '#1a1411' },
  { name: 'Gold', hex: '#b89b5e' },
  { name: 'Natural', hex: '#c9b48f' },
  { name: 'Indigo', hex: '#2f3b54' },
  { name: 'White', hex: '#efe7d8' },
  { name: 'Earth', hex: '#8a5a3b' },
  { name: 'Rose', hex: '#b56576' },
]

// Standard making-process / care / shipping templates ---------
const proc = (a, b, c, d, e, f) => [
  { title: 'Sustainably Sourced', text: a },
  { title: 'Natural Dyeing', text: b },
  { title: 'Warping', text: c },
  { title: 'Hand Crafting', text: d },
  { title: 'Quality Check', text: e },
  { title: 'Ready to Treasure', text: f },
]
const careDefault = ['Dry clean or gentle hand wash in cold water', 'Dry in shade, away from direct sunlight', 'Store folded in a breathable cotton wrap', 'Avoid contact with perfume and sharp objects']
const shipDefault = ['Free insured shipping on orders above $200', 'Dispatched in 2–4 working days from Assam', 'Worldwide delivery in 7–14 working days', 'Easy 7-day returns on unused items']

const P = (o) => ({
  rating: 4.8,
  reviews: 24,
  badges: [],
  care: careDefault,
  shipping: shipDefault,
  ...o,
})

export const PRODUCTS = [
  P({
    id: 'ao-naga-warrior-shawl',
    name: 'Ao Naga Warrior Shawl',
    state: 'nagaland', tribe: 'Ao', category: 'Textiles', material: 'Handspun Cotton',
    color: ['Red', 'Black', 'White'], priceINR: 19200, originalINR: 22000,
    rating: 4.9, reviews: 38, badges: ['Bestseller'],
    images: [photo('1569909115134-a0426936c879', 1100), photo('1638310533874-6c124c012e1d', 800), photo('1640292343595-889db1c8262e', 800), photo('1646750421466-a04e689254d4', 800)],
    summary: 'Handwoven in Nagaland — a warrior shawl carrying the geometry of tribe and honour.',
    story: 'For the Ao people, a shawl is a record of a life lived with honour. Each band of colour and every motif marks lineage, achievement and belonging. This piece is handspun and handwoven on a traditional loin loom, taking a skilled weaver close to three weeks to complete.',
    cultural: 'Among the Naga tribes, shawls denote status, valour and clan identity. The warrior shawl was historically earned, not bought — worn by those who had proven themselves in service to the village.',
    process: proc(
      'Local cotton is hand-spun in the weaver’s village.',
      'Yarns are dyed with madder red and natural black.',
      'Warp threads are measured and dressed onto the loin loom.',
      'The weaver interlaces motifs by memory, band by band.',
      'Each shawl is checked for symmetry and finish.',
      'Cleansed, pressed and readied to be treasured.',
    ),
    artisan: { name: 'Imnala Ao', location: 'Mokokchung, Nagaland', exp: '24 years', quote: 'Every shawl I weave carries the name of my village.' },
  }),
  P({
    id: 'muga-silk-mekhela',
    name: 'Muga Gold Mekhela Sador',
    state: 'assam', tribe: 'Assamese', category: 'Silk', material: 'Muga Silk',
    color: ['Gold'], priceINR: 28500, originalINR: 32000,
    rating: 5.0, reviews: 41, badges: ['Bestseller'],
    images: [photo('1646750421466-a04e689254d4', 1100), photo('1569909115134-a0426936c879', 800), photo('1643766883805-829d9ad95c42', 800), photo('1640292343595-889db1c8262e', 800)],
    summary: 'The naturally golden Muga silk of Assam, woven into the timeless Mekhela Sador.',
    story: 'Muga silk is unique to Assam — its natural golden lustre deepens with every wash and lasts for generations. This Mekhela Sador is handwoven in Sualkuchi, the silk village on the banks of the Brahmaputra.',
    cultural: 'Muga is woven into Assamese identity, worn at Bihu and weddings. Once reserved for royalty, its golden sheen is a symbol of prosperity and pride.',
    process: proc(
      'Muga cocoons are reared on som and soalu trees.',
      'Silk keeps its natural gold — no dye required.',
      'Fine threads are warped for the throw-shuttle loom.',
      'Master weavers of Sualkuchi weave the sador.',
      'Each weave is inspected for the signature sheen.',
      'Finished, folded and ready to be handed down.',
    ),
    artisan: { name: 'Nayanmoni Das', location: 'Sualkuchi, Assam', exp: '30 years', quote: 'Muga only grows more beautiful with time, like memory.' },
  }),
  P({
    id: 'longpi-black-pottery',
    name: 'Longpi Black Stone Pottery',
    state: 'manipur', tribe: 'Tangkhul', category: 'Pottery', material: 'Serpentine Stone & Clay',
    color: ['Black'], priceINR: 4200,
    rating: 4.8, reviews: 19, badges: ['Handmade'],
    images: [photo('1699371830139-cb02e94878f1', 1100), photo('1678082309214-3b2941e387f8', 800), photo('1607867810523-d10955f2a8df', 800), photo('1744893497803-4631294c3a31', 800)],
    summary: 'Wheel-free black pottery of Longpi, shaped entirely by hand and beater.',
    story: 'Longpi pottery is made without a potter’s wheel — clay is mixed with weathered serpentine stone and shaped by hand and wooden beater, then fired and burnished to its signature charcoal-black finish.',
    cultural: 'Once reserved for the Tangkhul Naga kitchen and ceremony, Longpi ware is prized today for both its heritage and its natural, food-safe finish. The Longpi Hampai carries a Geographical Indication (GI) tag.',
    process: proc(
      'Serpentine stone and brown clay are sourced locally.',
      'No chemical glaze — the black comes from firing.',
      'Clay is kneaded to a fine, even body.',
      'Forms are built by hand and shaped with a beater.',
      'Each vessel is checked for balance and finish.',
      'Burnished smooth and ready for your home.',
    ),
    artisan: { name: 'Mathew Kasar', location: 'Longpi, Manipur', exp: '18 years', quote: 'No wheel, only hands — the way it has always been.' },
  }),
  P({
    id: 'eri-silk-stole',
    name: 'Eri Peace Silk Stole',
    state: 'meghalaya', tribe: 'Khasi', category: 'Silk', material: 'Eri Silk',
    color: ['Natural', 'White'], priceINR: 6800,
    rating: 4.9, reviews: 22, badges: ['New'],
    images: [photo('1643766883805-829d9ad95c42', 1100), photo('1569909115134-a0426936c879', 800), photo('1646750421466-a04e689254d4', 800), photo('1638310533874-6c124c012e1d', 800)],
    summary: 'Soft, warm Eri "peace silk" — ethically harvested in the hills of Meghalaya.',
    story: 'Eri silk is known as ahimsa or "peace silk" because the moth completes its life cycle before the cocoon is used. The result is a soft, warm, matte textile woven by Khasi artisans.',
    cultural: 'Eri weaving is a household tradition across the Khasi and Garo hills, passed from mother to daughter and worn through the cool, misty seasons.',
    process: proc(
      'Cocoons are gathered after the moth has emerged.',
      'Undyed or dyed with lac, turmeric and indigo.',
      'Spun by hand into soft, irregular yarn.',
      'Woven on frame looms in hill homes.',
      'Checked for softness and even weave.',
      'Ready to wrap you in gentle warmth.',
    ),
    artisan: { name: 'Daphisha Lyngdoh', location: 'Ri-Bhoi, Meghalaya', exp: '15 years', quote: 'We take silk without taking life.' },
  }),
  P({
    id: 'bamboo-pendant-lamp',
    name: 'Hand-Woven Bamboo Pendant Lamp',
    state: 'mizoram', tribe: 'Mizo', category: 'Home Decor', material: 'Bamboo',
    color: ['Natural', 'Earth'], priceINR: 3600,
    rating: 4.7, reviews: 16, badges: ['Handmade'],
    images: [photo('1694855475416-64d819d20648', 1100), photo('1599303000936-1cf21eac4456', 800), photo('1712210332599-0cb76e647e43', 800), photo('1699371830139-cb02e94878f1', 800)],
    summary: 'A warm bamboo pendant lamp, hand-woven from sustainable hill bamboo.',
    story: 'Bamboo grows across ninety percent of Mizoram, and its weaving is second nature. This pendant lamp is split, smoked and woven by hand, casting a warm, patterned glow.',
    cultural: 'Bamboo runs through every part of Mizo life — homes, tools, the Cheraw dance and craft — making it the truest material of the hills.',
    process: proc(
      'Mature hill bamboo is harvested in the dry season.',
      'Left in natural tone or lightly smoked.',
      'Split into fine, even strips by hand.',
      'Woven over a frame into the lamp form.',
      'Checked for strength and even weave.',
      'Wired safely and ready to light your home.',
    ),
    artisan: { name: 'Lalrinpuii', location: 'Aizawl, Mizoram', exp: '12 years', quote: 'Bamboo gives us everything; we only shape it.' },
  }),
  P({
    id: 'cane-shoulder-bag',
    name: 'Tripura Cane Shoulder Bag',
    state: 'tripura', tribe: 'Reang', category: 'Bamboo & Cane', material: 'Cane & Bamboo',
    color: ['Natural', 'Earth'], priceINR: 2900,
    rating: 4.6, reviews: 14, badges: [],
    images: [photo('1599303000936-1cf21eac4456', 1100), photo('1694855475416-64d819d20648', 800), photo('1658155058681-7a17cf3c42fd', 800), photo('1760156885430-cd0bd9609ff6', 800)],
    summary: 'A finely woven cane shoulder bag — Tripura’s celebrated cane craft.',
    story: 'Tripura is renowned for the finest cane and bamboo work in the region. This shoulder bag is woven from hand-split cane over a sturdy frame, light yet remarkably durable.',
    cultural: 'Cane craft is woven into Tripura’s royal and tribal heritage alike, from household baskets to ceremonial pieces.',
    process: proc(
      'Cane and bamboo are cut from managed groves.',
      'Kept natural or lightly toned with smoke.',
      'Split into supple, even strands.',
      'Woven tightly over a shaped frame.',
      'Checked for finish and strength.',
      'Lined, finished and ready to carry.',
    ),
    artisan: { name: 'Bikash Reang', location: 'Agartala, Tripura', exp: '20 years', quote: 'A good basket should outlive the hands that made it.' },
  }),
  P({
    id: 'naga-tribal-necklace',
    name: 'Naga Tribal Bead Necklace',
    state: 'nagaland', tribe: 'Konyak', category: 'Jewellery', material: 'Glass Beads & Brass',
    color: ['Red', 'Gold'], priceINR: 5400,
    rating: 4.8, reviews: 27, badges: ['Bestseller'],
    images: [photo('1580467469359-91a73a6e92ca', 1100), photo('1760156885430-cd0bd9609ff6', 800), photo('1770777470722-9b4052cdab68', 800), photo('1712210332599-0cb76e647e43', 800)],
    summary: 'A bold Konyak-inspired bead and brass necklace of the Naga hills.',
    story: 'Naga jewellery is statement and story. This necklace strings glass trade beads with cast brass, echoing the ceremonial adornment of the Konyak people.',
    cultural: 'Beads and brass once signalled rank and prowess among the Naga. Today they celebrate a living craft of bold, fearless adornment.',
    process: proc(
      'Glass beads and brass are gathered and sorted.',
      'Brass is cast using the lost-wax method.',
      'Beads are arranged by colour and rhythm.',
      'Strung and knotted by hand.',
      'Checked for balance and clasp strength.',
      'Polished and ready to wear with pride.',
    ),
    artisan: { name: 'Chenmoa Konyak', location: 'Mon, Nagaland', exp: '16 years', quote: 'We wear our history around our necks.' },
  }),
  P({
    id: 'assam-bell-metal-bowl',
    name: 'Assam Bell Metal Xorai',
    state: 'assam', tribe: 'Assamese', category: 'Home Decor', material: 'Bell Metal',
    color: ['Gold', 'Earth'], priceINR: 7800,
    rating: 4.9, reviews: 18, badges: [],
    images: [photo('1580467469359-91a73a6e92ca', 1100), photo('1658155058681-7a17cf3c42fd', 800), photo('1770777470722-9b4052cdab68', 800), photo('1699371830139-cb02e94878f1', 800)],
    summary: 'The Xorai — Assam’s traditional bell-metal offering tray, hand-beaten in Sarthebari.',
    story: 'The Xorai is a symbol of Assamese hospitality and respect. Hand-beaten from bell metal in Sarthebari, it is offered at ceremonies, prayer and to honoured guests.',
    cultural: 'No Assamese ceremony is complete without the Xorai — a vessel of welcome, devotion and pride. The bell-metal village of Sarthebari has cast these ceremonial forms for over 500 years.',
    process: proc(
      'Bell metal alloy is prepared by traditional smiths.',
      'Finished in its natural warm golden tone.',
      'Sheets are heated and hand-beaten to form.',
      'The stand and tray are shaped and joined.',
      'Checked for symmetry and ring.',
      'Polished to a soft glow for your home.',
    ),
    artisan: { name: 'Hemanta Das', location: 'Sarthebari, Assam', exp: '28 years', quote: 'Metal sings when it is beaten with patience.' },
  }),
  P({
    id: 'mising-handloom-wrap',
    name: 'Mising Handloom Cotton Wrap',
    state: 'assam', tribe: 'Mising', category: 'Textiles', material: 'Handloom Cotton',
    color: ['Indigo', 'Red'], priceINR: 4600,
    rating: 4.7, reviews: 21, badges: ['New'],
    images: [photo('1640292343595-889db1c8262e', 1100), photo('1714245145426-c8565109aa34', 800), photo('1707978932202-751b08324daf', 800), photo('1569909115134-a0426936c879', 800)],
    summary: 'A vivid Mising handloom wrap, woven on the riverbanks of the Brahmaputra.',
    story: 'The Mising community weaves bright geometric textiles on the banks of the Brahmaputra. This cotton wrap carries their signature indigo and red patterning.',
    cultural: 'Weaving is central to Mising life; a woman’s loom and her motifs are a source of identity and pride.',
    process: proc(
      'Cotton is sourced and hand-prepared.',
      'Dyed in indigo and madder red.',
      'Warped across the traditional loom.',
      'Geometric bands woven from memory.',
      'Checked for even tension and motif.',
      'Finished and ready to wrap and wear.',
    ),
    artisan: { name: 'Jonali Pegu', location: 'Majuli, Assam', exp: '14 years', quote: 'The river gives rhythm to our weaving.' },
  }),
  P({
    id: 'thangka-prayer-scroll',
    name: 'Sikkim Thangka Prayer Scroll',
    state: 'sikkim', tribe: 'Bhutia', category: 'Home Decor', material: 'Cotton & Mineral Pigment',
    color: ['Gold', 'Indigo'], priceINR: 12500,
    rating: 5.0, reviews: 11, badges: ['Handmade'],
    images: [photo('1770777470722-9b4052cdab68', 1100), photo('1580467469359-91a73a6e92ca', 800), photo('1712210332599-0cb76e647e43', 800), photo('1658155058681-7a17cf3c42fd', 800)],
    summary: 'A hand-painted Thangka scroll — sacred Himalayan art of Sikkim.',
    story: 'Thangka painting is a meditative, sacred art. Mineral pigments are applied to primed cotton over many weeks to depict deities and mandalas, then framed in brocade.',
    cultural: 'Thangkas are aids to meditation and teaching in Himalayan Buddhism, kept and revered in monasteries and homes alike.',
    process: proc(
      'Cotton is stretched and primed with gesso.',
      'Natural mineral pigments are hand-ground.',
      'The composition is drawn to sacred proportion.',
      'Painted in fine detail over many weeks.',
      'Checked by a senior master painter.',
      'Mounted in brocade, ready to revere.',
    ),
    artisan: { name: 'Pema Bhutia', location: 'Gangtok, Sikkim', exp: '22 years', quote: 'To paint a Thangka is to pray with a brush.' },
  }),
  P({
    id: 'arunachal-tribal-rug',
    name: 'Arunachal Hand-Knotted Rug',
    state: 'arunachal-pradesh', tribe: 'Monpa', category: 'Home Decor', material: 'Wool',
    color: ['Red', 'Indigo'], priceINR: 16800,
    rating: 4.8, reviews: 9, badges: [],
    images: [photo('1569909115134-a0426936c879', 1100), photo('1643766883805-829d9ad95c42', 800), photo('1646750421466-a04e689254d4', 800), photo('1640292343595-889db1c8262e', 800)],
    summary: 'A hand-knotted wool rug from the Monpa weavers of the eastern Himalaya.',
    story: 'The Monpa of Tawang knot wool rugs in bold mountain colour, a craft tied to monastery life and the high, cold valleys.',
    cultural: 'Carpet weaving travelled with Buddhism into Arunachal, where dragons and lotuses are knotted into warm floor coverings.',
    process: proc(
      'Highland wool is sheared and hand-spun.',
      'Dyed with madder, indigo and walnut.',
      'Warps are dressed on an upright loom.',
      'Knotted row by row over many weeks.',
      'Sheared level and checked for finish.',
      'Washed, dried and ready to warm a room.',
    ),
    artisan: { name: 'Tsering Dorjee', location: 'Tawang, Arunachal Pradesh', exp: '19 years', quote: 'Each knot is a small prayer for warmth.' },
  }),
  P({
    id: 'mizo-puanchei-textile',
    name: 'Mizo Puanchei Ceremonial Textile',
    state: 'mizoram', tribe: 'Mizo', category: 'Textiles', material: 'Handloom Cotton',
    color: ['Red', 'Black', 'White'], priceINR: 8900,
    rating: 4.9, reviews: 13, badges: ['New'],
    images: [photo('1707978932202-751b08324daf', 1100), photo('1714245145426-c8565109aa34', 800), photo('1640292343595-889db1c8262e', 800), photo('1569909115134-a0426936c879', 800)],
    summary: 'The prized Puanchei — Mizoram’s richly patterned ceremonial cloth.',
    story: 'The Puanchei is the most treasured Mizo textile, worn at weddings and the Cheraw dance. Its dense bands of motif are woven on a backstrap loom.',
    cultural: 'A Mizo woman’s Puanchei marks the great occasions of her life, woven with patterns named for the hills and harvest.',
    process: proc(
      'Cotton yarn is prepared and sorted by colour.',
      'Coloured in deep red, black and white.',
      'Warped on the traditional backstrap loom.',
      'Motif bands are picked by hand.',
      'Checked for density and symmetry.',
      'Finished for the most special of days.',
    ),
    artisan: { name: 'Zonunsangi', location: 'Aizawl, Mizoram', exp: '17 years', quote: 'We weave the hills into the cloth.' },
  }),
  P({
    id: 'manipur-kauna-mat',
    name: 'Manipur Kauna Reed Cushion',
    state: 'manipur', tribe: 'Meitei', category: 'Bamboo & Cane', material: 'Kauna Reed',
    color: ['Natural'], priceINR: 2400,
    rating: 4.6, reviews: 12, badges: [],
    images: [photo('1658155058681-7a17cf3c42fd', 1100), photo('1599303000936-1cf21eac4456', 800), photo('1694855475416-64d819d20648', 800), photo('1760156885430-cd0bd9609ff6', 800)],
    summary: 'A soft, durable cushion woven from Manipur’s water-grown Kauna reed.',
    story: 'Kauna is a water reed grown in Manipur’s wetlands. Dried and hand-woven, it makes light, springy mats and cushions prized for their natural finish.',
    cultural: 'Kauna craft supports entire wetland villages around Loktak Lake, blending livelihood with ecology.',
    process: proc(
      'Kauna reed is harvested from the wetlands.',
      'Sun-dried to its natural pale tone.',
      'Sorted into even lengths.',
      'Hand-woven over a cushion form.',
      'Checked for spring and finish.',
      'Ready to bring nature indoors.',
    ),
    artisan: { name: 'Thoibi Devi', location: 'Bishnupur, Manipur', exp: '13 years', quote: 'The lake gives us our craft each season.' },
  }),
  P({
    id: 'meghalaya-cane-basket',
    name: 'Khasi Cane Storage Basket',
    state: 'meghalaya', tribe: 'Khasi', category: 'Bamboo & Cane', material: 'Cane & Bamboo',
    color: ['Natural', 'Earth'], priceINR: 3100,
    rating: 4.7, reviews: 10, badges: [],
    images: [photo('1694855475416-64d819d20648', 1100), photo('1599303000936-1cf21eac4456', 800), photo('1712210332599-0cb76e647e43', 800), photo('1699371830139-cb02e94878f1', 800)],
    summary: 'A sturdy Khasi cane basket, the everyday craft of the Meghalaya hills.',
    story: 'The Khasi carry the world in cane — the conical Khoh on the back, baskets in the home. This storage basket is tightly woven for a lifetime of use.',
    cultural: 'Cane baskets are inseparable from hill life, carried to market, field and home across the Khasi and Jaintia hills.',
    process: proc(
      'Hill cane is cut and cured.',
      'Kept in its natural earthen tone.',
      'Split into strong, even strips.',
      'Woven tightly from the base up.',
      'Checked for strength and shape.',
      'Finished and ready for your home.',
    ),
    artisan: { name: 'Banri Khongjee', location: 'Sohra, Meghalaya', exp: '11 years', quote: 'Cane teaches patience to the hands.' },
  }),
  P({
    id: 'tripura-risa-textile',
    name: 'Tripura Risa Handwoven Textile',
    state: 'tripura', tribe: 'Tripuri', category: 'Textiles', material: 'Handloom Cotton',
    color: ['Red', 'Gold'], priceINR: 5600,
    rating: 4.8, reviews: 15, badges: ['Handmade'],
    images: [photo('1643766883805-829d9ad95c42', 1100), photo('1646750421466-a04e689254d4', 800), photo('1569909115134-a0426936c879', 800), photo('1707978932202-751b08324daf', 800)],
    summary: 'The Risa — a handwoven cloth of identity and ceremony in Tripura.',
    story: 'The Risa is part of the Tripuri three-piece attire, gifted and worn at every rite of passage. Its narrow bands carry colour and meaning woven by hand.',
    cultural: 'The Risa marks adolescence, marriage and honour among the Tripuri — a cloth gifted with love and worn with pride.',
    process: proc(
      'Cotton is prepared and dyed.',
      'Coloured in festive red and gold.',
      'Warped on the loin loom.',
      'Bands of motif woven by hand.',
      'Checked for finish and colour.',
      'Folded and ready for ceremony.',
    ),
    artisan: { name: 'Sabitri Debbarma', location: 'Khowai, Tripura', exp: '16 years', quote: 'A Risa is given with blessing, never just sold.' },
  }),
  P({
    id: 'assam-japi-decor',
    name: 'Assam Decorative Jaapi',
    state: 'assam', tribe: 'Assamese', category: 'Home Decor', material: 'Bamboo & Tokou Palm',
    color: ['Gold', 'Red'], priceINR: 3300,
    rating: 4.7, reviews: 20, badges: ['Bestseller'],
    images: [photo('1760156885430-cd0bd9609ff6', 1100), photo('1580467469359-91a73a6e92ca', 800), photo('1770777470722-9b4052cdab68', 800), photo('1694855475416-64d819d20648', 800)],
    summary: 'The Jaapi — Assam’s iconic conical hat, decorated for the wall and welcome.',
    story: 'The Jaapi is the conical hat of Assam, once shade for farmers, now a decorative symbol of welcome and honour, layered with coloured cloth and fine bamboo lattice.',
    cultural: 'A decorated Jaapi is offered as a mark of respect and adorns Assamese homes and stages, especially at Bihu.',
    process: proc(
      'Bamboo and tokou palm leaf are gathered.',
      'Trimmed in red, green and gold cloth.',
      'A fine lattice frame is woven.',
      'Palm leaf is layered and stitched on.',
      'Checked for shape and decoration.',
      'Finished to welcome and adorn.',
    ),
    artisan: { name: 'Dipali Kalita', location: 'Nalbari, Assam', exp: '15 years', quote: 'A Jaapi says welcome before a word is spoken.' },
  }),
]

// Lead each product's gallery with a real NEDF craft/cluster photograph
// where one matches, keeping the curated stock shots as gallery variety.
const NEDF_PRODUCT_IMG = {
  'ao-naga-warrior-shawl': NEDF.crafts.tribalTextile,
  'muga-silk-mekhela': NEDF.products.rudrasagar,
  'longpi-black-pottery': NEDF.products.longpi,
  'eri-silk-stole': NEDF.crafts.handloom,
  'bamboo-pendant-lamp': NEDF.products.bambooBasket,
  'cane-shoulder-bag': NEDF.crafts.cane,
  'assam-bell-metal-bowl': NEDF.products.bellMetal,
  'mising-handloom-wrap': NEDF.crafts.handloom,
  'mizo-puanchei-textile': NEDF.crafts.tribalTextile,
  'manipur-kauna-mat': NEDF.products.kauna,
  'meghalaya-cane-basket': NEDF.crafts.cane,
  'tripura-risa-textile': NEDF.crafts.tribalTextile,
  'assam-japi-decor': NEDF.products.bambooBasket,
}
PRODUCTS.forEach((p) => {
  const img = NEDF_PRODUCT_IMG[p.id]
  if (img) p.images = [img, ...p.images]
})

export const productById = (id) => PRODUCTS.find((p) => p.id === id)
export const productsByState = (slug) => PRODUCTS.filter((p) => p.state === slug)
export const TRIBES = [...new Set(PRODUCTS.map((p) => p.tribe))].sort()
