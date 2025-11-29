import { CreateVehicle, UpdateVehicle } from "../types/vehicles";
import api from "./api";

export const getVehiclesService = async () => {
    const response = await api.get('/vehicle');
    return response.data;
}

export const getVehicleByIdService = async (id: string) => {
    const response = await api.get(`/vehicle/${id}`)
    return response.data;
}

export const createVehicleService = async (vehicle: CreateVehicle): Promise<string> => {
    const { maintenances, ...vehicleData } = vehicle;
    const response = await api.post('/vehicle', vehicleData);
    return response.data;
}

export const updateVehicleService = async (vehicle: UpdateVehicle): Promise<string> => {
    const { id, maintenances, ...vehicleData } = vehicle;
    const response = await api.put(`/vehicle/${id}`, vehicleData);
    return response.data;
}

export const deleteVehicleService = async (id: string | undefined): Promise<string> => {
    const response = await api.delete(`/vehicle/${id}`);
    return response.data;
}

