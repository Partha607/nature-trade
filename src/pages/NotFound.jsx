import { Button } from '../components/common.jsx'
import { Ornament } from '../components/common.jsx'
import Seo from '../components/Seo.jsx'

export default function NotFound() {
  return (
    <div className="container-luxe py-32 text-center">
      <Seo title="Page Not Found" />
      <p className="font-serif text-[110px] leading-none text-gold">404</p>
      <Ornament className="my-6" />
      <h1 className="font-serif text-3xl text-forest">This thread leads nowhere</h1>
      <p className="text-stone mt-3 max-w-md mx-auto">The page you're looking for has wandered off the loom. Let's get you back to something beautiful.</p>
      <div className="mt-8 flex gap-3 justify-center">
        <Button to="/" variant="dark">Back to Home</Button>
        <Button to="/shop" variant="outline-dark">Explore the Shop</Button>
      </div>
    </div>
  )
}
