import { STATES } from '../../data/states.js'
import { NE_GEO, NE_VIEWBOX } from '../../data/neGeo.js'

/* Geographic, interactive map of the eight Northeast states.
   Shapes are real state boundaries (GADM-derived, projected + simplified —
   see _gen_map.mjs). Two tones:
     • dark  → muted, cinematic gold-on-dark (homepage hero)
     • light → coloured states on a parchment ground (Discover Northeast)
   API unchanged: selected / onSelect / showLabels. */

export default function InteractiveMap({ selected, onSelect, tone = 'dark', showLabels = true, className = '' }) {
  const dark = tone === 'dark'
  const labelInk = dark ? '#F7F2EA' : '#27331f'

  return (
    <svg viewBox={NE_VIEWBOX} className={`w-full h-auto ${className}`} role="img" aria-label="Map of Northeast India">
      <defs>
        <filter id="mapglow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="mapshadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor={dark ? '#000' : '#1c2a24'} floodOpacity={dark ? 0.5 : 0.25} />
        </filter>
      </defs>

      {STATES.map((s) => {
        const g = NE_GEO[s.slug]
        if (!g) return null
        const active = selected === s.slug

        // fill / stroke per tone
        let fill, fillOpacity, stroke, strokeWidth
        if (dark) {
          fill = active ? s.mapColor : '#24322a'
          fillOpacity = active ? 0.92 : 0.9
          stroke = active ? '#F7F2EA' : '#B89B5E'
          strokeWidth = active ? 1.6 : 0.7
        } else {
          fill = s.mapColor
          fillOpacity = active ? 0.96 : 0.72
          stroke = active ? '#B89B5E' : '#F7F2EA'
          strokeWidth = active ? 2 : 1
        }

        return (
          <g
            key={s.slug}
            onMouseEnter={() => onSelect?.(s.slug)}
            onClick={() => onSelect?.(s.slug)}
            className="cursor-pointer transition-all duration-500"
            style={{ transformOrigin: `${g.cx}px ${g.cy}px`, transform: active ? 'scale(1.035)' : 'scale(1)' }}
          >
            <path
              d={g.d}
              fill={fill}
              fillOpacity={fillOpacity}
              stroke={stroke}
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
              filter={active ? 'url(#mapglow)' : (dark ? undefined : 'url(#mapshadow)')}
              className="transition-all duration-500"
            />

            {/* gold location marker — cinematic accent on the dark map */}
            {dark && (
              <circle
                cx={g.cx}
                cy={g.cy}
                r={active ? 4.5 : 2.6}
                fill={active ? '#F7F2EA' : '#B89B5E'}
                opacity={active ? 1 : 0.75}
                filter={active ? 'url(#mapglow)' : undefined}
                style={{ pointerEvents: 'none' }}
                className="transition-all duration-500"
              />
            )}

            {showLabels && (
              <text
                x={g.cx}
                y={dark ? g.cy - 9 : g.cy}
                textAnchor="middle"
                dominantBaseline="middle"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: active ? 12 : 10, fontWeight: 600, letterSpacing: '0.04em', pointerEvents: 'none' }}
                fill={active ? labelInk : (dark ? '#F7F2EA' : '#27331f')}
                opacity={active ? 1 : (dark ? 0.55 : 0.9)}
                className="transition-all duration-500"
              >
                {s.name.split(' ')[0]}
              </text>
            )}
          </g>
        )
      })}
    </svg>
  )
}
