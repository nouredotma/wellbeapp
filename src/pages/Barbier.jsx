"use client"

import { MapPin, Scissors, Search } from "lucide-react"
import { useEffect, useState } from "react"
import Layout from "../components/Layout/Layout"
import { useNavigate } from "react-router-dom"
import { fetchTypesEstablishment } from "../services/establishmentService"

const cityNames = ["Casablanca", "Marrakech", "Rabat", "Tanger", "Fès"]

const Barbier = () => {
  const [showAllCities, setShowAllCities] = useState(false)
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState("")
  const [locationQuery, setLocationQuery] = useState("")
  const [establishmentTypes, setEstablishmentTypes] = useState([])
  const [selectedEstablishmentId, setSelectedEstablishmentId] = useState(null)

  // Typing effect states
  const [displayedWord, setDisplayedWord] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  // Typing effect states for "City Names"
  const [displayedWord1, setDisplayedWord1] = useState("")
  const [isTypingCity, setIsTypingCity] = useState(true)
  const [activeCityIndex, setActiveCityIndex] = useState(0)

  const word = "Barbier"

  // Fetch establishment types
  useEffect(() => {
    const getEstablishmentTypes = async () => {
      try {
        const types = await fetchTypesEstablishment()
        setEstablishmentTypes(types)
      } catch (error) {
        console.error("Error fetching establishment types:", error)
      }
    }
    getEstablishmentTypes()
  }, [])

  // Handle search submission
  const handleSearch = () => {
    if (searchQuery || locationQuery) {
      navigate(
        `/post-filter?establishmentId=${encodeURIComponent(
          selectedEstablishmentId || "",
        )}&location=${encodeURIComponent(locationQuery)}`,
      )
    }
  }

  // Typing effect animation
  useEffect(() => {
    let typingTimer
    let deletingTimer

    if (isTyping) {
      // Type the word
      if (displayedWord.length < word.length) {
        typingTimer = setTimeout(() => {
          setDisplayedWord(word.substring(0, displayedWord.length + 1))
        }, 150)
      } else {
        // Pause at the end of typing before deleting
        typingTimer = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
      }
    } else {
      // Delete the word
      if (displayedWord.length > 0) {
        deletingTimer = setTimeout(() => {
          setDisplayedWord(displayedWord.substring(0, displayedWord.length - 1))
        }, 75)
      } else {
        // Start typing again
        setTimeout(() => {
          setIsTyping(true)
        }, 500)
      }
    }

    return () => {
      clearTimeout(typingTimer)
      clearTimeout(deletingTimer)
    }
  }, [displayedWord, isTyping])

  // ✅ Separate Typing effect for "City Names"
  useEffect(() => {
    let typingTimer, deletingTimer
    const currentCity = cityNames[activeCityIndex]

    if (isTypingCity) {
      if (displayedWord1.length < currentCity.length) {
        typingTimer = setTimeout(() => {
          setDisplayedWord1(currentCity.substring(0, displayedWord1.length + 1))
        }, 150)
      } else {
        typingTimer = setTimeout(() => {
          setIsTypingCity(false)
        }, 2000)
      }
    } else {
      if (displayedWord1.length > 0) {
        deletingTimer = setTimeout(() => {
          setDisplayedWord1(displayedWord1.substring(0, displayedWord1.length - 1))
        }, 75)
      } else {
        setActiveCityIndex((prevIndex) => (prevIndex + 1) % cityNames.length)
        setIsTypingCity(true)
      }
    }

    return () => {
      clearTimeout(typingTimer)
      clearTimeout(deletingTimer)
    }
  }, [displayedWord1, isTypingCity, activeCityIndex])

  const cities = [
    {
      name: "Marrakech",
      image: "https://www.riadnayanour.com/wp-content/uploads/2023/09/Visiter-Marrakech-en-Ete-Hiver-1140x760.jpg",
    },
    {
      name: "Rabat",
      image:
        "https://www.visitmorocco.com/sites/default/files/styles/thumbnail_destination_background_top5/public/thumbnails/image/tour-hassan-rabat-morocco-by-migel.jpg?itok=YP8GLwSi",
    },
    {
      name: "Casablanca",
      image: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/469000/469964-Hassan-Ii-Mosque.jpg",
    },
    {
      name: "Mohammedia",
      image: "https://www.combien-coute.net/site/images/illustration/mohammedia.jpg",
    },
    {
      name: "Tanger",
      image: "https://hoteletlodge.fr/wp-content/uploads/2021/07/TANGER_02_HOTEL__LODGE.jpg",
    },
    {
      name: "Tétouan",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM2DctVevvkJMxLhiQP1Clhf2JV3k_PaUu2w&s",
    },
    {
      name: "Beni Mellal",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQMKHV6dnhKYbHNnU83FQRAmHh7-7cdyJpUA&s",
    },
    {
      name: "Agadir",
      image: "https://www.lavieeco.com/wp-content/uploads/2025/01/agadir.jpg",
    },
  ]

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

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 py-16 md:py-24">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')] bg-cover bg-center"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white">
              Réserver en ligne un RDV avec un{" "}
              <span className="text-white opacity-70 inline-block">{displayedWord}</span>
            </h1>
            <p className="text-slate-300 mb-8 text-lg">
              Trouvez votre barbier à <span className="text-white opacity-70 inline-block">{displayedWord1}</span>
            </p>
            <form
              onSubmit={handleSearch}
              className="w-full max-w-3xl sm:bg-transparent md:bg-white p-0 md:p-2 lg:rounded-full rounded-3xl shadow-2xl backdrop-blur-md transform transition-all duration-1000 hover:shadow-[0_20px_50px_rgba(0,35,102,0.2)]"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="h-5 w-5 absolute left-4 top-3.5 text-gray-400" />
                    <input
                      type="text"
                      list="establishment-types"
                      placeholder="Que recherchez-vous ?"
                      className="w-full h-12 mb-0 rounded-3xl border border-gray-300 pl-12 pr-4 text-gray-700 focus:outline-none focus:bg-gray-50 focus:ring-2 focus:ring-[#002366] focus:border-transparent transition-all"
                      value={searchQuery}
                      onChange={handleInputChange}
                    />
                    <datalist id="establishment-types">
                      {establishmentTypes.map((type, index) => (
                        <option key={index} value={type.type_establishment_label} />
                      ))}
                    </datalist>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="relative">
                    <MapPin className="h-5 w-5 absolute left-4 top-3.5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Adresse, ville..."
                      className="w-full h-12 mb-0 rounded-3xl border border-gray-300 pl-12 pr-4 text-gray-700 focus:outline-none focus:bg-gray-50 focus:ring-2 focus:ring-[#002366] focus:border-transparent transition-all"
                      value={locationQuery}
                      onChange={(e) => setLocationQuery(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="h-12 px-6 rounded-3xl bg-[#002366] text-white font-medium hover:bg-[#001a4d] transition-all duration-300 shadow-md flex items-center justify-center hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Search className="h-5 w-5 mr-2" />
                  RECHERCHER
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="w-full md:w-[90%] lg:w-[90%] mx-auto">
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center">
                <Scissors className="mr-3 h-6 w-6" />
                Barbier
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cities.slice(0, showAllCities ? cities.length : 3).map((city, index) => (
                <a
                  key={index}
                  href={`/post-filter?location=${encodeURIComponent(city.name)}&establishmentId=${encodeURIComponent(selectedEstablishmentId || "")}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={city.image || "/placeholder.svg"}
                      alt={`Barbier à ${city.name}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-slate-500 mb-1">Découvrez nos</p>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                      Barbier à {city.name}
                    </h3>
                    <p className="text-slate-600 mt-2 flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{Math.floor(Math.random() * 20) + 5} établissements</span>
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {cities.length > 3 && (
              <div className="mt-12 text-center">
                <button
                  onClick={() => setShowAllCities(!showAllCities)}
                  className="bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 px-6 py-3 rounded-md font-medium transition-all"
                >
                  {showAllCities ? "Afficher moins de villes" : "Découvrir plus de villes"}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Pourquoi réserver avec nous ?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Notre plateforme vous offre une expérience simple et pratique pour trouver et réserver votre prochain
              rendez-vous chez le barbier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Réservation rapide</h3>
              <p className="text-slate-600">Réservez votre rendez-vous en quelques clics, 24h/24 et 7j/7</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Professionnels vérifiés</h3>
              <p className="text-slate-600">Tous nos barbiers sont des professionnels qualifiés et vérifiés</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Avis clients</h3>
              <p className="text-slate-600">Consultez les avis des clients pour choisir le meilleur barbier</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Barbier

