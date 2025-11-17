import { useState } from 'react'
import SectionHeader from './SectionHeader'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('Thanks! Our advisor will reach out shortly.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Contact" title="Book a Call" subtitle="Tell us what you’re looking for and we’ll curate options." />
        <form onSubmit={onSubmit} className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <input name="name" required placeholder="Full name" className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          <input name="email" type="email" required placeholder="Email" className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          <input name="phone" required placeholder="Phone / WhatsApp" className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 sm:col-span-2" />
          <select name="interest" className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 sm:col-span-2">
            <option value="Luxury">Luxury</option>
            <option value="Off-Plan">Off‑Plan</option>
            <option value="Secondary">Secondary Market</option>
            <option value="Investment">Investment</option>
          </select>
          <textarea name="message" rows="4" placeholder="Tell us about your ideal property…" className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 sm:col-span-2" />
          <button className="sm:col-span-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold shadow hover:opacity-90 transition">Send Inquiry</button>
          {status && <p className="sm:col-span-2 text-center text-sm text-gray-700">{status}</p>}
        </form>
      </div>
    </section>
  )
}
