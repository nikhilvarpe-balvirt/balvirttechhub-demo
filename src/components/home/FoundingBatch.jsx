import { Rocket, ArrowRight, CheckCircle2 } from 'lucide-react'
import { foundingBatchPerks } from '../../data/programHighlights'
import Badge from '../shared/Badge'
import Button from '../shared/Button'
import Reveal from '../shared/Reveal'

export default function FoundingBatch() {
  return (
    <section className="bg-section-light py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="card-elevated grid gap-10 overflow-hidden p-8 sm:p-12 lg:grid-cols-5 lg:items-center">
            <div className="lg:col-span-2">
              <Badge icon={Rocket}>We're just getting started</Badge>
              <h2 className="mt-4 font-heading text-3xl font-bold text-brand-950 sm:text-4xl">
                Join a founding batch, not batch #500
              </h2>
              <p className="mt-4 text-slate-600">
                Balvirt Tech Hub is new — which means early students get more attention, not less.
              </p>
              <div className="mt-8">
                <Button to="/enroll">
                  Enquire Now <ArrowRight size={18} />
                </Button>
              </div>
            </div>

            <div className="space-y-5 lg:col-span-3 lg:border-l lg:border-slate-100 lg:pl-10">
              {foundingBatchPerks.map((perk) => (
                <div key={perk.title} className="flex gap-3">
                  <CheckCircle2 size={22} className="mt-0.5 shrink-0 text-accent-600" />
                  <div>
                    <h3 className="font-semibold text-brand-950">{perk.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{perk.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
