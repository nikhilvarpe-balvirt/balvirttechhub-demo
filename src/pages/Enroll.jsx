import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { User, Mail, Phone, BookOpen, MessageSquare, Loader2, XCircle, AlertCircle, ArrowLeft } from 'lucide-react'
import { courses } from '../data/courses'
import { validateName, validateEmail, validatePhone, filterPhoneInput } from '../utils/formValidation'
import Reveal from '../components/shared/Reveal'
import Badge from '../components/shared/Badge'
import CustomSelect from '../components/shared/CustomSelect'
import FormSuccessState from '../components/shared/FormSuccessState'
import { usePageMeta } from '../hooks/usePageMeta'

const initialForm = { name: '', email: '', phone: '', course: '', message: '' }

const courseOptions = [
  ...courses.map((c) => ({ value: c.shortName, label: c.shortName })),
  { value: 'Not sure yet', label: 'Not sure yet — help me choose' },
]

function validate(form) {
  const errors = {}
  const name = validateName(form.name)
  const email = validateEmail(form.email)
  const phone = validatePhone(form.phone, { required: true })
  if (name) errors.name = name
  if (email) errors.email = email
  if (phone) errors.phone = phone
  if (!form.course) errors.course = 'Please select a course.'
  return errors
}

export default function Enroll() {
  usePageMeta('Enroll Now', 'Start your enrollment request for Java Full Stack + AI, NetSuite, or Generative AI training at Balvirt Tech Hub.')

  const [searchParams] = useSearchParams()
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  useEffect(() => {
    const slug = searchParams.get('course')
    const match = courses.find((c) => c.slug === slug)
    if (match) setForm((prev) => ({ ...prev, course: match.shortName }))
  }, [searchParams])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handlePhoneChange = (e) => {
    const filtered = filterPhoneInput(e.target.value)
    setForm((prev) => ({ ...prev, phone: filtered }))
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }))
  }

  const handleCourseChange = (value) => {
    setForm((prev) => ({ ...prev, course: value }))
    if (errors.course) setErrors((prev) => ({ ...prev, course: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setForm(initialForm)
      setErrors({})
    } catch {
      setStatus('error')
    }
  }

  const fieldClasses = (field) =>
    `w-full rounded-lg border py-2.5 pl-11 pr-4 focus:outline-none focus:ring-2 ${
      errors[field]
        ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
        : 'border-slate-300 focus:border-accent-500 focus:ring-accent-200'
    }`

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero py-16 text-white">
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-accent-600/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Link to="/courses" className="inline-flex items-center gap-1 text-sm text-brand-300 hover:text-white">
            <ArrowLeft size={16} /> All Courses
          </Link>
          <h1 className="mt-5 font-heading text-4xl font-bold sm:text-5xl">Enroll Now</h1>
          <p className="mt-4 text-brand-200">
            Tell us which track you're interested in, and we'll reach out with timing, fees, and next steps.
          </p>
        </div>
      </section>

      <section className="bg-section-light py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="card-elevated p-6 sm:p-8">
            <AnimatePresence mode="wait">
            {status === 'success' ? (
              <FormSuccessState
                key="success"
                title="Request Received!"
                message="Thanks for reaching out — check your inbox for a confirmation, and our team will contact you shortly."
              />
            ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              noValidate
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <Badge>Enrollment Request</Badge>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-brand-950">Name</label>
                  <div className="relative">
                    <User size={17} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.name)}
                      className={fieldClasses('name')}
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-600">
                      <AlertCircle size={13} /> {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1 block text-sm font-medium text-brand-950">Phone</label>
                  <div className="relative">
                    <Phone size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handlePhoneChange}
                      aria-invalid={Boolean(errors.phone)}
                      className={fieldClasses('phone')}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-600">
                      <AlertCircle size={13} /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-brand-950">Email</label>
                <div className="relative">
                  <Mail size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    className={fieldClasses('email')}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-600">
                    <AlertCircle size={13} /> {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="course" className="mb-1 block text-sm font-medium text-brand-950">Course of Interest</label>
                <CustomSelect
                  id="course"
                  icon={BookOpen}
                  placeholder="Select a course"
                  options={courseOptions}
                  value={form.course}
                  onChange={handleCourseChange}
                  error={Boolean(errors.course)}
                />
                {errors.course && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-600">
                    <AlertCircle size={13} /> {errors.course}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-brand-950">Anything else we should know? <span className="font-normal text-slate-400">(optional)</span></label>
                <div className="relative">
                  <MessageSquare size={16} className="pointer-events-none absolute left-3.5 top-3.5 text-slate-400" />
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 py-2.5 pl-11 pr-4 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-200"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-gradient-accent flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-white shadow-lg shadow-accent-900/25 transition-all hover:brightness-110 disabled:opacity-60"
              >
                {status === 'loading' && <Loader2 size={18} className="animate-spin" />}
                {status === 'loading' ? 'Submitting...' : 'Submit Enrollment Request'}
              </button>

              {status === 'error' && (
                <p className="flex items-center gap-2 text-sm font-medium text-red-700">
                  <XCircle size={16} /> Something went wrong. Please try again or reach out via phone/WhatsApp.
                </p>
              )}
            </motion.form>
            )}
            </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
