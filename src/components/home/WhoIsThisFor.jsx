import { GraduationCap, RefreshCw, TrendingUp } from 'lucide-react'
import SectionHeading from '../shared/SectionHeading'
import Card from '../shared/Card'
import Reveal from '../shared/Reveal'

const audiences = [
  { icon: GraduationCap, title: 'Fresh Graduates', description: 'Build genuinely job-ready skills before your first role — not just another certificate for your resume.' },
  { icon: RefreshCw, title: 'Career Switchers', description: 'A structured, mentor-led path into tech — no computer science background required to start.' },
  { icon: TrendingUp, title: 'Working Professionals', description: 'Upskill in a focused track — AI integration, NetSuite, or full stack — without pausing your career.' },
]

export default function WhoIsThisFor() {
  return (
    <section className="bg-section-light py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="Who It's For" title="Who Can Benefit" />
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-3">
          {audiences.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.1}>
              <Card icon={a.icon} title={a.title}>
                {a.description}
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
