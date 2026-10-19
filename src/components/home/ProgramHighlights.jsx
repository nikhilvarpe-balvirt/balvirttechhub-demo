import { programHighlights } from '../../data/programHighlights'
import Reveal from '../shared/Reveal'

export default function ProgramHighlights() {
  return (
    <section className="bg-brand-900">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        {programHighlights.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} y={16}>
            <div className="flex flex-col items-center text-center">
              <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-accent-300">
                <stat.icon size={22} />
              </span>
              <div className="font-heading text-2xl font-bold text-white sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-sm text-brand-200">{stat.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
