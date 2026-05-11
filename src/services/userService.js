import { apiClient } from "./apiService";

// This still works if you have user_uuid (like after login if backend sends it)
export const getUserInfo = async () => {
    const userUUID = localStorage.getItem("user_uuid");

    if (!userUUID) {
        return { user_first_name: "Mock", user_name: "User", email: "mock@example.com" };
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
        return { user_first_name: "Mock", user_name: "User", email: "mock@example.com" };
    }
};

export const fetchCurrentUserProfile = async () => {
    try {
        const response = await apiClient.get(`/users/me`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        });
        return response.data;
    } catch (error) {
        return { user_uuid: "mock-uuid", user_first_name: "Mock", user_name: "User" };
    }
};

export const getUserInfoByEmail = async (email) => {
    try {
        const response = await apiClient.get(`/users?email=${email}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        });

        if (response.data && response.data.length > 0) {
            return response.data[0];
        } else {
            return { user_first_name: "Mock", user_name: "User", email: email };
        }
    } catch (error) {
        console.error("❌ Error fetching user info by email:", error);
        return { user_first_name: "Mock", user_name: "User", email: email };
    }
};

export const updateUser = async (userUUID, data) => {
    try {
        const response = await apiClient.put(`/users/${userUUID}`, data);
        return response.data;
    } catch (error) {
        return { success: true, ...data };
    }
};
