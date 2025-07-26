import axios from 'axios';

// Automatically pick from VITE_API_BASE_URL or fallback to localhost
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8081/api';

// --- Lawyer API Calls ---
export const getLawyers = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/lawyers`);
        return response.data;
    } catch (error) {
        console.error("Error fetching lawyers:", error);
        return [];
    }
};

export const createLawyer = async (lawyerData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/lawyers`, lawyerData);
        return response.data;
    } catch (error) {
        console.error("Error creating lawyer:", error);
        throw error;
    }
};

export const deleteLawyer = async (lawyerId) => {
    try {
        await axios.delete(`${API_BASE_URL}/lawyers/${lawyerId}`);
    } catch (error) {
        console.error(`Error deleting lawyer ${lawyerId}:`, error);
        throw error;
    }
};

// --- Request API Calls ---
export const getRequests = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/requests`);
        return response.data;
    } catch (error) {
        console.error("Error fetching requests:", error);
        return [];
    }
};

export const createRequest = async (requestData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/requests`, requestData);
        return response.data;
    } catch (error) {
        console.error("Error creating request:", error);
        throw error;
    }
};

export const updateRequestStatus = async (requestId, newStatus) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/requests/${requestId}/status`, { status: newStatus });
        return response.data;
    } catch (error) {
        console.error(`Error updating status for request ${requestId}:`, error);
        throw error;
    }
};

export const deleteRequest = async (requestId) => {
    try {
        await axios.delete(`${API_BASE_URL}/requests/${requestId}`);
    } catch (error) {
        console.error(`Error deleting request ${requestId}:`, error);
        throw error;
    }
};
