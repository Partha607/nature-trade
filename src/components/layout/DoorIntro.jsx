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
      <svg className="door-intro__scene" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <defs>
          <radialGradient id="diSky" cx="50%" cy="46%" r="60%">
            <stop offset="0%" stopColor="#fbf7ef" stopOpacity="0.82" />
            <stop offset="52%" stopColor="#f1e7d3" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#f1e7d3" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="diSun" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f7c66c" />
            <stop offset="100%" stopColor="#cf6a22" />
          </linearGradient>
          <linearGradient id="diStream" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fbf8f1" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#e7d9bd" stopOpacity="0.12" />
          </linearGradient>
        </defs>
        <rect width="600" height="400" fill="url(#diSky)" />
        <circle cx="300" cy="72" r="42" fill="url(#diSun)" />
        <path d="M0 300 L120 214 L210 268 L300 184 L392 256 L482 206 L600 300 L600 400 L0 400 Z" fill="#e7dcc4" fillOpacity="0.5" />
        <path d="M0 346 L96 280 L188 328 L300 238 L416 328 L520 282 L600 346 L600 400 L0 400 Z" fill="#cdbf9f" fillOpacity="0.72" />
        <path d="M300 250 C 282 292, 318 308, 300 338 C 285 366, 316 374, 300 400" fill="none" stroke="url(#diStream)" strokeWidth="15" strokeLinecap="round" />
      </svg>
      <div className="door-intro__panel door-intro__panel--left" />
      <div className="door-intro__panel door-intro__panel--right" />
    </div>
  )
}
