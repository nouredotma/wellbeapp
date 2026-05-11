"use client"

import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { useRef } from "react"
import "swiper/css"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { services } from "./data"

export const Service = () => {
  const swiperRef = useRef(null)

  return (
    <div className="w-full">
      {/* Main container - no padding/margin */}
      <div className="relative">
        {/* Enhanced Swiper with increased height for mobile */}
        <Swiper
          modules={[Autoplay]}
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
          loop={true}
          speed={800}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          className="h-[480px] md:h-[420px] service-swiper" // Increased height for mobile
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <ServiceCard service={service} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        <div className="flex justify-center mt-6 gap-4">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-10 h-10 rounded-full bg-white border border-[#002366]/20 text-[#002366] flex items-center justify-center hover:bg-[#002366] hover:text-white transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-10 h-10 rounded-full bg-white border border-[#002366]/20 text-[#002366] flex items-center justify-center hover:bg-[#002366] hover:text-white transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Custom CSS - opacity for desktop only */}
      <style jsx global>{`
        /* Base styles for all screens */
        .service-swiper .swiper-slide {
          transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
          transform: scale(0.95);
        }
        
        .service-swiper .swiper-slide-active {
          transform: scale(1);
          z-index: 2;
        }
        
        /* Mobile styles - full opacity */
        @media (max-width: 767px) {
          .service-swiper .swiper-slide {
            opacity: 1 !important;
          }
        }
        
        /* Desktop styles - opacity transitions */
        @media (min-width: 768px) {
          .service-swiper .swiper-slide {
            opacity: 0.4;
            transform: scale(0.85);
          }
          
          .service-swiper .swiper-slide-active {
            opacity: 1;
            transform: scale(1);
          }
          
          .service-swiper .swiper-slide-prev,
          .service-swiper .swiper-slide-next {
            opacity: 0.7;
            transform: scale(0.9);
          }
          
          .service-swiper .swiper-slide:hover {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

// Service card component - minimal padding
const ServiceCard = ({ service }) => {
  return (
    <div className="h-full rounded-lg overflow-hidden relative group">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
        style={{ backgroundImage: `url(${service.image || "/placeholder.svg?height=400&width=600"})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20"></div>
      </div>

      {/* Content - minimal padding */}
      <div className="relative h-full flex flex-col p-4 text-white z-10">
        {/* Top section */}
        <div className="mb-auto">
          <span className="inline-block px-3 py-1 bg-[#002366] text-white text-xs font-medium rounded-full">
            {service.subtitle || "Nos services"}
          </span>
        </div>

        {/* Bottom section */}
        <div className="mt-auto">
          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
          <p className="text-sm text-white/80 mb-4 line-clamp-2">{service.description}</p>

          {/* Button */}
          <a
            href={service.url || "#"}
            className="inline-flex items-center rounded-md text-white py-2 px-3 text-sm font-medium border border-white/70 hover:bg-white hover:text-[#002366] transition-all duration-300"
            aria-label={`Découvrir ${service.title}`}
          >
            <span>Découvrir</span>
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}

