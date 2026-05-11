"use client"

import { useState } from "react"
import { Star, User, Phone } from "lucide-react"

export const Owner = ({ establishment }) => {
  // Sample images - keeping the same ones from original
  const images = [
    "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvaWZmZXVyfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1617391654484-2894196c2cc9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNvaWZmZXVyfGVufDB8fDB8fHww",
  ]

  // State to track the currently selected image
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  // Rating data - keeping the same from original
  const rating = {
    count: 3,
    value: 4.4,
  }

  return (
    <section className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
      {/* Image Gallery - Responsive Layout with increased height */}
      <div className="relative w-full">
        {/* Main large image with increased height */}
        <div className="relative h-80 sm:h-96 md:h-[490px] overflow-hidden">
          <img
            src={images[selectedImageIndex] || "/placeholder.svg"}
            alt={`${establishment.establishment_label} - Main`}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          {/* Bottom to top gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

          {/* All information overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
            {/* Establishment name and rating */}
            <h1 className="text-2xl sm:text-3xl font-bold mb-2 drop-shadow-md">{establishment.establishment_label}</h1>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 sm:w-5 sm:h-5 drop-shadow-md ${i < Math.floor(rating.value) ? "fill-yellow-400 text-yellow-400" : "fill-gray-400 text-gray-400"}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-1">
                <span className="font-semibold">{rating.value}</span>
                <span className="text-sm text-gray-200">({rating.count} avis)</span>
              </div>
            </div>

            {/* Owner Info - now inside the overlay */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-2">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-gray-300" />
                <span className="text-gray-300 text-sm">Propriétaire:</span>
                <span className="text-white font-medium">
                  {establishment.User.user_first_name || "N/A"} {establishment.User.user_name || ""}
                </span>
              </div>

              {establishment.User.user_phone && (
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-300" />
                  <span className="text-gray-300 text-sm">Téléphone:</span>
                  <a
                    href={`tel:${establishment.User.user_phone}`}
                    className="text-white hover:text-blue-200 transition-colors"
                  >
                    {establishment.User.user_phone}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Thumbnail strip - improved for mobile */}
        <div className="absolute bottom-20 sm:bottom-24 right-4 flex gap-1 sm:gap-2 p-1 sm:px-2 sm:py-1 bg-white/80 backdrop-blur-sm rounded-full">
          {images.map((img, index) => (
            <div
              key={index}
              className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 ${index === selectedImageIndex ? "border-blue-500" : "border-white/70 hover:border-blue-300"} transition-all cursor-pointer`}
              onClick={() => setSelectedImageIndex(index)}
            >
              <img
                src={img || "/placeholder.svg"}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

