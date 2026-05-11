"use client"

import Layout from "../components/Layout/Layout"
import { ArrowLeft, ChevronDown, ChevronUp, Search, HelpCircle } from 'lucide-react'
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const QuestionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden transition-all duration-200 hover:border-[#002366]/30 hover:shadow-sm">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none p-5 bg-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-gray-900 pr-8">{question}</h3>
        <div className={`p-2 rounded-full bg-gray-100 transition-all duration-300 ${isOpen ? "bg-[#002366]/10" : ""}`}>
          {isOpen ? 
            <ChevronUp className="h-5 w-5 text-[#002366]" /> : 
            <ChevronDown className="h-5 w-5 text-[#002366]" />
          }
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-5 pt-0 prose prose-sm max-w-none text-gray-600 border-t border-gray-100">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  )
}

const QuestionsFrequentes = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [filteredQuestions, setFilteredQuestions] = useState([])
  
  const faqCategories = [
    {
      id: "utilisateurs",
      title: "Utilisateurs",
      icon: "👤",
      questions: [
        {
          question: "Comment prendre rendez-vous sur WELLBE ?",
          answer:
            "Pour prendre rendez-vous, recherchez d'abord l'établissement de votre choix, sélectionnez le service souhaité, choisissez une date et un horaire disponible, puis confirmez votre réservation. Vous recevrez une confirmation par email et SMS.",
        },
        {
          question: "Puis-je annuler ou modifier mon rendez-vous ?",
          answer:
            "Oui, vous pouvez annuler ou modifier votre rendez-vous jusqu'à 24 heures avant l'heure prévue. Connectez-vous à votre compte, accédez à 'Mes rendez-vous' et sélectionnez l'option d'annulation ou de modification.",
        },
        {
          question: "Comment créer un compte sur WELLBE ?",
          answer:
            "Cliquez sur 'Se connecter' en haut à droite de la page d'accueil, puis sur 'Créer un compte'. Remplissez le formulaire avec vos informations personnelles et validez. Vous recevrez un email de confirmation pour activer votre compte.",
        },
        {
          question: "Les prix affichés sur WELLBE sont-ils définitifs ?",
          answer:
            "Oui, les prix affichés sur WELLBE correspondent aux tarifs pratiqués par les établissements. Il n'y a pas de frais supplémentaires pour réserver via notre plateforme.",
        },
      ],
    },
    {
      id: "professionnels",
      title: "Professionnels",
      icon: "💼",
      questions: [
        {
          question: "Comment ajouter mon établissement sur WELLBE ?",
          answer:
            "Pour ajouter votre établissement, cliquez sur 'Ajoutez votre établissement' dans le menu principal. Remplissez le formulaire avec les informations de votre établissement. Notre équipe validera votre demande sous 48 heures.",
        },
        {
          question: "Quels sont les avantages d'être référencé sur WELLBE ?",
          answer:
            "Être référencé sur WELLBE vous permet d'augmenter votre visibilité en ligne, de gérer facilement vos rendez-vous, de réduire les absences grâce aux rappels automatiques, et d'attirer de nouveaux clients. Vous bénéficiez également d'outils de gestion et de statistiques pour optimiser votre activité.",
        },
        {
          question: "Comment fonctionne le système de paiement ?",
          answer:
            "WELLBE propose plusieurs options de paiement. Les clients peuvent payer directement à l'établissement lors de leur rendez-vous, ou en ligne via notre plateforme sécurisée si vous activez cette option. Les paiements en ligne sont transférés sur votre compte bancaire dans un délai de 48 heures.",
        },
        {
          question: "Y a-t-il des frais pour utiliser WELLBE en tant que professionnel ?",
          answer:
            "WELLBE propose différentes formules d'abonnement adaptées à vos besoins. Consultez notre page 'Tarifs' pour découvrir nos offres. Nous ne prenons aucune commission sur vos rendez-vous.",
        },
      ],
    },
    {
      id: "technique",
      title: "Technique",
      icon: "🔧",
      questions: [
        {
          question: "Comment réinitialiser mon mot de passe ?",
          answer:
            "Sur la page de connexion, cliquez sur 'Mot de passe oublié'. Entrez votre adresse email et suivez les instructions envoyées pour créer un nouveau mot de passe.",
        },
        {
          question: "L'application WELLBE est-elle disponible sur mobile ?",
          answer:
            "Oui, WELLBE est disponible sur iOS et Android. Vous pouvez télécharger notre application depuis l'App Store ou Google Play Store pour gérer vos rendez-vous où que vous soyez.",
        },
        {
          question: "Comment contacter le support technique ?",
          answer:
            "Pour toute question technique, vous pouvez nous contacter par email à support@wellbe.ma ou par téléphone au +212 522 123 456 du lundi au vendredi de 9h à 18h.",
        },
      ],
    },
  ]

  // Combine all questions for search and filtering
  const allQuestions = faqCategories.flatMap(category => 
    category.questions.map(q => ({
      ...q,
      category: category.id
    }))
  )

  useEffect(() => {
    // Filter questions based on search term and active category
    let filtered = allQuestions
    
    if (searchTerm) {
      filtered = filtered.filter(q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    
    if (activeCategory !== 'all') {
      filtered = filtered.filter(q => q.category === activeCategory)
    }
    
    setFilteredQuestions(filtered)
  }, [searchTerm, activeCategory, allQuestions]) // Added allQuestions to dependencies

  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10">
            <Link to="/" className="inline-flex items-center text-[#002366] hover:text-[#001845] mb-6 transition-all">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à l'accueil
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="h-8 w-8 text-[#002366]" />
              <h1 className="text-3xl md:text-4xl font-bold text-[#002366]">Questions Fréquentes</h1>
            </div>
            <div className="h-1 w-20 bg-[#002366]/30 rounded-full"></div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-10">
            {/* Hero section */}
            <div className="bg-gradient-to-r from-[#002366] to-[#003399] text-white p-8 md:p-10">
              <div className="max-w-3xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Comment pouvons-nous vous aider ?</h2>
                <p className="text-white/90 mb-6">
                  Retrouvez les réponses aux questions les plus fréquemment posées sur WELLBE. Si vous ne trouvez pas la
                  réponse à votre question, n'hésitez pas à nous contacter.
                </p>
                
                {/* Search bar */}
                <div className="relative max-w-xl">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-white/70" />
                  </div>
                  <input
                    type="text"
                    placeholder="Rechercher une question..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
            
            {/* Category tabs */}
            <div className="border-b border-gray-200">
              <div className="flex overflow-x-auto scrollbar-hide p-4">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-5 py-2.5 rounded-full whitespace-nowrap mr-2 transition-all ${
                    activeCategory === 'all'
                      ? 'bg-[#002366] text-white font-medium'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Toutes les questions
                </button>
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-5 py-2.5 rounded-full whitespace-nowrap mr-2 transition-all flex items-center ${
                      activeCategory === category.id
                        ? 'bg-[#002366] text-white font-medium'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.title}
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ content */}
            <div className="p-6 md:p-8">
              {searchTerm && (
                <div className="mb-6">
                  <p className="text-sm text-gray-500">
                    {filteredQuestions.length} résultat(s) pour "{searchTerm}"
                  </p>
                </div>
              )}
              
              {searchTerm || activeCategory !== 'all' ? (
                // Show filtered questions
                <div className="space-y-2">
                  {filteredQuestions.length > 0 ? (
                    filteredQuestions.map((item, idx) => (
                      <QuestionItem key={idx} question={item.question} answer={item.answer} />
                    ))
                  ) : (
                    <div className="text-center py-10">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                        <HelpCircle className="h-8 w-8 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun résultat trouvé</h3>
                      <p className="text-gray-500 max-w-md mx-auto">
                        Nous n'avons pas trouvé de réponse correspondant à votre recherche. Essayez avec d'autres termes ou contactez-nous.
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                // Show categorized questions
                faqCategories.map((category, index) => (
                  <div key={index} className="mb-10">
                    <div className="flex items-center mb-6">
                      <span className="text-2xl mr-3">{category.icon}</span>
                      <h2 className="text-2xl font-bold text-[#002366]">{category.title}</h2>
                    </div>
                    <div className="space-y-2">
                      {category.questions.map((item, idx) => (
                        <QuestionItem key={idx} question={item.question} answer={item.answer} />
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold text-[#002366] mb-2">Vous n'avez pas trouvé votre réponse ?</h3>
                <p className="text-gray-600">Notre équipe est disponible pour répondre à toutes vos questions.</p>
              </div>
              <div className="flex gap-4">
                <a
                  href="mailto:contact@wellbe.ma"
                  className="inline-flex items-center bg-[#002366] text-white px-6 py-3 rounded-lg hover:bg-[#001845] transition-colors"
                >
                  Contactez-nous
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default QuestionsFrequentes
