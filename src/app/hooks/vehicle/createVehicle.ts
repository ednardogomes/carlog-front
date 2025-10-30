import { AxiosError } from "axios";
import { createVehicleService } from "../../services/vehicleService";
import { MessageHandler } from "../../types/message";
import { CreateVehicle } from "../../types/vehicles";

export default async function useCreateVehicle(vehicle: CreateVehicle, message: MessageHandler) {
    try {
        const response = await createVehicleService(vehicle);
        message({ type: 'success', message: response });
    } catch (error) {
        if (error instanceof AxiosError) {
            message({ type: 'error', message: error.response?.data?.message });
        }
        return 'Erro interno ao criar veículo';
    }
}