import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight, Play, Compass, MapPin } from 'lucide-react'
import Carousel from '../components/ui/Carousel.jsx'
import InteractiveMap from '../components/ui/InteractiveMap.jsx'
import VideoModal from '../components/ui/VideoModal.jsx'
import { Button, Reveal, SectionHeading, Ornament } from '../components/common.jsx'
import Seo from '../components/Seo.jsx'
import { STATES, STATE_MAP } from '../data/states.js'

export default function Northeast() {
  const [featured, setFeatured] = useState('nagaland')
  const [video, setVideo] = useState(false)
  const s = STATE_MAP[featured]
  const navigate = useNavigate()
  const heroImages = STATES.map((st) => st.hero[0])

  return (
    <>
      <Seo title="Discover Northeast" description="Eight states, countless traditions, one timeless heritage. Explore the land, people and crafts of Northeast India." />
      {/* ░ ROW 1 — HERO ░ */}
      <Carousel images={heroImages} heightClass="h-screen min-h-[620px]" overlay="dark">
        <div className="container-luxe h-full flex items-center">
          <div className="grid lg:grid-cols-[1.7fr_1fr] gap-10 w-full items-center">
            <Reveal>
              <p className="eyebrow text-gold-300 mb-5">Discover Northeast India</p>
              <h1 className="display-1 text-ivory max-w-3xl">Discover the Soul of Northeast India</h1>
              <p className="mt-6 text-ivory/80 text-lg max-w-xl font-light">Eight states. Countless traditions. One timeless heritage.</p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button to="/northeast/assam" variant="gold" icon={ArrowRight}>Explore the States</Button>
                <button onClick={() => setVideo(true)} className="btn btn-outline"><Play size={15} className="fill-current" /> Watch our Story</button>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="hidden lg:block">
              <ul className="space-y-1 border-l border-ivory/20 pl-7">
                {STATES.map((st, i) => (
                  <li key={st.slug}>
                    <Link to={`/northeast/${st.slug}`} className="group flex items-baseline gap-4 py-2 text-ivory/70 hover:text-ivory transition-colors">
                      <span className="font-serif text-gold-300 text-lg w-7">{String(i + 1).padStart(2, '0')}</span>
                      <span className="font-serif text-2xl group-hover:translate-x-1 transition-transform">{st.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Carousel>

      {/* ░ ROW 2 — MAP ░ */}
      <section className="bg-paper py-20 md:py-28 relative overflow-hidden">
        <div className="container-luxe grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <SectionHeading align="left" eyebrow="The Eight States" title="One Region, Eight Worlds" sub="Each state of the Northeast carries its own language of craft, colour and culture. Trace the map to begin your journey through the eight sister states." />
            <div className="mt-8 flex items-center gap-6">
              <Button to="/northeast/assam" variant="dark" icon={ArrowRight}>View All States</Button>
              <div className="flex items-center gap-2 text-stone text-[12px] uppercase tracking-[0.18em]"><Compass size={18} className="text-gold-700" /> Hover to explore</div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative rounded-xl bg-gradient-to-br from-ivory-100 to-ivory-200 ring-1 ring-line p-6">
              <InteractiveMap selected={featured} onSelect={setFeatured} onActivate={(slug) => navigate(`/northeast/${slug}`)} tone="light" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ░ ROW 3 — STATE EXPLORER ░ */}
      <section className="relative bg-forest-900 grain py-16 md:py-24">
        <div className="container-luxe relative z-[3]">
          {/* circular icons */}
          <div className="flex gap-5 md:gap-8 overflow-x-auto no-scrollbar pb-4 justify-start md:justify-center">
            {STATES.map((st) => {
              const on = featured === st.slug
              return (
                <button key={st.slug} onClick={() => setFeatured(st.slug)} className="flex flex-col items-center gap-2 shrink-0">
                  <span className={`h-16 w-16 md:h-20 md:w-20 rounded-full overflow-hidden ring-2 transition-all ${on ? 'ring-gold scale-105' : 'ring-ivory/20 hover:ring-ivory/50'}`}>
                    <img src={st.hero[0]} alt={st.name} loading="lazy" className="h-full w-full object-cover" />
                  </span>
                  <span className={`text-[11px] tracking-wide ${on ? 'text-gold-300' : 'text-ivory/60'}`}>{st.name}</span>
                </button>
              )
            })}
          </div>

          {/* featured state hero */}
          <Reveal key={featured} className="mt-12 grid lg:grid-cols-[1.6fr_1fr] gap-8 items-stretch">
            <div className="relative overflow-hidden rounded-xl min-h-[420px]">
              <img src={s.hero[0]} alt={s.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/95 via-forest-900/40 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-8 md:p-10">
                <p className="eyebrow text-gold-300 mb-3">{s.name}</p>
                <h2 className="display-2 text-ivory uppercase max-w-lg">{s.tagline}</h2>
                <p className="mt-3 text-ivory/75 max-w-md">{s.about.slice(0, 150)}…</p>
                <div className="mt-6 grid grid-cols-4 gap-4 max-w-lg">
                  {s.stats.map((st2) => (
                    <div key={st2.label}>
                      <div className="font-serif text-2xl md:text-3xl text-gold-300">{st2.value}</div>
                      <div className="text-[10px] uppercase tracking-wide text-ivory/60 leading-tight mt-1">{st2.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button to={`/northeast/${s.slug}`} variant="gold" icon={ArrowRight}>Explore {s.name}</Button>
                  <Button to={`/shop?state=${s.slug}`} variant="outline">View Products</Button>
                </div>
              </div>
            </div>

            {/* video thumbnails */}
            <div className="flex flex-col gap-4">
              {s.cards.map((c, i) => (
                <button key={i} onClick={() => setVideo(true)} className="group relative flex-1 min-h-[120px] overflow-hidden rounded-xl">
                  <img src={c.img} alt={c.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-forest-900/45 group-hover:bg-forest-900/25 transition-colors" />
                  <div className="absolute inset-0 flex items-center gap-3 px-5">
                    <span className="h-10 w-10 rounded-full border border-ivory/60 flex items-center justify-center text-ivory group-hover:bg-gold group-hover:border-gold transition-colors"><Play size={14} className="fill-current ml-0.5" /></span>
                    <span className="font-serif text-lg text-ivory">{c.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ░ ROW 4 — STATE CARDS ░ */}
      <section className="bg-paper py-20 md:py-28">
        <div className="container-luxe">
          <Reveal><SectionHeading eyebrow="Step Inside" title="Explore the Eight States" sub="Open the door to each state — its land, its people and the crafts that carry its name." /></Reveal>
          <Reveal delay={0.1} className="mt-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {STATES.map((st) => (
                <Link key={st.slug} to={`/northeast/${st.slug}`} className="group relative overflow-hidden rounded-xl img-zoom card-rise">
                  <div className="ratio-portrait">
                    <img src={st.hero[0]} alt={st.name} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${st.accent.ink}f0, ${st.accent.ink}30, transparent)` }} />
                  <div className="absolute bottom-0 inset-x-0 p-5">
                    <h3 className="font-serif text-2xl text-ivory">{st.name}</h3>
                    <p className="text-[12px] text-ivory/75 mt-0.5">{st.tagline}</p>
                    <span className="mt-3 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] uppercase text-gold-300 opacity-0 group-hover:opacity-100 transition-opacity">
                      Discover <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
          <Ornament className="mt-14" />
        </div>
      </section>

      <VideoModal open={video} onClose={() => setVideo(false)} poster={s.hero[0]} title={`The Story of ${s.name}`} subtitle={s.tagline} />
    </>
  )
}
