"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "../ui/button"

export const Rejoignez = () => {
  const [active, setActive] = useState(0)

  const testimonials = [
    {
      name: "Amina",
      designation: "Gérante d'un salon de coiffure à Marrakech",
      quote:
        "Depuis que j'ai rejoint Wellbe, mon agenda est complet et mes clients adorent la facilité de réservation. Une véritable révolution pour mon salon !",
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&h=150&auto=format&fit=crop",
    },
    {
      name: "Badr",
      designation: "Barbier à Casablanca",
      quote:
        "Wellbe m'a permis d'attirer une nouvelle clientèle et de mieux gérer mon temps. Les notifications et rappels ont réduit les rendez-vous manqués de 80%.",
      src: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=150&h=150&auto=format&fit=crop",
    },
    {
      name: "Aya",
      designation: "Esthéticienne à Rabat",
      quote:
        "L'interface est intuitive, le support client réactif, et mes revenus ont augmenté de 30% en seulement trois mois. Je recommande à 100% !",
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&auto=format&fit=crop",
    },
  ]

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const isActive = (index) => {
    return index === active
  }

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(handleNext, 6000)
    return () => clearInterval(interval)
  }, [])

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10
  }

  return (
    <section className="bg-[#002366] py-12 sm:py-20">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <span className="relative inline-block">
              Rejoignez tous les professionnels
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4">De la beauté et du bien-être</p>
        </div>

        {/* Testimonials section */}
        <div className="mx-auto max-w-4xl px-4">
          <div className="relative grid grid-cols-1 gap-8 md:gap-20 md:grid-cols-2">
            {/* Left column - Images */}
            <div>
              <div className="relative h-80 w-full">
                <AnimatePresence>
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.src}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                        z: -100,
                        rotate: randomRotateY(),
                      }}
                      animate={{
                        opacity: isActive(index) ? 1 : 0.7,
                        scale: isActive(index) ? 1 : 0.95,
                        z: isActive(index) ? 0 : -100,
                        rotate: isActive(index) ? 0 : randomRotateY(),
                        zIndex: isActive(index) ? 40 : testimonials.length + 2 - index,
                        y: isActive(index) ? [0, -80, 0] : 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.9,
                        z: 100,
                        rotate: randomRotateY(),
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 origin-bottom"
                    >
                      <img
                        src={testimonial.src || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="h-full w-full rounded-3xl object-cover object-center bg-white/10"
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Right column - Content */}
            <div className="flex flex-col justify-between py-4">
              <motion.div
                key={active}
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: -20,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
                className="text-white"
              >
                <h3 className="text-2xl font-bold">{testimonials[active].name}</h3>
                <p className="text-sm text-gray-300">{testimonials[active].designation}</p>
                <motion.p className="mt-8 text-lg text-gray-200">
                  {testimonials[active].quote.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{
                        filter: "blur(10px)",
                        opacity: 0,
                        y: 5,
                      }}
                      animate={{
                        filter: "blur(0px)",
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: 0.02 * index,
                      }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>
              </motion.div>

              {/* Navigation buttons */}
              <div className="flex gap-4 pt-12 md:pt-0">
                <button
                  onClick={handlePrev}
                  className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300"
                  aria-label="Témoignage précédent"
                >
                  <ArrowLeft className="h-5 w-5 text-white transition-transform duration-300 group-hover:-translate-x-1" />
                </button>
                <button
                  onClick={handleNext}
                  className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300"
                  aria-label="Témoignage suivant"
                >
                  <ArrowRight className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <Button className="bg-white text-[#002366] border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-transparent hover:text-white transition-all duration-300 flex items-center group">
            <span>Ajoutez votre établissement</span>
            <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-2 transition-all" />
          </Button>
        </div>
      </div>
    </section>
  )
}

