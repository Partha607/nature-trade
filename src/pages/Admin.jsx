import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  LayoutDashboard, ShoppingCart, Package, Users, Megaphone, Settings, Search, Bell, ExternalLink, TrendingUp, TrendingDown,
  IndianRupee, Eye, Repeat, ArrowUpRight, Truck, RotateCcw, Mail, Plus, Tag, Image, Check, X, Star, CreditCard, Percent,
  FileText, ShieldCheck, Boxes, AlertTriangle, MessageSquare, Globe, Puzzle,
} from 'lucide-react'
import { PRODUCTS } from '../data/products.js'
import Seo from '../components/Seo.jsx'

const NAV = [
  { id: 'overview', label: 'Overview & Analytics', icon: LayoutDashboard },
  { id: 'orders', label: 'Orders & Fulfillment', icon: ShoppingCart },
  { id: 'products', label: 'Products & Inventory', icon: Package },
  { id: 'crm', label: 'Customers (CRM)', icon: Users },
  { id: 'marketing', label: 'Marketing & Promotions', icon: Megaphone },
  { id: 'settings', label: 'Settings & Governance', icon: Settings },
]

/* ---------- tiny charts ---------- */
function LineArea({ data, color = '#B89B5E', h = 70 }) {
  const max = Math.max(...data), min = Math.min(...data)
  const w = 240
  const pts = data.map((d, i) => [(i / (data.length - 1)) * w, h - ((d - min) / (max - min || 1)) * (h - 10) - 5])
  const line = pts.map((p) => p.join(',')).join(' ')
  const area = `0,${h} ${line} ${w},${h}`
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full" preserveAspectRatio="none" style={{ height: h }}>
      <polygon points={area} fill={color} opacity="0.12" />
      <polyline points={line} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function BarList({ items }) {
  const max = Math.max(...items.map((i) => i.value))
  return (
    <div className="space-y-3">
      {items.map((it) => (
        <div key={it.label}>
          <div className="flex justify-between text-[12px] text-charcoal/70 mb-1"><span>{it.label}</span><span className="font-medium text-forest">{it.value}%</span></div>
          <div className="h-2 rounded-full bg-ivory-200 overflow-hidden"><div className="h-full rounded-full" style={{ width: `${(it.value / max) * 100}%`, background: it.color || '#1C2A24' }} /></div>
        </div>
      ))}
    </div>
  )
}
function Donut({ value, label }) {
  const r = 42, c = 2 * Math.PI * r
  return (
    <div className="relative h-32 w-32">
      <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
        <circle cx="50" cy="50" r={r} fill="none" stroke="#efe7d8" strokeWidth="10" />
        <circle cx="50" cy="50" r={r} fill="none" stroke="#B89B5E" strokeWidth="10" strokeLinecap="round" strokeDasharray={`${(value / 100) * c} ${c}`} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center"><span className="font-serif text-2xl text-forest">{value}%</span><span className="text-[10px] text-stone">{label}</span></div>
    </div>
  )
}

const KPIS = [
  { label: 'Total Revenue', value: '₹18.42L', delta: '+12.4%', up: true, icon: IndianRupee, spark: [9, 11, 10, 13, 12, 15, 18] },
  { label: 'Net Profit', value: '₹6.18L', delta: '+8.1%', up: true, icon: TrendingUp, spark: [5, 6, 5.5, 6, 6.4, 6, 6.2] },
  { label: 'Conversion Rate', value: '3.8%', delta: '+0.5%', up: true, icon: Repeat, spark: [3, 3.2, 3.1, 3.5, 3.4, 3.7, 3.8] },
  { label: 'Visitors (30d)', value: '48,920', delta: '-2.3%', up: false, icon: Eye, spark: [52, 50, 51, 49, 48, 49, 48] },
]
const ADMIN_ORDERS = [
  { id: 'NT-2041', customer: 'Julius Longjam', items: 2, total: '₹31,800', status: 'Delivered' },
  { id: 'NT-2042', customer: 'Priya Das', items: 1, total: '₹19,200', status: 'Processing' },
  { id: 'NT-2043', customer: 'Lena Müller', items: 3, total: '₹12,400', status: 'In Transit' },
  { id: 'NT-2044', customer: 'James Carter', items: 1, total: '₹6,800', status: 'Pending' },
  { id: 'NT-2045', customer: 'Mei Tanaka', items: 2, total: '₹16,000', status: 'Processing' },
]
const STATUS_TONE = {
  Delivered: 'bg-green-100 text-green-800', Processing: 'bg-amber-100 text-amber-800',
  'In Transit': 'bg-blue-100 text-blue-800', Pending: 'bg-stone-200 text-stone-700', Refunded: 'bg-red-100 text-red-700',
}

export default function Admin() {
  const [active, setActive] = useState('overview')

  return (
    <div className="min-h-screen bg-ivory flex">
      <Seo title="Admin Console" />
      {/* sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-forest-900 text-ivory shrink-0 sticky top-0 h-screen">
        <div className="px-6 py-5 border-b border-ivory/10">
          <p className="font-serif tracking-[0.3em] text-ivory text-lg">NATURE TRADE</p>
          <p className="text-[10px] tracking-[0.25em] uppercase text-gold-300 mt-0.5">Admin Console</p>
        </div>
        <nav className="flex-1 py-4 px-3 space-y-1">
          {NAV.map((n) => (
            <button key={n.id} onClick={() => setActive(n.id)} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] transition-colors ${active === n.id ? 'bg-gold text-white' : 'text-ivory/70 hover:bg-forest-700/60'}`}>
              <n.icon size={17} /> {n.label}
            </button>
          ))}
        </nav>
        <Link to="/" className="m-3 flex items-center gap-2 px-3 py-2.5 rounded-lg text-[13px] text-ivory/60 hover:bg-forest-700/60"><ExternalLink size={15} /> View Store</Link>
      </aside>

      <div className="flex-1 min-w-0">
        {/* topbar */}
        <header className="bg-white border-b border-line sticky top-0 z-20">
          <div className="flex items-center justify-between gap-4 px-5 py-3">
            <div className="flex items-center gap-3">
              <select value={active} onChange={(e) => setActive(e.target.value)} className="lg:hidden border border-line rounded-lg px-2 py-1.5 text-[13px]">
                {NAV.map((n) => <option key={n.id} value={n.id}>{n.label}</option>)}
              </select>
              <div className="hidden md:flex items-center gap-2 bg-ivory-200 rounded-full px-3 py-1.5 w-72"><Search size={15} className="text-stone" /><input placeholder="Search orders, products, customers…" className="bg-transparent text-[13px] outline-none flex-1" /></div>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative text-forest"><Bell size={18} /><span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-gold text-white text-[8px] flex items-center justify-center">5</span></button>
              <Link to="/" className="text-[12px] text-stone hover:text-forest flex items-center gap-1"><ExternalLink size={13} /> Store</Link>
              <div className="flex items-center gap-2"><div className="h-8 w-8 rounded-full bg-forest text-gold-300 flex items-center justify-center text-[12px] font-medium">NT</div><span className="hidden sm:block text-[13px] text-forest">Admin</span></div>
            </div>
          </div>
        </header>

        <main className="p-5 md:p-8">
          {active === 'overview' && <Overview />}
          {active === 'orders' && <Orders />}
          {active === 'products' && <Products />}
          {active === 'crm' && <CRM />}
          {active === 'marketing' && <Marketing />}
          {active === 'settings' && <SettingsView />}
        </main>
      </div>
    </div>
  )
}

function Panel({ title, action, children, className = '' }) {
  return (
    <div className={`bg-white rounded-xl ring-1 ring-line p-5 ${className}`}>
      <div className="flex items-center justify-between mb-4"><h3 className="font-serif text-lg text-forest">{title}</h3>{action}</div>
      {children}
    </div>
  )
}
function H1({ title, sub }) {
  return <div className="mb-6"><h1 className="font-serif text-3xl text-forest">{title}</h1>{sub && <p className="text-stone mt-1">{sub}</p>}</div>
}
function Pill({ status }) {
  return <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${STATUS_TONE[status] || 'bg-ivory-200 text-forest'}`}>{status}</span>
}

/* ---------- OVERVIEW ---------- */
function Overview() {
  return (
    <>
      <H1 title="Overview & Analytics" sub="Real-time performance across your store." />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {KPIS.map((k) => (
          <div key={k.label} className="bg-white rounded-xl ring-1 ring-line p-5">
            <div className="flex items-center justify-between"><k.icon size={18} className="text-gold-700" /><span className={`text-[12px] font-medium flex items-center gap-0.5 ${k.up ? 'text-green-600' : 'text-red-500'}`}>{k.up ? <TrendingUp size={13} /> : <TrendingDown size={13} />}{k.delta}</span></div>
            <div className="font-serif text-3xl text-forest mt-3">{k.value}</div>
            <div className="text-[12px] text-stone">{k.label}</div>
            <div className="mt-2"><LineArea data={k.spark} h={36} /></div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-5 mt-5">
        <Panel title="Revenue Trend" className="lg:col-span-2" action={<span className="text-[12px] text-stone">Last 7 months</span>}>
          <LineArea data={[120, 145, 132, 168, 152, 184, 210]} h={140} />
          <div className="flex justify-between text-[11px] text-stone mt-2"><span>Nov</span><span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span></div>
        </Panel>
        <Panel title="Customer Insights">
          <div className="flex items-center justify-around">
            <Donut value={62} label="Returning" />
          </div>
          <div className="mt-4 space-y-2 text-[13px]">
            <div className="flex justify-between"><span className="text-stone">New customers</span><span className="text-forest font-medium">38%</span></div>
            <div className="flex justify-between"><span className="text-stone">Avg. Lifetime Value</span><span className="text-forest font-medium">₹14,200</span></div>
            <div className="flex justify-between"><span className="text-stone">Repeat purchase rate</span><span className="text-forest font-medium">41%</span></div>
          </div>
        </Panel>
      </div>

      <div className="grid lg:grid-cols-2 gap-5 mt-5">
        <Panel title="Traffic Sources">
          <BarList items={[
            { label: 'Organic Search', value: 42, color: '#1C2A24' },
            { label: 'Direct', value: 26, color: '#4A3428' },
            { label: 'Social', value: 19, color: '#B89B5E' },
            { label: 'Referral', value: 13, color: '#8a8275' },
          ]} />
          <div className="mt-4 pt-3 border-t border-line flex justify-between text-[13px]"><span className="text-stone">Page views (30d)</span><span className="text-forest font-medium">186,540</span></div>
        </Panel>
        <Panel title="Top Products" action={<span className="text-[12px] text-stone">By revenue</span>}>
          <table className="w-full text-[13px]">
            <tbody>
              {PRODUCTS.slice(0, 5).map((p, i) => (
                <tr key={p.id} className="border-b border-line last:border-0">
                  <td className="py-2.5 flex items-center gap-2.5"><img src={p.images[0]} alt="" className="h-9 w-9 rounded object-cover" /><span className="text-forest truncate max-w-[160px]">{p.name}</span></td>
                  <td className="text-right text-stone">{120 - i * 18} sold</td>
                  <td className="text-right text-forest font-medium pl-3">₹{((p.priceINR * (120 - i * 18)) / 100000).toFixed(1)}L</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Panel>
      </div>

      <Panel title="Recent Order Queue" className="mt-5" action={<span className="text-[12px] text-gold-700">View all</span>}>
        <OrderTable rows={ADMIN_ORDERS} />
      </Panel>
    </>
  )
}

function OrderTable({ rows }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-[13px]">
        <thead><tr className="text-left text-[11px] uppercase tracking-wide text-stone border-b border-line">
          <th className="py-2 font-medium">Order</th><th className="py-2 font-medium">Customer</th><th className="py-2 font-medium">Items</th><th className="py-2 font-medium">Total</th><th className="py-2 font-medium">Status</th><th className="py-2 font-medium text-right">Action</th>
        </tr></thead>
        <tbody>
          {rows.map((o) => (
            <tr key={o.id} className="border-b border-line last:border-0">
              <td className="py-3 font-medium text-forest">{o.id}</td>
              <td className="py-3 text-charcoal/80">{o.customer}</td>
              <td className="py-3 text-stone">{o.items}</td>
              <td className="py-3 text-forest">{o.total}</td>
              <td className="py-3"><Pill status={o.status} /></td>
              <td className="py-3 text-right"><button className="text-gold-700 inline-flex items-center gap-1 text-[12px]">Manage <ArrowUpRight size={13} /></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ---------- ORDERS ---------- */
function Orders() {
  return (
    <>
      <H1 title="Order & Fulfillment Management" sub="Process orders, print labels, handle returns and recover carts." />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
        {[['Pending', 18], ['Processing', 24], ['Shipped', 56], ['Returns', 4]].map(([l, v]) => (
          <div key={l} className="bg-white rounded-xl ring-1 ring-line p-4"><div className="font-serif text-3xl text-forest">{v}</div><div className="text-[12px] text-stone">{l}</div></div>
        ))}
      </div>
      <Panel title="Order Queue" action={<button className="btn btn-dark !py-2 !px-4 !text-[11px]"><Truck size={13} /> Bulk Print Labels</button>}>
        <OrderTable rows={[...ADMIN_ORDERS, { id: 'NT-2046', customer: 'Sofia Rossi', items: 1, total: '₹28,500', status: 'Pending' }]} />
      </Panel>
      <div className="grid lg:grid-cols-2 gap-5 mt-5">
        <Panel title="Returns Desk">
          <div className="space-y-3">
            {[['NT-1990', 'Damaged in transit', 'Approve'], ['NT-1984', 'Size exchange', 'Approve'], ['NT-1977', 'Changed mind', 'Review']].map(([id, reason, act]) => (
              <div key={id} className="flex items-center justify-between border-b border-line pb-3 last:border-0">
                <div><p className="text-[13px] font-medium text-forest">{id}</p><p className="text-[12px] text-stone">{reason}</p></div>
                <div className="flex gap-2"><button className="text-[11px] bg-green-600 text-white rounded-full px-3 py-1.5 flex items-center gap-1"><Check size={12} />{act}</button><button className="text-[11px] border border-line rounded-full px-3 py-1.5 text-stone">Deny</button></div>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="Abandoned Carts" action={<span className="text-[12px] text-stone">₹2.4L recoverable</span>}>
          <div className="space-y-3">
            {[['rahul@…', '₹19,200', '2h ago'], ['anna@…', '₹6,800', '5h ago'], ['ken@…', '₹31,800', '1d ago']].map(([e, v, t]) => (
              <div key={e} className="flex items-center justify-between border-b border-line pb-3 last:border-0">
                <div><p className="text-[13px] text-forest">{e}</p><p className="text-[12px] text-stone">{v} · {t}</p></div>
                <button className="text-[11px] text-gold-700 border border-line rounded-full px-3 py-1.5 flex items-center gap-1"><Mail size={12} /> Recover</button>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </>
  )
}

/* ---------- PRODUCTS ---------- */
function Products() {
  return (
    <>
      <H1 title="Product & Inventory Control" sub="Manage your catalogue, stock, categories and media." />
      <div className="flex flex-wrap gap-3 mb-5">
        <button className="btn btn-dark !py-2 !px-4 !text-[11px]"><Plus size={13} /> Add Product</button>
        <div className="flex items-center gap-2 bg-amber-50 text-amber-800 rounded-lg px-3 py-2 text-[12px]"><AlertTriangle size={14} /> 3 products low on stock</div>
      </div>
      <Panel title="Catalogue">
        <div className="overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead><tr className="text-left text-[11px] uppercase tracking-wide text-stone border-b border-line">
              <th className="py-2 font-medium">Product</th><th className="py-2 font-medium">Category</th><th className="py-2 font-medium">Price</th><th className="py-2 font-medium">Stock</th><th className="py-2 font-medium">Status</th><th className="py-2 font-medium text-right">Actions</th>
            </tr></thead>
            <tbody>
              {PRODUCTS.slice(0, 8).map((p, i) => {
                const stock = [42, 8, 30, 5, 18, 24, 2, 36][i]
                return (
                  <tr key={p.id} className="border-b border-line last:border-0">
                    <td className="py-2.5 flex items-center gap-2.5"><img src={p.images[0]} alt="" className="h-9 w-9 rounded object-cover" /><span className="text-forest truncate max-w-[180px]">{p.name}</span></td>
                    <td className="py-2.5 text-stone">{p.category}</td>
                    <td className="py-2.5 text-forest">₹{p.priceINR.toLocaleString('en-IN')}</td>
                    <td className={`py-2.5 font-medium ${stock <= 8 ? 'text-red-600' : 'text-forest'}`}>{stock}</td>
                    <td className="py-2.5"><Pill status={stock <= 8 ? 'Pending' : 'Delivered'} /></td>
                    <td className="py-2.5 text-right text-stone"><button className="hover:text-gold-700 mr-2">Edit</button><button className="hover:text-red-600">Delete</button></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </Panel>
      <div className="grid lg:grid-cols-2 gap-5 mt-5">
        <Panel title="Categories & Tags" action={<button className="link-cta"><Plus size={13} /> Add</button>}>
          <div className="flex flex-wrap gap-2">
            {['Textiles', 'Silk', 'Pottery', 'Jewellery', 'Bamboo & Cane', 'Home Decor', 'Bestseller', 'New Arrival', 'GI Certified'].map((c) => (
              <span key={c} className="flex items-center gap-1.5 text-[12px] bg-ivory-200 text-forest rounded-full px-3 py-1.5"><Tag size={12} className="text-gold-700" />{c}</span>
            ))}
          </div>
        </Panel>
        <Panel title="Digital Assets" action={<span className="text-[12px] text-stone">Media library</span>}>
          <div className="grid grid-cols-5 gap-2">
            {PRODUCTS.slice(0, 10).map((p) => <img key={p.id} src={p.images[0]} alt="" className="ratio-square object-cover rounded-md w-full" />)}
          </div>
        </Panel>
      </div>
    </>
  )
}

/* ---------- CRM ---------- */
function CRM() {
  const customers = [
    ['Julius Longjam', 'Julius@…', 12, '₹1,84,200', 'Gold'],
    ['Priya Das', 'priya@…', 7, '₹96,400', 'Silver'],
    ['Lena Müller', 'lena@…', 4, '₹52,800', 'Silver'],
    ['James Carter', 'james@…', 2, '₹18,600', 'Bronze'],
    ['Mei Tanaka', 'mei@…', 9, '₹1,12,000', 'Gold'],
  ]
  return (
    <>
      <H1 title="Customer Relationship Management" sub="Profiles, segments, support and reviews." />
      <Panel title="Customer Directory" action={<div className="flex items-center gap-2 bg-ivory-200 rounded-full px-3 py-1.5 text-[12px]"><Search size={13} className="text-stone" />Search</div>}>
        <div className="overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead><tr className="text-left text-[11px] uppercase tracking-wide text-stone border-b border-line">
              <th className="py-2 font-medium">Customer</th><th className="py-2 font-medium">Email</th><th className="py-2 font-medium">Orders</th><th className="py-2 font-medium">Spend</th><th className="py-2 font-medium">Tier</th>
            </tr></thead>
            <tbody>
              {customers.map((c) => (
                <tr key={c[0]} className="border-b border-line last:border-0">
                  <td className="py-3 font-medium text-forest">{c[0]}</td><td className="py-3 text-stone">{c[1]}</td><td className="py-3 text-charcoal/80">{c[2]}</td><td className="py-3 text-forest">{c[3]}</td>
                  <td className="py-3"><span className="text-[11px] bg-gradient-to-r from-[#b89b5e] to-[#997f48] text-white px-2.5 py-1 rounded-full">{c[4]}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
      <div className="grid lg:grid-cols-2 gap-5 mt-5">
        <Panel title="Segment Builder">
          <p className="text-[13px] text-stone mb-3">Group customers by behaviour and spend.</p>
          <div className="space-y-2">
            {[['High spenders', '> ₹1L lifetime', 142], ['International', 'Outside India', 318], ['At risk', 'No order in 90d', 87], ['Newsletter', 'Subscribed', 2940]].map(([n, r, c]) => (
              <div key={n} className="flex items-center justify-between rounded-lg border border-line px-3 py-2.5"><div><p className="text-[13px] font-medium text-forest">{n}</p><p className="text-[11px] text-stone">{r}</p></div><span className="text-[13px] text-forest font-medium">{c}</span></div>
            ))}
          </div>
        </Panel>
        <Panel title="Review Moderation">
          <div className="space-y-3">
            {[['Muga Mekhela', 5, 'Stunning craftsmanship!'], ['Black Pottery', 4, 'Beautiful but arrived late.']].map(([p, r, txt]) => (
              <div key={p} className="border border-line rounded-lg p-3">
                <div className="flex items-center gap-2"><span className="flex">{[1, 2, 3, 4, 5].map((i) => <Star key={i} size={11} className={i <= r ? 'fill-gold text-gold' : 'text-stone-light'} />)}</span><span className="text-[12px] font-medium text-forest">{p}</span></div>
                <p className="text-[12px] text-stone mt-1">{txt}</p>
                <div className="flex gap-2 mt-2"><button className="text-[11px] bg-green-600 text-white rounded-full px-3 py-1 flex items-center gap-1"><Check size={11} /> Approve</button><button className="text-[11px] border border-line rounded-full px-3 py-1 text-stone flex items-center gap-1"><X size={11} /> Reject</button></div>
              </div>
            ))}
          </div>
        </Panel>
      </div>
      <Panel title="Support Tickets" className="mt-5">
        <div className="space-y-2">
          {[['#4821', 'Where is my order NT-2042?', 'Open', 'MessageSquare'], ['#4818', 'Request gift wrapping', 'Pending', 'MessageSquare'], ['#4810', 'Bulk order enquiry', 'Resolved', 'MessageSquare']].map(([id, q, s]) => (
            <div key={id} className="flex items-center justify-between rounded-lg border border-line px-3 py-2.5">
              <div className="flex items-center gap-3"><MessageSquare size={15} className="text-gold-700" /><div><p className="text-[13px] text-forest">{q}</p><p className="text-[11px] text-stone">{id}</p></div></div>
              <Pill status={s === 'Resolved' ? 'Delivered' : s === 'Open' ? 'Pending' : 'Processing'} />
            </div>
          ))}
        </div>
      </Panel>
    </>
  )
}

/* ---------- MARKETING ---------- */
function Marketing() {
  return (
    <>
      <H1 title="Marketing & Promotions" sub="Discounts, campaigns, SEO and content." />
      <div className="grid lg:grid-cols-2 gap-5">
        <Panel title="Discount Codes" action={<button className="btn btn-dark !py-2 !px-4 !text-[11px]"><Plus size={13} /> Create</button>}>
          <div className="space-y-2">
            {[['WELCOME10', '10% off first order', 'Active'], ['MUGA15', '15% off silk', 'Active'], ['DIWALI25', '25% festive sale', 'Scheduled']].map(([code, d, s]) => (
              <div key={code} className="flex items-center justify-between rounded-lg border border-line px-3 py-2.5">
                <div className="flex items-center gap-2"><Percent size={14} className="text-gold-700" /><div><p className="text-[13px] font-medium text-forest">{code}</p><p className="text-[11px] text-stone">{d}</p></div></div>
                <Pill status={s === 'Active' ? 'Delivered' : 'Processing'} />
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="Campaign Manager">
          <div className="space-y-3">
            {[['Spring Festival Newsletter', 'Email · 12,400 sent', '32% open'], ['New Arrival SMS', 'SMS · 3,200 sent', '18% CTR'], ['Loyalty Reminder', 'Email · scheduled', '—']].map(([n, ch, m]) => (
              <div key={n} className="flex items-center justify-between border-b border-line pb-3 last:border-0"><div><p className="text-[13px] font-medium text-forest">{n}</p><p className="text-[11px] text-stone">{ch}</p></div><span className="text-[12px] text-gold-700">{m}</span></div>
            ))}
          </div>
        </Panel>
        <Panel title="SEO Settings">
          <label className="text-[11px] uppercase tracking-wide text-stone">Homepage title</label>
          <input defaultValue="Nature Trade — Crafted by Tradition. Rooted in Nature." className="w-full mt-1 mb-3 rounded-lg border border-line px-3 py-2 text-[13px] outline-none focus:border-gold" />
          <label className="text-[11px] uppercase tracking-wide text-stone">Meta description</label>
          <textarea rows={2} defaultValue="Handwoven textiles & handicrafts from the eight states of Northeast India." className="w-full mt-1 rounded-lg border border-line px-3 py-2 text-[13px] outline-none focus:border-gold resize-none" />
        </Panel>
        <Panel title="Content Management" action={<button className="link-cta"><Plus size={13} /> New Post</button>}>
          <div className="space-y-2">
            {[['Threads of Identity: Nagaland', 'Published'], ['Bamboo: Green Gold of Mizoram', 'Published'], ['Black Pottery of Manipur', 'Draft']].map(([t, s]) => (
              <div key={t} className="flex items-center justify-between rounded-lg border border-line px-3 py-2.5"><div className="flex items-center gap-2"><FileText size={14} className="text-gold-700" /><span className="text-[13px] text-forest">{t}</span></div><Pill status={s === 'Published' ? 'Delivered' : 'Pending'} /></div>
            ))}
          </div>
        </Panel>
      </div>
    </>
  )
}

/* ---------- SETTINGS ---------- */
function SettingsView() {
  const [g, setG] = useState({ stripe: true, paypal: true, razorpay: true, cod: false })
  const Toggle = ({ on, onClick }) => <button onClick={onClick} className={`h-6 w-11 rounded-full relative transition-colors ${on ? 'bg-forest' : 'bg-stone-light'}`}><span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-all ${on ? 'left-[22px]' : 'left-0.5'}`} /></button>
  return (
    <>
      <H1 title="Store Settings & Governance" sub="Payments, tax, staff and integrations." />
      <div className="grid lg:grid-cols-2 gap-5">
        <Panel title="Payment Gateways">
          <div className="space-y-3">
            {[['stripe', 'Stripe', 'Cards, wallets'], ['paypal', 'PayPal', 'Global'], ['razorpay', 'Razorpay', 'India · UPI'], ['cod', 'Cash on Delivery', 'Domestic only']].map(([k, n, d]) => (
              <div key={k} className="flex items-center justify-between"><div className="flex items-center gap-2"><CreditCard size={15} className="text-gold-700" /><div><p className="text-[13px] text-forest">{n}</p><p className="text-[11px] text-stone">{d}</p></div></div><Toggle on={g[k]} onClick={() => setG((p) => ({ ...p, [k]: !p[k] }))} /></div>
            ))}
          </div>
        </Panel>
        <Panel title="Tax & Shipping">
          <div className="space-y-2.5 text-[13px]">
            {[['GST (India)', '5% — auto'], ['International VAT', 'At checkout'], ['Domestic shipping', '₹80 flat'], ['Free shipping', 'Orders > $200'], ['Worldwide', '7–14 days']].map(([k, v]) => (
              <div key={k} className="flex justify-between border-b border-line pb-2 last:border-0"><span className="text-stone">{k}</span><span className="text-forest font-medium">{v}</span></div>
            ))}
          </div>
        </Panel>
        <Panel title="Staff Permissions" action={<button className="link-cta"><Plus size={13} /> Invite</button>}>
          <div className="space-y-2">
            {[['Partha B.', 'Owner', ShieldCheck], ['Nayan D.', 'Manager', Users], ['Riya K.', 'Fulfilment', Boxes], ['Sam T.', 'Content', FileText]].map(([n, r, Icon]) => (
              <div key={n} className="flex items-center justify-between rounded-lg border border-line px-3 py-2.5"><div className="flex items-center gap-2"><Icon size={15} className="text-gold-700" /><span className="text-[13px] text-forest">{n}</span></div><span className="text-[12px] text-stone">{r}</span></div>
            ))}
          </div>
        </Panel>
        <Panel title="App Store / Integrations">
          <div className="grid grid-cols-2 gap-3">
            {[['Mailchimp', Mail], ['Google Analytics', Globe], ['Shiprocket', Truck], ['Razorpay', CreditCard]].map(([n, Icon]) => (
              <div key={n} className="flex items-center justify-between rounded-lg border border-line px-3 py-2.5"><span className="flex items-center gap-2 text-[13px] text-forest"><Icon size={15} className="text-gold-700" />{n}</span><Check size={15} className="text-green-600" /></div>
            ))}
          </div>
        </Panel>
      </div>
    </>
  )
}
