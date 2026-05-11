"use client"

import { Facebook, Instagram, Linkedin, LifeBuoy } from "lucide-react"
import { Link } from "react-router-dom"

export const Footer = () => {
  // Commented out newsletter functionality for later use
  /*
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setEmail("")

      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000)
    }, 800)
  }
  */

  return (
    <footer className="bg-[#002366] px-6 py-12 text-white">
      <div className="container mx-auto">
        {/* Logo and social links - moved to contact section */}
        <div className="mb-12 text-center">{/* Tagline and social links moved to contact section */}</div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-10 gap-x-6  sm:gap-x-8 lg:gap-x-12">
          {/* Contact section - takes more space on larger screens */}
          <div className="lg:col-span-5">
            <h4 className="text-3xl font-semibold mb-6 relative inline-block">
              W E L L B E<span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-white"></span>
            </h4>

            <p className="mt-2 mb-6 text-gray-200 text-lg">Prenez soin de vous, on s'occupe du reste</p>

            <div className="flex gap-8 mb-8">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>

            <div className="mb-8">
              <Link
                to="/support"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 transition-all duration-300 group"
              >
                <LifeBuoy className="h-5 w-5 text-white animate-pulse" />
                <span className="font-medium">Support 24/7</span>
              </Link>
            </div>

            {/* Newsletter form commented out for later use */}
            {/*
            <div className="mt-8">
              <form onSubmit={handleSubmit} className="space-y-2">
                <div className="relative group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all pr-12 bg-white/10 text-white placeholder-gray-300"
                    aria-label="Email pour la newsletter"
                    disabled={isSubmitting || isSubmitted}
                  />
                  <button
                    type="submit"
                    className={`absolute right-2 top-6 transform -translate-y-1/2 text-[#002366] p-2 rounded-full transition-all ${
                      isSubmitting ? "bg-gray-400" : isSubmitted ? "bg-green-500" : "bg-white hover:bg-gray-200"
                    }`}
                    aria-label="S'inscrire à la newsletter"
                    disabled={isSubmitting || isSubmitted}
                  >
                    {isSubmitting ? (
                      <div className="h-4 w-4 border-2 border-[#002366] border-t-transparent rounded-full animate-spin"></div>
                    ) : isSubmitted ? (
                      <ArrowRight className="h-4 w-4 text-white" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </button>
                </div>
                {isSubmitted && <p className="text-sm text-green-300 animate-fadeIn">Merci pour votre inscription!</p>}
                <p className="text-sm text-gray-300">Votre dose de bien-être, directement dans votre boite mail</p>
              </form>
            </div>
            */}
          </div>

          {/* Navigation columns */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6">
              {/* À PROPOS */}
              <div>
                <h4 className="text-lg font-semibold mb-6 relative inline-block">
                  À PROPOS
                  <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-white"></span>
                </h4>
                <ul className="space-y-4">
                  {["CGU", "Questions fréquentes", "Carrière", "Notre équipe"].map((item, index) => (
                    <li key={index}>
                      <Link
                        to={
                          item === "Questions fréquentes"
                            ? "/questions-frequentes"
                            : item === "Carrière"
                              ? "/carriere"
                              : item === "Notre équipe"
                                ? "/notre-equipe"
                                : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                        }
                        className="text-gray-300 hover:text-white transition-colors duration-300 inline-flex items-center group"
                      >
                        <span className="relative overflow-hidden">
                          {item}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* DÉCOUVREZ */}
              <div>
                <h4 className="text-lg font-semibold mb-6 relative inline-block">
                  DÉCOUVREZ
                  <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-white"></span>
                </h4>
                <ul className="space-y-4">
                  {["Les incontournables", "Articles", "Le Blog"].map((item, index) => (
                    <li key={index}>
                      <Link
                        to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-gray-300 hover:text-white transition-colors duration-300 inline-flex items-center group"
                      >
                        <span className="relative overflow-hidden">
                          {item}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* PARTENAIRES */}
              <div>
                <h4 className="text-lg font-semibold mb-6 relative inline-block">
                  PARTENAIRES
                  <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-white"></span>
                </h4>
                <ul className="space-y-4">
                  {["Devenir partenaire", "FAQ partenaires", "Le Studio", "Solutions", "Tarif"].map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item === "Tarif" ? "/tarifs" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-gray-300 hover:text-white transition-colors duration-300 inline-flex items-center group"
                      >
                        <span className="relative overflow-hidden">
                          {item}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center">
          <p className="text-gray-300">© {new Date().getFullYear()} WELLBE. Tous droits réservés.</p>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </footer>
  )
}

