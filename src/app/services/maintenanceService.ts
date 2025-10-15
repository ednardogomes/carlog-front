import api from "./api";

export const getMaintenancesService = async () => {
    const response = await api.get('/maintenance');
    return response.data;

}

export const getMaintenancesByVehicleService = async (vehicleId: string | null) => {
    const response = await api.get(`maintenance/per-vehicle/${vehicleId}`);
    return response.data;
}