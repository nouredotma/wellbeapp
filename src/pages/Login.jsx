"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import Layout from "../components/Layout/Layout"
import { AuthLogin, handleAppleLogin, handleFacebookLogin, handleGoogleLogin } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { login, register } from "../services/authService"
import { getUserInfoByEmail } from "../services/userService"

const Login = () => {
  const [showSignUp, setShowSignUp] = useState(false)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginError, setLoginError] = useState(null)

  const [signUpData, setSignUpData] = useState({
    user_email: "",
    user_name: "",
    user_first_name: "",
    user_password: "",
    user_numero: "",
    user_whatsapp_uid: "",
    role_id: 1,
  })

  const [signUpError, setSignUpError] = useState(null)

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const { accessToken, refreshToken } = await login({ email, password })

      localStorage.setItem("accessToken", accessToken)
      localStorage.setItem("refreshToken", refreshToken)

      // Fetch the user profile by email (because user_uuid is not in the token response)
      const user = await getUserInfoByEmail(email)
      console.log("✅ User fetched after login:", user)

      localStorage.setItem("user_uuid", user.user_uuid) // Save the UUID for future use

      const lastPage = sessionStorage.getItem("lastPage") || "/mon-compte"

      navigate(lastPage)
    } catch (err) {
      console.error("❌ Login error:", err)
      setLoginError("Erreur de connexion. Vérifiez vos identifiants.")
    }
  }

  const handleSignUp = async (e) => {
    e.preventDefault()

    if (signUpData.user_password !== signUpData.confirm_password) {
      setSignUpError("Les mots de passe ne correspondent pas.")
      return
    }

    const completeSignUpData = {
      user_email: signUpData.user_email,
      user_password: signUpData.user_password,
      user_name: "null",
      user_first_name: "null",
      user_numero: "null",
      user_whatsapp_uid: "null",
      role_id: 1,
    }

    console.log("📦 Sending payload to backend:", completeSignUpData)

    try {
      const response = await register(completeSignUpData)

      console.log("✅ User registered:", response)

      // Success popup
      await Swal.fire({
        title: "Compte créé avec succès !",
        text: "Votre compte a été créé avec succès. Vous pouvez maintenant vous connecter.",
        icon: "success",
        confirmButtonText: "Ok",
        confirmButtonColor: "#002A5E",
      })

      window.location.reload()
    } catch (error) {
      console.error("❌ Sign-up error:", error)

      const errorMsg = error.response?.data?.message || "Erreur lors de la création de l'utilisateur."
      setSignUpError(errorMsg)
    }
  }

  return (
    <Layout>
      <div className="my-0 mx-0 flex-1">
        {showSignUp ? (
          <Register
            handleSignUp={handleSignUp}
            signUpData={signUpData}
            setSignUpData={setSignUpData}
            signUpError={signUpError}
            setShowSignUp={setShowSignUp}
          />
        ) : (
          <AuthLogin
            handleLogin={handleLogin}
            handleGoogleLogin={() => handleGoogleLogin(navigate)}
            handleFacebookLogin={() => handleFacebookLogin(navigate)}
            handleAppleLogin={() => handleAppleLogin(navigate)}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            loginError={loginError}
            setShowSignUp={setShowSignUp}
          />
        )}
      </div>
    </Layout>
  )
}

export default Login

