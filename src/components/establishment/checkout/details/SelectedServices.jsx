"use client"

import { ShoppingBag, X } from "lucide-react"

export const SelectedServices = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce((sum, service) => sum + service.product_price, 0)

  return (
    <section className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
        <div className="flex items-center gap-2 mb-3 sm:mb-0">
          <div className="bg-blue-50 p-2 rounded-full">
            <ShoppingBag className="h-5 w-5 text-[#002366]" />
          </div>
          <h2 className="text-xl font-bold text-[#002366]">Prestation sélectionnée</h2>
        </div>
        <div className="bg-[#002366] px-4 py-2 rounded-full text-white">
          <span className="font-medium">Total: </span>
          <span className="font-bold">{totalPrice} MAD</span>
        </div>
      </div>

      {cart.length > 0 ? (
        <div className="space-y-3">
          {cart.map((service, index) => (
            <div
              key={index}
              className="bg-blue-50 border border-blue-100 rounded-lg overflow-hidden transition-all hover:shadow-md group"
            >
              <div className="flex justify-between items-start p-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#002366] transition-colors">
                    {service.product_name}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {service.product_description || "Aucune description disponible"}
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-bold text-[#002366] text-lg mb-2 bg-white px-3 py-1 rounded-full shadow-sm">
                    {service.product_price} MAD
                  </span>
                  <button
                    onClick={() => removeFromCart(service.product_uuid)}
                    className="flex items-center gap-1 text-sm text-red-600 hover:text-red-800 transition-colors bg-white/80 hover:bg-white px-2 py-1 rounded-full"
                    aria-label="Retirer du panier"
                  >
                    <X className="h-4 w-4" />
                    <span>Retirer</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 bg-gray-50 rounded-lg border border-dashed border-gray-300">
          <div className="bg-white p-3 rounded-full inline-flex items-center justify-center mb-3 shadow-sm">
            <ShoppingBag className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-700 mb-1">Aucun service sélectionné</h3>
          <p className="text-gray-500 max-w-md mx-auto text-sm">Veuillez choisir au moins un service pour continuer.</p>
        </div>
      )}
    </section>
  )
}

