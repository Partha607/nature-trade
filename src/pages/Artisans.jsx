import { Link } from 'react-router-dom'
import {
  ArrowRight, MapPin, Quote, Award, Leaf, Users, Recycle, Sparkles, Scissors, Droplet, Grid3x3, Hand, CheckCircle2, Gift, Heart, Landmark,
} from 'lucide-react'
import { Button, Reveal, SectionHeading } from '../components/common.jsx'
import Seo from '../components/Seo.jsx'
import { photo, IMG } from '../data/images.js'

const HERO_ICONS = [
  { icon: Grid3x3, label: 'Heritage Weaving' },
  { icon: Droplet, label: 'Natural Dyes' },
  { icon: Recycle, label: 'Sustainable Practices' },
  { icon: Users, label: 'Supporting Communities' },
]

const PROCESS = [
  { icon: Leaf, title: 'Sustainably Sourced', text: 'Muga silk is reared on som and soalu trees using indigenous silkworms.', img: photo('1678082309214-3b2941e387f8', 600) },
  { icon: Droplet, title: 'Natural Dyeing', text: 'Dyed using natural ingredients like areca nut, turmeric and tea leaves.', img: photo('1607867810523-d10955f2a8df', 600) },
  { icon: Scissors, title: 'Warping', text: 'Threads are carefully wound and prepared for the loom.', img: photo('1599303000936-1cf21eac4456', 600) },
  { icon: Grid3x3, title: 'Handloom Weaving', text: 'Skilled hands create intricate patterns on traditional looms.', img: photo('1638310533874-6c124c012e1d', 600) },
  { icon: Hand, title: 'Quality Check', text: 'Each piece is checked for perfection and durability.', img: photo('1640292343595-889db1c8262e', 600) },
  { icon: Sparkles, title: 'Ready to Treasure', text: 'From our looms to your home, made to be cherished.', img: photo('1569909115134-a0426936c879', 600) },
]

const IMPACT = [
  { value: '1,200+', label: 'Artisans Empowered' },
  { value: '70%', label: 'Women Artisans' },
  { value: '8+', label: 'Craft Clusters' },
  { value: '120+', label: 'Villages Connected' },
]

const CERTS = [
  { title: 'GI Certified', sub: 'Muga Silk' },
  { title: 'Handloom Mark', sub: 'India' },
  { title: 'Craftmark', sub: 'Authentic Craft' },
  { title: 'Naturally', sub: 'Sustainable' },
]

const FOOTER_VALUES = [
  { icon: Hand, title: 'Fair Trade Practices' },
  { icon: Users, title: 'Empowering Local Artisans' },
  { icon: Landmark, title: 'Preserving Heritage' },
  { icon: Leaf, title: 'Sustainable Future' },
]

