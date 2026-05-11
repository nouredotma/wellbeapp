"use client"

import Layout from "../components/Layout/Layout"
import { ArrowLeft, ArrowRight, Star, MapPin } from "lucide-react"
import { Link } from "react-router-dom"

const EstablishmentCard = ({ name, image, rating, category, location, services }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
      <div className="relative h-56 overflow-hidden">
        <img
          src={image || "/placeholder.svg?height=400&width=600"}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-[#002366] text-white text-xs font-semibold rounded-full uppercase tracking-wider">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#002366] transition-colors">{name}</h3>
          <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-md">
            <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
            <span className="text-sm font-medium text-gray-700">{rating}</span>
          </div>
        </div>
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{location}</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {services.map((service, index) => (
            <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
              {service}
            </span>
          ))}
        </div>
        <Link
          to="#"
          className="inline-flex items-center text-[#002366] font-medium hover:text-[#001a4d] transition-colors group"
        >
          Réserver
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}

const LesIncontournables = () => {
  const establishments = [
    {
      name: "Salon Élégance",
      image:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
      rating: "4.9",
      category: "Coiffeur",
      location: "Casablanca",
      services: ["Coupe", "Coloration", "Brushing", "Soins"],
    },
    {
      name: "Barber Shop Premium",
      image:
        "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rating: "4.8",
      category: "Barbier",
      location: "Rabat",
      services: ["Coupe", "Barbe", "Soins visage"],
    },
    {
      name: "Spa Zen",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rating: "4.9",
      category: "Spa",
      location: "Marrakech",
      services: ["Massage", "Hammam", "Soins corps"],
    },
    {
      name: "Beauty Center",
      image:
        "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      rating: "4.7",
      category: "Institut",
      location: "Tanger",
      services: ["Manucure", "Pédicure", "Épilation", "Soins visage"],
    },
    {
      name: "Hammam Traditionnel",
      image:
        "https://images.unsplash.com/photo-1519112232436-9923c6ba3d26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rating: "4.8",
      category: "Hammam",
      location: "Fès",
      services: ["Hammam", "Gommage", "Massage"],
    },
    {
      name: "Nail Art Studio",
      image:
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      rating: "4.6",
      category: "Institut",
      location: "Casablanca",
      services: ["Manucure", "Pédicure", "Nail Art"],
    },
  ]

  const categories = [
    { name: "Tous", value: "all" },
    { name: "Coiffeur", value: "coiffeur" },
    { name: "Barbier", value: "barbier" },
    { name: "Institut", value: "institut" },
    { name: "Spa", value: "spa" },
    { name: "Hammam", value: "hammam" },
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
            <h1 className="text-3xl md:text-4xl font-bold text-[#002366] mb-4">Les Incontournables</h1>
            <div className="h-1 w-20 bg-[#002366]/30 rounded-full"></div>
          </div>

          {/* Intro */}
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-bold text-[#002366] mb-4">Découvrez les établissements les mieux notés</h2>
            <p className="text-gray-600">
              Nous avons sélectionné pour vous les meilleurs établissements de beauté et de bien-être au Maroc. Ces
              établissements se distinguent par la qualité de leurs services, leur professionnalisme et la satisfaction
              de leurs clients.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0 ? "bg-[#002366] text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Establishments Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {establishments.map((establishment, index) => (
              <EstablishmentCard
                key={index}
                name={establishment.name}
                image={establishment.image}
                rating={establishment.rating}
                category={establishment.category}
                location={establishment.location}
                services={establishment.services}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#001233] to-[#002366] rounded-xl overflow-hidden">
            <div className="p-8 md:p-12 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Vous êtes un professionnel ?</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Rejoignez WELLBE et faites partie des établissements incontournables de votre ville. Augmentez votre
                visibilité et attirez de nouveaux clients.
              </p>
              <Link
                to="/demande"
                className="inline-flex items-center bg-white text-[#002366] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Ajouter mon établissement
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LesIncontournables

