"use client"

import { Menu, User, X } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
// Import the logo images
import logoWhite from "../../assets/logo-white.png"
import logoBlue from "../../assets/logo-blue.png"
import logoPro from "../../assets/logo-pro.png"

const Header = ({ isHomePage = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  // Check if current page is the Demande page
  const isDemandePage = location.pathname === "/demande"

  // Check if user is logged in
  useEffect(() => {
    const userUUID = localStorage.getItem("user_uuid")
    setIsLoggedIn(!!userUUID)
  }, [])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isMenuOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  const navLinks = [
    { name: "coiffeur", path: "/coiffeur" },
    { name: "barbier", path: "/barbier" },
    { name: "institus", path: "/institus" },
    { name: "spa & Hamam", path: "/spa" },
  ]

  // Determine which logo to use
  let logoSrc
  if (isDemandePage) {
    logoSrc = logoPro
  } else {
    logoSrc = isHomePage && !isScrolled ? logoWhite : logoBlue
  }

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-500 ${
        isHomePage
          ? isScrolled
            ? "bg-white shadow-md border-b border-gray-100"
            : "bg-transparent"
          : "bg-white shadow-md border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-3 sm:px-6 lg:px-8">
        {/* Mobile: Left - Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className={`p-1.5 rounded-md ${
              isHomePage && !isScrolled ? "hover:bg-white/20 text-white" : "hover:bg-gray-100 text-[#002366]"
            }`}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>

        {/* Desktop: Left - Logo */}
        <div className="hidden md:flex items-center">
          <Link to="/home" className="transition-all duration-300 hover:opacity-90">
            <img src={logoSrc || "/placeholder.svg"} alt="WELLBE" className="h-12 sm:h-12 w-auto object-contain" />
          </Link>
        </div>

        {/* Mobile: Center - Logo */}
        <div className="flex md:hidden items-center justify-center">
          <Link to="/home" className="transition-all duration-300 hover:opacity-90">
            <img src={logoSrc || "/placeholder.svg"} alt="WELLBE" className="h-12 sm:h-12 w-auto object-contain" />
          </Link>
        </div>

        {/* Desktop: Center - Navigation */}
        <nav className="hidden md:flex items-center justify-center gap-4 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative font-medium transition-colors group py-1 ${
                isHomePage && !isScrolled ? "text-white hover:text-gray-200" : "text-gray-700 hover:text-[#002366]"
              }`}
            >
              <span className="flex items-center">{link.name.charAt(0).toUpperCase() + link.name.slice(1)}</span>
              <span
                className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                  isHomePage && !isScrolled ? "bg-white" : "bg-[#002366]"
                }`}
              ></span>
            </Link>
          ))}
        </nav>

        {/* Desktop: Right - Actions */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4">
          <Link
            to="/demande"
            className={`border-2 px-2 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
              isHomePage && !isScrolled
                ? "border-white text-white hover:bg-white hover:text-[#002366]"
                : "border-[#002366] text-[#002366] hover:bg-[#002366] hover:text-white"
            }`}
          >
            Ajoutez votre établissement
          </Link>

          {isLoggedIn ? (
            <button
              onClick={() => navigate("/mon-compte")}
              className={`border-2 px-2 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md ${
                isHomePage && !isScrolled
                  ? "border-white bg-white text-[#002366] hover:bg-gray-100"
                  : "border-[#002366] bg-[#002366] text-white hover:bg-[#001a4d]"
              }`}
            >
              <User className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>Mon compte</span>
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className={`border-2 px-2 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md ${
                isHomePage && !isScrolled
                  ? "border-white bg-white text-[#002366] hover:bg-[#002366] hover:text-white hover:border-[#002366]"
                  : "border-[#002366] bg-[#002366] text-white hover:bg-white hover:text-[#002366]"
              }`}
            >
              <User className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>Se connecter</span>
            </button>
          )}
        </div>

        {/* Mobile: Right - Account Button */}
        <div className="flex md:hidden">
          {isLoggedIn ? (
            <button
              onClick={() => navigate("/mon-compte")}
              className={`p-1.5 rounded-md ${
                isHomePage && !isScrolled ? "hover:bg-white/20 text-white" : "hover:bg-gray-100 text-[#002366]"
              }`}
              aria-label="Mon compte"
            >
              <User className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className={`p-1.5 rounded-md ${
                isHomePage && !isScrolled ? "hover:bg-white/20 text-white" : "hover:bg-gray-100 text-[#002366]"
              }`}
              aria-label="Se connecter"
            >
              <User className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu - Fixed positioning to ensure it works on all pages */}
      <div
        className={`fixed top-0 left-0 w-[85%] sm:w-[75%] h-full bg-white shadow-xl md:hidden z-[100] flex flex-col transition-all duration-300 ease-in-out overflow-y-auto ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ height: "100vh" }}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <Link to="/home" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
            <img src={logoBlue || "/placeholder.svg"} alt="WELLBE" className="h-10 w-auto object-contain" />
          </Link>
          <button
            className="p-2 rounded-md hover:bg-gray-100 text-[#002366]"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Fermer le menu"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>

        <nav className="flex flex-col py-4 overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="py-3 px-5 border-b border-gray-100 text-gray-700 hover:text-[#002366] hover:bg-gray-50 transition-colors"
            >
              {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
            </Link>
          ))}
        </nav>

        <div className="mt-auto p-5 border-t border-gray-100 flex flex-col gap-3">
          <Link
            to="/demande"
            onClick={() => setIsMenuOpen(false)}
            className="block w-full border-2 border-[#002366] text-[#002366] px-4 py-2 rounded-lg text-center font-medium hover:bg-[#002366] hover:text-white transition-colors"
          >
            Ajoutez votre établissement
          </Link>

          {isLoggedIn ? (
            <button
              onClick={() => {
                navigate("/mon-compte")
                setIsMenuOpen(false)
              }}
              className="w-full bg-[#002366] text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-[#001a4d] flex items-center justify-center gap-2 transition-colors"
            >
              <User className="h-4 w-4" />
              <span>Mon compte</span>
            </button>
          ) : (
            <button
              onClick={() => {
                navigate("/login")
                setIsMenuOpen(false)
              }}
              className="w-full bg-[#002366] text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-[#001a4d] flex items-center justify-center gap-2 transition-colors"
            >
              <User className="h-4 w-4" />
              <span>Se connecter</span>
            </button>
          )}
        </div>
      </div>

      {/* Overlay for mobile menu - Higher z-index to ensure it works on all pages */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-[99]"
          onClick={() => setIsMenuOpen(false)}
          style={{ height: "100vh" }}
        ></div>
      )}
    </header>
  )
}

export default Header

