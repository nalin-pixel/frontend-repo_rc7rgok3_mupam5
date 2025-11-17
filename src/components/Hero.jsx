import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative bg-white pt-28">
      {/* Background accent (very subtle) */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-white" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              RERA-licensed Dubai brokerage
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Luxury property in Dubai, curated for serious buyers
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Access off-plan and secondary market opportunities across Palm Jumeirah, Downtown, Dubai Marina and more. White‑glove guidance from first call to handover.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#properties"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                Browse listings
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Book a call
              </a>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-900">500+</span>
                units placed in 2024
              </div>
              <div className="hidden h-4 w-px bg-slate-200 sm:block" />
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-900">35+</span>
                developer partners
              </div>
              <div className="hidden h-4 w-px bg-slate-200 sm:block" />
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-900">4.9★</span>
                client rating
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
              <div className="relative aspect-[4/3] w-full">
                <div className="absolute inset-0">
                  <Spline
                    scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
                {/* Soften/clean with subtle veil & vignette */}
                <div className="pointer-events-none absolute inset-0 bg-white/35" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-white/20" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3 text-xs text-slate-500">
              <span className="h-2 w-2 rounded-full bg-cyan-500/80" />
              Interactive preview — move your cursor
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
