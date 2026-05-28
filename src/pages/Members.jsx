import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard, Package, UserCog, CreditCard, Heart, Bell, Award, LogOut, MapPin, Truck, FileText, RotateCcw,
  Shield, Plus, Check, Star, Eye, Search, MessageCircle, HelpCircle, Gift, ChevronRight, Globe, ShoppingBag,
} from 'lucide-react'
import { useStore } from '../context/StoreContext.jsx'
import { Price, Button } from '../components/common.jsx'
import { productById, PRODUCTS } from '../data/products.js'
import { CURRENCIES } from '../data/currencies.js'
import { ORDERS, ADDRESSES, CARDS, SUBSCRIPTIONS, REVIEWS, ALERTS, SOCIAL_LOGINS } from '../data/account.js'
import Seo from '../components/Seo.jsx'

const NAV = [
  { id: 'overview', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'orders', label: 'Order Management', icon: Package },
  { id: 'profile', label: 'Profile & Security', icon: UserCog },
  { id: 'payments', label: 'Payments & Finance', icon: CreditCard },
  { id: 'personalisation', label: 'Personalisation', icon: Heart },
  { id: 'communication', label: 'Communication', icon: Bell },
  { id: 'loyalty', label: 'Support & Loyalty', icon: Award },
]

const STATUS_TONE = {
  Delivered: 'bg-green-100 text-green-800',
  'In Transit': 'bg-blue-100 text-blue-800',
  Processing: 'bg-amber-100 text-amber-800',
}

