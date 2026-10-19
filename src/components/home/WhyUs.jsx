import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Users, Code, Coffee, Settings2, BrainCircuit } from 'lucide-react'
import Badge from '../shared/Badge'
import Reveal from '../shared/Reveal'

const reasons = [
  {
    icon: Code,
    title: 'Real Curriculum, No Fluff',
    description: 'Every program maps to what companies actually hire for in that domain — not a generic syllabus copy-pasted across courses.',
  },
  {
    icon: Briefcase,
    title: 'Placement-First Approach',
    description: 'Mock interviews, resume building, and aptitude prep are built into the program, not an afterthought.',
  },
  {
    icon: Users,
    title: 'Small Batch Sizes',
    description: 'Focused mentorship instead of lecture-hall crowds, so every student gets real feedback.',
  },
  {
    icon: GraduationCap,
    title: 'Hands-On Projects',
    description: 'A mini project after every module, and a full capstone at the end — build and deploy real applications.',
  },
]

function FloatingCard({ icon: Icon, label, sub, className = '', highlight = false, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      animate={{ y: [0, -8, 0] }}
      transition={{ opacity: { duration: 0.5, delay }, y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay } }}
      className={`absolute flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl shadow-brand-900/10 ${highlight ? 'ring-2 ring-accent-400' : ''} ${className}`}
    >
      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${highlight ? 'icon-chip-gradient text-white' : 'bg-accent-50 text-accent-600'}`}>
        <Icon size={20} />
      </span>
      <div>
        <p className="text-sm font-semibold text-brand-950">{label}</p>
        <p className="text-xs text-slate-500">{sub}</p>
      </div>
    </motion.div>
  )
}

export default function WhyUs() {
  return (
    <section className="bg-section-light py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Badge>Why Balvirt Tech Hub</Badge>
            <h2 className="mt-4 font-heading text-3xl font-bold text-brand-950 sm:text-4xl">
              Training built around your career outcome
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We're a new hub — built from the ground up around what actually gets students hired.
            </p>

            <div className="mt-10 space-y-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-4">
                  <span className="icon-chip-gradient flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-md shadow-accent-500/25">
                    <reason.icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-brand-950">{reason.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mx-auto h-96 max-w-md">
              <div className="absolute inset-4 rounded-[2rem] bg-gradient-to-br from-accent-100 via-white to-cyan-100" />
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-grid-pattern opacity-[0.15]" />
              <FloatingCard icon={Coffee} label="Java Full Stack" sub="Core Java to AI" className="left-0 top-4 -rotate-6" delay={0} />
              <FloatingCard icon={Settings2} label="NetSuite" sub="Functional & Technical" className="right-0 top-28 rotate-3" delay={0.4} />
              <FloatingCard icon={BrainCircuit} label="Generative AI" sub="LLMs & Agents" className="left-6 bottom-20 rotate-2" delay={0.8} />
              <FloatingCard icon={Briefcase} label="Placement Prep" sub="Included in every track" className="right-2 bottom-0 -rotate-3" highlight delay={1.2} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
