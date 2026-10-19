import { Link } from 'react-router-dom'
import { Coffee, BrainCircuit, TrendingUp, ArrowRight } from 'lucide-react'
import SectionHeading from '../shared/SectionHeading'
import Badge from '../shared/Badge'
import Reveal from '../shared/Reveal'

const capabilities = [
  {
    icon: Coffee,
    title: 'AI Inside Java Full Stack',
    description: 'The Java Full Stack program includes a dedicated module on integrating AI/LLM APIs into real applications.',
    to: '/courses/java-full-stack-ai',
  },
  {
    icon: BrainCircuit,
    title: 'A Full Generative AI Track',
    description: 'Want to go deeper? Our standalone Generative AI program covers prompt engineering, RAG, and building AI agents.',
    to: '/courses/generative-ai',
  },
  {
    icon: TrendingUp,
    title: 'Future-Ready, Across Every Program',
    description: 'From Java to NetSuite, every curriculum is reviewed against what companies are actually hiring for today.',
    to: '/courses',
  },
]

export default function AIHighlight() {
  return (
    <section className="bg-gradient-hero py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <Badge className="!bg-white/10 !text-accent-300">What sets us apart</Badge>
            <h2 className="mt-4 font-heading text-3xl font-bold sm:text-4xl">
              <span className="text-gradient-accent">AI</span> woven into everything we teach
            </h2>
            <p className="mt-4 text-lg text-brand-200">
              Whether it's a module inside a broader program or a dedicated track of its own, AI skills show up across our curriculum — not bolted on as an afterthought.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-3">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.title} delay={i * 0.1}>
              <Link to={cap.to} className="group block h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:border-accent-400/40 hover:bg-white/[0.08]">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/15 text-accent-300">
                  <cap.icon size={24} />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{cap.title}</h3>
                <p className="mt-2 text-sm text-brand-200">{cap.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-300 opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
