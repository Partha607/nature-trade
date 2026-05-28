import { Link } from 'react-router-dom'
import { Heart, ArrowRight } from 'lucide-react'
import { useStore } from '../context/StoreContext.jsx'
import { productById } from '../data/products.js'
import ProductCard from '../components/ui/ProductCard.jsx'
import { Button } from '../components/common.jsx'
import Seo from '../components/Seo.jsx'

export default function Wishlist() {
  const { wishlist } = useStore()
  const items = wishlist.map(productById).filter(Boolean)

  return (
    <>
      <Seo title="Your Wishlist" />
      <section className="bg-forest-900 grain py-12 md:py-14">
        <div className="container-luxe relative z-[3]">
          <p className="eyebrow text-gold-300 mb-2">Saved for Later</p>
          <h1 className="display-2 text-ivory flex items-center gap-3"><Heart className="text-gold-300" /> Your Wishlist</h1>
        </div>
      </section>

      <div className="container-luxe py-12 md:py-16">
        {items.length === 0 ? (
          <div className="text-center py-20">
            <Heart size={40} className="text-stone-light mx-auto" />
            <h2 className="font-serif text-3xl text-forest mt-5">Your wishlist is empty</h2>
            <p className="text-stone mt-2">Tap the heart on any piece to save it here for later.</p>
            <Button to="/shop" variant="dark" icon={ArrowRight} className="mt-7">Explore the Collection</Button>
          </div>
        ) : (
          <>
            <p className="text-stone mb-8">{items.length} piece{items.length > 1 ? 's' : ''} saved</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-9">
              {items.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </>
        )}
      </div>
    </>
  )
}
