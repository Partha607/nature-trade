import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useStore } from '../context/StoreContext.jsx'
import { formatPrice } from '../lib/format.js'

/* ---- Button (renders Link, anchor, or button) ---- */
export function Button({ to, href, onClick, variant = 'gold', children, icon: Icon, iconLeft: IconLeft, className = '', type = 'button', ...rest }) {
  const cls = `btn btn-${variant} ${className}`
  const content = (
    <>
      {IconLeft && <IconLeft size={16} />}
      {children}
      {Icon && <Icon size={16} />}
    </>
  )
  if (to) return <Link to={to} className={cls} {...rest}>{content}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{content}</a>
  return <button type={type} onClick={onClick} className={cls} {...rest}>{content}</button>
}

/* ---- Scroll reveal (Framer Motion) ---- */
export function Reveal({ children, delay = 0, y = 26, className = '', once = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ---- Currency-aware price ---- */
export function Price({ inr, className = '' }) {
  const { currency } = useStore()
  return <span className={className}>{formatPrice(inr, currency)}</span>
}

/* ---- Star rating ---- */
export function Stars({ value = 5, size = 14, count }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="inline-flex">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} size={size} className={i <= Math.round(value) ? 'fill-gold text-gold' : 'text-stone-light'} strokeWidth={1.5} />
        ))}
      </span>
      {count != null && <span className="text-xs text-stone">({count} reviews)</span>}
    </span>
  )
}

/* ---- Section heading ---- */
export function SectionHeading({ eyebrow, title, sub, align = 'center', light = false, className = '' }) {
  const isCenter = align === 'center'
  return (
    <div className={`${isCenter ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <div className={`eyebrow mb-4 flex items-center gap-3 ${isCenter ? 'justify-center' : ''} ${light ? 'text-gold-300' : 'text-gold-700'}`}>
          <span className="h-px w-8 bg-current opacity-60" />
          {eyebrow}
          <span className="h-px w-8 bg-current opacity-60" />
        </div>
      )}
      {title && <h2 className={`display-2 ${light ? 'text-ivory' : 'text-forest'}`}>{title}</h2>}
      {sub && <p className={`mt-5 text-[15px] leading-relaxed ${light ? 'text-ivory-200/80' : 'text-stone'}`}>{sub}</p>}
    </div>
  )
}

/* ---- Badge / pill ---- */
export function Badge({ children, tone = 'gold', className = '' }) {
  const tones = {
    gold: 'bg-gold text-white',
    dark: 'bg-forest text-ivory',
    light: 'bg-ivory/90 text-forest',
    outline: 'border border-gold text-gold-700',
  }
  return (
    <span className={`inline-block text-[10px] font-semibold tracking-[0.16em] uppercase px-2.5 py-1 rounded-full ${tones[tone] || tones.gold} ${className}`}>
      {children}
    </span>
  )
}

/* ---- Small ornamental divider ---- */
export function Ornament({ className = '', light = false }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className={`h-px w-12 ${light ? 'bg-gold-300/60' : 'bg-gold/50'}`} />
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className={light ? 'text-gold-300' : 'text-gold'}>
        <path d="M12 2l2.5 7.5H22l-6 4.5 2.5 7.5L12 17l-6.5 4.5L8 14l-6-4.5h7.5z" fill="currentColor" opacity="0.85" />
      </svg>
      <span className={`h-px w-12 ${light ? 'bg-gold-300/60' : 'bg-gold/50'}`} />
    </div>
  )
}
