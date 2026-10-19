import { FileText, MessageSquare, Brain, Target } from 'lucide-react'
import SectionHeading from '../components/shared/SectionHeading'
import Card from '../components/shared/Card'
import Reveal from '../components/shared/Reveal'
import CTASection from '../components/home/CTASection'
import heroImg from '../assets/images/tech3.webp'
import mockInterviewImg from '../assets/images/tech4.webp'
import { usePageMeta } from '../hooks/usePageMeta'

const pillars = [
  {
    icon: MessageSquare,
    title: 'Mock Interviews',
    description: 'Technical and HR mock interviews with real feedback, run by mentors who know what interviewers actually look for.',
  },
  {
    icon: FileText,
    title: 'Resume Building',
    description: 'One-on-one resume reviews focused on projects and skills that pass ATS filters and catch a recruiter\'s eye.',
  },
  {
    icon: Brain,
    title: 'Aptitude & Soft Skills',
    description: 'Quantitative aptitude, logical reasoning, and communication practice — the rounds that filter candidates before the technical round.',
  },
  {
    icon: Target,
    title: 'Mock Drives',
    description: 'Simulated placement drives that mirror real company hiring processes, so the actual drive isn\'t the first time you\'ve seen the format.',
  },
]

export default function PlacementPrep() {
  usePageMeta('Placement Preparation', 'Mock interviews, resume building, and aptitude training — placement prep is built into every Balvirt Tech Hub program from day one.')

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero py-16 text-white">
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="text-center lg:text-left">
            <h1 className="font-heading text-4xl font-bold sm:text-5xl">Placement Preparation</h1>
            <p className="mt-4 text-brand-200">
              Placement prep isn't a bonus module here — it's built into the program from day one.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent-500/40 to-cyan-400/40 blur-xl" />
            <img
              src={heroImg}
              alt="A mentor walking students through pre-placement training"
              className="relative aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-2xl shadow-black/40"
            />
          </div>
        </div>
      </section>

      <section className="bg-section-light py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="How we prepare you"
              title="Four pillars of placement readiness"
            />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.08}>
                <Card icon={pillar.icon} title={pillar.title}>
                  {pillar.description}
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent-200/60 to-cyan-200/60 blur-xl" />
                <img
                  src={mockInterviewImg}
                  alt="A mock interview session in progress"
                  className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <SectionHeading
                eyebrow="Our Approach"
                title="Real readiness, not a promise we can't back"
                subtitle="We don't run a hiring-partner network, and we won't tell you placement is guaranteed. What we do is prepare you thoroughly — sharpening your resume, running realistic mock interviews and drives, and coaching you on how to actually find and pursue the right opportunities in the market yourself."
                center={false}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
