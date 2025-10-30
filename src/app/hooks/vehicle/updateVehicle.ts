import { updateVehicleService } from "@/app/services/vehicleService";
import { MessageHandler } from "@/app/types/message";
import { UpdateVehicle } from "@/app/types/vehicles";
import { AxiosError } from "axios";

export default async function useUpdateVehicle(vehicle: UpdateVehicle, message: MessageHandler) {
    try {
        const response = await updateVehicleService(vehicle);
        message({ type: 'success', message: `${response}` });
        return response;
    } catch (error) {
        if (error instanceof AxiosError) {
            message({ type: 'error', message: error.response?.data?.message });
        }
        return 'Erro interno ao criar veículo';
    }
}