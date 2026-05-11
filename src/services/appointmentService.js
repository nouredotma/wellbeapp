import { apiClient } from "./apiService";

// Fetch appointments for a user
export const fetchUserAppointments = async (userUUID) => {
    const response = await apiClient.get(`/appointments/user/${userUUID}`);
    return response.data; // This is the list of appointments
};

export const fetchScheduleById = async (schedule_uuid) => {
    try {
        const response = await fetch(`https://wellbe-api.onrender.com/api/v1/schedule/${schedule_uuid}`);
        if (!response.ok) throw new Error("Failed to fetch schedule");
        const data = await response.json();

        console.log("✅ Schedule Data:", data); // Debugging
        return data;
    } catch (error) {
        console.error("❌ Error fetching schedule:", error);
        return null; // Return null instead of crashing
    }
};

export const fetchEstablishmentById = async (establishment_uuid) => {
    try {
        const response = await fetch(`https://wellbe-api.onrender.com/api/v1/establishment/${establishment_uuid}`);
        if (!response.ok) throw new Error("Failed to fetch establishment");
        const data = await response.json();

        console.log("✅ Establishment Data:", data); // Debugging
        return data;
    } catch (error) {
        console.error("❌ Error fetching establishment:", error);
        return null; // Return null instead of crashing
    }
};
