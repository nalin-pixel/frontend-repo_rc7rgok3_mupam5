export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-10">
      {eyebrow && (
        <p className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 text-cyan-700 border border-cyan-500/20 text-xs font-semibold">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-gray-600">{subtitle}</p>
      )}
    </div>
  )
}
