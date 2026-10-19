import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle, Loader2, XCircle, User, Navigation, AlertCircle } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
import { faqs } from '../data/faqs'
import SectionHeading from '../components/shared/SectionHeading'
import Reveal from '../components/shared/Reveal'
import { validateName, validateEmail, validatePhone, validateMessage, filterPhoneInput } from '../utils/formValidation'
import FormSuccessState from '../components/shared/FormSuccessState'
import { usePageMeta } from '../hooks/usePageMeta'
import { useStructuredData } from '../hooks/useStructuredData'
import { isPlaceholder } from '../utils/isPlaceholder'
import heroImg from '../assets/images/btech4.webp'

const initialForm = { name: '', email: '', phone: '', message: '' }

function validate(form) {
  const errors = {}
  const name = validateName(form.name)
  const email = validateEmail(form.email)
  const phone = validatePhone(form.phone)
  const message = validateMessage(form.message)
  if (name) errors.name = name
  if (email) errors.email = email
  if (phone) errors.phone = phone
  if (message) errors.message = message
  return errors
}

const contactItems = [
  { icon: Phone, label: 'Phone', value: (c) => c.phone, href: (c) => `tel:${c.phone}` },
  { icon: Mail, label: 'Email', value: (c) => c.email, href: (c) => `mailto:${c.email}` },
  { icon: MapPin, label: 'Location', value: (c) => c.address, href: null },
  { icon: Clock, label: 'Office Hours', value: (c) => c.officeHours, href: null },
]

export default function Contact() {
  usePageMeta('Contact Us', "Get in touch with Balvirt Tech Hub — ask about courses, batch timing, or reach our team directly.")

  const realFaqs = faqs.filter((faq) => !isPlaceholder(faq.answer))
  useStructuredData(
    'ld-faq',
    realFaqs.length > 0 && {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: realFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    }
  )

  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

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
      <section className="relative overflow-hidden bg-gradient-hero py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-accent-600/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="text-center lg:text-left">
            <h1 className="font-heading text-4xl font-bold sm:text-5xl">Get In Touch</h1>
            <p className="mt-4 text-lg text-brand-200">Have questions about a course or batch schedule? We'd love to help you figure out the right fit.</p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 font-medium text-white ring-1 ring-white/15 backdrop-blur transition-colors hover:bg-white/20"
              >
                <Phone size={17} /> Call Us
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 font-medium text-white ring-1 ring-white/15 backdrop-blur transition-colors hover:bg-white/20"
              >
                <MessageCircle size={17} /> WhatsApp
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 font-medium text-white ring-1 ring-white/15 backdrop-blur transition-colors hover:bg-white/20"
              >
                <Mail size={17} /> Email
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent-500/40 to-cyan-400/40 blur-xl" />
            <img
              src={heroImg}
              alt="A modern tech workplace"
              className="relative aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-2xl shadow-black/40"
            />
          </div>
        </div>
      </section>

      <section className="bg-section-light py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-5 lg:gap-10 lg:px-8">
          <Reveal className="lg:col-span-2">
            <div className="card-elevated h-full p-6 sm:p-8">
              <h2 className="font-heading text-2xl font-bold text-brand-950">Contact Details</h2>
              <p className="mt-2 text-sm text-slate-600">Reach out any way that's convenient — we typically respond within a day.</p>

              <ul className="mt-8 space-y-1">
                {contactItems.map((item) => {
                  const value = item.value(siteConfig)
                  const content = (
                    <div className="min-w-0 pt-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{item.label}</p>
                      <p className="text-slate-700 group-hover:text-accent-600">{value}</p>
                    </div>
                  )
                  const icon = (
                    <span className="icon-chip-gradient flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-md shadow-accent-900/10 transition-transform group-hover:scale-105">
                      <item.icon size={18} />
                    </span>
                  )
                  return (
                    <li key={item.label}>
                      {item.href ? (
                        <a
                          href={item.href(siteConfig)}
                          className="group -mx-3 flex items-start gap-4 rounded-2xl p-3 transition-colors hover:bg-slate-50"
                        >
                          {icon}
                          {content}
                        </a>
                      ) : (
                        <div className="group -mx-3 flex items-start gap-4 rounded-2xl p-3">
                          {icon}
                          {content}
                        </div>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="card-elevated h-full p-6 sm:p-8">
            <AnimatePresence mode="wait">
            {status === 'success' ? (
              <FormSuccessState
                key="success"
                title="Message Sent!"
                message="Thanks for reaching out — check your inbox for a confirmation, and we'll get back to you soon."
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
              <div className="mb-2">
                <h2 className="font-heading text-2xl font-bold text-brand-950">Send a Message</h2>
                <p className="mt-2 text-sm text-slate-600">Tell us about your goals and we'll get back to you.</p>
              </div>

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
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-brand-950">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  className={`w-full rounded-lg border px-4 py-2.5 focus:outline-none focus:ring-2 ${
                    errors.message
                      ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
                      : 'border-slate-300 focus:border-accent-500 focus:ring-accent-200'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-600">
                    <AlertCircle size={13} /> {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-gradient-accent flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-white shadow-lg shadow-accent-900/25 transition-all hover:brightness-110 disabled:opacity-60"
              >
                {status === 'loading' && <Loader2 size={18} className="animate-spin" />}
                {status === 'loading' ? 'Sending...' : 'Send Message'}
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

        <div className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal delay={0.05}>
            <div className="mb-4 flex items-center gap-2">
              <span className="icon-chip-gradient flex h-8 w-8 items-center justify-center rounded-full text-white">
                <MapPin size={15} />
              </span>
              <h2 className="font-heading text-lg font-semibold text-brand-950">Find Us</h2>
            </div>
            <div className="relative">
              <div className="absolute -inset-3 hidden rounded-[2rem] bg-gradient-to-br from-accent-200/60 to-cyan-200/60 blur-xl sm:block" />
              <div className="relative overflow-hidden rounded-2xl shadow-xl sm:rounded-[1.75rem]">
                <iframe
                  title="Balvirt Tech Hub location"
                  src={siteConfig.mapEmbedUrl}
                  className="h-80 w-full sm:h-96"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur sm:right-auto sm:w-80">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="icon-chip-gradient flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white">
                      <MapPin size={18} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-brand-950">{siteConfig.name}</p>
                      <p className="truncate text-xs text-slate-500">{siteConfig.address}</p>
                    </div>
                  </div>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(siteConfig.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden shrink-0 rounded-full bg-accent-900 p-2.5 text-white transition-colors hover:bg-accent-600 sm:flex"
                    aria-label="Get directions"
                  >
                    <Navigation size={16} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          </Reveal>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Reveal key={faq.question} delay={Math.min(i * 0.05, 0.3)} y={12}>
                <details className="card-elevated group p-5">
                  <summary className="cursor-pointer list-none font-semibold text-brand-950">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-slate-600">{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
