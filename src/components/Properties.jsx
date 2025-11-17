import SectionHeader from './SectionHeader'
import { motion } from 'framer-motion'

const items = [
  {
    title: 'Palm Jumeirah Penthouse',
    price: 'AED 14,900,000',
    meta: '4 Bed • 5 Bath • 6,200 sq.ft',
    image: 'https://images.unsplash.com/photo-1520256862855-398228c41684?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Downtown Burj View',
    price: 'AED 3,450,000',
    meta: '2 Bed • 3 Bath • 1,400 sq.ft',
    image: 'https://images.unsplash.com/photo-1735320862956-371e2ed96007?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEb3dudG93biUyMEJ1cmolMjBWaWV3fGVufDB8MHx8fDE3NjMzOTM5NzN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Dubai Marina Sky Villa',
    price: 'AED 8,200,000',
    meta: '3 Bed • 4 Bath • 2,900 sq.ft',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop',
  },
]

export default function Properties() {
  return (
    <section id="properties" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Featured"
          title="Handpicked Dubai Properties"
          subtitle="A selection of our most requested homes across the city."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.a
              key={idx}
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-gray-100"
            >
              <img src={item.image} alt="" className="h-64 w-full object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-white/80">{item.meta}</p>
                <p className="mt-2 font-bold">{item.price}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
