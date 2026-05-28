import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Users, Scissors, Landmark, Mountain, Leaf, Utensils, Calendar, Heart, Send } from 'lucide-react'
import Carousel from '../components/ui/Carousel.jsx'
import { Button, Reveal, SectionHeading } from '../components/common.jsx'
import Seo from '../components/Seo.jsx'
import { POSTS, EDITOR_PICKS, THEMES, JOURNAL_VALUES } from '../data/journal.js'
import { IMG, photo } from '../data/images.js'

const ICONS = { users: Users, scissors: Scissors, landmark: Landmark, mountain: Mountain, leaf: Leaf, utensils: Utensils, calendar: Calendar, heart: Heart }

export default function Journal() {
  const featured = POSTS.find((p) => p.featured) || POSTS[0]
  const latest = POSTS.filter((p) => !p.featured)

  return (
    <>
      <Seo title="The Journal" description="Stories woven through generations — tribal history, weaving traditions, sustainability and artisan lives from Northeast India." />
      {/* ░ HERO ░ */}
      <Carousel images={[IMG.journalHero, photo('1758390286286-9b3b690989e7', 2000)]} heightClass="h-[80vh] min-h-[520px]" overlay="left" dots={false}>
        <div className="container-luxe h-full flex flex-col justify-center">
          <Reveal>
            <p className="eyebrow text-gold-300 mb-4">The Journal</p>
            <h1 className="display-1 text-ivory max-w-3xl">Stories Woven Through <span className="text-gold-gradient">Generations</span></h1>
            <p className="mt-6 text-ivory/80 text-lg max-w-xl font-light">Explore the rich traditions, crafts and cultures of Northeast India — its stories, journeys and the timeless wisdom passed down through generations.</p>
            <Button to="#latest" variant="gold" icon={ArrowRight} className="mt-8">Explore Stories</Button>
          </Reveal>
        </div>
      </Carousel>

      {/* ░ EXPLORE BY THEME ░ */}
      <section className="bg-paper border-b border-line py-12">
        <div className="container-luxe">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl text-forest">Explore by Theme</h2>
            <Link to="/journal" className="link-cta">View All <ArrowRight size={13} /></Link>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
            {THEMES.map((t) => {
              const Icon = ICONS[t.icon] || Leaf
              return (
                <button key={t.name} className="flex flex-col items-center gap-3 group">
                  <span className="h-14 w-14 rounded-full bg-white ring-1 ring-line flex items-center justify-center text-gold-700 group-hover:bg-forest group-hover:text-gold-300 transition-colors"><Icon size={22} strokeWidth={1.4} /></span>
                  <span className="text-[11px] text-center text-charcoal/70 leading-tight">{t.name}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* ░ FEATURED + EDITOR PICKS ░ */}
      <section className="container-luxe py-16 md:py-20 grid lg:grid-cols-[1.7fr_1fr] gap-10">
        <Reveal>
          <p className="eyebrow text-gold-700 mb-4">Featured Story</p>
          <Link to={`/journal/${featured.slug}`} className="group block">
            <div className="img-zoom rounded-xl overflow-hidden ratio-wide">
              <img src={featured.img} alt={featured.title} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <span className="mt-5 inline-block text-[11px] uppercase tracking-[0.16em] text-gold-700">{featured.category}</span>
            <h3 className="font-serif text-3xl text-forest mt-2 group-hover:text-gold-700 transition-colors">{featured.title}</h3>
            <p className="mt-3 text-[15px] text-charcoal/75 leading-relaxed max-w-2xl">{featured.excerpt}</p>
            <div className="mt-4 flex items-center gap-4 text-[12px] text-stone">
              <span>{featured.date}</span><span className="flex items-center gap-1"><Clock size={13} /> {featured.readTime}</span>
            </div>
            <span className="mt-4 link-cta">Read More <ArrowRight size={13} /></span>
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow text-gold-700 mb-4">Editor's Picks</p>
          <div className="space-y-5">
            {EDITOR_PICKS.map((p) => (
              <Link key={p.slug} to={`/journal/${p.slug}`} className="group flex gap-4 items-center">
                <div className="img-zoom h-20 w-24 shrink-0 rounded-lg overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.14em] text-gold-700">{p.category}</span>
                  <h4 className="font-serif text-[17px] text-forest leading-snug group-hover:text-gold-700 transition-colors">{p.title}</h4>
                  <span className="text-[11px] text-stone">{p.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ░ LATEST STORIES ░ */}
      <section id="latest" className="bg-paper py-16 md:py-20">
        <div className="container-luxe">
          <Reveal><SectionHeading align="left" eyebrow="Fresh from the Hills" title="Latest Stories" /></Reveal>
          <Reveal delay={0.1} className="mt-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {latest.map((p) => (
                <Link key={p.slug} to={`/journal/${p.slug}`} className="group block bg-white rounded-xl overflow-hidden ring-1 ring-line card-rise">
                  <div className="img-zoom ratio-wide overflow-hidden">
                    <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] uppercase tracking-[0.14em] text-gold-700">{p.category}</span>
                    <h3 className="font-serif text-xl text-forest mt-1.5 leading-snug group-hover:text-gold-700 transition-colors">{p.title}</h3>
                    <p className="mt-2 text-[13px] text-stone clamp-2">{p.excerpt}</p>
                    <div className="mt-3 flex items-center gap-3 text-[11px] text-stone"><span>{p.date}</span><span className="flex items-center gap-1"><Clock size={12} />{p.readTime}</span></div>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
          <div className="text-center mt-12"><Button to="/journal" variant="outline-dark" icon={ArrowRight}>Load More Stories</Button></div>
        </div>
      </section>

      {/* ░ NEWSLETTER ░ */}
      <section className="container-luxe py-16">
        <div className="relative rounded-2xl bg-forest-900 grain overflow-hidden">
          <img src={IMG.fabricTexture} alt="" className="absolute inset-0 h-full w-full object-cover opacity-10" />
          <div className="relative z-[3] px-6 py-14 md:px-16 text-center max-w-2xl mx-auto">
            <p className="eyebrow text-gold-300 mb-3">Join the Journal</p>
            <h2 className="display-3 text-ivory">Stories in Your Inbox</h2>
            <p className="mt-3 text-ivory/70">Subscribe to our curated newsletter and get stories, artisan features, new arrivals and exclusive updates — delivered with care.</p>
            <form className="mt-7 flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" className="flex-1 rounded-full bg-ivory/10 ring-1 ring-ivory/25 px-5 py-3 text-ivory placeholder:text-ivory/40 outline-none focus:ring-gold" />
              <button className="btn btn-gold"><Send size={15} /> Subscribe</button>
            </form>
            <p className="mt-3 text-[11px] text-ivory/40">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* ░ JOURNAL VALUES ░ */}
      <section className="bg-ivory-200/70 border-t border-line py-12">
        <div className="container-luxe grid grid-cols-2 md:grid-cols-4 gap-8">
          {JOURNAL_VALUES.map((v) => {
            const Icon = ICONS[v.icon] || Leaf
            return (
              <div key={v.title} className="text-center">
                <span className="h-12 w-12 rounded-full bg-forest text-gold-300 inline-flex items-center justify-center"><Icon size={20} strokeWidth={1.4} /></span>
                <h4 className="mt-3 font-serif text-lg text-forest">{v.title}</h4>
                <p className="mt-1 text-[12.5px] text-stone leading-snug">{v.text}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
