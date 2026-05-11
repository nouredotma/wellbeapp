"use client"

import { X } from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import EditUser from "../components/EditUser"
import Layout from "../components/Layout/Layout"
import { fetchEstablishmentById, fetchScheduleById, fetchUserAppointments } from "../services/appointmentService"
import { getUserInfo } from "../services/userService"

// ChangePassword component integrated in the same file
const ChangePassword = ({ isOpen, onClose, userUUID }) => {
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Password validation
  const validatePassword = (password) => {
    if (password.length < 8) {
      return "Le mot de passe doit contenir au moins 8 caractères"
    }
    if (!/[A-Z]/.test(password)) {
      return "Le mot de passe doit contenir au moins une lettre majuscule"
    }
    if (!/[a-z]/.test(password)) {
      return "Le mot de passe doit contenir au moins une lettre minuscule"
    }
    if (!/[0-9]/.test(password)) {
      return "Le mot de passe doit contenir au moins un chiffre"
    }
    return ""
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    // Validate passwords
    if (newPassword !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas")
      return
    }

    const passwordError = validatePassword(newPassword)
    if (passwordError) {
      setError(passwordError)
      return
    }

    setIsLoading(true)

    try {
      // Replace with your actual API call
      // const response = await changeUserPassword(userUUID, currentPassword, newPassword);

      // Simulate API call for now
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setSuccess("Votre mot de passe a été modifié avec succès")
      setCurrentPassword("")
      setNewPassword("")
      setConfirmPassword("")

      // Close modal after success (optional)
      setTimeout(() => {
        onClose()
      }, 2000)
    } catch (error) {
      console.error("Failed to change password:", error)
      setError("Échec de la modification du mot de passe. Veuillez vérifier votre mot de passe actuel.")
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <X size={20} />
        </button>

        <h2 className="text-xl font-semibold mb-4">Changer le mot de passe</h2>

        {success && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded">{success}</div>
        )}

        {error && <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe actuel</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nouveau mot de passe</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirmer le nouveau mot de passe</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div className="mt-2 text-sm text-gray-600">
            <p>Le mot de passe doit contenir :</p>
            <ul className="list-disc pl-5 mt-1">
              <li>Au moins 8 caractères</li>
              <li>Au moins une lettre majuscule</li>
              <li>Au moins une lettre minuscule</li>
              <li>Au moins un chiffre</li>
            </ul>
          </div>

          <div className="flex justify-end gap-2 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-4 py-2 bg-[#002A5E] text-white rounded hover:bg-[#001f45] disabled:opacity-70"
            >
              {isLoading ? "Chargement..." : "Confirmer"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

const MonCompte = () => {
  const [userInfo, setUserInfo] = useState(null)
  const [appointments, setAppointments] = useState([])
  const [activeSection, setActiveSection] = useState("rdv")
  const navigate = useNavigate()
  const [isEditModalOpen, setEditModalOpen] = useState(false)
  const [isPasswordModalOpen, setPasswordModalOpen] = useState(false)

  useEffect(() => {
    fetchUserInfo()
  }, [])

  useEffect(() => {
    if (activeSection === "rdv") {
      loadUserAppointments()
    }
  }, [activeSection])

  const fetchUserInfo = async () => {
    const userUUID = localStorage.getItem("user_uuid")
    if (!userUUID) {
      navigate("/login")
      return
    }
    try {
      const data = await getUserInfo(userUUID)
      setUserInfo(data)
    } catch (error) {
      console.error("❌ Failed to fetch user info:", error)
      navigate("/login")
    }
  }

  const loadUserAppointments = async () => {
    const userUUID = localStorage.getItem("user_uuid")
    if (!userUUID) return

    try {
      const appointmentsData = await fetchUserAppointments(userUUID)

      const enrichedAppointments = await Promise.all(
        (appointmentsData || []).map(async (appt) => {
          // Ensure appointmentsData is not undefined
          try {
            const schedule = await fetchScheduleById(appt.schedule_uuid)
            const establishment = await fetchEstablishmentById(schedule.establishment_uuid)

            return {
              ...appt,
              establishment_name: establishment.establishment_name || "Établissement inconnu",
            }
          } catch (err) {
            console.error(`⚠️ Failed to fetch schedule/establishment for appointment ${appt.appointment_id}`, err)
            return {
              ...appt,
              establishment_name: "Établissement inconnu",
            }
          }
        }),
      )

      setAppointments(enrichedAppointments)
    } catch (error) {
      console.error("❌ Failed to load appointments:", error)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user_uuid")
    navigate("/login")
  }

  return (
    <Layout>
      <br />
      <main className="container mx-auto mt-10 px-6">
        <h1 className="text-2xl font-semibold mb-6">Mon compte</h1>
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="w-1/4 bg-white shadow rounded p-4">
            <h2 className="text-xl font-semibold">Mon compte</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <button
                  className={`${activeSection === "rdv" ? "font-bold underline" : ""}`}
                  onClick={() => setActiveSection("rdv")}
                >
                  Mes rendez-vous
                </button>
              </li>
              <li>
                <button
                  className={`${activeSection === "info" ? "font-bold underline" : ""}`}
                  onClick={() => setActiveSection("info")}
                >
                  Mes informations
                </button>
              </li>
              <li>
                <button
                  className={`${activeSection === "proches" ? "font-bold underline" : ""}`}
                  onClick={() => setActiveSection("proches")}
                >
                  Mes proches
                </button>
              </li>
              <li className="text-red-500">
                <button className="text-red-500 underline" onClick={handleLogout}>
                  Se déconnecter
                </button>
              </li>
            </ul>
          </aside>

          {/* Main Content */}
          <section className="flex-1 space-y-6">
            {activeSection === "rdv" && (
              <div>
                <h2 className="text-xl font-semibold">Mes RDV passés</h2>
                {appointments.length > 0 ? (
                  appointments.map((appt, index) => (
                    <div key={index} className="border p-4 rounded bg-white shadow-sm mt-4 flex items-start gap-4">
                      {/* Default Image */}
                      <img
                        src="https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg"
                        alt="Establishment"
                        className="w-24 h-24 object-cover rounded"
                      />

                      <div className="flex-1">
                        <h3 className="font-semibold">
                          {new Date(appt.appointment_date).toLocaleDateString("fr-FR", {
                            weekday: "long",
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}{" "}
                          à{" "}
                          {new Date(appt.appointment_date).toLocaleTimeString("fr-FR", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </h3>

                        <p className="font-bold">{appt.establishment_name}</p>

                        {/* Static price/duration/staff for now */}
                        <p className="text-sm text-gray-500">⏱ 1h 30min • 800 MAD</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Aucun rendez-vous trouvé.</p>
                )}
              </div>
            )}

            {activeSection === "info" && userInfo && (
              <div className="p-6 bg-white shadow rounded">
                <h2 className="text-xl font-semibold mb-4">Mes informations</h2>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={userInfo.user_first_name || "Non défini"}
                    className="border p-2 rounded"
                    disabled
                  />
                  <input
                    type="text"
                    value={userInfo.user_name || "Non défini"}
                    className="border p-2 rounded"
                    disabled
                  />
                  <input type="email" value={userInfo.user_email} className="border p-2 rounded" disabled />
                  <input
                    type="text"
                    value={userInfo.user_phone || "Non défini"}
                    className="border p-2 rounded"
                    disabled
                  />
                  <input
                    type="text"
                    value={userInfo.Role?.role_label || "Non défini"}
                    className="border p-2 rounded"
                    disabled
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <button onClick={() => setEditModalOpen(true)} className="bg-[#002A5E] text-white px-4 py-2 rounded">
                    Modifier mes informations
                  </button>
                  <button
                    onClick={() => setPasswordModalOpen(true)}
                    className="bg-[#002A5E] text-white px-4 py-2 rounded"
                  >
                    Changer le mot de passe
                  </button>
                </div>

                {/* Edit Modal */}
                <EditUser
                  isOpen={isEditModalOpen}
                  onClose={() => setEditModalOpen(false)}
                  user={userInfo}
                  refreshUserInfo={fetchUserInfo}
                />

                {/* Password Change Modal */}
                <ChangePassword
                  isOpen={isPasswordModalOpen}
                  onClose={() => setPasswordModalOpen(false)}
                  userUUID={userInfo?.user_uuid}
                />
              </div>
            )}

            {activeSection === "proches" && (
              <div className="p-6 bg-white shadow rounded">
                <h2 className="text-xl font-semibold mb-4">Mes proches</h2>
                <p>Vous pouvez ajouter vos proches ici (future fonctionnalité).</p>
              </div>
            )}
          </section>
        </div>
      </main>
      <br />
    </Layout>
  )
}

export default MonCompte

