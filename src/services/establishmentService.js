import { apiClient } from "./apiService";

export const creationEstablishment = async (data) => {
    try {
        const response = await apiClient.post("/establishments", data);

        return response.data;
    } catch (error) {
        console.error("❌ Error creating establishment:", error);
    }
};

export const getEstablishments = async (type, city, country) => {
    try {
        const response = await apiClient.get(
            `/establishment?type_establishment_id=${type}&location_city=${city}&location_country=${country}`
        );

        return response.data;
    } catch (error) {
        console.error("❌ Error fetching establishments:", error);
    }
};

export const getEstablishmentById = async (establishmentId) => {
    try {
        const response = await apiClient.get(
            `/establishment/${establishmentId}`
        );

        return response.data;
    } catch (error) {
        console.error("❌ Error fetching establishment:", error);
    }
};

export const fetchTypesEstablishment = async () => {
    try {
        const response = await apiClient.get("/type-establishments");

        return response.data;
    } catch (error) {
        console.error("❌ Error fetching establishment types:", error);
    }
};

export const fetchWorksEstablishment = async () => {
    try {
        const response = await apiClient.get("/work-locations");

        return response.data;
    } catch (error) {
        console.error("❌ Error fetching work locations:", error);
    }
};

export const getEstablishmentServices = async (establishmentId) => {
    try {
        const response = await apiClient.get(
            `/products/establishment/${establishmentId}`
        );

        return response.data;
    } catch (error) {
        console.error("❌ Error fetching services:", error);
    }
};

export const getEstablishmentPersonnels = async (establishmentId) => {
    try {
        const response = await apiClient.get(
            `/establishment-personnel/${establishmentId}`
        );

        return response.data;
    } catch (error) {
        console.error("❌ Error fetching services:", error);
    }
};

export const getEstablishmentSchedules = async (establishmentId) => {
    try {
        const response = await apiClient.get(
            `/schedule/establishment/${establishmentId}`
        );

        return response.data;
    } catch (error) {
        console.error("❌ Error fetching services:", error);
    }
};

export const fetchEstablishmentById = async (id) => {
    try {
        const response = await apiClient.get(`/establishment/${id}`);

        return response.data;
    } catch (error) {
        console.error(`❌ Error fetching establishment with ID ${id}:`, error);
    }
};
