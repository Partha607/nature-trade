import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock, ArrowRight } from 'lucide-react'
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

export default function Login() {
  const { login } = useStore()
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const name = form.email ? form.email.split('@')[0].replace(/\./g, ' ') : 'Aarav Sharma'
    login({ name, email: form.email || 'aarav@naturetradestore.in' })
    navigate('/members')
  }

  const demo = () => { login({ name: 'Aarav Sharma', email: 'aarav@naturetradestore.in' }); navigate('/members') }

  return (
    <AuthShell eyebrow="Welcome Back" title="Sign in to your account" image={photo('1646750421466-a04e689254d4', 1400)}>
      <Seo title="Sign In" />
      <p className="mt-3 text-[14px] text-stone">Sign in to continue your journey through the crafts of Northeast India.</p>
      <form onSubmit={submit} className="mt-7 space-y-3.5">
        <Field icon={Mail} type="email" placeholder="Email address" value={form.email} onChange={set('email')} />
        <Field icon={Lock} type="password" placeholder="Password" value={form.password} onChange={set('password')} />
        <div className="flex items-center justify-between text-[12.5px]">
          <label className="flex items-center gap-2 text-stone"><input type="checkbox" className="accent-[#1C2A24]" /> Remember me</label>
          <button type="button" className="text-gold-700 hover:text-brown">Forgot password?</button>
        </div>
        <button type="submit" className="btn btn-gold w-full">Sign In <ArrowRight size={16} /></button>
      </form>

      <button onClick={demo} className="mt-3 w-full text-center text-[12.5px] text-stone hover:text-forest underline underline-offset-4">
        Explore the demo account →
      </button>

      <div className="my-6 flex items-center gap-4 text-[11px] uppercase tracking-[0.16em] text-stone">
        <span className="h-px flex-1 bg-line" /> or continue with <span className="h-px flex-1 bg-line" />
      </div>
      <SocialButtons />

      <p className="mt-7 text-center text-[13.5px] text-stone">
        New to Nature Trade? <Link to="/register" className="text-gold-700 font-medium hover:text-brown">Create an account</Link>
      </p>
    </AuthShell>
  )
}
