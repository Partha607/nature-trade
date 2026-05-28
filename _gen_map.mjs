import fs from 'node:fs'

const raw = JSON.parse(fs.readFileSync('_geo_raw.json', 'utf8'))

const WANT = {
  'Arunachal Pradesh': 'arunachal-pradesh',
  'Assam': 'assam',
  'Manipur': 'manipur',
  'Meghalaya': 'meghalaya',
  'Mizoram': 'mizoram',
  'Nagaland': 'nagaland',
  'Sikkim': 'sikkim',
  'Tripura': 'tripura',
}

// states[slug] = array of outer rings; each ring = array of [lon,lat]
const states = {}
for (const f of raw.features) {
  const slug = WANT[f.properties.NAME_1]
  if (!slug) continue
  const geom = f.geometry
  const polys = geom.type === 'Polygon' ? [geom.coordinates] : geom.coordinates
  states[slug] = polys.map((poly) => poly[0])
}

// shared lon/lat bbox
let minLon = Infinity, maxLon = -Infinity, minLat = Infinity, maxLat = -Infinity
for (const rings of Object.values(states))
  for (const ring of rings)
    for (const p of ring) {
      const lon = p[0], lat = p[1]
      if (lon < minLon) minLon = lon
      if (lon > maxLon) maxLon = lon
      if (lat < minLat) minLat = lat
      if (lat > maxLat) maxLat = lat
    }

const meanLat = ((minLat + maxLat) / 2) * Math.PI / 180
const k = Math.cos(meanLat)
const pxMin = minLon * k, pxMax = maxLon * k
const pyMin = minLat, pyMax = maxLat

const W = 620, H = 500, PAD = 28
const scale = Math.min((W - 2 * PAD) / (pxMax - pxMin), (H - 2 * PAD) / (pyMax - pyMin))
const offX = (W - (pxMax - pxMin) * scale) / 2
const offY = (H - (pyMax - pyMin) * scale) / 2
const project = (p) => [
  offX + (p[0] * k - pxMin) * scale,
  H - offY - (p[1] - pyMin) * scale, // flip Y so north is up
]

console.log('bbox lon', minLon.toFixed(2), maxLon.toFixed(2), 'lat', minLat.toFixed(2), maxLat.toFixed(2), '| scale', scale.toFixed(2))

// Ramer-Douglas-Peucker
function rdp(pts, eps) {
  if (pts.length < 3) return pts
  const a = pts[0], b = pts[pts.length - 1]
  const dx = b[0] - a[0], dy = b[1] - a[1]
  const len = Math.hypot(dx, dy) || 1
  let dmax = 0, idx = 0
  for (let i = 1; i < pts.length - 1; i++) {
    const x = pts[i][0], y = pts[i][1]
    const d = Math.abs((x - a[0]) * dy - (y - a[1]) * dx) / len
    if (d > dmax) { dmax = d; idx = i }
  }
  if (dmax > eps) return rdp(pts.slice(0, idx + 1), eps).slice(0, -1).concat(rdp(pts.slice(idx), eps))
  return [a, b]
}

// Simplify a CLOSED ring (RDP needs a non-degenerate baseline, so split at extremes)
function simplifyRing(ring, eps) {
  let r = ring.slice()
  if (r.length > 1 && r[0][0] === r[r.length - 1][0] && r[0][1] === r[r.length - 1][1]) r.pop()
  if (r.length < 4) return r
  let far = 0, fd = -1
  for (let i = 1; i < r.length; i++) {
    const d = (r[i][0] - r[0][0]) ** 2 + (r[i][1] - r[0][1]) ** 2
    if (d > fd) { fd = d; far = i }
  }
  const s1 = rdp(r.slice(0, far + 1), eps)
  const s2 = rdp(r.slice(far).concat([r[0]]), eps)
  return s1.slice(0, -1).concat(s2.slice(0, -1))
}

function signedArea(ring) {
  let s = 0
  for (let i = 0, n = ring.length; i < n; i++) {
    const a = ring[i], b = ring[(i + 1) % n]
    s += a[0] * b[1] - b[0] * a[1]
  }
  return s / 2
}

function centroid(ring) {
  let a = 0, cx = 0, cy = 0
  for (let i = 0, n = ring.length; i < n; i++) {
    const p = ring[i], q = ring[(i + 1) % n]
    const f = p[0] * q[1] - q[0] * p[1]
    a += f; cx += (p[0] + q[0]) * f; cy += (p[1] + q[1]) * f
  }
  a *= 0.5
  return [cx / (6 * a), cy / (6 * a)]
}

const r1 = (n) => Math.round(n * 10) / 10
const out = {}
for (const [slug, rings] of Object.entries(states)) {
  const projected = rings.map((r) => simplifyRing(r.map(project), 0.7))
  const areas = projected.map((r) => Math.abs(signedArea(r)))
  const maxA = Math.max(...areas)
  // keep significant parts only
  const kept = projected.filter((_, i) => areas[i] >= maxA * 0.02)
  const d = kept.map((ring) => 'M' + ring.map((p) => `${r1(p[0])} ${r1(p[1])}`).join('L') + 'Z').join('')
  const biggest = projected[areas.indexOf(maxA)]
  const [cx, cy] = centroid(biggest)
  out[slug] = { d, cx: r1(cx), cy: r1(cy), parts: kept.length }
}

for (const [slug, v] of Object.entries(out)) {
  const pts = (v.d.match(/[ML]/g) || []).length
  console.log(slug.padEnd(20), 'pts=' + String(pts).padEnd(4), 'parts=' + v.parts, 'centroid=', v.cx, v.cy)
  delete v.parts
}
fs.writeFileSync('_geo_paths.json', JSON.stringify(out))
console.log('wrote _geo_paths.json  (viewBox 0 0', W, H + ')')
