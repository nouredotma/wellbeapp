"use client"

import { useRef } from "react"
import { Star, Quote } from "lucide-react"
import "swiper/css"
import "swiper/css/pagination"
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

export const Parle = () => {
  // Testimonials data - alternating between professionals and clients
  const testimonials = [
    // Professional
    {
      quote:
        "WELLBE a transformé la façon dont je gère mon salon. Les réservations en ligne ont augmenté ma clientèle de 30% !",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&h=150&auto=format&fit=crop",
      name: "Amina",
      position: "Gérante d'un salon de coiffure à Marrakech",
      isProfessional: true,
    },
    // Client
    {
      quote:
        "Service impeccable ! J'ai pu réserver mon rendez-vous en quelques clics, sans attente ni appel téléphonique.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop",
      name: "Mohammed",
      position: "Client fidèle",
      isProfessional: false,
    },
    // Professional
    {
      quote: "Les rappels automatiques ont réduit les rendez-vous manqués de 80%. Un vrai gain de temps et d'argent !",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=150&h=150&auto=format&fit=crop",
      name: "Badr",
      position: "Propriétaire d'un barber à Tanger",
      isProfessional: true,
    },
    // Client
    {
      quote:
        "L'application est intuitive et me permet de voir les disponibilités en temps réel. Je ne retournerai jamais aux réservations par téléphone !",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=150&h=150&auto=format&fit=crop",
      name: "Sara",
      position: "Cliente régulière",
      isProfessional: false,
    },
    // Professional
    {
      quote:
        "Grâce à WELLBE, j'ai pu attirer une clientèle plus jeune et plus connectée. Mon institut a gagné en modernité !",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&auto=format&fit=crop",
      name: "Aya",
      position: "Prothésiste angulaire à Rabat",
      isProfessional: true,
    },
    // Client
    {
      quote: "Je peux facilement comparer les services et les prix avant de réserver. C'est transparent et pratique !",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop",
      name: "Karim",
      position: "Nouveau client",
      isProfessional: false,
    },
  ]

  const swiperRef = useRef(null)

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white text-black overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#002366]/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#002366]/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Title with underline - keeping the original h2 */}
        <h2 className="text-3xl sm:text-4xl mb-16 font-bold text-[#002366] text-center">
          <span className="relative inline-block">
            ILS PARLENT DE NOUS
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#002366]/30 rounded-full"></span>
          </span>
        </h2>

        {/* Main container - no padding/margin */}
        <div className="relative">
          {/* Enhanced Swiper with custom height */}
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={12}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 18,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            pagination={{
              clickable: true,
              dynamicBullets: false, // Disabled dynamic bullets to prevent shifting
              bulletActiveClass: "swiper-pagination-bullet-active",
              bulletClass: "swiper-pagination-bullet",
            }}
            loop={true}
            speed={800}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            className="testimonial-swiper pb-12" // Added padding for pagination bullets
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom CSS - opacity for desktop only */}
      <style jsx global>{`
        /* Base styles for all screens */
        .testimonial-swiper .swiper-slide {
          transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
          transform: scale(0.95);
          height: auto;
          padding: 20px 0;
        }
        
        .testimonial-swiper .swiper-slide-active {
          transform: scale(1);
          z-index: 2;
        }
        
        /* Fixed pagination container */
        .testimonial-swiper .swiper-pagination {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          transform: translateZ(0);
        }
        
        /* Custom pagination bullets */
        .testimonial-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #ccc;
          opacity: 0.7;
          transition: all 0.3s ease;
          margin: 0 4px;
        }
        
        .testimonial-swiper .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 4px;
          background: #002366;
          opacity: 1;
        }
        
        /* Mobile styles - full opacity */
        @media (max-width: 767px) {
          .testimonial-swiper .swiper-slide {
            opacity: 1 !important;
          }
        }
        
        /* Desktop styles - opacity transitions */
        @media (min-width: 768px) {
          .testimonial-swiper .swiper-slide {
            opacity: 0.4;
            transform: scale(0.85);
          }
          
          .testimonial-swiper .swiper-slide-active {
            opacity: 1;
            transform: scale(1);
          }
          
          .testimonial-swiper .swiper-slide-prev,
          .testimonial-swiper .swiper-slide-next {
            opacity: 0.7;
            transform: scale(0.9);
          }
          
          .testimonial-swiper .swiper-slide:hover {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}

// Testimonial Card Component
const TestimonialCard = ({ testimonial }) => {
  const { quote, image, name, position, isProfessional } = testimonial

  // Different styles for professional vs client testimonials
  const bubbleStyles = isProfessional
    ? "from-[#002366] to-[#001a4d] text-white"
    : "from-[#f0f4ff] to-[#e6eeff] text-[#002366]"

  const quoteIconColor = isProfessional ? "text-white/20" : "text-[#002366]/20"
  const pointerColor = isProfessional ? "border-t-[#001a4d]" : "border-t-[#e6eeff]"

  return (
    <div className="relative px-2 py-1 flex flex-col items-center">
      {/* Speech bubble with quote */}
      <div className={`rounded-2xl bg-gradient-to-br ${bubbleStyles} p-5 shadow-lg relative mb-6 w-full`}>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full -ml-10 -mb-10"></div>

        {/* Type indicator and rating */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium px-3 py-1 rounded-full bg-white/10">
            {isProfessional ? "Professionnel" : "Client"}
          </span>
          {!isProfessional && (
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          )}
        </div>

        {/* Quote */}
        <div className="relative z-10">
          <Quote className={`h-8 w-8 ${quoteIconColor} rotate-180 absolute -left-1 -top-1`} />
          <p className="text-sm leading-relaxed pl-7 pt-2 font-light">{quote}</p>
        </div>

        {/* Speech bubble pointer - centered */}
        <div
          className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[16px] ${pointerColor}`}
        ></div>
      </div>

      {/* Profile section - centered */}
      <div className="flex flex-col items-center text-center">
        <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md mb-2">
          <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div>
          <h3 className="font-semibold text-[#002366]">{name}</h3>
          <p className="text-xs text-gray-600">{position}</p>
        </div>
      </div>
    </div>
  )
}

