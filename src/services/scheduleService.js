import { apiClient } from "./apiService";

// Fetch schedules for an establishment
export const fetchEstablishmentSchedules = async (establishmentId) => {
    try {
        const response = await apiClient.get(
            `/schedule/establishment/${establishmentId}`
        );
        return response.data; // Returns array of schedules
    } catch (error) {
        console.error("❌ Failed to fetch schedules:", error);
        throw error;
    }
};

// Create a new schedule
export const createSchedule = async (scheduleData) => {
    try {
        const response = await apiClient.post("/schedule", scheduleData);
        return response.data; // Returns created schedule
    } catch (error) {
        console.error("❌ Failed to create schedule:", error);
        throw error;
    }
};

// Update an existing schedule
export const updateSchedule = async (scheduleId, scheduleData) => {
    try {
        const response = await apiClient.put(`/schedule/${scheduleId}`, scheduleData);
        return response.data; // Returns updated schedule
    } catch (error) {
        console.error("❌ Failed to update schedule:", error);
        throw error;
    }
};

// Delete a schedule
export const deleteSchedule = async (scheduleId) => {
    try {
        await apiClient.delete(`/schedule/${scheduleId}`);
        return true;
    } catch (error) {
        console.error("❌ Failed to delete schedule:", error);
        throw error;
    }
};

