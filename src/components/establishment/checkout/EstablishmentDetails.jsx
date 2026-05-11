import SimpleMap from "../../../pages/establishmentMap"
import { Owner } from "./details/Owner"
import { Services } from "./details/Services"
import { MapPin, Users, Info } from "lucide-react"

const EstablishmentDetails = ({ establishment, services, personnels, addToCart }) => {
  return (
    <div className="max-w-7xl">
      {/* Owner Section */}
      <div className="mb-12">
        <Owner establishment={establishment} />
      </div>

      {/* Services Section */}
      <div className="mb-12">
        <Services services={services} addToCart={addToCart} />
      </div>

      {/* Location Section */}
      <section className="mb-12 bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue-50 p-2 rounded-full">
            <MapPin className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold">Où se situe le salon ?</h2>
        </div>

        {establishment.Location ? (
          <div className="mb-6">
            <p className="text-gray-700 text-lg">
              {establishment.Location.location_city || "NAN"} <span className="mx-2">•</span>
              {establishment.Location.location_code_postal || "NAN"} <span className="mx-2">•</span>
              {establishment.Location.location_country || "NAN"}
            </p>
          </div>
        ) : (
          <div className="bg-red-50 p-4 rounded-lg mb-6">
            <p className="text-red-600 font-medium">Localisation inconnue</p>
          </div>
        )}

        <div className="rounded-xl overflow-hidden border border-gray-200 h-[300px] sm:h-[400px]">
          <SimpleMap />
        </div>
      </section>

      {/* Personnels Section */}
      <section className="mb-12 bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-purple-50 p-2 rounded-full">
            <Users className="h-6 w-6 text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold">Choix de personnels</h2>
        </div>

        {personnels.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {personnels.map((personnel, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md hover:border-gray-300"
              >
                <div className="bg-[#002366] p-5 text-white">
                  <h3 className="text-lg font-semibold truncate">
                    {personnel.User.user_name} {personnel.User.user_first_name}
                  </h3>
                  <p className="text-white/80 text-sm mt-1">Professionnel</p>
                </div>
                <div className="p-4">
                  <p className="font-medium text-gray-800 flex items-center gap-2">
                    <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
                    {personnel.User.user_phone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 p-6 rounded-xl text-center">
            <p className="text-gray-500 font-medium">Aucun personnel disponible pour le moment.</p>
          </div>
        )}
      </section>

      {/* À-propos Section */}
      <section className="mb-12 bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-amber-50 p-2 rounded-full">
            <Info className="h-6 w-6 text-amber-600" />
          </div>
          <h2 className="text-2xl font-bold">À-propos</h2>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl">
          {establishment.establishment_description ? (
            <p className="text-gray-700 leading-relaxed">{establishment.establishment_description}</p>
          ) : (
            <p className="text-gray-500 italic">Aucune description disponible.</p>
          )}
        </div>
      </section>
    </div>
  )
}

export default EstablishmentDetails

