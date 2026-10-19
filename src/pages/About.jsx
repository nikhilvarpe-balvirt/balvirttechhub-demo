import { Target, Heart, Rocket, Users } from 'lucide-react'
import SectionHeading from '../components/shared/SectionHeading'
import Card from '../components/shared/Card'
import Badge from '../components/shared/Badge'
import Reveal from '../components/shared/Reveal'
import CTASection from '../components/home/CTASection'
import mentorImg from '../assets/images/btech2.webp'
import teamImg from '../assets/images/btech3.webp'
import { usePageMeta } from '../hooks/usePageMeta'

const values = [
  { icon: Target, title: 'Outcome-Focused', description: 'Every lesson is designed with one question in mind: does this help a student get hired?' },
  { icon: Heart, title: 'Mentor-Led', description: 'Small batches mean real mentorship, not just lecture delivery.' },
  { icon: Rocket, title: 'Industry-Aligned', description: 'Curricula reviewed against what companies are hiring for right now, AI included.' },
]

export default function About() {
  usePageMeta('About Us', "Balvirt Tech Hub is a new, mentor-led tech training hub building career-focused programs in Java Full Stack, NetSuite, and Generative AI.")

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero py-16 text-white">
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Badge icon={Rocket} className="!bg-white/10 !text-accent-300">A brand-new hub</Badge>
          <h1 className="mt-5 font-heading text-4xl font-bold sm:text-5xl">About Balvirt Tech Hub</h1>
          <p className="mt-4 text-brand-200">
            [Add founder/mentor story: background, motivation for starting the hub, and what makes the teaching approach different]
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="Why We're Starting Now"
                title="Built new, on purpose — not despite it"
                subtitle="We're not pretending to be a decade-old institute. We're a new hub built around one idea: practical, industry-aligned training — across Java Full Stack, NetSuite, and Generative AI — taught in small batches, with placement prep from day one, not bolted on at the end."
                center={false}
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative">
                <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent-200/60 to-cyan-200/60 blur-xl" />
                <img
                  src={mentorImg}
                  alt="A mentor walking through a concept on a whiteboard with the team"
                  className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-section-light py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="What We Stand For" title="Our values" />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.1}>
                <Card icon={value.icon} title={value.title}>
                  {value.description}
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
              <div className="relative order-2 lg:order-1">
                <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent-200/60 to-cyan-200/60 blur-xl" />
                <img
                  src={teamImg}
                  alt="The Balvirt Tech Hub team collaborating"
                  className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="order-1 lg:order-2">
                <Badge icon={Users}>The Team Behind It</Badge>
                <h2 className="mt-4 font-heading text-3xl font-bold text-brand-950 sm:text-4xl">
                  A small team, fully invested in your outcome
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  Balvirt Tech Hub is built by a small, hands-on team — designing the curriculum, mentoring batches, and running placement prep directly, instead of handing it off to a large, anonymous staff.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
