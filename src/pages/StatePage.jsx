import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ChevronRight, Play, ArrowRight, Leaf, Scissors, Package, Coffee, Gem, Home, BookOpen, Landmark, ShoppingBag, Users,
} from 'lucide-react'
import Carousel from '../components/ui/Carousel.jsx'
import VideoModal from '../components/ui/VideoModal.jsx'
import { Button, Reveal } from '../components/common.jsx'
import Seo from '../components/Seo.jsx'
import { STATES, STATE_MAP } from '../data/states.js'

const TREASURE_ICONS = [Leaf, Scissors, Package, Coffee, Gem, Home]
const RIGHT_CARDS = [
  { icon: BookOpen, label: 'Explore Stories', to: '/journal' },
  { icon: Landmark, label: 'Explore Heritage', to: '/about' },
  { icon: ShoppingBag, label: 'Explore Products', toState: true },
  { icon: Users, label: 'Meet Artisans', to: '/artisans' },
]

export default function StatePage() {
  const { slug } = useParams()
  const s = STATE_MAP[slug]
  const [video, setVideo] = useState(false)

  if (!s) {
    return (
      <div className="container-luxe py-32 text-center">
        <h1 className="font-serif text-4xl text-forest">State not found</h1>
        <Button to="/northeast" variant="dark" className="mt-6">Back to Discover Northeast</Button>
      </div>
    )
  }

  return (
    <div className="container-luxe py-6">
      <Seo title={s.title || s.name} description={s.blurb} image={s.hero[0]} />
      {/* breadcrumb */}
      <nav className="flex items-center gap-1.5 text-[12px] text-stone mb-5">
        <Link to="/" className="hover:text-forest">Home</Link><ChevronRight size={13} />
        <Link to="/northeast" className="hover:text-forest">Discover Northeast</Link><ChevronRight size={13} />
        <span className="text-forest">{s.name}</span>
      </nav>

      <div className="grid lg:grid-cols-[210px_1fr] gap-8">
        {/* sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <p className="eyebrow text-gold-700 mb-4">The Eight States</p>
            <ul className="space-y-1">
              {STATES.map((st) => {
                const on = st.slug === slug
                return (
                  <li key={st.slug}>
                    <Link to={`/northeast/${st.slug}`} className={`flex items-center gap-2.5 py-2 text-[15px] transition-colors ${on ? 'text-forest font-medium' : 'text-stone hover:text-forest'}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${on ? '' : 'opacity-30'}`} style={{ background: on ? s.accent.from : '#8a8275' }} />
                      {st.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </aside>

        {/* content */}
        <div>
          {/* HERO */}
          <div className="relative rounded-xl overflow-hidden">
            <Carousel images={s.hero} heightClass="h-[440px] md:h-[520px]" overlay="left" arrows={s.hero.length > 1} dots={false} autoplay>
              <div className="h-full flex flex-col justify-center px-8 md:px-12 max-w-xl">
                <Reveal>
                  <p className="eyebrow text-gold-300 mb-2">The Land of</p>
                  <h1 className="display-1 text-ivory uppercase leading-none">{s.name}</h1>
                  <p className="mt-4 text-ivory/85 max-w-md">{s.blurb}</p>
                  <button onClick={() => setVideo(true)} className="mt-6 inline-flex items-center gap-3 text-ivory group">
                    <span className="h-12 w-12 rounded-full border border-ivory/60 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-colors"><Play size={16} className="fill-current ml-0.5" /></span>
                    <span className="text-[12px] font-semibold tracking-[0.2em] uppercase">Watch the Story</span>
                  </button>
                </Reveal>
              </div>
            </Carousel>
          </div>

          {/* STATS STRIP */}
          <div className="grid grid-cols-2 md:grid-cols-4 rounded-b-xl -mt-1" style={{ background: `linear-gradient(100deg, ${s.accent.ink}, ${s.accent.from}40)` }}>
            {s.stats.map((st, i) => {
              const Icon = TREASURE_ICONS[i % TREASURE_ICONS.length]
              return (
                <div key={st.label} className={`px-5 py-6 flex items-center gap-3 ${i < s.stats.length - 1 ? 'md:border-r border-ivory/10' : ''}`}>
                  <Icon size={26} strokeWidth={1.3} className="text-gold-300 shrink-0" />
                  <div>
                    <div className="font-serif text-2xl text-ivory leading-none">{st.value}</div>
                    <div className="text-[11px] uppercase tracking-wide text-ivory/70 mt-1">{st.label}</div>
                    <div className="text-[10px] text-ivory/45">{st.note}</div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* ABOUT */}
          <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-10 mt-16 items-start">
            <Reveal>
              <p className="eyebrow text-gold-700 mb-3">About {s.name}</p>
              <h2 className="display-3 text-forest">{s.aboutTitle}</h2>
              <p className="mt-5 text-[15px] leading-relaxed text-charcoal/80">{s.about}</p>
              <Button to={`/shop?state=${s.slug}`} variant="outline-dark" icon={ArrowRight} className="mt-7">Explore {s.name}</Button>
              <svg viewBox="0 0 120 120" className="w-24 h-24 mt-8 opacity-60" style={{ color: s.accent.from }} fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M60 110 C60 60 70 30 100 14 C84 44 74 70 60 110" />
                <path d="M60 110 C60 60 50 30 20 14 C36 44 46 70 60 110" />
                <path d="M60 110 V40" />
              </svg>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid sm:grid-cols-3 gap-4">
                {s.cards.map((c) => (
                  <div key={c.title} className="bg-white rounded-lg overflow-hidden ring-1 ring-line card-rise">
                    <div className="img-zoom ratio-wide overflow-hidden">
                      <img src={c.img} alt={c.title} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif text-lg text-forest">{c.title}</h3>
                      <p className="text-[12.5px] text-stone mt-1.5 clamp-3">{c.text}</p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-[10.5px] font-semibold tracking-[0.16em] uppercase text-gold-700">{c.cta} <ArrowRight size={12} /></span>
                    </div>
                  </div>
                ))}
              </div>

              {/* right quick-links */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">
                {RIGHT_CARDS.map((rc) => (
                  <Link key={rc.label} to={rc.toState ? `/shop?state=${s.slug}` : rc.to} className="flex flex-col items-center gap-2 py-4 rounded-lg ring-1 ring-line hover:ring-gold hover:bg-ivory-100 transition-all text-center">
                    <rc.icon size={20} className="text-gold-700" />
                    <span className="text-[11px] font-medium text-forest">{rc.label}</span>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>

          {/* TREASURES STRIP */}
          <div className="mt-16 rounded-xl grain overflow-hidden" style={{ background: s.accent.ink }}>
            <div className="px-6 py-10 md:px-10">
              <p className="text-center text-ivory font-serif text-2xl md:text-3xl mb-8">Explore {s.name}'s Treasures</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-7 gap-x-4">
                {s.treasures.map((t, i) => {
                  const Icon = TREASURE_ICONS[i % TREASURE_ICONS.length]
                  return (
                    <Link key={t} to={`/shop?state=${s.slug}`} className="flex flex-col items-center text-center gap-3 group">
                      <span className="h-14 w-14 rounded-full border border-gold-300/40 flex items-center justify-center text-gold-300 group-hover:bg-gold group-hover:text-white group-hover:border-gold transition-colors">
                        <Icon size={22} strokeWidth={1.4} />
                      </span>
                      <span className="text-[12px] text-ivory/80 leading-snug">{t}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoModal open={video} onClose={() => setVideo(false)} poster={s.hero[0]} title={`The Story of ${s.name}`} subtitle={s.tagline} />
    </div>
  )
}
