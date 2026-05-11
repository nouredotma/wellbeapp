"use client"

import { Tag } from "lucide-react"

export const Services = ({ services, addToCart }) => {
  if (!services || services.length === 0) {
    return (
      <div className="text-center py-8">
        <Tag className="h-12 w-12 text-gray-300 mx-auto mb-3" />
        <p className="text-gray-500 mb-1">Aucun service disponible</p>
        <p className="text-gray-400 text-sm">Veuillez réessayer ultérieurement.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center gap-2 mb-6">
        <div className="bg-[#002366]/20 p-2 rounded-full">
         <Tag className="h-5 w-5 text-[#002366]" />
        </div>
        <h2 className="text-xl font-bold">Services disponibles</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="border border-gray-200 bg-gradient-to-b from-[#f0f4ff] to-[#e6eeff] text-[#002366] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">{service.product_name}</h3>
                <span className="font-bold text-[#002366]">{service.product_price} MAD</span>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {service.product_description || "Aucune description disponible"}
              </p>

              <button
                onClick={() => addToCart(service)}
                className="w-full py-2 rounded-md border-2 border-[#002366] bg-[#002366] hover:bg-transparent text-white hover:text-[#002366] transition-colors"
              >
                Choisir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

