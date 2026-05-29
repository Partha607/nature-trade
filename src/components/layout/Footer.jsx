import { Link } from 'react-router-dom'
import { Instagram, Facebook, Youtube, MapPin, Mail, Phone, Send } from 'lucide-react'
import { FOOTER } from '../../data/navItems.js'
import Logo from './Logo.jsx'
import n8eLogo from '../../assets/n8e_labs_logo_light.png'
import natureWatermark from '../../assets/nature_trade_logo_light.webp'

const socialIcon = { instagram: Instagram, facebook: Facebook, youtube: Youtube, pinterest: Send }

export default function Footer() {
  return (
    <footer className="relative bg-forest-900 text-ivory/80 grain overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      {/* Nature Trade emblem — faded, washed watermark for depth */}
      <img
        src={natureWatermark}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[820px] max-w-[150%] opacity-[0.05] z-0"
      />
      <div className="container-luxe py-16 md:py-20 relative z-[3]">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr]">
          {/* About */}
          <div className="flex flex-col items-center text-center md:items-center">
            <Logo tone="light" size="footer" />
            <p className="mt-6 text-[13.5px] leading-relaxed text-ivory/60 max-w-sm mx-auto">{FOOTER.about}</p>
            <div className="mt-6 flex gap-3 justify-center">
              {FOOTER.socials.map((s) => {
                const Icon = socialIcon[s.icon] || Send
                return (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="h-9 w-9 rounded-full border border-ivory/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-colors">
                    <Icon size={15} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-ivory text-[11px] font-semibold tracking-[0.2em] uppercase mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {FOOTER.quickLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-[13.5px] text-ivory/60 hover:text-gold transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policy */}
          <div>
            <h4 className="text-ivory text-[11px] font-semibold tracking-[0.2em] uppercase mb-5">Policy</h4>
            <ul className="space-y-3">
              {FOOTER.policy.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-[13.5px] text-ivory/60 hover:text-gold transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + newsletter */}
          <div>
            <h4 className="text-ivory text-[11px] font-semibold tracking-[0.2em] uppercase mb-5">Contact</h4>
            <ul className="space-y-3.5 text-[13.5px] text-ivory/60">
              <li className="flex gap-3"><MapPin size={16} className="text-gold shrink-0 mt-0.5" /><span>{FOOTER.contact.address}</span></li>
              <li className="flex gap-3"><Mail size={16} className="text-gold shrink-0 mt-0.5" /><a href={`mailto:${FOOTER.contact.email}`} className="hover:text-gold">{FOOTER.contact.email}</a></li>
              <li className="flex gap-3"><Phone size={16} className="text-gold shrink-0 mt-0.5" /><span>{FOOTER.contact.phone}</span></li>
            </ul>
            <form className="mt-6" onSubmit={(e) => e.preventDefault()}>
              <label className="text-[11px] tracking-[0.16em] uppercase text-ivory/50">Join the journal</label>
              <div className="mt-2 flex items-center border border-ivory/20 rounded-full overflow-hidden focus-within:border-gold transition-colors">
                <input type="email" placeholder="Your email" className="flex-1 bg-transparent px-4 py-2.5 text-sm text-ivory placeholder:text-ivory/40 outline-none" />
                <button className="px-4 text-gold hover:text-white transition-colors" aria-label="Subscribe"><Send size={16} /></button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-ivory/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-ivory/45">
          <p>© {new Date().getFullYear()} Nature Trade · A cultural-commerce initiative of the North East Development Forum (NEDF), est. 2006 · A living archive of Northeast craft.</p>
          <span className="hidden lg:block">Made with care in Sivasagar, Assam · naturetradestore.in</span>
          <a href="https://n88ebuild.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 group shrink-0">
            <span className="text-[10px] uppercase tracking-[0.18em] text-ivory/40 group-hover:text-ivory/70 transition-colors">Designed &amp; built by</span>
            <img src={n8eLogo} alt="N8E Labs" className="h-9 w-auto" />
          </a>
        </div>
      </div>
    </footer>
  )
}
