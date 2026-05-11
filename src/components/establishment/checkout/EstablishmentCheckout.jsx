"use client"

import { Plus, X, CalendarIcon, Check, AlertCircle, ArrowRight, ChevronLeft } from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { Calendar } from "./details/Calendar"
import { Owner } from "./details/Owner"
import { SelectedServices } from "./details/SelectedServices"
import { Services } from "./details/Services"
import { format } from "date-fns"
import { fr } from "date-fns/locale"

const EstablishmentCheckout = ({ establishment, services, cart, removeFromCart, addToCart, schedules }) => {
  const [showServices, setShowServices] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedSchedule, setSelectedSchedule] = useState(null)
  const [step, setStep] = useState(1) // 1: Services, 2: Calendar
  const navigate = useNavigate()

  useEffect(() => {
    console.log("🔄 Checking for pending appointment...")
    const pendingAppointment = sessionStorage.getItem("pendingAppointment")
    const userUUID = localStorage.getItem("user_uuid")

    if (pendingAppointment && userUUID) {
      console.log("✅ Found pending appointment. Proceeding...")
      const appointment = JSON.parse(pendingAppointment)
      appointment.user_uuid = userUUID // Ensure user UUID is added
      createAppointment(appointment)
      sessionStorage.removeItem("pendingAppointment")
    }
  }, [])

  const handleAppointment = async () => {
    console.log("📆 Selected Date Before Sending:", selectedDate)
    console.log("⏰ Selected Schedule Before Sending:", selectedSchedule)

    if (!selectedDate || !selectedSchedule) {
      await Swal.fire({
        icon: "warning",
        title: "Information manquante",
        text: "Veuillez choisir une date et un horaire avant de continuer.",
        confirmButtonText: "D'accord",
        confirmButtonColor: "#002366",
      })
      return
    }

    const userUUID = localStorage.getItem("user_uuid")

    if (!userUUID) {
      // Save pending appointment to sessionStorage
      const pendingAppointment = {
        schedule_uuid: selectedSchedule,
        appointment_date: selectedDate.toISOString(),
        user_uuid: null,
      }
      sessionStorage.setItem("pendingAppointment", JSON.stringify(pendingAppointment))

      // Show SweetAlert2 Login Popup
      const { value: result } = await Swal.fire({
        title: "Connexion requise",
        text: "Vous devez être connecté pour confirmer ce rendez-vous.",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Se connecter",
        cancelButtonText: "Annuler",
        confirmButtonColor: "#002366",
        cancelButtonColor: "#d33",
      })

      if (result) {
        navigate("/login?redirect=checkout") // Redirect to login page if they accept
      }

      return
    }

    const appointmentPayload = {
      schedule_uuid: selectedSchedule,
      appointment_date: selectedDate.toISOString(),
      user_uuid: userUUID,
    }

    createAppointment(appointmentPayload)
  }

  const createAppointment = async (appointmentPayload) => {
    try {
      if (!appointmentPayload.user_uuid) {
        console.error("❌ Error: No user UUID found!")
        return
      }

      console.log("📤 Sending appointment data:", appointmentPayload)

      const response = await fetch("https://wellbe-api.onrender.com/api/v1/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentPayload),
      })

      const responseData = await response.json()

      if (response.ok) {
        Swal.fire({
          title: "Rendez-vous confirmé !",
          text: "Votre rendez-vous a été créé avec succès.",
          icon: "success",
          confirmButtonText: "D'accord",
          confirmButtonColor: "#002A5E",
        })
        navigate("/home")
      } else {
        console.error("❌ API Error:", responseData)
        Swal.fire({
          title: "Erreur",
          text: `Erreur lors de la création du rendez-vous: ${responseData.message || "Erreur inconnue"}`,
          icon: "error",
          confirmButtonText: "D'accord",
          confirmButtonColor: "#002A5E",
        })
      }
    } catch (error) {
      console.error("❌ Erreur API:", error)
      Swal.fire({
        title: "Erreur",
        text: "Une erreur est survenue lors de la communication avec le serveur.",
        icon: "error",
        confirmButtonText: "D'accord",
        confirmButtonColor: "#002A5E",
      })
    }
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Progress Indicator */}
      <div className="mb-6 px-4">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? "bg-[#002366] text-white" : "bg-gray-200 text-gray-500"}`}
            >
              1
            </div>
            <span className="mt-1 text-xs font-medium">Services</span>
          </div>
          <div className={`h-1 flex-1 mx-2 ${step >= 2 ? "bg-[#002366]" : "bg-gray-200"}`}></div>
          <div className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? "bg-[#002366] text-white" : "bg-gray-200 text-gray-500"}`}
            >
              2
            </div>
            <span className="mt-1 text-xs font-medium">Horaire</span>
          </div>
          <div className={`h-1 flex-1 mx-2 ${step >= 3 ? "bg-[#002366]" : "bg-gray-200"}`}></div>
          <div className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? "bg-[#002366] text-white" : "bg-gray-200 text-gray-500"}`}
            >
              3
            </div>
            <span className="mt-1 text-xs font-medium">Confirmation</span>
          </div>
        </div>
      </div>

      {/* Owner Component */}
      <div className="mb-4">
        <Owner establishment={establishment} />
      </div>

      {/* Main Content */}
      <div className="mt-4 px-4">
        {step === 1 && (
          <div>
            {/* Selected Services */}
            <SelectedServices cart={cart} removeFromCart={removeFromCart} />

            {/* Add More Services Button */}
            {!showServices && cart.length > 0 && (
              <div className="flex justify-end my-4">
                <button
                  className="flex items-center gap-2 bg-[#002366] text-white rounded-full px-4 py-2 hover:bg-[#001a4d] transition-colors"
                  onClick={() => setShowServices(true)}
                >
                  <Plus className="h-4 w-4" />
                  <span>Ajouter une prestation</span>
                </button>
              </div>
            )}

            {/* Services Selection */}
            {showServices && (
              <div className="bg-white rounded-lg shadow-md p-4 my-4 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold text-[#002366]">Prestations supplémentaires</h2>
                  <button
                    onClick={() => setShowServices(false)}
                    className="flex items-center gap-1 text-red-600 hover:text-red-800 transition-colors bg-red-50 hover:bg-red-100 px-2 py-1 rounded-full"
                  >
                    <X className="h-4 w-4" />
                    <span>Fermer</span>
                  </button>
                </div>

                <Services services={services} addToCart={addToCart} />
              </div>
            )}

            {/* Next Step Button */}
            {cart.length > 0 && !showServices && (
              <div className="flex justify-center mt-6">
                <button
                  className="flex items-center gap-2 bg-[#002366] text-white rounded-lg px-6 py-3 font-medium hover:bg-[#001a4d] transition-colors"
                  onClick={() => setStep(2)}
                >
                  <span>Choisir un horaire</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            )}

            {/* Warning if no services selected */}
            {cart.length === 0 && !showServices && (
              <div className="flex justify-center mt-6">
                <div className="flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-lg border border-amber-200">
                  <AlertCircle className="h-4 w-4" />
                  <span>Veuillez sélectionner au moins un service</span>
                </div>
              </div>
            )}
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <Calendar
              schedules={schedules}
              onDateSelect={(date) => {
                console.log("✅ Date selected from Calendar:", date)
                setSelectedDate(date)
              }}
              onScheduleSelect={(schedule) => {
                console.log("✅ Schedule selected from Calendar:", schedule)
                setSelectedSchedule(schedule)
              }}
            />

            <div className="flex justify-between mt-6">
              <button
                className="flex items-center gap-2 bg-gray-100 text-gray-700 rounded-lg px-4 py-2 hover:bg-gray-200 transition-colors"
                onClick={() => setStep(1)}
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Retour</span>
              </button>

              <button
                className={`
                  flex items-center gap-2 rounded-lg px-6 py-2 font-medium
                  transition-colors
                  ${
                    selectedDate && selectedSchedule
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }
                `}
                onClick={handleAppointment}
                disabled={!selectedDate || !selectedSchedule}
              >
                <Check className="h-4 w-4" />
                <span>Confirmer le rendez-vous</span>
              </button>
            </div>

            {/* Selected date and time display */}
            {selectedDate && selectedSchedule && (
              <div className="mt-4 bg-blue-50 border border-blue-100 rounded-lg p-3 flex items-center justify-center">
                <CalendarIcon className="h-4 w-4 text-[#002366] mr-2" />
                <span className="text-[#002366] font-medium text-sm">
                  {format(selectedDate, "dd MMMM yyyy", { locale: fr })} à {format(selectedDate, "HH:mm")}
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default EstablishmentCheckout

