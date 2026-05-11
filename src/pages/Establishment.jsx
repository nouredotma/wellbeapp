"use client"

import { useEffect, useState } from "react"
import Layout from "../components/Layout/Layout"
import { useParams } from "react-router-dom"
import {
  getEstablishmentById,
  getEstablishmentPersonnels,
  getEstablishmentSchedules,
  getEstablishmentServices,
} from "../services/establishmentService"
import EstablishmentDetails from "../components/establishment/checkout/EstablishmentDetails"
import EstablishmentCheckout from "../components/establishment/checkout/EstablishmentCheckout"

const EstablishmentPage = () => {
  const { id } = useParams()
  const [establishment, setEstablishment] = useState(null)
  const [services, setServices] = useState([])
  const [personnels, setPersonnels] = useState([])
  const [schedules, setSchedules] = useState([])
  const [cart, setCart] = useState([])
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const establishmentData = await getEstablishmentById(id)
        const servicesData = await getEstablishmentServices(id)
        const personnelsData = await getEstablishmentPersonnels(id)
        const schedulesData = await getEstablishmentSchedules(id)

        setEstablishment(establishmentData)
        setServices(servicesData)
        setPersonnels(personnelsData)
        setSchedules(schedulesData)
      } catch (error) {
        console.error("Erreur lors du chargement des données :", error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [id])

  const addToCart = (service) => {
    setCart((prevCart) => {
      if (prevCart.some((item) => item.product_uuid === service.product_uuid)) {
        return prevCart
      }

      const updatedCart = [...prevCart, service]
      setStep(updatedCart.length > 0 ? 2 : 1)
      return updatedCart
    })
  }

  const removeFromCart = (serviceId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.product_uuid !== serviceId)
      setStep(updatedCart.length === 0 ? 1 : 2)
      return updatedCart
    })
  }

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
        </div>
      </Layout>
    )
  }

  if (!establishment) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-screen">
          <p className="text-red-500">Établissement non trouvé</p>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="mx-4 md:mx-8 lg:mx-12 my-8">
        {step === 1 && (
          <EstablishmentDetails
            establishment={establishment}
            services={services}
            personnels={personnels}
            addToCart={addToCart}
          />
        )}
        {step === 2 && (
          <EstablishmentCheckout
            establishment={establishment}
            services={services}
            cart={cart}
            removeFromCart={removeFromCart}
            addToCart={addToCart}
            schedules={schedules}
          />
        )}
      </div>
    </Layout>
  )
}

export default EstablishmentPage

