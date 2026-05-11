"use client"

import Layout from "../components/Layout/Layout"
import { ArrowLeft, ArrowRight, Check, Calendar, TrendingUp, Users, MessageSquare, BarChart } from "lucide-react"
import { Link } from "react-router-dom"

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
      <div className="w-12 h-12 bg-[#002366]/10 rounded-full flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

const Solutions = () => {
  const features = [
    {
      icon: <Calendar className="h-6 w-6 text-[#002366]" />,
      title: "Agenda en ligne",
      description: "Gérez facilement vos rendez-vous, synchronisez vos calendriers et optimisez votre planning.",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-[#002366]" />,
      title: "Rappels automatiques",
      description: "Réduisez les absences grâce aux rappels SMS et email envoyés automatiquement à vos clients.",
    },
    {
      icon: <Users className="h-6 w-6 text-[#002366]" />,
      title: "Gestion des clients",
      description: "Centralisez vos données clients, suivez leur historique et personnalisez votre relation client.",
    },
    {
      icon: <BarChart className="h-6 w-6 text-[#002366]" />,
      title: "Statistiques et rapports",
      description:
        "Analysez vos performances, suivez votre chiffre d'affaires et identifiez les opportunités de croissance.",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-[#002366]" />,
      title: "Marketing et fidélisation",
      description: "Créez des campagnes marketing ciblées, proposez des offres spéciales et fidélisez votre clientèle.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-[#002366]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Caisse et paiements",
      description: "Gérez vos encaissements, suivez vos ventes de produits et proposez différents modes de paiement.",
    },
  ]

  const plans = [
    {
      name: "Agenda",
      price: "299 DH",
      period: "par mois",
      description: "Pour fidéliser votre clientèle et proposer la prise de rendez-vous en établissement.",
      features: [
        "Agenda en ligne",
        "Rappels SMS et e-mail",
        "Réduction des absences",
        "Suivi & gestion du fichier client",
        "Réservation en ligne 24h/24",
      ],
      cta: "Découvrir l'offre",
    },
    {
      name: "Agenda + Caisse",
      price: "499 DH",
      period: "par mois",
      description: "Pour optimiser la vente de vos produits et encaisser vos clients.",
      features: [
        "Agenda en ligne",
        "Rappels SMS et e-mail",
        "Logiciel de caisse conforme à la loi",
        "Gestion des stocks et des produits",
        "Statistiques avancées sur votre salon",
      ],
      cta: "Découvrir l'offre",
    },
  ]

  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10">
            <Link to="/" className="inline-flex items-center text-[#002366] hover:text-[#001845] mb-6 transition-all">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à l'accueil
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-[#002366] mb-4">Nos Solutions</h1>
            <div className="h-1 w-20 bg-[#002366]/30 rounded-full"></div>
          </div>

          {/* Hero Section */}
          <div className="bg-gradient-to-r from-[#001233] to-[#002366] rounded-xl overflow-hidden mb-12">
            <div className="p-8 md:p-12 text-white">
              <div className="max-w-3xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Des solutions adaptées à vos besoins</h2>
                <p className="text-lg mb-6">
                  WELLBE propose des outils innovants pour simplifier la gestion de votre établissement de beauté et de
                  bien-être, augmenter votre visibilité et développer votre activité.
                </p>
                <a
                  href="#pricing"
                  className="inline-flex items-center bg-white text-[#002366] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                >
                  Voir nos offres
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#002366] mb-8 text-center">Fonctionnalités principales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div id="pricing" className="mb-12">
            <h2 className="text-2xl font-bold text-[#002366] mb-8 text-center">Nos offres</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {plans.map((plan, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-gray-100">
                    <h3 className="text-xl font-bold text-[#002366] mb-2">{plan.name}</h3>
                    <div className="flex items-baseline mb-4">
                      <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                      <span className="ml-2 text-gray-500">{plan.period}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <button className="w-full bg-[#002366] text-white py-3 rounded-lg font-medium hover:bg-[#001845] transition-colors">
                      {plan.cta}
                    </button>
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-800 mb-4">Ce qui est inclus :</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8 text-gray-600">
              <p>Tous nos plans incluent :</p>
              <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 mt-2">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-1" />
                  <span>Sans engagement</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-1" />
                  <span>Sans commission sur vos RDV</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-1" />
                  <span>Support client 7j/7</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <h2 className="text-2xl font-bold text-[#002366] mb-4">Prêt à transformer votre activité ?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Rejoignez les milliers de professionnels qui font confiance à WELLBE pour développer leur activité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demande"
                className="bg-[#002366] text-white px-6 py-3 rounded-lg hover:bg-[#001845] transition-colors font-medium"
              >
                Essayer gratuitement
              </Link>
              <Link
                to="/devenir-partenaire"
                className="border-2 border-[#002366] text-[#002366] px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Solutions

