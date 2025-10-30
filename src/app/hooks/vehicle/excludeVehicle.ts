import { deleteVehicleService } from "../../services/vehicleService";
import { MessageHandler } from "../../types/message";

export default async function useExcludeVehicle(id: string | undefined, message: MessageHandler) {
    try {
        const response = await deleteVehicleService(id)
        message({ type: 'success', message: response });
    } catch (error) {
        if (error instanceof Error && error.message === 'string') {
            message({ type: 'error', message: error.message });
        }
    }
}