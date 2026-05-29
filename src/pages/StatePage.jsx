import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronRight, Play, ArrowRight, Leaf, Scissors, Package, Gem, Home, Users, Mountain, Award } from 'lucide-react'
import VideoModal from '../components/ui/VideoModal.jsx'
import { Button } from '../components/common.jsx'
import Seo from '../components/Seo.jsx'
import { STATES, STATE_MAP } from '../data/states.js'
import { DISCOVER } from '../data/discover.js'

const STAT_ICONS = [Leaf, Scissors, Users, Mountain, Award]
const TRE_ICONS = [Leaf, Scissors, Package, Gem, Home, Award]
const Arrow = (props) => (
  <svg viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="1.4" width="22" height="11" {...props}><path d="M1 6h21M17 1l5 5-5 5" /></svg>
)

// route each card/treasure CTA to a sensible destination
function ctaTo(text, slug) {
  const t = text.toLowerCase()
  if (/artisan/.test(t)) return '/artisans'
  if (/stor(y|ies)/.test(t)) return '/journal'
  if (/heritage/.test(t)) return '/about'
  return `/shop?state=${slug}`
}

export default function StatePage() {
  const { slug } = useParams()
  const s = STATE_MAP[slug]
  const dd = DISCOVER[slug]
  const [video, setVideo] = useState(false)

  if (!s || !dd) {
    return (
      <div className="container-luxe py-32 text-center">
        <h1 className="font-serif text-4xl text-forest">State not found</h1>
        <Button to="/northeast" variant="dark" className="mt-6">Back to Discover Northeast</Button>
      </div>
    )
  }

  const t = dd.theme
  const themeVars = {
    '--st-ink': t.ink, '--st-ink-rgb': t.inkRgb, '--st-accent': t.accent, '--st-accent2': t.accent2,
    '--st-hero-text': t.heroText, '--st-hero-dim': t.heroDim, '--st-about-bg': t.aboutBg, '--st-about-ink': t.aboutInk,
    '--st-about-dim': t.aboutDim, '--st-about-line': t.aboutLine, '--st-treasure-bg': t.treasureBg,
    '--st-treasure-tx': t.treasureTx, '--st-card-bg': t.cardBg, '--st-card-ink': t.cardInk,
  }
  const numbered = dd.stats.filter((x) => !x.note)

  return (
    <div className="state-page" style={themeVars}>
      <Seo title={s.title || s.name} description={dd.sub} image={dd.hero} />

      {/* breadcrumb */}
      <nav className="sp-crumb">
        <Link to="/">Home</Link><span className="sep">›</span>
        <Link to="/northeast">Discover Northeast</Link><span className="sep">›</span>
        <span className="cur">{s.name}</span>
      </nav>

      {/* HERO */}
      <section className="sp-hero">
        <div className="sp-hero-photo" style={{
          backgroundImage: `linear-gradient(90deg, rgb(${t.inkRgb}) 0%, rgb(${t.inkRgb}) 26%, rgba(${t.inkRgb},0.72) 46%, rgba(${t.inkRgb},0.12) 66%, rgba(${t.inkRgb},0) 80%), url(${dd.hero})`,
          backgroundSize: 'cover, cover',
          backgroundPosition: 'center, right center',
        }} />
        <aside className="sp-rail">
          <div className="sp-rail-title">The Eight States</div>
          <ul>
            {STATES.map((st) => (
              <li key={st.slug}>
                <Link to={`/northeast/${st.slug}`} className={st.slug === slug ? 'on' : ''}>{st.name}</Link>
              </li>
            ))}
          </ul>
        </aside>
        <div className="sp-hero-copy">
          <div className="sp-eyebrow">The Land of</div>
          <h1 className="sp-title">{s.name}</h1>
          <div className="sp-rule" />
          <p className="sp-sub">{dd.sub}</p>
          <button onClick={() => setVideo(true)} className="sp-watch">
            <span className="sp-play"><Play size={16} className="fill-current ml-0.5" /></span>
            Watch the Story
          </button>
        </div>
      </section>

      {/* STATS */}
      <section className="sp-stats">
        {dd.stats.map((st, i) => {
          if (st.note) {
            const Icon = Gem
            return (
              <div key={i} className="sp-stat note">
                <Icon className="si" size={34} strokeWidth={1.3} />
                <div><div className="sv">{st.v}</div></div>
              </div>
            )
          }
          const Icon = STAT_ICONS[i % STAT_ICONS.length]
          return (
            <div key={i} className="sp-stat">
              <Icon className="si" size={34} strokeWidth={1.3} />
              <div><div className="sv">{st.v}</div><div className="sl">{st.l}</div></div>
            </div>
          )
        })}
      </section>

      {/* ABOUT + CARDS */}
      <section className="sp-about">
        <svg className="sp-botanical" viewBox="0 0 200 360" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M100 350C40 280 30 150 90 40c50 90 60 220 10 310" />
          <path d="M95 320c-30-20-50-60-55-110M100 250c25-25 35-70 30-120M97 180c-22-12-38-40-42-78M101 150c20-16 30-50 28-90" />
        </svg>
        <div className="sp-about-intro">
          <div className="sp-about-eyebrow">About {s.name}</div>
          <h2 className="sp-about-head">{dd.aboutHead[0]}<br />{dd.aboutHead[1]}</h2>
          <div className="sp-about-line" />
          <p className="sp-about-text">{dd.aboutText}</p>
          <Link className="sp-btn" to={`/shop?state=${slug}`}>Explore {s.name} <Arrow /></Link>
        </div>
        <div className={`sp-cards ${dd.cards.length === 3 ? 'cards-3' : ''}`}>
          {dd.cards.map((c) => (
            <Link key={c.title} to={ctaTo(c.cta, slug)} className="sp-card card-rise">
              <div className="pic" style={{ backgroundImage: `url(${c.img})` }} />
              <div className="sp-card-body">
                <h4>{c.title}</h4>
                <p>{c.text}</p>
                <span className="sp-clink">{c.cta} <Arrow /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TREASURES */}
      <section className="sp-treasures">
        <div className="sp-tre-title"><span className="deco">&#10070;</span> Explore {s.name}&rsquo;s Treasures <span className="deco">&#10070;</span></div>
        <div className="sp-tre-row">
          {dd.treasures.map((tr, i) => {
            const Icon = TRE_ICONS[i % TRE_ICONS.length]
            return (
              <Link key={tr} to={`/shop?state=${slug}`} className="sp-treasure">
                <Icon className="ti" size={34} strokeWidth={1.3} />
                <span className="tx">{tr}</span>
              </Link>
            )
          })}
          <Link to={`/shop?state=${slug}`} className="sp-tre-arrow" aria-label={`Shop ${s.name}`}><Arrow /></Link>
        </div>
      </section>

      <VideoModal open={video} onClose={() => setVideo(false)} poster={dd.hero} title={`The Story of ${s.name}`} subtitle={s.tagline} />
    </div>
  )
}
