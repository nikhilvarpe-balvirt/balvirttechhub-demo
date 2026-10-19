import { ArrowRight } from 'lucide-react'
import Badge from './Badge'
import Button from './Button'
import { isPlaceholder } from '../../utils/isPlaceholder'

export default function CourseCard({ course }) {
  return (
    <div className="card-elevated flex h-full flex-col p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="icon-chip-gradient flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-md shadow-accent-500/25">
          <course.icon size={24} />
        </span>
        {course.badge && <Badge>{course.badge}</Badge>}
      </div>
      <h3 className="mt-4 font-heading text-lg font-semibold text-brand-950">{course.shortName}</h3>
      <p className="mt-2 flex-1 text-sm text-slate-600">{course.tagline}</p>
      <p className="mt-4 text-xs font-medium uppercase tracking-wider text-slate-400">
        {isPlaceholder(course.duration) ? 'Duration to be confirmed' : course.duration}
      </p>
      <div className="mt-4">
        <Button to={`/courses/${course.slug}`} variant="ghost" className="w-full !py-2.5 text-sm">
          View Curriculum <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  )
}
