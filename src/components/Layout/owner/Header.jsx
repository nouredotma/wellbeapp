import { Link } from "react-router-dom"

const OwnerHeader = () => {
  return (
    <header className="fixed top-0 w-full border-b bg-white text-black z-50 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl sm:text-2xl font-bold tracking-wide text-black hover:opacity-80 transition-opacity"
        >
          WELLBE PRO
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-lg">
          <Link to="#" className="text-gray-700 font-medium hover:text-black transition-colors">
            Agenda
          </Link>
          <Link to="#" className="text-gray-700 font-medium hover:text-black transition-colors">
            Clients
          </Link>
          <Link to="/admin" className="text-gray-700 font-medium hover:text-black transition-colors">
            Admin
          </Link>
        </nav>

        {/* Buttons Section */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium bg-black text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors">
            Centre d'aide
          </button>
        </div>
      </div>
    </header>
  )
}

export default OwnerHeader

