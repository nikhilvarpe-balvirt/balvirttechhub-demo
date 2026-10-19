import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { siteConfig, navLinks } from '../../data/siteConfig'
import { courses } from '../../data/courses'
import { LinkedinIcon, InstagramIcon, YoutubeIcon } from '../shared/SocialIcons'
import Reveal from '../shared/Reveal'
//import logo from '../../assets/images/s1.png'
import logo from '../../assets/images/bthlogo.webp'

const socials = [
  { Icon: LinkedinIcon, href: 'linkedin' },
  { Icon: InstagramIcon, href: 'instagram' },
  { Icon: YoutubeIcon, href: 'youtube' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-accent-950 text-brand-100">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-cyan-600/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Link to="/" className="inline-flex items-center rounded-xl bg-white p-2 shadow-md">
                <img src={logo} alt={siteConfig.name} className="h-8 w-auto" loading="lazy" />
              </Link>
              <p className="mt-4 max-w-xs text-sm text-brand-300">{siteConfig.tagline}</p>

              <div className="mt-6 flex gap-3">
                {socials.map(({ Icon, href }) => (
                  <motion.a
                    key={href}
                    whileHover={{ y: -3 }}
                    href={siteConfig.social[href]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10 transition-colors hover:bg-cyan-500"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                {navLinks.filter((link) => link.to !== '/courses').map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="group inline-flex items-center gap-1 text-brand-300 transition-colors hover:text-white">
                      {link.label}
                      <ArrowRight size={14} className="-translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Programs</h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <Link to="/courses" className="group inline-flex items-center gap-1 font-medium text-white transition-colors hover:text-accent-300">
                    All Courses
                    <ArrowRight size={14} className="-translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
                {courses.map((course) => (
                  <li key={course.slug}>
                    <Link
                      to={`/courses/${course.slug}`}
                      className="group inline-flex items-center gap-1 text-brand-300 transition-colors hover:text-white"
                    >
                      {course.shortName}
                      <ArrowRight size={14} className="-translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
              <ul className="mt-4 space-y-3.5 text-sm">
                <li className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/10">
                    <Phone size={15} />
                  </span>
                  <a href={`tel:${siteConfig.phone}`} className="text-brand-300 transition-colors hover:text-white">
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/10">
                    <Mail size={15} />
                  </span>
                  <a href={`mailto:${siteConfig.email}`} className="text-brand-300 transition-colors hover:text-white">
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/10">
                    <MapPin size={15} />
                  </span>
                  <span className="text-brand-300">{siteConfig.address}</span>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        <div className="mt-6 flex flex-col items-center justify-between gap-2 text-center text-xs text-brand-400 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Built for the next generation of tech careers.</p>
        </div>
      </div>
    </footer>
  )
}
