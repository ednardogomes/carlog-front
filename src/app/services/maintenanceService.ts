import api from "./api";

export const getMaintenancesService = async () => {
    try {
        const response = await api.get('/maintenance');
        return response.data;
    } catch (error) {
        console.error("erro ao buscar manutenções:", error);
        throw error;
    }
}

export const getMaintenancesByVehicleService = async (vehicleId: string) => {
    try {
        const response = await api.get(`maintenance/${vehicleId}`);
        return response.data;
    } catch (error) {
        console.error("erro ao buscar manutenções:", error);
        throw error;
    }
}