import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Search, X } from 'lucide-react'
import { useStore } from '../../context/StoreContext.jsx'

const SUGGESTIONS = ['Muga Silk', 'Naga Shawl', 'Black Pottery', 'Bamboo', 'Eri Silk', 'Cane Bag', 'Tribal Jewellery']

export default function SearchOverlay() {
  const { searchOpen, setSearchOpen } = useStore()
  const [value, setValue] = useState('')
  const inputRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (searchOpen) setTimeout(() => inputRef.current?.focus(), 60)
  }, [searchOpen])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setSearchOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [setSearchOpen])

  const submit = (q) => {
    const term = (q ?? value).trim()
    if (!term) return
    setSearchOpen(false)
    setValue('')
    navigate(`/search?q=${encodeURIComponent(term)}`)
  }

  return (
    <AnimatePresence>
      {searchOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-forest-900/60 backdrop-blur-sm z-[60]"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSearchOpen(false)}
          />
          <motion.div
            className="fixed top-0 left-0 right-0 bg-ivory z-[61] shadow-2xl"
            initial={{ y: '-100%' }} animate={{ y: 0 }} exit={{ y: '-100%' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="container-luxe py-7">
              <div className="flex items-center gap-4 border-b-2 border-forest pb-4">
                <Search size={24} className="text-gold-700" />
                <input
                  ref={inputRef}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && submit()}
                  placeholder="Search textiles, states, artisans, stories…"
                  className="flex-1 bg-transparent text-2xl md:text-3xl font-serif text-forest placeholder:text-stone-light outline-none"
                />
                <button onClick={() => setSearchOpen(false)} className="text-stone hover:text-forest transition-colors" aria-label="Close search">
                  <X size={26} />
                </button>
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-2.5">
                <span className="text-[11px] uppercase tracking-[0.18em] text-stone mr-1">Popular</span>
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => submit(s)}
                    className="rounded-full border border-line px-4 py-1.5 text-sm text-forest hover:bg-forest hover:text-ivory transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
