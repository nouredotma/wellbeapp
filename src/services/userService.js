import { apiClient } from "./apiService";

// This still works if you have user_uuid (like after login if backend sends it)
export const getUserInfo = async () => {
    const userUUID = localStorage.getItem("user_uuid");

    if (!userUUID) {
        console.error("❌ No user UUID found in localStorage.");
        throw new Error("User UUID is missing from localStorage");
    }

    try {
        const response = await apiClient.get(`/users/${userUUID}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error("❌ Error fetching user info:", error);
        throw error;
    }
};

export const fetchCurrentUserProfile = async () => {
    const response = await apiClient.get(`/users/me`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
    });
    return response.data;  // This must include `user_uuid`
};

export const getUserInfoByEmail = async (email) => {
    try {
        const response = await apiClient.get(`/users?email=${email}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        });

        if (response.data && response.data.length > 0) {
            return response.data[0];  // First match is the logged-in user
        } else {
            throw new Error("Aucun utilisateur trouvé avec cet email.");
        }
    } catch (error) {
        console.error("❌ Error fetching user info by email:", error);
        throw error;
    }
};

export const updateUser = async (userUUID, data) => {
    const response = await apiClient.put(`/users/${userUUID}`, data);
    return response.data;
};
