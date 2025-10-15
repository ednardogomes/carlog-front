import api from "./api";

export const getVehiclesService = async () => {
    const response = await api.get('/vehicle');
    return response.data;
}

export const getVehicleByIdService = async (id: string) => {
    const response = await api.get(`/vehicle/${id}`)
    return response.data;
}