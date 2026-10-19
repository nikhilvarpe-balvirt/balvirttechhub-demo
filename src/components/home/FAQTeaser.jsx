import { ArrowRight } from 'lucide-react'
import { faqs } from '../../data/faqs'
import SectionHeading from '../shared/SectionHeading'
import Button from '../shared/Button'
import Reveal from '../shared/Reveal'

export default function FAQTeaser() {
  const preview = faqs.slice(0, 4)

  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Questions? We've got answers" />
        </Reveal>
        <div className="space-y-4">
          {preview.map((faq, i) => (
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
        <div className="mt-8 text-center">
          <Button to="/contact" variant="ghost">
            See All FAQs <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  )
}
