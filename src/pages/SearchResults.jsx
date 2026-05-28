import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Search, ArrowRight } from 'lucide-react'
import { PRODUCTS } from '../data/products.js'
import { STATES, STATE_MAP } from '../data/states.js'
import { POSTS, EDITOR_PICKS } from '../data/journal.js'
import ProductCard from '../components/ui/ProductCard.jsx'
import { Button } from '../components/common.jsx'
import Seo from '../components/Seo.jsx'

export default function SearchResults() {
  const [params] = useSearchParams()
  const q = (params.get('q') || '').trim()
  const ql = q.toLowerCase()

  const { products, states, posts } = useMemo(() => {
    if (!ql) return { products: [], states: [], posts: [] }
    const products = PRODUCTS.filter((p) =>
      [p.name, p.summary, p.material, p.tribe, p.category, STATE_MAP[p.state]?.name].join(' ').toLowerCase().includes(ql),
    )
    const states = STATES.filter((s) => [s.name, s.tagline, s.blurb].join(' ').toLowerCase().includes(ql))
    const posts = [...POSTS, ...EDITOR_PICKS].filter((p) => [p.title, p.excerpt, p.category].join(' ').toLowerCase().includes(ql))
    return { products, states, posts }
  }, [ql])

  const total = products.length + states.length + posts.length

  return (
    <>
      <Seo title={q ? `Search · ${q}` : 'Search'} />
      <section className="bg-forest-900 grain py-12 md:py-14">
        <div className="container-luxe relative z-[3]">
          <p className="eyebrow text-gold-300 mb-2 flex items-center gap-2"><Search size={13} /> Search</p>
          <h1 className="display-2 text-ivory">Results for "{q}"</h1>
          <p className="text-ivory/60 mt-2">{total} result{total !== 1 ? 's' : ''} across products, states and stories</p>
        </div>
      </section>

      <div className="container-luxe py-12 md:py-16 space-y-16">
        {total === 0 && (
          <div className="text-center py-16">
            <h2 className="font-serif text-3xl text-forest">No results found</h2>
            <p className="text-stone mt-2">Try a different term — like "Muga", "shawl", "bamboo" or "Assam".</p>
            <Button to="/shop" variant="dark" className="mt-6">Browse the Shop</Button>
          </div>
        )}

        {products.length > 0 && (
          <section>
            <h2 className="font-serif text-2xl text-forest mb-6">Products <span className="text-stone text-lg">({products.length})</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-9">
              {products.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </section>
        )}

        {states.length > 0 && (
          <section>
            <h2 className="font-serif text-2xl text-forest mb-6">States <span className="text-stone text-lg">({states.length})</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {states.map((s) => (
                <Link key={s.slug} to={`/northeast/${s.slug}`} className="group relative rounded-xl overflow-hidden img-zoom min-h-[180px] flex items-end p-4" >
                  <img src={s.hero[0]} alt={s.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${s.accent.ink}f0, transparent)` }} />
                  <div className="relative z-[2]"><h3 className="font-serif text-xl text-ivory">{s.name}</h3><p className="text-[11px] text-ivory/75">{s.tagline}</p></div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {posts.length > 0 && (
          <section>
            <h2 className="font-serif text-2xl text-forest mb-6">Journal <span className="text-stone text-lg">({posts.length})</span></h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((p) => (
                <Link key={p.slug} to={`/journal/${p.slug}`} className="group flex gap-4 items-center bg-white rounded-xl ring-1 ring-line p-3">
                  <img src={p.img} alt={p.title} loading="lazy" className="h-16 w-20 rounded-lg object-cover shrink-0" />
                  <div><span className="text-[10px] uppercase tracking-wide text-gold-700">{p.category}</span><h3 className="font-serif text-[16px] text-forest leading-snug group-hover:text-gold-700">{p.title}</h3></div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  )
}
