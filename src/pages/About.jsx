import { Link } from 'react-router-dom'
import { Leaf, HandHeart, ShieldCheck, Check, Users, Package, MapPin, Sparkles, Heart, ArrowRight } from 'lucide-react'
import { Button, Reveal, SectionHeading, Ornament } from '../components/common.jsx'
import Seo from '../components/Seo.jsx'
import { IMG } from '../data/images.js'
import { STATES } from '../data/states.js'

const PILLARS = [
  { icon: Leaf, title: 'Our Purpose', text: 'To preserve and promote the rich heritage of Northeast India by creating a global platform for authentic, sustainable and ethically made products.' },
  { icon: HandHeart, title: 'Our Promise', text: 'We work closely with artisan communities ensuring fair practices, quality craftsmanship and mindful production that respects both people and the planet.' },
  { icon: ShieldCheck, title: 'Our Values', list: ['Respect for Tradition', 'Empowerment', 'Sustainability', 'Integrity', 'Inclusivity'] },
]

const STATS = [
  { icon: Users, value: '1,200+', label: 'Artisans Empowered' },
  { icon: Heart, value: '70%', label: 'Women Artisans' },
  { icon: MapPin, value: '120+', label: 'Villages Impacted' },
  { icon: Leaf, value: '6', label: 'States Served' },
]

export default function About() {
  return (
    <>
      <Seo title="About" description="Nature Trade is a cultural-commerce initiative under the North East Development Forum (NEDF), empowering artisan communities across Northeast India since 2006." />
      {/* ░ HERO ░ */}
      <section className="grid lg:grid-cols-2 items-stretch">
        <div className="bg-paper flex items-center px-6 md:px-12 lg:px-16 py-16 lg:py-24 order-2 lg:order-1">
          <Reveal>
            <p className="eyebrow text-gold-700 mb-4">About Nature Trade</p>
            <h1 className="display-1 text-forest leading-[1.02]">Crafted by Tradition. Rooted in Nature.</h1>
            <p className="mt-6 text-[15.5px] leading-relaxed text-charcoal/80 max-w-lg">
              We are a homegrown brand celebrating the art, culture and craftsmanship of Northeast India. Every piece we offer is a reflection of the people, traditions and natural beauty that make this region truly extraordinary — a cultural-commerce initiative under the North East Development Forum (NEDF), which has empowered artisan communities across the region since 2006.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/shop" variant="dark" icon={ArrowRight}>Explore the Collection</Button>
              <Button to="/artisans" variant="outline-dark">Meet the Artisans</Button>
            </div>
          </Reveal>
        </div>
        <div className="relative min-h-[360px] lg:min-h-0 order-1 lg:order-2 grain">
          <img src={IMG.aboutHero} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-900/30 to-transparent" />
        </div>
      </section>

      {/* ░ PURPOSE / PROMISE / VALUES ░ */}
      <section className="bg-ivory py-20 md:py-24">
        <div className="container-luxe grid md:grid-cols-3 gap-10 md:gap-8">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className={`text-center px-4 ${i < 2 ? 'md:border-r border-line' : ''}`}>
              <span className="h-16 w-16 rounded-full bg-forest text-gold-300 inline-flex items-center justify-center"><p.icon size={26} strokeWidth={1.4} /></span>
              <h3 className="mt-5 text-[12px] font-semibold tracking-[0.2em] uppercase text-gold-700">{p.title}</h3>
              {p.text && <p className="mt-3 text-[14.5px] leading-relaxed text-charcoal/75 max-w-sm mx-auto">{p.text}</p>}
              {p.list && (
                <ul className="mt-4 space-y-2.5 text-left inline-block">
                  {p.list.map((l) => <li key={l} className="flex gap-2.5 text-[14px] text-charcoal/80"><Check size={16} className="text-gold-700 shrink-0 mt-0.5" />{l}</li>)}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      {/* ░ SPIRIT OF NORTHEAST — 8 cards ░ */}
      <section className="bg-forest-900 grain py-20 md:py-24">
        <div className="container-luxe relative z-[3]">
          <Reveal><SectionHeading light eyebrow="The Spirit of Northeast" title="Eight States. Countless Stories. One Heart." /></Reveal>
          <Reveal delay={0.1} className="mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
              {STATES.map((s) => (
                <Link key={s.slug} to={`/northeast/${s.slug}`} className="group relative rounded-lg overflow-hidden min-h-[230px] flex flex-col justify-end p-4 card-rise">
                  {/* Accent gradient — the default face */}
                  <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0" style={{ background: `linear-gradient(160deg, ${s.accent.from}, ${s.accent.to})` }} />
                  {/* Real state photograph — revealed on hover */}
                  <img
                    src={`${import.meta.env.BASE_URL}states/${s.slug}.webp`}
                    alt={s.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-0 scale-110 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-100"
                  />
                  {/* Legibility scrim + grain (over both states) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/85 via-forest-900/20 to-transparent" />
                  <div className="absolute inset-0 grain opacity-50" />
                  <div className="relative z-[2]">
                    <h3 className="font-serif text-xl text-ivory">{s.name}</h3>
                    <p className="text-[11px] text-ivory/80 mt-1 leading-snug">{s.tagline}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-ivory/90 opacity-0 group-hover:opacity-100 transition-opacity">Explore <ArrowRight size={11} /></span>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ░ MEET THE ARTISANS ░ */}
      <section className="container-luxe py-20 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal className="img-zoom rounded-xl overflow-hidden">
          <img src={IMG.aboutArtisan} alt="An artisan of Northeast India at work" loading="lazy" className="w-full ratio-square object-cover" />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="eyebrow text-gold-700 mb-3 flex items-center gap-2"><Sparkles size={13} /> Meet the Artisans</p>
          <h2 className="display-2 text-forest">Behind every piece is a maker with a story.</h2>
          <p className="mt-5 text-[15px] leading-relaxed text-charcoal/80 max-w-lg">
            Our artisans are the heart of what we do. We partner with skilled weavers, craftsmen and traditional artists across the Northeast, supporting their livelihoods and preserving their age-old skills for generations to come.
          </p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-5">
            {STATS.map((s) => (
              <div key={s.label}>
                <s.icon size={22} className="text-gold-700" strokeWidth={1.4} />
                <div className="font-serif text-2xl text-forest mt-2">{s.value}</div>
                <div className="text-[11px] uppercase tracking-wide text-stone">{s.label}</div>
              </div>
            ))}
          </div>
          <Button to="/artisans" variant="outline-dark" icon={ArrowRight} className="mt-8">Meet our Artisans</Button>
        </Reveal>
      </section>

      {/* ░ CLOSING QUOTE ░ */}
      <section className="relative py-20 grain" style={{ background: 'linear-gradient(120deg, #1b2533, #243349)' }}>
        <div className="container-narrow relative z-[3] text-center">
          <Ornament light className="mb-8" />
          <p className="font-serif text-3xl md:text-4xl text-ivory leading-snug max-w-3xl mx-auto">
            When you choose Nature Trade, you don't just buy a product — you support a tradition, a community, and a sustainable future.
          </p>
          <p className="mt-7 flex items-center justify-center gap-2 text-gold-300 text-[13px] uppercase tracking-[0.2em]">
            Thank you for being a part of our journey <Heart size={15} className="fill-current" />
          </p>
        </div>
      </section>
    </>
  )
}
