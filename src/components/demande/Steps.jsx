import { Button } from "../ui/button"
import { Calendar, Check, ArrowRight, ChevronLeft, ChevronRight, Clock } from "lucide-react"

export const Steps = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002366] mb-4">
            <span className="relative inline-block">
              Un agenda sur-mesure pour votre établissement
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#002366]/30 rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Plus besoin de décrocher, laissez les clients prendre leur rendez-vous et réserver du temps chez vous en
            toute autonomie.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side - Calendar Mockup (Updated to match establishment calendar) */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 max-w-md mx-auto">
              {/* Calendar Header */}
              <div className="bg-[#002366] p-3 sm:p-4 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                  <h2 className="text-base sm:text-lg font-bold">Sélectionnez un créneau</h2>
                </div>

                <div className="flex justify-between items-center">
                  <button
                    className="p-1.5 sm:p-2 rounded-full hover:bg-white/20 transition-colors"
                    aria-label="Semaine précédente"
                  >
                    <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>

                  <div className="text-center">
                    <span className="text-sm sm:text-base font-medium px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/20">
                      12 Juin - 18 Juin 2023
                    </span>
                  </div>

                  <button
                    className="p-1.5 sm:p-2 rounded-full hover:bg-white/20 transition-colors"
                    aria-label="Semaine suivante"
                  >
                    <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                </div>
              </div>

              {/* Calendar Content */}
              <div className="p-3 sm:p-4">
                {/* Days header */}
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {[
                    { day: "Lun", date: "12", isToday: false },
                    { day: "Mar", date: "13", isToday: false },
                    { day: "Mer", date: "14", isToday: false },
                    { day: "Jeu", date: "15", isToday: true },
                    { day: "Ven", date: "16", isToday: false },
                    { day: "Sam", date: "17", isToday: false },
                    { day: "Dim", date: "18", isToday: false },
                  ].map((day, index) => (
                    <div
                      key={index}
                      className={`
                        text-center py-2 px-1 rounded-lg
                        ${day.isToday ? "bg-[#002366] text-white" : "bg-gray-50"}
                      `}
                    >
                      <div className="font-medium text-xs uppercase">{day.day}</div>
                      <div className={`text-lg ${day.isToday ? "font-bold" : "font-medium"}`}>{day.date}</div>
                      <div className="text-xs opacity-80">Juin</div>
                    </div>
                  ))}
                </div>

                {/* Time slots */}
                <div className="grid grid-cols-7 gap-2 mt-4">
                  {/* Monday */}
                  <div className="flex flex-col gap-1">
                    <button className="relative px-1 py-2 rounded-lg  text-xs bg-blue-50 hover:bg-blue-100 text-gray-800 border border-blue-100">
                      <div className="flex items-center gap-1 justify-center">
                        <Clock className="h-3 w-3 text-blue-500" />
                        <span className="font-medium">09:00</span>
                      </div>
                    </button>
                    <button className="relative px-1 py-2 rounded-lg  text-xs bg-blue-50 hover:bg-blue-100 text-gray-800 border border-blue-100">
                      <div className="flex items-center gap-1 justify-center">
                        <Clock className="h-3 w-3 text-blue-500" />
                        <span className="font-medium">11:30</span>
                      </div>
                    </button>
                    <button className="relative px-1 py-2 rounded-lg  text-xs bg-blue-50 hover:bg-blue-100 text-gray-800 border border-blue-100">
                      <div className="flex items-center gap-1 justify-center">
                        <Clock className="h-3 w-3 text-blue-500" />
                        <span className="font-medium">14:00</span>
                      </div>
                    </button>
                  </div>

                  {/* Tuesday */}
                  <div className="flex flex-col gap-1">
                    <button className="relative px-1 py-2 rounded-lg  text-xs bg-blue-50 hover:bg-blue-100 text-gray-800 border border-blue-100">
                      <div className="flex items-center gap-1 justify-center">
                        <Clock className="h-3 w-3 text-blue-500" />
                        <span className="font-medium">10:00</span>
                      </div>
                    </button>
                    <button className="relative px-1 py-2 rounded-lg  text-xs bg-[#002366] text-white">
                      <div className="flex items-center gap-1 justify-center">
                        <Clock className="h-3 w-3 text-white" />
                        <span className="font-medium">13:30</span>
                      </div>
                    </button>
                  </div>

                  {/* Wednesday */}
                  <div className="flex flex-col gap-1">
                    <button className="relative px-1 py-2 rounded-lg  text-xs bg-blue-50 hover:bg-blue-100 text-gray-800 border border-blue-100">
                      <div className="flex items-center gap-1 justify-center">
                        <Clock className="h-3 w-3 text-blue-500" />
                        <span className="font-medium">09:30</span>
                      </div>
                    </button>
                    <button className="relative px-1 py-2 rounded-lg  text-xs bg-blue-50 hover:bg-blue-100 text-gray-800 border border-blue-100">
                      <div className="flex items-center gap-1 justify-center">
                        <Clock className="h-3 w-3 text-blue-500" />
                        <span className="font-medium">15:00</span>
                      </div>
                    </button>
                  </div>

                  {/* Thursday (Today) */}
                  <div className="flex flex-col gap-1">
                    <button className="relative px-1 py-2 rounded-lg  text-xs bg-blue-50 hover:bg-blue-100 text-gray-800 border border-blue-100">
                      <div className="flex items-center gap-1 justify-center">
                        <Clock className="h-3 w-3 text-blue-500" />
                        <span className="font-medium">10:30</span>
                      </div>
                    </button>
                    <button className="relative px-1 py-2 rounded-lg  text-xs bg-blue-50 hover:bg-blue-100 text-gray-800 border border-blue-100">
                      <div className="flex items-center gap-1 justify-center">
                        <Clock className="h-3 w-3 text-blue-500" />
                        <span className="font-medium">14:30</span>
                      </div>
                    </button>
                    <button className="relative px-1 py-2 rounded-lg  text-xs bg-blue-50 hover:bg-blue-100 text-gray-800 border border-blue-100">
                      <div className="flex items-center gap-1 justify-center">
                        <Clock className="h-3 w-3 text-blue-500" />
                        <span className="font-medium">16:00</span>
                      </div>
                    </button>
                  </div>

                  {/* Friday */}
                  <div className="flex flex-col gap-1">
                    <button className="relative px-1 py-2 rounded-lg  text-xs bg-blue-50 hover:bg-blue-100 text-gray-800 border border-blue-100">
                      <div className="flex items-center gap-1 justify-center">
                        <Clock className="h-3 w-3 text-blue-500" />
                        <span className="font-medium">11:00</span>
                      </div>
                    </button>
                    <button className="relative px-1 py-2 rounded-lg  text-xs bg-blue-50 hover:bg-blue-100 text-gray-800 border border-blue-100">
                      <div className="flex items-center gap-1 justify-center">
                        <Clock className="h-3 w-3 text-blue-500" />
                        <span className="font-medium">15:30</span>
                      </div>
                    </button>
                  </div>

                  {/* Saturday */}
                  <div className="flex flex-col gap-1">
                    <div className="text-center py-3 px-1 bg-gray-50 rounded-lg text-gray-400 text-xs border border-dashed border-gray-200">
                      Aucun créneau
                    </div>
                  </div>

                  {/* Sunday */}
                  <div className="flex flex-col gap-1">
                    <div className="text-center py-3 px-1 bg-gray-50 rounded-lg text-gray-400 text-xs border border-dashed border-gray-200">
                      Aucun créneau
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Features */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold text-[#002366] mb-6">Simplifiez la gestion de vos rendez-vous</h3>

            <ul className="space-y-4 mb-8">
              {[
                "Réservation 24/24H, 7/7j",
                "Optimisations des heures creuses",
                "Réservation depuis vos réseaux sociaux",
                "Mise à disposition d'outils marketing",
                'Réduction des "no-show" grâce aux rappels automatiques',
                "Gestion automatique de la liste d'attente",
                "Suivi des performances",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#002366] flex items-center justify-center mt-0.5 mr-3">
                    <Check size={14} className="text-white" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <Button className="border-2 border-[#002366] bg-[#002366] text-white py-4 px-8 rounded-xl text-lg font-medium hover:bg-white hover:text-[#002366] transition-all duration-300 flex items-center group">
              <span>Demander une démo GRATUITE</span>
              <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-all" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

