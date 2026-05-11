import { apiClient } from "./apiService";

export const creationLocalisation = async (data) => {
    try {
        const response = await apiClient.post("/locations", data);
        return response.data;
    } catch (error) {
        console.error(
            "Error fetching establishment types:",
            error.response?.data || error.message
        );
        throw error;
    }
};

export const getLocations = async () => {
    try {
        const response = await apiClient.get("/locations");

        return response.data
            .map((location) => location.location_city)
            .filter((city) => city && city !== "string");
    } catch (error) {
        console.error("❌ Error fetching locations:", error);
        throw error;
    }
};
