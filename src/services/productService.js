// productService.js

const API_BASE_URL = "https://wellbe-api.onrender.com/api/v1/products";

// Utility function to get auth headers (in case your endpoints require authentication)
function getAuthHeaders() {
    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // Make sure token is stored in localStorage after login
    };
}

// Fetch all products for a given establishment
export async function getProducts(establishmentId) {
    try {
        const response = await fetch(`${API_BASE_URL}/filtered?establishment_uuid=${establishmentId}`, {
            headers: getAuthHeaders(),
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch products:", error);
        throw error;
    }
}

// Create a new product
export async function createProduct(productData) {
    try {
        const response = await fetch(API_BASE_URL, {
            method: "POST",
            headers: getAuthHeaders(),
            body: JSON.stringify(productData),
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Failed to create product:", error);
        throw error;
    }
}

// Update an existing product
export async function updateProduct(productId, productData) {
    try {
        const response = await fetch(`${API_BASE_URL}/${productId}`, {
            method: "PUT",
            headers: getAuthHeaders(),
            body: JSON.stringify(productData),
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Failed to update product:", error);
        throw error;
    }
}

// Delete a product by ID
export async function deleteProduct(productId) {
    try {
        const response = await fetch(`${API_BASE_URL}/${productId}`, {
            method: "DELETE",
            headers: getAuthHeaders(),
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        return true; // Success
    } catch (error) {
        console.error("Failed to delete product:", error);
        throw error;
    }
}
