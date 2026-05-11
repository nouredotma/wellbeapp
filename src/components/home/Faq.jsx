"use client"

import { ChevronDown, ChevronUp, ChevronRight } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

export const Faq = () => {
  const [activeQuestion, setActiveQuestion] = useState(null)

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002366] mb-4">
            <span className="relative inline-block">
              Questions fréquentes
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#002366]/30 rounded-full"></span>
            </span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faq.map((item, index) => (
              <div
                key={index}
                className={`border-2 rounded-lg overflow-hidden transition-all duration-300 ${
                  activeQuestion === index ? "border-[#002366] shadow-md" : "border-gray-200 hover:border-[#002366]/40"
                }`}
              >
                <button
                  className="w-full text-left p-5 flex justify-between items-center"
                  onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                  aria-expanded={activeQuestion === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span
                    className={`text-lg font-medium transition-colors ${
                      activeQuestion === index ? "text-[#002366]" : "text-gray-800"
                    }`}
                  >
                    {item.question}
                  </span>
                  <span
                    className={`transition-colors ${activeQuestion === index ? "text-[#002366]" : "text-gray-500"}`}
                  >
                    {activeQuestion === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeQuestion === index ? "max-h-96" : "max-h-0"
                  }`}
                  aria-hidden={activeQuestion !== index}
                >
                  <p className="p-5 pt-0 text-gray-600 border-t border-gray-100">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* See More CTA */}
          <div className="text-center mt-12">
            <Link
              to="/questions-frequentes"
              className="bg-[#002366] text-white border-2 border-[#002366] px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-[#002366] transition-all duration-300 shadow-md hover:shadow-lg flex items-center mx-auto justify-center max-w-xs"
              aria-label="Voir toutes les questions fréquentes"
            >
              <span>Voir toutes les questions</span>
              <ChevronRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

const faq = [
  {
    question: "Qu'est-ce que Wellbe et comment ça fonctionne ?",
    answer:
      "Wellbe est une plateforme de réservation en ligne dédiée aux professionnels de la beauté et du bien-être au Maroc. Nous permettons aux clients de prendre rendez-vous facilement avec des salons de coiffure, instituts de beauté, spas et autres établissements de soins. Grâce à notre interface intuitive, vous pouvez comparer les services, consulter les avis et réserver en quelques clics, 24h/24 et 7j/7.",
  },
  {
    question: "Quels sont les avantages de Wellbe par rapport aux autres plateformes ?",
    answer:
      "Wellbe se distingue par son approche premium et intuitive. Nous collaborons avec des établissements sélectionnés pour leur qualité de service. Nos avantages incluent : réservation rapide et fluide, accès à des établissements haut de gamme, avis clients authentiques, et outils de gestion avancés pour les professionnels.",
  },
  {
    question: "Comment réserver un rendez-vous sur Wellbe ?",
    answer:
      "Réserver un rendez-vous sur Wellbe est simple : créez un compte gratuit, recherchez un établissement selon votre ville et votre service souhaité, consultez les avis et disponibilités, sélectionnez une date et un horaire, puis confirmez votre réservation.",
  },
  {
    question: "Wellbe est-il gratuit pour les utilisateurs ?",
    answer:
      "Oui, l'utilisation de Wellbe est totalement gratuite pour les clients ! Vous pouvez rechercher des établissements, consulter les avis et réserver sans frais supplémentaires. Seuls les professionnels qui souhaitent être référencés sur Wellbe souscrivent à un abonnement mensuel.",
  },
]

