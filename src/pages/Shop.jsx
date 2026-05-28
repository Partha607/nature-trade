import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, LayoutGrid, List, ChevronDown, X } from 'lucide-react'
import { PRODUCTS, CATEGORIES, COLORS, TRIBES, MATERIALS, materialFamily } from '../data/products.js'
import { STATES } from '../data/states.js'
import { useStore } from '../context/StoreContext.jsx'
import { formatPrice } from '../lib/format.js'
import ProductCard from '../components/ui/ProductCard.jsx'
import TrustStrip from '../components/ui/TrustStrip.jsx'
import { Reveal } from '../components/common.jsx'
import Seo from '../components/Seo.jsx'
import { IMG } from '../data/images.js'

const PER_PAGE = 12
const SORTS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
  { id: 'newest', label: 'Newest' },
]

function CheckGroup({ title, options, selected, onToggle, swatches = false }) {
  const [open, setOpen] = useState(true)
  return (
    <div className="border-b border-line py-4">
      <button onClick={() => setOpen((o) => !o)} className="w-full flex items-center justify-between text-[12px] font-semibold tracking-[0.16em] uppercase text-forest">
        {title}
        <ChevronDown size={15} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="mt-3 space-y-2.5">
          {options.map((o) => {
            const checked = selected.includes(o.value)
            return (
              <label key={o.value} className="flex items-center gap-2.5 cursor-pointer group">
                <span className={`h-4 w-4 rounded-[3px] border flex items-center justify-center transition-colors ${checked ? 'bg-forest border-forest' : 'border-stone-light group-hover:border-forest'}`}>
                  {checked && <span className="h-1.5 w-1.5 bg-ivory rounded-[1px]" />}
                </span>
                {swatches && <span className="h-3.5 w-3.5 rounded-full ring-1 ring-black/10" style={{ background: o.hex }} />}
                <span className="text-[13.5px] text-charcoal/85 group-hover:text-forest">{o.label}</span>
                <input type="checkbox" className="sr-only" checked={checked} onChange={() => onToggle(o.value)} />
              </label>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default function Shop() {
  const [params] = useSearchParams()
  const { currency } = useStore()

  const [states, setStates] = useState(() => (params.get('state') ? [params.get('state')] : []))
  const [cats, setCats] = useState(() => (params.get('category') ? [params.get('category')] : []))
  const [materials, setMaterials] = useState([])
  const [tribes, setTribes] = useState([])
  const [colors, setColors] = useState([])
  const [maxPrice, setMaxPrice] = useState(32000)
  const [sort, setSort] = useState('featured')
  const [view, setView] = useState('grid')
  const [page, setPage] = useState(1)
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggle = (setter) => (val) => {
    setter((prev) => (prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]))
    setPage(1)
  }
  const clearAll = () => { setStates([]); setCats([]); setMaterials([]); setTribes([]); setColors([]); setMaxPrice(32000); setPage(1) }

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter((p) => {
      if (states.length && !states.includes(p.state)) return false
      if (cats.length && !cats.includes(p.category)) return false
      if (materials.length && !materials.includes(materialFamily(p.material))) return false
      if (tribes.length && !tribes.includes(p.tribe)) return false
      if (colors.length && !p.color.some((c) => colors.includes(c))) return false
      if (p.priceINR > maxPrice) return false
      return true
    })
    const score = (p) => (p.badges.includes('Bestseller') ? 2 : p.badges.length ? 1 : 0)
    list = [...list].sort((a, b) => {
      if (sort === 'price-asc') return a.priceINR - b.priceINR
      if (sort === 'price-desc') return b.priceINR - a.priceINR
      if (sort === 'rating') return b.rating - a.rating
      if (sort === 'newest') return (b.badges.includes('New') ? 1 : 0) - (a.badges.includes('New') ? 1 : 0)
      return score(b) - score(a) || b.rating - a.rating
    })
    return list
  }, [states, cats, materials, tribes, colors, maxPrice, sort])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE))
  const pageItems = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)
  const activeCount = states.length + cats.length + materials.length + tribes.length + colors.length + (maxPrice < 32000 ? 1 : 0)

  const Filters = (
    <div>
      <div className="flex items-center justify-between mb-1">
        <h3 className="font-serif text-2xl text-forest">Filters</h3>
        {activeCount > 0 && <button onClick={clearAll} className="text-[12px] text-gold-700 hover:text-brown uppercase tracking-wider">Clear all</button>}
      </div>
      <CheckGroup title="State" options={STATES.map((s) => ({ value: s.slug, label: s.name }))} selected={states} onToggle={toggle(setStates)} />
      <CheckGroup title="Category" options={CATEGORIES.map((c) => ({ value: c, label: c }))} selected={cats} onToggle={toggle(setCats)} />
      <CheckGroup title="Material" options={MATERIALS.map((m) => ({ value: m, label: m }))} selected={materials} onToggle={toggle(setMaterials)} />
      <CheckGroup title="Tribe / Community" options={TRIBES.map((t) => ({ value: t, label: t }))} selected={tribes} onToggle={toggle(setTribes)} />
      <CheckGroup title="Colour" options={COLORS.map((c) => ({ value: c.name, label: c.name, hex: c.hex }))} selected={colors} onToggle={toggle(setColors)} swatches />
      <div className="py-5">
        <div className="flex items-center justify-between text-[12px] font-semibold tracking-[0.16em] uppercase text-forest mb-4">
          Price <span className="text-gold-700 normal-case tracking-normal font-medium">up to {formatPrice(maxPrice, currency)}</span>
        </div>
        <input type="range" min={2000} max={32000} step={500} value={maxPrice} onChange={(e) => { setMaxPrice(+e.target.value); setPage(1) }} className="w-full accent-[#B89B5E]" />
      </div>
    </div>
  )

  return (
    <>
      <Seo title="Shop Collections" description="Browse handwoven textiles, silk, pottery, jewellery, bamboo and cane crafts from the eight states of Northeast India." />
      {/* Hero strip */}
      <section className="relative bg-forest-900 grain overflow-hidden">
        <img src={IMG.fabricTexture} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900 via-forest-900/80 to-forest-900/40" />
        <div className="container-luxe relative z-[3] py-12 md:py-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-gold-300 mb-3">The Marketplace</p>
            <h1 className="display-2 text-ivory">Shop Collections</h1>
          </div>
          <p className="text-ivory/70 max-w-md text-[14.5px] md:text-right">
            Timeless crafts, contemporary living. Handmade by artisans from the eight states of Northeast India.
          </p>
        </div>
      </section>

      <div className="container-luxe py-10 md:py-14">
        <div className="grid lg:grid-cols-[260px_1fr] gap-8 lg:gap-12">
          {/* Desktop filters */}
          <aside className="hidden lg:block">{Filters}</aside>

          {/* Main */}
          <div>
            {/* toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-line">
              <p className="text-[13px] text-stone">
                Showing <span className="text-forest font-medium">{pageItems.length}</span> of <span className="text-forest font-medium">{filtered.length}</span> products
              </p>
              <div className="flex items-center gap-3">
                <button onClick={() => setMobileOpen(true)} className="lg:hidden flex items-center gap-2 text-sm text-forest border border-line rounded-full px-4 py-2">
                  <SlidersHorizontal size={15} /> Filters{activeCount ? ` (${activeCount})` : ''}
                </button>
                <div className="relative">
                  <select value={sort} onChange={(e) => setSort(e.target.value)} className="appearance-none bg-white border border-line rounded-full pl-4 pr-9 py-2 text-sm text-forest cursor-pointer focus:outline-none focus:border-gold">
                    {SORTS.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
                  </select>
                  <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-stone" />
                </div>
                <div className="hidden sm:flex items-center border border-line rounded-full overflow-hidden">
                  <button onClick={() => setView('grid')} className={`p-2.5 ${view === 'grid' ? 'bg-forest text-ivory' : 'text-stone'}`} aria-label="Grid view"><LayoutGrid size={16} /></button>
                  <button onClick={() => setView('list')} className={`p-2.5 ${view === 'list' ? 'bg-forest text-ivory' : 'text-stone'}`} aria-label="List view"><List size={16} /></button>
                </div>
              </div>
            </div>

            {/* grid / list */}
            {pageItems.length === 0 ? (
              <div className="py-24 text-center text-stone">
                <p className="font-serif text-2xl text-forest mb-2">No pieces match your filters</p>
                <button onClick={clearAll} className="text-gold-700 uppercase tracking-wider text-sm">Clear all filters</button>
              </div>
            ) : view === 'grid' ? (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-9 mt-8">
                {pageItems.map((p) => <ProductCard key={p.id} product={p} />)}
              </div>
            ) : (
              <div className="flex flex-col gap-5 mt-8">
                {pageItems.map((p) => <ProductCard key={p.id} product={p} view="list" />)}
              </div>
            )}

            {/* pagination */}
            {totalPages > 1 && (
              <div className="mt-14 flex items-center justify-center gap-2">
                <button disabled={page === 1} onClick={() => setPage((p) => Math.max(1, p - 1))} className="px-4 py-2 text-sm text-forest disabled:opacity-30">Prev</button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <button key={n} onClick={() => setPage(n)} className={`h-9 w-9 rounded-full text-sm transition-colors ${n === page ? 'bg-forest text-ivory' : 'text-forest hover:bg-ivory-200'}`}>{n}</button>
                ))}
                <button disabled={page === totalPages} onClick={() => setPage((p) => Math.min(totalPages, p + 1))} className="px-4 py-2 text-sm text-forest disabled:opacity-30">Next</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* trust strip */}
      <section className="bg-ivory-200/60 border-t border-line py-12">
        <div className="container-luxe"><TrustStrip /></div>
      </section>

      {/* Mobile filter drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[80] lg:hidden">
          <div className="absolute inset-0 bg-forest-900/60" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-ivory p-6 overflow-y-auto">
            <button onClick={() => setMobileOpen(false)} className="absolute top-4 right-4 text-forest"><X size={22} /></button>
            {Filters}
            <button onClick={() => setMobileOpen(false)} className="btn btn-dark w-full mt-6">Apply Filters</button>
          </div>
        </div>
      )}
    </>
  )
}
