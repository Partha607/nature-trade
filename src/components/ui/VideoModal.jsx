import { AnimatePresence, motion } from 'framer-motion'
import { Play, X, Volume2, Maximize2 } from 'lucide-react'

/* A cinematic video-player lightbox. Demo preview — the poster
   stands in for the artisan film that will play in production. */
export default function VideoModal({ open, onClose, poster, title = 'The Story', subtitle }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] bg-forest-900/85 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative ratio-wide bg-forest">
              <img src={poster} alt="" className="absolute inset-0 h-full w-full object-cover opacity-80" />
              <div className="overlay-dark" />
              <button onClick={onClose} className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-forest-900/50 text-ivory flex items-center justify-center hover:bg-forest-900 transition-colors" aria-label="Close">
                <X size={20} />
              </button>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
                <button className="h-20 w-20 rounded-full bg-ivory/15 border border-ivory/50 backdrop-blur flex items-center justify-center text-ivory hover:bg-gold hover:border-gold transition-colors">
                  <Play size={30} className="ml-1 fill-current" />
                </button>
                <h3 className="mt-6 font-serif text-3xl text-ivory">{title}</h3>
                {subtitle && <p className="mt-1 text-ivory/70 text-sm tracking-wide">{subtitle}</p>}
                <span className="mt-4 text-[11px] uppercase tracking-[0.2em] text-gold-300">Demo preview · film coming soon</span>
              </div>
              {/* faux player controls */}
              <div className="absolute bottom-0 inset-x-0 z-10 px-5 pb-4 pt-10 bg-gradient-to-t from-forest-900/80 to-transparent">
                <div className="h-1 rounded-full bg-ivory/25 overflow-hidden">
                  <div className="h-full w-1/3 bg-gold" />
                </div>
                <div className="mt-2 flex items-center justify-between text-ivory/80 text-xs">
                  <span className="flex items-center gap-3"><Play size={14} className="fill-current" /> 1:24 / 4:08</span>
                  <span className="flex items-center gap-4"><Volume2 size={14} /><Maximize2 size={14} /></span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
