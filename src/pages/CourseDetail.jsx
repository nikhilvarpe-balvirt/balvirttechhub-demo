import { useParams, Link } from 'react-router-dom'
import { ArrowRight, ArrowLeft, ChevronDown, CheckCircle2, Sparkles, Rocket, Eye, Target } from 'lucide-react'
import { getCourseBySlug } from '../data/courses'
import SectionHeading from '../components/shared/SectionHeading'
import Button from '../components/shared/Button'
import Badge from '../components/shared/Badge'
import Card from '../components/shared/Card'
import Reveal from '../components/shared/Reveal'
import { usePageMeta } from '../hooks/usePageMeta'
import { useStructuredData } from '../hooks/useStructuredData'
import { isPlaceholder } from '../utils/isPlaceholder'
import { siteConfig } from '../data/siteConfig'

export default function CourseDetail() {
  const { slug } = useParams()
  const course = getCourseBySlug(slug)

  usePageMeta(course?.shortName ?? 'Course Not Found', course?.tagline)

  useStructuredData(
    'ld-course',
    course && {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: course.name,
      description: course.tagline,
      provider: {
        '@type': 'EducationalOrganization',
        name: siteConfig.name,
        sameAs: typeof window !== 'undefined' ? window.location.origin : '',
      },
      ...(!isPlaceholder(course.duration) && {
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: isPlaceholder(course.mode) ? 'Blended' : course.mode,
          courseWorkload: course.duration,
        },
      }),
    }
  )

  if (!course) {
    return (
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="font-heading text-3xl font-bold text-brand-950">Course not found</h1>
        <p className="mt-3 text-slate-600">That program doesn't exist yet — take a look at everything we offer.</p>
        <div className="mt-8">
          <Button to="/courses">
            View All Courses <ArrowRight size={18} />
          </Button>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero py-16 text-white">
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Link to="/courses" className="inline-flex items-center gap-1 text-sm text-brand-300 hover:text-white">
            <ArrowLeft size={16} /> All Courses
          </Link>
          {course.badge && (
            <div className="mt-4">
              <Badge icon={Sparkles} className="!bg-white/10 !text-accent-300">{course.badge}</Badge>
            </div>
          )}
          <h1 className="mt-5 font-heading text-4xl font-bold sm:text-5xl">{course.name}</h1>
          <p className="mt-4 text-brand-200">{isPlaceholder(course.duration) ? 'Duration to be confirmed — reach out for the latest timing' : course.duration}</p>
          <div className="mt-8">
            <Button to={`/enroll?course=${course.slug}`}>
              Enroll Now <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>

      {(course.vision || course.mission) && (
        <section className="bg-section-light py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <SectionHeading eyebrow="Vision & Mission" title="What this program is built on" />
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2">
              {course.vision && (
                <Reveal>
                  <div className="card-elevated h-full p-6 sm:p-8">
                    <div className="icon-chip-gradient mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-md shadow-accent-500/25">
                      <Eye size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-brand-950">Vision</h3>
                    <p className="mt-2 text-slate-600">{course.vision}</p>
                  </div>
                </Reveal>
              )}
              {course.mission && (
                <Reveal delay={0.1}>
                  <div className="card-elevated h-full p-6 sm:p-8">
                    <div className="icon-chip-gradient mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-md shadow-accent-500/25">
                      <Target size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-brand-950">Mission</h3>
                    <p className="mt-2 text-slate-600">{course.mission}</p>
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </section>
      )}

      {course.overviewImage && (
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <Reveal>
                <div className="relative">
                  <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent-200/60 to-cyan-200/60 blur-xl" />
                  <img
                    src={course.overviewImage}
                    alt="A mentor walking through a concept with the class"
                    className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
                    loading="lazy"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <SectionHeading
                  eyebrow="How You'll Learn"
                  title="Live coding, real system design — not just slides"
                  subtitle="Every session pairs hands-on coding with real architecture thinking, so concepts stick because you've actually built with them."
                  center={false}
                />
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {course.whyThisProgram && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <SectionHeading eyebrow="Why This Program" title={`Why train in ${course.shortName} with us`} />
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {course.whyThisProgram.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08}>
                  <Card icon={item.icon} title={item.title}>
                    {item.description}
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-section-light py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Curriculum" title="What you'll learn" center={false} />
          </Reveal>

          <div className="space-y-4">
            {course.curriculum.map((item, i) => (
              <Reveal key={item.module} delay={Math.min(i * 0.04, 0.3)}>
                <details className="card-elevated group p-6" open={i === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-50 font-heading text-sm font-bold text-accent-700">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-heading text-lg font-semibold text-brand-950">{item.module}</h3>
                        {item.duration && <p className="text-sm text-slate-500">{item.duration}</p>}
                      </div>
                      {item.highlight && <Badge icon={Sparkles}>{item.highlight}</Badge>}
                    </div>
                    <ChevronDown size={20} className="shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
                  </summary>

                  <div className="mt-6 space-y-5 border-t border-slate-100 pt-5">
                    {item.weeks
                      ? item.weeks.map((week) => (
                          <div key={week.title}>
                            <h4 className="text-sm font-semibold text-brand-900">{week.title}</h4>
                            <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                              {week.topics.map((topic) => (
                                <li key={topic} className="flex items-start gap-2 text-sm text-slate-600">
                                  <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-accent-600" />
                                  {topic}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))
                      : (
                        <ul className="grid gap-1.5 sm:grid-cols-2">
                          {item.topics.map((topic) => (
                            <li key={topic} className="flex items-start gap-2 text-sm text-slate-600">
                              <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-accent-600" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      )}

                    {item.miniProject && (
                      <div className="rounded-xl bg-accent-50 p-4 text-sm">
                        <span className="font-semibold text-brand-900">Mini Project: </span>
                        <span className="text-brand-800">{item.miniProject}</span>
                      </div>
                    )}
                  </div>
                </details>
              </Reveal>
            ))}
          </div>

          {!isPlaceholder(course.prerequisites) && (
            <Reveal>
              <div className="mt-6 rounded-2xl border border-dashed border-accent-200 bg-accent-50/50 p-6 text-sm text-slate-600">
                <strong className="text-brand-950">Prerequisites:</strong> {course.prerequisites}
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {course.capstone && (
        <section className="bg-gradient-hero py-20 text-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center">
                <Badge icon={Rocket} className="!bg-white/10 !text-accent-300">{course.capstone.title}</Badge>
                <h2 className="mt-4 font-heading text-3xl font-bold sm:text-4xl">{course.capstone.subtitle}</h2>
                <p className="mt-4 text-brand-200">{course.capstone.description}</p>
              </div>
            </Reveal>

            <div className={`mt-10 grid gap-8 ${course.capstone.image ? 'lg:grid-cols-2 lg:items-center' : ''}`}>
              {course.capstone.image && (
                <Reveal delay={0.1}>
                  <img
                    src={course.capstone.image}
                    alt="The team reviewing the capstone project's architecture"
                    className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
                    loading="lazy"
                  />
                </Reveal>
              )}
              <Reveal delay={0.15}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent-300">Backend</p>
                    <p className="mt-1 font-medium">{course.capstone.backend}</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent-300">Frontend</p>
                    <p className="mt-1 font-medium">{course.capstone.frontend}</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-5 sm:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent-300">Key Features</p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {course.capstone.features.map((f) => (
                        <li key={f} className="rounded-full bg-white/10 px-3 py-1 text-sm">{f}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-5 sm:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent-300">Deployment</p>
                    <p className="mt-1 font-medium">{course.capstone.deployment}</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {course.internship && (
        <section className="bg-section-light py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <Reveal>
                <Badge icon={Rocket}>{course.internship.title}</Badge>
                <h2 className="mt-4 font-heading text-3xl font-bold text-brand-950 sm:text-4xl">
                  Training is only half of it
                </h2>
                <p className="mt-4 text-lg text-slate-600">{course.internship.description}</p>
                <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-accent-600">
                  {isPlaceholder(course.internship.duration)
                    ? 'Timing confirmed once you enroll — right after your training phase'
                    : `${course.internship.duration} — after your training phase`}
                </p>
              </Reveal>
              {course.internship.image && (
                <Reveal delay={0.1}>
                  <div className="relative">
                    <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent-200/60 to-cyan-200/60 blur-xl" />
                    <img
                      src={course.internship.image}
                      alt="A team reviewing real project work during a sprint review"
                      className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
                      loading="lazy"
                    />
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </section>
      )}

      {course.summaryTimeline && (
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <SectionHeading eyebrow="Program Overview" title="How the program breaks down" center={false} />
            </Reveal>
            <Reveal delay={0.05}>
              <div className="card-elevated overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-accent-50 text-brand-950">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Phase</th>
                      <th className="px-6 py-4 font-semibold">Modules</th>
                      <th className="px-6 py-4 font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {course.summaryTimeline.map((row) => (
                      <tr key={row.phase} className="border-t border-slate-100">
                        <td className="px-6 py-4 font-medium text-brand-950">{row.phase}</td>
                        <td className="px-6 py-4 text-slate-600">{row.modules}</td>
                        <td className="px-6 py-4 text-slate-600">{row.duration}</td>
                      </tr>
                    ))}
                    <tr className="border-t border-slate-100 bg-accent-50 font-semibold text-brand-950">
                      <td className="px-6 py-4" colSpan={2}>Total</td>
                      <td className="px-6 py-4">{course.duration}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <section className="bg-section-light py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <div className="card-elevated p-8 sm:p-12">
              <Badge icon={Rocket}>Enrollment</Badge>
              <h2 className="mt-4 font-heading text-2xl font-bold text-brand-950 sm:text-3xl">
                Batches are forming — let's talk timing
              </h2>
              <p className="mt-4 text-slate-600">
                We're keeping early batches small, so start dates are set around real demand rather than a fixed public calendar. Reach out and we'll walk you through the next available batch, timing, and mode for this program.
              </p>
              <div className="mt-8">
                <Button to={`/enroll?course=${course.slug}`}>
                  Check Batch Availability <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
