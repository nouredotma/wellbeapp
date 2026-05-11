// GoogleLoginButton.js
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
const apiUrl = process.env.API_URL;

const GoogleLoginButton = () => {
    const navigate = useNavigate();

    const handleGoogleSuccess = (response) => {
        console.log("Google login success:", response);
        const { credential } = response;
        axios
            .post(`${apiUrl}/auth/google`, { token: credential })
            .then((res) => {
                const { token, user_uuid } = res.data;
                localStorage.setItem("token", token);
                localStorage.setItem("user_uuid", user_uuid);
                navigate("/mon-compte");
            })
            .catch((err) => {
                console.error("Google login error:", err);
            });
    };

    const handleGoogleFailure = () => {
        console.error("Google login failed");
    };

    return (
        <GoogleOAuthProvider clientId="61709956492-0na98hc3mjhcpeei5tsr74tl14qlu7rm.apps.googleusercontent.com">
            <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleFailure}
            />
        </GoogleOAuthProvider>
    );
};

export default GoogleLoginButton;
