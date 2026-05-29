import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'
import Carousel from '../components/ui/Carousel.jsx'
import InteractiveMap from '../components/ui/InteractiveMap.jsx'
import StoryAccordion from '../components/ui/StoryAccordion.jsx'
import { Button, Reveal, SectionHeading, Ornament } from '../components/common.jsx'
import Seo from '../components/Seo.jsx'
import { IMG, STORY_PANELS } from '../data/images.js'
import { STATE_MAP } from '../data/states.js'
import { COLLECTIONS } from '../data/collections.js'

const ORG_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Nature Trade',
  alternateName: 'Nature Trade — NEDF',
  description: 'Handwoven textiles, handicrafts and heritage from the eight states of Northeast India, under the North East Development Forum (NEDF).',
  slogan: 'Crafted by Tradition. Rooted in Nature.',
  email: 'info@nedf.in',
  telephone: '+91 97060 71272',
  address: { '@type': 'PostalAddress', addressLocality: 'Sivasagar', addressRegion: 'Assam', postalCode: '785640', addressCountry: 'IN' },
}

export default function Home() {
  const [activeState, setActiveState] = useState('nagaland')
  const s = STATE_MAP[activeState]
  const navigate = useNavigate()

  return (
    <>
      <Seo jsonLd={ORG_JSONLD} />
      {/* ░░ PRIMARY HERO ░░ */}
      <Carousel images={IMG.homeHero} heightClass="h-screen min-h-[640px]" overlay="left">
        <div className="container-luxe h-full flex flex-col justify-center">
          <Reveal>
            <p className="eyebrow text-gold-300 mb-5">From the hills of Northeast India</p>
            <h1 className="display-1 uppercase text-ivory max-w-4xl">
              To Homes<br />Across the<br />World.
            </h1>
            <p className="mt-7 text-ivory/80 text-lg max-w-md font-light">
              Every thread carries a tribe. Every weave carries a story — handcrafted by the artisans of Northeast India.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button to="/shop" variant="gold" icon={ArrowRight}>Explore Collections</Button>
              <Button to="/northeast" variant="outline">Discover the States</Button>
            </div>
          </Reveal>
        </div>
      </Carousel>

      {/* ░░ SECONDARY HERO — DISCOVER THE NORTHEAST (map) ░░ */}
      <section className="relative bg-forest-900 grain overflow-hidden">
        <img src={IMG.homeDiscoverBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900 via-forest-900/85 to-forest-900" />
        <div className="container-luxe relative z-[3] py-20 md:py-28">
          <Reveal>
            <p className="eyebrow text-gold-300 mb-4">Eight States · Countless Stories</p>
            <h2 className="display-2 text-ivory max-w-xl">Discover the Northeast</h2>
            <p className="mt-4 text-ivory/65 max-w-lg">
              Hover a state to explore its heritage, crafts and culture — then step into its world.
            </p>
          </Reveal>

          <div className="mt-12 grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-16 items-center">
            <Reveal className="relative">
              <InteractiveMap selected={activeState} onSelect={setActiveState} onActivate={(slug) => navigate(`/northeast/${slug}`)} tone="dark" />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative rounded-xl overflow-hidden ring-1 ring-gold/30 bg-forest-700">
                <div className="img-zoom relative h-56 overflow-hidden">
                  <img key={s.slug} src={s.hero[0]} alt={s.name} loading="lazy" className="h-full w-full object-cover fade-up" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <p className="eyebrow text-gold-300">{s.tagline}</p>
                    <h3 className="font-serif text-3xl text-ivory">{s.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-ivory/70 text-[14px] leading-relaxed">{s.blurb}</p>
                  <Link to={`/northeast/${s.slug}`} className="mt-5 inline-flex items-center gap-2 text-gold-300 text-[12px] font-semibold tracking-[0.18em] uppercase hover:gap-3.5 transition-all">
                    <MapPin size={14} /> Explore {s.name} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ░░ STORY ACCORDION ░░ */}
      <section className="bg-paper py-20 md:py-28">
        <div className="container-luxe">
          <Reveal><SectionHeading eyebrow="Behind Every Piece is a Person" title="The Hands That Weave Our Heritage" sub="Meet the weavers, dyers and makers whose craft turns tradition into something you can hold." /></Reveal>
          <Reveal delay={0.1} className="mt-12"><StoryAccordion panels={STORY_PANELS} /></Reveal>
        </div>
      </section>

      {/* ░░ FEATURED COLLECTIONS ░░ */}
      <section className="relative bg-forest grain py-20 md:py-28">
        <div className="container-luxe relative z-[3]">
          <Reveal><SectionHeading light eyebrow="Curated With Care" title="Featured Collections" sub="From the warrior weaves of Nagaland to the golden Muga of Assam — a world of craft, gathered for you." /></Reveal>
          <Reveal delay={0.1} className="mt-14">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
              {COLLECTIONS.map((c, idx) => (
                <Link key={c.title} to={c.to} className={`group relative overflow-hidden rounded-lg img-zoom ${idx === 0 ? 'col-span-2 lg:col-span-1' : ''}`}>
                  <div className="ratio-portrait">
                    <img src={c.img} alt={c.title} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/95 via-forest-900/30 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-5 text-center">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-gold-300">{c.sub}</p>
                    <h3 className="font-serif text-xl text-ivory leading-tight mt-1">{c.title}</h3>
                    <span className="mt-3 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-ivory/90 group-hover:text-gold-300 transition-colors">
                      Shop Now <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15} className="mt-12 text-center">
            <Ornament light className="mb-8" />
            <Button to="/shop" variant="outline" icon={ArrowRight}>View the Full Collection</Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
