import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks, siteConfig } from '../../data/siteConfig'
import Button from '../shared/Button'
//import logo from '../../assets/images/s1.png'
import logo from '../../assets/images/bthlogo.webp'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-shadow before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-gradient-to-r before:from-accent-500 before:to-cyan-400 ${
        scrolled ? 'border-slate-200 shadow-sm' : 'border-transparent'
      }`}
    >
      <nav
        className={`relative mx-auto flex max-w-7xl items-center justify-between px-4 transition-[height] duration-300 sm:px-6 lg:px-8 ${
          scrolled ? 'h-16' : 'h-20'
        }`}
      >
        <NavLink to="/" className="flex h-full items-center py-2">
          <motion.img
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            src={logo}
            alt={siteConfig.name}
            className="h-full w-auto object-contain"
          />
        </NavLink>

        <div className="hidden items-center gap-1 rounded-full bg-slate-100/80 p-1.5 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className="relative px-4 py-2 text-sm font-medium">
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-white shadow-sm ring-1 ring-black/5"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors ${
                      isActive
                        ? 'text-brand-950'
                        : 'text-slate-500 hover:text-brand-900'
                    }`}
                  >
                    {link.label}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:block">
          <Button to="/enroll" className="!px-5 !py-2.5 text-sm">
            Enquire Now
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden text-brand-950"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-slate-200 bg-white md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 pb-4 pt-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      isActive ? 'bg-accent-50 text-accent-700' : 'text-slate-600 hover:bg-slate-50 hover:text-brand-900'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Button to="/enroll" onClick={() => setOpen(false)} className="mt-3 w-full">
                Enquire Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
