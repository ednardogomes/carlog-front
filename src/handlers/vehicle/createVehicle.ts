import { createVehicleService } from "../../app/services/vehicleService";
import { MessageHandler } from "../../app/types/message";
import { CreateVehicle } from "../../app/types/vehicles";

export default async function createVehicle(vehicle: CreateVehicle, message: MessageHandler) {
    try {
        const response = await createVehicleService(vehicle);
        message({ type: 'success', message: response });
    } catch (error) {
        if (error instanceof Error && error.message === 'string') {
            message({ type: 'error', message: error.message });
        }
        return 'Erro interno ao criar veículo';
    }
}