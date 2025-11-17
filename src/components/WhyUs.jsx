import SectionHeader from './SectionHeader'
import { ShieldCheck, Sparkles, Clock, Globe2 } from 'lucide-react'

const reasons = [
  { icon: ShieldCheck, title: 'RERA Certified', desc: 'Compliance-first approach with clear, transparent processes.' },
  { icon: Sparkles, title: 'Launch Access', desc: 'First access to high-demand off‑plan launches and allocations.' },
  { icon: Clock, title: 'Fast Turnaround', desc: 'From viewing to SPA in days — we keep momentum high.' },
  { icon: Globe2, title: 'Concierge for Overseas', desc: 'Remote viewings, digital contracts and international support.' },
]

export default function WhyUs() {
  return (
    <section id="whyus" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Why Us" title="A Brokerage Built for Results" subtitle="We combine market access with concierge‑level client care." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-sm">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-500 to-fuchsia-500 text-white flex items-center justify-center mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-600 mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
