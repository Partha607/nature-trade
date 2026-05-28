/* ============================================================
   The Eight States of Northeast India.
   Colour gradients follow the brand blueprint's state concepts.
   Every state-aware page (Home map, Discover Northeast, the
   individual state pages, Shop filters) reads from this file.
   ============================================================ */
import { photo, NEDF } from './images.js'

export const STATES = [
  {
    slug: 'assam',
    name: 'Assam',
    title: 'The Land of Assam',
    tagline: 'Land of Muga Silk',
    blurb: 'The golden Muga silk, endless tea gardens and the mighty Brahmaputra.',
    accent: { from: '#b89b5e', to: '#5c7048', ink: '#2c3320', soft: '#efe7d0' },
    mapColor: '#b89b5e',
    icon: 'leaf',
    hero: [photo('1615472910606-9d4f7291944f', 2000), photo('1758390287060-aed62e4144f6', 2000)],
    aboutTitle: 'A Legacy Woven in Muga Gold',
    about:
      'Assam is a land of contrasts and harmony — ancient crafts and vibrant cultures, lush tea gardens and mighty rivers. From the golden sheen of Muga silk to the fragrance of hand-crafted tea, every element tells a story of heritage and pride.',
    stats: [
      { value: '800+', label: 'Tea Gardens', note: 'and counting' },
      { value: '600+', label: 'Weaving Heritage', note: 'years old' },
      { value: '200+', label: 'Artisan Communities', note: 'villages' },
      { value: 'Rich', label: 'Craft Legacies', note: 'and diverse' },
    ],
    cards: [
      { title: 'Muga Silk', text: 'The pride of Assam — naturally golden, lustrous and unmatched in durability.', img: photo('1569909115134-a0426936c879', 800), cta: 'Explore Products' },
      { title: 'Tea Heritage', text: 'From the world-famous tea gardens comes a legacy of flavour, aroma and craftsmanship.', img: photo('1758390286286-9b3b690989e7', 800), cta: 'Explore Story' },
      { title: 'Craft Traditions', text: 'Handwoven textiles, bell metal and more — preserving skills passed down generations.', img: photo('1640292343595-889db1c8262e', 800), cta: 'Discover Crafts' },
    ],
    treasures: ['Muga Silk Collection', 'Handwoven Textiles', 'Bamboo & Cane Crafts', 'Tea & Natural Products', 'Traditional Jewellery', 'Home & Living Decor'],
  },
  {
    slug: 'nagaland',
    name: 'Nagaland',
    title: 'The Land of Nagaland',
    tagline: 'Land of Warrior Weaves',
    blurb: 'Bold patterns, tribal strength and the shawls of sixteen storied tribes.',
    accent: { from: '#7c1f1f', to: '#1a1411', ink: '#2a0f0f', soft: '#f0d9d2' },
    mapColor: '#8a2b24',
    icon: 'shield',
    hero: [photo('1569909115134-a0426936c879', 2000), photo('1638310533874-6c124c012e1d', 2000)],
    aboutTitle: 'Threads of the Warrior Tribes',
    about:
      'Nagaland speaks in bold colour and geometry. The shawls of Nagaland are not just clothing — they are identity, honour and storytelling woven thread by thread, each motif marking lineage, valour and belonging across sixteen major tribes.',
    stats: [
      { value: '16', label: 'Major Tribes', note: 'and counting' },
      { value: '37+', label: 'Weaving Villages', note: 'active today' },
      { value: '200+', label: 'Years of Tradition', note: 'preserved' },
      { value: '800+', label: 'Motifs & Patterns', note: 'recorded' },
    ],
    cards: [
      { title: 'Warrior Shawls', text: 'Handspun, hand-dyed shawls carrying the geometry of tribe and honour.', img: photo('1569909115134-a0426936c879', 800), cta: 'Explore Products' },
      { title: 'Tribal Heritage', text: 'A living culture of festivals, song and craft across sixteen tribes.', img: photo('1602020277972-fd160de66021', 800), cta: 'Explore Story' },
      { title: 'Beadwork & Craft', text: 'Intricate beadwork, headgear and woodcraft of the Naga people.', img: photo('1712210332599-0cb76e647e43', 800), cta: 'Discover Crafts' },
    ],
    treasures: ['Warrior Shawls', 'Tribal Beadwork', 'Wood Carvings', 'Cane & Bamboo', 'Handspun Textiles', 'Festival Regalia'],
  },
  {
    slug: 'manipur',
    name: 'Manipur',
    title: 'The Land of Manipur',
    tagline: 'The Land of Ras & Craft',
    blurb: 'Graceful traditions, black pottery and the rhythm of the Ras dance.',
    accent: { from: '#b56576', to: '#2a2230', ink: '#3a2230', soft: '#f3dde2' },
    mapColor: '#b56576',
    icon: 'lotus',
    hero: [photo('1699371830139-cb02e94878f1', 2000), photo('1678082309214-3b2941e387f8', 2000)],
    aboutTitle: 'Where Grace Meets the Earth',
    about:
      'Manipur moves with quiet grace — from the Ras Leela dance to the unglazed black pottery of Longpi, shaped without a wheel. Its crafts carry the muted rose of the lotus and the deep tones of fire-baked clay.',
    stats: [
      { value: '500+', label: 'Years of Pottery', note: 'wheel-free' },
      { value: '34', label: 'Recognised Tribes', note: 'and clans' },
      { value: '100+', label: 'Weaving Clusters', note: 'statewide' },
      { value: 'Living', label: 'Dance Heritage', note: 'Ras Leela' },
    ],
    cards: [
      { title: 'Longpi Pottery', text: 'Signature black stone pottery shaped by hand, without a wheel.', img: photo('1699371830139-cb02e94878f1', 800), cta: 'Explore Products' },
      { title: 'Ras Heritage', text: 'The classical Manipuri dance — devotion expressed in movement.', img: photo('1602020277972-fd160de66021', 800), cta: 'Explore Story' },
      { title: 'Handloom Craft', text: 'Moirang Phee and Phanek — textiles woven with quiet precision.', img: photo('1640292343595-889db1c8262e', 800), cta: 'Discover Crafts' },
    ],
    treasures: ['Longpi Black Pottery', 'Moirang Phee Textiles', 'Cane & Bamboo', 'Handloom Phanek', 'Traditional Jewellery', 'Home & Living Decor'],
  },
  {
    slug: 'meghalaya',
    name: 'Meghalaya',
    title: 'The Land of Meghalaya',
    tagline: 'Abode of Clouds & Living Traditions',
    blurb: 'Misty hills, living-root bridges and rain-washed living traditions.',
    accent: { from: '#6b8fa3', to: '#2b3a42', ink: '#22323a', soft: '#dde9ee' },
    mapColor: '#6b8fa3',
    icon: 'cloud',
    hero: [photo('1758390287060-aed62e4144f6', 2000), photo('1758390286286-9b3b690989e7', 2000)],
    aboutTitle: 'Crafted in the Abode of Clouds',
    about:
      'Meghalaya, the abode of clouds, is shaped by rain and resilience. Its living-root bridges, cane weaving and Eri silk reflect a people who craft in harmony with one of the wettest landscapes on earth.',
    stats: [
      { value: '3', label: 'Major Tribes', note: 'Khasi, Garo, Jaintia' },
      { value: '100%', label: 'Eri Silk', note: 'peace silk' },
      { value: 'Living', label: 'Root Bridges', note: 'centuries old' },
      { value: 'Rich', label: 'Cane Craft', note: 'and bamboo' },
    ],
    cards: [
      { title: 'Eri Silk', text: 'Ahimsa "peace silk" — soft, warm and ethically harvested.', img: photo('1569909115134-a0426936c879', 800), cta: 'Explore Products' },
      { title: 'Living Traditions', text: 'Root bridges, monoliths and matrilineal heritage of the hills.', img: photo('1758390286286-9b3b690989e7', 800), cta: 'Explore Story' },
      { title: 'Cane & Bamboo', text: 'Baskets, mats and furniture woven from hill cane.', img: photo('1694855475416-64d819d20648', 800), cta: 'Discover Crafts' },
    ],
    treasures: ['Eri Peace Silk', 'Cane & Bamboo', 'Handwoven Shawls', 'Natural Products', 'Traditional Jewellery', 'Home & Living Decor'],
  },
  {
    slug: 'arunachal-pradesh',
    name: 'Arunachal Pradesh',
    title: 'The Land of Arunachal Pradesh',
    tagline: 'Land of Rising Mountains',
    blurb: 'The land of the dawn-lit mountains, monasteries and tribal weaves.',
    accent: { from: '#d08a3e', to: '#5b3f6e', ink: '#3a2a44', soft: '#f3e1cf' },
    mapColor: '#d08a3e',
    icon: 'sunrise',
    hero: [photo('1758390286286-9b3b690989e7', 2000), photo('1615472910606-9d4f7291944f', 2000)],
    aboutTitle: 'Where the Sun First Rises',
    about:
      'Arunachal Pradesh greets the first light of India. Across its dawn-lit mountains, more than twenty-six major tribes weave carpets, craft masks and keep monastery traditions alive in sunrise orange and monastery violet.',
    stats: [
      { value: '26+', label: 'Major Tribes', note: 'distinct cultures' },
      { value: '100+', label: 'Sub-tribes', note: 'and clans' },
      { value: 'Living', label: 'Monastery Craft', note: 'Buddhist heritage' },
      { value: 'Rich', label: 'Carpet Weaving', note: 'and masks' },
    ],
    cards: [
      { title: 'Tribal Weaves', text: 'Carpets, shawls and textiles in bold mountain colour.', img: photo('1569909115134-a0426936c879', 800), cta: 'Explore Products' },
      { title: 'Monastery Heritage', text: 'Thangka, masks and the living Buddhist traditions of Tawang.', img: photo('1758390287060-aed62e4144f6', 800), cta: 'Explore Story' },
      { title: 'Wood & Cane', text: 'Hand-carved craft and cane work of the eastern Himalaya.', img: photo('1712210332599-0cb76e647e43', 800), cta: 'Discover Crafts' },
    ],
    treasures: ['Tribal Carpets', 'Handwoven Shawls', 'Wood Carvings', 'Cane & Bamboo', 'Monastery Crafts', 'Traditional Jewellery'],
  },
  {
    slug: 'mizoram',
    name: 'Mizoram',
    title: 'The Land of Mizoram',
    tagline: 'Bamboo, Hills & Heritage',
    blurb: 'Rolling hills, bamboo craft and the harmonious living of the Mizo.',
    accent: { from: '#6f8f4e', to: '#3c4a2a', ink: '#283318', soft: '#e4ecd4' },
    mapColor: '#6f8f4e',
    icon: 'bamboo',
    hero: [photo('1758390287060-aed62e4144f6', 2000), photo('1602020277972-99978250c8bd', 2000)],
    aboutTitle: 'Woven from Bamboo & Hills',
    about:
      'Mizoram lives gently among rolling green hills. Bamboo runs through its life and craft — from the Cheraw dance to Puanchei textiles — in shades of bamboo green and natural earth.',
    stats: [
      { value: '90%', label: 'Bamboo Forest', note: 'of land cover' },
      { value: 'Living', label: 'Puan Weaving', note: 'tradition' },
      { value: 'Rich', label: 'Cheraw Dance', note: 'bamboo dance' },
      { value: 'Pure', label: 'Natural Craft', note: 'earth-dyed' },
    ],
    cards: [
      { title: 'Puanchei Textiles', text: 'The ceremonial Mizo textile, richly patterned and prized.', img: photo('1569909115134-a0426936c879', 800), cta: 'Explore Products' },
      { title: 'Bamboo Heritage', text: 'A culture woven from bamboo — homes, craft and the Cheraw dance.', img: photo('1694855475416-64d819d20648', 800), cta: 'Explore Story' },
      { title: 'Cane & Earth', text: 'Baskets, hats and home craft from the green hills.', img: photo('1699371830139-cb02e94878f1', 800), cta: 'Discover Crafts' },
    ],
    treasures: ['Puanchei Textiles', 'Bamboo Craft', 'Cane Baskets', 'Handwoven Puan', 'Natural Products', 'Home & Living Decor'],
  },
  {
    slug: 'tripura',
    name: 'Tripura',
    title: 'The Land of Tripura',
    tagline: 'Land of Cane, Clay & Colour',
    blurb: 'Royal heritage, fine cane craft and the warm tones of terracotta.',
    accent: { from: '#a5673f', to: '#6d3b27', ink: '#3a2117', soft: '#f0ddcf' },
    mapColor: '#a5673f',
    icon: 'basket',
    hero: [photo('1699371830139-cb02e94878f1', 2000), photo('1694855475416-64d819d20648', 2000)],
    aboutTitle: 'Cane, Clay & Royal Colour',
    about:
      'Tripura blends royal heritage with the craft of its tribes. Its fine cane and bamboo work, Risa textiles and warm terracotta carry the colour of earth and the memory of kings.',
    stats: [
      { value: '19', label: 'Tribal Communities', note: 'and clans' },
      { value: 'Royal', label: 'Heritage', note: 'Manikya legacy' },
      { value: 'Fine', label: 'Cane Craft', note: 'world-renowned' },
      { value: 'Living', label: 'Risa Weaving', note: 'tradition' },
    ],
    cards: [
      { title: 'Risa Textiles', text: 'The handwoven Risa — a cloth of identity and ceremony.', img: photo('1569909115134-a0426936c879', 800), cta: 'Explore Products' },
      { title: 'Royal Heritage', text: 'The Manikya legacy and the living culture of nineteen tribes.', img: photo('1602020277972-fd160de66021', 800), cta: 'Explore Story' },
      { title: 'Cane & Clay', text: 'Fine cane furniture and warm terracotta of the plains.', img: photo('1699371830139-cb02e94878f1', 800), cta: 'Discover Crafts' },
    ],
    treasures: ['Risa Textiles', 'Cane Furniture', 'Terracotta Craft', 'Bamboo Work', 'Traditional Jewellery', 'Home & Living Decor'],
  },
  {
    slug: 'sikkim',
    name: 'Sikkim',
    title: 'The Land of Sikkim',
    tagline: 'Where Prayers Meet The Mountains',
    blurb: 'Snow peaks, prayer flags and the serene craft of the Himalaya.',
    accent: { from: '#7fb3c4', to: '#3a5a7a', ink: '#24384e', soft: '#e2eef2' },
    mapColor: '#7fb3c4',
    icon: 'mountain',
    hero: [photo('1758390286286-9b3b690989e7', 2000), photo('1758390287060-aed62e4144f6', 2000)],
    aboutTitle: 'Serenity in Snow & Cyan',
    about:
      'Sikkim rests in the lap of the Himalaya, where prayer flags meet snow peaks. Its Thangka painting, carpet weaving and handmade paper carry the calm of spiritual blue and the white of mountain snow.',
    stats: [
      { value: 'Living', label: 'Thangka Art', note: 'sacred painting' },
      { value: '100+', label: 'Monasteries', note: 'and gompas' },
      { value: 'Fine', label: 'Carpet Weaving', note: 'Tibetan craft' },
      { value: 'Pure', label: 'Handmade Paper', note: 'tradition' },
    ],
    cards: [
      { title: 'Thangka & Carpets', text: 'Sacred Thangka painting and finely knotted Himalayan carpets.', img: photo('1569909115134-a0426936c879', 800), cta: 'Explore Products' },
      { title: 'Spiritual Heritage', text: 'Monasteries, prayer flags and the calm of mountain life.', img: photo('1758390287060-aed62e4144f6', 800), cta: 'Explore Story' },
      { title: 'Handmade Craft', text: 'Handmade paper, wood craft and the artistry of the hills.', img: photo('1712210332599-0cb76e647e43', 800), cta: 'Discover Crafts' },
    ],
    treasures: ['Thangka Paintings', 'Himalayan Carpets', 'Handmade Paper', 'Wood Craft', 'Prayer Textiles', 'Home & Living Decor'],
  },
]

// Lead each state's hero carousel with its real NEDF "roots" photograph,
// keeping the curated stock shots as additional slides.
STATES.forEach((s) => {
  const root = NEDF.roots[s.slug]
  if (root) s.hero = [root, ...s.hero]
})

export const STATE_MAP = Object.fromEntries(STATES.map((s) => [s.slug, s]))
export const stateBySlug = (slug) => STATE_MAP[slug]
