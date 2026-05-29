import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
// colour logo for the intro
import logo from '../../assets/nature_trade_logo.webp'

/* Cinematic welcome: on each route entry an ivory overlay shows the Nature
   Trade emblem with a top→bottom gold light-sweep ("loading"), then splits
   down the middle and swings open like double doors to reveal the page.
   Skipped for users who prefer reduced motion. */

const DURATION = 1800

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
      <div className="door-intro__scrim" />
      <svg className="door-intro__scene" viewBox="0 0 600 420" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <defs>
          <linearGradient id="diSun" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f3bd5f" />
            <stop offset="100%" stopColor="#c5531b" />
          </linearGradient>
          <linearGradient id="diMtn" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f8f2e6" />
            <stop offset="100%" stopColor="#e7d9bf" />
          </linearGradient>
          <linearGradient id="diStream" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c9a85f" stopOpacity="0" />
            <stop offset="45%" stopColor="#c4a052" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#b68d42" stopOpacity="0" />
          </linearGradient>
        </defs>
        <circle cx="300" cy="60" r="36" fill="url(#diSun)" />
        <path d="M0 350 L80 285 L150 250 L215 195 L300 152 L385 195 L450 250 L520 285 L600 350 L600 420 L0 420 Z" fill="url(#diMtn)" />
        <path d="M300 165 C 288 235, 314 272, 300 322 C 289 356, 312 374, 300 420" fill="none" stroke="url(#diStream)" strokeWidth="13" strokeLinecap="round" />
      </svg>
      <div className="door-intro__panel door-intro__panel--left" />
      <div className="door-intro__panel door-intro__panel--right" />
    </div>
  )
}
