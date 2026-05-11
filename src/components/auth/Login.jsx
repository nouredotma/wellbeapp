"use client"

import { signInWithPopup } from "firebase/auth"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { appleProvider, auth, facebookProvider, googleProvider } from "../../services/firebaseConfig"

export const handleGoogleLogin = async (navigate) => {
  try {
    const result = await signInWithPopup(auth, googleProvider)
    console.log("✅ Google User:", result.user)
    localStorage.setItem("accessToken", result.user.accessToken)
    localStorage.setItem("user_uuid", result.user.uid)
    navigate("/mon-compte")
  } catch (error) {
    console.error("❌ Google Login Error:", error)
  }
}

export const handleFacebookLogin = async (navigate) => {
  try {
    const result = await signInWithPopup(auth, facebookProvider)
    console.log("✅ Facebook User:", result.user)
    localStorage.setItem("accessToken", result.user.accessToken)
    localStorage.setItem("user_uuid", result.user.uid)
    navigate("/mon-compte")
  } catch (error) {
    console.error("❌ Facebook Login Error:", error)
  }
}

export const handleAppleLogin = async (navigate) => {
  try {
    const result = await signInWithPopup(auth, appleProvider)
    console.log("✅ Apple User:", result.user)
    localStorage.setItem("accessToken", result.user.accessToken)
    localStorage.setItem("user_uuid", result.user.uid)
    navigate("/mon-compte")
  } catch (error) {
    console.error("❌ Apple Login Error:", error)
  }
}

