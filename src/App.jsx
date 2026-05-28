import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import Home from './pages/Home.jsx' // eager — first paint

// Route-level code splitting keeps the initial bundle small.
const Shop = lazy(() => import('./pages/Shop.jsx'))
const Product = lazy(() => import('./pages/Product.jsx'))
const Northeast = lazy(() => import('./pages/Northeast.jsx'))
const StatePage = lazy(() => import('./pages/StatePage.jsx'))
const Artisans = lazy(() => import('./pages/Artisans.jsx'))
const Journal = lazy(() => import('./pages/Journal.jsx'))
const JournalPost = lazy(() => import('./pages/JournalPost.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Register = lazy(() => import('./pages/Register.jsx'))
const Login = lazy(() => import('./pages/Login.jsx'))
const Members = lazy(() => import('./pages/Members.jsx'))
const Wishlist = lazy(() => import('./pages/Wishlist.jsx'))
const Cart = lazy(() => import('./pages/Cart.jsx'))
const SearchResults = lazy(() => import('./pages/SearchResults.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))
const Admin = lazy(() => import('./pages/Admin.jsx'))

export default function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/northeast" element={<Northeast />} />
          <Route path="/northeast/:slug" element={<StatePage />} />
          <Route path="/artisans" element={<Artisans />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/:slug" element={<JournalPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/members" element={<Members />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        {/* Admin runs in its own full-screen shell */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Suspense>
  )
}
