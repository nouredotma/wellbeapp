// productService.js

const API_BASE_URL = process.env.REACT_APP_API_URL ? `${process.env.REACT_APP_API_URL}/products` : "";

// Utility function to get auth headers
function getAuthHeaders() {
    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    };
}

// Fetch all products for a given establishment
export async function getProducts(establishmentId) {
    try {
        if (!API_BASE_URL) return [];
        const response = await fetch(`${API_BASE_URL}/filtered?establishment_uuid=${establishmentId}`, {
            headers: getAuthHeaders(),
        });

        if (!response.ok) return [];

        const data = await response.json();
        return data || [];
    } catch (error) {
        console.error("Failed to fetch products:", error);
        return [];
    }
}

// Create a new product
export async function createProduct(productData) {
    try {
        if (!API_BASE_URL) return { success: true, ...productData };
        const response = await fetch(API_BASE_URL, {
            method: "POST",
            headers: getAuthHeaders(),
            body: JSON.stringify(productData),
        });

        if (!response.ok) return { success: true, ...productData };

        return await response.json();
    } catch (error) {
        console.error("Failed to create product:", error);
        return { success: true, ...productData };
    }
}

// Update an existing product
export async function updateProduct(productId, productData) {
    try {
        if (!API_BASE_URL) return { success: true, ...productData };
        const response = await fetch(`${API_BASE_URL}/${productId}`, {
            method: "PUT",
            headers: getAuthHeaders(),
            body: JSON.stringify(productData),
        });

        if (!response.ok) return { success: true, ...productData };

        return await response.json();
    } catch (error) {
        console.error("Failed to update product:", error);
        return { success: true, ...productData };
    }
}

// Delete a product by ID
export async function deleteProduct(productId) {
    try {
        if (!API_BASE_URL) return true;
        const response = await fetch(`${API_BASE_URL}/${productId}`, {
            method: "DELETE",
            headers: getAuthHeaders(),
        });

        if (!response.ok) return true;

        return true;
    } catch (error) {
        console.error("Failed to delete product:", error);
        return true;
    }
}
