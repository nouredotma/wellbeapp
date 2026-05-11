"use client"

import Layout from "../components/Layout/Layout"
import { ArrowLeft, ArrowRight, Users, Calendar, TrendingUp, Award } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"

const DevenirPartenaire = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    establishment: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      establishment: "",
      message: "",
    })
    // Show success message
    alert("Votre demande a été envoyée avec succès. Nous vous contacterons prochainement.")
  }

  const benefits = [
    {
      icon: <Users className="h-6 w-6 text-[#002366]" />,
      title: "Visibilité accrue",
      description:
        "Rejoignez notre plateforme et bénéficiez d'une visibilité auprès de milliers d'utilisateurs à la recherche de services de beauté et de bien-être.",
    },
    {
      icon: <Calendar className="h-6 w-6 text-[#002366]" />,
      title: "Gestion simplifiée",
      description:
        "Notre système de réservation en ligne vous permet de gérer facilement vos rendez-vous, réduire les absences et optimiser votre planning.",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-[#002366]" />,
      title: "Croissance de votre activité",
      description:
        "Attirez de nouveaux clients, fidélisez votre clientèle existante et augmentez votre chiffre d'affaires grâce à nos outils marketing.",
    },
    {
      icon: <Award className="h-6 w-6 text-[#002366]" />,
      title: "Reconnaissance professionnelle",
      description:
        "Rejoignez notre réseau de professionnels reconnus et bénéficiez de notre label de qualité pour renforcer votre crédibilité.",
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
            <h1 className="text-3xl md:text-4xl font-bold text-[#002366] mb-4">Devenir Partenaire</h1>
            <div className="h-1 w-20 bg-[#002366]/30 rounded-full"></div>
          </div>

          {/* Hero Section */}
          <div className="bg-gradient-to-r from-[#001233] to-[#002366] rounded-xl overflow-hidden mb-12">
            <div className="p-8 md:p-12 text-white">
              <div className="max-w-3xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Rejoignez le réseau WELLBE</h2>
                <p className="text-lg mb-6">
                  Développez votre activité en rejoignant la première plateforme de réservation de services de beauté et
                  de bien-être au Maroc.
                </p>
                <a
                  href="#contact-form"
                  className="inline-flex items-center bg-white text-[#002366] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                >
                  Nous contacter
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#002366] mb-8 text-center">Pourquoi devenir partenaire ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-[#002366]/10 rounded-full flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#002366] mb-8 text-center">Comment ça marche ?</h2>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm flex-1 relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#002366] text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 mt-2">Contactez-nous</h3>
                <p className="text-gray-600">
                  Remplissez le formulaire ci-dessous pour nous faire part de votre intérêt à rejoindre WELLBE.
                </p>
              </div>
              <div className="hidden md:block text-[#002366]">
                <ArrowRight className="h-8 w-8" />
              </div>
              <div className="block md:hidden text-[#002366]">
                <ArrowRight className="h-8 w-8 transform rotate-90" />
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm flex-1 relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#002366] text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 mt-2">Rencontrons-nous</h3>
                <p className="text-gray-600">
                  Un membre de notre équipe vous contactera pour discuter de vos besoins et vous présenter nos
                  solutions.
                </p>
              </div>
              <div className="hidden md:block text-[#002366]">
                <ArrowRight className="h-8 w-8" />
              </div>
              <div className="block md:hidden text-[#002366]">
                <ArrowRight className="h-8 w-8 transform rotate-90" />
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm flex-1 relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#002366] text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 mt-2">Démarrez</h3>
                <p className="text-gray-600">
                  Nous vous accompagnons dans la mise en place de votre établissement sur notre plateforme.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div id="contact-form" className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-bold text-[#002366] mb-6">Contactez-nous</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom complet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#002366] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#002366] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#002366] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="establishment" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom de l'établissement <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="establishment"
                    name="establishment"
                    value={formData.establishment}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#002366] focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#002366] focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#002366] text-white px-6 py-3 rounded-lg hover:bg-[#001845] transition-colors font-medium"
              >
                Envoyer ma demande
              </button>
            </form>
          </div>

          {/* Testimonials */}
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
            <h2 className="text-2xl font-bold text-[#002366] mb-6 text-center">Ils nous font confiance</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                      alt="Testimonial"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Karim Alaoui</h3>
                    <p className="text-sm text-gray-600">Salon de coiffure, Casablanca</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Depuis que nous avons rejoint WELLBE, notre clientèle a augmenté de 30%. La plateforme est intuitive
                  et le support client est excellent."
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
                      alt="Testimonial"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Leila Benkirane</h3>
                    <p className="text-sm text-gray-600">Institut de beauté, Rabat</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "WELLBE nous a permis de réduire considérablement les absences grâce aux rappels automatiques. Un vrai
                  gain de temps et d'argent !"
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                      alt="Testimonial"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Youssef Mansouri</h3>
                    <p className="text-sm text-gray-600">Barbier, Marrakech</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "La gestion des rendez-vous n'a jamais été aussi simple. Je recommande WELLBE à tous les
                  professionnels du secteur."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DevenirPartenaire

