import { useState } from 'react'
import { Play } from 'lucide-react'
import VideoModal from './VideoModal.jsx'

/* Horizontal expanding accordion of artisan story panels.
   Hover (desktop) or tap to expand; play opens a film lightbox. */
export default function StoryAccordion({ panels = [] }) {
  const [active, setActive] = useState(0)
  const [video, setVideo] = useState(null)

  return (
    <>
      <div className="flex flex-col md:flex-row gap-2 md:h-[460px]">
        {panels.map((p, idx) => {
          const isActive = idx === active
          return (
            <div
              key={idx}
              onMouseEnter={() => setActive(idx)}
              onClick={() => setActive(idx)}
              className="group relative overflow-hidden rounded-md cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] h-64 md:h-auto"
              style={{ flexGrow: isActive ? 5 : 1, flexBasis: 0 }}
            >
              <img src={p.img} alt={p.title} loading="lazy" className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ${isActive ? 'scale-105' : 'scale-100'}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-forest-900/25 to-transparent" />

              <button
                onClick={(e) => { e.stopPropagation(); setVideo(p) }}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-14 w-14 rounded-full border border-ivory/60 backdrop-blur-sm flex items-center justify-center text-ivory transition-all duration-500 hover:bg-gold hover:border-gold ${isActive ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}
                aria-label={`Play ${p.title}`}
              >
                <Play size={20} className="ml-0.5 fill-current" />
              </button>

              <div className="absolute bottom-0 inset-x-0 p-5">
                <h3 className={`font-serif text-ivory leading-tight transition-all duration-500 ${isActive ? 'text-2xl' : 'text-lg md:[writing-mode:vertical-rl] md:rotate-180 md:text-base'}`}>
                  {p.title}
                </h3>
                <p className={`mt-2 text-ivory/75 text-[13px] leading-relaxed max-w-xs transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-0 md:hidden'}`}>
                  {p.caption}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      <VideoModal open={!!video} onClose={() => setVideo(null)} poster={video?.img} title={video?.title} subtitle={video?.caption} />
    </>
  )
}
