import { Bell, Calendar, TrendingUp, Users } from "lucide-react"

export const Activite = () => {
  return (
    <div className="w-full md:w-1/2 bg-gradient-to-br from-[#001233] to-[#001845] text-white p-8 md:p-12 flex flex-col justify-center min-h-[300px] md:min-h-[600px] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1607006344380-b6775a0824a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80')] bg-cover bg-center"></div>
      </div>

      <div className="relative z-10">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-10 leading-tight">
          Prêt à faire <span className="text-white drop-shadow-md">décoller</span> votre activité ?
        </h1>

        <div className="grid grid-cols-2 gap-4 md:gap-8 lg:gap-10 text-center">
          <div className="bg-white/5 backdrop-blur-sm p-4 md:p-6 rounded-xl transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:scale-105">
            <Bell size={32} className="mx-auto text-white" />
            <h3 className="font-semibold mt-3 text-base md:text-lg">Rappels automatiques</h3>
            <p className="text-xs md:text-sm text-gray-300 mt-2">Fini les oublis et les no-show</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-4 md:p-6 rounded-xl transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:scale-105">
            <Calendar size={32} className="mx-auto text-white" />
            <h3 className="font-semibold mt-3 text-base md:text-lg">7/7J, 24/24H</h3>
            <p className="text-xs md:text-sm text-gray-300 mt-2">Vos clients prennent rendez-vous en autonomie</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-4 md:p-6 rounded-xl transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:scale-105">
            <TrendingUp size={32} className="mx-auto text-white" />
            <h3 className="font-semibold mt-3 text-base md:text-lg">Booster votre CA</h3>
            <p className="text-xs md:text-sm text-gray-300 mt-2">Fidélisez vos clients et suivez vos performances</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-4 md:p-6 rounded-xl transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:scale-105">
            <Users size={32} className="mx-auto text-white" />
            <h3 className="font-semibold mt-3 text-base md:text-lg">Nouveaux clients</h3>
            <p className="text-xs md:text-sm text-gray-300 mt-2">
              Augmentez votre présence en ligne et gagnez en visibilité
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

