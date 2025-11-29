import { deleteVehicleService } from "../../app/services/vehicleService";
import { MessageHandler } from "../../app/types/message";

export default async function excludeVehicle(id: string | undefined, message: MessageHandler) {
    try {
        const response = await deleteVehicleService(id)
        message({ type: 'success', message: response });
    } catch (error) {
        if (error instanceof Error && error.message === 'string') {
            message({ type: 'error', message: error.message });
        }
        return 'Erro interno ao excluir veículo'
    }
}