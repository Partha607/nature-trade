import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import logo from '../../assets/nature_trade_logo.webp'

/* Cinematic welcome on each route entry: the big colour Nature Trade emblem
   sits centred on ivory, then splits down the middle and the two halves loom
   toward the viewer as they swing open, revealing the page.
   Skipped for users who prefer reduced motion. */

const DURATION = 750

export default function DoorIntro() {
  const { pathname } = useLocation()
  const [runId, setRunId] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (typeof window !== 'undefined' &&
        window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(false)
      return
    }
    setRunId((n) => n + 1)
    setVisible(true)
    const t = setTimeout(() => setVisible(false), DURATION)
    return () => clearTimeout(t)
  }, [pathname])

  if (!visible) return null

  return (
    <div key={runId} className="door-intro" style={{ '--logo': `url(${logo})` }} aria-hidden="true">
      <div className="door-intro__halo" />
      <div className="door-intro__panel door-intro__panel--left" />
      <div className="door-intro__panel door-intro__panel--right" />
    </div>
  )
}
