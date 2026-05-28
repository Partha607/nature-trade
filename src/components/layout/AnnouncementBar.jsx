import { Sparkles } from 'lucide-react'

export default function AnnouncementBar() {
  return (
    <div className="bg-forest-900 text-ivory/90 text-center text-[11px] tracking-[0.18em] uppercase py-2 flex items-center justify-center gap-2">
      <Sparkles size={12} className="text-gold" />
      <span>Free international shipping on orders above $200</span>
      <Sparkles size={12} className="text-gold" />
    </div>
  )
}
