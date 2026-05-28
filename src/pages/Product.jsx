import { useMemo, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import {
  Heart, ShoppingBag, Minus, Plus, ChevronRight, Check, ShieldCheck, Truck, RotateCcw, Lock, MapPin, Quote,
} from 'lucide-react'
import { PRODUCTS, productById, productsByState } from '../data/products.js'
import { STATE_MAP } from '../data/states.js'
import { COLORS } from '../data/products.js'
import { useStore } from '../context/StoreContext.jsx'
import { Price, Stars, Badge, Reveal, Button } from '../components/common.jsx'
import ProductCard from '../components/ui/ProductCard.jsx'
import Seo from '../components/Seo.jsx'
import { IMG } from '../data/images.js'

const colorHex = (name) => COLORS.find((c) => c.name === name)?.hex || '#999'

const TAB_LIST = ['The Story', 'Making Process', 'Artisan', 'Cultural Significance', 'Details & Care', 'Shipping & Returns']

export default function Product() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = productById(id)
  const { addToCart, toggleWishlist, isWishlisted } = useStore()
  const [active, setActive] = useState(0)
  const [qty, setQty] = useState(1)
  const [tab, setTab] = useState(0)

  const related = useMemo(() => {
    if (!product) return []
    const same = productsByState(product.state).filter((p) => p.id !== product.id)
    const others = PRODUCTS.filter((p) => p.id !== product.id && p.state !== product.state)
    return [...same, ...others].slice(0, 4)
  }, [product])

  if (!product) {
    return (
      <div className="container-luxe py-32 text-center">
        <h1 className="font-serif text-4xl text-forest">Piece not found</h1>
        <Button to="/shop" variant="dark" className="mt-6">Back to Shop</Button>
      </div>
    )
  }

  const st = STATE_MAP[product.state]
  const wished = isWishlisted(product.id)

  const jsonLd = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.summary,
    category: product.category,
    material: product.material,
    aggregateRating: { '@type': 'AggregateRating', ratingValue: product.rating, reviewCount: product.reviews },
    offers: { '@type': 'Offer', price: product.priceINR, priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
  }), [product])

  return (
    <>
      <Seo title={product.name} description={product.summary} image={product.images[0]} jsonLd={jsonLd} />
      {/* breadcrumb */}
      <div className="container-luxe pt-6">
        <nav className="flex items-center gap-1.5 text-[12px] text-stone">
          <Link to="/" className="hover:text-forest">Home</Link><ChevronRight size={13} />
          <Link to="/shop" className="hover:text-forest">Shop</Link><ChevronRight size={13} />
          <span className="text-forest">{product.name}</span>
        </nav>
      </div>

      {/* ░ ROW 1 ░ */}
      <section className="container-luxe py-8 grid lg:grid-cols-2 gap-10 lg:gap-14">
        {/* gallery */}
        <div className="flex gap-3">
          <div className="flex flex-col gap-3 w-16 sm:w-20 shrink-0">
            {product.images.map((img, i) => (
              <button key={i} onClick={() => setActive(i)} className={`ratio-square overflow-hidden rounded-md ring-1 transition ${active === i ? 'ring-2 ring-gold' : 'ring-line hover:ring-stone'}`}>
                <img src={img} alt={`${product.name} — view ${i + 1}`} loading="lazy" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
          <div className="flex-1 overflow-hidden rounded-lg bg-ivory-200">
            <img src={product.images[active]} alt={product.name} className="w-full h-full object-cover ratio-portrait fade-up" key={active} />
          </div>
        </div>

        {/* details */}
        <div>
          {product.badges?.[0] && <Badge tone="gold" className="mb-3">{product.badges[0]}</Badge>}
          <h1 className="display-3 text-forest">{product.name}</h1>
          <p className="mt-1.5 text-stone flex items-center gap-1.5"><MapPin size={14} className="text-gold-700" /> Handwoven in {st?.name}, India</p>

          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-baseline gap-3">
              <Price inr={product.priceINR} className="font-serif text-3xl text-forest" />
              {product.originalINR && <Price inr={product.originalINR} className="text-lg text-stone-light line-through" />}
            </div>
            <Stars value={product.rating} count={product.reviews} />
          </div>

          <div className="hairline-dark my-6" />

          {/* attributes */}
          <dl className="space-y-3 text-[14px]">
            <Attr label="Style"><span className="text-forest">{product.category}</span></Attr>
            <Attr label="Tribe / Community"><span className="text-forest">{product.tribe}</span></Attr>
            <Attr label="Material"><span className="text-forest">{product.material}</span></Attr>
            <Attr label="Colour">
              <span className="flex items-center gap-2">
                {product.color.map((c) => <span key={c} className="h-4 w-4 rounded-full ring-1 ring-black/10" style={{ background: colorHex(c) }} title={c} />)}
                <span className="text-forest">{product.color.join(' · ')}</span>
              </span>
            </Attr>
          </dl>

          {/* qty + CTAs */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <div className="flex items-center border border-line rounded-full">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="p-3 text-forest hover:text-gold-700" aria-label="Decrease"><Minus size={15} /></button>
              <span className="w-9 text-center font-medium text-forest">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="p-3 text-forest hover:text-gold-700" aria-label="Increase"><Plus size={15} /></button>
            </div>
            <button onClick={() => addToCart(product.id, qty)} className="btn btn-dark flex-1 min-w-[160px]"><ShoppingBag size={16} /> Add to Cart</button>
            <button onClick={() => { addToCart(product.id, qty); navigate('/cart') }} className="btn btn-gold flex-1 min-w-[150px]">Buy it Now</button>
            <button onClick={() => toggleWishlist(product.id)} className={`h-12 w-12 rounded-full border flex items-center justify-center transition-colors ${wished ? 'bg-gold border-gold text-white' : 'border-line text-forest hover:border-gold'}`} aria-label="Wishlist">
              <Heart size={18} className={wished ? 'fill-current' : ''} />
            </button>
          </div>

          {/* trust graphics */}
          <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-line">
            {[
              { icon: ShieldCheck, t: 'Authenticity', s: 'GI-verified craft' },
              { icon: Truck, t: 'Free Shipping', s: 'Orders above $200' },
              { icon: RotateCcw, t: 'Easy Returns', s: '7-day window' },
              { icon: Lock, t: 'Secure Checkout', s: 'Encrypted payment' },
            ].map((x) => (
              <div key={x.t} className="flex flex-col items-center text-center">
                <x.icon size={22} strokeWidth={1.4} className="text-gold-700" />
                <span className="mt-2 text-[12px] font-semibold text-forest">{x.t}</span>
                <span className="text-[11px] text-stone">{x.s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ░ ROW 2 — story tabs ░ */}
      <section className="bg-paper border-y border-line py-14 md:py-20">
        <div className="container-luxe">
          <div className="flex flex-wrap gap-2 justify-center border-b border-line pb-1">
            {TAB_LIST.map((t, i) => (
              <button key={t} onClick={() => setTab(i)} className={`px-4 py-3 text-[12px] font-semibold tracking-[0.12em] uppercase relative transition-colors ${tab === i ? 'text-forest' : 'text-stone hover:text-forest'}`}>
                {t}
                {tab === i && <span className="absolute -bottom-px left-3 right-3 h-0.5 bg-gold" />}
              </button>
            ))}
          </div>

          <div className="mt-10 max-w-5xl mx-auto">
            {tab === 0 && (
              <Reveal className="grid md:grid-cols-2 gap-10 items-center">
                <img src={st?.hero?.[0]} alt={st?.name || ''} loading="lazy" className="rounded-lg ratio-wide object-cover w-full" />
                <div>
                  <h3 className="font-serif text-3xl text-forest mb-4">The Story</h3>
                  <p className="text-[15px] leading-relaxed text-charcoal/80">{product.story}</p>
                </div>
              </Reveal>
            )}
            {tab === 1 && (
              <Reveal>
                <h3 className="font-serif text-3xl text-forest mb-8 text-center">From Fibre to Finished Piece</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {product.process.map((step, i) => (
                    <div key={i} className="text-center">
                      <div className="mx-auto h-12 w-12 rounded-full bg-forest text-ivory font-serif text-lg flex items-center justify-center">{i + 1}</div>
                      <h4 className="mt-3 text-[13px] font-semibold text-forest uppercase tracking-wide">{step.title}</h4>
                      <p className="mt-1.5 text-[12.5px] text-stone leading-snug">{step.text}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}
            {tab === 2 && (
              <Reveal className="grid md:grid-cols-[280px_1fr] gap-10 items-center">
                <img src={IMG.artisanPortrait} alt={product.artisan.name} loading="lazy" className="rounded-lg ratio-portrait object-cover w-full" />
                <div>
                  <p className="eyebrow text-gold-700 mb-2">Meet the Maker</p>
                  <h3 className="font-serif text-3xl text-forest">{product.artisan.name}</h3>
                  <p className="text-stone flex items-center gap-1.5 mt-1"><MapPin size={14} className="text-gold-700" />{product.artisan.location} · {product.artisan.exp} of craft</p>
                  <div className="mt-5 flex gap-3 text-gold-700"><Quote size={28} className="shrink-0" /><p className="font-serif text-xl text-forest italic leading-snug">{product.artisan.quote}</p></div>
                  <Button to="/artisans" variant="outline-dark" className="mt-6">Meet our Artisans</Button>
                </div>
              </Reveal>
            )}
            {tab === 3 && (
              <Reveal className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="font-serif text-3xl text-forest mb-4">Cultural Significance</h3>
                  <p className="text-[15px] leading-relaxed text-charcoal/80">{product.cultural}</p>
                </div>
                <img src={product.images[1]} alt={product.name} loading="lazy" className="rounded-lg ratio-wide object-cover w-full" />
              </Reveal>
            )}
            {tab === 4 && (
              <Reveal className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="font-serif text-2xl text-forest mb-4">Details</h3>
                  <ul className="space-y-2.5 text-[14px] text-charcoal/80">
                    <li><span className="text-stone">Material:</span> {product.material}</li>
                    <li><span className="text-stone">Origin:</span> {st?.name}, India</li>
                    <li><span className="text-stone">Craft:</span> {product.category} · {product.tribe}</li>
                    <li><span className="text-stone">Note:</span> Handmade — slight variation is the mark of authenticity.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-forest mb-4">Care</h3>
                  <ul className="space-y-2.5">
                    {product.care.map((c) => <li key={c} className="flex gap-2.5 text-[14px] text-charcoal/80"><Check size={16} className="text-gold-700 shrink-0 mt-0.5" />{c}</li>)}
                  </ul>
                </div>
              </Reveal>
            )}
            {tab === 5 && (
              <Reveal className="max-w-2xl mx-auto">
                <h3 className="font-serif text-2xl text-forest mb-4 text-center">Shipping & Returns</h3>
                <ul className="space-y-3">
                  {product.shipping.map((c) => <li key={c} className="flex gap-3 text-[14.5px] text-charcoal/80"><Truck size={17} className="text-gold-700 shrink-0 mt-0.5" />{c}</li>)}
                </ul>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* ░ ROW 3 — related ░ */}
      <section className="container-luxe py-16 md:py-20">
        <div className="text-center mb-10">
          <p className="eyebrow text-gold-700 mb-2">More to Explore</p>
          <h2 className="display-3 text-forest">You May Also Like</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-8">
          {related.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </>
  )
}

function Attr({ label, children }) {
  return (
    <div className="flex items-center gap-4">
      <dt className="w-36 text-[11px] uppercase tracking-[0.14em] text-stone">{label}</dt>
      <dd className="flex-1">{children}</dd>
    </div>
  )
}
