import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_NAME = 'Balvirt Tech Hub'

/**
 * Sets the browser tab title, meta description, and canonical URL for the
 * current page. Note: this only affects real browsers (which run JS) —
 * social-share crawlers (WhatsApp/Facebook/LinkedIn) read the static tags
 * in index.html instead, since this is a client-rendered SPA with no
 * server-side rendering.
 */
export function usePageMeta(title, description) {
  const location = useLocation()

  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Learn, Build & Grow`

    if (description) {
      let meta = document.querySelector('meta[name="description"]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.name = 'description'
        document.head.appendChild(meta)
      }
      meta.content = description
    }

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = `${window.location.origin}${location.pathname}`
  }, [title, description, location.pathname])
}
