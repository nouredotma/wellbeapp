import axios from "axios";

export const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

// apiClient.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem("token");

//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }

//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// // Handle errors globally
// apiClient.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         if (error.response?.status === 401) {
//             console.error("Unauthorized: Please log in again.");
//         } else if (error.response?.status === 404) {
//             console.error("Resource not found.");
//         } else {
//             console.error("An error occurred:", error);
//         }
//         return Promise.reject(error);
//     }
// );

export const login = async (email, password) => {
    try {
        const response = await apiClient.post("/auth/token", {
            email,
            password,
        });

        return response.data;
    } catch (error) {
        console.error("Error during login:", error);
    }
};

export const register = async (userData) => {
    try {
        const response = await apiClient.post("/users", userData);

        return response.data;
    } catch (error) {
        console.error("Error during registration:", error);
    }
};
