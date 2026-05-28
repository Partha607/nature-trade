import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { User, Mail, Lock, ArrowRight } from 'lucide-react'
import AuthShell, { SocialButtons } from '../components/ui/AuthShell.jsx'
import { useStore } from '../context/StoreContext.jsx'
import { photo } from '../data/images.js'
import Seo from '../components/Seo.jsx'

function Field({ icon: Icon, ...props }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-line bg-white px-4 focus-within:border-gold transition-colors">
      <Icon size={17} className="text-stone shrink-0" />
      <input {...props} className="flex-1 bg-transparent py-3 text-[14px] text-forest placeholder:text-stone-light outline-none" />
    </div>
  )
}

export default function Register() {
  const { login } = useStore()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    login({ name: form.name || 'Member', email: form.email || 'member@naturetradestore.in' })
    navigate('/members')
  }

  return (
    <AuthShell eyebrow="Join Nature Trade" title="Create your account" image={photo('1569909115134-a0426936c879', 1400)}>
      <Seo title="Create Account" />
      <p className="mt-3 text-[14px] text-stone">Become a member to shop, save your wishlist, track orders and earn loyalty rewards.</p>
      <form onSubmit={submit} className="mt-7 space-y-3.5">
        <Field icon={User} type="text" placeholder="Full name" value={form.name} onChange={set('name')} />
        <Field icon={Mail} type="email" placeholder="Email address" value={form.email} onChange={set('email')} />
        <Field icon={Lock} type="password" placeholder="Create a password" value={form.password} onChange={set('password')} />
        <label className="flex items-start gap-2.5 text-[12.5px] text-stone pt-1">
          <input type="checkbox" defaultChecked className="mt-0.5 accent-[#1C2A24]" />
          <span>I agree to the Terms of Service and Privacy Policy, and to receive the Nature Trade journal.</span>
        </label>
        <button type="submit" className="btn btn-gold w-full">Create Account <ArrowRight size={16} /></button>
      </form>

      <div className="my-6 flex items-center gap-4 text-[11px] uppercase tracking-[0.16em] text-stone">
        <span className="h-px flex-1 bg-line" /> or continue with <span className="h-px flex-1 bg-line" />
      </div>
      <SocialButtons />

      <p className="mt-7 text-center text-[13.5px] text-stone">
        Already have an account? <Link to="/login" className="text-gold-700 font-medium hover:text-brown">Sign in</Link>
      </p>
    </AuthShell>
  )
}
