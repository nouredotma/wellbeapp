"use client"

import axios from "axios"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Sparkles, CheckCircle } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Layout from "../components/Layout/Layout"
import { Activite } from "../components/demande/Activite"
import { Rejoignez } from "../components/demande/Rejoignez"
import { Steps } from "../components/demande/Steps"
import { Faq } from "../components/home/Faq"
import Input from "../components/ui/input"
import {
  creationEstablishment,
  fetchTypesEstablishment,
  fetchWorksEstablishment,
} from "../services/establishmentService"

export default function Demande() {
  const [visibleStep, setVisibleStep] = useState(0)

  const [types, setTypes] = useState([])
  const [works, setWorks] = useState([])

  const [location, setLocation] = useState({
    location_city: "",
    location_country: "",
    location_code_postal: "",
    location_latitude: "",
    location_longitude: "",
  })

  const [formData, setFormData] = useState({
    type_establishment_id: null,
    gerant_name: "",
    email: "",
    phone_number: "",
    establishment_name: "",
    establishment_address: "",
    employee_count: 1,
  })

  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const getTypes = async () => {
    try {
      const data = await fetchTypesEstablishment()
      setTypes(data)
    } catch (error) {
      console.error("Error fetching establishment types:", error)
    }
  }

  const getWorks = async () => {
    try {
      const data = await fetchWorksEstablishment()
      setWorks(data)
    } catch (error) {
      console.error("Error fetching establishment types:", error)
    }
  }

  useEffect(() => {
    getWorks()
    getTypes()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleStep((prev) => (prev < 3 ? prev + 1 : prev))
    }, 1000) // Elements appear one by one every second

    return () => clearInterval(interval)
  }, [])

  // localisation
  const handleSubmitLocalisation = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    console.log("Submitting formData:", formData) // Debugging line

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}demande`, formData, {
        headers: { "Content-Type": "application/json" },
      })

      console.log("Demande envoyée avec succès:", response.data)

      // Move to next step or show success message
      nextStep()
    } catch (error) {
      console.error("Erreur lors de l'envoi de la demande:", error.response?.data || error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await creationEstablishment(formData)
      console.log("Establishment created successfully:", response)
    } catch (error) {
      console.error("Error creating location:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setLocation({ ...location, [e.target.name]: e.target.value })
  }

  const handleChangeForm = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const nextStep = () => setStep((prevStep) => prevStep + 1)
  const prevStep = () => setStep((prevStep) => prevStep - 1)

  return (
    <Layout>
      <main>
        {/* Hero Section: Multi-Step Form - Compact Design */}
        <section className="flex flex-col md:flex-row overflow-hidden">
          {/* Left Info Section */}
          <Activite />

          {/* Right Multi-Step Form - Compact Design */}
          <div className="w-full md:w-1/2 bg-gray-50 p-4 flex items-center justify-center">
            <div className="w-full max-w-md relative">
              {/* Step Indicator - Compact */}
              <div className="flex mb-4 justify-center">
                {[1, 2].map((i) => (
                  <div key={i} className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        i <= step ? "bg-[#002366] text-white" : "bg-gray-200 text-gray-500"
                      } font-semibold text-sm transition-all duration-300`}
                    >
                      {i}
                    </div>
                    {i < 2 && (
                      <div
                        className={`h-0.5 w-10 mx-1 ${i < step ? "bg-[#002366]" : "bg-gray-200"} transition-all duration-300`}
                      ></div>
                    )}
                  </div>
                ))}
              </div>

              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg shadow-md p-5 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#002366"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16" />
                      <path d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                      <path d="M19 22H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2Z" />
                    </svg>
                  </div>

                  <h2 className="text-xl font-bold mb-4 text-center text-[#002366]">Votre établissement est un...</h2>

                  <div className="space-y-2 mt-4">
                    {types.map((type) => (
                      <motion.button
                        key={type.type_establishment_id}
                        whileHover={{ scale: 1.01, boxShadow: "0 2px 6px rgba(0,35,102,0.15)" }}
                        whileTap={{ scale: 0.99 }}
                        className="w-full py-2.5 px-4 rounded-lg text-base font-medium transition-all duration-300 flex items-center justify-between group relative overflow-hidden"
                        onClick={() => {
                          setFormData({
                            ...formData,
                            type_establishment_id: type.type_establishment_id,
                          })
                          nextStep()
                        }}
                        style={{
                          background: "linear-gradient(135deg, #ffffff 0%, #f5f7ff 100%)",
                          border: "1px solid #e6eaff",
                        }}
                      >
                        <span className="text-[#002366] relative z-10">{type.type_establishment_label}</span>
                        <div className="w-6 h-6 rounded-full bg-[#002366] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 relative z-10">
                          <ArrowRight size={14} className="text-white" />
                        </div>
                        <div
                          className="absolute inset-0 bg-gradient-to-r from-[#002366] to-[#0047cc] opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                          style={{ borderRadius: "0.5rem" }}
                        ></div>
                      </motion.button>
                    ))}
                  </div>

                  <p className="mt-4 text-center text-gray-600 text-xs">
                    Je ne suis pas un professionnel de la beauté, je souhaite prendre rendez-vous sur{" "}
                    <Link to="https://wellbe.ma" className="text-[#002366] font-semibold hover:underline">
                      wellbe.ma
                    </Link>
                  </p>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg shadow-md p-5 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#002366"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>

                  <h2 className="text-xl font-bold mb-3 text-center text-[#002366]">Informations de l'établissement</h2>

                  <form className="space-y-3 mt-4" onSubmit={handleSubmitLocalisation}>
                    <div className="space-y-3">
                      <div className="group">
                        <label className="text-xs font-medium text-gray-700 mb-0.5 block">Nom du Gérant*</label>
                        <Input
                          name="gerant_name"
                          placeholder="Entrez le nom du gérant"
                          value={formData.gerant_name}
                          onChange={handleChangeForm}
                          required
                          className="border-gray-300 focus:border-[#002366] focus:ring focus:ring-[#002366]/20 rounded-lg py-2 text-sm transition-all duration-300"
                        />
                      </div>

                      <div className="group">
                        <label className="text-xs font-medium text-gray-700 mb-0.5 block">Email*</label>
                        <Input
                          name="email"
                          placeholder="Entrez votre email"
                          type="email"
                          value={formData.email}
                          onChange={handleChangeForm}
                          required
                          className="border-gray-300 focus:border-[#002366] focus:ring focus:ring-[#002366]/20 rounded-lg py-2 text-sm transition-all duration-300"
                        />
                      </div>

                      <div className="group">
                        <label className="text-xs font-medium text-gray-700 mb-0.5 block">Numéro de téléphone*</label>
                        <Input
                          name="phone_number"
                          placeholder="Entrez votre numéro de téléphone"
                          value={formData.phone_number}
                          onChange={handleChangeForm}
                          required
                          className="border-gray-300 focus:border-[#002366] focus:ring focus:ring-[#002366]/20 rounded-lg py-2 text-sm transition-all duration-300"
                        />
                      </div>

                      <div className="group">
                        <label className="text-xs font-medium text-gray-700 mb-0.5 block">
                          Nom de l'établissement*
                        </label>
                        <Input
                          name="establishment_name"
                          placeholder="Entrez le nom de l'établissement"
                          value={formData.establishment_name}
                          onChange={handleChangeForm}
                          required
                          className="border-gray-300 focus:border-[#002366] focus:ring focus:ring-[#002366]/20 rounded-lg py-2 text-sm transition-all duration-300"
                        />
                      </div>

                      <div className="group">
                        <label className="text-xs font-medium text-gray-700 mb-0.5 block">
                          Adresse de l'établissement*
                        </label>
                        <Input
                          name="establishment_address"
                          placeholder="Entrez l'adresse de l'établissement"
                          value={formData.establishment_address}
                          onChange={handleChangeForm}
                          required
                          className="border-gray-300 focus:border-[#002366] focus:ring focus:ring-[#002366]/20 rounded-lg py-2 text-sm transition-all duration-300"
                        />
                      </div>

                      <div className="group">
                        <label className="text-xs font-medium text-gray-700 mb-0.5 block">Nombre d'employés*</label>
                        <Input
                          name="employee_count"
                          type="number"
                          placeholder="Entrez le nombre d'employés"
                          value={formData.employee_count}
                          onChange={handleChangeForm}
                          min="1"
                          required
                          className="border-gray-300 focus:border-[#002366] focus:ring focus:ring-[#002366]/20 rounded-lg py-2 text-sm transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="flex flex-row gap-2 pt-3">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center gap-1 bg-gray-100 text-gray-700 hover:bg-gray-200"
                      >
                        <ArrowLeft size={14} />
                        <span>Retour</span>
                      </button>

                      <button
                        type="submit"
                        className="flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center gap-1 bg-[#002366] text-white hover:bg-[#001a4d]"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            <span>Traitement...</span>
                          </>
                        ) : (
                          <>
                            <span>Valider</span>
                            <ArrowRight size={14} />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg shadow-md p-5 border border-gray-100 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckCircle size={28} className="text-green-500" />
                  </motion.div>
                  <h2 className="text-xl font-bold mb-3 text-[#002366]">Demande envoyée avec succès !</h2>
                  <p className="text-gray-600 mb-4 text-sm">
                    Merci pour votre intérêt ! Un membre de notre équipe vous contactera très prochainement pour
                    discuter de votre projet.
                  </p>
                  <Link to="/">
                    <button className="bg-[#002366] text-white py-2 px-6 rounded-lg text-sm font-medium hover:bg-[#001a4d] transition-all duration-300">
                      Retour à l'accueil
                    </button>
                  </Link>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Comment ça fonctionne section - Row Layout */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#002366]">
                <span className="relative inline-block">
                  Comment ça fonctionne ?
                  <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#002366]/30 rounded-full"></span>
                </span>
              </h2>
              <p className="mt-6 text-gray-600 sm:text-lg max-w-2xl mx-auto">
                Découvrez comment rejoindre notre plateforme en quelques étapes simples.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Step 1 */}
              {visibleStep >= 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-[#002366] text-white rounded-full text-2xl font-bold shadow-lg mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-[#002366] mb-4">Parlez-nous de vous en une minute</h3>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="bg-white border-l-4 border-[#002366] p-5 rounded-lg shadow-md h-full w-full"
                  >
                    <p className="text-gray-700">
                      Envie de développer votre activité ? Rejoignez-nous facilement grâce à un formulaire rapide pour
                      vous accompagner au mieux.
                    </p>
                  </motion.div>
                </motion.div>
              )}

              {/* Step 2 */}
              {visibleStep >= 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-[#002366] text-white rounded-full text-2xl font-bold shadow-lg mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-[#002366] mb-4">Vous êtes entre de bonnes mains</h3>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="bg-[#002366] text-white p-5 rounded-lg shadow-md h-full w-full"
                  >
                    <p className="mb-3">
                      Nous avons bien reçu votre demande ! Un membre de Wellbe vous contacte sans attendre pour vous
                      présenter notre outil GRATUITEMENT.
                    </p>
                    <p>On vous accompagne de la création de votre fiche établissement jusqu'à sa mise en ligne.</p>
                  </motion.div>
                </motion.div>
              )}

              {/* Step 3 */}
              {visibleStep >= 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-[#002366] text-white rounded-full text-2xl font-bold shadow-lg mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-[#002366] mb-4">Félicitations ! Vous êtes en ligne</h3>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="bg-white border-l-4 border-[#002366] p-5 rounded-lg shadow-md h-full w-full"
                  >
                    <p className="text-gray-700">
                      Vous bénéficiez désormais d'une page dédiée sur{" "}
                      <a href="https://wellbe.ma" className="text-[#002366] font-bold hover:underline">
                        wellbe.ma
                      </a>
                      .
                    </p>
                    <p className="text-gray-700 mt-2">
                      Augmentez votre visibilité grâce aux avis et gagnez des nouveaux clients. Admirez votre agenda se
                      remplir automatiquement !
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </div>

            {/* Button */}
            {visibleStep >= 3 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex justify-center mt-12"
              >
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="border-2 border-[#002366] text-[#002366] py-4 px-8 rounded-xl text-lg font-medium hover:bg-[#002366] hover:text-white transition-all duration-300 flex items-center justify-between group"
                >
                  <span className="flex items-center">
                    <Sparkles size={20} className="mr-2" />
                    Commencer maintenant
                  </span>
                  <ArrowRight
                    size={18}
                    className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all ml-2"
                  />
                </button>
              </motion.div>
            )}
          </div>
        </section>

        <Steps />
        <Rejoignez />
        <Faq />
      </main>
    </Layout>
  )
}

