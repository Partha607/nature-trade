import { useEffect } from 'react'
import { NEDF } from '../data/images.js'

/* Dependency-free document-head manager for this SPA.
   Sets <title>, description, Open Graph / Twitter tags and optional
   JSON-LD per route. (HashRouter is client-rendered, so this is for
   browser tabs, link-sharing previews and crawlers that run JS.) */

const SITE = 'Nature Trade'
const BASE_DESC =
  'Crafted by Tradition. Rooted in Nature. Handwoven textiles, handicrafts and heritage from the eight states of Northeast India — an ethical, sustainable initiative under the North East Development Forum (NEDF).'

function upsert(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export default function Seo({ title, description = BASE_DESC, image, jsonLd }) {
  const fullTitle = title ? `${title} · ${SITE}` : `${SITE} — Crafted by Tradition. Rooted in Nature.`
  useEffect(() => {
    document.title = fullTitle
    const origin = window.location.origin + import.meta.env.BASE_URL
    const ogImage = (image || NEDF.roots.assam).replace(import.meta.env.BASE_URL, origin)

    upsert('name', 'description', description)
    upsert('property', 'og:site_name', SITE)
    upsert('property', 'og:title', fullTitle)
    upsert('property', 'og:description', description)
    upsert('property', 'og:type', 'website')
    upsert('property', 'og:url', window.location.href)
    upsert('property', 'og:image', ogImage)
    upsert('name', 'twitter:card', 'summary_large_image')
    upsert('name', 'twitter:title', fullTitle)
    upsert('name', 'twitter:description', description)
    upsert('name', 'twitter:image', ogImage)

    let script
    if (jsonLd) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.text = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }
    return () => { if (script) script.remove() }
  }, [fullTitle, description, image, jsonLd])

  return null
}
