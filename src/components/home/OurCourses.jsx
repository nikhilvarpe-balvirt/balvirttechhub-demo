import { ArrowRight } from 'lucide-react'
import { courses } from '../../data/courses'
import SectionHeading from '../shared/SectionHeading'
import Button from '../shared/Button'
import CourseCard from '../shared/CourseCard'
import Reveal from '../shared/Reveal'

export default function OurCourses() {
  return (
    <section className="bg-section-light py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Courses"
            title="Career tracks built for today's hiring bar"
            subtitle="Pick a track, or talk to us about what's right for your goals."
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, i) => (
            <Reveal key={course.slug} delay={i * 0.08}>
              <CourseCard course={course} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button to="/courses">
            See All Courses <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  )
}
