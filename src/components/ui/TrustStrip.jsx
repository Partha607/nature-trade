import { ShieldCheck, Heart, Leaf, Globe, Lock } from 'lucide-react'

const ITEMS = [
  { icon: ShieldCheck, title: 'Authentic & Ethical', text: 'Verified artisan-made, fair-trade sourced' },
  { icon: Heart, title: 'Handmade with Care', text: 'Every piece crafted entirely by hand' },
  { icon: Leaf, title: 'Sustainable Packaging', text: 'Plastic-free, recyclable materials' },
  { icon: Globe, title: 'Worldwide Shipping', text: 'Insured delivery to 100+ countries' },
  { icon: Lock, title: 'Secure Payments', text: 'Encrypted, protected checkout' },
]

export default function TrustStrip({ dark = false }) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8 ${dark ? 'text-ivory' : 'text-forest'}`}>
      {ITEMS.map((it) => (
        <div key={it.title} className="flex flex-col items-center text-center px-2">
          <it.icon size={26} strokeWidth={1.4} className={dark ? 'text-gold-300' : 'text-gold-700'} />
          <h4 className="mt-3 text-[12px] font-semibold tracking-[0.12em] uppercase">{it.title}</h4>
          <p className={`mt-1 text-[12px] leading-snug ${dark ? 'text-ivory/55' : 'text-stone'}`}>{it.text}</p>
        </div>
      ))}
    </div>
  )
}
