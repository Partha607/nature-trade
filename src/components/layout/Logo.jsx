import { Link } from 'react-router-dom'

/* Ornamental emblem + wordmark. `tone`: 'dark' | 'light'. */
export default function Logo({ tone = 'dark', compact = false }) {
  const isLight = tone === 'light'
  const ink = isLight ? '#F7F2EA' : '#1C2A24'
  const gold = '#B89B5E'
  return (
    <Link to="/" className="flex items-center gap-3 group" aria-label="Nature Trade — Home">
      <svg width="38" height="38" viewBox="0 0 48 48" fill="none" className="shrink-0 transition-transform duration-700 group-hover:rotate-[8deg]">
        <rect x="1" y="1" width="46" height="46" rx="8" stroke={gold} strokeWidth="1.4" />
        <rect x="6" y="6" width="36" height="36" rx="4" stroke={gold} strokeWidth="0.7" opacity="0.5" />
        <g stroke={gold} strokeWidth="1.5" strokeLinecap="round">
          <path d="M24 11v26" />
          <path d="M24 16c-5 2.6-8 6.4-8 11 3.8-1.2 6.6-4.6 8-9" fill="none" />
          <path d="M24 16c5 2.6 8 6.4 8 11-3.8-1.2-6.6-4.6-8-9" fill="none" />
          <path d="M24 27c-3.4 1.8-5.4 4.4-5.4 7.6 2.6-.8 4.5-3 5.4-6" fill="none" />
          <path d="M24 27c3.4 1.8 5.4 4.4 5.4 7.6-2.6-.8-4.5-3-5.4-6" fill="none" />
        </g>
      </svg>
      <div className="leading-none">
        <div
          className="font-serif tracking-[0.34em] text-[18px] md:text-[19px]"
          style={{ color: ink }}
        >
          NATURE
        </div>
        <div
          className="font-serif tracking-[0.34em] text-[18px] md:text-[19px] -mt-0.5"
          style={{ color: ink }}
        >
          TRADE
        </div>
        {!compact && (
          <div className="mt-1 text-[7.5px] tracking-[0.2em] uppercase" style={{ color: gold }}>
            Crafted by Tradition · Rooted in Nature
          </div>
        )}
      </div>
    </Link>
  )
}
