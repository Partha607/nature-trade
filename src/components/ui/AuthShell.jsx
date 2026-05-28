import { Link } from 'react-router-dom'
import { Quote } from 'lucide-react'
import { photo } from '../../data/images.js'

/* Split-screen cinematic auth layout. */
export default function AuthShell({ eyebrow, title, children, image }) {
  return (
    <div className="grid lg:grid-cols-2 min-h-[calc(100vh-104px)]">
      {/* visual side */}
      <div className="relative hidden lg:block grain">
        <img src={image || photo('1638310533874-6c124c012e1d', 1400)} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/95 via-forest-900/40 to-forest-900/30" />
        <div className="absolute bottom-0 inset-x-0 p-12">
          <Quote size={30} className="text-gold-300" />
          <p className="mt-4 font-serif text-3xl text-ivory leading-snug max-w-md">Every thread carries a tribe. Every weave carries a story.</p>
          <p className="mt-4 text-[12px] uppercase tracking-[0.2em] text-ivory/60">Nature Trade · Northeast India</p>
        </div>
      </div>

      {/* form side */}
      <div className="flex items-center justify-center px-6 py-14 bg-paper">
        <div className="w-full max-w-md">
          <p className="eyebrow text-gold-700 mb-3">{eyebrow}</p>
          <h1 className="display-3 text-forest">{title}</h1>
          {children}
        </div>
      </div>
    </div>
  )
}

export function SocialButtons() {
  const items = [
    { label: 'Google', mark: <span className="font-bold text-[15px]" style={{ color: '#EA4335' }}>G</span> },
    { label: 'Apple', mark: <span className="text-[15px]"></span> },
    { label: 'Facebook', mark: <span className="font-bold text-[15px]" style={{ color: '#1877F2' }}>f</span> },
  ]
  return (
    <div className="grid grid-cols-3 gap-3">
      {items.map((s) => (
        <button key={s.label} type="button" className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-line bg-white hover:border-gold transition-colors text-[13px] text-forest">
          {s.mark}<span className="hidden sm:inline">{s.label}</span>
        </button>
      ))}
    </div>
  )
}
