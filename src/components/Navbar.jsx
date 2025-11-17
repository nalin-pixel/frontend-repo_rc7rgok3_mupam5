import { useState, useEffect } from 'react'
import { Menu, X, Home, Building2, Info, PenTool, Briefcase, BadgeCheck, Phone } from 'lucide-react'

const links = [
  { href: '#hero', label: 'Home', icon: Home },
  { href: '#properties', label: 'Properties', icon: Building2 },
  { href: '#about', label: 'About', icon: Info },
  { href: '#blog', label: 'Blog', icon: PenTool },
  { href: '#services', label: 'Services', icon: Briefcase },
  { href: '#whyus', label: 'Why Us', icon: BadgeCheck },
  { href: '#contact', label: 'Contact', icon: Phone },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-white/70 shadow-md' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500" />
          <span className="font-extrabold tracking-tight text-gray-900 text-lg">
            Dubai Estates
          </span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <a key={href} href={href} className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition">
              {label}
            </a>
          ))}
          <a href="#contact" className="ml-3 inline-flex items-center px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold shadow hover:opacity-90 transition">
            Book a Call
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md bg-white/70 shadow">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white/90 backdrop-blur">
          <div className="px-4 py-3 space-y-1">
            {links.map(({ href, label, icon: Icon }) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
                <Icon className="h-5 w-5" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
