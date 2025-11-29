import { MessageHandler } from "@/app/types/message";
import { updateMaintenanceService } from "@/app/services/maintenanceService";
import { UpdateMaintenance } from "@/app/types/maintenance";

export default async function updateMaintenance
    (
        maintenance: UpdateMaintenance,
        message: MessageHandler,
        updateOpen: () => void
    ) {
    try {
        const response = await updateMaintenanceService(maintenance)
        updateOpen()
        message({ type: 'success', message: response })
    } catch (error) {
        if (error instanceof Error && error.message === 'string') {
            message({ type: 'error', message: error.message });
        }
        return 'Erro interno ao atualizar manutenção';
    }
}