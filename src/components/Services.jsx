import SectionHeader from './SectionHeader'
import { Handshake, Home, Receipt, FileCheck2, Building2 } from 'lucide-react'

const services = [
  { icon: Home, title: 'Property Advisory', desc: 'Tailored options across luxury, off‑plan and secondary market.' },
  { icon: Receipt, title: 'Mortgage Support', desc: 'Bank introductions and best‑rate financing guidance.' },
  { icon: FileCheck2, title: 'Legal & Documentation', desc: 'RERA‑compliant paperwork, DLD registration and handovers.' },
  { icon: Handshake, title: 'Post‑Handover', desc: 'Property management, leasing and resale strategies.' },
  { icon: Building2, title: 'Off‑Plan Allocations', desc: 'Early access to top developer launches and inventories.' },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Services" title="End‑to‑End Brokerage" subtitle="Everything you need from first viewing to move‑in and beyond." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition">
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