function Toggle({ on, onClick }) {
  return (
    <button onClick={onClick} className={`h-6 w-11 rounded-full transition-colors relative ${on ? 'bg-forest' : 'bg-stone-light'}`}>
      <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-all ${on ? 'left-[22px]' : 'left-0.5'}`} />
    </button>
  )
}

function Card({ children, className = '' }) {
  return <div className={`bg-white rounded-xl ring-1 ring-line p-6 ${className}`}>{children}</div>
}

export default function Members() {
  const { user, logout, wishlist, currency, setCurrency } = useStore()
  const navigate = useNavigate()
  const [active, setActive] = useState('overview')
  const [toggles, setToggles] = useState({ email: true, sms: false, push: true, newsletter: true, offers: false, twofa: false })
  const t = (k) => () => setToggles((p) => ({ ...p, [k]: !p[k] }))

  if (!user) {
    return (
      <div className="container-luxe py-24 text-center">
        <Award size={40} className="text-gold-700 mx-auto" />
        <h1 className="font-serif text-4xl text-forest mt-5">Your Membership Awaits</h1>
        <p className="text-stone mt-3 max-w-md mx-auto">Sign in to access your orders, wishlist, loyalty rewards and more.</p>
        <div className="mt-8 flex gap-3 justify-center">
          <Button to="/login" variant="dark">Sign In</Button>
          <Button to="/register" variant="outline-dark">Create Account</Button>
        </div>
      </div>
    )
  }

  const orderCount = ORDERS.length
  const wished = wishlist.map(productById).filter(Boolean)
  const recent = PRODUCTS.slice(2, 6)
  const initials = user.name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase()

  return (
    <div className="bg-ivory min-h-screen">
      <Seo title="Membership" />
      <div className="container-luxe py-10">
        <div className="grid lg:grid-cols-[260px_1fr] gap-8">
          {/* sidebar */}
          <aside>
            <Card className="!p-5">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-forest text-gold-300 flex items-center justify-center font-serif text-lg">{initials}</div>
                <div className="min-w-0">
                  <p className="font-serif text-lg text-forest leading-tight truncate">{user.name}</p>
                  <p className="text-[12px] text-stone truncate">{user.email}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#b89b5e] to-[#997f48] px-3 py-2 text-white">
                <Award size={16} /><span className="text-[12px] font-medium">Gold · Artisan Circle</span>
              </div>
            </Card>
            <nav className="mt-4 space-y-1">
              {NAV.map((n) => (
                <button key={n.id} onClick={() => setActive(n.id)} className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-[13.5px] transition-colors ${active === n.id ? 'bg-forest text-ivory' : 'text-charcoal/80 hover:bg-ivory-200'}`}>
                  <n.icon size={17} /> {n.label}
                </button>
              ))}
              <button onClick={() => { logout(); navigate('/') }} className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-[13.5px] text-stone hover:bg-ivory-200">
                <LogOut size={17} /> Sign Out
              </button>
            </nav>
          </aside>

          {/* content */}
          <div className="min-w-0">
            {active === 'overview' && (
              <div>
                <h1 className="font-serif text-3xl text-forest">Welcome back, {user.name.split(' ')[0]}</h1>
                <p className="text-stone mt-1">Here's what's happening with your account.</p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                  {[
                    { label: 'Total Orders', value: orderCount, icon: Package },
                    { label: 'Wishlist', value: wishlist.length, icon: Heart },
                    { label: 'Loyalty Points', value: '2,450', icon: Award },
                    { label: 'Store Credit', value: '₹1,200', icon: Gift },
                  ].map((s) => (
                    <Card key={s.label} className="!p-5">
                      <s.icon size={20} className="text-gold-700" />
                      <div className="font-serif text-3xl text-forest mt-2">{s.value}</div>
                      <div className="text-[12px] text-stone">{s.label}</div>
                    </Card>
                  ))}
                </div>
                <Card className="mt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-serif text-xl text-forest">Recent Orders</h2>
                    <button onClick={() => setActive('orders')} className="link-cta">View all <ChevronRight size={13} /></button>
                  </div>
                  <div className="space-y-3">
                    {ORDERS.slice(0, 3).map((o) => (
                      <div key={o.id} className="flex items-center justify-between py-3 border-b border-line last:border-0">
                        <div>
                          <p className="font-medium text-forest text-[14px]">{o.id}</p>
                          <p className="text-[12px] text-stone">{o.date} · {o.items.length} item(s)</p>
                        </div>
                        <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${STATUS_TONE[o.status]}`}>{o.status}</span>
                        <Price inr={o.totalINR} className="font-medium text-forest" />
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            )}

            {active === 'orders' && (
              <Section title="Order Management" sub="History, tracking, returns and invoices.">
                <div className="space-y-4">
                  {ORDERS.map((o) => (
                    <Card key={o.id}>
                      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-line">
                        <div>
                          <p className="font-serif text-lg text-forest">{o.id}</p>
                          <p className="text-[12px] text-stone">Placed {o.date}</p>
                        </div>
                        <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${STATUS_TONE[o.status]}`}>{o.status}</span>
                        <Price inr={o.totalINR} className="font-serif text-xl text-forest" />
                      </div>
                      <div className="py-4 space-y-3">
                        {o.items.map((it) => {
                          const p = productById(it.id)
                          if (!p) return null
                          return (
                            <Link to={`/product/${p.id}`} key={it.id} className="flex items-center gap-3">
                              <img src={p.images[0]} alt="" className="h-12 w-12 rounded object-cover" />
                              <div className="flex-1"><p className="text-[14px] text-forest">{p.name}</p><p className="text-[12px] text-stone">Qty {it.qty}</p></div>
                            </Link>
                          )
                        })}
                      </div>
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-line">
                        {o.tracking !== '—' && <span className="inline-flex items-center gap-2 text-[12px] text-stone"><Truck size={14} className="text-gold-700" /> {o.carrier} · {o.tracking}</span>}
                        <div className="flex-1" />
                        {o.status !== 'Processing' && <button className="text-[12px] inline-flex items-center gap-1.5 text-forest border border-line rounded-full px-3 py-1.5 hover:border-gold"><Truck size={13} /> Track</button>}
                        <button className="text-[12px] inline-flex items-center gap-1.5 text-forest border border-line rounded-full px-3 py-1.5 hover:border-gold"><FileText size={13} /> Invoice</button>
                        {o.status === 'Delivered' && <button className="text-[12px] inline-flex items-center gap-1.5 text-forest border border-line rounded-full px-3 py-1.5 hover:border-gold"><RotateCcw size={13} /> Return / Exchange</button>}
                      </div>
                    </Card>
                  ))}
                </div>
              </Section>
            )}

            {active === 'profile' && (
              <Section title="Profile & Security" sub="Manage your personal details, password and security.">
                <Card className="mb-5">
                  <h3 className="font-serif text-lg text-forest mb-4">Personal Information</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <LabeledInput label="Full Name" defaultValue={user.name} />
                    <LabeledInput label="Email" defaultValue={user.email} />
                    <LabeledInput label="Phone" defaultValue="+91 98640 00000" />
                    <LabeledInput label="Date of Birth" defaultValue="1990-04-12" type="date" />
                  </div>
                  <Button variant="dark" className="mt-5">Save Changes</Button>
                </Card>
                <div className="grid md:grid-cols-2 gap-5">
                  <Card>
                    <h3 className="font-serif text-lg text-forest mb-4">Password & 2FA</h3>
                    <LabeledInput label="Current Password" type="password" defaultValue="••••••••" />
                    <div className="mt-3"><LabeledInput label="New Password" type="password" placeholder="New password" /></div>
                    <div className="flex items-center justify-between mt-5 pt-4 border-t border-line">
                      <span className="flex items-center gap-2 text-[14px] text-forest"><Shield size={16} className="text-gold-700" /> Two-Factor Authentication</span>
                      <Toggle on={toggles.twofa} onClick={t('twofa')} />
                    </div>
                  </Card>
                  <Card>
                    <h3 className="font-serif text-lg text-forest mb-4">Linked Accounts</h3>
                    <div className="space-y-3">
                      {SOCIAL_LOGINS.map((s) => (
                        <div key={s.name} className="flex items-center justify-between">
                          <span className="text-[14px] text-forest">{s.name}</span>
                          <button className={`text-[12px] px-3 py-1.5 rounded-full ${s.linked ? 'bg-ivory-200 text-forest' : 'border border-line text-stone'}`}>{s.linked ? 'Connected' : 'Connect'}</button>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
                <Card className="mt-5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-serif text-lg text-forest">Address Book</h3>
                    <button className="link-cta"><Plus size={14} /> Add Address</button>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {ADDRESSES.map((a) => (
                      <div key={a.label} className="rounded-lg border border-line p-4">
                        <div className="flex items-center gap-2 mb-1"><MapPin size={14} className="text-gold-700" /><span className="font-medium text-forest text-[14px]">{a.label}</span>{a.default && <span className="text-[10px] bg-ivory-200 text-forest px-2 py-0.5 rounded-full">Default</span>}</div>
                        <p className="text-[13px] text-stone">{a.name}</p>
                        <p className="text-[13px] text-stone">{a.line}</p>
                        <p className="text-[13px] text-stone">{a.phone}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </Section>
            )}

            {active === 'payments' && (
              <Section title="Payments & Finance" sub="Saved cards, store credit and subscriptions.">
                <div className="grid md:grid-cols-2 gap-5">
                  <Card>
                    <div className="flex items-center justify-between mb-4"><h3 className="font-serif text-lg text-forest">Saved Cards</h3><button className="link-cta"><Plus size={14} /> Add</button></div>
                    <div className="space-y-3">
                      {CARDS.map((c) => (
                        <div key={c.last4} className="flex items-center justify-between rounded-lg bg-forest text-ivory px-4 py-3">
                          <span className="flex items-center gap-3"><CreditCard size={18} className="text-gold-300" /> {c.brand} •••• {c.last4}</span>
                          <span className="text-[12px] text-ivory/70">{c.exp}{c.default && ' · Default'}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                  <Card>
                    <h3 className="font-serif text-lg text-forest mb-4">Store Credit</h3>
                    <div className="font-serif text-4xl text-gold-700">₹1,200</div>
                    <p className="text-[13px] text-stone mt-1">Available balance from refunds & gift cards.</p>
                    <Button variant="outline-dark" className="mt-4">Redeem at Checkout</Button>
                  </Card>
                </div>
                <Card className="mt-5">
                  <h3 className="font-serif text-lg text-forest mb-4">Subscriptions</h3>
                  {SUBSCRIPTIONS.map((s) => (
                    <div key={s.name} className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="font-medium text-forest text-[14px]">{s.name}</p>
                        <p className="text-[12px] text-stone">{s.desc} · Next: {s.next}</p>
                      </div>
                      <Price inr={s.priceINR} className="font-medium text-forest" />
                      <span className="text-[11px] bg-green-100 text-green-800 px-2.5 py-1 rounded-full">{s.status}</span>
                      <button className="text-[12px] border border-line rounded-full px-3 py-1.5 text-forest hover:border-gold">Manage</button>
                    </div>
                  ))}
                </Card>
              </Section>
            )}

            {active === 'personalisation' && (
              <Section title="Personalisation & Shopping Tools" sub="Wishlist, reviews, history and alerts.">
                <Card className="mb-5">
                  <div className="flex items-center justify-between mb-4"><h3 className="font-serif text-lg text-forest flex items-center gap-2"><Heart size={17} className="text-gold-700" /> Wishlist</h3><Link to="/wishlist" className="link-cta">View all <ChevronRight size={13} /></Link></div>
                  {wished.length ? (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {wished.slice(0, 4).map((p) => (
                        <Link key={p.id} to={`/product/${p.id}`} className="group"><img src={p.images[0]} alt="" className="rounded-lg ratio-square object-cover w-full" /><p className="text-[12px] text-forest mt-1.5 clamp-2">{p.name}</p></Link>
                      ))}
                    </div>
                  ) : <p className="text-stone text-[14px]">Your wishlist is empty. <Link to="/shop" className="text-gold-700">Start exploring →</Link></p>}
                </Card>
                <div className="grid md:grid-cols-2 gap-5">
                  <Card>
                    <h3 className="font-serif text-lg text-forest mb-4 flex items-center gap-2"><Star size={17} className="text-gold-700" /> My Reviews</h3>
                    <div className="space-y-4">
                      {REVIEWS.map((r) => (
                        <div key={r.product} className="border-b border-line pb-3 last:border-0">
                          <div className="flex items-center gap-2"><span className="flex">{[1, 2, 3, 4, 5].map((i) => <Star key={i} size={12} className={i <= r.rating ? 'fill-gold text-gold' : 'text-stone-light'} />)}</span><span className="text-[13px] font-medium text-forest">{r.product}</span></div>
                          <p className="text-[12.5px] text-stone mt-1">{r.text}</p>
                        </div>
                      ))}
                    </div>
                  </Card>
                  <Card>
                    <h3 className="font-serif text-lg text-forest mb-4 flex items-center gap-2"><Bell size={17} className="text-gold-700" /> Alerts & Saved Searches</h3>
                    <div className="space-y-3">
                      {ALERTS.map((a) => (
                        <div key={a.detail} className="flex items-start gap-3"><span className="h-2 w-2 rounded-full bg-gold mt-1.5" /><div><p className="text-[13px] text-forest">{a.detail}</p><p className="text-[11px] text-stone">{a.type} · {a.date}</p></div></div>
                      ))}
                    </div>
                  </Card>
                </div>
                <Card className="mt-5">
                  <h3 className="font-serif text-lg text-forest mb-4 flex items-center gap-2"><Eye size={17} className="text-gold-700" /> Recently Viewed</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {recent.map((p) => <Link key={p.id} to={`/product/${p.id}`}><img src={p.images[0]} alt="" className="rounded-lg ratio-square object-cover w-full" /><p className="text-[12px] text-forest mt-1.5 clamp-2">{p.name}</p></Link>)}
                  </div>
                </Card>
              </Section>
            )}

            {active === 'communication' && (
              <Section title="Communication & Preferences" sub="Notifications, marketing and regional settings.">
                <Card className="mb-5">
                  <h3 className="font-serif text-lg text-forest mb-4">Notification Settings</h3>
                  {[['email', 'Email notifications'], ['sms', 'SMS alerts'], ['push', 'Push notifications']].map(([k, label]) => (
                    <div key={k} className="flex items-center justify-between py-3 border-b border-line last:border-0"><span className="text-[14px] text-forest">{label}</span><Toggle on={toggles[k]} onClick={t(k)} /></div>
                  ))}
                </Card>
                <div className="grid md:grid-cols-2 gap-5">
                  <Card>
                    <h3 className="font-serif text-lg text-forest mb-4">Marketing Preferences</h3>
                    <div className="flex items-center justify-between py-3 border-b border-line"><span className="text-[14px] text-forest">Journal newsletter</span><Toggle on={toggles.newsletter} onClick={t('newsletter')} /></div>
                    <div className="flex items-center justify-between py-3"><span className="text-[14px] text-forest">Personalised offers</span><Toggle on={toggles.offers} onClick={t('offers')} /></div>
                  </Card>
                  <Card>
                    <h3 className="font-serif text-lg text-forest mb-4 flex items-center gap-2"><Globe size={17} className="text-gold-700" /> Language & Currency</h3>
                    <label className="text-[12px] uppercase tracking-wide text-stone">Language</label>
                    <select className="w-full mt-1 mb-4 rounded-lg border border-line px-3 py-2.5 text-[14px] text-forest bg-white"><option>English</option><option>Assamese (অসমীয়া)</option><option>Hindi (हिन्दी)</option><option>Bengali (বাংলা)</option></select>
                    <label className="text-[12px] uppercase tracking-wide text-stone">Currency</label>
                    <select value={currency} onChange={(e) => setCurrency(e.target.value)} className="w-full mt-1 rounded-lg border border-line px-3 py-2.5 text-[14px] text-forest bg-white">
                      {CURRENCIES.map((c) => <option key={c.code} value={c.code}>{c.code} — {c.label}</option>)}
                    </select>
                  </Card>
                </div>
              </Section>
            )}

            {active === 'loyalty' && (
              <Section title="Support & Loyalty" sub="Your rewards, tier and help centre.">
                <Card className="mb-5 bg-gradient-to-br from-forest to-forest-900 text-ivory ring-0">
                  <div className="flex items-center gap-2 text-gold-300"><Award size={20} /> <span className="text-[12px] uppercase tracking-[0.2em]">Artisan Circle · Gold</span></div>
                  <div className="font-serif text-5xl text-ivory mt-3">2,450 <span className="text-xl text-ivory/60">points</span></div>
                  <p className="text-ivory/60 text-[13px] mt-1">550 points to Platinum tier</p>
                  <div className="mt-4 h-2 rounded-full bg-ivory/15 overflow-hidden"><div className="h-full w-[82%] bg-gold" /></div>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <button className="btn btn-gold !py-2.5"><Gift size={15} /> Redeem Points</button>
                    <button className="btn btn-outline !py-2.5">View Rewards</button>
                  </div>
                </Card>
                <Card>
                  <h3 className="font-serif text-lg text-forest mb-4">Help Desk</h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {[{ icon: MessageCircle, t: 'Live Chat', s: 'Avg. reply 2 min' }, { icon: HelpCircle, t: 'FAQs', s: 'Browse answers' }, { icon: Search, t: 'Track an Order', s: 'Enter order ID' }].map((h) => (
                      <button key={h.t} className="flex flex-col items-center text-center gap-2 rounded-lg border border-line p-5 hover:border-gold transition-colors">
                        <h.icon size={22} className="text-gold-700" /><span className="text-[14px] font-medium text-forest">{h.t}</span><span className="text-[12px] text-stone">{h.s}</span>
                      </button>
                    ))}
                  </div>
                </Card>
              </Section>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function Section({ title, sub, children }) {
  return (
    <div>
      <h1 className="font-serif text-3xl text-forest">{title}</h1>
      <p className="text-stone mt-1 mb-6">{sub}</p>
      {children}
    </div>
  )
}

function LabeledInput({ label, ...props }) {
  return (
    <div>
      <label className="text-[12px] uppercase tracking-wide text-stone">{label}</label>
      <input {...props} className="w-full mt-1 rounded-lg border border-line px-3 py-2.5 text-[14px] text-forest bg-white outline-none focus:border-gold" />
    </div>
  )
}
