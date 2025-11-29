import { updateVehicleService } from "@/app/services/vehicleService";
import { MessageHandler } from "@/app/types/message";
import { UpdateVehicle } from "@/app/types/vehicles";
import { AxiosError } from "axios";

export default async function updateVehicle(vehicle: UpdateVehicle, message: MessageHandler) {
    try {
        const response = await updateVehicleService(vehicle);
        message({ type: 'success', message: `${response}` });
        return response;
    } catch (error) {
        if (error instanceof Error && error.message === 'string') {
            message({ type: 'error', message: error.message });
        }
        return 'Erro interno ao atualizar veículo';
    }
}