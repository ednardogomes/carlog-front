import { deleteMaintenanceService } from "@/app/services/maintenanceService";
import { MessageHandler } from "@/app/types/message";

export default async function excludeMaintenance(id: string | null, message: MessageHandler) {
    try {
        const response = await deleteMaintenanceService(id)
        message({ type: 'success', message: response })
    } catch (error) {
        if (error instanceof Error && error.message === 'string') {
            message({ type: 'error', message: error.message });
        }
        return 'Erro interno ao excluir manutenção';
    }
}