import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Minus, Plus, X, ShoppingBag, ArrowRight, Lock, CheckCircle2, Truck } from 'lucide-react'
import { useStore } from '../context/StoreContext.jsx'
import { productById } from '../data/products.js'
import { formatPrice } from '../lib/format.js'
import { Button } from '../components/common.jsx'
import Seo from '../components/Seo.jsx'

const FREE_SHIP_INR = 17000 // ≈ $200
const SHIP_INR = 80

export default function Cart() {
  const { cart, updateQty, removeFromCart, cartTotalINR, clearCart, currency } = useStore()
  const [placed, setPlaced] = useState(false)
  const lines = cart.map((i) => ({ ...i, product: productById(i.id) })).filter((l) => l.product)

  const shipping = cartTotalINR >= FREE_SHIP_INR || cartTotalINR === 0 ? 0 : SHIP_INR
  const total = cartTotalINR + shipping

  if (placed) {
    return (
      <div className="container-luxe py-24 text-center">
        <CheckCircle2 size={48} className="text-green-600 mx-auto" />
        <h1 className="font-serif text-4xl text-forest mt-5">Thank you for your order</h1>
        <p className="text-stone mt-3 max-w-md mx-auto">This is a demo checkout — no payment was taken. In production your order would now be confirmed and routed to our artisans for fulfilment.</p>
        <Button to="/shop" variant="dark" icon={ArrowRight} className="mt-8">Continue Shopping</Button>
      </div>
    )
  }

  return (
    <>
      <Seo title="Shopping Cart" />
      <section className="bg-forest-900 grain py-12 md:py-14">
        <div className="container-luxe relative z-[3]">
          <p className="eyebrow text-gold-300 mb-2">Your Selection</p>
          <h1 className="display-2 text-ivory flex items-center gap-3"><ShoppingBag className="text-gold-300" /> Shopping Cart</h1>
        </div>
      </section>

      <div className="container-luxe py-12 md:py-16">
        {lines.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag size={40} className="text-stone-light mx-auto" />
            <h2 className="font-serif text-3xl text-forest mt-5">Your cart is empty</h2>
            <p className="text-stone mt-2">Discover handcrafted pieces from the eight states of Northeast India.</p>
            <Button to="/shop" variant="dark" icon={ArrowRight} className="mt-7">Start Shopping</Button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_360px] gap-10">
            {/* lines */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-line">
                <p className="text-stone text-[14px]">{lines.length} item{lines.length > 1 ? 's' : ''}</p>
                <button onClick={clearCart} className="text-[12px] text-stone hover:text-red-600 uppercase tracking-wide">Clear cart</button>
              </div>
              <div className="divide-y divide-line">
                {lines.map((l) => (
                  <div key={l.id} className="flex gap-4 py-5">
                    <Link to={`/product/${l.id}`} className="img-zoom h-28 w-24 shrink-0 rounded-lg overflow-hidden">
                      <img src={l.product.images[0]} alt={l.product.name} loading="lazy" className="h-full w-full object-cover" />
                    </Link>
                    <div className="flex-1">
                      <div className="flex justify-between gap-3">
                        <div>
                          <Link to={`/product/${l.id}`} className="font-serif text-lg text-forest hover:text-gold-700">{l.product.name}</Link>
                          <p className="text-[12px] text-stone mt-0.5">{l.product.material}</p>
                        </div>
                        <button onClick={() => removeFromCart(l.id)} className="text-stone hover:text-red-600 h-fit" aria-label="Remove"><X size={18} /></button>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center border border-line rounded-full">
                          <button onClick={() => updateQty(l.id, l.qty - 1)} className="p-2 text-forest hover:text-gold-700"><Minus size={14} /></button>
                          <span className="w-8 text-center text-[14px]">{l.qty}</span>
                          <button onClick={() => updateQty(l.id, l.qty + 1)} className="p-2 text-forest hover:text-gold-700"><Plus size={14} /></button>
                        </div>
                        <span className="font-medium text-forest">{formatPrice(l.product.priceINR * l.qty, currency)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/shop" className="link-cta mt-6 inline-flex">← Continue shopping</Link>
            </div>

            {/* summary */}
            <aside>
              <div className="bg-white rounded-xl ring-1 ring-line p-6 sticky top-28">
                <h2 className="font-serif text-xl text-forest mb-5">Order Summary</h2>
                <div className="space-y-3 text-[14px]">
                  <Row label="Subtotal" value={formatPrice(cartTotalINR, currency)} />
                  <Row label="Shipping" value={shipping === 0 ? 'Free' : formatPrice(shipping, currency)} />
                  {shipping > 0 && <p className="text-[12px] text-gold-700 flex items-center gap-1.5"><Truck size={13} /> Add {formatPrice(FREE_SHIP_INR - cartTotalINR, currency)} more for free shipping</p>}
                  <div className="border-t border-line pt-3 flex items-center justify-between">
                    <span className="font-serif text-lg text-forest">Total</span>
                    <span className="font-serif text-2xl text-forest">{formatPrice(total, currency)}</span>
                  </div>
                </div>
                <button onClick={() => { setPlaced(true); clearCart() }} className="btn btn-gold w-full mt-6"><Lock size={15} /> Secure Checkout</button>
                <p className="text-[11px] text-stone text-center mt-3">Demo checkout — no payment is taken.</p>
              </div>
            </aside>
          </div>
        )}
      </div>
    </>
  )
}

function Row({ label, value }) {
  return <div className="flex items-center justify-between"><span className="text-stone">{label}</span><span className="text-forest">{value}</span></div>
}
