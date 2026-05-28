import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Check } from 'lucide-react'
import { CURRENCIES, CURRENCY_MAP, flagUrl } from '../../data/currencies.js'
import { useStore } from '../../context/StoreContext.jsx'

export default function CurrencySelect({ onDark = false }) {
  const { currency, setCurrency } = useStore()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const active = CURRENCY_MAP[currency]

  useEffect(() => {
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-1.5 text-[12px] font-medium tracking-wide transition-colors ${onDark ? 'text-ivory/90 hover:text-white' : 'text-forest hover:text-gold-700'}`}
        aria-label="Select currency"
      >
        <img src={flagUrl(active.country)} alt="" className="h-3.5 w-5 object-cover rounded-[2px]" />
        <span>{active.code}</span>
        <ChevronDown size={13} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-64 max-h-80 overflow-y-auto rounded-xl bg-ivory shadow-2xl ring-1 ring-black/5 py-2 z-50">
          <div className="px-4 pb-2 pt-1 text-[10px] font-semibold tracking-[0.18em] uppercase text-stone border-b border-line">
            Select currency
          </div>
          {CURRENCIES.map((c) => (
            <button
              key={c.code}
              onClick={() => { setCurrency(c.code); setOpen(false) }}
              className="w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-ivory-200 transition-colors"
            >
              <img src={flagUrl(c.country)} alt="" className="h-4 w-6 object-cover rounded-[2px] shadow-sm" />
              <span className="w-8 text-sm font-semibold text-forest">{c.symbol}</span>
              <span className="flex-1 text-[13px] text-charcoal">{c.label}</span>
              <span className="text-[11px] text-stone font-medium">{c.code}</span>
              {c.code === currency && <Check size={14} className="text-gold-700" />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
