/* Journal / editorial content. */
import { photo } from './images.js'

export const THEMES = [
  { name: 'Artisan Stories', icon: 'users' },
  { name: 'Craft & Traditions', icon: 'scissors' },
  { name: 'Culture & Heritage', icon: 'landmark' },
  { name: 'Travel & Places', icon: 'mountain' },
  { name: 'Sustainability & Nature', icon: 'leaf' },
  { name: 'Food & Lifestyle', icon: 'utensils' },
  { name: 'News & Events', icon: 'calendar' },
]

export const POSTS = [
  {
    slug: 'threads-of-identity-nagaland',
    title: 'Threads of Identity: The Weavers of Nagaland',
    excerpt: 'In the highlands of Nagaland, weaving is more than a craft — it is a living language of identity, passed thread by thread across generations.',
    category: 'Artisan Stories', date: 'May 12, 2026', readTime: '6 min read',
    img: photo('1569909115134-a0426936c879', 1200), author: 'Editorial Team', featured: true,
  },
  { slug: 'bamboo-green-gold-mizoram', title: 'Bamboo: The Green Gold of Mizoram', excerpt: 'How bamboo feeds, builds and clothes an entire culture in the green hills of Mizoram.', category: 'Sustainability & Nature', date: 'May 6, 2026', readTime: '5 min read', img: photo('1694855475416-64d819d20648', 800), author: 'R. Lalremruati' },
  { slug: 'black-pottery-manipur', title: 'The Timeless Art of Black Pottery in Manipur', excerpt: 'Inside Longpi village, where pottery is shaped without a wheel and fired to charcoal black.', category: 'Craft & Traditions', date: 'Apr 28, 2026', readTime: '7 min read', img: photo('1699371830139-cb02e94878f1', 800), author: 'Editorial Team' },
  { slug: 'spring-festivals-northeast', title: 'Spring Festivals of Northeast India', excerpt: 'A celebration of colour, harvest and music across the eight sister states.', category: 'Culture & Heritage', date: 'Apr 20, 2026', readTime: '6 min read', img: photo('1602020277972-fd160de66021', 800), author: 'Editorial Team' },
  { slug: 'natural-dyes-return-to-roots', title: 'Natural Dyes: Timeless Hues, a Return to Roots', excerpt: 'Why a new generation of artisans is returning to madder, indigo and lac.', category: 'Sustainability & Nature', date: 'Apr 11, 2026', readTime: '5 min read', img: photo('1678082309214-3b2941e387f8', 800), author: 'Editorial Team' },
  { slug: 'monasteries-in-the-clouds-arunachal', title: 'Monasteries in the Clouds: Arunachal Pradesh', excerpt: 'A journey to Tawang, where craft and Buddhism are woven into daily life.', category: 'Travel & Places', date: 'Apr 3, 2026', readTime: '8 min read', img: photo('1758390286286-9b3b690989e7', 800), author: 'Editorial Team' },
]

export const EDITOR_PICKS = [
  { slug: 'day-in-the-life-assamese-weaver', title: 'A Day in the Life of an Assamese Weaver', category: 'Artisan Stories', date: 'May 9, 2026', img: photo('1638310533874-6c124c012e1d', 400) },
  { slug: 'cane-craft-tripura', title: 'Cane Craft of Tripura: Stories in Every Weave', category: 'Craft & Traditions', date: 'May 1, 2026', img: photo('1599303000936-1cf21eac4456', 400) },
  { slug: 'foods-of-northeast-india', title: 'Fermented & Fresh: Foods of Northeast India', category: 'Food & Lifestyle', date: 'Apr 24, 2026', img: photo('1602020277972-99978250c8bd', 400) },
  { slug: 'sacred-rhythms-bihu', title: 'The Sacred Rhythms of the Bihu Dance', category: 'Culture & Heritage', date: 'Apr 15, 2026', img: photo('1615472910606-9d4f7291944f', 400) },
  { slug: 'nature-trade-hornbill-festival', title: 'Nature Trade at the Hornbill Festival', category: 'News & Events', date: 'Apr 2, 2026', img: photo('1569909115134-a0426936c879', 400) },
]

export const JOURNAL_VALUES = [
  { title: 'Honouring Tradition', text: 'We celebrate and preserve the rich cultural legacy of Northeast India.', icon: 'landmark' },
  { title: 'Empowering Artisans', text: 'We tell the stories of the makers and the communities behind every craft.', icon: 'users' },
  { title: 'Promoting Sustainability', text: 'We champion natural materials and ethical, earth-first practices.', icon: 'leaf' },
  { title: 'Inspiring Connection', text: 'We connect you to the people, places and meaning woven into each piece.', icon: 'heart' },
]

export const postBySlug = (slug) => [...POSTS, ...EDITOR_PICKS].find((p) => p.slug === slug)
