import { Link } from 'react-router-dom'
import { Heart, ShoppingBag } from 'lucide-react'
import { useStore } from '../../context/StoreContext.jsx'
import { STATE_MAP } from '../../data/states.js'
import { Price, Stars, Badge } from '../common.jsx'

export default function ProductCard({ product, view = 'grid' }) {
  const { isWishlisted, toggleWishlist, addToCart } = useStore()
  const wished = isWishlisted(product.id)
  const stateName = STATE_MAP[product.state]?.name || ''
  const to = `/product/${product.id}`

  const wishBtn = (
    <button
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleWishlist(product.id) }}
      className={`h-9 w-9 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors ${wished ? 'bg-gold text-white' : 'bg-ivory/85 text-forest hover:bg-gold hover:text-white'}`}
      aria-label="Add to wishlist"
    >
      <Heart size={16} className={wished ? 'fill-current' : ''} />
    </button>
  )

  if (view === 'list') {
    return (
      <Link to={to} className="group flex gap-5 bg-white rounded-lg overflow-hidden ring-1 ring-line/60 card-rise">
        <div className="img-zoom relative w-40 sm:w-56 shrink-0 overflow-hidden">
          <img src={product.images[0]} alt={product.name} loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div className="flex-1 py-5 pr-5 flex flex-col">
          <div className="flex items-start justify-between gap-3">
            <div>
              {product.badges?.[0] && <Badge tone="dark" className="mb-2">{product.badges[0]}</Badge>}
              <h3 className="font-serif text-xl text-forest leading-tight">{product.name}</h3>
              <p className="text-[12px] uppercase tracking-[0.14em] text-stone mt-1">{stateName} · {product.category}</p>
            </div>
            {wishBtn}
          </div>
          <p className="text-[13.5px] text-stone mt-2 clamp-2 max-w-lg">{product.summary}</p>
          <div className="mt-auto pt-3 flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <Price inr={product.priceINR} className="font-serif text-xl text-forest" />
              {product.originalINR && <Price inr={product.originalINR} className="text-sm text-stone-light line-through" />}
            </div>
            <Stars value={product.rating} count={product.reviews} />
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link to={to} className="group block">
      <div className="img-zoom relative ratio-portrait overflow-hidden rounded-lg bg-ivory-200">
        <img src={product.images[0]} alt={product.name} loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.badges?.map((b) => <Badge key={b} tone="dark">{b}</Badge>)}
        </div>
        <div className="absolute top-3 right-3">{wishBtn}</div>
        <button
          onClick={(e) => { e.preventDefault(); addToCart(product.id) }}
          className="absolute bottom-0 inset-x-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-forest/95 text-ivory py-3 text-[11px] font-semibold tracking-[0.18em] uppercase flex items-center justify-center gap-2"
        >
          <ShoppingBag size={14} /> Add to Cart
        </button>
      </div>
      <div className="pt-3.5">
        <p className="text-[11px] uppercase tracking-[0.14em] text-gold-700">{stateName}</p>
        <h3 className="font-serif text-[17px] leading-snug text-forest mt-1 group-hover:text-gold-700 transition-colors">{product.name}</h3>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <Price inr={product.priceINR} className="font-medium text-forest" />
            {product.originalINR && <Price inr={product.originalINR} className="text-[12px] text-stone-light line-through" />}
          </div>
          <span className="flex items-center gap-1 text-[12px] text-stone"><Stars value={product.rating} size={11} /></span>
        </div>
      </div>
    </Link>
  )
}
