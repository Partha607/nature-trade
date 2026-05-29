import { Link } from 'react-router-dom'
import logoColor from '../../assets/nature_trade_logo.webp'
import logoLight from '../../assets/nature_trade_logo_light.webp'

/* Nature Trade brand mark.
   tone "dark"  → full-colour logo (use on light backgrounds)
   tone "light" → ivory knockout   (use on dark backgrounds) */
const SIZES = {
  compact: 'h-12',
  default: 'h-16 md:h-[72px]',
  footer: 'h-24 md:h-28',
}

export default function Logo({ tone = 'dark', compact = false, size = 'default' }) {
  const src = tone === 'light' ? logoLight : logoColor
  const h = SIZES[compact ? 'compact' : size] || SIZES.default
  return (
    <Link to="/" className="inline-flex items-center shrink-0" aria-label="Nature Trade — Home">
      <img
        src={src}
        alt="Nature Trade"
        draggable="false"
        className={`${h} w-auto select-none`}
      />
    </Link>
  )
}
