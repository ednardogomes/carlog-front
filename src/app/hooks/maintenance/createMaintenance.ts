import { createMaintenanceService } from "@/app/services/maintenanceService";
import { CreateMaintenance } from "@/app/types/maintenance";
import { MessageHandler } from "@/app/types/message";

export default async function createMaintenance(
    id: string,
    maintenance: CreateMaintenance,
    message: MessageHandler,
    updateOpen: () => void
) {
    try {
        const response = await createMaintenanceService(id, maintenance)
        updateOpen()
        message({ type: 'success', message: response })
    } catch (error) {
        if (error instanceof Error && error.message === 'string') {
            message({ type: 'error', message: error.message });
        }
        return 'Erro interno ao criar manutenção';
    }
}