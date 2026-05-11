import { apiClient } from "./apiService"; // Adjust if needed

export const createPersonnel = async (personnelData) => {
    const response = await apiClient.post("/establishment-personnel", personnelData, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
    });
    return response.data;
};


export const fetchEstablishmentPersonnel = async (establishmentId) => {
    const response = await apiClient.get(`/establishment-personnel/${establishmentId}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    });
    return response.data;
};
