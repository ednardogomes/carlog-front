import { CreateMaintenance, UpdateMaintenance } from "../types/maintenance";
import api from "./api";

export const getMaintenancesService = async () => {
    const response = await api.get('/maintenance');
    return response.data;

}

export const getMaintenancesByVehicleService = async (vehicleId: string | null) => {
    const response = await api.get(`maintenance/per-vehicle/${vehicleId}`);
    return response.data;
}

export const createMaintenanceService = async (vehicle_id: string | null, data: CreateMaintenance) => {
    const { description, ...maintenanceData } = data
    const response = await api.post(`maintenance/${vehicle_id}`, maintenanceData)
    return response.data;
}

export const updateMaintenanceService = async (data: UpdateMaintenance) => {
    const { id, description, ...maintenanceData } = data
    const response = await api.put(`maintenance/${id}`, maintenanceData)
    return response.data;
}

export const deleteMaintenanceService = async (id: string | null) => {
    const response = await api.delete(`maintenance/${id}`)
    return response.data;
}