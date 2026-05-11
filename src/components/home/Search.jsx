"use client"

import { ChevronDown, MapPin, SearchIcon, Sparkles, User } from "lucide-react"
import { useCallback, useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { fetchTypesEstablishment } from "../../services/establishmentService"

import backgroundImage from "../../assets/wellbe-background.png"

const PHRASES = ["en trois clics", "sans stress", "rapidement"]

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [query, setQuery] = useState("")
  const [establishmentTypes, setEstablishmentTypes] = useState([])
  const navigate = useNavigate()
  const [selectedEstablishmentId, setSelectedEstablishmentId] = useState(null)
  const inputRef = useRef(null)
  const contentSectionRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [displayedPhrase, setDisplayedPhrase] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight)
  const sectionRef = useRef(null)

  // Update viewport height on resize and on initial load
  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight)
      if (sectionRef.current) {
        sectionRef.current.style.height = `${window.innerHeight}px`
      }
    }

    // Set initial height
    handleResize()

    // Add event listener for resize
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  // Improved typing animation
  useEffect(() => {
    const currentPhrase = PHRASES[activeIndex]
    let typingTimer
    let deletingTimer

    if (isTyping) {
      // Type the current phrase
      if (displayedPhrase.length < currentPhrase.length) {
        typingTimer = setTimeout(() => {
          setDisplayedPhrase(currentPhrase.substring(0, displayedPhrase.length + 1))
        }, 100)
      } else {
        // Pause at the end of typing before starting to delete
        typingTimer = setTimeout(() => {
          setIsTyping(false)
        }, 1500)
      }
    } else {
      // Delete the current phrase
      if (displayedPhrase.length > 0) {
        deletingTimer = setTimeout(() => {
          setDisplayedPhrase(displayedPhrase.substring(0, displayedPhrase.length - 1))
        }, 50)
      } else {
        // Move to the next phrase
        const nextIndex = (activeIndex + 1) % PHRASES.length
        setActiveIndex(nextIndex)
        setIsTyping(true)
      }
    }

    return () => {
      clearTimeout(typingTimer)
      clearTimeout(deletingTimer)
    }
  }, [activeIndex, displayedPhrase, isTyping])

  const fetchTypesEstablishments = useCallback(async () => {
    try {
      const data = await fetchTypesEstablishment()
      setEstablishmentTypes(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error("Error fetching establishment types:", error)
      setEstablishmentTypes([])
    }
  }, [])

  const handleSearch = () => {
    if (selectedEstablishmentId || query) {
      navigate(
        `/post-filter?establishmentId=${encodeURIComponent(
          selectedEstablishmentId || "",
        )}&location=${encodeURIComponent(query)}`,
      )
    }
  }

  // Handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleSearch()
    }
  }

  useEffect(() => {
    fetchTypesEstablishments()
    // Add animation delay
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [fetchTypesEstablishments])

  const handleInputChange = (e) => {
    const input = e.target.value
    setSearchQuery(input)

    // Add null check before using find
    if (establishmentTypes && establishmentTypes.length > 0) {
      const selectedType = establishmentTypes.find((type) => type.type_establishment_label === input)

      if (selectedType) {
        setSelectedEstablishmentId(selectedType.type_establishment_id)
      } else {
        setSelectedEstablishmentId(null)
      }
    }
  }

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ height: `${viewportHeight}px` }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={backgroundImage || "/placeholder.svg"}
          alt="Beauty professionals"
          className="absolute inset-0 object-cover w-full h-full scale-105 transition-transform duration-10000 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pb-16 sm:pb-0 text-white pt-16">
        <div className="mb-8 max-w-3xl">
          <h1
            className={`text-2xl sm:text-4xl md:text-5xl px-1 lg:px-0 font-bold leading-tight drop-shadow-md transition-all duration-1000 transform text-white text-left ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Prenez soin de vous, on s'occupe <br  className="hidden sm:hidden md:block" />
            du reste <span className="text-white opacity-70 inline-block">{displayedPhrase}</span>
          </h1>
        </div>

        {/* Search Box */}
        <div
          className={`w-full max-w-3xl p-0 md:p-2 lg:rounded-full rounded-3xl md:bg-white sm:bg-transparent transform transition-all duration-1000 hover:shadow-[0_20px_50px_rgba(0,35,102,0.2)] ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <User className="h-5 w-5 absolute left-4 top-3.5 text-gray-400" />
                <input
                  list="establishments"
                  value={searchQuery}
                  onChange={handleInputChange}
                  placeholder="Que recherchez-vous?..."
                  className="w-full h-12 mb-0 rounded-3xl border border-gray-300 pl-12 pr-4 text-gray-700 focus:outline-none focus:bg-gray-50 focus:ring-2 focus:ring-[#002366] focus:border-transparent transition-all"
                />
                <datalist id="establishments">
                  {Array.isArray(establishmentTypes) &&
                    establishmentTypes.length > 0 &&
                    establishmentTypes.map((type) => (
                      <option key={type.type_establishment_id} value={type.type_establishment_label} />
                    ))}
                </datalist>
              </div>
            </div>

            <div className="flex-1">
              <div className="relative">
                <MapPin className="h-5 w-5 absolute left-4 top-3.5 text-gray-400" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Adresse, ville, etc."
                  className="w-full h-12 mb-0 rounded-3xl border border-gray-300 pl-12 pr-4 text-gray-700 focus:outline-none focus:bg-gray-50 focus:ring-2 focus:ring-[#002366] focus:border-transparent transition-all"
                />
              </div>
            </div>

            <button
              onClick={handleSearch}
              className="h-12 px-6 rounded-3xl bg-[#002366] text-white font-medium hover:bg-[#001a4d] transition-all duration-300 shadow-md flex items-center justify-center hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <SearchIcon className="h-5 w-5 mr-2" />
              RECHERCHER
            </button>
          </div>
        </div>

        {/* Trending searches */}
        <div
          className={`mt-6 flex flex-wrap justify-center gap-2 transition-all duration-1000 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <span className="text-sm text-white/80 mr-2 flex items-center">
            <Sparkles className="h-3 w-3 mr-1" /> Populaire:
          </span>
          {["Coiffeur Casablanca", "Spa Marrakech", "Barbier Rabat"].map((term, index) => (
            <button
              key={index}
              onClick={() => {
                setQuery(term.split(" ")[1])
                setSearchQuery(term.split(" ")[0].toLowerCase())
                // Add null check before using find
                if (establishmentTypes && establishmentTypes.length > 0) {
                  const type = establishmentTypes.find(
                    (t) => t.type_establishment_label.toLowerCase() === term.split(" ")[0].toLowerCase(),
                  )
                  if (type) setSelectedEstablishmentId(type.type_establishment_id)
                }
              }}
              className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded-full text-sm backdrop-blur-sm transition-all duration-300"
            >
              {term}
            </button>
          ))}
        </div>
      </div>

      {/* Animated Down Arrow - Only visible on mobile */}
      <div
        className={`sm:hidden absolute bottom-8 transform -translate-x-1/2 cursor-pointer animate-bounce transition-all duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onClick={scrollToContent}
        style={{ transitionDelay: "600ms" }}
      >
        <div className="flex flex-col items-center text-white">
          <div className="p-2 w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-sm">
            <ChevronDown className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </section>
  )
}

