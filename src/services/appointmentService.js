import { apiClient } from "./apiService";

// Fetch appointments for a user
export const fetchUserAppointments = async (userUUID) => {
    try {
        const response = await apiClient.get(`/appointments/user/${userUUID}`);
        return response.data || [];
    } catch (error) {
        return [];
    }
};

export const fetchScheduleById = async (schedule_uuid) => {
    try {
        const response = await apiClient.get(`/schedule/${schedule_uuid}`);
        return response.data || null;
    } catch (error) {
        console.error("❌ Error fetching schedule:", error);
        return null;
    }
};

export const fetchEstablishmentById = async (establishment_uuid) => {
    try {
        const response = await apiClient.get(`/establishment/${establishment_uuid}`);
        return response.data || null;
    } catch (error) {
        console.error("❌ Error fetching establishment:", error);
        return null;
    }
};
