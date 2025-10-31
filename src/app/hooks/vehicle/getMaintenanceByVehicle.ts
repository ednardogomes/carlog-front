import { useEffect, useState } from "react";
import { Maintenances } from "../../types/maintenance";
import { getMaintenancesByVehicleService } from "../../services/maintenanceService";

export default function useGetMaintenanceByVehicle(vehicleId: string | null) {
    const [maintenances, setMaintenances] = useState<Maintenances[] | null>([])
    const [loadingMaintenances, setLoadingMaintenances] = useState<boolean>()


    useEffect(() => {
        if (!vehicleId) {
            console.log('Selecione um veiculo para obter detalhes');
            return
        }
        async function getMaintenancesByVehicle() {
            try {
                setLoadingMaintenances(true)
                const maintenances = await getMaintenancesByVehicleService(vehicleId);
                setMaintenances(maintenances)
            } catch (error) {
                console.error("Error ao buscar maintenções por veículo:", error);
            } finally {
                setLoadingMaintenances(false)
            }
        }
        getMaintenancesByVehicle()
    }, [vehicleId])
    return { maintenances, loadingMaintenances }
}