import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Search, User, Heart, ShoppingBag, Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../../data/navItems.js'
import { getHeaderMode } from '../../lib/headerMode.js'
import { useStore } from '../../context/StoreContext.jsx'
import CurrencySelect from './CurrencySelect.jsx'
import AnnouncementBar from './AnnouncementBar.jsx'
import Logo from './Logo.jsx'

function CountBadge({ n }) {
  if (!n) return null
  return (
    <span className="absolute -top-1.5 -right-2 min-w-[16px] h-4 px-1 rounded-full bg-gold text-white text-[9px] font-bold flex items-center justify-center">
      {n > 9 ? '9+' : n}
    </span>
  )
}

export default function Header() {
  const { pathname } = useLocation()
  const mode = getHeaderMode(pathname)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { setSearchOpen, wishlist, cartCount, isAuthenticated } = useStore()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [pathname])

  // Overlay heroes: light/ivory text over the hero at the top, flipping to a
  // solid ivory bar (dark logo + text) once scrolled — matching /about.
  const onDark = mode === 'dark' || (mode === 'overlay' && !scrolled)
  const showAnnounce = !(mode === 'overlay' && scrolled)

  let navBg = ''
  if (mode === 'overlay') navBg = scrolled ? 'bg-ivory/95 backdrop-blur-md border-b border-line shadow-sm' : 'bg-transparent'
  else if (mode === 'dark') navBg = 'bg-forest shadow-md'
  else navBg = 'bg-ivory/95 backdrop-blur-md border-b border-line shadow-sm'

  const iconColor = onDark ? 'text-ivory/90 hover:text-white' : 'text-forest hover:text-gold-700'

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <AnimatePresence initial={false}>
        {showAnnounce && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <AnnouncementBar />
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`transition-all duration-500 ${navBg}`}>
        <div className="container-luxe flex items-center justify-between gap-4 py-2 md:py-2.5">
          <Logo tone={onDark ? 'light' : 'dark'} />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `relative text-[12.5px] font-medium tracking-[0.08em] uppercase transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-gold after:transition-all ${
                    isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                  } ${onDark ? 'text-ivory/85 hover:text-white' : 'text-forest hover:text-gold-700'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-3.5 md:gap-4">
            <button onClick={() => setSearchOpen(true)} className={`transition-colors ${iconColor}`} aria-label="Search">
              <Search size={19} strokeWidth={1.6} />
            </button>
            <Link to={isAuthenticated ? '/members' : '/login'} className={`hidden sm:block transition-colors ${iconColor}`} aria-label="Account">
              <User size={19} strokeWidth={1.6} />
            </Link>
            <Link to="/wishlist" className={`relative transition-colors ${iconColor}`} aria-label="Wishlist">
              <Heart size={19} strokeWidth={1.6} />
              <CountBadge n={wishlist.length} />
            </Link>
            <Link to="/cart" className={`relative transition-colors ${iconColor}`} aria-label="Cart">
              <ShoppingBag size={19} strokeWidth={1.6} />
              <CountBadge n={cartCount} />
            </Link>
            <div className="hidden sm:block">
              <CurrencySelect onDark={onDark} />
            </div>
            <button onClick={() => setMenuOpen(true)} className={`lg:hidden transition-colors ${iconColor}`} aria-label="Menu">
              <Menu size={22} strokeWidth={1.6} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div className="fixed inset-0 bg-forest-900/70 z-[70] lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMenuOpen(false)} />
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-[82%] max-w-sm bg-ivory z-[71] lg:hidden flex flex-col"
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-line">
                <Logo tone="dark" compact />
                <button onClick={() => setMenuOpen(false)} className="text-forest" aria-label="Close menu"><X size={24} /></button>
              </div>
              <nav className="flex flex-col px-6 py-4">
                {NAV_LINKS.map((l) => (
                  <NavLink key={l.to} to={l.to} className="py-3 border-b border-line/60 font-serif text-xl text-forest">
                    {l.label}
                  </NavLink>
                ))}
                <Link to={isAuthenticated ? '/members' : '/login'} className="py-3 border-b border-line/60 font-serif text-xl text-forest">
                  {isAuthenticated ? 'My Account' : 'Sign In'}
                </Link>
              </nav>
              <div className="px-6 py-4 mt-auto">
                <CurrencySelect />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
