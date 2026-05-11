"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import { cities } from "./data"

export const Dispo = () => {
  const carouselRef = useRef(null)

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50 text-black">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#002366] mb-4">
            <span className="relative inline-block">
              Partout au Maroc
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#002366]/30 rounded-full"></span>
            </span>
          </h2>
          <h3 className="text-xl sm:text-2xl font-medium text-gray-700">
            Trouvez votre prestataire, où que vous soyez.
          </h3>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-[#002366] rounded-full p-3 shadow-lg hover:bg-[#002366] hover:text-white transition-all duration-300 z-10 border border-gray-200 group"
          >
            <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform" />
          </button>

          {/* Image Carousel */}
          <div ref={carouselRef} className="flex space-x-6 overflow-x-auto no-scrollbar scroll-smooth py-4 px-2">
            {cities.map((city, index) => (
              <div
                key={index}
                className="min-w-[300px] sm:min-w-[350px] bg-white rounded-xl shadow-lg overflow-hidden relative group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={city.image || "/placeholder.svg"}
                    alt={city.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* City Details */}
                <div className="p-4 text-center">
                  <p className="text-xl font-semibold text-[#002366] flex items-center justify-center">
                    <MapPin className="h-5 w-5 mr-1 text-[#002366]/70" />
                    {city.name}
                  </p>
                </div>

                {/* Hover overlay with button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-[#002366] text-white px-6 py-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                    Explorer {city.name}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-[#002366] rounded-full p-3 shadow-lg hover:bg-[#002366] hover:text-white transition-all duration-300 z-10 border border-gray-200 group"
          >
            <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* View All Cities Button */}
        <div className="text-center mt-10">
          <button className="inline-flex items-center px-6 py-3 bg-white border-2 border-[#002366] text-[#002366] rounded-lg font-medium hover:bg-[#002366] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
            Voir toutes les villes
            <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

