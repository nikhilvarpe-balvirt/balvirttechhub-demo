import { PhoneCall, Users, Rocket, Briefcase, GraduationCap } from 'lucide-react'
import SectionHeading from '../shared/SectionHeading'
import Reveal from '../shared/Reveal'

const steps = [
  { icon: PhoneCall, title: 'Enquire & Connect', description: 'Tell us your background and goals — we\'ll help you find the right track.' },
  { icon: Users, title: 'Join a Small Batch', description: 'Learn in a batch small enough for real, one-on-one mentorship.' },
  { icon: Rocket, title: 'Build Real Projects', description: 'A mini project after every module, then a full capstone.' },
  { icon: Briefcase, title: 'Placement Prep', description: 'Resume building, mock interviews, and aptitude training built in.' },
  { icon: GraduationCap, title: 'Internship', description: 'Real project work with hands-on mentorship, not just a certificate.' },
]

export default function HowItWorks() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="Your Journey" title="How it works, start to finish" />
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <div className="card-elevated h-full p-6">
                <div className="flex items-center justify-between">
                  <span className="icon-chip-gradient flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white">
                    <step.icon size={20} />
                  </span>
                  <span className="font-heading text-2xl font-bold text-slate-200">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="mt-4 font-semibold text-brand-950">{step.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
