export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500" />
          <p className="text-sm">© 2025 Dubai Estates. All rights reserved.</p>
        </div>
        <div className="text-sm text-gray-400">RERA ORN 0000 • Dubai, United Arab Emirates</div>
      </div>
    </footer>
  )
}
