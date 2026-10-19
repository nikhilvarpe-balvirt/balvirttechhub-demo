import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import { siteConfig } from '../../data/siteConfig'
import { useStructuredData } from '../../hooks/useStructuredData'
import { isPlaceholder } from '../../utils/isPlaceholder'

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const origin = typeof window !== 'undefined' ? window.location.origin : ''

  useStructuredData('ld-organization', {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: siteConfig.name,
    description: siteConfig.tagline,
    url: origin,
    ...(!isPlaceholder(siteConfig.phone) && { telephone: siteConfig.phone }),
    ...(!isPlaceholder(siteConfig.email) && { email: siteConfig.email }),
    ...(!isPlaceholder(siteConfig.address) && {
      address: { '@type': 'PostalAddress', streetAddress: siteConfig.address },
    }),
    sameAs: Object.values(siteConfig.social).filter((url) => !isPlaceholder(url)),
  })

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
