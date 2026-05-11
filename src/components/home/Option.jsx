"use client"

import { ArrowRight, Clock, CreditCard, Gift, MapPin, Star, Users } from "lucide-react"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"

export const Option = () => {
  const inputRef = useRef(null)
  const navigate = useNavigate()

  // Feature data - keeping the same data
  const customerFeatures = [
    { icon: Clock, title: "3 Clics", description: "pour réserver, sans appel ni attente" },
    { icon: Gift, title: "Offres", description: "Des avantages exclusifs tout au long de l'année" },
    { icon: Star, title: "100%", description: "Avis de clients authentiques et vérifiés" },
    { icon: CreditCard, title: "Sécurisé", description: "Payez en ligne ou sur place, sans stress" },
  ]

  const proFeatures = [
    { icon: Clock, title: "Rappels automatiques", description: "Fini les oublis et les no-show" },
    { icon: MapPin, title: "7/7J, 24/24H", description: "Vos clients prennent rendez-vous en autonomie" },
    {
      icon: Users,
      title: "Nouveaux clients",
      description: "Augmentez votre présence en ligne et gagnez en visibilité",
    },
    { icon: Star, title: "Booster votre CA", description: "Fidélisez vos clients et suivez vos performances" },
  ]

  const handleScrollAndFocus = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }, 500)
  }

  const handleRedirect = () => {
    navigate("/demande")
  }

  return (
    <section className="py-12">
      <div className="container mx-auto max-w-6xl">
        {/* Keeping the title/h2 as requested */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#002366]">
            <span className="relative inline-block">
              Pourquoi choisir WELLBE ?
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#002366]/30 rounded-full"></span>
            </span>
          </h2>
        </div>

        {/* New layout with both sections in one row on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Clients Section */}
          <div className="relative">
            {/* Section header - consistent styling */}
            <div className="bg-[#f0f4ff] rounded-lg p-4 shadow-sm border border-gray-100 mb-4">
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="bg-[#002366]/10 p-2 rounded-full">
                      <Star className="h-5 w-5 text-[#002366]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Pour les clients</h3>
                  <p className="text-sm text-gray-500">Trouvez et réservez facilement</p>
                </div>
              </div>
            </div>

            {/* Features grid - 3D flip cards - Start from left */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3">
              {customerFeatures.map((feature, index) => (
                <div key={index} className="flip-card-container h-[100px] md:h-[120px] lg:h-[140px]">
                  {/* 3D flip card with auto animation - Start from left (index * 0.5s) */}
                  <div className="flip-card" style={{ animationDelay: `${index * 0.5}s` }}>
                    {/* Front side - just icon */}
                    <div className="flip-card-front bg-[#f0f4ff] rounded-lg flex items-center justify-center">
                      <feature.icon className="h-8 w-8 md:h-10 md:w-10 text-[#002366]" />
                    </div>
                    {/* Back side - just text */}
                    <div className="flip-card-back bg-white rounded-lg flex flex-col items-center justify-center p-2 text-center">
                      <h4 className="text-base md:text-lg font-bold text-gray-800">{feature.title}</h4>
                      <p className="text-xs md:text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-4">
              <button
                onClick={handleScrollAndFocus}
                className="w-full bg-[#002366] hover:bg-[#001a4d] text-white py-2 px-4 rounded-lg text-sm font-medium transition duration-200 flex items-center justify-center group"
              >
                <span>Réserver une prestation</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Professionals Section */}
          <div className="relative">
            {/* Section header - consistent styling */}
            <div className="bg-[#002366] rounded-lg p-4 shadow-sm mb-4 text-white">
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="bg-white/20 p-2 rounded-full">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">Pour les professionnels</h3>
                  <p className="text-sm text-blue-100">Développez votre activité</p>
                </div>
              </div>
            </div>

            {/* Features grid - 3D flip cards - Start from right */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3">
              {proFeatures.map((feature, index) => (
                <div key={index} className="flip-card-container h-[100px] md:h-[120px] lg:h-[140px]">
                  {/* 3D flip card with auto animation - Start from right ((proFeatures.length - 1 - index) * 0.5s) */}
                  <div className="flip-card" style={{ animationDelay: `${(proFeatures.length - 1 - index) * 0.5}s` }}>
                    {/* Front side - just icon */}
                    <div className="flip-card-front bg-[#002366] rounded-lg flex items-center justify-center">
                      <feature.icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
                    </div>
                    {/* Back side - just text */}
                    <div className="flip-card-back bg-white rounded-lg flex flex-col items-center justify-center p-2 text-center">
                      <h4 className="text-base md:text-lg font-bold text-gray-800">{feature.title}</h4>
                      <p className="text-xs md:text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-4">
              <button
                onClick={handleRedirect}
                className="w-full bg-white border border-[#002366] text-[#002366] hover:bg-[#002366] hover:text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center group"
              >
                <span>Ajoutez votre établissement</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* CSS for 3D flip cards */}
        <style jsx>{`
          .flip-card-container {
            perspective: 1000px;
          }
          
          .flip-card {
            position: relative;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
            animation: flip 6s infinite;
            animation-timing-function: ease-in-out;
          }
          
          .flip-card-front,
          .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12);
          }
          
          .flip-card-back {
            transform: rotateY(180deg);
          }
          
          @keyframes flip {
            0%, 45% {
              transform: rotateY(0deg);
            }
            50%, 95% {
              transform: rotateY(180deg);
            }
            100% {
              transform: rotateY(360deg);
            }
          }
        `}</style>
      </div>
    </section>
  )
}

export default Option

