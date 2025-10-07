import api from "./api";

export const getVehiclesService = async () => {
    const response = await api.get('/vehicle');
    return response.data;
}