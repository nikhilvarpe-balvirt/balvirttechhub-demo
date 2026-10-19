import { ArrowRight } from 'lucide-react'
import Button from '../shared/Button'
import Reveal from '../shared/Reveal'

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-accent-700 via-accent-600 to-cyan-600">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-brand-950/20 blur-3xl" />
      <Reveal className="relative">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Ready to start your tech career journey?
          </h2>
          <p className="mt-4 text-white/80">
            Reach out and we'll walk you through the right track, timing, and next steps.
          </p>
          <div className="mt-8">
            <Button to="/enroll" variant="outline">
              Enquire Now <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
