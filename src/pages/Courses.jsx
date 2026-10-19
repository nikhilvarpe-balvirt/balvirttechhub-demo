import { Sparkles, PlusCircle } from 'lucide-react'
import { courses } from '../data/courses'
import Badge from '../components/shared/Badge'
import CourseCard from '../components/shared/CourseCard'
import Reveal from '../components/shared/Reveal'
import CTASection from '../components/home/CTASection'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Courses() {
  usePageMeta('Our Courses', 'Explore Java Full Stack + AI, NetSuite Functional, NetSuite Technical, and Generative AI — career-focused, mentor-led training programs at Balvirt Tech Hub.')

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero py-16 text-white">
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Badge icon={Sparkles} className="!bg-white/10 !text-accent-300">Our Programs</Badge>
          <h1 className="mt-5 font-heading text-4xl font-bold sm:text-5xl">Explore Our Courses</h1>
          <p className="mt-4 text-brand-200">
            Career-focused, mentor-led training across the tracks companies are actually hiring for.
          </p>
        </div>
      </section>

      <section className="bg-section-light py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, i) => (
              <Reveal key={course.slug} delay={i * 0.08}>
                <CourseCard course={course} />
              </Reveal>
            ))}

            <Reveal delay={courses.length * 0.08}>
              <div className="flex h-full flex-col items-center justify-center rounded-[1.25rem] border-2 border-dashed border-accent-200 bg-accent-50/40 p-6 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-accent-600 shadow-sm">
                  <PlusCircle size={24} />
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-brand-950">More Programs Coming Soon</h3>
                <p className="mt-2 text-sm text-slate-600">
                  We're actively expanding our course catalog to match what the market is hiring for. Get in touch to hear what's next.
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
