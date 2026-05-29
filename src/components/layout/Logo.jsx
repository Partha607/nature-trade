import { Link } from 'react-router-dom'
import logoColor from '../../assets/nature_trade_logo.png'
import logoLight from '../../assets/nature_trade_logo_light.png'

/* Nature Trade brand mark.
   tone "dark"  → full-colour logo (use on light backgrounds)
   tone "light" → ivory knockout   (use on dark backgrounds) */
export default function Logo({ tone = 'dark', compact = false }) {
  const src = tone === 'light' ? logoLight : logoColor
  return (
    <Link to="/" className="inline-flex items-center shrink-0" aria-label="Nature Trade — Home">
      <img
        src={src}
        alt="Nature Trade"
        draggable="false"
        className={`${compact ? 'h-10' : 'h-12 md:h-14'} w-auto select-none`}
      />
    </Link>
  )
}
