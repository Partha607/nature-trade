import { Suspense } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import SearchOverlay from './SearchOverlay.jsx'
import ScrollToTop from './ScrollToTop.jsx'
import { getHeaderMode } from '../../lib/headerMode.js'

function RouteFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center" aria-busy="true">
      <span className="h-9 w-9 rounded-full border-2 border-gold/30 border-t-gold animate-spin" aria-label="Loading" />
    </div>
  )
}

export default function Layout() {
  const { pathname } = useLocation()
  const overlay = getHeaderMode(pathname) === 'overlay'
  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <ScrollToTop />
      <Header />
      <SearchOverlay />
      <main className={`flex-1 ${overlay ? '' : 'pt-[104px]'}`}>
        <Suspense fallback={<RouteFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
