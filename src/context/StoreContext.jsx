import { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react'
import { DEFAULT_CURRENCY } from '../data/currencies.js'
import { productById } from '../data/products.js'

const StoreContext = createContext(null)

const load = (key, fallback) => {
  try {
    const v = localStorage.getItem(key)
    return v ? JSON.parse(v) : fallback
  } catch {
    return fallback
  }
}
const save = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    /* ignore */
  }
}

export function StoreProvider({ children }) {
  const [currency, setCurrencyState] = useState(() => load('nt_currency', DEFAULT_CURRENCY))
  const [cart, setCart] = useState(() => load('nt_cart', [])) // [{id, qty}]
  const [wishlist, setWishlist] = useState(() => load('nt_wishlist', [])) // [id]
  const [user, setUser] = useState(() => load('nt_user', null))

  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => save('nt_currency', currency), [currency])
  useEffect(() => save('nt_cart', cart), [cart])
  useEffect(() => save('nt_wishlist', wishlist), [wishlist])
  useEffect(() => save('nt_user', user), [user])

  const setCurrency = useCallback((c) => setCurrencyState(c), [])

  const addToCart = useCallback((id, qty = 1) => {
    setCart((prev) => {
      const found = prev.find((i) => i.id === id)
      if (found) return prev.map((i) => (i.id === id ? { ...i, qty: i.qty + qty } : i))
      return [...prev, { id, qty }]
    })
  }, [])

  const updateQty = useCallback((id, qty) => {
    setCart((prev) =>
      qty <= 0 ? prev.filter((i) => i.id !== id) : prev.map((i) => (i.id === id ? { ...i, qty } : i)),
    )
  }, [])

  const removeFromCart = useCallback((id) => setCart((prev) => prev.filter((i) => i.id !== id)), [])
  const clearCart = useCallback(() => setCart([]), [])

  const toggleWishlist = useCallback((id) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }, [])
  const isWishlisted = useCallback((id) => wishlist.includes(id), [wishlist])

  const login = useCallback((u) => setUser(u), [])
  const logout = useCallback(() => setUser(null), [])

  const cartCount = useMemo(() => cart.reduce((n, i) => n + i.qty, 0), [cart])
  const cartTotalINR = useMemo(
    () =>
      cart.reduce((sum, i) => {
        const p = productById(i.id)
        return sum + (p ? p.priceINR * i.qty : 0)
      }, 0),
    [cart],
  )

  const value = {
    currency, setCurrency,
    cart, addToCart, updateQty, removeFromCart, clearCart, cartCount, cartTotalINR,
    wishlist, toggleWishlist, isWishlisted,
    user, login, logout, isAuthenticated: !!user,
    searchOpen, setSearchOpen, query, setQuery,
  }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore() {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore must be used within StoreProvider')
  return ctx
}
