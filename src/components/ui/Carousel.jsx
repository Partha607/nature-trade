import { useEffect, useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

/**
 * Full-bleed cinematic background carousel with cross-fade + ken-burns.
 * Overlaid content is passed as children (rendered above the image).
 */
export default function Carousel({
  images = [],
  interval = 6000,
  autoplay = true,
  arrows = true,
  dots = true,
  overlay = 'dark', // 'dark' | 'left' | 'bottom' | false
  heightClass = 'h-screen',
  className = '',
  children,
}) {
  const [i, setI] = useState(0)
  const n = images.length

  const go = useCallback((d) => setI((p) => (p + d + n) % n), [n])

  useEffect(() => {
    if (!autoplay || n <= 1) return
    const t = setInterval(() => setI((p) => (p + 1) % n), interval)
    return () => clearInterval(t)
  }, [autoplay, interval, n])

  const overlayClass = overlay === 'left' ? 'overlay-left' : overlay === 'bottom' ? 'overlay-bottom' : overlay ? 'overlay-dark' : ''

  return (
    <section className={`relative overflow-hidden grain ${heightClass} ${className}`}>
      <AnimatePresence initial={false}>
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.3, ease: 'easeInOut' }}
        >
          <img src={images[i]} alt="" className="h-full w-full object-cover kenburns" />
        </motion.div>
      </AnimatePresence>

      {overlayClass && <div className={overlayClass} />}

      <div className="relative z-[3] h-full">{children}</div>

      {arrows && n > 1 && (
        <div className="absolute z-[4] bottom-8 right-8 flex gap-2">
          <button onClick={() => go(-1)} className="h-11 w-11 rounded-full border border-ivory/40 text-ivory flex items-center justify-center hover:bg-ivory hover:text-forest transition-colors" aria-label="Previous">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => go(1)} className="h-11 w-11 rounded-full border border-ivory/40 text-ivory flex items-center justify-center hover:bg-ivory hover:text-forest transition-colors" aria-label="Next">
            <ChevronRight size={20} />
          </button>
        </div>
      )}

      {dots && n > 1 && (
        <div className="absolute z-[4] bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${idx === i ? 'w-8 bg-gold' : 'w-1.5 bg-ivory/50 hover:bg-ivory'}`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  )
}
