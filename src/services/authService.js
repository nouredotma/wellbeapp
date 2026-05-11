import { apiClient } from "./apiService";

export const register = async (data) => {
    try {
        const response = await apiClient.post("/users", data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        console.error("❌ Error creating user:", error.response?.data || error.message);
        throw error;
    }
};

// export const login = async (data) => {
//     try {
//         const response = await apiClient.post("/auth/token", data);

//         return response.data;
//     } catch (error) {
//         console.error("❌ Error creating establishment:", error);
//     }
// };
export const login = async (data) => {
    const response = await apiClient.post("/auth/token", data);
    return response.data; // Now response includes user_uuid
};
