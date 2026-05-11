"use client"

import { Check, Eye, EyeOff, X } from "lucide-react"
import { useEffect, useState } from "react"

export const Register = ({ handleSignUp, signUpData, setSignUpData, signUpError, setShowSignUp }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [emailOptionSelected, setEmailOptionSelected] = useState(false)

  // Password validation states
  const [passwordRequirements, setPasswordRequirements] = useState([
    { id: "length", text: "Entre 8 et 30 caractères", valid: false },
    { id: "uppercase", text: "Au moins une lettre majuscule", valid: false },
    { id: "lowercase", text: "Au moins une lettre minuscule", valid: false },
    { id: "special", text: "Au moins un chiffre ou caractère spécial", valid: false },
  ])

  // Update password validation whenever password changes
  useEffect(() => {
    const password = signUpData.user_password || ""
    setPasswordRequirements([
      {
        id: "length",
        text: "Entre 8 et 30 caractères",
        valid: password.length >= 8 && password.length <= 30,
      },
      {
        id: "uppercase",
        text: "Au moins une lettre majuscule",
        valid: /[A-Z]/.test(password),
      },
      {
        id: "lowercase",
        text: "Au moins une lettre minuscule",
        valid: /[a-z]/.test(password),
      },
      {
        id: "special",
        text: "Au moins un chiffre ou caractère spécial",
        valid: /[0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password),
      },
    ])
  }, [signUpData.user_password])

  return (
    <div className="h-[calc(100vh-4rem)] w-full flex flex-col justify-center lg:flex-row">
      {/* Left Section - Image with Gradient Overlay */}
      <div className="hidden lg:block lg:w-1/2 bg-[#FDF8F4] relative">
        <div className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1607006344380-b6775a0824a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80"
            alt="Decorative background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002366]/90 via-[#002366]/40 to-transparent flex flex-col justify-end p-8">
            <h2 className="text-white text-3xl font-bold mb-3">Rejoignez WELLBE</h2>
            <p className="text-white/90 text-lg max-w-md">
              Créez votre compte et découvrez une nouvelle façon de prendre soin de vous.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Registration Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-[450px] bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 lg:p-10">
          <div className="text-center mb-3 sm:mb-4">
            <h1 className="text-xl sm:text-2xl font-bold text-[#002366]">
              {emailOptionSelected ? "Créer un compte avec votre email" : "Créer un compte"}
            </h1>
            <p className="text-gray-600 text-xs sm:text-sm mt-1">Rejoignez WELLBE et commencez votre parcours</p>
          </div>

          <div
            className={`transition-all duration-500 ease-in-out ${emailOptionSelected ? "opacity-0 h-0 overflow-hidden" : "opacity-100"}`}
          >
            {/* Continue with Email Button */}
            <button
              onClick={() => setEmailOptionSelected(true)}
              type="button"
              className="w-full bg-white border border-gray-200 rounded-lg p-3 transition-all duration-300 hover:bg-blue-50 hover:border-blue-200 group"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#002366]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#002366] transition-all duration-300">
                    Continue with Email
                  </h3>
                  <p className="text-xs text-gray-500">Create an account using your email address</p>
                </div>
              </div>
            </button>

            <div className="relative py-3 my-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 border border-gray-300 bg-white p-2 rounded-lg hover:bg-gray-50 transition-all duration-300 h-12 mb-3 text-xs sm:text-sm"
              aria-label="Continue with Facebook"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="12" fill="#1877F2" />
                <path
                  d="M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.8008 14.3391 7.875 15.8297 7.875H17.3438V4.9219C17.3438 4.9219 15.9703 4.6875 14.6578 4.6875C11.9156 4.6875 10.125 6.3492 10.125 9.3516V12H7.07812V15.4688H10.125V23.8547C10.7367 23.9508 11.3625 24 12 24C12.6375 24 13.2633 23.9508 13.875 23.8547V15.4688H16.6711Z"
                  fill="white"
                />
              </svg>
              Continue with Facebook
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 border border-gray-300 bg-white p-2 rounded-lg hover:bg-gray-50 transition-all duration-300 h-12 mb-3 text-xs sm:text-sm"
              aria-label="Continue with Google"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M23.7663 12.2764C23.7663 11.4607 23.7001 10.6406 23.559 9.83807H12.2402V14.4591H18.722C18.453 15.9494 17.5888 17.2678 16.3233 18.1056V21.1039H20.1903C22.4611 19.0139 23.7663 15.9274 23.7663 12.2764Z"
                  fill="#4285F4"
                />
                <path
                  d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z"
                  fill="#34A853"
                />
                <path
                  d="M5.50253 14.3003C4.99987 12.8099 4.99987 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z"
                  fill="#FBBC04"
                />
                <path
                  d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 border border-gray-300 bg-white p-2 rounded-lg hover:bg-gray-50 transition-all duration-300 h-12 text-xs sm:text-sm"
              aria-label="Continue with Apple"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.543 12.0614C17.5552 10.5293 18.2363 9.30423 19.6105 8.35614C18.7292 7.07807 17.3908 6.38136 15.6089 6.26136C13.9292 6.14614 12.1265 7.26614 11.4454 7.26614C10.7265 7.26614 9.13089 6.30423 7.79178 6.30423C5.31996 6.34136 2.66541 8.28423 2.66541 12.2364C2.66541 13.3807 2.85814 14.5657 3.24359 15.7907C3.76178 17.4107 5.66541 21.0364 7.64359 20.9764C8.75814 20.9457 9.53996 20.1364 11.0089 20.1364C12.4292 20.1364 13.1601 20.9764 14.4292 20.9764C16.4292 20.9407 18.1601 17.6614 18.6527 16.0364C15.7292 14.6364 15.543 12.1364 15.543 12.0614H17.543ZM14.6527 4.76136C15.8292 3.36136 15.7292 2.06136 15.7089 1.61423C14.6527 1.67807 13.4454 2.30423 12.7908 3.09993C12.0601 3.95614 11.6527 5.01423 11.7292 6.24614C12.8601 6.33136 13.8292 5.73136 14.6527 4.76136Z"
                  fill="black"
                />
              </svg>
              Continue with Apple
            </button>

            <div className="mt-5 text-center">
              <p className="text-sm text-gray-600">
                Vous avez déjà un compte ?
                <button
                  type="button"
                  onClick={() => setShowSignUp(false)}
                  className="text-[#002366] font-semibold hover:underline ml-1"
                >
                  Se connecter
                </button>
              </p>
            </div>
          </div>

          <div
            className={`transition-all duration-500 ease-in-out ${emailOptionSelected ? "opacity-100" : "opacity-0 h-0 overflow-hidden"}`}
          >
            <form onSubmit={handleSignUp} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Prénom</label>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="Prénom"
                    value={signUpData.first_name || ""}
                    onChange={(e) =>
                      setSignUpData({
                        ...signUpData,
                        first_name: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 rounded-lg p-2 mb-1 focus:outline-none focus:ring-2 focus:ring-[#002366]/20 focus:border-[#002366] transition-all duration-300 text-gray-900 bg-white h-9 sm:h-10 text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Nom</label>
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Nom"
                    value={signUpData.last_name || ""}
                    onChange={(e) =>
                      setSignUpData({
                        ...signUpData,
                        last_name: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 rounded-lg p-2 mb-1 focus:outline-none focus:ring-2 focus:ring-[#002366]/20 focus:border-[#002366] transition-all duration-300 text-gray-900 bg-white h-9 sm:h-10 text-xs sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="votre@email.com"
                  value={signUpData.user_email || ""}
                  onChange={(e) =>
                    setSignUpData({
                      ...signUpData,
                      user_email: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg p-2 mb-1 focus:outline-none focus:ring-2 focus:ring-[#002366]/20 focus:border-[#002366] transition-all duration-300 text-gray-900 bg-white h-10"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mot de passe <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="user_password"
                    placeholder="••••••••"
                    value={signUpData.user_password || ""}
                    onChange={(e) =>
                      setSignUpData({
                        ...signUpData,
                        user_password: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 rounded-lg p-2 pr-10 mb-1 focus:outline-none focus:ring-2 focus:ring-[#002366]/20 focus:border-[#002366] transition-all duration-300 text-gray-900 bg-white h-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>

                {/* Password requirements */}
                {signUpData.user_password && (
                  <div className="mt-2 space-y-1 bg-gray-50 p-2 sm:p-3 rounded-lg">
                    {passwordRequirements.map((req) => (
                      <div key={req.id} className="flex items-center text-[10px] sm:text-xs">
                        {req.valid ? (
                          <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-green-500 mr-1 sm:mr-1.5 flex-shrink-0" />
                        ) : (
                          <X className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-gray-300 mr-1 sm:mr-1.5 flex-shrink-0" />
                        )}
                        <span className={req.valid ? "text-gray-700" : "text-gray-500"}>{req.text}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirmer le mot de passe <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirm_password"
                    placeholder="••••••••"
                    value={signUpData.confirm_password || ""}
                    onChange={(e) =>
                      setSignUpData({
                        ...signUpData,
                        confirm_password: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 rounded-lg p-2 pr-10 mb-1 focus:outline-none focus:ring-2 focus:ring-[#002366]/20 focus:border-[#002366] transition-all duration-300 text-gray-900 bg-white h-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {signUpError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-600 text-xs">{signUpError}</p>
                </div>
              )}

              <div className="flex gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setEmailOptionSelected(false)}
                  className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 h-10 text-xs sm:text-sm flex items-center justify-center"
                >
                  Retour
                </button>
                <button
                  type="submit"
                  className="flex-1 border border-gray-200 rounded-lg font-medium transition-all duration-300 hover:bg-blue-50 hover:border-blue-200 group h-10 flex items-center justify-center"
                >
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-1.5 group-hover:bg-blue-200 transition-all duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-[#002366]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-900 group-hover:text-[#002366] transition-all duration-300">
                      Créer mon compte
                    </span>
                  </div>
                </button>
              </div>

              <div className="mt-2 text-center">
                <p className="text-sm text-gray-600">
                  Vous avez déjà un compte ?
                  <button
                    type="button"
                    onClick={() => setShowSignUp(false)}
                    className="text-[#002366] font-semibold hover:underline ml-1"
                  >
                    Se connecter
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

