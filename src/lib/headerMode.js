/* Per-route header presentation. */
export const OVERLAY_ROUTES = ['/', '/northeast', '/artisans', '/journal']

export function getHeaderMode(pathname) {
  if (OVERLAY_ROUTES.includes(pathname)) return 'overlay' // transparent over a dark hero
  if (pathname === '/shop') return 'dark' // always solid forest
  return 'light' // solid ivory
}