// Update the AuthLogin component with improved UI
export const AuthLogin = ({ handleLogin, email, setEmail, password, setPassword, loginError, setShowSignUp }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [emailOptionSelected, setEmailOptionSelected] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="flex h-[calc(100vh-4rem)] w-full flex-col justify-center lg:flex-row">
      {/* Left Section - Image with Gradient Overlay */}
      <div className="hidden lg:block lg:w-1/2 bg-[#FDF8F4] relative">
        <div className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1607006344380-b6775a0824a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80"
            alt="Decorative background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002366]/90 via-[#002366]/40 to-transparent flex flex-col justify-end p-8">
            <h2 className="text-white text-3xl font-bold mb-3">Bienvenue sur WELLBE</h2>
            <p className="text-white/90 text-lg max-w-md">
              Votre plateforme de bien-être et de beauté. Connectez-vous pour accéder à votre espace personnel.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-[450px] bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 lg:p-10">
          <h1 className="text-xl sm:text-2xl font-bold text-[#002366] mb-4 text-center">
            {emailOptionSelected ? "Connectez-vous avec votre email" : "Vous avez déjà utilisé WELLBE ?"}
          </h1>

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
                  <p className="text-xs text-gray-500">Sign in using your email address</p>
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
              onClick={() => handleFacebookLogin(navigate)}
              type="button"
              className="w-full flex items-center justify-center gap-2 sm:gap-3 border border-gray-300 bg-white p-2 rounded-lg hover:bg-gray-50 transition-all duration-300 h-10 sm:h-12 mb-3 text-xs sm:text-sm"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="sm:w-6 sm:h-6"
              >
                <rect width="24" height="24" rx="12" fill="#1877F2" />
                <path
                  d="M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.8008 14.3391 7.875 15.8297 7.875H17.3438V4.9219C17.3438 4.9219 15.9703 4.6875 14.6578 4.6875C11.9156 4.6875 10.125 6.3492 10.125 9.3516V12H7.07812V15.4688H10.125V23.8547C10.7367 23.9508 11.3625 24 12 24C12.6375 24 13.2633 23.9508 13.875 23.8547V15.4688H16.6711Z"
                  fill="white"
                />
              </svg>
              <span className="hidden xs:inline">Continue with Facebook</span>
              <span className="inline xs:hidden">Facebook</span>
            </button>

            <button
              onClick={() => handleGoogleLogin(navigate)}
              type="button"
              className="w-full flex items-center justify-center gap-2 sm:gap-3 border border-gray-300 bg-white p-2 rounded-lg hover:bg-gray-50 transition-all duration-300 h-10 sm:h-12 mb-3 text-xs sm:text-sm"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="sm:w-6 sm:h-6"
              >
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
              <span className="hidden xs:inline">Continue with Google</span>
              <span className="inline xs:hidden">Google</span>
            </button>

            <button
              onClick={() => handleAppleLogin(navigate)}
              type="button"
              className="w-full flex items-center justify-center gap-2 sm:gap-3 border border-gray-300 bg-white p-2 rounded-lg hover:bg-gray-50 transition-all duration-300 h-10 sm:h-12 mb-3 text-xs sm:text-sm"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="sm:w-6 sm:h-6"
              >
                <path
                  d="M17.543 12.0614C17.5552 10.5293 18.2363 9.30423 19.6105 8.35614C18.7292 7.07807 17.3908 6.38136 15.6089 6.26136C13.9292 6.14614 12.1265 7.26614 11.4454 7.26614C10.7265 7.26614 9.13089 6.30423 7.79178 6.30423C5.31996 6.34136 2.66541 8.28423 2.66541 12.2364C2.66541 13.3807 2.85814 14.5657 3.24359 15.7907C3.76178 17.4107 5.66541 21.0364 7.64359 20.9764C8.75814 20.9457 9.53996 20.1364 11.0089 20.1364C12.4292 20.1364 13.1601 20.9764 14.4292 20.9764C16.4292 20.9407 18.1601 17.6614 18.6527 16.0364C15.7292 14.6364 15.543 12.1364 15.543 12.0614H17.543ZM14.6527 4.76136C15.8292 3.36136 15.7292 2.06136 15.7089 1.61423C14.6527 1.67807 13.4454 2.30423 12.7908 3.09993C12.0601 3.95614 11.6527 5.01423 11.7292 6.24614C12.8601 6.33136 13.8292 5.73136 14.6527 4.76136Z"
                  fill="black"
                />
              </svg>
              <span className="hidden xs:inline">Continue with Apple</span>
              <span className="inline xs:hidden">Apple</span>
            </button>

            <div className="mt-5 text-center">
              <p className="text-sm text-gray-600">
                Vous êtes nouveau sur WELLBE ?
                <button
                  type="button"
                  onClick={() => setShowSignUp(true)}
                  className="text-[#002366] font-semibold hover:underline ml-1"
                >
                  Créer mon compte
                </button>
              </p>
            </div>
          </div>

          <div
            className={`transition-all duration-500 ease-in-out ${emailOptionSelected ? "opacity-100" : "opacity-0 h-0 overflow-hidden"}`}
          >
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  className="w-full border border-gray-300 rounded-lg p-2 mb-1 focus:outline-none focus:ring-2 focus:ring-[#002366]/20 focus:border-[#002366] transition-all duration-300 text-gray-900 bg-white h-9 sm:h-10"
                  required
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Mot de passe <span className="text-red-500">*</span>
                  </label>
                  <a href="#" className="text-xs text-[#002366] hover:underline">
                    Mot de passe oublié ?
                  </a>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
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
              </div>

              {loginError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-md text-sm">
                  <p className="text-red-600">{loginError}</p>
                </div>
              )}

              <div className="flex gap-2 sm:gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setEmailOptionSelected(false)}
                  className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 h-10 text-xs sm:text-sm"
                >
                  Retour
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-white border border-gray-200 rounded-lg p-2 transition-all duration-300 hover:bg-blue-50 hover:border-blue-200 group h-10 "
                >
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 group-hover:bg-blue-200 transition-all duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-[#002366]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-900 group-hover:text-[#002366] transition-all duration-300">
                      Se connecter
                    </span>
                  </div>
                </button>
              </div>

              <div className="mt-5 text-center">
                <p className="text-sm text-gray-600">
                  Vous êtes nouveau sur WELLBE ?
                  <button
                    type="button"
                    onClick={() => setShowSignUp(true)}
                    className="text-[#002366] font-semibold hover:underline ml-1"
                  >
                    Créer mon compte
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

