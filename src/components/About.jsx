import SectionHeader from './SectionHeader'
import { Building2, Globe2, ShieldCheck, Users2 } from 'lucide-react'

const points = [
  { icon: Building2, title: 'Developer Access', desc: 'Direct allocations with leading developers across Dubai.' },
  { icon: Globe2, title: 'Global Buyers', desc: 'Seamless remote purchases with digital viewings and e-contracts.' },
  { icon: ShieldCheck, title: 'Safe & Transparent', desc: 'RERA compliant advisors and secure processes from A-Z.' },
  { icon: Users2, title: 'Dedicated Team', desc: 'Multilingual experts guiding you at every step.' },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="About Us"
          title="Your Trusted Dubai Property Partner"
          subtitle="We connect investors and end‑users to Dubai’s finest homes with concierge‑level service."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-2xl bg-white shadow-sm border border-gray-100">
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
