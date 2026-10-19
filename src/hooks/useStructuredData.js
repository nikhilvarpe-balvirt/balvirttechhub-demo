import { useEffect } from 'react'

/**
 * Injects a JSON-LD <script> tag into <head> for Schema.org structured data
 * (enables rich results — FAQ dropdowns, course cards, business info panels
 * in Google search). Removed on unmount so page-specific schema doesn't
 * linger after navigating away.
 */
export function useStructuredData(id, data) {
  useEffect(() => {
    if (!data) return undefined

    let script = document.getElementById(id)
    const isNew = !script
    if (isNew) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = id
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(data)

    return () => {
      script?.remove()
    }
  }, [id, data])
}
