import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "";

export const apiClient = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

// Comprehensive mock data for template mode
const mockData = {
    "/type-establishments": [
        { id: 1, name: "Coiffeur", type_establishment_id: 1, type_establishment_label: "Coiffeur" },
        { id: 2, name: "Barbier", type_establishment_id: 2, type_establishment_label: "Barbier" },
        { id: 3, name: "Institus", type_establishment_id: 3, type_establishment_label: "Institus" },
        { id: 4, name: "Spa & Hamam", type_establishment_id: 4, type_establishment_label: "Spa & Hamam" },
    ],
    "/establishment": [
        {
            establishment_id: 1,
            establishment_uuid: "uuid-1",
            establishment_label: "L'Atelier Coiffure",
            establishment_description: "Expert en coiffure mixte et colorations végétales.",
            type_establishment_id: 1,
            establishment_address: "Rabat Agdal",
            rating: 4.8,
            price: 150,
            Location: { 
                location_city: "Rabat", 
                location_latitude: "33.9911", 
                location_longitude: "-6.8489",
                location_code_postal: "10000",
                location_country: "Maroc"
            }
        },
        {
            establishment_id: 2,
            establishment_uuid: "uuid-2",
            establishment_label: "The Gentlemen's Club",
            establishment_description: "Barbier traditionnel et soins du visage pour hommes.",
            type_establishment_id: 2,
            establishment_address: "Rabat Souissi",
            rating: 4.9,
            price: 200,
            Location: { 
                location_city: "Rabat", 
                location_latitude: "33.9711", 
                location_longitude: "-6.8289",
                location_code_postal: "10100",
                location_country: "Maroc"
            }
        },
        {
            establishment_id: 3,
            establishment_uuid: "uuid-3",
            establishment_label: "Beauty Institute Zen",
            establishment_description: "Soins esthétiques, manucure et épilation.",
            type_establishment_id: 3,
            establishment_address: "Rabat Hay Riad",
            rating: 4.7,
            price: 350,
            Location: { 
                location_city: "Rabat", 
                location_latitude: "33.9511", 
                location_longitude: "-6.8689",
                location_code_postal: "10200",
                location_country: "Maroc"
            }
        },
        {
            establishment_id: 4,
            establishment_uuid: "uuid-4",
            establishment_label: "Spa Royal Hamam",
            establishment_description: "Rituel de bien-être ancestral et massages du monde.",
            type_establishment_id: 4,
            establishment_address: "Rabat Centre",
            rating: 5.0,
            price: 500,
            Location: { 
                location_city: "Rabat", 
                location_latitude: "34.0211", 
                location_longitude: "-6.8389",
                location_code_postal: "10300",
                location_country: "Maroc"
            }
        }
    ],
    "/locations": ["Rabat", "Casablanca", "Marrakech", "Tanger"],
    "/work-locations": [
        { id: 1, label: "Rabat" },
        { id: 2, label: "Casablanca" }
    ],
};

// Interceptor to return mock data if API URL is missing or request fails
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        const url = error.config.url || "";
        console.warn(`API Request to ${url} failed or intercepted, providing mock data.`);
        
        // Find matching mock data (ignoring query params)
        let data = [];
        if (url.includes("/type-establishments")) {
            data = mockData["/type-establishments"];
        } else if (url.includes("/establishment")) {
            if (url.match(/\/establishment\/[a-zA-Z0-9-]+$/)) {
                // Exact ID/UUID match (e.g., /establishment/123)
                data = mockData["/establishment"][0];
            } else if (url.includes("?") || url.endsWith("/establishment")) {
                // Handle filtering
                const queryString = url.split('?')[1] || "";
                const params = new URLSearchParams(queryString);
                const typeId = params.get("type_establishment_id");
                const city = params.get("location_city");

                let filteredData = [...mockData["/establishment"]];
                
                if (typeId && typeId !== "null" && typeId !== "") {
                    filteredData = filteredData.filter(e => String(e.type_establishment_id) === String(typeId));
                }
                
                if (city && city !== "null" && city !== "") {
                    filteredData = filteredData.filter(e => 
                        e.Location.location_city.toLowerCase().includes(city.toLowerCase())
                    );
                }
                
                data = filteredData;
            }
        } else if (url.includes("/locations")) {
            data = mockData["/locations"];
        } else if (url.includes("/work-locations")) {
            data = mockData["/work-locations"];
        } else if (url.includes("/products/establishment/")) {
            data = [
                { id: 1, product_label: "Coupe Homme", product_price: 150, product_duration: 30 },
                { id: 2, product_label: "Coupe + Barbe", product_price: 250, product_duration: 45 },
                { id: 3, product_label: "Massage Relaxant", product_price: 400, product_duration: 60 }
            ];
        } else if (url.includes("/establishment-personnel/")) {
            data = [
                { id: 1, personnel_name: "Ahmed", personnel_role: "Coiffeur Senior" },
                { id: 2, personnel_name: "Sara", personnel_role: "Esthéticienne" }
            ];
        } else if (url.includes("/schedule/")) {
            data = { id: 1, schedule_uuid: "s-1", establishment_uuid: "uuid-1" };
        } else if (url.includes("/appointments")) {
            data = [
                { appointment_id: 1, schedule_uuid: "s-1", user_uuid: "u-1", appointment_date: new Date().toISOString() }
            ];
        } else if (url.includes("/users/")) {
            data = { user_uuid: "u-1", user_first_name: "Jean", user_name: "Dupont", user_email: "jean@example.com" };
        }

        return Promise.resolve({
            data: data,
            status: 200,
            statusText: "OK",
            headers: {},
            config: error.config,
        });
    }
);

export const login = async (email, password) => {
    try {
        if (!API_URL) return { user: { name: "Mock User" }, token: "mock-token" };
        const response = await apiClient.post("/auth/token", {
            email,
            password,
        });

        return response.data;
    } catch (error) {
        console.error("Error during login:", error);
        return { user: { name: "Mock User" }, token: "mock-token" };
    }
};

export const register = async (userData) => {
    try {
        if (!API_URL) return { success: true, user: userData };
        const response = await apiClient.post("/users", userData);

        return response.data;
    } catch (error) {
        console.error("Error during registration:", error);
        return { success: true, user: userData };
    }
};
