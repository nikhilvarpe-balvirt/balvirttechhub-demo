import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import Button from '../shared/Button'
import Badge from '../shared/Badge'
import classroomImg from '../../assets/images/a1.webp'

const highlights = ['Career tracks in Java Full Stack, NetSuite & Generative AI', 'Small batches with real, hands-on mentorship', 'Hands-on placement prep and market readiness support']

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-light text-brand-950">
      <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute -right-16 top-1/3 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl animate-blob-delayed" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge icon={Sparkles}>Now enrolling — founding batches</Badge>

          <h1 className="mt-6 font-heading text-3xl font-bold leading-tight sm:text-5xl lg:text-[3.4rem]">
            Practical Tech Training <span className="text-gradient-accent-deep">That Builds Job-Ready Skills</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600">
            Java Full Stack + AI, NetSuite (Functional & Technical), Generative AI, and more — mentor-led programs built around hands-on placement prep and market readiness, not just theory.
          </p>

          <ul className="mt-6 space-y-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 size={18} className="shrink-0 text-accent-600" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button to="/courses">
              Explore Courses <ArrowRight size={18} />
            </Button>
            <Button to="/enroll" variant="ghost">
              Enquire Now
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative w-full"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent-500/40 to-cyan-400/40 blur-xl" />
          <motion.div
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 shadow-2xl shadow-brand-900/20"
          >
            <img
              src={classroomImg}
              alt="Mentor teaching hands-on development concepts to students in a live class"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent-950/70 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -bottom-6 -left-4 w-64 rounded-2xl border border-white/10 bg-accent-950/90 p-4 shadow-2xl shadow-black/30 backdrop-blur sm:-left-8"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-300">Balvirt Tech Hub</p>
              <Badge icon={Sparkles} className="!bg-white/10 !px-2 !py-0.5 !text-accent-300">Live</Badge>
            </div>
            <p className="mt-2 text-lg font-bold text-white">3+ Career Tracks &middot; Growing</p>
            <p className="mt-1 text-xs text-brand-300">Live mentorship, every session</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