export default function Artisans() {
  return (
    <>
      <Seo title="Meet the Artisans" description="The weavers, dyers and makers of Northeast India — 1,200+ artisans empowered across 8+ craft clusters under NEDF." />
      {/* ░ HERO ░ */}
      <section className="relative grain min-h-screen flex items-center">
        <img src={IMG.artisanHero} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/95 via-forest-900/70 to-forest-900/40" />
        <div className="container-luxe relative z-[3] py-28 grid lg:grid-cols-[1.5fr_1fr] gap-10 items-center">
          <Reveal>
            <p className="eyebrow text-gold-300 mb-3 flex items-center gap-2"><Sparkles size={13} /> Meet the Artisan</p>
            <h1 className="display-1 text-ivory">Weaves of Muga</h1>
            <p className="mt-3 text-ivory/80 flex items-center gap-1.5"><MapPin size={15} className="text-gold-300" /> Sualkuchi, Assam</p>
            <p className="mt-5 text-ivory/75 max-w-lg leading-relaxed">
              A collective of skilled weavers preserving the centuries-old art of Muga silk weaving — a golden tradition unique to Assam, handed down from mother to daughter for generations.
            </p>
            <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
              {HERO_ICONS.map((h) => (
                <div key={h.label} className="flex flex-col items-center text-center gap-2">
                  <span className="h-12 w-12 rounded-full border border-ivory/30 flex items-center justify-center text-gold-300"><h.icon size={20} strokeWidth={1.4} /></span>
                  <span className="text-[11px] text-ivory/70 leading-tight">{h.label}</span>
                </div>
              ))}
            </div>
            <Button to="/shop?state=assam" variant="gold" icon={ArrowRight} className="mt-8">Shop Their Collection</Button>
          </Reveal>

          <Reveal delay={0.15} className="hidden lg:block">
            <div className="rounded-xl bg-forest-900/55 backdrop-blur-md ring-1 ring-ivory/15 p-7">
              {[
                ['Established', '2008'],
                ['Artisans', '36 Weavers'],
                ['Specialty', 'Muga Silk Weaves'],
                ['Materials', 'Muga Silk · Eri Silk · Natural Dyes'],
                ['Made In', 'Assam, India'],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between py-3 border-b border-ivory/10 last:border-0">
                  <span className="text-[11px] uppercase tracking-[0.16em] text-gold-300">{k}</span>
                  <span className="text-ivory text-right text-[14px] max-w-[60%]">{v}</span>
                </div>
              ))}
              <div className="mt-5 pt-5 border-t border-ivory/10">
                <Quote size={22} className="text-gold-300" />
                <p className="mt-2 font-serif text-lg text-ivory italic leading-snug">"Every thread tells a story of our land, our rivers, our people."</p>
                <p className="mt-2 text-[11px] uppercase tracking-wide text-ivory/55">— Lead Artisan</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ░ THE ART OF MUGA — process ░ */}
      <section className="bg-paper py-20 md:py-28">
        <div className="container-luxe">
          <Reveal><SectionHeading eyebrow="The Process" title="The Art of Muga" sub="Muga silk is one of the rarest and most durable natural silks in the world, known for its natural golden sheen. Our weavers are hand-crafting using traditional techniques passed down through generations." /></Reveal>
          <Reveal delay={0.1} className="mt-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {PROCESS.map((p, i) => (
                <div key={p.title} className="bg-white rounded-lg overflow-hidden ring-1 ring-line card-rise">
                  <div className="img-zoom relative ratio-square overflow-hidden">
                    <img src={p.img} alt={p.title} className="h-full w-full object-cover" />
                    <span className="absolute top-2 left-2 h-7 w-7 rounded-full bg-forest text-ivory text-[12px] font-serif flex items-center justify-center">{i + 1}</span>
                  </div>
                  <div className="p-3.5">
                    <p.icon size={18} className="text-gold-700" strokeWidth={1.5} />
                    <h4 className="mt-2 text-[13px] font-semibold text-forest leading-tight">{p.title}</h4>
                    <p className="mt-1.5 text-[12px] text-stone leading-snug">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ░ IMPACT / STORIES / CERTS ░ */}
      <section className="bg-forest-900 grain py-20">
        <div className="container-luxe relative z-[3] grid lg:grid-cols-3 gap-10">
          <Reveal>
            <h3 className="font-serif text-2xl text-ivory mb-6">Our Impact</h3>
            <div className="space-y-6">
              {IMPACT.map((it) => (
                <div key={it.label} className="flex items-center gap-4">
                  <div className="font-serif text-4xl text-gold-300 w-24">{it.value}</div>
                  <div className="text-ivory/70 text-[14px]">{it.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="font-serif text-2xl text-ivory mb-6">Artisan Stories</h3>
            <div className="rounded-xl bg-forest-700/40 ring-1 ring-ivory/10 p-6">
              <Quote size={26} className="text-gold-300" />
              <p className="mt-3 font-serif text-xl text-ivory italic leading-snug">"Weaving is not just my livelihood, it is our legacy. When you wear our weaves, you carry a piece of Assam with you."</p>
              <div className="mt-5 flex items-center gap-3">
                <img src={IMG.artisanPortrait} alt="" className="h-11 w-11 rounded-full object-cover" />
                <div>
                  <p className="text-ivory text-[14px] font-medium">Jonti Begum</p>
                  <p className="text-ivory/55 text-[12px]">Master Weaver</p>
                </div>
              </div>
              <div className="mt-4 flex gap-1.5">
                {[0, 1, 2].map((d) => <span key={d} className={`h-1.5 rounded-full ${d === 0 ? 'w-6 bg-gold' : 'w-1.5 bg-ivory/30'}`} />)}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <h3 className="font-serif text-2xl text-ivory mb-6">Certifications & Recognitions</h3>
            <div className="grid grid-cols-2 gap-4">
              {CERTS.map((c) => (
                <div key={c.title} className="rounded-xl bg-forest-700/40 ring-1 ring-ivory/10 p-5 text-center">
                  <Award size={28} className="text-gold-300 mx-auto" strokeWidth={1.4} />
                  <p className="mt-2 text-ivory text-[13px] font-semibold">{c.title}</p>
                  <p className="text-ivory/55 text-[11px]">{c.sub}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ░ VALUES STRIP ░ */}
      <section className="bg-ivory-200/70 border-t border-line py-12">
        <div className="container-luxe grid grid-cols-2 md:grid-cols-4 gap-8">
          {FOOTER_VALUES.map((v) => (
            <div key={v.title} className="flex flex-col items-center text-center gap-3">
              <span className="h-12 w-12 rounded-full bg-forest text-gold-300 flex items-center justify-center"><v.icon size={20} strokeWidth={1.4} /></span>
              <span className="text-[13px] font-semibold text-forest tracking-wide">{v.title}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
