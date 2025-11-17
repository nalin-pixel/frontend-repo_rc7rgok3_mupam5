import SectionHeader from './SectionHeader'

const posts = [
  { title: 'Dubai Market Outlook 2025', excerpt: 'Prices, yields and where the smart money is heading next.', image: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=2070&auto=format&fit=crop' },
  { title: 'Guide: Buying Off‑Plan in Dubai', excerpt: 'Payment plans, DLD fees and handover timelines explained.', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=2069&auto=format&fit=crop' },
  { title: 'Neighborhood Spotlight: Palm Jumeirah', excerpt: 'Life on the island: amenities, schools, beaches and more.', image: 'https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=2069&auto=format&fit=crop' },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Insights" title="From Our Blog" subtitle="Weekly reads for investors and home seekers." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <a key={p.title} href="#contact" className="group rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition bg-white">
              <img src={p.image} alt="" className="h-48 w-full object-cover group-hover:scale-105 transition duration-500" />
              <div className="p-5">
                <h3 className="font-semibold text-gray-900">{p.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{p.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
